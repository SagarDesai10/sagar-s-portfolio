import { AchievementModel, CertificationModel, EducationModel } from '../models/education.model';

export const EDUCATION_DATA: EducationModel[] = [
  {
    period: '2020 - 2024',
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'G H Patel College of Engineering & Technology ',
    grade: 'CGPA: 8.69/10',
    details: [
      'Focused on core computer science concepts, data structures, algorithms, and software development.',
      'Completed coursework in Java, Object-Oriented Programming, Database Systems, and Web Development.',
      'Participated in science exhibitions and programming competitions.'
    ]
  },
  {
    period: '2018 - 2020',
    degree: 'Higher Secondary Education (Science)',
    institution: 'Gujarat State Board',
    grade: 'Percentage: 82%',
    details: [
      'Specialized in Physics, Chemistry, Mathematics, and Computer Science.',
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationModel[] = [
  {
    name: 'AMCAT',
    issuer: 'Pivotal',
    year: '2023',
    link: '#'
  },
  {
    name: 'Java Coursera',
    issuer: 'Oracle',
    year: '2022',
    link: '#'
  }
];

export const ACHIEVEMENTS_DATA: AchievementModel[] = [
  {
    title: 'LeetCode',
    description: 'Solved 200+ problems on leetcode',
    year: ''
  },
  {
    title: 'Codechef',
    description: 'Participated in 35+ CodeChef Contests and solved 150+',
    year: ''
  }
]; 
 