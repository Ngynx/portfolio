import { Badge } from "@/components/ui/badge";
import type { Skill, SkillLevel } from "@/types/content";

const levelLabel: Record<SkillLevel, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
};

export function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <Badge
      variant="outline"
      title={skill.level ? `Level: ${levelLabel[skill.level]}` : undefined}
    >
      {skill.name}
    </Badge>
  );
}
