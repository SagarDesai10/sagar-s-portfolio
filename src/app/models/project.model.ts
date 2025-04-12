export interface ProjectModel {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  details?: string;
} 