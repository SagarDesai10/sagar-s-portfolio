import { SkillCategory, SkillModel } from '../models/skill.model';

export const SKILLS_DATA: SkillModel[] = [
  // Backend
  {
    name: 'Java',
    level: 90,
    icon: 'devicon-java-plain colored',
    category: SkillCategory.BACKEND
  },
  {
    name: 'Spring Boot',
    level: 90,
    icon: 'devicon-spring-plain colored',
    category: SkillCategory.BACKEND
  },
  {
    name: 'Spring MVC',
    level: 85,
    icon: 'devicon-spring-plain colored',
    category: SkillCategory.BACKEND
  },
  {
    name: 'Quarkus',
    level: 80,
    icon: 'fas fa-cube',
    category: SkillCategory.BACKEND
  },
  {
    name: 'Microservices',
    level: 75,
    icon: 'fas fa-network-wired', 
    category: SkillCategory.BACKEND
  },

  // Frontend
  {
    name: 'HTML',
    level: 75,
    icon: 'devicon-html5-plain colored',
    category: SkillCategory.FRONTEND
  },
  {
    name: 'CSS',
    level: 70,
    icon: 'devicon-css3-plain colored',
    category: SkillCategory.FRONTEND
  },
  {
    name: 'JavaScript',
    level: 70,
    icon: 'devicon-javascript-plain colored',
    category: SkillCategory.FRONTEND
  },
  {
    name: 'Angular',
    level: 60,
    icon: 'devicon-angularjs-plain colored',
    category: SkillCategory.FRONTEND
  },

  // Database
  {
    name: 'PostgreSQL',
    level: 85,
    icon: 'devicon-postgresql-plain colored',
    category: SkillCategory.DATABASE
  },
  {
    name: 'MySQL',
    level: 75,
    icon: 'devicon-mysql-plain colored',
    category: SkillCategory.DATABASE
  },

  // DevOps
  {
    name: 'Git',
    level: 80,
    icon: 'devicon-git-plain colored',
    category: SkillCategory.DEVOPS
  },
  {
    name: 'Docker',
    level: 70,
    icon: 'devicon-docker-plain colored',
    category: SkillCategory.DEVOPS
  },

  // Data Management / Tools
  {
    name: 'Data Structure',
    level: 85,
    icon: 'fas fa-sitemap',
    category: SkillCategory.DATA_MANAGEMENT
  },
  {
    name: 'DBMS',
    level: 85,
    icon: 'fas fa-database',
    category: SkillCategory.DATA_MANAGEMENT
  }
];