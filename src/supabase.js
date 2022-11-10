import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qqavcihjsmlvnrjktxba.supabase.co' //import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxYXZjaWhqc21sdm5yamt0eGJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc5MzE1NTYsImV4cCI6MTk4MzUwNzU1Nn0.1NlJ37pBq9riF3Bq3LPm5LyyIg94hj2vpCbX5Li1w_4'//import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)