import type { SkillGroup } from "@/types/content";

/**
 * Source of truth: user-provided skills JSON. Skill names are verbatim;
 * category keys are rendered with proper English labels. The JSON carries
 * no proficiency levels, so `level` is omitted (type makes it optional).
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "languages-frameworks",
    title: "Languages & Frameworks",
    icon: "Code",
    skills: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "NodeJs" },
      { name: "NestJS" },
      { name: "Express" },
      { name: "Go" },
      { name: "Rust" },
    ],
  },
  {
    id: "apis-protocols",
    title: "APIs & Protocols",
    icon: "Network",
    skills: [
      { name: "REST" },
      { name: "gRPC" },
      { name: "Protocol Buffers" },
      { name: "WebSockets" },
      { name: "TCP" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL(PostGIS, TimescaleDB)" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "Database Modeling" },
      { name: "Query Optimization" },
      { name: "Indexing" },
    ],
  },
  {
    id: "messaging-streaming",
    title: "Messaging & Streaming",
    icon: "Waypoints",
    skills: [
      { name: "Apache Kafka (KRaft)" },
      { name: "Event-Driven Architecture" },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "Google Cloud Platform (GCP)" },
      { name: "GitLab CI/CD" },
      { name: "Nginx" },
      { name: "Docker" },
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: "Lock",
    skills: [
      { name: "JWT Authentication" },
      { name: "Role-Based Access Control (RBAC)" },
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring",
    icon: "Gauge",
    skills: [{ name: "Grafana" }, { name: "Logging" }],
  },
  {
    id: "practices",
    title: "Practices",
    icon: "ListChecks",
    skills: [
      { name: "Microservices Architecture" },
      { name: "System Design" },
      { name: "Unit Testing" },
      { name: "Integration Testing" },
      { name: "Agile" },
    ],
  },
];
