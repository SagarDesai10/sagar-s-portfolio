export interface SkillModel {
  name: string;
  level: number; // 0-100
  icon?: string;
  category: SkillCategory;
}

export enum SkillCategory {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  DATABASE = 'Database',
  DEVOPS = 'DevOps',
  TOOLS = 'Tools'
} 