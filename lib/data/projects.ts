import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "invoice-pipeline",
    title: "Invoice Processing Pipeline",
    summary:
      "Event-driven billing pipeline that ingests, validates, and reconciles invoices at scale.",
    cover: "/projects/invoice-pipeline.svg",
    gallery: [
      {
        src: "/projects/gallery-architecture.svg",
        alt: "Architecture diagram of the invoice pipeline",
      },
      {
        src: "/projects/gallery-dashboard.svg",
        alt: "Dashboard showing invoice throughput metrics",
      },
      {
        src: "/projects/gallery-schema.svg",
        alt: "Database schema for invoices and line items",
      },
    ],
    tags: ["Node.js", "Kafka", "PostgreSQL", "AWS"],
    details: [
      "Designed an idempotent consumer model with dead-letter queues to guarantee at-least-once processing without duplicates.",
      "Introduced a reconciliation worker that flags mismatches between invoiced and paid amounts within a 5-minute window.",
      "Scaled horizontally with consumer groups; sustained 2M+ invoices/month with p99 end-to-end latency under 90 seconds.",
      "Added structured logging and Prometheus metrics for throughput, lag, and failure rates.",
    ],
  },
  {
    id: "fleet-telemetry",
    title: "Fleet Telemetry Ingestion",
    summary:
      "High-throughput ingestion layer for vehicle telemetry with backpressure and exactly-once semantics.",
    cover: "/projects/fleet-telemetry.svg",
    gallery: [
      {
        src: "/projects/gallery-architecture.svg",
        alt: "Architecture diagram of the telemetry ingestion layer",
      },
      {
        src: "/projects/gallery-dashboard.svg",
        alt: "Real-time telemetry dashboard",
      },
      {
        src: "/projects/gallery-schema.svg",
        alt: "Schema for telemetry events",
      },
    ],
    tags: ["Go", "Kafka", "ClickHouse", "Kubernetes"],
    details: [
      "Built a Go ingestion service handling 12k events/sec with adaptive backpressure based on consumer lag.",
      "Used Kafka transactional writes plus idempotent keys to achieve exactly-once semantics downstream.",
      "Materialized hot paths into ClickHouse for sub-second queries over multi-billion-row datasets.",
      "Deployed on Kubernetes with horizontal pod autoscaling tied to lag-based metrics.",
    ],
  },
  {
    id: "auth-broker",
    title: "Auth Broker",
    summary:
      "Centralized OAuth2/OIDC broker with refresh-token rotation and multi-tenant isolation.",
    cover: "/projects/auth-broker.svg",
    gallery: [
      {
        src: "/projects/gallery-architecture.svg",
        alt: "Architecture diagram of the auth broker",
      },
      {
        src: "/projects/gallery-dashboard.svg",
        alt: "Auth broker admin dashboard",
      },
      {
        src: "/projects/gallery-schema.svg",
        alt: "Schema for tenants and tokens",
      },
    ],
    tags: ["Go", "Redis", "OIDC", "PostgreSQL"],
    details: [
      "Implemented short-lived access tokens with rotating refresh tokens and reuse detection.",
      "Added per-tenant rate limiting and audit logging for compliance reviews.",
      "Reduced duplicated auth logic across four products to a single shared broker.",
      "Hardened against common OAuth misuses: PKCE, state validation, and redirect allow-lists.",
    ],
  },
  {
    id: "event-mesh",
    title: "Event Mesh",
    summary:
      "Multi-region event mesh for reliable cross-service messaging with schema evolution.",
    cover: "/projects/event-mesh.svg",
    gallery: [
      {
        src: "/projects/gallery-architecture.svg",
        alt: "Multi-region event mesh architecture",
      },
      {
        src: "/projects/gallery-dashboard.svg",
        alt: "Event mesh observability dashboard",
      },
      {
        src: "/projects/gallery-schema.svg",
        alt: "Schema registry entries",
      },
    ],
    tags: ["Kafka", "Protobuf", "Terraform", "AWS"],
    details: [
      "Connected two regions with mirror topics and conflict-aware routing for graceful degradation.",
      "Enforced backward-compatible schema changes through a registry and CI checks.",
      "Built replay tooling so consumers can reprocess historical windows on demand.",
      "Documented runbooks and SLOs; on-call pages dropped after rollout.",
    ],
  },
  {
    id: "feature-store",
    title: "Feature Store API",
    summary:
      "Low-latency feature store serving online and offline models from a single definition.",
    cover: "/projects/feature-store.svg",
    gallery: [
      {
        src: "/projects/gallery-architecture.svg",
        alt: "Feature store architecture",
      },
      {
        src: "/projects/gallery-dashboard.svg",
        alt: "Feature store monitoring dashboard",
      },
      {
        src: "/projects/gallery-schema.svg",
        alt: "Feature definitions schema",
      },
    ],
    tags: ["Python", "Redis", "Feast", "PostgreSQL"],
    details: [
      "Unified batch and streaming feature definitions so training and serving use identical logic.",
      "Served online features from Redis with p99 under 10ms at 3k QPS.",
      "Added point-in-time correctness checks to prevent training/serving skew.",
      "Instrumented drift and staleness alerts tied to model retraining triggers.",
    ],
  },
];
