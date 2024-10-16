import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function createAlumniProfilesTable() {
  const { error } = await supabase.rpc('create_alumni_profiles_table', {
    sql_query: `
      CREATE TABLE IF NOT EXISTS public.alumni_profiles (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id UUID REFERENCES auth.users(id),
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        company TEXT NOT NULL,
        location TEXT NOT NULL,
        projects TEXT[] NOT NULL,
        interests TEXT[] NOT NULL,
        hobbies TEXT[] NOT NULL,
        contact_info TEXT,
        embedding VECTOR(1536)
      );
    `
  });

  if (error) {
    console.error('Error creating alumni_profiles table:', error);
  } else {
    console.log('alumni_profiles table created successfully');
  }
}

createAlumniProfilesTable();
