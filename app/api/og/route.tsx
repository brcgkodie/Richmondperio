import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";

const NAVY = "#182838";
const TEAL = "#1C818D";
const CREAM = "#F1ECE8";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Grove Periodontists";
  const subtitle =
    searchParams.get("subtitle") ??
    "Board-Certified Periodontists — Richmond & Midlothian, VA";

  const [serifFont, logoData] = await Promise.all([
    fetch(new URL("/fonts/InstrumentSerif-Regular.woff2", req.url)).then((r) =>
      r.arrayBuffer(),
    ),
    fetch(new URL("/images/grove-logo-white.png", req.url)).then((r) =>
      r.arrayBuffer(),
    ),
  ]);

  const logoSrc = `data:image/png;base64,${Buffer.from(logoData).toString(
    "base64",
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: NAVY,
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* subtle top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 6,
            backgroundColor: TEAL,
            display: "flex",
          }}
        />
        {/* logo row */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" height={44} />
        </div>

        {/* headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontFamily: "Instrument Serif",
              fontSize: title.length > 42 ? 64 : 80,
              lineHeight: 1.05,
              color: CREAM,
              maxWidth: 980,
              display: "flex",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#8BB5BB",
              display: "flex",
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Instrument Serif",
          data: serifFont,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
