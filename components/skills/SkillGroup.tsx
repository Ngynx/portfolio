import { SkillBadge } from "@/components/skills/SkillBadge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { iconMap } from "@/lib/icons";
import type { SkillGroup as SkillGroupData } from "@/types/content";

export function SkillGroup({ group }: { group: SkillGroupData }) {
  const Icon = iconMap[group.icon];

  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-center gap-2">
        {Icon ? (
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e8f5e9] text-[#0b6b0b]">
            <Icon className="size-4" aria-hidden />
          </span>
        ) : null}
        <CardTitle>{group.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul
          className="flex flex-wrap gap-1.5"
          aria-label={`${group.title} skills`}
        >
          {group.skills.map((skill) => (
            <li key={skill.name}>
              <SkillBadge skill={skill} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
