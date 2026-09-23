import type { Profile } from "@/types/content";

export function BioSection({ bio }: { bio: Profile["bio"] }) {
  return (
    <section aria-label="Biography" className="space-y-3">
      <p className="leading-relaxed text-foreground">{bio}</p>
    </section>
  );
}
