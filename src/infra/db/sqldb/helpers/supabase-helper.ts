import { createClient } from '@supabase/supabase-js'
import env from 'main/config/env'
export const supabase = createClient(
  env.publicSupaBaseUrl,
  env.publicSupaBaseAnonKey
)
