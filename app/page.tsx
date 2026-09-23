import { Suspense } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { BioSection } from "@/components/profile/BioSection";
import { SkillGroup } from "@/components/skills/SkillGroup";
import { EmploymentSection } from "@/components/experience/EmploymentSection";
import { PortfolioSection } from "@/components/projects/PortfolioSection";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { profile } from "@/lib/data/profile";
import { skillGroups } from "@/lib/data/skills";
import { experiences } from "@/lib/data/experience";
import { projects } from "@/lib/data/projects";

function PortfolioFallback() {
  return (
    <section id="portfolio" className="scroll-mt-20 space-y-6" aria-busy>
      <div className="h-6 w-24 animate-pulse rounded bg-muted" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="aspect-[4/3] animate-pulse rounded-xl bg-muted"
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <AppShell>
      <div className="mx-auto w-full max-w-3xl space-y-14 px-4 py-10 sm:px-6 lg:px-8">
        <section id="profile" className="scroll-mt-20 space-y-6">
          <FadeIn>
            <ProfileCard profile={profile} />
          </FadeIn>
          <FadeIn>
            <BioSection bio={profile.bio} />
          </FadeIn>
        </section>

        <section id="skills" className="scroll-mt-20 space-y-6">
          <FadeIn>
            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
              Skills
            </h2>
          </FadeIn>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <StaggerItem key={group.id}>
                <SkillGroup group={group} />
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <EmploymentSection experiences={experiences} />

        <Suspense fallback={<PortfolioFallback />}>
          <PortfolioSection projects={projects} />
        </Suspense>

        <ContactCTA />
      </div>
    </AppShell>
  );
}
