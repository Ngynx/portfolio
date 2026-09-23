import Image from "next/image";
import type { ProjectImage } from "@/types/content";

export function ProjectGallery({ images }: { images: ProjectImage[] }) {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-foreground">Gallery</h3>
      <div className="grid gap-3 sm:grid-cols-3">
        {images.map((image, index) => (
          <figure
            key={image.src}
            className={
              index === 0 ? "overflow-hidden rounded-lg border border-border sm:col-span-3" : "overflow-hidden rounded-lg border border-border"
            }
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width ?? 1200}
              height={image.height ?? 675}
              className="h-auto w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
