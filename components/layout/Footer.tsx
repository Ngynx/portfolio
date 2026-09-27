import { socialLinks } from "@/lib/data/links";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ngynx
        </p>
        <nav aria-label="Social links" className="flex gap-4">
          {socialLinks.map((social) => {
            const isExternal = !social.href.startsWith("mailto:");
            return (
              <a
                key={social.name}
                href={social.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {social.name}
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
