"use client";

import { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FadeIn } from "@/components/motion";
import { ProjectCarousel } from "@/components/projects/ProjectCarousel";
import { ProjectModal } from "@/components/projects/ProjectModal";
import type { Project } from "@/types/content";

export function PortfolioSection({ projects }: { projects: Project[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const projectId = searchParams.get("project");
  const [openProjectId, setOpenProjectId] = useState<string | null>(projectId);
  // Track the last URL value we adopted so back/forward navigation stays in sync
  // without a setState-in-effect (adjust state during render instead).
  const [prevProjectId, setPrevProjectId] = useState(projectId);

  if (projectId !== prevProjectId) {
    setPrevProjectId(projectId);
    setOpenProjectId(projectId);
  }

  const openProject = useCallback(
    (id: string) => {
      setOpenProjectId(id);
      const params = new URLSearchParams(searchParams.toString());
      params.set("project", id);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const closeProject = useCallback(() => {
    setOpenProjectId(null);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("project");
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [router, pathname, searchParams]);

  const selectedProject =
    projects.find((project) => project.id === openProjectId) ?? null;

  const goPrev = useCallback(() => {
    if (projects.length === 0) return;
    const idx = projects.findIndex((project) => project.id === openProjectId);
    if (idx === -1) return;
    openProject(projects[(idx - 1 + projects.length) % projects.length].id);
  }, [projects, openProjectId, openProject]);

  const goNext = useCallback(() => {
    if (projects.length === 0) return;
    const idx = projects.findIndex((project) => project.id === openProjectId);
    if (idx === -1) return;
    openProject(projects[(idx + 1) % projects.length].id);
  }, [projects, openProjectId, openProject]);

  return (
    <section id="portfolio" className="scroll-mt-20 space-y-6">
      <FadeIn>
        <div className="flex flex-col gap-1">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
            Portfolio
          </h2>
          <p className="text-sm text-muted-foreground">
            Selected projects — open a card for details.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <ProjectCarousel projects={projects} onSelect={openProject} />
      </FadeIn>

      <ProjectModal
        project={selectedProject}
        onClose={closeProject}
        onPrev={goPrev}
        onNext={goNext}
      />
    </section>
  );
}
