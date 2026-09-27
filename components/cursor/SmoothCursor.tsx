"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionValue,
} from "framer-motion";

/**
 * Buttery cursor follower: a dot + ring chase the native pointer on springs.
 * The native cursor stays visible — this is a decorative shadow only and
 * never replaces the real pointer (keeps inputs, text selection and a11y
 * untouched).
 *
 * Mechanics:
 * - `pointermove` writes straight into MotionValues → ZERO React re-renders
 *   while tracking (a setState per move is what makes followers feel janky).
 * - `useSpring` interpolates each layer; the ring lags behind the dot for
 *   depth. Spring config mirrors CSS `ease`-like travel without easing math.
 * - `prefers-reduced-motion` → layers read the raw motion values (instant,
 *   no trail), keeping the hook call order stable.
 * - Coarse pointers (touch) are hidden via CSS `[@media(pointer:fine)]` — no
 *   JS gate needed, so SSR and hydration render the same tree.
 * - `pointer-events: none` + `position: fixed` → cannot block clicks.
 */

const HOVER_SELECTOR = 'a, button, [role="button"], summary, [data-cursor-grow]';

/** Dot: tight chase. Ring: looser, trails for the "butter" feel. */
const DOT_SPRING = { stiffness: 700, damping: 50, mass: 0.5 };
const RING_SPRING = { stiffness: 160, damping: 22, mass: 0.8 };

export function SmoothCursor() {
  const reduceMotion = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  // Hidden until the first real pointermove so springs don't glide in from
  // the offscreen (-100,-100) bootstrap position.
  const [seen, setSeen] = useState(false);

  // Raw pointer position — written per pointermove, never via setState.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      if (!seen) setSeen(true);
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const onOver = (event: PointerEvent) => {
      const target = event.target;
      setHovering(
        target instanceof Element ? target.closest(HOVER_SELECTOR) !== null : false
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, [x, y, seen]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden transition-opacity [@media(pointer:fine)]:block ${
        seen ? "opacity-100" : "opacity-0"
      }`}
    >
      <CursorLayer
        origin={{ x, y }}
        spring={RING_SPRING}
        reduceMotion={!!reduceMotion}
        className="-ml-5 -mt-5 h-10 w-10 rounded-full border border-ring/60 transition-colors"
        scale={hovering ? 1.6 : 1}
      />
      <CursorLayer
        origin={{ x, y }}
        spring={DOT_SPRING}
        reduceMotion={!!reduceMotion}
        className="-ml-1 -mt-1 h-2 w-2 rounded-full bg-primary"
        scale={hovering ? 0.5 : 1}
      />
    </div>
  );
}

function CursorLayer({
  origin,
  spring,
  reduceMotion,
  className,
  scale,
}: {
  origin: { x: MotionValue<number>; y: MotionValue<number> };
  spring: { stiffness: number; damping: number; mass: number };
  reduceMotion: boolean;
  className: string;
  scale: number;
}) {
  const sx = useSpring(origin.x, spring);
  const sy = useSpring(origin.y, spring);

  return (
    <motion.div
      /* Reduced motion reads the raw values (instant) — hooks stay
         unconditional either way. */
      style={{ x: reduceMotion ? origin.x : sx, y: reduceMotion ? origin.y : sy }}
      animate={{ scale }}
      transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
      className={`absolute left-0 top-0 ${className}`}
    />
  );
}
