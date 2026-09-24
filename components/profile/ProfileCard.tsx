"use client";

import { Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ProfileAvatar } from "@/components/profile/ProfileAvatar";
import { StatusPill } from "@/components/profile/StatusPill";
import { StatList } from "@/components/profile/StatList";
import { cvDownloadUrl } from "@/lib/data/links";
import type { Profile } from "@/types/content";

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
        <ProfileAvatar size="lg" className="size-16 shrink-0" />

        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
              {profile.name}
            </h1>
            <StatusPill>{profile.availability}</StatusPill>
          </div>
          <p className="text-sm text-muted-foreground">{profile.title}</p>
          <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground sm:justify-start">
            <MapPin className="size-4 shrink-0" aria-hidden />
            {profile.location}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 sm:justify-start">
            <Button asChild className="rounded-full">
              <a
                href={cvDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download aria-hidden />
                Download CV
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>
      </CardContent>

      <Separator />

      <CardContent>
        <StatList stats={profile.stats} />
      </CardContent>
    </Card>
  );
}
