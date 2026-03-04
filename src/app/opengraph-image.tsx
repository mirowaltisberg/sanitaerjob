import { ImageResponse } from "next/og";

export const alt = "sanitaerjob.ch — Sanitärjobs Schweiz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Water droplet */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="120"
          height="120"
          style={{ marginBottom: 32 }}
        >
          <path
            d="M24 3C17.5 13 9 23 9 32C9 40.8 15.7 45 24 45C32.3 45 39 40.8 39 32C39 23 30.5 13 24 3Z"
            fill="#2563eb"
          />
        </svg>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
          }}
        >
          <span style={{ fontSize: 72, fontWeight: 900, color: "#f8fafc", letterSpacing: -1 }}>
            Sanitär
          </span>
          <span style={{ fontSize: 72, fontWeight: 900, color: "#2563eb", letterSpacing: -1 }}>
            job
          </span>
          <span style={{ fontSize: 52, fontWeight: 400, color: "#94a3b8", letterSpacing: -1 }}>
            .ch
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            marginTop: 20,
            letterSpacing: 0.5,
          }}
        >
          Die Jobbörse für Sanitär-Fachkräfte in der Schweiz
        </div>
      </div>
    ),
    { ...size }
  );
}
