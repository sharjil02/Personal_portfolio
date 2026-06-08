
export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  category: string;
  image?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Programming' | 'Web Development' | 'Database' | 'Data Analysis' | 'Data Science' | 'Data Warehouse' | 'Tools' | 'Cloud' | 'Concepts';
  color?: string; // Brand color or background class
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
