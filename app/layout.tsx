
import type { Metadata } from "next";
import "./globals.css";

/* =====================================
   하이유헤어 청당점 기본 정보
===================================== */

const SITE_URL = "https://hiuhair.com";

const SITE_NAME = "하이유헤어 청당점";

const TITLE =
  "하이유헤어 청당점 이해린 디자이너 | 천안 청당동 미용실";

const DESCRIPTION =
  "천안 청당동 하이유헤어 청당점 이해린 디자이너 홈페이지. 여성 레이어드컷, 빌드펌, 물결펌, C컬, 매트브라운, 베이지브라운, 루비레드, 블루염색, 붙임머리 등 헤어스타일 포트폴리오와 네이버 예약 안내.";

/* =====================================
   네이버 서치어드바이저 소유확인
   새 인증코드
===================================== */

const NAVER_VERIFICATION =
  "d0255edb43432ea0834785c7719c3f0f8e53aeda";

/* =====================================
   파비콘 및 대표 이미지
===================================== */

const FAVICON =
  "/46CDE87F-AF98-43B2-8707-1E1C400F19AC.png";

const PROFILE_IMAGE = "/IMG_1443.jpeg";

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

  applicationName: SITE_NAME,

  keywords: [
    "하이유헤어",
    "하이유헤어 청당점",
    "하이유헤어 이해린",
    "이해린 디자이너",
    "천안 미용실",
    "천안미용실",
    "청당동 미용실",
    "청당동미용실",
    "천안 여자머리",
    "천안 레이어드컷",
    "천안 빌드펌",
    "천안 물결펌",
    "천안 염색",
    "청당동 펌",
    "천안 붙임머리",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    other: {
      "naver-site-verification": NAVER_VERIFICATION,
    },
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
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: PROFILE_IMAGE,
        alt: "하이유헤어 청당점 이해린 디자이너",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [PROFILE_IMAGE],
  },

  category: "beauty",
};

/* =====================================
   전체 홈페이지 레이아웃
===================================== */

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
