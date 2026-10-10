
import Image from "next/image";
import Link from "next/link";

/* =====================================
   하이유헤어 청당점 기본 정보
===================================== */

const PHONE = "01023277653";
const PHONE_VIEW = "010-2327-7653";

const ADDRESS =
  "충남 천안시 동남구 청수4로 16, 2층 201호";

const BOOKING =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&theme=place";

const REVIEWS =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&tab=review&theme=place";

const INSTAGRAM =
  "https://www.instagram.com/hiu_haerin/";

const MAP =
  "https://map.naver.com/p/search/" +
  encodeURIComponent("하이유헤어 청당점");

/* =====================================
   포트폴리오 8개

   8번: 붙임머리 → 웨딩염색
   사진: IMG_1475.jpeg
===================================== */

const portfolio = [
  {
    title: "빌드펌 / 매트브라운",
    en: "BUILD PERM · MATTE BROWN",
    desc: "차분한 컬러에 자연스러운 볼륨을 더한 디자인",
    image: "/IMG_1424.jpeg",
    href: "/hair/build-perm",
  },
  {
    title: "하이레이어드컷 / C컬",
    en: "HIGH LAYERED · C CURL",
    desc: "가볍게 흐르는 레이어와 부드러운 C컬",
    image: "/IMG_1427.jpeg",
    href: "/hair/layered-cut",
  },
  {
    title: "물결펌 / 밀크브라운",
    en: "WAVE PERM · MILK BROWN",
    desc: "부드러운 웨이브와 따뜻한 브라운 컬러",
    image: "/IMG_1423.jpeg",
    href: "/hair/wave-perm",
  },
  {
    title: "베이지브라운",
    en: "BEIGE BROWN",
    desc: "은은한 색감으로 완성하는 세련된 분위기",
    image: "/IMG_1425.jpeg",
    href: "/hair/color",
  },
  {
    title: "루비레드컬러",
    en: "RUBY RED",
    desc: "깊이감 있는 컬러로 표현하는 새로운 분위기",
    image: "/IMG_1433.jpeg",
    href: "/hair/color",
  },
  {
    title: "레이어드 빌드펌",
    en: "LAYERED BUILD PERM",
    desc: "레이어드 실루엣과 자연스러운 볼륨",
    image: "/IMG_1444.jpeg",
    href: "/hair/build-perm",
  },
  {
    title: "블루염색",
    en: "BLUE COLOR",
    desc: "개성 있는 블루 컬러의 감각적인 디자인",
    image: "/IMG_1445.jpeg",
    href: "/hair/color",
  },
  {
    title: "웨딩염색",
    en: "WEDDING HAIR COLOR",
    desc: "웨딩촬영과 결혼식을 준비하는 특별한 컬러 상담",
    image: "/IMG_1475.jpeg",
    href: "/hair/wedding-color",
  },
];

/* =====================================
   여성 헤어 시술 카테고리
===================================== */

const services = [
  {
    number: "01",
    english: "CUT & LAYER",
    title: "여성 커트",
    desc: "얼굴형과 모발의 흐름을 고려한 레이어드 디자인",
    links: [
      {
        name: "레이어드컷 자세히 보기",
        href: "/hair/layered-cut",
      },
    ],
  },
  {
    number: "02",
    english: "PERM & WAVE",
    title: "여성 펌",
    desc: "자연스러운 볼륨과 부드러운 웨이브 디자인",
    links: [
      { name: "빌드펌", href: "/hair/build-perm" },
      { name: "물결펌", href: "/hair/wave-perm" },
    ],
  },
  {
    number: "03",
    english: "COLOR DESIGN",
    title: "여성 염색",
    desc: "베이지브라운 · 루비레드 · 블루 · 베이비핑크",
    links: [
      { name: "염색 자세히 보기", href: "/hair/color" },
    ],
  },
  {
    number: "04",
    english: "WEDDING HAIR COLOR",
    title: "웨딩염색",
    desc: "웨딩촬영과 결혼식을 위한 헤어 컬러 상담",
    links: [
      {
        name: "웨딩염색 자세히 보기",
        href: "/hair/wedding-color",
      },
    ],
  },
];

/* =====================================
   이해린 디자이너 학력 및 자격
===================================== */

const qualifications = [
  "유원대학교 뷰티케어학과 졸업",
  "미용 종합면허증",
  "헤어 국가자격증",
  "메이크업 국가자격증",
];

const extraQualifications = [
  "Makeup 3급 자격증",
  "Makeup 2급 자격증",
  "방송분장사 3급 자격증",
  "Trichologist 자격증",
  "Personal Color Consultant 자격증",
  "HISTEMO HEAD SPA 수료",
];

const awards = [
  "전국미용경연대회 Permanent 은상",
  "전국미용경연대회 Haircolor 동상",
  "전국미용경진대회 Hair design perm 우수상",
  "맛과멋창의력경진대회 Permanent 은상",
];

/* =====================================
   기존 네이버 고객 평가 유지
===================================== */

const feedback = [
  { title: "원하는 스타일로 잘해줘요", value: "259명" },
  { title: "친절해요", value: "218명" },
  { title: "시술이 꼼꼼해요", value: "168명" },
  { title: "스타일 추천을 잘해줘요", value: "146명" },
  { title: "트렌디해요", value: "73명" },
];

const styleCards = [
  { title: "레이어드컷", href: "/hair/layered-cut" },
  { title: "빌드펌", href: "/hair/build-perm" },
  { title: "물결펌", href: "/hair/wave-perm" },
  { title: "여성 염색", href: "/hair/color" },
  { title: "웨딩염색", href: "/hair/wedding-color" },
];

/* =====================================
   공통 컴포넌트
===================================== */

function BookingButton({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a
      href={BOOKING}
      target="_blank"
      rel="noopener noreferrer"
      className={
        light
          ? "ha-btn ha-btn-light"
          : "ha-btn ha-btn-primary"
      }
    >
      {children}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/* =====================================
   메인 홈페이지
===================================== */

export default function HomePage() {
  return (
    <div className="ha-page">
      <style>{`
        .ha-page {
          --blue: #193b71;
          --ink: #262a30;
          --muted: #797d84;
          --cream: #f7f5f1;
          --line: #e9e4dd;
          background: #fff;
          color: var(--ink);
          overflow-x: clip;
        }

        .ha-page * {
          box-sizing: border-box;
        }

        .ha-page a {
          text-decoration: none;
        }

        .ha-wrap {
          width: min(1120px, calc(100% - 36px));
          margin: 0 auto;
        }

        .ha-eyebrow {
          color: var(--blue);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.3px;
          line-height: 1.8;
        }

        .ha-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          min-height: 48px;
          padding: 13px 22px;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
          border: 1px solid var(--blue);
          border-radius: 3px;
          transition: transform .2s ease;
        }

        .ha-btn:hover {
          transform: translateY(-2px);
        }

        .ha-btn-primary {
          background: var(--blue);
          color: #fff;
        }

        .ha-btn-outline {
          background: transparent;
          color: var(--blue);
        }

        .ha-btn-light {
          background: #fff;
          border-color: #fff;
          color: var(--blue);
        }

        .ha-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 25px;
        }

        .ha-center {
          justify-content: center;
        }

        /* HEADER */

        .ha-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255,255,255,.97);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--line);
        }

        .ha-header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          min-height: 73px;
        }

        .ha-brand {
          display: flex;
          flex-direction: column;
          color: var(--blue);
          font-family: Georgia, serif;
          font-size: 26px;
          letter-spacing: 2px;
          line-height: 1;
          white-space: nowrap;
        }

        .ha-brand small {
          font-family: Arial, sans-serif;
          font-size: 9px;
          letter-spacing: 3px;
          margin-top: 9px;
        }

        .ha-nav {
          display: flex;
          align-items: center;
          gap: 19px;
          font-size: 11px;
          font-weight: 700;
        }

        .ha-nav a:hover {
          color: var(--blue);
        }

        /* HERO */

        .ha-hero {
          text-align: center;
          padding: 87px 18px 80px;
          background: radial-gradient(
            ellipse at top,
            #fff 0%,
            #f7f5f1 85%
          );
        }

        .ha-hero-brand {
          font-family: Georgia, serif;
          font-weight: 400;
          font-size: clamp(39px, 9vw, 105px);
          letter-spacing: -2px;
          white-space: nowrap;
          color: var(--blue);
          line-height: 1.2;
          margin: 29px 0 14px;
        }

        .ha-hero-sub {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          max-width: 320px;
          margin: 0 auto 48px;
          font-size: 10px;
          letter-spacing: 4px;
          color: var(--blue);
        }

        .ha-hero-sub:before,
        .ha-hero-sub:after {
          content: "";
          flex: 1;
          height: 1px;
          background: #bdc5d2;
        }

        .ha-hero h2 {
          font-size: clamp(28px, 5vw, 45px);
          font-weight: 400;
          letter-spacing: -1.5px;
          line-height: 1.5;
          margin: 0 0 18px;
          word-break: keep-all;
        }

        .ha-hero h2 strong {
          color: var(--blue);
          font-weight: 600;
        }

        .ha-hero-desc {
          color: var(--muted);
          font-size: 13px;
          line-height: 2;
        }

        .ha-social {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--blue);
          font-weight: 700;
          margin-top: 23px;
        }

        .ha-hero-scroll {
          display: block;
          color: var(--blue);
          font-size: 10px;
          letter-spacing: 1.7px;
          margin-top: 44px;
        }

        .ha-strip {
          background: var(--blue);
          color: white;
          padding: 21px 12px;
          text-align: center;
          font-size: 10px;
          letter-spacing: 3px;
        }

        /* COMMON SECTIONS */

        .ha-section {
          padding: 85px 0;
          scroll-margin-top: 85px;
        }

        .ha-cream {
          background: var(--cream);
        }

        .ha-heading {
          text-align: center;
          margin-bottom: 40px;
        }

        .ha-heading h2 {
          font-family: Georgia, "Noto Sans KR", serif;
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 400;
          margin: 12px 0 17px;
          letter-spacing: -1px;
        }

        .ha-heading p {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.9;
          margin: 0;
        }

        /* PORTFOLIO */

        .ha-gallery {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 31px 16px;
        }

        .ha-work {
          min-width: 0;
        }

        .ha-work-photo {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #e8e3dc;
          border-radius: 4px;
        }

        .ha-work-photo img {
          object-fit: cover;
          transition: transform .4s ease;
        }

        .ha-work:hover img {
          transform: scale(1.04);
        }

        .ha-work-index {
          position: absolute;
          top: 12px;
          left: 12px;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,.95);
          color: var(--blue);
          font-family: Georgia, serif;
          font-size: 14px;
        }

        .ha-work-english {
          margin-top: 16px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--blue);
          line-height: 1.7;
        }

        .ha-work h3 {
          font-size: 16px;
          margin: 8px 0;
          line-height: 1.55;
          word-break: keep-all;
        }

        .ha-work p {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.75;
          margin: 0 0 13px;
          word-break: keep-all;
        }

        .ha-text-link {
          color: var(--blue);
          font-size: 12px;
          font-weight: 700;
        }

        .ha-instagram-feature {
          background: var(--cream);
          border: 1px solid var(--line);
          padding: 28px;
          margin-top: 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .ha-instagram-feature h3 {
          font-size: 23px;
          font-weight: 500;
          margin: 9px 0;
        }

        .ha-instagram-feature p {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.8;
        }

        /* DESIGNER */

        .ha-about-grid {
          display: grid;
          grid-template-columns: .92fr 1.08fr;
          align-items: center;
          gap: 70px;
        }

        .ha-portrait {
          position: relative;
          aspect-ratio: 4 / 5.2;
          background: #e5e0dc;
          overflow: hidden;
          border-radius: 4px;
        }

        .ha-portrait img {
          object-fit: cover;
          object-position: center 35%;
        }

        .ha-about h2 {
          font-size: clamp(31px, 4vw, 44px);
          font-weight: 500;
          line-height: 1.45;
          letter-spacing: -1px;
          margin: 14px 0 22px;
        }

        .ha-about h2 strong {
          color: var(--blue);
        }

        .ha-about p {
          color: #71757c;
          font-size: 14px;
          line-height: 2.1;
          word-break: keep-all;
        }

        .ha-credentials {
          border-top: 1px solid #ded9d2;
          margin-top: 25px;
          padding-top: 23px;
        }

        .ha-credentials-title {
          color: var(--blue);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 13px;
        }

        .ha-credentials ul {
          padding-left: 18px;
          margin: 0;
        }

        .ha-credentials li {
          font-size: 12px;
          color: #646870;
          line-height: 2;
        }

        .ha-details {
          border-top: 1px solid #e0dcd7;
          margin-top: 19px;
        }

        .ha-details summary {
          cursor: pointer;
          color: var(--blue);
          font-size: 12px;
          font-weight: 700;
          padding: 17px 0;
        }

        .ha-details-content {
          padding-bottom: 18px;
        }

        .ha-details-content strong {
          font-size: 12px;
          display: block;
          margin: 12px 0;
        }

        /* SERVICES */

        .ha-services {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .ha-service {
          background: #fff;
          border: 1px solid #e7e2dc;
          border-radius: 4px;
          padding: 25px 20px;
          min-height: 245px;
          display: flex;
          flex-direction: column;
        }

        .ha-service-number {
          color: var(--blue);
          font: 24px Georgia, serif;
        }

        .ha-service h3 {
          font-size: 19px;
          margin: 19px 0 8px;
        }

        .ha-service small {
          color: var(--blue);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .ha-service p {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.8;
        }

        .ha-service-links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
          padding-top: 18px;
        }

        .ha-service-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 37px;
          padding: 9px 11px;
          border: 1px solid #c7d2e2;
          background: #f7f9fc;
          color: var(--blue);
          font-size: 11px;
          font-weight: 700;
          border-radius: 3px;
        }

        .ha-service-link:hover {
          background: var(--blue);
          color: #fff;
        }

        /* REVIEWS */

        .ha-reviews {
          overflow: hidden;
        }

        .ha-review-summary {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 32px;
          margin-bottom: 38px;
          text-align: center;
        }

        .ha-review-summary strong {
          display: block;
          font: 400 42px Georgia, serif;
          color: var(--blue);
        }

        .ha-review-summary span {
          color: var(--muted);
          font-size: 11px;
        }

        .ha-review-divider {
          width: 1px;
          height: 42px;
          background: var(--line);
        }

        .ha-marquee-window {
          overflow: hidden;
          width: 100%;
          padding: 5px 0 20px;
        }

        .ha-marquee-track {
          display: flex;
          width: max-content;
          animation: ha-marquee 64s linear infinite;
        }

        .ha-marquee-window:hover .ha-marquee-track,
        .ha-marquee-window:focus-within .ha-marquee-track {
          animation-play-state: paused;
        }

        .ha-marquee-set {
          display: flex;
          flex-shrink: 0;
          gap: 14px;
          padding-right: 14px;
        }

        .ha-review-card {
          width: 260px;
          min-height: 207px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: var(--cream);
          border: 1px solid var(--line);
          border-radius: 5px;
          flex-shrink: 0;
        }

        .ha-review-card small {
          color: var(--blue);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .ha-review-card h3 {
          font-size: 18px;
          line-height: 1.6;
          margin: 15px 0;
          word-break: keep-all;
        }

        .ha-review-card strong {
          color: var(--blue);
          font: 500 23px Georgia, serif;
        }

        .ha-review-card p {
          font-size: 11px;
          color: var(--muted);
          margin: 8px 0 0;
        }

        @keyframes ha-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .ha-review-note {
          text-align: center;
          font-size: 11px;
          color: var(--muted);
          line-height: 1.9;
          padding: 0 20px;
          margin-top: 20px;
        }

        /* BOOKING */

        .ha-booking {
          background: var(--blue);
          color: #fff;
          text-align: center;
          padding: 80px 20px;
        }

        .ha-booking h2 {
          font-size: clamp(29px, 5vw, 44px);
          font-weight: 400;
          line-height: 1.5;
          margin: 17px 0;
        }

        .ha-booking p {
          color: #dce4ef;
          font-size: 13px;
          line-height: 2;
        }

        .ha-booking .ha-btn-outline {
          color: #fff;
          border-color: #dce4ef;
        }

        /* LOCATION */

        .ha-location {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .ha-location-info,
        .ha-location-map {
          background: #fff;
          border: 1px solid var(--line);
          padding: 36px;
          min-height: 335px;
        }

        .ha-location-info h3 {
          font-size: 23px;
          margin: 0 0 24px;
        }

        .ha-location-info dt {
          color: var(--blue);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-top: 18px;
        }

        .ha-location-info dd {
          font-size: 13px;
          line-height: 1.9;
          margin: 7px 0;
        }

        .ha-location-map {
          background: #eae7e1;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .ha-location-map h3 {
          color: var(--blue);
          font: 400 35px Georgia, serif;
          letter-spacing: 2px;
        }

        .ha-location-map p {
          font-size: 12px;
          color: #707681;
          line-height: 2;
        }

        /* REGIONAL LINK */

        .ha-area-link-section {
          background: var(--cream);
          border-top: 1px solid var(--line);
          padding: 20px 15px;
          text-align: center;
        }

        .ha-area-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          color: var(--blue);
          font-size: 12px;
          font-weight: 700;
          line-height: 1.8;
        }

        /* FOOTER */

        .ha-footer {
          background: #1c2432;
          color: white;
          padding: 49px 0 108px;
        }

        .ha-footer-inner {
          display: flex;
          justify-content: space-between;
          gap: 30px;
        }

        .ha-footer .ha-brand {
          color: white;
        }

        .ha-footer p {
          color: #bfc6d2;
          font-size: 11px;
          line-height: 2;
        }

        .ha-mobile-bar {
          display: none;
        }

        /* RESPONSIVE */

        @media (max-width: 950px) {
          .ha-nav { display: none; }

          .ha-gallery {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .ha-about-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .ha-portrait {
            max-width: 570px;
            width: 100%;
            margin: auto;
          }

          .ha-services {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .ha-header-inner { min-height: 66px; }
          .ha-brand { font-size: 23px; }
          .ha-hero { padding: 70px 15px 63px; }

          .ha-hero-brand {
            font-size: clamp(36px, 10vw, 58px);
          }

          .ha-hero h2 { font-size: 29px; }
          .ha-section { padding: 65px 0; }
          .ha-heading { margin-bottom: 31px; }
          .ha-heading h2 { font-size: 35px; }
          .ha-gallery { gap: 25px 12px; }
          .ha-work h3 { font-size: 14px; }
          .ha-work p { font-size: 11px; }

          .ha-instagram-feature {
            flex-direction: column;
            align-items: flex-start;
            padding: 23px;
          }

          .ha-instagram-feature .ha-btn {
            width: 100%;
          }

          .ha-services { gap: 10px; }

          .ha-service {
            padding: 20px 15px;
            min-height: 250px;
          }

          .ha-service h3 { font-size: 17px; }
          .ha-service-link { font-size: 10px; }
          .ha-review-card { width: 250px; }

          .ha-location {
            grid-template-columns: 1fr;
          }

          .ha-location-info,
          .ha-location-map {
            padding: 27px;
          }

          .ha-footer-inner {
            flex-direction: column;
          }

          .ha-mobile-bar {
            display: grid;
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 100;
            grid-template-columns: 1fr 1fr 1.5fr;
            gap: 8px;
            padding:
              10px 12px
              calc(10px + env(safe-area-inset-bottom));
            background: #fff;
            border-top: 1px solid var(--line);
          }

          .ha-mobile-bar a {
            min-height: 47px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 12px;
            font-weight: 700;
            color: var(--blue);
            background: #f1efeb;
            border-radius: 3px;
          }

          .ha-mobile-bar a:last-child {
            color: white;
            background: var(--blue);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ha-marquee-track { animation: none; }
          .ha-marquee-window { overflow-x: auto; }
          .ha-work-photo img,
          .ha-btn { transition: none; }
        }
      `}</style>

      {/* HEADER */}

      <header className="ha-header">
        <div className="ha-wrap ha-header-inner">
          <Link href="/" className="ha-brand">
            HI U HAIR
            <small>CHEONGDANG</small>
          </Link>

          <nav className="ha-nav">
            <a href="#portfolio">PORTFOLIO</a>
            <a href="#about">DESIGNER</a>
            <a href="#services">SERVICES</a>
            <a href="#reviews">REVIEWS</a>
            <Link href="/hair">HAIR MENU</Link>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM ↗
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}

        <section className="ha-hero">
          <span className="ha-eyebrow">
            PERSONAL HAIR ATELIER · CHEONGDANG
          </span>

          <h1 className="ha-hero-brand">HI U HAIR</h1>
          <div className="ha-hero-sub">CHEONGDANG</div>

          <h2>
            당신의 분위기를
            <br />
            <strong>디자인하다.</strong>
          </h2>

          <p className="ha-hero-desc">
            섬세한 손길과 감각적인 스타일
            <br />
            이해린 디자이너의 여성 헤어 디자인
          </p>

          <div className="ha-actions ha-center">
            <BookingButton>네이버 예약하기 ↗</BookingButton>

            <Link
              href="/hair"
              className="ha-btn ha-btn-outline"
            >
              헤어 시술 알아보기
            </Link>
          </div>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="ha-social"
          >
            <InstagramIcon />
            Instagram @hiu_haerin ↗
          </a>

          <a href="#portfolio" className="ha-hero-scroll">
            EXPLORE THE COLLECTION ↓
          </a>
        </section>

        <div className="ha-strip">
          HAIR DESIGN BY HAERIN LEE
        </div>

        {/* PORTFOLIO */}

        <section id="portfolio" className="ha-section">
          <div className="ha-wrap">
            <div className="ha-heading">
              <span className="ha-eyebrow">
                THE HAIR COLLECTION
              </span>

              <h2>Signature Hair</h2>

              <p>
                당신의 취향에 맞는
                아름다운 변화를 만나보세요.
              </p>
            </div>

            <div className="ha-gallery">
              {portfolio.map((item, index) => (
                <article className="ha-work" key={item.image}>
                  <Link
                    href={item.href}
                    aria-label={`${item.title} 자세히 보기`}
                  >
                    <div className="ha-work-photo">
                      <Image
                        src={item.image}
                        alt={
                          item.href === "/hair/wedding-color"
                            ? "웨딩염색 스타일 상담 대표 이미지"
                            : item.title
                        }
                        fill
                        priority={index < 2}
                        sizes="(max-width:950px) 50vw, 25vw"
                      />

                      <span className="ha-work-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </Link>

                  <div className="ha-work-english">
                    {item.en}
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  <Link href={item.href} className="ha-text-link">
                    시술 자세히 보기 →
                  </Link>
                </article>
              ))}
            </div>

            <div className="ha-instagram-feature">
              <div>
                <span className="ha-eyebrow">
                  FOLLOW THE HAIR JOURNEY
                </span>

                <h3>More Styles on Instagram</h3>

                <p>
                  이해린 디자이너의 다양한 헤어스타일을
                  인스타그램에서 만나보세요.
                </p>
              </div>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="ha-btn ha-btn-primary"
              >
                <InstagramIcon />
                @hiu_haerin ↗
              </a>
            </div>
          </div>
        </section>

        {/* DESIGNER */}

        <section id="about" className="ha-section ha-cream">
          <div className="ha-wrap ha-about-grid">
            <div className="ha-portrait">
              <Image
                src="/IMG_1443.jpeg"
                alt="이해린 디자이너 프로필"
                fill
                sizes="(max-width:950px) 100vw, 45vw"
              />
            </div>

            <div className="ha-about">
              <span className="ha-eyebrow">
                MEET YOUR DESIGNER
              </span>

              <h2>
                아름다움의 디테일을
                <br />
                완성하는 <strong>이해린</strong>
              </h2>

              <p>
                안녕하세요.
                <br />
                하이유헤어 청당점 이해린 디자이너입니다.
              </p>

              <p>
                고객님의 취향과 모발의 특성,
                평소 스타일링 방법까지 함께 고려하여
                자연스럽고 감각적인 변화를 고민합니다.
              </p>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="ha-social"
              >
                <InstagramIcon />
                @hiu_haerin ↗
              </a>

              <div className="ha-credentials">
                <div className="ha-credentials-title">
                  EDUCATION & QUALIFICATIONS
                </div>

                <ul>
                  {qualifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <details className="ha-details">
                  <summary>
                    자격 · 수상 경력 전체 보기
                  </summary>

                  <div className="ha-details-content">
                    <strong>자격 및 수료</strong>

                    <ul>
                      {extraQualifications.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <strong>수상 경력</strong>

                    <ul>
                      {awards.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>

              <div className="ha-actions">
                <BookingButton>
                  이해린 디자이너 예약 ↗
                </BookingButton>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section
          id="services"
          className="ha-section ha-cream"
          style={{ paddingTop: 0 }}
        >
          <div className="ha-wrap">
            <div className="ha-heading">
              <span className="ha-eyebrow">
                OUR SPECIALTIES
              </span>

              <h2>Hair Services</h2>

              <p>
                원하는 시술을 선택하면
                스타일별 상세 안내로 이동합니다.
              </p>
            </div>

            <div className="ha-services">
              {services.map((service) => (
                <article
                  className="ha-service"
                  key={service.number}
                >
                  <div className="ha-service-number">
                    {service.number}
                  </div>

                  <h3>{service.title}</h3>
                  <small>{service.english}</small>
                  <p>{service.desc}</p>

                  <div className="ha-service-links">
                    {service.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="ha-service-link"
                      >
                        {link.name} →
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="ha-actions ha-center">
              <Link
                href="/hair"
                className="ha-btn ha-btn-outline"
              >
                전체 헤어 시술 보기 →
              </Link>
            </div>
          </div>
        </section>

        {/* REVIEWS */}

        <section id="reviews" className="ha-section ha-reviews">
          <div className="ha-wrap ha-heading">
            <span className="ha-eyebrow">
              VOICES FROM OUR CLIENTS
            </span>

            <h2>Client Feedback</h2>

            <p>
              네이버 예약 고객들이 선택한 좋은 점과
              <br />
              다양한 헤어스타일
            </p>
          </div>

          <div className="ha-review-summary">
            <div>
              <strong>293</strong>
              <span>예약자 리뷰</span>
            </div>

            <div className="ha-review-divider" />

            <div>
              <strong>263</strong>
              <span>좋은 점 평가 참여</span>
            </div>
          </div>

          <div className="ha-marquee-window">
            <div className="ha-marquee-track">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="ha-marquee-set"
                  aria-hidden={copy === 1}
                >
                  {feedback.map((review) => (
                    <a
                      key={`${copy}-${review.title}`}
                      href={REVIEWS}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={copy === 1 ? -1 : 0}
                      className="ha-review-card"
                    >
                      <div>
                        <small>
                          NAVER CUSTOMER FEEDBACK
                        </small>
                        <h3>{review.title}</h3>
                      </div>

                      <div>
                        <strong>{review.value}</strong>
                        <p>네이버 고객 선택 평가</p>
                      </div>
                    </a>
                  ))}

                  {styleCards.map((style) => (
                    <Link
                      key={`${copy}-${style.title}`}
                      href={style.href}
                      tabIndex={copy === 1 ? -1 : 0}
                      className="ha-review-card"
                    >
                      <div>
                        <small>HAIR DESIGN STYLE</small>
                        <h3>{style.title}</h3>
                      </div>

                      <div>
                        <strong>HI U HAIR</strong>
                        <p>시술 스타일 소개</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="ha-actions ha-center">
            <a
              href={REVIEWS}
              target="_blank"
              rel="noopener noreferrer"
              className="ha-btn ha-btn-outline"
            >
              네이버 고객 리뷰 보기 ↗
            </a>

            <BookingButton>
              네이버 예약하기 ↗
            </BookingButton>
          </div>

          <p className="ha-review-note">
            고객 평가 수치는 2026년 10월 10일 확인 기준이며
            자동 갱신되지 않습니다.
            <br />
            고객 평가 5개와 스타일 소개 5개로 구성되어 있습니다.
          </p>
        </section>

        {/* BOOKING */}

        <section className="ha-booking">
          <span
            className="ha-eyebrow"
            style={{ color: "#dce4ef" }}
          >
            A BEAUTIFUL CHANGE BEGINS HERE
          </span>

          <h2>
            당신의 새로운 분위기,
            <br />
            여기에서 시작됩니다.
          </h2>

          <p>
            HI U HAIR CHEONGDANG
            <br />
            Designer Haerin Lee
          </p>

          <div className="ha-actions ha-center">
            <BookingButton light>
              네이버 예약하기 ↗
            </BookingButton>

            <Link
              href="/reservation"
              className="ha-btn ha-btn-outline"
            >
              홈페이지 문자 예약
            </Link>
          </div>
        </section>

        {/* LOCATION */}

        <section id="location" className="ha-section ha-cream">
          <div className="ha-wrap">
            <div className="ha-heading">
              <span className="ha-eyebrow">
                FIND YOUR SALON
              </span>

              <h2>Visit HI U HAIR</h2>
              <p>천안 청당동 하이유헤어 청당점</p>
            </div>

            <div className="ha-location">
              <div className="ha-location-info">
                <h3>하이유헤어 청당점</h3>

                <dl>
                  <dt>DESIGNER</dt>
                  <dd>이해린 디자이너</dd>

                  <dt>ADDRESS</dt>
                  <dd>{ADDRESS}</dd>

                  <dt>CONTACT</dt>
                  <dd>
                    <a href={`tel:${PHONE}`}>{PHONE_VIEW}</a>
                  </dd>

                  <dt>INSTAGRAM</dt>
                  <dd>
                    <a
                      href={INSTAGRAM}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @hiu_haerin ↗
                    </a>
                  </dd>
                </dl>

                <div className="ha-actions">
                  <a
                    href={`tel:${PHONE}`}
                    className="ha-btn ha-btn-primary"
                  >
                    전화 문의
                  </a>

                  <a
                    href={`sms:${PHONE}`}
                    className="ha-btn ha-btn-outline"
                  >
                    문자 상담
                  </a>
                </div>
              </div>

              <div className="ha-location-map">
                <div>
                  <span className="ha-eyebrow">
                    CHEONGDANG · CHEONAN
                  </span>

                  <h3>HI U HAIR</h3>

                  <p>
                    충남 천안시 동남구 청수4로 16
                    <br />
                    2층 201호
                  </p>

                  <a
                    href={MAP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ha-btn ha-btn-primary"
                  >
                    네이버 지도 보기 ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 지역별 안내 링크 유지 */}

      <div className="ha-area-link-section">
        <Link href="/area" className="ha-area-link">
          천안 여자머리 · 지역별 시술 안내
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* FOOTER */}

      <footer className="ha-footer">
        <div className="ha-wrap ha-footer-inner">
          <div>
            <Link href="/" className="ha-brand">
              HI U HAIR
              <small>CHEONGDANG</small>
            </Link>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="ha-social"
              style={{ color: "#fff" }}
            >
              <InstagramIcon />
              @hiu_haerin ↗
            </a>
          </div>

          <p>
            하이유헤어 청당점 · 이해린 디자이너
            <br />
            {ADDRESS}
            <br />
            {PHONE_VIEW}
            <br />
            © {new Date().getFullYear()} HI U HAIR.
            All rights reserved.
          </p>
        </div>
      </footer>

      {/* MOBILE BAR */}

      <div className="ha-mobile-bar">
        <a href={`tel:${PHONE}`}>전화</a>
        <a href={`sms:${PHONE}`}>문자</a>
        <a
          href={BOOKING}
          target="_blank"
          rel="noopener noreferrer"
        >
          네이버 예약
        </a>
      </div>
    </div>
  );
}
