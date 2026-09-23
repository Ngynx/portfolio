"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [project?.id]);

  return (
    <Dialog
      open={project !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="flex max-h-[85vh] w-full max-w-2xl flex-col gap-0 overflow-hidden p-0 sm:max-w-2xl">
        <DialogHeader className="shrink-0 border-b border-border px-6 py-4 pr-12">
          <DialogTitle className="text-lg">
            {project?.title ?? "Project"}
          </DialogTitle>
          <DialogDescription className="line-clamp-2">
            {project?.summary ?? ""}
          </DialogDescription>
        </DialogHeader>

        <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
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

                <section className="space-y-2" aria-label="Project details">
                  <h3 className="text-sm font-medium text-foreground">Details</h3>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-2" aria-label="Tech stack">
                  <h3 className="text-sm font-medium text-foreground">Stack</h3>
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
