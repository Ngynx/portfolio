"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";

export function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-20">
      <FadeIn>
        <Card className="bg-[#f0faf0]">
          <CardContent className="flex flex-col items-center gap-4 py-8 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-[#e8f5e9] text-[#0b6b0b]">
              <Mail className="size-5" aria-hidden />
            </span>
            <div className="space-y-1">
              <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                Let&apos;s work together
              </h2>
              <p className="text-sm text-muted-foreground">
                Have a project in mind? I&apos;d love to hear about it.
              </p>
            </div>
            {/* Contact channel TBD — placeholder only, no backend wired */}
            <Button
              type="button"
              className="rounded-full"
              aria-disabled
              onClick={(e) => e.preventDefault()}
            >
              Contact coming soon
            </Button>
          </CardContent>
        </Card>
      </FadeIn>
    </section>
  );
}
