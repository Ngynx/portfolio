/**
 * "Nx" monogram shown inside the collapsed sidebar toggle button.
 *
 * The circular frame (rounded-full, border, hover bg) is provided by the
 * button itself — this component is only the glyph, styled to echo the
 * wordmark (same heading sans, semibold, tight tracking, near-black ink
 * via text-sidebar-foreground to match the wordmark's fill="black").
 *
 * aria-hidden: the toggle button carries its own accessible label.
 */
export function BrandMonogram() {
  return (
    <span
      aria-hidden="true"
      className="grid place-items-center font-heading text-sm font-semibold tracking-tight text-sidebar-foreground"
    >
      Nx
    </span>
  );
}
