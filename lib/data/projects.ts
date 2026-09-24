import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "wall-e",
    title: "Wall-e",
    role: "Backend",
    summary:
      "Web platform for monitoring and managing vehicle fleets used in public services. It enables route and pickup point management, real-time tracking of vehicle routes and stops, and access to historical vehicle activity.",
    cover: "/portfolioimgs/Walle1.png",
    gallery: [
      { src: "/portfolioimgs/Walle1.png", alt: "Wall-e screenshot 1" },
      { src: "/portfolioimgs/Walle2.png", alt: "Wall-e screenshot 2" },
      { src: "/portfolioimgs/Walle3.png", alt: "Wall-e screenshot 3" },
      { src: "/portfolioimgs/Walle4.png", alt: "Wall-e screenshot 4" },
    ],
    tags: ["NodeJs", "NestJs", "PostgreSQL", "Mongodb", "PostGIS", "Apacha Kafka", "Websockets", "Typescript"],
  },
  {
    id: "owl",
    title: "Owl",
    role: "Backend",
    summary:
      "Web platform for digitizing the issuance of business operating licenses and ITSE inspections. It centralizes the management of applications, documents, and administrative workflows based on business rules.",
    cover: "/portfolioimgs/owl.png",
    gallery: [
      { src: "/portfolioimgs/owl.png", alt: "Owl screenshot 1" },
      { src: "/portfolioimgs/owl2.png", alt: "Owl screenshot 2" },
      { src: "/portfolioimgs/owl3.png", alt: "Owl screenshot 3" },
    ],
    tags: ["NodeJs", "NestJs", "Typescript", "Mongodb", "Websockets"],
  },
  {
    id: "delta-dispatch",
    title: "Delta Dispatch",
    role: "Backend",
    summary:
      "Web platform for comprehensive public safety incident management, from report registration to the assignment and tracking of personnel and vehicle resources. It features geospatial visualization, Kanban-based workflow management, and integration with external systems.",
    cover: "/portfolioimgs/DDelta1.png",
    gallery: [
      { src: "/portfolioimgs/DDelta1.png", alt: "Delta Dispatch screenshot 1" },
      { src: "/portfolioimgs/Delta2.png", alt: "Delta Dispatch screenshot 2" },
    ],
    tags: ["NodeJs", "NestJs", "Typescript", "Mongodb", "Websockets"],
  },
  {
    id: "link",
    title: "Link",
    role: "Backend",
    summary:
      "Web platform that automates incident reporting by validating information and integrating with government platforms. It streamlines manual processes through automated workflows and sequential processing.",
    cover: "/portfolioimgs/Link1.png",
    gallery: [
      { src: "/portfolioimgs/Link1.png", alt: "Link screenshot 1" },
      { src: "/portfolioimgs/Link2.png", alt: "Link screenshot 2" },
      { src: "/portfolioimgs/Link3.png", alt: "Link screenshot 3" },
    ],
    tags: ["NodeJs", "NestJs", "Typescript", "Mongodb", "Websockets", "Puppeteer"],
  },
  {
    id: "robin",
    title: "Robin",
    role: "Backend",
    summary:
      "Web-based fleet management and monitoring platform for public safety operations, powered by real-time GPS telemetry. It provides historical route visualization, operational data analysis, and integration with external institutional systems.",
    cover: "/portfolioimgs/robin1.png",
    gallery: [
      { src: "/portfolioimgs/robin1.png", alt: "Robin screenshot 1" },
      { src: "/portfolioimgs/robin2.png", alt: "Robin screenshot 2" },
      { src: "/portfolioimgs/robin3.png", alt: "Robin screenshot 3" },
      { src: "/portfolioimgs/robin4.png", alt: "Robin screenshot 4" },
      { src: "/portfolioimgs/robin5.png", alt: "Robin screenshot 5" },
    ],
    tags: ["NodeJs", "NestJs", "Typescript", "Mongodb", "Websockets", "Puppeteer"],
  },
];
