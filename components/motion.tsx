"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type FadeInProps = React.ComponentProps<typeof motion.div> & {
  /** Scroll offset before the animation triggers. */
  margin?: number;
};

/**
 * Fade-in on scroll into view. Respects prefers-reduced-motion by skipping
 * the transform and only applying opacity.
 */
export function FadeIn({ children, margin = 64, ...props }: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: margin }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = React.ComponentProps<typeof motion.div>;

/** Parent that staggers its direct children on scroll into view. */
export function Stagger({ children, ...props }: StaggerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-64px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = React.ComponentProps<typeof motion.div>;

/** Child of <Stagger>. Animates from hidden to show. */
export function StaggerItem({ children, ...props }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
