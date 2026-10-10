
import type { Metadata } from "next";
import "./globals.css";

/* =====================================
   하이유헤어 청당점 기본 정보
===================================== */

const SITE_URL = "https://hiuhair.com";

const TITLE =
  "하이유헤어 청당점 이해린 디자이너 | 천안 청당동 미용실";

const DESCRIPTION =
  "천안 청당동 하이유헤어 청당점 이해린 디자이너 홈페이지. 여성 레이어드컷, 빌드펌, 물결펌, C컬, 브라운 염색, 루비레드, 블루염색, 붙임머리 등 헤어스타일 포트폴리오와 네이버 예약 안내.";

/* =====================================
   네이버 소유확인 코드
===================================== */

const NAVER_CODE =
  "d0255edb43432ea0834785c7719c3f0f8e53aeda";

/* =====================================
   파비콘
===================================== */

const FAVICON =
  "/46CDE87F-AF98-43B2-8707-1E1C400F19AC.png";

/* =====================================
   SEO 메타데이터
===================================== */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: "%s | 하이유헤어 청당점",
  },

  description: DESCRIPTION,

  applicationName: "하이유헤어 청당점",

  keywords: [
    "하이유헤어",
    "하이유헤어 청당점",
    "이해린 디자이너",
    "하이유헤어 이해린",
    "천안미용실",
    "청당동미용실",
    "천안 레이어드컷",
    "천안 빌드펌",
    "천안 여자머리",
    "천안 염색",
    "천안 붙임머리",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: FAVICON,
        type: "image/png",
      },
    ],
    shortcut: FAVICON,
    apple: [
      {
        url: FAVICON,
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "하이유헤어 청당점",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/IMG_1443.jpeg",
        alt: "하이유헤어 청당점 이해린 디자이너",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/IMG_1443.jpeg"],
  },

  category: "beauty",
};

/* =====================================
   전체 홈페이지 레이아웃

   네이버 인증 태그 직접 삽입
===================================== */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content={NAVER_CODE}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
