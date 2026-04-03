import { MAPS_EMBED } from "@/lib/constants";

export function MapEmbed() {
  return (
    <div className="mx-auto h-[400px] w-full max-w-[500px] overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
      <iframe
        title="Mapa — BASE STUDIO Włocławek"
        src={MAPS_EMBED}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
