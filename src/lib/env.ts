import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
  PAYOS_CLIENT_ID: z.string().min(1).optional(),
  PAYOS_API_KEY: z.string().min(1).optional(),
  PAYOS_CHECKSUM_KEY: z.string().min(1).optional(),
});

export const env = envSchema.parse(process.env);

export const integrationMode =
  env.NEXT_PUBLIC_SUPABASE_URL &&
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
  env.PAYOS_CLIENT_ID &&
  env.PAYOS_API_KEY &&
  env.PAYOS_CHECKSUM_KEY
    ? "production"
    : "mock";
