export interface ProjectModel {
  title: string;
  description: string;
  technologies: string[];
  category:ProjectCategory;
  github?: string;
  demo?: string;
  details?: string;
} 


export enum ProjectCategory{

  BACKEND='Backend',
  FRONTEND='Frontend',
  FULLSTACK='Fullstack',
  ML='Machine Learning'


}