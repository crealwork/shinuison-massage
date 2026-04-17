import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2e1a0d 0%, #964d1a 55%, #b96322 100%)",
          color: "#fdf6ef",
          fontSize: 130,
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
