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

export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
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
  summary: string;
  cover: string;
  gallery: ProjectImage[];
  tags: string[];
  details: string[];
  link?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon: string;
}
