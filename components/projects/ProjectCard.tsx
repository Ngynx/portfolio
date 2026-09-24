"use client";

import Image from "next/image";
import { SkillBadgeList } from "@/components/projects/SkillBadgeList";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { Project } from "@/types/content";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex-1 text-left focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded-xl"
      aria-label={`View project details: ${project.title}`}
    >
      <Card className="flex h-full flex-col gap-3 py-0 transition-shadow group-hover:shadow-md">
        <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
          <Image
            src={project.cover}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader className="pt-3">
          <CardTitle className="line-clamp-1">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {project.summary}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto pb-4">
          <SkillBadgeList tags={project.tags.slice(0, 3)} />
        </CardContent>
      </Card>
    </button>
  );
}
