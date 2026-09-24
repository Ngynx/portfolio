import type { ExperienceEntry } from "@/types/content";

/**
 * Source of truth: user-provided experience JSON. The third entry's source
 * list repeated the same activity twice — deduplicated here.
 */
export const experiences: ExperienceEntry[] = [
  {
    id: "dh-partner",
    role: "Backend engineer",
    company: "D.H Partner",
    location: "Perú",
    startDate: "January 2025",
    endDate: "March 2026",
    bullets: [
      "Developed scalable backend services for real-time GPS tracking and fleet management.",
      "Integrated external systems and optimized performance with Apache Kafka and Redis.",
      "Developed GPS protocol decoders and backend services using Go and NestJS.",
      "Developed backend services to automate incident validation and reporting workflows.",
      "Implemented browser automation with Puppeteer to integrate with external web platforms.",
      "Designed a reliable sequential job execution engine for long-running automation tasks.",
      "Built workflow and ticket lifecycle management for end-to-end process automation.",
    ],
  },
  {
    id: "intelcon-group",
    role: "Backend engineer",
    company: "Intelcon Group",
    location: "Perú",
    startDate: "April 2021",
    endDate: "January 2025",
    bullets: [
      "Developed backend services for centralized user, role, and workgroup management.",
      "Built shared configuration services to support application-wide settings and customization.",
      "Designed a centralized resource management platform to improve consistency across applications.",
      "Developed backend services for incident registration, dispatch, and lifecycle management.",
      "Implemented Kanban and map-based workflows for incident tracking and resource assignment.",
      "Built gRPC integrations to exchange operational data with external subsystems.",
      "Developed operational metrics and reporting features to support incident monitoring.",
    ],
  },
  {
    id: "filipenses-mina-de-oro",
    role: "Web developer",
    company: "Filipenses Mina de oro",
    location: "Perú",
    startDate: "January 2020",
    endDate: "March 2020",
    bullets: [
      "Developed a prototype web application for customer and user management using Java Spring Boot and MySQL.",
      "Designed and implemented backend features supporting user authentication and customer management.",
    ],
  },
];
