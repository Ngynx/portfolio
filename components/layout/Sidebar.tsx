"use client";

import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import { Download, PanelLeftClose } from "lucide-react";
import { NavLinks } from "@/components/layout/NavLinks";
import { Button } from "@/components/ui/button";
import { ProfileAvatar } from "@/components/profile/ProfileAvatar";
import { BrandMonogram } from "@/components/brand/BrandMonogram";
import { BrandWordmark } from "@/components/brand/BrandWordmark";
import { profile } from "@/lib/data/profile";
import { cn } from "cn";

type SidebarProps = {
  /** AppShell state: true = expanded, false = collapsed. */
  open: boolean;
  onToggle: () => void;
};

export function Sidebar({ open, onToggle }: SidebarProps) {
  const isCollapsed = !open;
  const reduceMotion = useReducedMotion();
  const wordmarkDuration = reduceMotion ? 0 : 0.15;

  return (
    <aside
      id="main-sidebar"
      className={cn(
        "sticky top-0 hidden h-screen shrink-0 self-start border-r border-border bg-sidebar lg:flex lg:flex-col",
        "duration-200 motion-safe:transition-[width]",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/*
        The aside stays mounted in both states so aria-controls="main-sidebar"
        always resolves; `hidden` removes it from the a11y tree below lg.
        Width (w-64 ↔ w-16) is CSS-transitioned (motion-safe), while the
        brand row morphs in place via framer-motion — no key remounts.
      */}
      <div
        className={cn(
          "flex h-full flex-col",
          isCollapsed ? "items-center gap-6 px-2 py-6" : "gap-8 p-6"
        )}
      >
        {/* BRAND ROW */}
        <LayoutGroup>
          <div
            className={cn(
              "flex items-center",
              isCollapsed ? "justify-center" : "justify-between"
            )}
          >
            {/* Wordmark link — fades out on collapse, mounts instantly on expand. */}
            <AnimatePresence initial={false}>
              {!isCollapsed && (
                <motion.div
                  key="sidebar-wordmark"
                  initial={false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: wordmarkDuration }}
                >
                  <Link
                    href="/"
                    aria-label="Go to home"
                    className="-m-1 rounded-md p-1 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <BrandWordmark />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Shared morphing element — same instance in both states. */}
            <BrandToggleButton isCollapsed={isCollapsed} onToggle={onToggle} />
          </div>
        </LayoutGroup>

        {/* Avatar/name only when expanded — the rail shows icons only. */}
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <ProfileAvatar size="default" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-heading text-lg font-semibold text-sidebar-foreground">
                {profile.name}
              </p>
              <p className="mt-0.5 truncate text-sm text-muted-foreground">
                {profile.title}
              </p>
            </div>
          </div>
        )}

        <NavLinks
          collapsed={isCollapsed}
          className={
            isCollapsed ? "flex flex-col items-center gap-1" : "flex flex-col gap-1"
          }
        />

        <div className="mt-auto">
          {/* CV file pending — portfolio.pdf is intentionally not served statically */}
          <Button
            asChild
            variant="outline"
            className={cn(
              "rounded-full",
              isCollapsed ? "size-9 p-0" : "w-full"
            )}
            aria-disabled
          >
            <a
              href="#"
              title="Download CV"
              onClick={(e) => e.preventDefault()}
            >
              <Download aria-hidden />
              {isCollapsed ? (
                <span className="sr-only">Download CV</span>
              ) : (
                "Download CV"
              )}
            </a>
          </Button>
        </div>
      </div>
    </aside>
  );
}

type BrandToggleButtonProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};

/**
 * Single persistent toggle: never unmounts between states.
 * - `layout` + `layoutId` animate its x-position shift (wordmark row ↔ centered rail).
 * - `animate.borderRadius` morphs rounded-md ↔ rounded-full (layout does not
 *   interpolate border-radius on its own).
 * - Inner content crossfades via AnimatePresence mode="wait".
 * Reduced motion collapses every duration to 0 (instant swap).
 */
function BrandToggleButton({ isCollapsed, onToggle }: BrandToggleButtonProps) {
  const reduceMotion = useReducedMotion();
  const morphDuration = reduceMotion ? 0 : 0.25;
  const contentDuration = reduceMotion ? 0 : 0.12;
  const label = isCollapsed ? "Expand sidebar" : "Collapse sidebar";

  return (
    <motion.button
      type="button"
      layout
      layoutId="sidebar-brand-toggle"
      onClick={onToggle}
      aria-label={label}
      aria-expanded={!isCollapsed}
      aria-controls="main-sidebar"
      title={label}
      initial={false}
      animate={{ borderRadius: isCollapsed ? 9999 : 8 }}
      transition={{
        duration: morphDuration,
        ease: "easeInOut",
        layout: { duration: morphDuration, ease: "easeInOut" },
      }}
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center rounded-md border text-sm font-medium whitespace-nowrap transition-colors outline-none select-none",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        isCollapsed
          ? "border-sidebar-border bg-transparent text-sidebar-foreground hover:bg-sidebar-accent"
          : "border-transparent text-foreground hover:bg-muted aria-expanded:bg-transparent dark:hover:bg-muted/50"
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isCollapsed ? (
          <motion.span
            key="mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: contentDuration }}
          >
            <BrandMonogram />
          </motion.span>
        ) : (
          <motion.span
            key="chev"
            className="grid place-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: contentDuration }}
          >
            <PanelLeftClose aria-hidden />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
