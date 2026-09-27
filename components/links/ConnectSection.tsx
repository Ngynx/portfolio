import { FadeIn } from "@/components/motion";
import { SocialIcon } from "@/components/links/SocialIcon";
import { socialLinks } from "@/lib/data/links";

export function ConnectSection() {
  return (
    <section id="connect" className="scroll-mt-20 space-y-6">
      <FadeIn>
        <div className="flex flex-col gap-1">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
            Connect
          </h2>
          <p className="text-sm text-muted-foreground">
            Where to find me online.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        {/* Constrained stack: full-width pills across the whole page column
            would read as bars, not buttons. mx-auto centers just the stack —
            the section header stays left-aligned. */}
        <ul className="mx-auto flex w-full max-w-sm flex-col gap-3">
          {socialLinks.map((link) => {
            const isExternal = !link.href.startsWith("mailto:");
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-green-600 bg-white px-4 py-2.5 font-semibold text-green-700 transition-colors hover:bg-[#f0faf0] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <SocialIcon icon={link.icon} />
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </FadeIn>
    </section>
  );
}
