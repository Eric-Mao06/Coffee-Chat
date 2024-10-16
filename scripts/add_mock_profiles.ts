import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { generate_embedding } from '../lib/openai';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const mockProfiles = [
  {
    name: 'Alice Johnson',
    role: 'Software Engineer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    projects: ['Web App Redesign', 'API Integration'],
    interests: ['Machine Learning', 'Web Development', 'Hiking'],
    hobbies: ['Photography', 'Rock Climbing']
  },
  {
    name: 'Bob Smith',
    role: 'Data Scientist',
    company: 'DataTech',
    location: 'New York, NY',
    projects: ['Predictive Analytics Model', 'Data Visualization Dashboard'],
    interests: ['Big Data', 'Artificial Intelligence', 'Statistics'],
    hobbies: ['Chess', 'Cooking']
  },
  {
    name: 'Carol Williams',
    role: 'UX Designer',
    company: 'DesignHub',
    location: 'Seattle, WA',
    projects: ['Mobile App UI', 'User Research Study'],
    interests: ['User-Centered Design', 'Accessibility', 'Prototyping'],
    hobbies: ['Painting', 'Yoga']
  },
  {
    name: 'David Brown',
    role: 'Product Manager',
    company: 'InnovateCo',
    location: 'Austin, TX',
    projects: ['Feature Prioritization', 'Product Launch'],
    interests: ['Agile Methodologies', 'Market Research', 'User Stories'],
    hobbies: ['Guitar', 'Volunteering']
  },
  {
    name: 'Eva Garcia',
    role: 'Cybersecurity Analyst',
    company: 'SecureNet',
    location: 'Washington, D.C.',
    projects: ['Network Security Audit', 'Incident Response Plan'],
    interests: ['Ethical Hacking', 'Cryptography', 'Risk Assessment'],
    hobbies: ['Martial Arts', 'Science Fiction Reading']
  }
];

async function addMockProfiles() {
  for (const profile of mockProfiles) {
    try {
      const interestsText = profile.interests.join(', ');
      const embedding = await generate_embedding(interestsText);

      const { data, error } = await supabase
        .from('alumni_profiles')
        .insert({
          ...profile,
          embedding: embedding
        })
        .select();

      if (error) {
        console.error('Error inserting profile:', error);
      } else {
        console.log('Profile added successfully:', data);
      }
    } catch (err) {
      console.error('Error generating embedding or inserting profile:', err);
    }
  }
}

addMockProfiles();
