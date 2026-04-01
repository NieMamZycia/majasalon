import { ImageSkeleton } from "@/components/image-skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-24 sm:px-6 lg:px-8">
      <div className="space-y-3">
        <ImageSkeleton className="h-10 max-w-md rounded-lg" />
        <ImageSkeleton className="h-5 max-w-xl rounded-lg" />
      </div>
      <ImageSkeleton className="h-[40vh] w-full rounded-2xl" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ImageSkeleton className="h-64 rounded-2xl" />
        <ImageSkeleton className="h-64 rounded-2xl" />
        <ImageSkeleton className="h-64 rounded-2xl" />
      </div>
    </div>
  );
}
