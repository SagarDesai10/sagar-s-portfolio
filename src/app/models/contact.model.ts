export interface ContactModel {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfoModel {
  email: string;
  location: string;
  socialLinks: {
    github: string;
    linkedin: string;
    leetcode?: string;
    twitter?: string;
    codechef?:string;
  };
} 