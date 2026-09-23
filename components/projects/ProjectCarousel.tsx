"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { cn } from "cn";
import type { Project } from "@/types/content";

export function ProjectCarousel({
  projects,
  onSelect,
}: {
  projects: Project[];
  onSelect: (id: string) => void;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelectSlide = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setCurrent(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    // Subscribe only — initial `current` is already 0, which matches embla's
    // starting snap. Avoids setState directly in the effect body.
    api.on("select", onSelectSlide);
    api.on("reInit", onSelectSlide);
    return () => {
      api.off("select", onSelectSlide);
      api.off("reInit", onSelectSlide);
    };
  }, [api, onSelectSlide]);

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
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      <div
        className="mt-4 flex justify-center gap-2"
        role="tablist"
        aria-label="Carousel slides"
      >
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            role="tab"
            aria-selected={index === current}
            aria-label={`Go to slide ${index + 1}: ${project.title}`}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "size-2.5 rounded-full transition-colors",
              index === current
                ? "bg-primary"
                : "bg-border hover:bg-muted-foreground/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
