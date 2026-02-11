// ตั้งค่าการเชื่อมต่อกับ Supabase
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://omvpiqtrbbvephnrgrtp.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tdnBpcXRyYmJ2ZXBobnJncnRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1MTkxNDIsImV4cCI6MjA4NTA5NTE0Mn0.DOVZj0IttVmDyUhEukn0JH9RSXRvUjhl-0DiHHsJCBs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
