
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  return new NextResponse(
    "naver-site-verification: naver015ba3ecf7d0fffa4f0a101e8ff5998.html",
    {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300",
      },
    }
  );
}
