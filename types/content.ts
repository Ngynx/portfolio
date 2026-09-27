export interface Profile {
  name: string;
  title: string;
  /** URL/path to a profile photo (lives under public/ when set). */
  avatar?: string;
  location: string;
  availability: string;
  bio: string;
  stats: { label: string; value: string }[];
}

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface Skill {
  name: string;
  /** Optional — source data may not include proficiency levels. */
  level?: SkillLevel;
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  bullets: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  summary: string;
  cover: string;
  gallery: ProjectImage[];
  tags: string[];
  link?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon: string;
}

export type SocialIconName = "github" | "gitlab" | "linkedin" | "email";

export interface SocialLink {
  name: string;
  /** Absolute http(s) URL, or mailto: for email. */
  href: string;
  icon: SocialIconName;
}
