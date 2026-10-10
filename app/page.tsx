
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/* =========================================
   HI U HAIR · CHEONGDANG
   Premium Homepage Redesign
   기존 정보와 기능 유지
========================================= */

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

/* =========================================
   PORTFOLIO · 기존 8개 그대로
========================================= */

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

/* =========================================
   SERVICES · 기존 카테고리 유지
========================================= */

const services = [
  {
    number: "01",
    english: "CUT & LAYER",
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
    english: "PERM & WAVE",
    title: "여성 펌",
    desc: "자연스러운 볼륨과 부드러운 웨이브 디자인",
    image: "/IMG_1423.jpeg",
    links: [
      {
        name: "빌드펌",
        href: "/hair/build-perm",
      },
      {
        name: "물결펌",
        href: "/hair/wave-perm",
      },
    ],
  },
  {
    number: "03",
    english: "COLOR DESIGN",
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
    english: "WEDDING HAIR COLOR",
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

/* =========================================
   DESIGNER · 기존 경력 유지
========================================= */

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

/* =========================================
   NAVER FEEDBACK · 기존 수치 유지
========================================= */

const feedback = [
  {
    title: "원하는 스타일로 잘해줘요",
    value: "259명",
  },
  {
    title: "친절해요",
    value: "218명",
  },
  {
    title: "시술이 꼼꼼해요",
    value: "168명",
  },
  {
    title: "스타일 추천을 잘해줘요",
    value: "146명",
  },
  {
    title: "트렌디해요",
    value: "73명",
  },
];

const styleCards = [
  {
    title: "레이어드컷",
    href: "/hair/layered-cut",
  },
  {
    title: "빌드펌",
    href: "/hair/build-perm",
  },
  {
    title: "물결펌",
    href: "/hair/wave-perm",
  },
  {
    title: "여성 염색",
    href: "/hair/color",
  },
  {
    title: "웨딩염색",
    href: "/hair/wedding-color",
  },
];

/* =========================================
   공통 컴포넌트
========================================= */

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
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
      />
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

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
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
          ? "ha-button ha-button-light"
          : "ha-button ha-button-primary"
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
    <div className="ha-section-heading">
      <div className="ha-section-label">
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>

      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

/* =========================================
   HOMEPAGE
========================================= */

export default function HomePage() {
  return (
    <div className="ha-page">
      <style>{`
        /* ================================
           DESIGN SYSTEM
        ================================= */

        .ha-page {
          --navy:#193b71;
          --deep:#142945;
          --ink:#292d33;
          --muted:#747983;
          --ivory:#f7f5f1;
          --warm:#f0ede7;
          --line:#e8e3dc;
          --gold:#b39c7b;

          color:var(--ink);
          background:#fff;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Apple SD Gothic Neo",
            "Noto Sans KR",
            Arial,
            sans-serif;
          word-break:keep-all;
          overflow-x:clip;
          -webkit-font-smoothing:antialiased;
        }

        .ha-page *,
        .ha-page *::before,
        .ha-page *::after {
          box-sizing:border-box;
        }

        .ha-page a {
          text-decoration:none;
          color:inherit;
        }

        .ha-page button,
        .ha-page a {
          -webkit-tap-highlight-color:transparent;
        }

        .ha-container {
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

        .ha-button {
          min-height:53px;
          padding:15px 23px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:23px;
          font-size:12px;
          font-weight:700;
          letter-spacing:.1px;
          border:1px solid transparent;
          transition:
            background .25s ease,
            border-color .25s ease,
            transform .25s ease;
        }

        .ha-button:hover {
          transform:translateY(-2px);
        }

        .ha-button-primary {
          background:var(--navy);
          color:#fff!important;
          border-color:var(--navy);
        }

        .ha-button-primary:hover {
          background:var(--deep);
        }

        .ha-button-outline {
          border-color:#b9c1cc;
          background:transparent;
          color:var(--navy)!important;
        }

        .ha-button-outline:hover {
          background:#edf0f4;
        }

        .ha-button-light {
          background:#fff;
          color:var(--navy)!important;
          border-color:#fff;
        }

        .ha-button-white-outline {
          border-color:rgba(255,255,255,.55);
          color:#fff!important;
          background:transparent;
        }

        /* ================================
           HEADER
        ================================= */

        .ha-header {
          position:sticky;
          top:0;
          z-index:80;
          background:rgba(255,255,255,.96);
          backdrop-filter:blur(18px);
          -webkit-backdrop-filter:blur(18px);
          border-bottom:1px solid rgba(0,0,0,.06);
        }

        .ha-header-inner {
          min-height:83px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:25px;
        }

        .ha-brand {
          flex-shrink:0;
          display:inline-flex;
          flex-direction:column;
          color:var(--navy)!important;
          font:29px Georgia,serif;
          line-height:1;
          letter-spacing:2.1px;
          white-space:nowrap;
        }

        .ha-brand small {
          margin-top:8px;
          font-family:Arial,sans-serif;
          font-size:8px;
          font-weight:600;
          letter-spacing:4px;
        }

        .ha-nav {
          display:flex;
          align-items:center;
          gap:27px;
        }

        .ha-nav a {
          color:#3d4450;
          font-size:11px;
          font-weight:700;
          letter-spacing:.8px;
          transition:color .2s;
        }

        .ha-nav a:hover {
          color:var(--navy);
        }

        .ha-header-booking {
          flex-shrink:0;
          background:var(--navy);
          color:#fff!important;
          padding:15px 21px;
          display:flex;
          align-items:center;
          gap:14px;
          font-size:11px;
          font-weight:700;
          white-space:nowrap;
        }

        /* ================================
           HERO
        ================================= */

        .ha-hero {
          position:relative;
          background:var(--ivory);
          overflow:hidden;
        }

        .ha-hero-grid {
          min-height:690px;
          display:grid;
          grid-template-columns:1fr .96fr;
          align-items:stretch;
        }

        .ha-hero-content {
          position:relative;
          z-index:2;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:flex-start;
          padding:80px 60px 85px 0;
        }

        .ha-hero-identity {
          display:flex;
          align-items:center;
          gap:15px;
        }

        .ha-hero-identity:before {
          content:"";
          width:30px;
          height:1px;
          background:var(--gold);
        }

        .ha-hero-brand {
          font-family:Georgia,serif;
          color:var(--navy);
          font-weight:400;
          font-size:clamp(57px,7vw,105px);
          letter-spacing:-4px;
          line-height:1.07;
          margin:26px 0 10px;
          white-space:nowrap;
        }

        .ha-hero-location {
          color:var(--navy);
          font-size:10px;
          font-weight:700;
          letter-spacing:5px;
          padding-left:4px;
        }

        .ha-hero-divider {
          width:58px;
          height:1px;
          background:var(--gold);
          margin:42px 0 32px;
        }

        .ha-hero h2 {
          font-size:clamp(34px,3.7vw,53px);
          font-weight:450;
          line-height:1.44;
          letter-spacing:-2px;
          margin:0;
        }

        .ha-hero h2 strong {
          color:var(--navy);
          font-weight:600;
        }

        .ha-hero-desc {
          color:#74777d;
          font-size:14px;
          line-height:2.15;
          margin:25px 0 0;
        }

        .ha-hero-actions {
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top:32px;
        }

        .ha-hero-social {
          display:inline-flex;
          align-items:center;
          gap:8px;
          color:var(--navy)!important;
          font-size:12px;
          font-weight:600;
          margin-top:28px;
        }

        .ha-hero-image-side {
          position:relative;
          min-height:690px;
          background:#d8d2c9;
        }

        .ha-hero-image-side img {
          object-fit:cover;
          object-position:center 28%;
        }

        .ha-hero-image-side:after {
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(
            180deg,
            transparent 60%,
            rgba(18,29,44,.34)
          );
        }

        .ha-hero-image-label {
          position:absolute;
          z-index:2;
          bottom:43px;
          left:40px;
          right:40px;
          display:flex;
          align-items:end;
          justify-content:space-between;
          gap:15px;
          color:#fff;
        }

        .ha-hero-image-label span {
          font:23px Georgia,serif;
          letter-spacing:1px;
        }

        .ha-hero-image-label small {
          font-size:9px;
          letter-spacing:2px;
          line-height:1.9;
          text-align:right;
        }

        .ha-hero-bottom {
          background:var(--deep);
          color:#fff;
        }

        .ha-hero-bottom-inner {
          min-height:67px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:20px;
        }

        .ha-hero-bottom span {
          font-size:10px;
          letter-spacing:2.1px;
          color:#e0e6f0;
        }

        .ha-hero-bottom a {
          font-size:10px;
          font-weight:700;
          letter-spacing:1px;
          display:inline-flex;
          align-items:center;
          gap:10px;
        }

        /* ================================
           SECTION COMMON
        ================================= */

        .ha-section {
          padding:112px 0;
          scroll-margin-top:90px;
        }

        .ha-section-ivory {
          background:var(--ivory);
        }

        .ha-section-heading {
          display:flex;
          flex-direction:column;
          align-items:flex-start;
          margin-bottom:52px;
        }

        .ha-section-label {
          display:flex;
          align-items:center;
          gap:15px;
          color:var(--navy);
          font-size:10px;
          font-weight:700;
          letter-spacing:2.3px;
        }

        .ha-section-label span:first-child {
          color:var(--gold);
          font-family:Georgia,serif;
          font-size:17px;
          letter-spacing:0;
        }

        .ha-section-heading h2 {
          font-family:Georgia,"Noto Sans KR",serif;
          font-size:clamp(36px,5vw,59px);
          font-weight:400;
          line-height:1.3;
          letter-spacing:-1.4px;
          margin:17px 0 15px;
        }

        .ha-section-heading p {
          color:var(--muted);
          font-size:14px;
          line-height:2;
          margin:0;
        }

        /* ================================
           PORTFOLIO
        ================================= */

        .ha-gallery {
          display:grid;
          grid-template-columns:
            repeat(4,minmax(0,1fr));
          column-gap:18px;
          row-gap:47px;
        }

        .ha-work {
          min-width:0;
        }

        .ha-work-photo {
          position:relative;
          overflow:hidden;
          aspect-ratio:4/5.2;
          background:#eae5dc;
        }

        .ha-work-photo img {
          object-fit:cover;
          transition:transform .6s ease;
        }

        .ha-work:hover .ha-work-photo img {
          transform:scale(1.055);
        }

        .ha-work-photo:after {
          content:"";
          position:absolute;
          inset:55% 0 0;
          background:linear-gradient(
            180deg,
            transparent,
            rgba(0,0,0,.14)
          );
          pointer-events:none;
        }

        .ha-work-index {
          position:absolute;
          top:15px;
          left:15px;
          z-index:2;
          background:#fff;
          color:var(--navy);
          width:36px;
          height:36px;
          display:grid;
          place-items:center;
          font:15px Georgia,serif;
        }

        .ha-work-open {
          position:absolute;
          bottom:17px;
          right:17px;
          z-index:2;
          width:34px;
          height:34px;
          display:grid;
          place-items:center;
          border:1px solid rgba(255,255,255,.8);
          border-radius:50%;
          color:#fff;
        }

        .ha-work-english {
          color:var(--navy);
          font-size:9px;
          font-weight:700;
          letter-spacing:1.35px;
          margin:19px 0 8px;
          line-height:1.7;
        }

        .ha-work h3 {
          font-size:17px;
          line-height:1.5;
          font-weight:600;
          letter-spacing:-.4px;
          margin:0 0 8px;
        }

        .ha-work p {
          color:var(--muted);
          font-size:12px;
          line-height:1.9;
          margin:0 0 15px;
        }

        .ha-text-link {
          display:inline-flex;
          align-items:center;
          gap:10px;
          color:var(--navy)!important;
          font-size:11px;
          font-weight:700;
          border-bottom:1px solid #c6cdd5;
          padding-bottom:7px;
        }

        .ha-instagram-feature {
          display:grid;
          grid-template-columns:1fr auto;
          align-items:center;
          gap:30px;
          padding:38px 43px;
          background:var(--ivory);
          margin-top:65px;
          border-left:3px solid var(--navy);
        }

        .ha-instagram-feature h3 {
          font-family:Georgia,serif;
          font-size:30px;
          font-weight:400;
          margin:10px 0;
        }

        .ha-instagram-feature p {
          color:var(--muted);
          font-size:13px;
          line-height:1.9;
          margin:0;
        }

        /* ================================
           DESIGNER
        ================================= */

        .ha-about-grid {
          display:grid;
          grid-template-columns:.9fr 1.1fr;
          gap:9%;
          align-items:center;
        }

        .ha-portrait-shell {
          position:relative;
          padding:0 37px 38px 0;
        }

        .ha-portrait-shell:before {
          content:"";
          position:absolute;
          top:38px;
          left:37px;
          right:0;
          bottom:0;
          border:1px solid #c6b69e;
        }

        .ha-portrait {
          position:relative;
          aspect-ratio:4/5;
          background:#e4dfd8;
          overflow:hidden;
        }

        .ha-portrait img {
          object-fit:cover;
          object-position:center 35%;
        }

        .ha-portrait-tag {
          position:absolute;
          bottom:22px;
          left:22px;
          background:rgba(255,255,255,.95);
          padding:13px 17px;
          color:var(--navy);
          font-family:Georgia,serif;
          font-size:16px;
          letter-spacing:1px;
        }

        .ha-about-intro {
          font-size:clamp(29px,3.7vw,47px);
          line-height:1.5;
          font-weight:450;
          letter-spacing:-1.4px;
          margin:20px 0 30px;
        }

        .ha-about-intro strong {
          color:var(--navy);
          font-weight:600;
        }

        .ha-about-text {
          color:#6f737b;
          font-size:14px;
          line-height:2.1;
          margin:0 0 17px;
        }

        .ha-about-social {
          display:inline-flex;
          align-items:center;
          gap:9px;
          margin:14px 0 13px;
          color:var(--navy)!important;
          font-size:12px;
          font-weight:700;
        }

        .ha-credentials {
          border-top:1px solid #dad5cd;
          margin-top:26px;
          padding-top:25px;
        }

        .ha-credentials-title {
          color:var(--navy);
          font-size:10px;
          font-weight:700;
          letter-spacing:1.8px;
          margin-bottom:14px;
        }

        .ha-credentials ul {
          padding-left:18px;
          margin:0;
        }

        .ha-credentials li {
          color:#656b73;
          font-size:12px;
          line-height:2.1;
        }

        .ha-details {
          border-top:1px solid #dedad3;
          margin-top:20px;
        }

        .ha-details summary {
          display:flex;
          justify-content:space-between;
          align-items:center;
          cursor:pointer;
          padding:18px 0;
          color:var(--navy);
          font-size:12px;
          font-weight:700;
          list-style:none;
        }

        .ha-details summary:after {
          content:"+";
          font-size:20px;
          font-weight:400;
        }

        .ha-details[open] summary:after {
          content:"−";
        }

        .ha-details summary::-webkit-details-marker {
          display:none;
        }

        .ha-details-content {
          padding-bottom:20px;
        }

        .ha-details-content strong {
          display:block;
          color:#3f4853;
          font-size:12px;
          margin:15px 0 8px;
        }

        /* ================================
           SERVICES
        ================================= */

        .ha-services-grid {
          display:grid;
          grid-template-columns:
            repeat(4,minmax(0,1fr));
          gap:18px;
        }

        .ha-service-card {
          display:flex;
          flex-direction:column;
          background:#fff;
          min-width:0;
          border:1px solid #e8e3dc;
          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .ha-service-card:hover {
          transform:translateY(-5px);
          box-shadow:0 15px 35px rgba(24,36,58,.07);
        }

        .ha-service-image {
          position:relative;
          aspect-ratio:4/4.3;
          overflow:hidden;
          background:#ddd6cc;
        }

        .ha-service-image img {
          object-fit:cover;
          transition:transform .5s;
        }

        .ha-service-card:hover img {
          transform:scale(1.045);
        }

        .ha-service-image span {
          position:absolute;
          top:16px;
          left:16px;
          z-index:2;
          display:grid;
          place-items:center;
          width:36px;
          height:36px;
          background:white;
          color:var(--navy);
          font:17px Georgia,serif;
        }

        .ha-service-body {
          flex:1;
          display:flex;
          flex-direction:column;
          padding:27px 22px 25px;
        }

        .ha-service-english {
          color:var(--navy);
          font-size:9px;
          font-weight:700;
          letter-spacing:1.35px;
        }

        .ha-service-body h3 {
          font-size:22px;
          letter-spacing:-.5px;
          margin:13px 0 10px;
        }

        .ha-service-body p {
          font-size:12px;
          color:var(--muted);
          line-height:1.9;
          margin:0 0 20px;
        }

        .ha-service-links {
          display:flex;
          flex-direction:column;
          gap:9px;
          margin-top:auto;
        }

        .ha-service-links a {
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:8px;
          padding:12px 0;
          border-top:1px solid var(--line);
          color:var(--navy);
          font-size:11px;
          font-weight:700;
        }

        .ha-services-more {
          display:flex;
          justify-content:center;
          margin-top:42px;
        }

        /* ================================
           CLIENT FEEDBACK
        ================================= */

        .ha-review-summary {
          display:flex;
          align-items:center;
          justify-content:center;
          gap:55px;
          padding:10px 0 48px;
        }

        .ha-review-number {
          text-align:center;
        }

        .ha-review-number strong {
          display:block;
          color:var(--navy);
          font:54px Georgia,serif;
          line-height:1.1;
        }

        .ha-review-number span {
          display:block;
          color:var(--muted);
          font-size:12px;
          margin-top:10px;
        }

        .ha-review-divider {
          width:1px;
          height:55px;
          background:#ded9d1;
        }

        .ha-marquee-window {
          overflow:hidden;
          padding:5px 0 20px;
        }

        .ha-marquee-track {
          display:flex;
          width:max-content;
          animation:ha-slide 65s linear infinite;
        }

        .ha-marquee-window:hover .ha-marquee-track,
        .ha-marquee-window:focus-within .ha-marquee-track {
          animation-play-state:paused;
        }

        .ha-marquee-set {
          display:flex;
          flex-shrink:0;
          gap:15px;
          padding-right:15px;
        }

        .ha-review-card {
          width:270px;
          min-height:205px;
          padding:26px;
          background:var(--ivory);
          border:1px solid #e9e5df;
          flex-shrink:0;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
        }

        .ha-review-card small {
          color:var(--navy);
          font-size:9px;
          font-weight:700;
          letter-spacing:1.5px;
        }

        .ha-review-card h3 {
          font-size:19px;
          font-weight:550;
          line-height:1.6;
          margin:18px 0;
        }

        .ha-review-card strong {
          display:block;
          color:var(--navy);
          font:27px Georgia,serif;
        }

        .ha-review-card p {
          font-size:11px;
          color:var(--muted);
          margin:8px 0 0;
        }

        @keyframes ha-slide {
          from {transform:translateX(0)}
          to {transform:translateX(-50%)}
        }

        .ha-review-actions {
          display:flex;
          align-items:center;
          justify-content:center;
          flex-wrap:wrap;
          gap:12px;
          margin-top:32px;
        }

        .ha-review-note {
          text-align:center;
          font-size:11px;
          line-height:2;
          color:#82878e;
          padding:0 20px;
          margin-top:25px;
        }

        /* ================================
           BOOKING
        ================================= */

        .ha-booking {
          position:relative;
          background:var(--navy);
          overflow:hidden;
          color:white;
          padding:110px 25px;
          text-align:center;
        }

        .ha-booking:before,
        .ha-booking:after {
          content:"";
          position:absolute;
          width:410px;
          height:410px;
          border:1px solid rgba(255,255,255,.12);
          border-radius:50%;
          pointer-events:none;
        }

        .ha-booking:before {
          left:-190px;
          top:-220px;
        }

        .ha-booking:after {
          right:-170px;
          bottom:-260px;
        }

        .ha-booking-inner {
          position:relative;
          z-index:1;
        }

        .ha-booking-eyebrow {
          font-size:10px;
          font-weight:700;
          letter-spacing:2.7px;
          color:#d9c6a9;
        }

        .ha-booking h2 {
          font-size:clamp(32px,4.4vw,51px);
          font-weight:450;
          line-height:1.5;
          letter-spacing:-1.3px;
          margin:25px 0;
        }

        .ha-booking p {
          color:#dbe4ef;
          font-size:13px;
          line-height:2;
        }

        .ha-booking-actions {
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          gap:12px;
          margin-top:32px;
        }

        /* ================================
           LOCATION
        ================================= */

        .ha-location-grid {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
        }

        .ha-location-info {
          background:#fff;
          padding:47px 45px;
          border:1px solid var(--line);
        }

        .ha-location-info h3 {
          font-size:29px;
          font-weight:550;
          margin:0 0 32px;
        }

        .ha-location-info dt {
          color:var(--navy);
          font-size:10px;
          font-weight:700;
          letter-spacing:1.8px;
          margin-top:24px;
        }

        .ha-location-info dd {
          font-size:13px;
          color:#474d55;
          line-height:2;
          margin:7px 0;
        }

        .ha-location-actions {
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top:29px;
        }

        .ha-location-visual {
          position:relative;
          overflow:hidden;
          background:#e9e4dc;
          min-height:430px;
          padding:40px;
          display:flex;
          justify-content:center;
          align-items:center;
          text-align:center;
        }

        .ha-location-visual:before {
          content:"";
          position:absolute;
          inset:20px;
          border:1px solid rgba(25,59,113,.18);
        }

        .ha-location-visual-content {
          position:relative;
          z-index:1;
        }

        .ha-location-visual h3 {
          font:clamp(38px,5vw,64px) Georgia,serif;
          letter-spacing:-2px;
          color:var(--navy);
          margin:20px 0 14px;
        }

        .ha-location-visual p {
          font-size:13px;
          line-height:2;
          color:#686f78;
          margin:0 0 26px;
        }

        /* ================================
           AREA LINK
        ================================= */

        .ha-area-section {
          border-top:1px solid var(--line);
          background:var(--ivory);
        }

        .ha-area-inner {
          min-height:96px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:25px;
        }

        .ha-area-inner span {
          color:#666e77;
          font-size:12px;
        }

        .ha-area-inner a {
          color:var(--navy);
          font-size:12px;
          font-weight:700;
          display:inline-flex;
          align-items:center;
          gap:14px;
        }

        /* ================================
           FOOTER
        ================================= */

        .ha-footer {
          background:#17263b;
          color:white;
          padding:65px 0 110px;
        }

        .ha-footer-inner {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:45px;
        }

        .ha-footer .ha-brand {
          color:white!important;
        }

        .ha-footer-social {
          display:inline-flex;
          align-items:center;
          gap:8px;
          margin-top:28px;
          color:#e9edf3!important;
          font-size:12px;
        }

        .ha-footer-info {
          text-align:right;
        }

        .ha-footer-info p {
          font-size:12px;
          color:#c6cedb;
          line-height:2.1;
          margin:0;
        }

        .ha-footer-links {
          display:flex;
          flex-wrap:wrap;
          justify-content:flex-end;
          gap:18px;
          margin-bottom:22px;
          color:#f1f4f8;
          font-size:11px;
          font-weight:600;
        }

        .ha-mobile-bar {
          display:none;
        }

        /* ================================
           TABLET
        ================================= */

        @media(max-width:1100px) {
          .ha-nav {
            gap:15px;
          }

          .ha-header-booking {
            display:none;
          }

          .ha-hero-grid {
            min-height:620px;
          }

          .ha-hero-content {
            padding-right:30px;
          }

          .ha-hero-image-side {
            min-height:620px;
          }

          .ha-services-grid {
            grid-template-columns:
              repeat(2,minmax(0,1fr));
          }

          .ha-service-image {
            aspect-ratio:5/3.5;
          }
        }

        @media(max-width:850px) {
          .ha-container {
            width:calc(100% - 40px);
          }

          .ha-nav {
            display:none;
          }

          .ha-header-booking {
            display:flex;
          }

          .ha-hero-grid {
            grid-template-columns:1fr 1fr;
          }

          .ha-hero-brand {
            font-size:clamp(47px,6vw,74px);
            letter-spacing:-2px;
          }

          .ha-hero h2 {
            font-size:34px;
          }

          .ha-gallery {
            grid-template-columns:
              repeat(2,minmax(0,1fr));
          }

          .ha-about-grid {
            grid-template-columns:1fr;
            gap:60px;
          }

          .ha-portrait-shell {
            max-width:570px;
            width:100%;
            margin:0 auto;
          }

          .ha-location-grid {
            grid-template-columns:1fr;
          }

          .ha-location-visual {
            min-height:320px;
          }
        }

        /* ================================
           MOBILE
        ================================= */

        @media(max-width:600px) {
          .ha-container {
            width:calc(100% - 36px);
          }

          .ha-header-inner {
            min-height:68px;
          }

          .ha-brand {
            font-size:24px;
            letter-spacing:1.4px;
          }

          .ha-brand small {
            font-size:7px;
            letter-spacing:3.5px;
          }

          .ha-header-booking {
            padding:12px 14px;
            font-size:10px;
            gap:8px;
          }

          .ha-hero-grid {
            display:flex;
            flex-direction:column;
          }

          .ha-hero-content {
            padding:51px 0 43px;
            align-items:center;
            text-align:center;
          }

          .ha-hero-brand {
            font-size:clamp(57px,14.5vw,87px);
            letter-spacing:-3px;
            margin:20px 0 9px;
          }

          .ha-hero-identity {
            font-size:9px;
          }

          .ha-hero-location {
            font-size:9px;
          }

          .ha-hero-divider {
            margin:26px 0 24px;
          }

          .ha-hero h2 {
            font-size:clamp(30px,8vw,39px);
            line-height:1.46;
            letter-spacing:-1.3px;
          }

          .ha-hero-desc {
            font-size:12px;
            line-height:2;
            margin-top:18px;
          }

          .ha-hero-actions {
            justify-content:center;
            margin-top:24px;
            width:100%;
          }

          .ha-hero-actions .ha-button {
            flex:1;
            padding:12px 10px;
            gap:8px;
            font-size:11px;
          }

          .ha-hero-social {
            margin-top:25px;
            font-size:11px;
          }

          .ha-hero-image-side {
            min-height:0;
            height:auto;
            aspect-ratio:4/3.5;
            margin:0 -18px;
          }

          .ha-hero-image-side img {
            object-position:center 30%;
          }

          .ha-hero-image-label {
            bottom:24px;
            left:24px;
            right:24px;
          }

          .ha-hero-image-label span {
            font-size:19px;
          }

          .ha-hero-image-label small {
            font-size:8px;
          }

          .ha-hero-bottom-inner {
            min-height:65px;
          }

          .ha-hero-bottom span {
            font-size:9px;
            letter-spacing:1px;
          }

          .ha-hero-bottom a {
            font-size:9px;
          }

          .ha-section {
            padding:73px 0;
            scroll-margin-top:72px;
          }

          .ha-section-heading {
            margin-bottom:34px;
          }

          .ha-section-heading h2 {
            font-size:39px;
            margin:13px 0;
          }

          .ha-section-heading p {
            font-size:12px;
          }

          .ha-gallery {
            gap:29px 12px;
          }

          .ha-work-photo {
            aspect-ratio:4/5;
          }

          .ha-work-index {
            width:29px;
            height:29px;
            top:10px;
            left:10px;
            font-size:12px;
          }

          .ha-work-open {
            width:28px;
            height:28px;
            bottom:10px;
            right:10px;
          }

          .ha-work-english {
            font-size:8px;
            letter-spacing:.55px;
            margin-top:13px;
          }

          .ha-work h3 {
            font-size:14px;
            line-height:1.6;
          }

          .ha-work p {
            font-size:11px;
            line-height:1.7;
          }

          .ha-text-link {
            font-size:10px;
          }

          .ha-instagram-feature {
            grid-template-columns:1fr;
            padding:27px 23px;
            gap:20px;
            margin-top:43px;
          }

          .ha-instagram-feature h3 {
            font-size:26px;
          }

          .ha-instagram-feature p {
            font-size:12px;
          }

          .ha-instagram-feature .ha-button {
            width:100%;
          }

          .ha-portrait-shell {
            padding:0 25px 27px 0;
          }

          .ha-portrait-shell:before {
            top:27px;
            left:25px;
          }

          .ha-about-grid {
            gap:38px;
          }

          .ha-about-intro {
            font-size:32px;
          }

          .ha-about-text {
            font-size:13px;
          }

          .ha-services-grid {
            grid-template-columns:
              repeat(2,minmax(0,1fr));
            gap:11px;
          }

          .ha-service-image {
            aspect-ratio:4/4;
          }

          .ha-service-image span {
            width:29px;
            height:29px;
            top:10px;
            left:10px;
            font-size:12px;
          }

          .ha-service-body {
            padding:19px 13px;
          }

          .ha-service-body h3 {
            font-size:17px;
            margin:9px 0;
          }

          .ha-service-english {
            font-size:8px;
            letter-spacing:.6px;
          }

          .ha-service-body p {
            font-size:11px;
            line-height:1.75;
          }

          .ha-service-links a {
            font-size:10px;
          }

          .ha-services-more {
            margin-top:30px;
          }

          .ha-review-summary {
            gap:32px;
            padding-bottom:35px;
          }

          .ha-review-number strong {
            font-size:43px;
          }

          .ha-review-number span {
            font-size:10px;
          }

          .ha-review-card {
            width:245px;
            min-height:190px;
            padding:22px;
          }

          .ha-review-card h3 {
            font-size:17px;
          }

          .ha-review-actions {
            padding:0 18px;
          }

          .ha-review-actions .ha-button {
            flex:1;
            font-size:11px;
            padding:13px 10px;
            gap:7px;
          }

          .ha-booking {
            padding:78px 19px;
          }

          .ha-booking h2 {
            font-size:32px;
          }

          .ha-booking-actions .ha-button {
            flex:1;
            padding:13px 12px;
            gap:7px;
            font-size:11px;
          }

          .ha-location-info {
            padding:30px 25px;
          }

          .ha-location-info h3 {
            font-size:24px;
          }

          .ha-location-visual {
            min-height:310px;
            padding:30px;
          }

          .ha-location-visual h3 {
            font-size:48px;
          }

          .ha-area-inner {
            align-items:flex-start;
            flex-direction:column;
            justify-content:center;
            gap:10px;
            padding:25px 0;
          }

          .ha-footer {
            padding:53px 0
              calc(115px + env(safe-area-inset-bottom));
          }

          .ha-footer-inner {
            grid-template-columns:1fr;
            gap:35px;
          }

          .ha-footer-info {
            text-align:left;
          }

          .ha-footer-links {
            justify-content:flex-start;
          }

          .ha-mobile-bar {
            position:fixed;
            left:0;
            right:0;
            bottom:0;
            z-index:100;
            display:grid;
            grid-template-columns:1fr 1fr 1.5fr;
            gap:8px;
            padding:
              10px 12px
              calc(10px + env(safe-area-inset-bottom));
            background:rgba(255,255,255,.98);
            border-top:1px solid #e6e2dc;
            box-shadow:0 -5px 20px rgba(0,0,0,.05);
          }

          .ha-mobile-bar a {
            min-height:48px;
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
            background:#f0eee9;
            color:var(--navy);
            font-size:12px;
            font-weight:700;
          }

          .ha-mobile-bar a:last-child {
            background:var(--navy);
            color:white;
          }
        }

        @media(max-width:380px) {
          .ha-hero-brand {
            font-size:53px;
          }

          .ha-hero-actions {
            flex-direction:column;
          }

          .ha-hero-actions .ha-button {
            width:100%;
          }

          .ha-service-body h3 {
            font-size:15px;
          }
        }

        @media(prefers-reduced-motion:reduce) {
          .ha-marquee-track {
            animation:none;
          }

          .ha-marquee-window {
            overflow-x:auto;
          }

          .ha-work-photo img,
          .ha-service-image img,
          .ha-button {
            transition:none;
          }
        }
      `}</style>

      {/* ================================
          HEADER
      ================================= */}

      <header className="ha-header">
        <div className="ha-container ha-header-inner">
          <Link href="/" className="ha-brand">
            HI U HAIR
            <small>CHEONGDANG</small>
          </Link>

          <nav
            className="ha-nav"
            aria-label="메인 메뉴"
          >
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
        {/* ================================
            PREMIUM HERO
        ================================= */}

        <section className="ha-hero">
          <div className="ha-container ha-hero-grid">
            <div className="ha-hero-content">
              <div className="ha-hero-identity">
                <span className="ha-eyebrow">
                  PERSONAL HAIR ATELIER · CHEONGDANG
                </span>
              </div>

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
                  className="ha-button ha-button-outline"
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

            <div className="ha-hero-image-side">
              <Image
                src="/IMG_1424.jpeg"
                alt="하이유헤어 이해린 디자이너 빌드펌 매트브라운 스타일"
                fill
                priority
                sizes="(max-width:600px) 100vw, 50vw"
              />

              <div className="ha-hero-image-label">
                <span>
                  Hair by Haerin
                </span>

                <small>
                  HI U HAIR
                  <br />
                  CHEONGDANG
                </small>
              </div>
            </div>
          </div>
        </section>

        <div className="ha-hero-bottom">
          <div className="ha-container ha-hero-bottom-inner">
            <span>
              HAIR DESIGN BY HAERIN LEE
            </span>

            <a href="#portfolio">
              EXPLORE THE COLLECTION
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* ================================
            PORTFOLIO
        ================================= */}

        <section
          id="portfolio"
          className="ha-section"
        >
          <div className="ha-container">
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
                        priority={index === 1}
                        sizes="(max-width:850px) 50vw, 25vw"
                      />

                      <span className="ha-work-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="ha-work-open">
                        <ArrowIcon />
                      </span>
                    </div>
                  </Link>

                  <div className="ha-work-english">
                    {item.en}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <Link
                    href={item.href}
                    className="ha-text-link"
                  >
                    시술 자세히 보기
                    <ArrowIcon />
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
                className="ha-button ha-button-primary"
              >
                <InstagramIcon />
                @hiu_haerin
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* ================================
            DESIGNER
        ================================= */}

        <section
          id="about"
          className="ha-section ha-section-ivory"
        >
          <div className="ha-container ha-about-grid">
            <div className="ha-portrait-shell">
              <div className="ha-portrait">
                <Image
                  src="/IMG_1443.jpeg"
                  alt="하이유헤어 청당점 이해린 디자이너 프로필"
                  fill
                  sizes="(max-width:850px) 100vw, 45vw"
                />

                <span className="ha-portrait-tag">
                  Designer Haerin Lee
                </span>
              </div>
            </div>

            <div>
              <div className="ha-section-label">
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
                    <strong>
                      자격 및 수료
                    </strong>

                    <ul>
                      {extraQualifications.map(
                        (item) => (
                          <li key={item}>
                            {item}
                          </li>
                        )
                      )}
                    </ul>

                    <strong>
                      수상 경력
                    </strong>

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

              <div style={{ marginTop: 27 }}>
                <BookingButton>
                  이해린 디자이너 예약
                </BookingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ================================
            HAIR SERVICES
        ================================= */}

        <section
          id="services"
          className="ha-section ha-section-ivory"
          style={{ paddingTop: 0 }}
        >
          <div className="ha-container">
            <SectionHeading
              number="03"
              eyebrow="OUR SPECIALTIES"
              title="Hair Services"
              description="원하는 시술을 선택하면 스타일별 상세 안내로 이동합니다."
            />

            <div className="ha-services-grid">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="ha-service-card"
                >
                  <div className="ha-service-image">
                    <Image
                      src={service.image}
                      alt={`${service.title} 시술 대표 이미지`}
                      fill
                      sizes="(max-width:600px) 50vw, (max-width:1100px) 50vw, 25vw"
                    />

                    <span>
                      {service.number}
                    </span>
                  </div>

                  <div className="ha-service-body">
                    <small className="ha-service-english">
                      {service.english}
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
                className="ha-button ha-button-outline"
              >
                전체 헤어 시술 보기
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* ================================
            REVIEWS
        ================================= */}

        <section
          id="reviews"
          className="ha-section"
        >
          <div className="ha-container">
            <SectionHeading
              number="04"
              eyebrow="VOICES FROM OUR CLIENTS"
              title="Client Feedback"
              description="네이버 예약 고객들이 선택한 좋은 점과 다양한 헤어스타일"
            />

            <div className="ha-review-summary">
              <div className="ha-review-number">
                <strong>293</strong>
                <span>예약자 리뷰</span>
              </div>

              <div className="ha-review-divider" />

              <div className="ha-review-number">
                <strong>263</strong>
                <span>좋은 점 평가 참여</span>
              </div>
            </div>
          </div>

          <div className="ha-marquee-window">
            <div className="ha-marquee-track">
              {[0, 1].map((copy) => (
                <div
                  className="ha-marquee-set"
                  key={copy}
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
                        <strong>
                          {review.value}
                        </strong>

                        <p>
                          네이버 고객 선택 평가
                        </p>
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
                        <small>
                          HAIR DESIGN STYLE
                        </small>

                        <h3>
                          {style.title}
                        </h3>
                      </div>

                      <div>
                        <strong>
                          HI U HAIR
                        </strong>

                        <p>
                          시술 스타일 소개
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="ha-review-actions">
            <a
              href={REVIEWS}
              target="_blank"
              rel="noopener noreferrer"
              className="ha-button ha-button-outline"
            >
              네이버 고객 리뷰 보기
              <ArrowIcon />
            </a>

            <BookingButton>
              네이버 예약하기
            </BookingButton>
          </div>

          <p className="ha-review-note">
            고객 평가 수치는 2026년 10월 10일 확인 기준이며
            자동 갱신되지 않습니다.
            <br />
            고객 평가 5개와 스타일 소개 5개로 구성되어 있습니다.
          </p>
        </section>

        {/* ================================
            BOOKING
        ================================= */}

        <section className="ha-booking">
          <div className="ha-booking-inner">
            <span className="ha-booking-eyebrow">
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
                className="ha-button ha-button-white-outline"
              >
                홈페이지 문자 예약
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* ================================
            LOCATION
        ================================= */}

        <section
          id="location"
          className="ha-section ha-section-ivory"
        >
          <div className="ha-container">
            <SectionHeading
              number="05"
              eyebrow="FIND YOUR SALON"
              title="Visit HI U HAIR"
              description="천안 청당동 하이유헤어 청당점"
            />

            <div className="ha-location-grid">
              <div className="ha-location-info">
                <h3>
                  하이유헤어 청당점
                </h3>

                <dl>
                  <dt>DESIGNER</dt>
                  <dd>
                    이해린 디자이너
                  </dd>

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
                    className="ha-button ha-button-primary"
                  >
                    전화 문의
                    <ArrowIcon />
                  </a>

                  <a
                    href={`sms:${PHONE}`}
                    className="ha-button ha-button-outline"
                  >
                    문자 상담
                    <ArrowIcon />
                  </a>
                </div>
              </div>

              <div className="ha-location-visual">
                <div className="ha-location-visual-content">
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
                    className="ha-button ha-button-primary"
                  >
                    네이버 지도 보기
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================================
          REGIONAL GUIDE
      ================================= */}

      <div className="ha-area-section">
        <div className="ha-container ha-area-inner">
          <span>
            HI U HAIR · REGIONAL STYLE GUIDE
          </span>

          <Link href="/area">
            천안 여자머리 · 지역별 시술 안내
            <ArrowIcon />
          </Link>
        </div>
      </div>

      {/* ================================
          FOOTER
      ================================= */}

      <footer className="ha-footer">
        <div className="ha-container ha-footer-inner">
          <div>
            <Link
              href="/"
              className="ha-brand"
            >
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
            <nav
              className="ha-footer-links"
              aria-label="하단 메뉴"
            >
              <Link href="/hair">
                HAIR MENU
              </Link>

              <Link href="/area">
                REGIONAL GUIDE
              </Link>

              <Link href="/reservation">
                RESERVATION
              </Link>
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

      {/* ================================
          MOBILE QUICK BAR
      ================================= */}

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
