export interface AboutModel {
  name: string;
  title: string;
  bio: string;
  description: string[];
  image: string;
  resumeLink: string;
  links: {
    github: string;
    linkedin: string;
    leetcode:string;
    email: string;
  };
} 