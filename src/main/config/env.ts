export default {
  postgreUrl: process.env.POSTGRE_URL || 'localhost',
  port: process.env.PORT || 9000,
  youtubeKey:
    process.env.YOUTUBE_KEY || 'AIzaSyAcLpHknV0dQFWcUErgBiOWqB_gxxXRuTc',
  publicSupaBaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  publicSupaBaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
}
