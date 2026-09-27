"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/button";

const COLLAPSED_COUNT = 3;

export function ExperienceDescription({ bullets }: { bullets: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const needsToggle = bullets.length > COLLAPSED_COUNT;

  if (!needsToggle) {
    return (
      <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="space-y-2">
      <ul
        id={listId}
        className={`list-disc space-y-1.5 pl-5 text-sm text-muted-foreground ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <Button
        type="button"
        variant="link"
        size="sm"
        className="h-auto p-0 text-primary"
        aria-expanded={expanded}
        aria-controls={listId}
        onClick={() => setExpanded((value) => !value)}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </div>
  );
}
