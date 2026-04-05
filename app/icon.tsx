import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Litera B w kolorze beżowym — BASE STUDIO. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5a6b52",
          color: "#F0E6DE",
          fontSize: 22,
          fontWeight: 700,
          fontFamily:
            "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
          lineHeight: 1,
          borderRadius: 7,
        }}
      >
        B
      </div>
    ),
    { ...size }
  );
}
