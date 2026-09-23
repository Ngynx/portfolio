"use client";

import { Download, MapPin } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StatusPill } from "@/components/profile/StatusPill";
import { StatList } from "@/components/profile/StatList";
import type { Profile } from "@/types/content";

export function ProfileCard({ profile }: { profile: Profile }) {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
        <Avatar size="lg" className="size-16 shrink-0">
          <AvatarFallback className="bg-[#e8f5e9] text-lg font-semibold text-[#0b6b0b]">
            {initials}
          </AvatarFallback>
        </Avatar>

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
            {/* CV file pending — portfolio.pdf is intentionally not served statically */}
            <Button
              asChild
              className="rounded-full"
              aria-disabled
            >
              <a href="#" onClick={(e) => e.preventDefault()}>
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
