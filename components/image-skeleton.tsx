import { cn } from "@/lib/utils";

export function ImageSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-xl bg-muted",
        className
      )}
      aria-hidden
    />
  );
}
