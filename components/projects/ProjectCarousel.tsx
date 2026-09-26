"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { cn } from "cn";
import type { Project } from "@/types/content";

/**
 * Desktop shows 3 cards per page and there are 5 projects, so pagination is
 * two fixed pages of 3 slots: slides [0..2] and [3..4]. Page starts are chunk
 * offsets, which also stay meaningful at md (2-up) and mobile (1-up): clicking
 * page 2 always lands on the first project of the second chunk.
 *
 * Embla CLAMPS the last snaps per breakpoint (5 slides at lg 3-up → snaps
 * 0..2 only), so raw `floor(current / 3)` would resolve to page 1 forever on
 * desktop: page starts must be clamped to the live snap list too, and the
 * active page is the last clamped start ≤ current.
 */
const SLIDES_PER_PAGE = 3;

export function ProjectCarousel({
  projects,
  onSelect,
}: {
  projects: Project[];
  onSelect: (id: string) => void;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [snapCount, setSnapCount] = useState(() => Math.max(projects.length, 1));

  const onSelectSlide = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setCurrent(carouselApi.selectedScrollSnap());
    setSnapCount(carouselApi.scrollSnapList().length);
  }, []);

  useEffect(() => {
    if (!api) return;
    // Subscribe only — initial `current` is already 0, which matches embla's
    // starting snap, and the default snapCount (projects.length) is
    // conservative: pageStart clamps higher, so the first click still lands
    // on the clamped snap and `select` then syncs both values for real.
    api.on("select", onSelectSlide);
    api.on("reInit", onSelectSlide);
    return () => {
      api.off("select", onSelectSlide);
      api.off("reInit", onSelectSlide);
    };
  }, [api, onSelectSlide]);

  const pageCount = Math.ceil(projects.length / SLIDES_PER_PAGE);
  const lastSnap = Math.max(snapCount - 1, 0);
  const pageStart = (pageIndex: number) =>
    Math.min(pageIndex * SLIDES_PER_PAGE, lastSnap);
  const activePage = Array.from({ length: pageCount }).reduce(
    (active, _, pageIndex) => (current >= pageStart(pageIndex) ? pageIndex : active),
    0
  );

  return (
    <div className="relative">
      <Carousel
        opts={{ align: "start", loop: false }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
              <ProjectCard project={project} onOpen={() => onSelect(project.id)} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Numbered stepper: active page indicator + pagination in one control. */}
      <nav
        aria-label="Portfolio pages"
        className="mt-4 flex items-center justify-center gap-3"
      >
        {Array.from({ length: pageCount }).map((_, pageIndex) => (
          <div key={pageIndex} className="flex items-center gap-3">
            {pageIndex > 0 && (
              <span aria-hidden className="h-px w-10 bg-border" />
            )}
            <button
              type="button"
              onClick={() => api?.scrollTo(pageStart(pageIndex))}
              aria-label={`Go to page ${pageIndex + 1}`}
              aria-current={activePage === pageIndex ? "true" : undefined}
              className={cn(
                "flex size-9 items-center justify-center rounded-full text-sm font-medium transition-colors outline-none",
                "focus-visible:ring-3 focus-visible:ring-ring/50",
                activePage === pageIndex
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {pageIndex + 1}
            </button>
          </div>
        ))}
      </nav>
    </div>
  );
}
