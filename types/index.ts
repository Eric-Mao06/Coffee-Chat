export interface AlumniProfile {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  projects: string[];
  interests: string[];
  hobbies: string[];
  contact_info?: string;
  blurb?: string;
}
