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
          background: "#f1eee6",
          borderRadius: "36px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="120"
          height="120"
        >
          <path d="M7 5v14a7 7 0 0 0 7 7h19a7 7 0 0 1 7 7v10" fill="none" stroke="#276f6b" strokeWidth="5" />
          <circle cx="7" cy="5" r="4" fill="#a96843" />
          <circle cx="40" cy="43" r="4" fill="#a96843" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
