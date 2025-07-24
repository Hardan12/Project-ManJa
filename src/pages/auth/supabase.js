import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ukvwqoljtaxvtvnzzgid.supabase.co"; // ganti dengan milikmu
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrdndxb2xqdGF4dnR2bnp6Z2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyMzc4MDMsImV4cCI6MjA2ODgxMzgwM30.Ngm8yGWjdyB6VNfDalmUydG5GSdH8Ak6R_NuqHgm6lc"; // pakai anon key dari dashboard

export const supabase = createClient(supabaseUrl, supabaseKey);
