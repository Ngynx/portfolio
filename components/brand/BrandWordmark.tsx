import Image from "next/image";

/**
 * Brand wordmark served from /public/brand/wordmark.svg (26×13 viewBox).
 * Rendered at 2:1 aspect (52×26) and sized via className (h-5 w-auto).
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
      className="h-5 w-auto"
    />
  );
}
