import { ExperienceModel } from '../models/experience.model';

export const EXPERIENCE_DATA: ExperienceModel[] = [
  {
    period: 'July 2024 - Present',
    title: 'Junior Software Developer',
    company: 'Grovetech Solutions',
    description: 'Working as a Java Backend Developer specializing in microservices architecture and secure, scalable RESTful APIs.',
    responsibilities: [
      'Developed and secured microservices using Spring Boot with Spring Security for authentication and authorization.',
      'Utilized MapStruct for efficient DTO mapping and Hibernate for ORM in multi-module architecture.',
      'Created and maintained RESTful APIs with proper documentation using Swagger/OpenAPI.',
      'Implemented entity auditing and applied AOP for cross-cutting concerns such as logging and exception handling.',
      'Built dynamic queries using Criteria API and Specification pattern for flexible data access.',
      'Managed and optimized PostgreSQL databases to ensure high performance and data integrity.',
      'Integrated distributed tracing using Micrometer with Zipkin and OpenTelemetry with Jaeger.',
      'Enhanced system resilience using Resilience4j with circuit breaker and retry mechanisms.'
    ]
  },
  {
    period: 'Dec 2023 - Jun 2024',
    title: 'Full Stack Java Developer Intern',
    company: 'Finlogic Technology',
    description: 'Worked on full-stack development using Java technologies and contributed to a live enterprise application (MDMS).',
    responsibilities: [
      'Developed an Expense Manager application using JSP and Servlet for managing personal finance.',
      'Built employee management features using Spring Framework with MultiAction Controllers and annotations.',
      'Contributed to a live project MDMS (Marketing and Distribution Management System), enhancing real-world enterprise functionality.',
      'Implemented the Courier Agency Rate Master module to manage dynamic rate structures.',
      'Worked on the Customer Care module including Distribute Queries and Update Mass Query features for efficient issue tracking.',
      'Utilized technologies such as HTML, CSS, JavaScript, JSP, Servlet, Spring, and MySQL throughout the internship.'
    ]
  }
]; 