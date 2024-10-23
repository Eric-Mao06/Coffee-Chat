export interface AlumniProfile {
  id: string;
  user_id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  projects: string[];
  interests: string[];
  hobbies: string[];
  contact_info?: string;
  blurb?: string;
  resume_embedding?: number[] | null;
  summary?: string;
  education?: string[];
  experience?: string[];
  linkedin_url?: string;
}