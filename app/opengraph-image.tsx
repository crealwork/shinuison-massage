import { ImageResponse } from "next/og";

export const alt = "身의손 마사지 - 오남 경락·강한압 전문";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #2e1a0d 0%, #4e2a13 50%, #713a18 100%)",
          color: "#fdf6ef",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(227,161,97,0.18) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(185,99,34,0.22) 0%, transparent 45%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 60,
            left: 70,
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.25em",
            color: "#f0c79a",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              background: "#e3a161",
              borderRadius: "50%",
            }}
          />
          ORIENTAL CARE · EST. 身의손
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 70px",
            position: "relative",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 40,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 380,
                lineHeight: 0.85,
                fontWeight: 900,
                color: "#fdf6ef",
              }}
            >
              身
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: 30,
                gap: 14,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 68,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  color: "#fdf6ef",
                }}
              >
                오남 마사지
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: 40,
                  fontWeight: 700,
                  color: "#f0c79a",
                  lineHeight: 1.2,
                  fontFamily: "sans-serif",
                }}
              >
                <div style={{ display: "flex" }}>진짜 시원한 강한 압,</div>
                <div style={{ display: "flex" }}>정확한 경락·통증 전문.</div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 50,
            left: 70,
            right: 70,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div
              style={{
                fontSize: 22,
                color: "#f0c79a",
                letterSpacing: "0.15em",
                fontWeight: 700,
              }}
            >
              身의손 마사지
            </div>
            <div style={{ fontSize: 20, color: "#e3a161" }}>
              경기도 남양주시 오남읍 · 10년+ 경력
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "18px 32px",
              background: "#fdf6ef",
              color: "#2e1a0d",
              borderRadius: 999,
              fontSize: 28,
              fontWeight: 900,
              letterSpacing: "0.05em",
            }}
          >
            010·3419·5755
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
