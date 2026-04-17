import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

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
          background: "linear-gradient(135deg, #2e1a0d 0%, #713a18 100%)",
          borderRadius: "14px",
          color: "#fdf6ef",
          fontSize: 48,
          fontWeight: 900,
          fontFamily: "serif",
          letterSpacing: "-0.04em",
        }}
      >
        身
      </div>
    ),
    { ...size }
  );
}
