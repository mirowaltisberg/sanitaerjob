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
          background: "#2563eb",
          borderRadius: "10px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="33"
          height="33"
        >
          <path
            d="M24 3C17.5 13 9 23 9 32C9 40.8 15.7 45 24 45C32.3 45 39 40.8 39 32C39 23 30.5 13 24 3Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
