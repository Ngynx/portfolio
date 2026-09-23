import { Badge } from "@/components/ui/badge";
import type { Skill } from "@/types/content";

const levelLabel: Record<Skill["level"], string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
};

export function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <Badge variant="outline" title={`Level: ${levelLabel[skill.level]}`}>
      {skill.name}
    </Badge>
  );
}
