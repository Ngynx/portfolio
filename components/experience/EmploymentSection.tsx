import { FadeIn } from "@/components/motion";
import { ExperienceItem } from "@/components/experience/ExperienceItem";
import { Separator } from "@/components/ui/separator";
import type { ExperienceEntry } from "@/types/content";

export function EmploymentSection({
  experiences,
}: {
  experiences: ExperienceEntry[];
}) {
  return (
    <section id="experience" className="scroll-mt-20 space-y-6">
      <FadeIn>
        <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
          Experience
        </h2>
      </FadeIn>
      <div className="space-y-6">
        {experiences.map((entry, index) => (
          <FadeIn key={entry.id}>
            {index > 0 ? <Separator className="mb-6" /> : null}
            <ExperienceItem entry={entry} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
