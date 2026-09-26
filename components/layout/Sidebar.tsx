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
import { cvDownloadUrl } from "@/lib/data/links";
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
  /* Must mirror the aside's CSS width transition (duration-200 + default
     `ease` timing) so layout="position" glides on the SAME curve as the
     shrinking rail — otherwise rows and edge drift apart mid-transition. */
  const railShift = {
    duration: reduceMotion ? 0 : 0.2,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  };

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
        Container geometry is IDENTICAL in both states (p-6, gap-6,
        items-center + w-full rows): rows live in the same content box and
        only their inner justify flips left↔center, which layout="position"
        tweens on the same easing as the width transition. In the rail the
        content box is 16px wide centred at x=32 — the rail's own centre — so
        centred rows land exactly on the rail axis.
      */}
      <div className="flex h-full flex-col items-center gap-6 p-6">
        {/* BRAND ROW */}
        <LayoutGroup>
          <div
            className={cn(
              "flex w-full items-center",
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

        {/* Avatar row renders in BOTH states for rail symmetry — name/title
            only when expanded (the rail shows icons only). The initials avatar
            is the profile entry point (its nav item was removed as redundant).
            Fixed h-11 (44px) in BOTH states: the name/title block (text-base
            24 + 2 + text-xs 16 = 42px) is taller than the 40px avatar, so
            without a fixed height unmounting it on collapse would shrink the
            row ~10px and yank every row below upward. layout="position" glides
            the row left↔centre on the rail's easing — no vertical delta left
            to animate. */}
        <motion.div
          layout="position"
          transition={railShift}
          className={cn(
            "flex h-11 w-full items-center gap-3",
            isCollapsed ? "justify-center" : "justify-start"
          )}
        >
          <a
            href="#profile"
            aria-label="Go to profile"
            className="rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <ProfileAvatar size="default" />
          </a>
          {!isCollapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate font-heading text-base font-semibold text-sidebar-foreground">
                {profile.name}
              </p>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                {profile.title}
              </p>
            </div>
          )}
        </motion.div>

        <motion.div
          layout="position"
          transition={railShift}
          className="w-full"
        >
          <NavLinks
            collapsed={isCollapsed}
            className={
              isCollapsed
                ? "flex flex-col items-center gap-1"
                /* -mx-3 cancels the link's px-3 so nav icons sit on the same
                   left column (p-6) as the avatar, wordmark and CV pill. */
                : "-mx-3 flex flex-col gap-1"
            }
          />
        </motion.div>

        <motion.div
          layout="position"
          transition={railShift}
          className="mt-auto flex w-full justify-center"
        >
          <Button
            asChild
            variant="outline"
            className={cn(
              "rounded-full",
              /* h-9 both states: default Button size is h-8 (32px) — pairing it
                 with the rail's size-9 chip (36px) would shift the bottom-anchored
                 (mt-auto) pill's top edge 4px on every toggle. */
              isCollapsed ? "size-9 p-0" : "h-9 w-full"
            )}
          >
            <a
              href={cvDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Download CV"
            >
              <Download aria-hidden />
              {isCollapsed ? (
                <span className="sr-only">Download CV</span>
              ) : (
                "Download CV"
              )}
            </a>
          </Button>
        </motion.div>
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
