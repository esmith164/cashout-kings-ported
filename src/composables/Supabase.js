// UseSupabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xkqetvidjvlvgjjjpclc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrcWV0dmlkanZsdmdqampwY2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA2MzA5MTUsImV4cCI6MTk4NjIwNjkxNX0.HWzK8YIlKw3XR0RZiJkRDExFdq-cFNyOp08q5pz9Hs4";

export function useSupabase() {
  return createClient(supabaseUrl, supabaseKey)
}

