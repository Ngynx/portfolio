import { iconMap } from "@/lib/icons";
import { navigation } from "@/lib/data/navigation";
import { cn } from "cn";

export function NavLinks({
  className,
  collapsed = false,
}: {
  className?: string;
  /** Icon-only chips in the collapsed sidebar rail. Topbar leaves this false. */
  collapsed?: boolean;
}) {
  return (
    <nav aria-label="Primary" className={className}>
      {navigation.map((item) => {
        const Icon = iconMap[item.icon];
        return (
          <a
            key={item.href}
            href={item.href}
            title={collapsed ? item.label : undefined}
            className={cn(
              "text-sm font-medium text-muted-foreground transition-colors",
              "hover:bg-muted hover:text-foreground",
              "focus-visible:bg-muted focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
              collapsed
                ? "flex size-9 items-center justify-center rounded-lg p-0"
                : "flex items-center gap-3 rounded-lg px-3 py-2"
            )}
          >
            {Icon ? <Icon className="size-4 shrink-0" aria-hidden /> : null}
            {collapsed ? (
              <span className="sr-only">{item.label}</span>
            ) : (
              item.label
            )}
          </a>
        );
      })}
    </nav>
  );
}
