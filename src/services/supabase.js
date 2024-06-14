import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hqhoabcocqxxicscusnz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxaG9hYmNvY3F4eGljc2N1c256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2NDcxMjgsImV4cCI6MjAxMDIyMzEyOH0.w12QBWlxtordlENZt9u4aXjrzcSDK4L1RFKw0umgxDw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
