const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function createAlumniProfilesTable() {
  try {
    // Check if the table exists
    const { data, error } = await supabase
      .from('alumni_profiles')
      .select('*')
      .limit(1);

    if (error && error.code === '42P01') {
      // Table doesn't exist, so create it
      const { error: createError } = await supabase
        .from('alumni_profiles')
        .insert([
          {
            id: '00000000-0000-0000-0000-000000000000',
            user_id: '00000000-0000-0000-0000-000000000000',
            name: 'Dummy User',
            role: 'Dummy Role',
            company: 'Dummy Company',
            location: 'Dummy Location',
            projects: ['Dummy Project'],
            interests: ['Dummy Interest'],
            hobbies: ['Dummy Hobby'],
            contact_info: 'dummy@example.com',
            embedding: Array(1536).fill(0)
          }
        ])
        .select();

      if (createError) {
        console.error('Error creating alumni_profiles table:', createError);
      } else {
        console.log('alumni_profiles table created successfully');
      }
    } else if (error) {
      console.error('Error checking alumni_profiles table:', error);
    } else {
      console.log('alumni_profiles table already exists');
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

createAlumniProfilesTable();
