export default {
  postgreUrl: process.env.POSTGRE_URL || 'localhost',
  port: process.env.PORT || 9000,
  youtubeKey:
    process.env.YOUTUBE_KEY || 'AIzaSyAcLpHknV0dQFWcUErgBiOWqB_gxxXRuTc',
  publicSupaBaseUrl:
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    'https://kmudvvovqucxhlkrjouo.supabase.co',
  publicSupaBaseAnonKey:
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODUzMTQyNCwiZXhwIjoxOTU0MTA3NDI0fQ.Cbd-KkWqrqcWFMDtD0IEWNJmJqstFjhM_gsUlEkXRag'
}
