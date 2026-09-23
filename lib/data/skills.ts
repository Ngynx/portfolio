import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Python", level: "expert" },
      { name: "Go", level: "advanced" },
      { name: "REST / gRPC", level: "expert" },
    ],
  },
  {
    id: "data",
    title: "Data",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "expert" },
      { name: "Redis", level: "advanced" },
      { name: "Kafka", level: "advanced" },
      { name: "ClickHouse", level: "intermediate" },
    ],
  },
  {
    id: "infra",
    title: "Infrastructure",
    icon: "Cloud",
    skills: [
      { name: "Docker", level: "expert" },
      { name: "Kubernetes", level: "advanced" },
      { name: "AWS", level: "advanced" },
      { name: "Terraform", level: "intermediate" },
    ],
  },
  {
    id: "observability",
    title: "Observability",
    icon: "Gauge",
    skills: [
      { name: "Prometheus", level: "advanced" },
      { name: "Grafana", level: "advanced" },
      { name: "OpenTelemetry", level: "intermediate" },
      { name: "Sentry", level: "advanced" },
    ],
  },
  {
    id: "practices",
    title: "Practices",
    icon: "Shield",
    skills: [
      { name: "CI/CD", level: "expert" },
      { name: "Testing", level: "expert" },
      { name: "Code review", level: "expert" },
      { name: "Incident response", level: "advanced" },
    ],
  },
];
