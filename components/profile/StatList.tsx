import type { Profile } from "@/types/content";

export function StatList({ stats }: { stats: Profile["stats"] }) {
  return (
    <dl className="grid auto-cols-fr grid-flow-col gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <dt className="text-xs text-muted-foreground">{stat.label}</dt>
          <dd className="mt-1 font-heading text-lg font-semibold text-foreground">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
