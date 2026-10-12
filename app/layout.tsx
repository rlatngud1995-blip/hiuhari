
import type { Metadata } from "next";
import "./globals.css";

/* =====================================
   하이유헤어 청당점 SEO
===================================== */

const SITE_URL = "https://www.hiuhair.com";

const SITE_NAME = "하이유헤어 청당점";

const TITLE =
  "하이유헤어 청당점 | 천안 청당동 미용실 이해린 디자이너";

const DESCRIPTION =
  "천안 청당동 하이유헤어 이해린 디자이너의 헤어스타일을 만나보세요. 여성 레이어드컷, 펌, 염색, 웨딩염색 상담과 네이버 예약을 안내합니다.";

/* =====================================
   네이버 서치어드바이저 소유확인
   www.hiuhair.com 인증코드
===================================== */

const NAVER_VERIFICATION =
  "35d40404e679ae214179052c24637b2139714f8a";

/* =====================================
   이미지
===================================== */

const FAVICON =
  "/46CDE87F-AF98-43B2-8707-1E1C400F19AC.png";

const OG_IMAGE = "/IMG_1443.jpeg";

/* =====================================
   메타데이터
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
    "하이유헤어 청당점",
    "하이유헤어 이해린",
    "천안 미용실",
    "청당동 미용실",
    "이해린 디자이너",
    "천안 레이어드컷",
    "천안 펌",
    "천안 염색",
    "천안 웨딩염색",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  /* =====================================
     네이버 인증 태그 자동 생성
  ===================================== */

  verification: {
    other: {
      "naver-site-verification":
        NAVER_VERIFICATION,
    },
  },

  /* =====================================
     파비콘
  ===================================== */

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

  /* =====================================
     OpenGraph 설명
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
        url: OG_IMAGE,
        alt: "하이유헤어 청당점 이해린 디자이너",
      },
    ],
  },

  /* =====================================
     SNS 공유
  ===================================== */

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
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
