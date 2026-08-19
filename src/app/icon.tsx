import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
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
          background: "#f1eee6",
          borderRadius: "6px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="33"
          height="33"
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
