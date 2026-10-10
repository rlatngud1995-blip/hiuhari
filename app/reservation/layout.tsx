
import type { Metadata } from "next";

/* =====================================
   하이유헤어 청당점 기본 정보
===================================== */

const SITE_URL = "https://hiuhair.com";

const RESERVATION_URL =
  `${SITE_URL}/reservation`;

const FAVICON =
  "/46CDE87F-AF98-43B2-8707-1E1C400F19AC.png";

const PROFILE_IMAGE = "/IMG_1443.jpeg";

const TITLE =
  "이해린 디자이너 예약 | 하이유헤어 청당점";

const DESCRIPTION =
  "천안 청당동 하이유헤어 청당점 이해린 디자이너 예약 안내. 여성 커트, 레이어드컷, 빌드펌, 물결펌, C컬, 브라운 염색, 블루염색, 붙임머리 상담 및 문자 예약 신청.";

/* =====================================
   예약 페이지 SEO 메타데이터
===================================== */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    absolute: TITLE,
  },

  description: DESCRIPTION,

  keywords: [
    "하이유헤어 청당점 예약",
    "이해린 디자이너 예약",
    "하이유헤어 이해린",
    "천안 미용실 예약",
    "청당동 미용실 예약",
    "천안 여자머리 예약",
    "천안 레이어드컷",
    "천안 빌드펌",
    "천안 물결펌",
    "천안 염색",
    "천안 붙임머리",
  ],

  alternates: {
    canonical: RESERVATION_URL,
  },

  robots: {
    index: true,
    follow: true,
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
     네이버 / SNS 공유 정보
  ===================================== */

  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "하이유헤어 청당점",
    title: TITLE,
    description: DESCRIPTION,
    url: RESERVATION_URL,

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
};

/* =====================================
   예약 페이지 공통 레이아웃
===================================== */

export default function ReservationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
