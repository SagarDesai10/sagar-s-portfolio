export interface EducationModel {
  period: string;
  degree: string;
  institution: string;
  grade: string;
  details: string[];
}

export interface CertificationModel {
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface AchievementModel {
  title: string;
  description: string;
  year: string;
} 