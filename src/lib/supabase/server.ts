import { createClient } from "@supabase/supabase-js";
import { env } from "@/lib/env";

export function createSupabaseServerClient() {
  if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return {
      mode: "mock" as const,
      reason: "Supabase public URL or anon key is missing.",
    };
  }

  return {
    client: createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
    mode: "production" as const,
  };
}

export function createSupabaseAdminClient() {
  if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
    return {
      mode: "mock" as const,
      reason: "Supabase service role key is missing.",
    };
  }

  return {
    client: createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY),
    mode: "production" as const,
  };
}
