import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { setTimeout as delay } from "node:timers/promises";

async function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close(() => {
        if (address && typeof address === "object") {
          resolve(address.port);
          return;
        }
        reject(new Error("Could not allocate a free port"));
      });
    });
  });
}

function spawnProcess(command, args, options = {}) {
  return spawn(command, args, {
    stdio: "inherit",
    shell: false,
    windowsHide: true,
    ...options,
  });
}

async function waitForServer(targetUrl, timeoutMs = 120_000) {
  const startedAt = Date.now();
  let lastError;

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(targetUrl);
      if (response.ok) {
        return;
      }
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }

    await delay(500);
  }

  throw new Error(`Timed out waiting for ${targetUrl}: ${lastError?.message ?? "no response"}`);
}

async function stopProcessTree(child) {
  if (!child.pid || child.exitCode !== null) {
    return;
  }

  const exited = new Promise((resolve) => {
    child.once("exit", resolve);
  });

  child.kill();

  const directKillWorked = await Promise.race([
    exited.then(() => true),
    delay(2_000).then(() => false),
  ]);

  if (directKillWorked || child.exitCode !== null) {
    return;
  }

  if (process.platform === "win32") {
    await new Promise((resolve) => {
      const killer = spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], {
        stdio: "ignore",
        windowsHide: true,
      });
      killer.on("exit", resolve);
      killer.on("error", resolve);
    });
    return;
  }

  child.kill("SIGTERM");
  await delay(1500);
  if (child.exitCode === null) {
    child.kill("SIGKILL");
  }
}

async function run() {
  const port = await getFreePort();
  const url = `http://localhost:${port}`;
  const server = spawnProcess(process.execPath, [
    "node_modules/next/dist/bin/next",
    "dev",
    "-p",
    String(port),
    "-H",
    "localhost",
  ]);

  try {
    await waitForServer(url);

    const testProcess = spawnProcess(process.execPath, [
      "node_modules/playwright/cli.js",
      "test",
      "--config=playwright.config.ts",
    ], {
      env: {
        ...process.env,
        PLAYWRIGHT_BASE_URL: url,
      },
    });

    const exitCode = await new Promise((resolve, reject) => {
      testProcess.on("exit", (code) => resolve(code ?? 1));
      testProcess.on("error", reject);
    });

    process.exitCode = exitCode;
  } finally {
    await stopProcessTree(server);
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
