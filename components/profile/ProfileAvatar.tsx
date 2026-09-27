import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { profile } from "@/lib/data/profile";
import { cn } from "cn";

type ProfileAvatarProps = {
  className?: string;
  size?: "default" | "sm" | "lg";
};

export function ProfileAvatar({
  className,
  size = "default",
}: ProfileAvatarProps) {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Avatar size={size} className={className}>
      {profile.avatar ? <AvatarImage src={profile.avatar} alt="" /> : null}
      <AvatarFallback
        className={cn(
          "bg-[#e8f5e9] font-semibold text-[#0b6b0b]",
          size === "lg" && "text-lg",
        )}
      >
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}
