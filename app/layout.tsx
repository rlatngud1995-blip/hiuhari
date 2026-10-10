
import type { Metadata } from "next";
import "./globals.css";

const SITE = "https://hiuhair.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "이해린 디자이너 | 하이유헤어 청당점",
    template: "%s | 이해린 디자이너",
  },
  description:
    "천안 청당동 하이유헤어 청당점 이해린 디자이너 개인 홈페이지. 여성 커트, 레이어드컷, 펌, 염색 등 헤어스타일 상담과 예약 안내.",
  keywords: [
    "이해린 디자이너",
    "하이유헤어",
    "하이유헤어 청당점",
    "천안미용실",
    "청당동미용실",
    "천안 여자머리",
    "청당동 레이어드컷",
    "천안 여성펌",
  ],
  alternates: {
    canonical: SITE,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "HI U HAIR",
    title: "이해린 디자이너 | 하이유헤어 청당점",
    description:
      "여성 헤어스타일을 위한 이해린 디자이너 개인 홈페이지.",
    url: SITE,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
