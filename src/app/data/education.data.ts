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
    name: 'JDBC',
    issuer: 'Coursera',
    year: '2022',
    link: 'https://drive.google.com/file/d/1Ns8xmFg3LDIks4YbwTmdpwvxisf586Ab/view?usp=drive_link'
  },
  {
    name: 'Java Script',
    issuer: 'University Of Michigan',
    year: '2022',
    link: 'https://drive.google.com/file/d/1NiWMnSNbvkIP_BIn_SjSFyXqir4F68rL/view?usp=drive_link'
  },
  {
    name: 'Web Development',
    issuer: 'UCDAVIS',
    year: '2023',
    link: 'https://drive.google.com/file/d/1H0Lz8s-36WGefkbMzG3qA8Hej16Usj5K/view?usp=drive_link'
  },
  {
    name: 'ML With Python',
    issuer: 'IBM',
    year: '2023',
    link: 'https://drive.google.com/file/d/1rfI4YqBP_XY3JcrJ37aOwLiweYR_6-Sg/view?usp=drive_link'
  },
  {
    name: 'Data Analysis With Python',
    issuer: 'IBM',
    year: '2022',
    link: 'https://drive.google.com/file/d/1zGI5LPVLzgszJxmMbQ_6pH5vUCvDvjHR/view?usp=drive_link'
  },
  {
    name: 'DevOps',
    issuer: 'IBM',
    year: '2023',
    link: 'https://drive.google.com/file/d/105wN0TWtMKvKQ3FlWdThzxUNKpBGyvzn/view?usp=drive_link'
  },
  {
    name: 'Peer-to-Peer Protocols and LAN',
    issuer: 'University of Colorado',
    year: '2022',
    link: 'https://drive.google.com/file/d/1n1HAO1hYNE-a9jWpYfnxMOFLvMKZrEQ6/view?usp=drive_link'
  },
  {
    name: 'Internet Of Things',
    issuer: 'University of California,Irvine',
    year: '2023',
    link: 'https://drive.google.com/file/d/1HhBp-2P8TGyxh7AvsPtPtltJiJKPtS3B/view?usp=drive_link'
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
 