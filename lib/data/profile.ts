import type { Profile } from "@/types/content";

export const profile: Profile = {
  name: "Aldo Rodrigo",
  title: "Backend Engineer · Freelance",
  // avatar: unset — when a photo exists, put it under public/ and set e.g. "/avatar.jpg".
  location: "Remote · UTC-5",
  availability: "Available for new projects",
  bio: "Backend Engineer with 5+ years of experience designing and scaling Node.js/TypeScript services for real-time, high-throughput systems. Proven track record of scaling platforms 4x (50 to 200+ concurrent units) through query optimization, event-driven decoupling, and time-series data architecture. Specialized in microservices, geospatial processing (PostGIS), and streaming pipelines (Apache Kafka), with growing experience leading technical decisions across cross-functional teams.",
  stats: [
    { label: "Years experience", value: "5+" },
    { label: "Projects shipped", value: "15+" },
  ],
};
