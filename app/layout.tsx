
import type { Metadata } from "next";
import "./globals.css";

/* =====================================
   하이유헤어 청당점 기본 설정
===================================== */

const SITE_URL = "https://hiuhair.com";

const SITE_NAME = "하이유헤어 청당점";

const TITLE =
  "하이유헤어 청당점 이해린 디자이너 | 천안 청당동 미용실";

const DESCRIPTION =
  "천안 청당동 하이유헤어 청당점 이해린 디자이너 공식 개인 홈페이지. 여성 레이어드컷, 빌드펌, 물결펌, C컬, 매트브라운, 베이지브라운, 블루염색, 붙임머리 등 헤어스타일 포트폴리오와 네이버 예약 안내.";

/* =====================================
   파비콘 이미지
   public 폴더 실제 파일명
===================================== */

const FAVICON =
  "/46CDE87F-AF98-43B2-8707-1E1C400F19AC.png";

const PROFILE_IMAGE = "/IMG_1443.jpeg";

/* =====================================
   네이버 서치어드바이저
===================================== */

const NAVER_TOKEN =
  process.env.NAVER_SITE_VERIFICATION?.trim();

/* =====================================
   홈페이지 SEO 메타데이터
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

  verification: NAVER_TOKEN
    ? {
        other: {
          "naver-site-verification": NAVER_TOKEN,
        },
      }
    : undefined,

  /* =====================================
     파비콘 / 모바일 아이콘
  ===================================== */

  icons: {
    icon: [
      {
        url: FAVICON,
        type: "image/png",
        sizes: "any",
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

  /* =====================================
     SNS 공유 정보
  ===================================== */

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
        width: 1200,
        height: 1500,
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
   공통 레이아웃
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
