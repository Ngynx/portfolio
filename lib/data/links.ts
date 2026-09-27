import type { SocialLink } from "@/types/content";

/** CV hosted on Cloudinary (raw delivery). */
export const cvDownloadUrl =
  "https://res.cloudinary.com/d5yiv2wn/raw/upload/v1790227748/CV-En_2.0_1_k6ypl3.docx";

/** Source of truth: user-provided social links JSON (http upgraded to https). */
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Ngynx",
    icon: "github",
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/ngynx.679",
    icon: "gitlab",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/aldo-rodrigo-pilco-hancco-6863a81ba",
    icon: "linkedin",
  },
  {
    name: "Email",
    href: "mailto:aldorodrigo@gmail.com",
    icon: "email",
  },
];
