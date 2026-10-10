
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

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

/* 자동 슬라이드 - 4초 간격, 20초 순환 */

const heroSlides = [
  {
    title: "빌드펌",
    english: "BUILD PERM",
    image: "/IMG_1424.jpeg",
    href: "/hair/build-perm",
  },
  {
    title: "레이어드컷",
    english: "LAYERED CUT",
    image: "/IMG_1427.jpeg",
    href: "/hair/layered-cut",
  },
  {
    title: "물결펌",
    english: "WAVE PERM",
    image: "/IMG_1423.jpeg",
    href: "/hair/wave-perm",
  },
  {
    title: "여성 염색",
    english: "HAIR COLOR",
    image: "/IMG_1433.jpeg",
    href: "/hair/color",
  },
  {
    title: "웨딩염색",
    english: "WEDDING COLOR",
    image: "/IMG_1475.jpeg",
    href: "/hair/wedding-color",
  },
];

/* 기존 포트폴리오 */

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

/* 기존 시술 카테고리 */

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
      { name: "빌드펌", href: "/hair/build-perm" },
      { name: "물결펌", href: "/hair/wave-perm" },
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
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
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
          color:var(--ink);
          background:#fff;
          font-family:-apple-system,BlinkMacSystemFont,
            "Apple SD Gothic Neo","Noto Sans KR",Arial,sans-serif;
          word-break:keep-all;
          overflow-x:clip;
          -webkit-font-smoothing:antialiased;
        }
        .ha-page *,
        .ha-page *:before,
        .ha-page *:after {box-sizing:border-box}
        .ha-page a {text-decoration:none;color:inherit}
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
          justify-content:center;
          align-items:center;
          gap:20px;
          font-size:12px;
          font-weight:700;
          border:1px solid transparent;
          transition:transform .25s,background .25s;
        }
        .ha-button:hover{transform:translateY(-2px)}
        .ha-button-primary {
          background:var(--navy);
          color:white!important;
          border-color:var(--navy);
        }
        .ha-button-outline {
          color:var(--navy)!important;
          border-color:#b9c1cc;
        }
        .ha-button-light {
          color:var(--navy)!important;
          background:white;
          border-color:white;
        }
        .ha-button-white-outline {
          color:white!important;
          border-color:rgba(255,255,255,.55);
        }

        /* HEADER */

        .ha-header {
          position:sticky;
          top:0;
          z-index:80;
          background:rgba(255,255,255,.97);
          backdrop-filter:blur(18px);
          border-bottom:1px solid var(--line);
        }
        .ha-header-inner {
          min-height:83px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:25px;
        }
        .ha-brand {
          display:inline-flex;
          flex-direction:column;
          color:var(--navy)!important;
          font:29px Georgia,serif;
          letter-spacing:2px;
          white-space:nowrap;
          line-height:1;
        }
        .ha-brand small {
          font:600 8px Arial,sans-serif;
          letter-spacing:4px;
          margin-top:8px;
        }
        .ha-nav {
          display:flex;
          gap:25px;
          align-items:center;
          font-size:11px;
          font-weight:700;
        }
        .ha-header-booking {
          display:flex;
          align-items:center;
          gap:14px;
          background:var(--navy);
          color:white!important;
          font-size:11px;
          font-weight:700;
          padding:15px 20px;
          white-space:nowrap;
        }

        /* HERO */

        .ha-hero {background:var(--ivory)}
        .ha-hero-grid {
          display:grid;
          grid-template-columns:1fr .96fr;
          min-height:690px;
        }
        .ha-hero-content {
          padding:80px 60px 85px 0;
          display:flex;
          flex-direction:column;
          align-items:flex-start;
          justify-content:center;
        }
        .ha-hero-brand {
          font:400 clamp(57px,7vw,105px) Georgia,serif;
          color:var(--navy);
          letter-spacing:-4px;
          white-space:nowrap;
          line-height:1.07;
          margin:26px 0 10px;
        }
        .ha-hero-location {
          color:var(--navy);
          font-size:10px;
          font-weight:700;
          letter-spacing:5px;
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
        .ha-hero h2 strong{color:var(--navy);font-weight:600}
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
          gap:9px;
          align-items:center;
          color:var(--navy)!important;
          font-size:12px;
          font-weight:600;
          margin-top:28px;
        }

        /* AUTOMATIC FADE SLIDESHOW */

        .ha-hero-image-side {
          position:relative;
          min-height:690px;
          background:#ddd6ce;
          overflow:hidden;
          isolation:isolate;
        }
        .ha-slide {
          position:absolute;
          inset:0;
          display:block;
          opacity:0;
          visibility:hidden;
          pointer-events:none;
          animation:ha-crossfade 20s linear infinite;
          animation-delay:var(--slide-delay);
          will-change:opacity;
        }
        .ha-slide img {
          object-fit:cover;
          object-position:center 28%;
          transition:transform 7s ease;
        }
        .ha-slide:after {
          content:"";
          position:absolute;
          inset:48% 0 0;
          background:linear-gradient(
            180deg,
            transparent,
            rgba(18,29,44,.43)
          );
        }
        .ha-slide-label {
          position:absolute;
          z-index:3;
          left:38px;
          right:38px;
          bottom:38px;
          color:white;
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap:20px;
        }
        .ha-slide-label strong {
          font:25px Georgia,serif;
          letter-spacing:.5px;
        }
        .ha-slide-label small {
          display:block;
          margin-top:8px;
          font-size:10px;
          letter-spacing:2px;
          font-weight:600;
        }
        .ha-slide-label em {
          font:10px Arial,sans-serif;
          letter-spacing:2px;
          font-style:normal;
          text-align:right;
          line-height:2;
        }

        @keyframes ha-crossfade {
          0% {
            opacity:0;
            visibility:visible;
            pointer-events:auto;
          }
          3% {
            opacity:1;
            visibility:visible;
            pointer-events:auto;
          }
          17% {
            opacity:1;
            visibility:visible;
            pointer-events:auto;
          }
          20% {
            opacity:0;
            visibility:hidden;
            pointer-events:none;
          }
          100% {
            opacity:0;
            visibility:hidden;
            pointer-events:none;
          }
        }

        .ha-slide:first-child {
          opacity:1;
          visibility:visible;
        }

        .ha-slide-counter {
          position:absolute;
          top:30px;
          right:30px;
          z-index:6;
          padding:10px 13px;
          color:white;
          background:rgba(17,29,47,.35);
          backdrop-filter:blur(8px);
          font-size:10px;
          letter-spacing:1.4px;
          pointer-events:none;
        }

        .ha-slide-progress {
          position:absolute;
          z-index:7;
          left:0;
          bottom:0;
          height:3px;
          width:100%;
          background:rgba(255,255,255,.3);
          pointer-events:none;
        }
        .ha-slide-progress:after {
          content:"";
          display:block;
          background:#fff;
          width:20%;
          height:100%;
          transform-origin:left;
          animation:ha-progress 4s linear infinite;
        }
        @keyframes ha-progress {
          from {transform:scaleX(0)}
          to {transform:scaleX(5)}
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
          letter-spacing:2px;
        }
        .ha-hero-bottom a {
          display:inline-flex;
          align-items:center;
          gap:12px;
          font-size:10px;
          font-weight:700;
          letter-spacing:1px;
        }

        /* SECTIONS */

        .ha-section {
          padding:112px 0;
          scroll-margin-top:90px;
        }
        .ha-section-ivory{background:var(--ivory)}
        .ha-section-heading{margin-bottom:52px}
        .ha-section-label {
          display:flex;
          gap:15px;
          align-items:center;
          font-size:10px;
          font-weight:700;
          letter-spacing:2px;
          color:var(--navy);
        }
        .ha-section-label span:first-child {
          font:19px Georgia,serif;
          color:var(--gold);
        }
        .ha-section-heading h2 {
          font:400 clamp(36px,5vw,59px) Georgia,serif;
          letter-spacing:-1px;
          line-height:1.3;
          margin:17px 0 15px;
        }
        .ha-section-heading p {
          color:var(--muted);
          font-size:14px;
          line-height:2;
          margin:0;
        }

        /* PORTFOLIO */

        .ha-gallery {
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:47px 18px;
        }
        .ha-work{min-width:0}
        .ha-work-photo {
          position:relative;
          aspect-ratio:4/5.2;
          overflow:hidden;
          background:#eae5dc;
        }
        .ha-work-photo img {
          object-fit:cover;
          transition:transform .5s;
        }
        .ha-work:hover img{transform:scale(1.05)}
        .ha-work-index {
          position:absolute;
          top:15px;
          left:15px;
          z-index:2;
          display:grid;
          place-items:center;
          width:35px;
          height:35px;
          background:white;
          color:var(--navy);
          font:15px Georgia,serif;
        }
        .ha-work-english {
          margin:19px 0 8px;
          font-size:9px;
          font-weight:700;
          letter-spacing:1px;
          color:var(--navy);
          line-height:1.7;
        }
        .ha-work h3 {
          font-size:17px;
          margin:0 0 8px;
          line-height:1.5;
        }
        .ha-work p {
          color:var(--muted);
          font-size:12px;
          line-height:1.9;
          margin:0 0 15px;
        }
        .ha-text-link {
          color:var(--navy)!important;
          font-size:11px;
          font-weight:700;
          border-bottom:1px solid #c6cdd5;
          padding-bottom:7px;
        }
        .ha-instagram-feature {
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:30px;
          padding:38px 43px;
          background:var(--ivory);
          border-left:3px solid var(--navy);
          margin-top:65px;
        }
        .ha-instagram-feature h3 {
          font:30px Georgia,serif;
          margin:10px 0;
        }
        .ha-instagram-feature p {
          font-size:13px;
          color:var(--muted);
          line-height:1.9;
        }

        /* DESIGNER */

        .ha-about-grid {
          display:grid;
          grid-template-columns:.9fr 1.1fr;
          gap:9%;
          align-items:center;
        }
        .ha-portrait-shell {
          position:relative;
          padding:0 35px 36px 0;
        }
        .ha-portrait-shell:before {
          content:"";
          position:absolute;
          top:35px;
          left:35px;
          right:0;
          bottom:0;
          border:1px solid #c6b69e;
        }
        .ha-portrait {
          position:relative;
          aspect-ratio:4/5;
          background:#e5dfd7;
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
          background:white;
          padding:13px 17px;
          color:var(--navy);
          font:16px Georgia,serif;
        }
        .ha-about-intro {
          font-size:clamp(29px,3.7vw,47px);
          font-weight:450;
          line-height:1.5;
          letter-spacing:-1px;
          margin:20px 0 30px;
        }
        .ha-about-intro strong{color:var(--navy)}
        .ha-about-text {
          color:#6f737b;
          font-size:14px;
          line-height:2.1;
        }
        .ha-about-social {
          display:inline-flex;
          gap:9px;
          align-items:center;
          color:var(--navy)!important;
          font-size:12px;
          font-weight:700;
          margin:14px 0;
        }
        .ha-credentials {
          margin-top:26px;
          padding-top:25px;
          border-top:1px solid #dad5cd;
        }
        .ha-credentials-title {
          font-size:10px;
          color:var(--navy);
          letter-spacing:1.8px;
          font-weight:700;
          margin-bottom:14px;
        }
        .ha-credentials ul {
          padding-left:18px;
          margin:0;
        }
        .ha-credentials li {
          font-size:12px;
          color:#656b73;
          line-height:2.1;
        }
        .ha-details {
          border-top:1px solid #dedad3;
          margin-top:20px;
        }
        .ha-details summary {
          cursor:pointer;
          color:var(--navy);
          font-size:12px;
          font-weight:700;
          padding:18px 0;
        }
        .ha-details-content{padding-bottom:20px}
        .ha-details-content strong {
          display:block;
          font-size:12px;
          margin:15px 0 8px;
        }

        /* SERVICES */

        .ha-services-grid {
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:18px;
        }
        .ha-service-card {
          display:flex;
          flex-direction:column;
          background:white;
          border:1px solid var(--line);
          min-width:0;
        }
        .ha-service-image {
          position:relative;
          aspect-ratio:4/4.3;
          overflow:hidden;
        }
        .ha-service-image img{object-fit:cover}
        .ha-service-image span {
          position:absolute;
          top:15px;
          left:15px;
          background:white;
          color:var(--navy);
          padding:10px;
          font:17px Georgia,serif;
        }
        .ha-service-body {
          display:flex;
          flex-direction:column;
          padding:27px 22px;
          flex:1;
        }
        .ha-service-english {
          font-size:9px;
          letter-spacing:1px;
          color:var(--navy);
          font-weight:700;
        }
        .ha-service-body h3 {
          font-size:22px;
          margin:13px 0 10px;
        }
        .ha-service-body p {
          font-size:12px;
          color:var(--muted);
          line-height:1.9;
        }
        .ha-service-links {
          display:flex;
          flex-direction:column;
          margin-top:auto;
          padding-top:14px;
        }
        .ha-service-links a {
          border-top:1px solid var(--line);
          padding:13px 0;
          display:flex;
          justify-content:space-between;
          gap:8px;
          color:var(--navy);
          font-size:11px;
          font-weight:700;
        }
        .ha-services-more {
          display:flex;
          justify-content:center;
          margin-top:40px;
        }

        /* REVIEWS */

        .ha-review-summary {
          display:flex;
          justify-content:center;
          align-items:center;
          gap:55px;
          margin-bottom:40px;
        }
        .ha-review-number{text-align:center}
        .ha-review-number strong {
          display:block;
          font:54px Georgia,serif;
          color:var(--navy);
        }
        .ha-review-number span {
          font-size:12px;
          color:var(--muted);
        }
        .ha-review-divider {
          width:1px;
          height:55px;
          background:var(--line);
        }
        .ha-marquee-window {
          overflow:hidden;
          padding:5px 0 20px;
        }
        .ha-marquee-track {
          display:flex;
          width:max-content;
          animation:ha-review-slide 65s linear infinite;
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
          border:1px solid var(--line);
          display:flex;
          flex-direction:column;
          justify-content:space-between;
        }
        .ha-review-card small {
          color:var(--navy);
          font-size:9px;
          font-weight:700;
          letter-spacing:1.4px;
        }
        .ha-review-card h3 {
          font-size:19px;
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
        @keyframes ha-review-slide {
          from{transform:translateX(0)}
          to{transform:translateX(-50%)}
        }
        .ha-review-actions {
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:12px;
          margin-top:32px;
        }
        .ha-review-note {
          font-size:11px;
          line-height:2;
          text-align:center;
          color:var(--muted);
          margin-top:25px;
        }

        /* BOOKING */

        .ha-booking {
          background:var(--navy);
          color:white;
          text-align:center;
          padding:110px 20px;
        }
        .ha-booking h2 {
          font-size:clamp(32px,4.4vw,51px);
          font-weight:450;
          line-height:1.5;
          margin:25px 0;
        }
        .ha-booking p {
          color:#dbe4ef;
          font-size:13px;
          line-height:2;
        }
        .ha-booking-actions {
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:12px;
          margin-top:32px;
        }

        /* LOCATION */

        .ha-location-grid {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
        }
        .ha-location-info {
          padding:45px;
          background:white;
          border:1px solid var(--line);
        }
        .ha-location-info h3 {
          font-size:29px;
          margin:0 0 30px;
        }
        .ha-location-info dt {
          color:var(--navy);
          font-size:10px;
          font-weight:700;
          letter-spacing:1.8px;
          margin-top:23px;
        }
        .ha-location-info dd {
          color:#474d55;
          font-size:13px;
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
          min-height:430px;
          background:#e9e4dc;
          padding:40px;
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
          position:relative;
        }
        .ha-location-visual:before {
          content:"";
          position:absolute;
          inset:20px;
          border:1px solid rgba(25,59,113,.18);
          pointer-events:none;
        }
        .ha-location-visual-content {
          position:relative;
          z-index:1;
        }
        .ha-location-visual h3 {
          color:var(--navy);
          font:clamp(38px,5vw,64px) Georgia,serif;
          margin:20px 0;
        }
        .ha-location-visual p {
          color:#686f78;
          font-size:13px;
          line-height:2;
          margin-bottom:26px;
        }

        /* FOOTER */

        .ha-area-section {
          background:var(--ivory);
          border-top:1px solid var(--line);
        }
        .ha-area-inner {
          min-height:96px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
        }
        .ha-area-inner span {
          font-size:12px;
          color:var(--muted);
        }
        .ha-area-inner a {
          color:var(--navy);
          font-size:12px;
          font-weight:700;
        }
        .ha-footer {
          background:#17263b;
          color:white;
          padding:65px 0 110px;
        }
        .ha-footer-inner {
          display:flex;
          justify-content:space-between;
          gap:40px;
        }
        .ha-footer .ha-brand{color:white!important}
        .ha-footer-social {
          display:inline-flex;
          align-items:center;
          gap:9px;
          margin-top:26px;
          font-size:12px;
        }
        .ha-footer-info{text-align:right}
        .ha-footer-info p {
          font-size:12px;
          line-height:2.1;
          color:#c6cedb;
        }
        .ha-footer-links {
          display:flex;
          flex-wrap:wrap;
          justify-content:flex-end;
          gap:18px;
          font-size:11px;
          font-weight:600;
        }
        .ha-mobile-bar{display:none}

        /* RESPONSIVE */

        @media(max-width:1100px) {
          .ha-nav{gap:14px}
          .ha-header-booking{display:none}
          .ha-services-grid {
            grid-template-columns:repeat(2,minmax(0,1fr));
          }
        }
        @media(max-width:850px) {
          .ha-container{width:calc(100% - 40px)}
          .ha-nav{display:none}
          .ha-header-booking{display:flex}
          .ha-gallery {
            grid-template-columns:repeat(2,minmax(0,1fr));
          }
          .ha-about-grid {
            grid-template-columns:1fr;
            gap:55px;
          }
          .ha-portrait-shell {
            max-width:570px;
            margin:auto;
          }
          .ha-location-grid{grid-template-columns:1fr}
        }
        @media(max-width:600px) {
          .ha-container{width:calc(100% - 36px)}
          .ha-header-inner{min-height:68px}
          .ha-brand{font-size:24px}
          .ha-header-booking{padding:12px 14px;font-size:10px}
          .ha-hero-grid{
            display:flex;
            flex-direction:column;
          }
          .ha-hero-content {
            padding:50px 0 42px;
            align-items:center;
            text-align:center;
          }
          .ha-hero-brand {
            font-size:clamp(57px,14vw,85px);
            letter-spacing:-3px;
            margin:20px 0 9px;
          }
          .ha-hero-location{font-size:9px}
          .ha-hero-divider{margin:26px 0}
          .ha-hero h2{font-size:32px;letter-spacing:-1px}
          .ha-hero-desc{font-size:12px;margin-top:18px}
          .ha-hero-actions {
            width:100%;
            justify-content:center;
            margin-top:24px;
          }
          .ha-hero-actions .ha-button {
            flex:1;
            padding:12px 9px;
            font-size:11px;
            gap:8px;
          }
          .ha-hero-social{font-size:11px;margin-top:25px}
          .ha-hero-image-side {
            min-height:0;
            aspect-ratio:4/3.5;
            margin:0 -18px;
          }
          .ha-slide-label {
            left:23px;
            right:23px;
            bottom:23px;
          }
          .ha-slide-label strong{font-size:20px}
          .ha-slide-label small{font-size:9px}
          .ha-slide-label em{font-size:8px}
          .ha-slide-counter{top:18px;right:18px}
          .ha-hero-bottom-inner{min-height:65px}
          .ha-hero-bottom span{font-size:9px;letter-spacing:1px}
          .ha-hero-bottom a{font-size:9px}
          .ha-section{padding:73px 0}
          .ha-section-heading{margin-bottom:34px}
          .ha-section-heading h2{font-size:39px}
          .ha-section-heading p{font-size:12px}
          .ha-gallery{gap:29px 12px}
          .ha-work-photo{aspect-ratio:4/5}
          .ha-work-index {
            width:29px;
            height:29px;
            font-size:12px;
            top:10px;
            left:10px;
          }
          .ha-work-english{font-size:8px;letter-spacing:.5px}
          .ha-work h3{font-size:14px}
          .ha-work p{font-size:11px}
          .ha-text-link{font-size:10px}
          .ha-instagram-feature {
            flex-direction:column;
            align-items:flex-start;
            padding:27px 23px;
            gap:20px;
            margin-top:43px;
          }
          .ha-instagram-feature h3{font-size:26px}
          .ha-instagram-feature p{font-size:12px}
          .ha-instagram-feature .ha-button{width:100%}
          .ha-portrait-shell{padding:0 25px 27px 0}
          .ha-portrait-shell:before{top:27px;left:25px}
          .ha-about-intro{font-size:32px}
          .ha-about-text{font-size:13px}
          .ha-services-grid{gap:11px}
          .ha-service-image{aspect-ratio:4/4}
          .ha-service-body{padding:19px 13px}
          .ha-service-body h3{font-size:17px}
          .ha-service-body p{font-size:11px}
          .ha-service-english{font-size:8px}
          .ha-service-links a{font-size:10px}
          .ha-review-summary{gap:32px}
          .ha-review-number strong{font-size:43px}
          .ha-review-number span{font-size:10px}
          .ha-review-card{width:245px;min-height:190px;padding:22px}
          .ha-review-card h3{font-size:17px}
          .ha-review-actions{padding:0 18px}
          .ha-review-actions .ha-button{font-size:11px;padding:12px}
          .ha-booking{padding:78px 19px}
          .ha-booking h2{font-size:32px}
          .ha-booking-actions .ha-button{font-size:11px;padding:12px}
          .ha-location-info{padding:30px 25px}
          .ha-location-info h3{font-size:24px}
          .ha-location-visual{min-height:310px;padding:30px}
          .ha-location-visual h3{font-size:48px}
          .ha-area-inner{
            min-height:0;
            padding:25px 0;
            flex-direction:column;
            align-items:flex-start;
            gap:10px;
          }
          .ha-footer{
            padding:53px 0 calc(115px + env(safe-area-inset-bottom));
          }
          .ha-footer-inner{flex-direction:column;gap:35px}
          .ha-footer-info{text-align:left}
          .ha-footer-links{justify-content:flex-start}
          .ha-mobile-bar{
            position:fixed;
            left:0;
            right:0;
            bottom:0;
            z-index:100;
            display:grid;
            grid-template-columns:1fr 1fr 1.5fr;
            gap:8px;
            padding:10px 12px calc(10px + env(safe-area-inset-bottom));
            background:#fff;
            border-top:1px solid var(--line);
          }
          .ha-mobile-bar a{
            display:flex;
            justify-content:center;
            align-items:center;
            min-height:48px;
            color:var(--navy);
            background:var(--warm);
            font-size:12px;
            font-weight:700;
          }
          .ha-mobile-bar a:last-child{
            color:white;
            background:var(--navy);
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .ha-slide{animation:none;opacity:0;visibility:hidden}
          .ha-slide:first-child{
            opacity:1;
            visibility:visible;
            pointer-events:auto;
          }
          .ha-slide-progress:after{animation:none;transform:scaleX(5)}
          .ha-marquee-track{animation:none}
          .ha-marquee-window{overflow-x:auto}
          .ha-work-photo img,.ha-button{transition:none}
        }
      `}</style>

      <header className="ha-header">
        <div className="ha-container ha-header-inner">
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
          <div className="ha-container ha-hero-grid">
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

            {/* 자동 무한 슬라이드 */}
            <div
              className="ha-hero-image-side"
              aria-label="하이유헤어 시술 사진 자동 슬라이드"
            >
              {heroSlides.map((slide, index) => (
                <Link
                  key={slide.href}
                  href={slide.href}
                  className="ha-slide"
                  style={{
                    animationDelay: `${index * -4}s`,
                    zIndex: heroSlides.length - index,
                  }}
                  aria-label={`${slide.title} 자세히 보기`}
                >
                  <Image
                    src={slide.image}
                    alt={`${slide.title} 하이유헤어 시술 사진`}
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
                        {slide.english} · {slide.title}
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
                01 — 05 · HAIR COLLECTION
              </div>

              <div className="ha-slide-progress" />
            </div>
          </div>
        </section>

        <div className="ha-hero-bottom">
          <div className="ha-container ha-hero-bottom-inner">
            <span>HAIR DESIGN BY HAERIN LEE</span>
            <a href="#portfolio">
              EXPLORE THE COLLECTION
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* PORTFOLIO */}
        <section id="portfolio" className="ha-section">
          <div className="ha-container">
            <SectionHeading
              number="01"
              eyebrow="THE HAIR COLLECTION"
              title="Signature Hair"
              description="당신의 취향에 맞는 아름다운 변화를 만나보세요."
            />

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
                        sizes="(max-width:850px) 50vw, 25vw"
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

        {/* DESIGNER */}
        <section id="about" className="ha-section ha-section-ivory">
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
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <details className="ha-details">
                  <summary>자격 · 수상 경력 전체 보기</summary>
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

              <div style={{ marginTop: 27 }}>
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
                      sizes="(max-width:850px) 50vw, 25vw"
                    />
                    <span>{service.number}</span>
                  </div>

                  <div className="ha-service-body">
                    <small className="ha-service-english">
                      {service.english}
                    </small>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>

                    <div className="ha-service-links">
                      {service.links.map((link) => (
                        <Link key={link.href} href={link.href}>
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

        {/* REVIEWS */}
        <section id="reviews" className="ha-section">
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
                        <small>NAVER CUSTOMER FEEDBACK</small>
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

            <BookingButton>네이버 예약하기</BookingButton>
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
              className="ha-button ha-button-white-outline"
            >
              홈페이지 문자 예약
              <ArrowIcon />
            </Link>
          </div>
        </section>

        {/* LOCATION */}
        <section id="location" className="ha-section ha-section-ivory">
          <div className="ha-container">
            <SectionHeading
              number="05"
              eyebrow="FIND YOUR SALON"
              title="Visit HI U HAIR"
              description="천안 청당동 하이유헤어 청당점"
            />

            <div className="ha-location-grid">
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

      {/* REGIONAL GUIDE */}
      <div className="ha-area-section">
        <div className="ha-container ha-area-inner">
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
        <div className="ha-container ha-footer-inner">
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

      {/* MOBILE BOOKING */}
      <nav
        className="ha-mobile-bar"
        aria-label="빠른 상담 및 예약"
      >
        <a href={`tel:${PHONE}`}>전화</a>
        <a href={`sms:${PHONE}`}>문자</a>
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
