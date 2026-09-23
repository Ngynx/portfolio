"use client";

import { Download } from "lucide-react";
import { NavLinks } from "@/components/layout/NavLinks";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data/profile";

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 self-start border-r border-border bg-sidebar lg:flex lg:flex-col">
      <div className="flex h-full flex-col gap-8 p-6">
        <div>
          <p className="font-heading text-lg font-semibold text-sidebar-foreground">
            {profile.name}
          </p>
          <p className="mt-0.5 text-sm text-muted-foreground">{profile.title}</p>
        </div>

        <NavLinks className="flex flex-col gap-1" />

        <div className="mt-auto">
          {/* CV file pending — portfolio.pdf is intentionally not served statically */}
          <Button
            asChild
            variant="outline"
            className="w-full rounded-full"
            aria-disabled
          >
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              <Download aria-hidden />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </aside>
  );
}
