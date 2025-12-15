import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Lazy initialization to prevent build errors during static generation
let supabaseInstance: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (typeof window === 'undefined') {
    // During SSR/build, check if env vars are available
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) return null;
    return createClient(url, key);
  }

  // Client-side: create once and reuse
  if (!supabaseInstance) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (url && key) {
      supabaseInstance = createClient(url, key);
    }
  }
  return supabaseInstance;
}

// For backwards compatibility - but prefer getSupabase()
export const supabase = typeof window !== 'undefined' ? getSupabase() : null;
