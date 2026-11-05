import { ImageResponse } from "next/og";

export const alt = "Brian Muigai, backend engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px",
          background: "#fafafa",
          color: "#18181b",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, color: "#0f766e" }}>Brian Muigai</div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
            marginTop: 24,
            maxWidth: 960,
          }}
        >
          Backend engineer building reliable APIs and the data behind them.
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#52525b", marginTop: 40 }}>
          Java, Spring Boot, PostgreSQL. Nairobi, Kenya.
        </div>
      </div>
    ),
    size,
  );
}
