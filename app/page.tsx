
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/* =====================================
   HI U HAIR · PREMIUM HOME
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
   사진 자동 슬라이드
===================================== */

const heroSlides = [
  {
    title: "빌드펌",
    en: "BUILD PERM",
    image: "/IMG_1424.jpeg",
    href: "/hair/build-perm",
  },
  {
    title: "레이어드컷",
    en: "LAYERED CUT",
    image: "/IMG_1427.jpeg",
    href: "/hair/layered-cut",
  },
  {
    title: "물결펌",
    en: "WAVE PERM",
    image: "/IMG_1423.jpeg",
    href: "/hair/wave-perm",
  },
  {
    title: "여성 염색",
    en: "HAIR COLOR",
    image: "/IMG_1433.jpeg",
    href: "/hair/color",
  },
  {
    title: "웨딩염색",
    en: "WEDDING COLOR",
    image: "/IMG_1475.jpeg",
    href: "/hair/wedding-color",
  },
];

/* =====================================
   기존 포트폴리오 8개
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
   기존 시술 카테고리
===================================== */

const services = [
  {
    number: "01",
    en: "CUT & LAYER",
    title: "여성 커트",
    desc: "얼굴형과 모발의 흐름을 고려한 레이어드 디자인",
    image: "/IMG_1427.jpeg",
    links: [
      {
        name: "레이어드컷 자세히 보기",
        href: "/hair/layered-cut",
      },
    ],
  },
  {
    number: "02",
    en: "PERM & WAVE",
    title: "여성 펌",
    desc: "자연스러운 볼륨과 부드러운 웨이브 디자인",
    image: "/IMG_1423.jpeg",
    links: [
      { name: "빌드펌", href: "/hair/build-perm" },
      { name: "물결펌", href: "/hair/wave-perm" },
    ],
  },
  {
    number: "03",
    en: "COLOR DESIGN",
    title: "여성 염색",
    desc: "베이지브라운 · 루비레드 · 블루 · 베이비핑크",
    image: "/IMG_1433.jpeg",
    links: [
      {
        name: "염색 자세히 보기",
        href: "/hair/color",
      },
    ],
  },
  {
    number: "04",
    en: "WEDDING HAIR COLOR",
    title: "웨딩염색",
    desc: "웨딩촬영과 결혼식을 위한 헤어 컬러 상담",
    image: "/IMG_1475.jpeg",
    links: [
      {
        name: "웨딩염색 자세히 보기",
        href: "/hair/wedding-color",
      },
    ],
  },
];

/* =====================================
   디자이너 자격 및 수상 경력
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
   네이버 고객 선택 평가
   실제 리뷰 원문과 구별
===================================== */

const feedback = [
  { title: "원하는 스타일로 잘해줘요", value: "259명" },
  { title: "친절해요", value: "218명" },
  { title: "시술이 꼼꼼해요", value: "168명" },
  { title: "스타일 추천을 잘해줘요", value: "146명" },
  { title: "트렌디해요", value: "73명" },
];

/* =====================================
   공통 컴포넌트
===================================== */

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
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

function BookingButton({
  children,
  light = false,
}: {
  children: ReactNode;
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
      <ArrowIcon />
    </a>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="ha-heading">
      <div className="ha-heading-label">
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
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
          --navy:#193b71;
          --deep:#142945;
          --ink:#292d33;
          --muted:#747983;
          --ivory:#f7f5f1;
          --warm:#f0ede7;
          --line:#e8e3dc;
          --gold:#b39c7b;
          background:white;
          color:var(--ink);
          min-height:100vh;
          font-family:-apple-system,
            BlinkMacSystemFont,
            "Apple SD Gothic Neo",
            "Noto Sans KR",Arial,sans-serif;
          word-break:keep-all;
          overflow-x:clip;
          -webkit-font-smoothing:antialiased;
        }

        .ha-page *,
        .ha-page *:before,
        .ha-page *:after {
          box-sizing:border-box;
        }

        .ha-page a {
          text-decoration:none;
          color:inherit;
        }

        .ha-wrap {
          width:min(1240px,calc(100% - 72px));
          margin:0 auto;
        }

        .ha-eyebrow {
          color:var(--navy);
          font-size:10px;
          font-weight:700;
          letter-spacing:2.4px;
          line-height:1.9;
        }

        .ha-btn {
          display:inline-flex;
          justify-content:center;
          align-items:center;
          gap:17px;
          min-height:52px;
          padding:14px 22px;
          font-size:12px;
          font-weight:700;
          text-align:center;
          border:1px solid var(--navy);
          transition:
            transform .25s,
            background .25s;
        }

        .ha-btn:hover {
          transform:translateY(-2px);
        }

        .ha-btn-primary {
          color:white!important;
          background:var(--navy);
        }

        .ha-btn-outline {
          color:var(--navy)!important;
          background:transparent;
        }

        .ha-btn-light {
          background:white;
          border-color:white;
          color:var(--navy)!important;
        }

        .ha-btn-white-outline {
          color:white!important;
          border-color:rgba(255,255,255,.6);
          background:transparent;
        }

        /* HEADER */

        .ha-header {
          position:sticky;
          top:0;
          z-index:80;
          background:rgba(255,255,255,.97);
          backdrop-filter:blur(16px);
          border-bottom:1px solid var(--line);
        }

        .ha-header-inner {
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:25px;
          min-height:82px;
        }

        .ha-brand {
          display:inline-flex;
          flex-direction:column;
          color:var(--navy)!important;
          font:29px Georgia,serif;
          letter-spacing:2px;
          line-height:1;
          white-space:nowrap;
        }

        .ha-brand small {
          font:600 8px Arial,sans-serif;
          margin-top:9px;
          letter-spacing:4px;
        }

        .ha-nav {
          display:flex;
          align-items:center;
          gap:24px;
          font-size:11px;
          font-weight:700;
        }

        .ha-nav a:hover {
          color:var(--navy);
        }

        .ha-header-booking {
          display:flex;
          align-items:center;
          gap:12px;
          padding:15px 20px;
          font-size:11px;
          font-weight:700;
          background:var(--navy);
          color:white!important;
          white-space:nowrap;
        }

        /* HERO */

        .ha-hero {
          background:var(--ivory);
        }

        .ha-hero-grid {
          display:grid;
          grid-template-columns:1fr .96fr;
          min-height:680px;
        }

        .ha-hero-content {
          display:flex;
          flex-direction:column;
          align-items:flex-start;
          justify-content:center;
          padding:70px 55px 75px 0;
        }

        .ha-hero-brand {
          font:400 clamp(57px,7vw,105px) Georgia,serif;
          color:var(--navy);
          letter-spacing:-4px;
          white-space:nowrap;
          line-height:1.1;
          margin:25px 0 10px;
        }

        .ha-hero-location {
          color:var(--navy);
          letter-spacing:5px;
          font-size:10px;
          font-weight:700;
        }

        .ha-hero-divider {
          width:55px;
          height:1px;
          background:var(--gold);
          margin:39px 0 30px;
        }

        .ha-hero h2 {
          font-size:clamp(34px,3.7vw,52px);
          font-weight:450;
          line-height:1.45;
          letter-spacing:-1.7px;
          margin:0;
        }

        .ha-hero h2 strong {
          color:var(--navy);
          font-weight:600;
        }

        .ha-hero-desc {
          font-size:14px;
          color:var(--muted);
          line-height:2.1;
          margin:25px 0 0;
        }

        .ha-hero-actions {
          display:flex;
          gap:10px;
          flex-wrap:wrap;
          margin-top:29px;
        }

        .ha-hero-social {
          display:inline-flex;
          align-items:center;
          gap:9px;
          color:var(--navy)!important;
          font-size:12px;
          font-weight:700;
          margin-top:27px;
        }

        /* 자동 페이드 슬라이드 */

        .ha-slider {
          position:relative;
          min-height:680px;
          background:#ded8d0;
          overflow:hidden;
          isolation:isolate;
        }

        .ha-slide {
          position:absolute;
          inset:0;
          opacity:0;
          visibility:hidden;
          pointer-events:none;
          animation:ha-fade 20s linear infinite;
          animation-delay:var(--delay);
        }

        .ha-slide img {
          object-fit:cover;
          object-position:center 28%;
        }

        .ha-slide:after {
          content:"";
          position:absolute;
          inset:52% 0 0;
          background:linear-gradient(
            transparent,
            rgba(12,24,41,.45)
          );
          pointer-events:none;
        }

        @keyframes ha-fade {
          0% {
            opacity:0;
            visibility:visible;
          }
          3% {
            opacity:1;
            visibility:visible;
          }
          17% {
            opacity:1;
            visibility:visible;
          }
          20% {
            opacity:0;
            visibility:visible;
          }
          20.01% {
            visibility:hidden;
          }
          100% {
            opacity:0;
            visibility:hidden;
          }
        }

        .ha-slide:first-child {
          opacity:1;
          visibility:visible;
        }

        .ha-slide-label {
          position:absolute;
          z-index:2;
          bottom:33px;
          left:33px;
          right:33px;
          display:flex;
          justify-content:space-between;
          align-items:flex-end;
          gap:15px;
          color:white;
        }

        .ha-slide-label strong {
          font:25px Georgia,serif;
        }

        .ha-slide-label small {
          display:block;
          font-size:10px;
          letter-spacing:1.6px;
          margin-top:10px;
        }

        .ha-slide-label em {
          font-size:9px;
          font-style:normal;
          text-align:right;
          letter-spacing:2px;
          line-height:2;
        }

        .ha-slide-counter {
          position:absolute;
          z-index:10;
          top:23px;
          right:23px;
          color:white;
          background:rgba(15,30,50,.45);
          padding:11px 15px;
          font-size:10px;
          letter-spacing:1px;
          pointer-events:none;
        }

        .ha-slide-progress {
          position:absolute;
          z-index:10;
          left:0;
          right:0;
          bottom:0;
          height:3px;
          background:rgba(255,255,255,.35);
          pointer-events:none;
        }

        .ha-slide-progress:after {
          content:"";
          display:block;
          width:100%;
          height:100%;
          background:white;
          transform-origin:left;
          animation:ha-progress 4s linear infinite;
        }

        @keyframes ha-progress {
          from {transform:scaleX(0)}
          to {transform:scaleX(1)}
        }

        .ha-hero-bottom {
          background:var(--deep);
          color:white;
        }

        .ha-hero-bottom-inner {
          min-height:66px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
        }

        .ha-hero-bottom span,
        .ha-hero-bottom a {
          font-size:10px;
          letter-spacing:1.6px;
        }

        .ha-hero-bottom a {
          display:inline-flex;
          align-items:center;
          gap:10px;
          font-weight:700;
        }

        /* SECTION */

        .ha-section {
          padding:105px 0;
          scroll-margin-top:90px;
        }

        .ha-ivory {
          background:var(--ivory);
        }

        .ha-heading {
          margin-bottom:45px;
        }

        .ha-heading-label {
          display:flex;
          gap:15px;
          align-items:center;
          color:var(--navy);
          font-size:10px;
          font-weight:700;
          letter-spacing:2px;
        }

        .ha-heading-label span:first-child {
          color:var(--gold);
          font:19px Georgia,serif;
        }

        .ha-heading h2 {
          font:400 clamp(36px,5vw,58px) Georgia,serif;
          line-height:1.3;
          letter-spacing:-1px;
          margin:17px 0 15px;
        }

        .ha-heading p {
          color:var(--muted);
          font-size:14px;
          line-height:2;
          margin:0;
        }

        /* PORTFOLIO */

        .ha-gallery {
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:38px 17px;
        }

        .ha-work {
          min-width:0;
        }

        .ha-work-photo {
          position:relative;
          aspect-ratio:4/5;
          overflow:hidden;
          background:#ebe5dd;
        }

        .ha-work-photo img {
          object-fit:cover;
          transition:transform .4s;
        }

        .ha-work:hover img {
          transform:scale(1.045);
        }

        .ha-work-index {
          position:absolute;
          top:12px;
          left:12px;
          display:grid;
          place-items:center;
          width:34px;
          height:34px;
          background:white;
          color:var(--navy);
          font:15px Georgia,serif;
        }

        .ha-work-en {
          color:var(--navy);
          font-size:9px;
          font-weight:700;
          letter-spacing:1px;
          line-height:1.7;
          margin:16px 0 8px;
        }

        .ha-work h3 {
          font-size:16px;
          margin:0 0 8px;
          line-height:1.5;
        }

        .ha-work p {
          color:var(--muted);
          font-size:12px;
          line-height:1.8;
          margin:0 0 13px;
        }

        .ha-text-link {
          display:inline-block;
          color:var(--navy)!important;
          font-size:11px;
          font-weight:700;
          border-bottom:1px solid #c8cfd9;
          padding-bottom:6px;
        }

        .ha-instagram-feature {
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:30px;
          background:var(--ivory);
          border-left:3px solid var(--navy);
          padding:35px 38px;
          margin-top:50px;
        }

        .ha-instagram-feature h3 {
          font:29px Georgia,serif;
          margin:11px 0;
        }

        .ha-instagram-feature p {
          font-size:13px;
          line-height:1.9;
          color:var(--muted);
        }

        /* DESIGNER PROFILE */

        .ha-about-grid {
          display:grid;
          grid-template-columns:.9fr 1.1fr;
          align-items:center;
          gap:8%;
        }

        .ha-portrait-shell {
          min-width:0;
          position:relative;
          padding:0 30px 32px 0;
        }

        .ha-portrait-shell:before {
          content:"";
          position:absolute;
          top:30px;
          left:30px;
          right:0;
          bottom:0;
          border:1px solid #c5b596;
        }

        .ha-portrait {
          position:relative;
          display:block;
          width:100%;
          aspect-ratio:4/5;
          min-height:390px;
          overflow:hidden;
          background:#e6ded8;
        }

        .ha-portrait img {
          object-fit:cover;
          object-position:center 30%;
        }

        .ha-portrait-tag {
          position:absolute;
          bottom:18px;
          left:18px;
          z-index:2;
          padding:12px 15px;
          background:rgba(255,255,255,.95);
          color:var(--navy);
          font:16px Georgia,serif;
        }

        .ha-about-intro {
          font-size:clamp(30px,3.6vw,46px);
          line-height:1.5;
          font-weight:450;
          letter-spacing:-1px;
          margin:18px 0 28px;
        }

        .ha-about-intro strong {
          color:var(--navy);
        }

        .ha-about-text {
          color:#6f737b;
          font-size:14px;
          line-height:2.1;
        }

        .ha-about-social {
          display:inline-flex;
          align-items:center;
          gap:9px;
          color:var(--navy)!important;
          font-size:12px;
          font-weight:700;
          margin:14px 0;
        }

        .ha-credentials {
          margin-top:24px;
          border-top:1px solid #dcd6ce;
          padding-top:23px;
        }

        .ha-credentials-title {
          font-size:10px;
          font-weight:700;
          letter-spacing:1.5px;
          color:var(--navy);
          margin-bottom:13px;
        }

        .ha-credentials ul {
          padding-left:18px;
          margin:0;
        }

        .ha-credentials li {
          font-size:12px;
          color:#626973;
          line-height:2.1;
        }

        .ha-details {
          margin-top:19px;
          border-top:1px solid var(--line);
        }

        .ha-details summary {
          cursor:pointer;
          padding:16px 0;
          font-size:12px;
          font-weight:700;
          color:var(--navy);
        }

        .ha-details-content {
          padding-bottom:15px;
        }

        .ha-details-content strong {
          display:block;
          margin:14px 0 8px;
          font-size:12px;
        }

        /* SERVICES */

        .ha-services {
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:16px;
        }

        .ha-service {
          display:flex;
          flex-direction:column;
          background:white;
          border:1px solid var(--line);
          min-width:0;
        }

        .ha-service-photo {
          position:relative;
          aspect-ratio:4/4;
          overflow:hidden;
          background:#ebe5dd;
        }

        .ha-service-photo img {
          object-fit:cover;
        }

        .ha-service-number {
          position:absolute;
          top:12px;
          left:12px;
          padding:10px;
          background:white;
          font:16px Georgia,serif;
          color:var(--navy);
        }

        .ha-service-body {
          display:flex;
          flex-direction:column;
          flex:1;
          padding:23px 19px;
        }

        .ha-service-body small {
          color:var(--navy);
          font-size:9px;
          font-weight:700;
          letter-spacing:1px;
        }

        .ha-service-body h3 {
          font-size:20px;
          margin:12px 0 9px;
        }

        .ha-service-body p {
          font-size:12px;
          color:var(--muted);
          line-height:1.9;
        }

        .ha-service-links {
          margin-top:auto;
          padding-top:12px;
        }

        .ha-service-links a {
          display:flex;
          justify-content:space-between;
          gap:8px;
          border-top:1px solid var(--line);
          padding:13px 0;
          color:var(--navy);
          font-size:11px;
          font-weight:700;
        }

        .ha-services-more {
          display:flex;
          justify-content:center;
          margin-top:35px;
        }

        /* REVIEW REDESIGN */

        .ha-review-overview {
          display:flex;
          align-items:center;
          justify-content:center;
          gap:45px;
          margin-bottom:40px;
        }

        .ha-review-stat {
          text-align:center;
        }

        .ha-review-stat strong {
          display:block;
          color:var(--navy);
          font:52px Georgia,serif;
        }

        .ha-review-stat span {
          color:var(--muted);
          font-size:11px;
        }

        .ha-review-divider {
          background:var(--line);
          width:1px;
          height:50px;
        }

        .ha-feedback-grid {
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:15px;
        }

        .ha-feedback-card {
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          min-height:205px;
          padding:27px;
          border:1px solid var(--line);
          background:var(--ivory);
          transition:transform .2s,border-color .2s;
        }

        .ha-feedback-card:hover {
          transform:translateY(-3px);
          border-color:#c3cedb;
        }

        .ha-feedback-card small {
          color:var(--navy);
          font-size:9px;
          font-weight:700;
          letter-spacing:1.4px;
        }

        .ha-feedback-card h3 {
          font-size:19px;
          line-height:1.6;
          margin:15px 0;
          font-weight:550;
        }

        .ha-feedback-card strong {
          display:block;
          font:27px Georgia,serif;
          color:var(--navy);
        }

        .ha-feedback-card p {
          font-size:11px;
          color:var(--muted);
          margin:8px 0 0;
        }

        .ha-real-review-link {
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:25px;
          background:var(--deep);
          padding:30px 35px;
          color:white;
          margin-top:22px;
        }

        .ha-real-review-link small {
          color:#c9d6e7;
          font-size:10px;
          letter-spacing:1.5px;
        }

        .ha-real-review-link h3 {
          margin:10px 0;
          font-size:22px;
          font-weight:500;
        }

        .ha-real-review-link p {
          color:#d5dfed;
          font-size:12px;
          line-height:1.9;
          margin:0;
        }

        .ha-review-note {
          font-size:11px;
          color:var(--muted);
          line-height:1.9;
          margin-top:22px;
        }

        /* BOOKING */

        .ha-booking {
          background:var(--navy);
          color:white;
          text-align:center;
          padding:93px 20px;
        }

        .ha-booking h2 {
          font-size:clamp(31px,4vw,48px);
          font-weight:450;
          line-height:1.5;
          margin:22px 0;
        }

        .ha-booking p {
          color:#dce4ef;
          font-size:13px;
          line-height:2;
        }

        .ha-booking-actions {
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:11px;
          margin-top:28px;
        }

        /* LOCATION */

        .ha-location {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
        }

        .ha-location-info {
          background:white;
          border:1px solid var(--line);
          padding:40px;
        }

        .ha-location-info h3 {
          font-size:26px;
          margin:0 0 28px;
        }

        .ha-location-info dt {
          color:var(--navy);
          font-size:10px;
          font-weight:700;
          letter-spacing:1.5px;
          margin-top:20px;
        }

        .ha-location-info dd {
          color:#454c55;
          font-size:13px;
          line-height:2;
          margin:7px 0;
        }

        .ha-location-actions {
          display:flex;
          flex-wrap:wrap;
          gap:9px;
          margin-top:25px;
        }

        .ha-location-visual {
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          min-height:390px;
          padding:30px;
          background:#eae5de;
          text-align:center;
        }

        .ha-location-visual h3 {
          font:50px Georgia,serif;
          color:var(--navy);
          margin:20px 0;
        }

        .ha-location-visual p {
          font-size:13px;
          line-height:2;
          color:#66717c;
          margin-bottom:25px;
        }

        /* AREA */

        .ha-area-section {
          background:var(--ivory);
          border-top:1px solid var(--line);
        }

        .ha-area-inner {
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:20px;
          padding:30px 0;
        }

        .ha-area-inner span {
          color:var(--muted);
          font-size:11px;
        }

        .ha-area-inner a {
          color:var(--navy);
          font-size:12px;
          font-weight:700;
        }

        /* FOOTER */

        .ha-footer {
          background:#17263b;
          color:white;
          padding:60px 0 110px;
        }

        .ha-footer-inner {
          display:flex;
          justify-content:space-between;
          gap:35px;
        }

        .ha-footer .ha-brand {
          color:white!important;
        }

        .ha-footer-social {
          display:inline-flex;
          align-items:center;
          gap:9px;
          margin-top:25px;
          font-size:12px;
        }

        .ha-footer-info {
          text-align:right;
        }

        .ha-footer-info p {
          font-size:11px;
          color:#c6cedb;
          line-height:2.1;
        }

        .ha-footer-links {
          display:flex;
          justify-content:flex-end;
          flex-wrap:wrap;
          gap:18px;
          font-size:11px;
          font-weight:600;
        }

        .ha-mobile-bar {
          display:none;
        }

        /* TABLET */

        @media(max-width:1050px) {
          .ha-nav {
            display:none;
          }
          .ha-services {
            grid-template-columns:repeat(2,minmax(0,1fr));
          }
          .ha-gallery {
            grid-template-columns:repeat(2,minmax(0,1fr));
          }
        }

        @media(max-width:850px) {
          .ha-wrap {
            width:calc(100% - 40px);
          }

          .ha-hero-grid {
            grid-template-columns:1fr 1fr;
          }

          .ha-hero-content {
            padding-right:25px;
          }

          .ha-about-grid {
            grid-template-columns:1fr;
            gap:45px;
          }

          .ha-portrait-shell {
            width:100%;
            max-width:570px;
            margin:0 auto;
          }

          .ha-feedback-grid {
            grid-template-columns:repeat(2,minmax(0,1fr));
          }

          .ha-location {
            grid-template-columns:1fr;
          }
        }

        /* MOBILE */

        @media(max-width:600px) {
          .ha-wrap {
            width:calc(100% - 36px);
          }

          .ha-header-inner {
            min-height:67px;
          }

          .ha-brand {
            font-size:24px;
          }

          .ha-header-booking {
            padding:12px;
            font-size:10px;
          }

          .ha-hero-grid {
            display:flex;
            flex-direction:column;
          }

          .ha-hero-content {
            padding:47px 0 40px;
            text-align:center;
            align-items:center;
          }

          .ha-hero-brand {
            font-size:clamp(55px,14vw,82px);
            letter-spacing:-3px;
            margin:18px 0 9px;
          }

          .ha-hero-location {
            font-size:9px;
          }

          .ha-hero-divider {
            margin:25px 0;
          }

          .ha-hero h2 {
            font-size:32px;
            letter-spacing:-1px;
          }

          .ha-hero-desc {
            font-size:12px;
            margin-top:17px;
          }

          .ha-hero-actions {
            width:100%;
            margin-top:24px;
            justify-content:center;
          }

          .ha-hero-actions .ha-btn {
            flex:1;
            font-size:11px;
            padding:12px 9px;
            gap:8px;
          }

          .ha-hero-social {
            margin-top:24px;
            font-size:11px;
          }

          .ha-slider {
            min-height:0;
            height:auto;
            aspect-ratio:4/4.3;
            margin:0 -18px;
          }

          .ha-slide-label {
            left:23px;
            right:23px;
            bottom:23px;
          }

          .ha-slide-label strong {
            font-size:20px;
          }

          .ha-slide-label small {
            font-size:9px;
          }

          .ha-slide-label em {
            font-size:8px;
          }

          .ha-slide-counter {
            top:18px;
            right:18px;
            font-size:9px;
          }

          .ha-hero-bottom-inner {
            min-height:65px;
          }

          .ha-hero-bottom span,
          .ha-hero-bottom a {
            font-size:9px;
            letter-spacing:.5px;
          }

          .ha-section {
            padding:72px 0;
            scroll-margin-top:70px;
          }

          .ha-heading {
            margin-bottom:33px;
          }

          .ha-heading h2 {
            font-size:39px;
          }

          .ha-heading p {
            font-size:12px;
          }

          .ha-gallery {
            gap:28px 12px;
          }

          .ha-work-en {
            font-size:8px;
          }

          .ha-work h3 {
            font-size:14px;
          }

          .ha-work p {
            font-size:11px;
          }

          .ha-work-index {
            width:28px;
            height:28px;
            top:10px;
            left:10px;
            font-size:12px;
          }

          .ha-instagram-feature {
            flex-direction:column;
            align-items:flex-start;
            padding:25px 22px;
          }

          .ha-instagram-feature .ha-btn {
            width:100%;
          }

          /* 프로필 사진 모바일 복구 */

          .ha-about-grid {
            display:flex;
            flex-direction:column;
            gap:35px;
            align-items:stretch;
          }

          .ha-portrait-shell {
            width:100%;
            max-width:none;
            padding:0 20px 24px 0;
            margin:0;
            flex:none;
          }

          .ha-portrait-shell:before {
            top:24px;
            left:20px;
          }

          .ha-portrait {
            width:100%;
            aspect-ratio:4/5;
            min-height:360px;
          }

          .ha-portrait img {
            object-fit:cover;
            object-position:center 30%;
          }

          .ha-portrait-tag {
            font-size:14px;
          }

          .ha-about-intro {
            font-size:32px;
          }

          .ha-about-text {
            font-size:13px;
          }

          .ha-services {
            gap:11px;
          }

          .ha-service-body {
            padding:18px 13px;
          }

          .ha-service-body h3 {
            font-size:17px;
          }

          .ha-service-body p {
            font-size:11px;
          }

          .ha-service-links a {
            font-size:10px;
          }

          .ha-review-overview {
            gap:30px;
            margin-bottom:29px;
          }

          .ha-review-stat strong {
            font-size:42px;
          }

          .ha-review-stat span {
            font-size:10px;
          }

          .ha-feedback-grid {
            grid-template-columns:repeat(2,minmax(0,1fr));
            gap:10px;
          }

          .ha-feedback-card {
            min-height:175px;
            padding:20px 15px;
          }

          .ha-feedback-card h3 {
            font-size:15px;
          }

          .ha-feedback-card strong {
            font-size:24px;
          }

          .ha-real-review-link {
            flex-direction:column;
            align-items:flex-start;
            padding:27px 23px;
          }

          .ha-real-review-link .ha-btn {
            width:100%;
          }

          .ha-real-review-link h3 {
            font-size:20px;
          }

          .ha-booking {
            padding:76px 18px;
          }

          .ha-booking h2 {
            font-size:31px;
          }

          .ha-booking-actions .ha-btn {
            padding:12px;
            font-size:11px;
          }

          .ha-location-info {
            padding:29px 24px;
          }

          .ha-location-info h3 {
            font-size:24px;
          }

          .ha-location-visual {
            min-height:300px;
          }

          .ha-location-visual h3 {
            font-size:44px;
          }

          .ha-area-inner {
            flex-direction:column;
            align-items:flex-start;
            gap:10px;
          }

          .ha-footer {
            padding:50px 0
              calc(115px + env(safe-area-inset-bottom));
          }

          .ha-footer-inner {
            flex-direction:column;
            gap:35px;
          }

          .ha-footer-info {
            text-align:left;
          }

          .ha-footer-links {
            justify-content:flex-start;
          }

          .ha-mobile-bar {
            display:grid;
            position:fixed;
            left:0;
            right:0;
            bottom:0;
            z-index:100;
            grid-template-columns:1fr 1fr 1.5fr;
            gap:8px;
            padding:10px 12px
              calc(10px + env(safe-area-inset-bottom));
            background:white;
            border-top:1px solid var(--line);
          }

          .ha-mobile-bar a {
            min-height:47px;
            display:flex;
            justify-content:center;
            align-items:center;
            background:var(--warm);
            color:var(--navy);
            font-size:12px;
            font-weight:700;
          }

          .ha-mobile-bar a:last-child {
            background:var(--navy);
            color:white;
          }
        }

        @media(prefers-reduced-motion:reduce) {
          .ha-slide {
            animation:none;
            opacity:0;
            visibility:hidden;
          }

          .ha-slide:first-child {
            opacity:1;
            visibility:visible;
            pointer-events:auto;
          }

          .ha-slide-progress:after {
            animation:none;
          }

          .ha-work-photo img,
          .ha-btn {
            transition:none;
          }
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

          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="ha-header-booking"
          >
            네이버 예약
            <ArrowIcon />
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}

        <section className="ha-hero">
          <div className="ha-wrap ha-hero-grid">
            <div className="ha-hero-content">
              <span className="ha-eyebrow">
                PERSONAL HAIR ATELIER · CHEONGDANG
              </span>

              <h1 className="ha-hero-brand">
                HI U HAIR
              </h1>

              <div className="ha-hero-location">
                CHEONGDANG
              </div>

              <div className="ha-hero-divider" />

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

              <div className="ha-hero-actions">
                <BookingButton>
                  네이버 예약하기
                </BookingButton>

                <Link
                  href="/hair"
                  className="ha-btn ha-btn-outline"
                >
                  헤어 시술 알아보기
                  <ArrowIcon />
                </Link>
              </div>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="ha-hero-social"
              >
                <InstagramIcon />
                Instagram @hiu_haerin ↗
              </a>
            </div>

            {/* 자동 무한 슬라이드 */}

            <div
              className="ha-slider"
              aria-label="하이유헤어 시술 사진 자동 슬라이드"
            >
              {heroSlides.map((slide, index) => (
                <Link
                  key={slide.href}
                  href={slide.href}
                  className="ha-slide"
                  style={{
                    ["--delay" as string]:
                      `${index * 4}s`,
                  }}
                  aria-label={`${slide.title} 자세히 보기`}
                >
                  <Image
                    src={slide.image}
                    alt={`${slide.title} 시술 사진`}
                    fill
                    priority={index === 0}
                    sizes="(max-width:600px) 100vw, 50vw"
                  />

                  <div className="ha-slide-label">
                    <div>
                      <strong>
                        Hair by Haerin
                      </strong>
                      <small>
                        {slide.en} · {slide.title}
                      </small>
                    </div>

                    <em>
                      HI U HAIR
                      <br />
                      CHEONGDANG
                    </em>
                  </div>
                </Link>
              ))}

              <div className="ha-slide-counter">
                HAIR COLLECTION · 05 STYLES
              </div>

              <div className="ha-slide-progress" />
            </div>
          </div>
        </section>

        <div className="ha-hero-bottom">
          <div className="ha-wrap ha-hero-bottom-inner">
            <span>
              HAIR DESIGN BY HAERIN LEE
            </span>

            <a href="#portfolio">
              EXPLORE THE COLLECTION
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* PORTFOLIO */}

        <section
          id="portfolio"
          className="ha-section"
        >
          <div className="ha-wrap">
            <SectionHeading
              number="01"
              eyebrow="THE HAIR COLLECTION"
              title="Signature Hair"
              description="당신의 취향에 맞는 아름다운 변화를 만나보세요."
            />

            <div className="ha-gallery">
              {portfolio.map((item, index) => (
                <article
                  className="ha-work"
                  key={item.image}
                >
                  <Link
                    href={item.href}
                    aria-label={`${item.title} 자세히 보기`}
                  >
                    <div className="ha-work-photo">
                      <Image
                        src={item.image}
                        alt={
                          item.href ===
                          "/hair/wedding-color"
                            ? "웨딩염색 스타일 상담 대표 이미지"
                            : item.title
                        }
                        fill
                        sizes="(max-width:850px) 50vw, 25vw"
                      />

                      <span className="ha-work-index">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>
                    </div>
                  </Link>

                  <div className="ha-work-en">
                    {item.en}
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  <Link
                    href={item.href}
                    className="ha-text-link"
                  >
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

                <h3>
                  More Styles on Instagram
                </h3>

                <p>
                  이해린 디자이너의 다양한 헤어스타일을
                  <br />
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
                @hiu_haerin
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* DESIGNER - 프로필 사진 복구 */}

        <section
          id="about"
          className="ha-section ha-ivory"
        >
          <div className="ha-wrap ha-about-grid">
            <div className="ha-portrait-shell">
              <div className="ha-portrait">
                <Image
                  src="/IMG_1443.jpeg"
                  alt="하이유헤어 청당점 이해린 디자이너 프로필"
                  fill
                  sizes="(max-width:850px) 100vw, 45vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 30%",
                  }}
                />

                <span className="ha-portrait-tag">
                  Designer Haerin Lee
                </span>
              </div>
            </div>

            <div>
              <div className="ha-heading-label">
                <span>02</span>
                <span>MEET YOUR DESIGNER</span>
              </div>

              <h2 className="ha-about-intro">
                아름다움의 디테일을
                <br />
                완성하는 <strong>이해린</strong>
              </h2>

              <p className="ha-about-text">
                안녕하세요.
                <br />
                하이유헤어 청당점 이해린 디자이너입니다.
              </p>

              <p className="ha-about-text">
                고객님의 취향과 모발의 특성,
                평소 스타일링 방법까지 함께 고려하여
                자연스럽고 감각적인 변화를 고민합니다.
              </p>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="ha-about-social"
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
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

                <details className="ha-details">
                  <summary>
                    자격 · 수상 경력 전체 보기
                  </summary>

                  <div className="ha-details-content">
                    <strong>자격 및 수료</strong>

                    <ul>
                      {extraQualifications.map(
                        (item) => (
                          <li key={item}>
                            {item}
                          </li>
                        )
                      )}
                    </ul>

                    <strong>수상 경력</strong>

                    <ul>
                      {awards.map((item) => (
                        <li key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>

              <div style={{ marginTop: 25 }}>
                <BookingButton>
                  이해린 디자이너 예약
                </BookingButton>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section
          id="services"
          className="ha-section ha-ivory"
          style={{ paddingTop: 0 }}
        >
          <div className="ha-wrap">
            <SectionHeading
              number="03"
              eyebrow="OUR SPECIALTIES"
              title="Hair Services"
              description="원하는 시술을 선택하면 스타일별 상세 안내로 이동합니다."
            />

            <div className="ha-services">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="ha-service"
                >
                  <div className="ha-service-photo">
                    <Image
                      src={service.image}
                      alt={`${service.title} 시술 대표 이미지`}
                      fill
                      sizes="(max-width:850px) 50vw, 25vw"
                    />

                    <span className="ha-service-number">
                      {service.number}
                    </span>
                  </div>

                  <div className="ha-service-body">
                    <small>
                      {service.en}
                    </small>

                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>

                    <div className="ha-service-links">
                      {service.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                        >
                          {link.name}
                          <ArrowIcon />
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="ha-services-more">
              <Link
                href="/hair"
                className="ha-btn ha-btn-outline"
              >
                전체 헤어 시술 보기
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* CLIENT FEEDBACK */}

        <section
          id="reviews"
          className="ha-section"
        >
          <div className="ha-wrap">
            <SectionHeading
              number="04"
              eyebrow="VOICES FROM OUR CLIENTS"
              title="Client Feedback"
              description="네이버 예약 고객들이 선택한 좋은 점"
            />

            <div className="ha-review-overview">
              <div className="ha-review-stat">
                <strong>293</strong>
                <span>예약자 리뷰</span>
              </div>

              <div className="ha-review-divider" />

              <div className="ha-review-stat">
                <strong>263</strong>
                <span>좋은 점 평가 참여</span>
              </div>
            </div>

            <div className="ha-feedback-grid">
              {feedback.map((review) => (
                <a
                  key={review.title}
                  className="ha-feedback-card"
                  href={REVIEWS}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <small>
                      NAVER CUSTOMER FEEDBACK
                    </small>

                    <h3>{review.title}</h3>
                  </div>

                  <div>
                    <strong>
                      {review.value}
                    </strong>

                    <p>
                      네이버 고객 선택 평가
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="ha-real-review-link">
              <div>
                <small>
                  REAL NAVER VISITOR REVIEWS
                </small>

                <h3>
                  실제 방문 고객의 이야기를 확인하세요.
                </h3>

                <p>
                  네이버 예약 페이지에서 고객이 작성한
                  방문 후기와 시술 경험을 직접 확인할 수 있습니다.
                </p>
              </div>

              <a
                href={REVIEWS}
                target="_blank"
                rel="noopener noreferrer"
                className="ha-btn ha-btn-light"
              >
                네이버 실제 리뷰 보기
                <ArrowIcon />
              </a>
            </div>

            <p className="ha-review-note">
              고객 평가 수치는 2026년 10월 10일 확인 기준이며
              자동 갱신되지 않습니다.
              실제 리뷰 원문과 고객 선택 평가 항목은 구분하여 표시합니다.
            </p>
          </div>
        </section>

        {/* BOOKING */}

        <section className="ha-booking">
          <span
            className="ha-eyebrow"
            style={{ color: "#d9c6a9" }}
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

          <div className="ha-booking-actions">
            <BookingButton light>
              네이버 예약하기
            </BookingButton>

            <Link
              href="/reservation"
              className="ha-btn ha-btn-white-outline"
            >
              홈페이지 문자 예약
              <ArrowIcon />
            </Link>
          </div>
        </section>

        {/* LOCATION */}

        <section
          id="location"
          className="ha-section ha-ivory"
        >
          <div className="ha-wrap">
            <SectionHeading
              number="05"
              eyebrow="FIND YOUR SALON"
              title="Visit HI U HAIR"
              description="천안 청당동 하이유헤어 청당점"
            />

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
                    <a href={`tel:${PHONE}`}>
                      {PHONE_VIEW}
                    </a>
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

                <div className="ha-location-actions">
                  <a
                    href={`tel:${PHONE}`}
                    className="ha-btn ha-btn-primary"
                  >
                    전화 문의
                    <ArrowIcon />
                  </a>

                  <a
                    href={`sms:${PHONE}`}
                    className="ha-btn ha-btn-outline"
                  >
                    문자 상담
                    <ArrowIcon />
                  </a>
                </div>
              </div>

              <div className="ha-location-visual">
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
                  네이버 지도 보기
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* REGIONAL GUIDE */}

      <div className="ha-area-section">
        <div className="ha-wrap ha-area-inner">
          <span>
            HI U HAIR · REGIONAL STYLE GUIDE
          </span>

          <Link href="/area">
            천안 여자머리 · 지역별 시술 안내 →
          </Link>
        </div>
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
              className="ha-footer-social"
            >
              <InstagramIcon />
              @hiu_haerin ↗
            </a>
          </div>

          <div className="ha-footer-info">
            <nav className="ha-footer-links">
              <Link href="/hair">HAIR MENU</Link>
              <Link href="/area">REGIONAL GUIDE</Link>
              <Link href="/reservation">RESERVATION</Link>
            </nav>

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
        </div>
      </footer>

      {/* MOBILE BAR */}

      <nav
        className="ha-mobile-bar"
        aria-label="빠른 상담 및 예약"
      >
        <a href={`tel:${PHONE}`}>
          전화
        </a>

        <a href={`sms:${PHONE}`}>
          문자
        </a>

        <a
          href={BOOKING}
          target="_blank"
          rel="noopener noreferrer"
        >
          네이버 예약
        </a>
      </nav>
    </div>
  );
}
