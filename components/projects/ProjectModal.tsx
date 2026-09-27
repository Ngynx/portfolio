"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { SkillBadgeList } from "@/components/projects/SkillBadgeList";
import type { Project } from "@/types/content";

export function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [project?.id]);

  const navButtonClassName =
    "absolute top-1/2 z-10 flex size-12 md:size-14 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 shadow-md backdrop-blur hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 motion-safe:transition-[background-color,transform] motion-safe:duration-150 motion-safe:hover:scale-110 motion-safe:active:scale-95";

  return (
    <Dialog
      open={project !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      {/* No `overflow-hidden` on purpose: the nav arrows sit outside the
          modal edges (negative offsets) and would be clipped by it. Corner
          rounding is unaffected — children paint no background. */}
      <DialogContent className="flex max-h-[85vh] w-full max-w-2xl flex-col gap-0 p-0 sm:max-w-2xl">
        <DialogHeader className="shrink-0 border-b border-border px-6 py-4 pr-12">
          <DialogTitle className="text-lg">
            {project?.title ?? "Project"}
          </DialogTitle>
          <DialogDescription className="line-clamp-2">
            {project?.summary ?? ""}
          </DialogDescription>
        </DialogHeader>

        {project ? (
          <>
            <button
              type="button"
              onClick={onPrev}
              className={`${navButtonClassName} -left-4 md:-left-12 lg:-left-20`}
              aria-label="Previous project"
              title="Previous project"
            >
              <ChevronLeft className="size-6 md:size-7" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onNext}
              className={`${navButtonClassName} -right-4 md:-right-12 lg:-right-20`}
              aria-label="Next project"
              title="Next project"
            >
              <ChevronRight className="size-6 md:size-7" aria-hidden="true" />
            </button>
          </>
        ) : null}

        <div
          ref={scrollRef}
          className="min-h-0 flex-1 overflow-y-auto px-10 py-5 md:px-6"
        >
          <AnimatePresence mode="wait" initial={false}>
            {project ? (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="space-y-6"
              >
                <ProjectGallery images={project.gallery} />

                <section className="space-y-2" aria-label="My role">
                  <h3 className="text-sm font-medium text-foreground">
                    My role.
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.role}</p>
                </section>

                <section
                  className="space-y-2"
                  aria-label="Project description"
                >
                  <h3 className="text-sm font-medium text-foreground">
                    Project description.
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.summary}
                  </p>
                </section>

                <section
                  className="space-y-2"
                  aria-label="Skills and deliverables"
                >
                  <h3 className="text-sm font-medium text-foreground">
                    Skills and deliverables
                  </h3>
                  <SkillBadgeList tags={project.tags} />
                </section>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
