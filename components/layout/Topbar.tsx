"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/components/layout/NavLinks";
import { profile } from "@/lib/data/profile";

export function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
      <div>
        <p className="font-heading text-sm font-semibold">{profile.name}</p>
        <p className="text-xs text-muted-foreground">{profile.title}</p>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open navigation menu">
            <Menu aria-hidden />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72">
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <NavLinks
            className="mt-4 flex flex-col gap-1"
          />
        </SheetContent>
      </Sheet>
    </header>
  );
}
