import { Clock, MapPin } from "lucide-react";
import { ExperienceDescription } from "@/components/experience/ExperienceDescription";
import type { ExperienceEntry } from "@/types/content";

export function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  const dateRange = `${entry.startDate} – ${entry.endDate ?? "Present"}`;

  return (
    <article className="space-y-2">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <h3 className="font-heading text-base font-semibold text-foreground">
            {entry.role}
          </h3>
          <p className="text-sm text-muted-foreground">{entry.company}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-1 text-sm text-muted-foreground sm:items-end">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden />
            {dateRange}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden />
            {entry.location}
          </span>
        </div>
      </div>
      <ExperienceDescription bullets={entry.bullets} />
    </article>
  );
}
