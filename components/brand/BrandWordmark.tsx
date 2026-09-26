import Image from "next/image";

/**
 * Brand wordmark served from /public/brand/wordmark.svg (26×13 viewBox).
 * Rendered at 2:1 aspect and sized via className (h-6 w-auto = 48×24) —
 * h-6 matches the 24px line-box of the sidebar's `text-base` profile name
 * so the two visual weights line up.
 *
 * Decorative by design (alt="") — the surrounding Link carries the
 * accessible name via its aria-label.
 *
 * next/image auto-switches to `unoptimized` for .svg sources (see
 * get-img-props), so no image-optimizer/dangerouslyAllowSVG config is needed.
 */
export function BrandWordmark() {
  return (
    <Image
      src="/brand/wordmark.svg"
      alt=""
      width={52}
      height={26}
      className="h-6 w-auto"
    />
  );
}
