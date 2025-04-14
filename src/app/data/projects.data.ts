import { ProjectModel } from '../models/project.model';

export const PROJECTS_DATA: ProjectModel[] = [
  {
    title: 'POC - Spring Boot Scalable Backend',
    description: 'A robust backend template demonstrating scalable architecture with advanced Spring Boot features.',
    image: 'assets/images/projects/ecommerce.jpg',
    technologies:  [
      'Spring Boot',
      'Spring Security',
      'JWT',
      'Swagger',
      'Hibernate Envers',
      'AOP',
      'MapStruct',
      'SQL ResultSet Mapping',
      'Logback',
      'Resilience4j',
      'Eureka Client',
      'JPA Criteria API',
      'Specification'
    ],
    github: 'https://github.com/SagarDesai10/spring-boot-scalable-backend',
    demo: 'https://github.com/SagarDesai10/spring-boot-scalable-backend',
    featured: false,
    details: `This proof-of-concept (POC) showcases a production-ready, scalable backend system built with Spring Boot. 
    It includes JWT-based authentication and authorization using Spring Security, API documentation with Swagger, 
    and entity auditing powered by Hibernate Envers. It applies Aspect-Oriented Programming (AOP) for cross-cutting concerns 
    and uses MapStruct for object mapping. 
    
    It supports advanced JPA querying through Criteria API and Specification, 
    and leverages SQL ResultSet Mapping for custom native queries. 
    
    For reliability, it integrates Resilience4j with Circuit Breaker and Retry patterns. 
    Logback is configured for structured logging, and the application registers as a Eureka Client for service discovery. 
    
    Additionally, it supports exporting data in CSV, PDF, and XLS formats—making it suitable for enterprise-grade reporting.`
  },
  {
    title: 'POC - Spring Boot Email Service',
    description: 'A microservice to send emails using Spring Boot and JavaMailSender',
    image: 'assets/images/projects/ecommerce.jpg',
    technologies: ['Spring Boot', 'JavaMailSender', 'SMTP'],
    github: 'https://github.com/SagarDesai10/email-service',
    demo: 'https://github.com/SagarDesai10/email-service',
    featured: false,
    details: 'This proof-of-concept (POC) demonstrates a simple and extensible email service built using Spring Boot. It encapsulates the core functionality of sending plain text and HTML emails through configurable SMTP settings. The service provides a REST API to send emails with support for multiple recipients (To, CC, BCC) and is structured to be easily integrated into larger microservices architectures or standalone applications. '
  },
  {
    title: 'POC - Spring Boot API Gateway',
    description: 'Implements the core functionalities of an API Gateway using Spring Cloud Gateway.',
    image: 'assets/images/projects/api-gateway.jpg',
    technologies: ['Spring Boot', 'Spring Cloud Gateway', 'Eureka', 'Circuit Breaker', 'JWT'],
    github: 'https://github.com/SagarDesai10/spring-cloud-gateway',
    demo: 'https://github.com/SagarDesai10/spring-cloud-gateway',
    featured: false,
    details: `This proof-of-concept (POC) implements an API Gateway using Spring Cloud Gateway. It acts as the single entry point 
    for routing requests to various microservices within the system. The gateway handles dynamic routing, request filtering, 
    and load balancing. 
    
    It integrates with Eureka for service discovery, allowing seamless communication between services. 
    Security is enforced through JWT token validation at the gateway level to centralize authentication and authorization. 
    
    Resilience is achieved via built-in support for Circuit Breakers, allowing graceful degradation of services during failures. 
    This POC provides a foundational structure for building scalable and secure API gateway layers in microservices architectures.`
  },
  {
    title: 'POC - Distributed Tracing with OpenTelemetry & Jaeger',
    description: 'Implements distributed tracing using OpenTelemetry and visualizes traces with Jaeger.',
    image: 'assets/images/projects/opentelemetry-jaeger.jpg',
    technologies: ['Spring Boot', 'OpenTelemetry', 'Jaeger', 'Eureka', 'Microservices'],
    github: 'https://github.com/SagarDesai10/openTelemetry-Jaeger',
    demo: 'https://github.com/SagarDesai10/openTelemetry-Jaeger',
    featured: false,
    details: `This proof-of-concept (POC) demonstrates distributed tracing in a microservices architecture using OpenTelemetry with Jaeger as the trace visualizer. 
    It integrates OpenTelemetry SDKs to automatically collect and export trace data from Spring Boot services. 
    
    The services are registered with Eureka for service discovery and communicate via REST APIs, with tracing information propagated across service calls. 
    Jaeger provides a UI to explore and analyze request flows, latency bottlenecks, and dependency graphs, helping improve observability and debugging in complex systems.`
  },
  {
    title: 'POC - Distributed Tracing with Micrometer & Zipkin',
    description: 'Implements distributed tracing using Spring Boot, Micrometer, and Zipkin for trace visualization.',
    image: 'assets/images/projects/micrometer-zipkin.jpg',
    technologies: ['Spring Boot', 'Micrometer', 'Zipkin', 'Eureka', 'Microservices'],
    github: 'https://github.com/SagarDesai10/micrometer-zipkin',
    demo: 'https://github.com/SagarDesai10/micrometer-zipkin',
    featured: false,
    details: `This POC showcases how to implement distributed tracing using Micrometer with Zipkin in a Spring Boot microservices setup. 
    Each service is instrumented using Micrometer to capture trace and span data, which is then exported to Zipkin for visualization.
    
    The services are part of a Eureka-based service discovery ecosystem, and trace context is propagated seamlessly across REST calls. 
    Zipkin’s UI enables real-time tracing analysis, helping developers monitor request flows, measure performance, and identify failures. 
    This setup is lightweight, easy to configure, and ideal for gaining observability in Spring-based distributed systems.`
  },
  {
    title: 'Food Website',
    description: 'A static food ordering website built with HTML, CSS, and JavaScript.',
    image: 'assets/images/projects/food-website.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/SagarDesai10/Food-Web-Site',
    demo: 'https://food-web-site-orpin.vercel.app/',
    featured: false,
    details: `This project is a responsive and visually appealing static food website built using pure HTML, CSS, and JavaScript. 
    It showcases a modern layout featuring sections like a homepage, menu, about, and contact. 
    
    The site includes interactive elements such as navigation links, hover effects, and smooth scrolling. 
    It’s fully responsive across devices and serves as a beginner-friendly showcase of front-end development skills 
    without any frameworks or libraries. Ideal for learning structure, styling, and basic interactivity in web development.`
  },
  {
    title: 'Health Insurance Cost ML',
    description: 'A machine learning model to predict health insurance costs based on various factors.',
    image: 'assets/images/projects/health-insurance-ml.jpg',
    technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-Learn', 'Matplotlib'],
    github: 'https://github.com/SagarDesai10/Health-Insurance-Cost-ML-',
    demo: 'https://github.com/SagarDesai10/Health-Insurance-Cost-ML-',
    featured: false,
    details: `This project uses machine learning techniques to predict health insurance costs based on various features such as age, 
    sex, BMI, children, smoking habits, and region. The model leverages data pre-processing, feature engineering, and multiple 
    regression algorithms to provide accurate predictions of health insurance charges.`
  }
]; 