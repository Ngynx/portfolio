import { Badge } from "@/components/ui/badge";

export function SkillBadgeList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
      {tags.map((tag) => (
        <li key={tag}>
          <Badge variant="secondary">{tag}</Badge>
        </li>
      ))}
    </ul>
  );
}
