import { iconMap } from "@/lib/icons";
import { navigation } from "@/lib/data/navigation";
import { cn } from "cn";

export function NavLinks({ className }: { className?: string }) {
  return (
    <nav aria-label="Primary" className={className}>
      {navigation.map((item) => {
        const Icon = iconMap[item.icon];
        return (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
              "hover:bg-muted hover:text-foreground",
              "focus-visible:bg-muted focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            )}
          >
            {Icon ? <Icon className="size-4 shrink-0" aria-hidden /> : null}
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
