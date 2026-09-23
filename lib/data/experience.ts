import type { ExperienceEntry } from "@/types/content";

export const experiences: ExperienceEntry[] = [
  {
    id: "exp-1",
    role: "Senior Backend Engineer",
    company: "Freelance",
    location: "Remote",
    startDate: "2021",
    endDate: undefined,
    bullets: [
      "Designed event-driven billing pipeline processing 2M+ invoices/month with idempotent consumers and dead-letter handling.",
      "Cut p99 latency on core API from 480ms to 95ms by introducing read models and query plan reviews.",
      "Led migration from monolith to six bounded services with zero-downtime cutover using strangler pattern.",
      "Mentored two junior engineers on testing strategy and production readiness reviews.",
      "Introduced OpenTelemetry tracing across services, reducing mean time to detection for regressions by ~60%.",
    ],
  },
  {
    id: "exp-2",
    role: "Backend Engineer",
    company: "Northwind Logistics",
    location: "Buenos Aires",
    startDate: "2018",
    endDate: "2021",
    bullets: [
      "Built fleet telemetry ingestion handling 12k events/sec with backpressure and exactly-once semantics in Kafka.",
      "Owned PostgreSQL schema design and migration tooling for the routing domain.",
      "Implemented CI/CD pipelines that reduced release cycle from weekly to on-demand.",
    ],
  },
  {
    id: "exp-3",
    role: "Full-Stack Developer",
    company: "Brightpath Studio",
    location: "Córdoba",
    startDate: "2016",
    endDate: "2018",
    bullets: [
      "Shipped client dashboards and REST APIs for four SaaS products.",
      "Standardized auth with OAuth2 and refresh-token rotation across products.",
      "Introduced automated test suites raising coverage from 12% to 74%.",
    ],
  },
  {
    id: "exp-4",
    role: "Junior Developer",
    company: "Local Agency",
    location: "Córdoba",
    startDate: "2014",
    endDate: "2016",
    bullets: [
      "Maintained WordPress and custom PHP sites for small businesses.",
      "Learned production discipline: backups, monitoring, and client communication.",
    ],
  },
];
