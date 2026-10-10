
import Link from "next/link";
import Image from "next/image";

const PHONE = "01023277653";
const PHONE_VIEW = "010-2327-7653";

const ADDRESS =
  "충남 천안시 동남구 청수4로 16, 2층 201호";

const BOOKING =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&theme=place";

const REVIEWS =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&tab=review&theme=place";

const MAP =
  "https://map.naver.com/p/search/" +
  encodeURIComponent("하이유헤어 청당점");

/* ==================================
   포트폴리오 8개
   public 폴더 파일명 그대로 사용
================================== */

const portfolio = [
  {
    title: "빌드펌 / 매트브라운",
    en: "BUILD PERM · MATTE BROWN",
    desc: "차분한 컬러에 자연스러운 볼륨을 더한 디자인",
    img: "/IMG_1424.jpeg",
  },
  {
    title: "하이레이어드컷 / C컬",
    en: "HIGH LAYERED · C CURL",
    desc: "가볍게 흐르는 레이어와 우아한 C컬",
    img: "/IMG_1427.jpeg",
  },
  {
    title: "물결펌 / 밀크브라운",
    en: "WAVE PERM · MILK BROWN",
    desc: "부드러운 웨이브와 따뜻한 브라운 컬러",
    img: "/IMG_1423.jpeg",
  },
  {
    title: "베이지브라운",
    en: "BEIGE BROWN",
    desc: "은은한 색감으로 완성하는 세련된 무드",
    img: "/IMG_1425.jpeg",
  },
  {
    title: "루비레드컬러",
    en: "RUBY RED",
    desc: "깊이감 있는 레드로 표현하는 특별한 분위기",
    img: "/IMG_1433.jpeg",
  },
  {
    title: "레이어드 빌드펌",
    en: "LAYERED BUILD PERM",
    desc: "레이어드 실루엣에 자연스러운 컬과 볼륨",
    img: "/IMG_1444.jpeg",
  },
  {
    title: "블루염색",
    en: "BLUE COLOR",
    desc: "감각적인 블루 컬러의 선명한 존재감",
    img: "/IMG_1445.jpeg",
  },
  {
    title: "베이비핑크염색 / 붙임머리",
    en: "BABY PINK · EXTENSION",
    desc: "화사한 핑크 컬러와 부드러운 롱헤어",
    img: "/IMG_1446.jpeg",
  },
];

/* ==================================
   시술 메뉴
================================== */

const services = [
  {
    num: "01",
    en: "CUT & LAYER",
    title: "여성 커트",
    desc: "얼굴형과 모발 흐름을 고려한 스타일 디자인",
  },
  {
    num: "02",
    en: "PERM & WAVE",
    title: "여성 펌",
    desc: "빌드펌 · 물결펌 · 레이어드펌",
  },
  {
    num: "03",
    en: "COLOR DESIGN",
    title: "여성 염색",
    desc: "브라운 · 루비레드 · 블루 · 베이비핑크",
  },
  {
    num: "04",
    en: "HAIR EXTENSION",
    title: "붙임머리",
    desc: "원하는 길이와 분위기에 맞춘 헤어 상담",
  },
];

/* ==================================
   경력 정보
================================== */

const highlights = [
  "유원대학교 뷰티케어학과 졸업",
  "미용 종합면허증",
  "헤어 · 메이크업 국가자격증",
  "퍼스널컬러 컨설턴트 자격증",
];

const certifications = [
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

/* ==================================
   네이버 고객 평가
   기존 확인된 스냅샷 수치
================================== */

const feedback = [
  {
    title: "원하는 스타일로 잘해줘요",
    value: "259명",
    desc: "네이버 고객 선택 평가",
  },
  {
    title: "친절해요",
    value: "218명",
    desc: "네이버 고객 선택 평가",
  },
  {
    title: "시술이 꼼꼼해요",
    value: "168명",
    desc: "네이버 고객 선택 평가",
  },
  {
    title: "스타일 추천을 잘해줘요",
    value: "146명",
    desc: "네이버 고객 선택 평가",
  },
  {
    title: "트렌디해요",
    value: "73명",
    desc: "네이버 고객 선택 평가",
  },
];

const styles = [
  "레이어드컷",
  "빌드펌",
  "브라운 컬러",
  "블루염색",
  "베이비핑크",
];

/* ==================================
   버튼
================================== */

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
        light ? "ha-btn ha-btn-light" : "ha-btn ha-btn-blue"
      }
    >
      {children}
    </a>
  );
}

export default function HomePage() {
  return (
    <div className="ha-page">
      <style>{`
        .ha-page {
          --blue: #193b71;
          --ink: #25272b;
          --soft: #777983;
          --cream: #f6f4f0;
          --line: #e8e4de;
          background: #fff;
          color: var(--ink);
          overflow-x: clip;
        }

        .ha-page * {
          box-sizing: border-box;
        }

        .ha-wrap {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        .ha-page a {
          text-decoration: none;
        }

        .ha-eyebrow {
          color: var(--blue);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
          line-height: 1.8;
        }

        .ha-btn {
          min-height: 50px;
          padding: 15px 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--blue);
          border-radius: 3px;
          font-size: 12px;
          font-weight: 600;
          transition: .25s ease;
          text-align: center;
        }

        .ha-btn:hover {
          transform: translateY(-2px);
        }

        .ha-btn-blue {
          background: var(--blue);
          color: white;
        }

        .ha-btn-light {
          background: white;
          color: var(--blue);
          border-color: white;
        }

        .ha-btn-outline {
          color: var(--blue);
          background: transparent;
        }

        .ha-actions {
          display: flex;
          gap: 11px;
          flex-wrap: wrap;
          align-items: center;
          margin-top: 28px;
        }

        .ha-actions-center {
          justify-content: center;
        }

        /* Header */

        .ha-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255,255,255,.97);
          border-bottom: 1px solid var(--line);
          backdrop-filter: blur(12px);
        }

        .ha-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 76px;
          gap: 25px;
        }

        .ha-brand {
          color: var(--blue);
          font-family: Georgia, serif;
          font-size: 27px;
          letter-spacing: 2px;
          line-height: 1;
          display: flex;
          flex-direction: column;
          white-space: nowrap;
        }

        .ha-brand small {
          margin-top: 9px;
          font-family: Arial, sans-serif;
          font-size: 9px;
          letter-spacing: 4px;
        }

        .ha-nav {
          display: flex;
          align-items: center;
          gap: 25px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .4px;
        }

        .ha-nav a:hover {
          color: var(--blue);
        }

        .ha-nav .ha-btn {
          color: white;
        }

        /* Hero */

        .ha-hero {
          position: relative;
          overflow: hidden;
          text-align: center;
          background:
            radial-gradient(
              ellipse at 50% 0%,
              #fff 0%,
              #f6f4f0 82%
            );
          padding: 100px 20px 96px;
        }

        .ha-hero:before {
          content: "";
          position: absolute;
          top: 24px;
          left: 50%;
          height: 410px;
          width: 410px;
          transform: translateX(-50%);
          border: 1px solid rgba(25,59,113,.08);
          border-radius: 50%;
          pointer-events: none;
        }

        .ha-hero-inner {
          position: relative;
          z-index: 1;
        }

        .ha-hero-brand {
          font-family: Georgia, serif;
          font-size: clamp(45px, 9vw, 105px);
          font-weight: 400;
          letter-spacing: -2px;
          line-height: 1.2;
          white-space: nowrap;
          color: var(--blue);
          margin: 27px 0 12px;
        }

        .ha-hero-sub {
          display: flex;
          align-items: center;
          gap: 15px;
          max-width: 320px;
          margin: 0 auto 60px;
          font-size: 10px;
          color: var(--blue);
          letter-spacing: 4px;
        }

        .ha-hero-sub:before,
        .ha-hero-sub:after {
          content: "";
          flex: 1;
          height: 1px;
          background: #b3becf;
        }

        .ha-hero h2 {
          font-size: clamp(28px, 5vw, 46px);
          letter-spacing: -1.8px;
          font-weight: 400;
          line-height: 1.5;
          margin: 0 0 17px;
          word-break: keep-all;
        }

        .ha-hero h2 strong {
          font-weight: 600;
          color: var(--blue);
        }

        .ha-hero-desc {
          font-size: 13px;
          line-height: 2.1;
          color: var(--soft);
          word-break: keep-all;
        }

        .ha-hero-scroll {
          display: block;
          color: var(--blue);
          font-size: 10px;
          letter-spacing: 2px;
          margin-top: 55px;
        }

        .ha-strip {
          padding: 21px 15px;
          color: white;
          background: var(--blue);
          font-size: 10px;
          letter-spacing: 4px;
          text-align: center;
        }

        /* Sections */

        .ha-section {
          padding: 100px 0;
          scroll-margin-top: 85px;
        }

        .ha-cream {
          background: var(--cream);
        }

        .ha-heading {
          text-align: center;
          margin-bottom: 48px;
        }

        .ha-heading h2 {
          font-family: Georgia, "Noto Sans KR", serif;
          font-size: clamp(34px, 5vw, 51px);
          font-weight: 400;
          letter-spacing: -1.3px;
          margin: 12px 0 18px;
          line-height: 1.3;
        }

        .ha-heading p {
          font-size: 13px;
          line-height: 1.9;
          color: var(--soft);
          margin: 0;
        }

        /* Portfolio */

        .ha-gallery {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 32px 17px;
        }

        .ha-work {
          min-width: 0;
        }

        .ha-work-photo {
          position: relative;
          aspect-ratio: 4 / 5.1;
          overflow: hidden;
          border-radius: 4px;
          background: #e8e2dc;
        }

        .ha-work-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s ease;
        }

        .ha-work:hover img {
          transform: scale(1.045);
        }

        .ha-work-index {
          position: absolute;
          left: 12px;
          top: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          background: rgba(255,255,255,.94);
          font-family: Georgia, serif;
          font-size: 14px;
          color: var(--blue);
        }

        .ha-work-en {
          margin-top: 17px;
          font-size: 10px;
          color: var(--blue);
          font-weight: 700;
          letter-spacing: 1px;
          line-height: 1.7;
        }

        .ha-work h3 {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.6;
          word-break: keep-all;
          margin: 8px 0;
        }

        .ha-work p {
          font-size: 12px;
          line-height: 1.8;
          color: var(--soft);
          margin: 0 0 14px;
          word-break: keep-all;
        }

        .ha-text-link {
          color: var(--blue);
          font-size: 12px;
          font-weight: 700;
        }

        /* Profile */

        .ha-about-grid {
          display: grid;
          grid-template-columns: .92fr 1.08fr;
          align-items: center;
          gap: 80px;
        }

        .ha-portrait {
          position: relative;
          aspect-ratio: 4 / 5.2;
          overflow: hidden;
          background: #dedbd8;
          border-radius: 4px;
        }

        .ha-portrait img {
          object-fit: cover;
          object-position: center 35%;
        }

        .ha-about h2 {
          font-size: clamp(33px, 4vw, 48px);
          font-weight: 500;
          letter-spacing: -1.4px;
          margin: 15px 0 23px;
          line-height: 1.4;
        }

        .ha-about h2 strong {
          color: var(--blue);
        }

        .ha-about p {
          color: #72757c;
          font-size: 14px;
          line-height: 2.15;
          word-break: keep-all;
        }

        .ha-credentials {
          margin-top: 29px;
          padding-top: 25px;
          border-top: 1px solid #dedad4;
        }

        .ha-credentials-title {
          color: var(--blue);
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .ha-highlights {
          padding: 0;
          list-style: none;
          margin: 0;
        }

        .ha-highlights li {
          color: #5d6169;
          font-size: 12px;
          line-height: 2;
          padding-left: 15px;
          position: relative;
        }

        .ha-highlights li:before {
          content: "·";
          position: absolute;
          top: 0;
          left: 1px;
          color: var(--blue);
          font-weight: 700;
        }

        .ha-details {
          margin-top: 22px;
          border-top: 1px solid #e2ddd6;
        }

        .ha-details summary {
          padding: 18px 0;
          color: var(--blue);
          font-weight: 700;
          font-size: 12px;
          cursor: pointer;
          list-style-position: inside;
        }

        .ha-details-content {
          padding-bottom: 19px;
          color: #6d717a;
          font-size: 12px;
          line-height: 2;
        }

        .ha-details-content strong {
          display: block;
          color: var(--ink);
          margin-top: 12px;
        }

        .ha-details-content ul {
          padding-left: 18px;
          margin: 5px 0 0;
        }

        /* Services */

        .ha-services {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 14px;
        }

        .ha-service {
          padding: 27px 22px;
          background: #fff;
          border: 1px solid #e8e3dc;
          border-radius: 3px;
          min-height: 178px;
        }

        .ha-service-num {
          font-family: Georgia, serif;
          font-size: 22px;
          color: var(--blue);
        }

        .ha-service h3 {
          font-size: 18px;
          margin: 20px 0 9px;
          font-weight: 600;
        }

        .ha-service small {
          display: block;
          font-size: 9px;
          letter-spacing: 1px;
          color: var(--blue);
          font-weight: 700;
        }

        .ha-service p {
          font-size: 12px;
          color: var(--soft);
          line-height: 1.8;
          margin: 12px 0 0;
        }

        /* Reviews */

        .ha-reviews {
          overflow: hidden;
          background: #fff;
        }

        .ha-review-summary {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 34px;
          margin-bottom: 41px;
          text-align: center;
        }

        .ha-review-summary strong {
          display: block;
          color: var(--blue);
          font-family: Georgia, serif;
          font-size: 43px;
          font-weight: 400;
        }

        .ha-review-summary span {
          color: var(--soft);
          font-size: 11px;
        }

        .ha-review-separator {
          height: 44px;
          width: 1px;
          background: var(--line);
        }

        .ha-marquee-window {
          overflow: hidden;
          width: 100%;
          padding: 5px 0 15px;
        }

        .ha-marquee-track {
          display: flex;
          width: max-content;
          animation: ha-slide 62s linear infinite;
          will-change: transform;
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
          width: 270px;
          min-height: 218px;
          background: var(--cream);
          border: 1px solid var(--line);
          border-radius: 5px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .ha-review-card small {
          color: var(--blue);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .ha-review-card h3 {
          font-size: 18px;
          line-height: 1.55;
          margin: 16px 0;
          word-break: keep-all;
        }

        .ha-review-card strong {
          color: var(--blue);
          font-size: 23px;
          font-family: Georgia, serif;
          font-weight: 500;
        }

        .ha-review-card p {
          color: var(--soft);
          font-size: 11px;
          line-height: 1.6;
          margin: 8px 0 0;
        }

        @keyframes ha-slide {
          from {transform: translateX(0)}
          to {transform: translateX(-50%)}
        }

        .ha-note {
          text-align: center;
          color: #898a8e;
          font-size: 11px;
          line-height: 1.9;
          margin-top: 20px;
          padding: 0 20px;
        }

        /* Booking */

        .ha-booking {
          background: var(--blue);
          color: white;
          text-align: center;
          padding: 88px 20px;
        }

        .ha-booking .ha-eyebrow {
          color: #d9e5f7;
        }

        .ha-booking h2 {
          font-size: clamp(29px, 5vw, 46px);
          line-height: 1.5;
          font-weight: 400;
          letter-spacing: -1px;
          margin: 15px 0;
        }

        .ha-booking p {
          font-size: 13px;
          line-height: 2;
          color: #dce4ef;
        }

        .ha-booking .ha-btn-outline {
          color: #fff;
          border-color: #c5d4e7;
        }

        /* Location */

        .ha-location {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 23px;
        }

        .ha-location-info,
        .ha-location-map {
          padding: 40px;
          min-height: 340px;
          background: white;
          border: 1px solid var(--line);
        }

        .ha-location-info h3 {
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 28px;
        }

        .ha-location-info dt {
          font-size: 10px;
          letter-spacing: 1px;
          font-weight: 700;
          color: var(--blue);
          margin-top: 21px;
        }

        .ha-location-info dd {
          margin: 7px 0;
          font-size: 13px;
          line-height: 1.9;
        }

        .ha-location-map {
          background: #ebe8e2;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ha-location-map h3 {
          font-family: Georgia, serif;
          color: var(--blue);
          font-size: 34px;
          letter-spacing: 2px;
        }

        .ha-location-map p {
          font-size: 12px;
          color: #737680;
          line-height: 2;
        }

        /* Footer */

        .ha-footer {
          background: #1c2432;
          color: white;
          padding: 50px 0 100px;
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

        @media(max-width: 960px) {
          .ha-nav {
            display: none;
          }

          .ha-gallery {
            grid-template-columns: repeat(2,minmax(0,1fr));
          }

          .ha-about-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .ha-portrait {
            max-width: 600px;
            width: 100%;
            margin: auto;
          }

          .ha-services {
            grid-template-columns: repeat(2,minmax(0,1fr));
          }
        }

        @media(max-width: 600px) {
          .ha-header-inner {
            min-height: 67px;
          }

          .ha-brand {
            font-size: 23px;
          }

          .ha-hero {
            padding: 80px 18px 68px;
          }

          .ha-hero:before {
            width: 310px;
            height: 310px;
          }

          .ha-hero-brand {
            font-size: clamp(37px, 10.2vw, 60px);
          }

          .ha-hero-sub {
            margin-bottom: 48px;
          }

          .ha-hero h2 {
            font-size: 28px;
          }

          .ha-hero-scroll {
            margin-top: 43px;
          }

          .ha-section {
            padding: 70px 0;
          }

          .ha-heading {
            margin-bottom: 32px;
          }

          .ha-heading h2 {
            font-size: 36px;
          }

          .ha-gallery {
            gap: 27px 12px;
          }

          .ha-work-en {
            font-size: 9px;
          }

          .ha-work h3 {
            font-size: 14px;
          }

          .ha-work p {
            font-size: 11px;
          }

          .ha-services {
            gap: 10px;
          }

          .ha-service {
            min-height: 170px;
            padding: 22px 17px;
          }

          .ha-service h3 {
            font-size: 16px;
          }

          .ha-review-card {
            width: 255px;
          }

          .ha-location {
            grid-template-columns: 1fr;
          }

          .ha-location-info,
          .ha-location-map {
            padding: 30px;
          }

          .ha-footer-inner {
            flex-direction: column;
          }

          .ha-mobile-bar {
            display: grid;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 100;
            grid-template-columns: 1fr 1fr 1.5fr;
            gap: 8px;
            background: white;
            border-top: 1px solid #eae7e1;
            padding:
              10px 12px
              calc(10px + env(safe-area-inset-bottom));
          }

          .ha-mobile-bar a {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 47px;
            border-radius: 3px;
            text-align: center;
            font-size: 12px;
            font-weight: 700;
            color: var(--blue);
            background: #f1efeb;
          }

          .ha-mobile-bar a:last-child {
            background: var(--blue);
            color: white;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .ha-marquee-track {
            animation: none;
          }

          .ha-marquee-window {
            overflow-x: auto;
          }

          .ha-work-photo img,
          .ha-btn {
            transition: none;
          }
        }
      `}</style>

      {/* 상단 헤더 */}
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
            <a href="#location">LOCATION</a>
            <BookingButton>예약하기</BookingButton>
          </nav>
        </div>
      </header>

      <main>
        {/* 메인 */}
        <section className="ha-hero">
          <div className="ha-hero-inner">
            <span className="ha-eyebrow">
              PERSONAL HAIR ATELIER · CHEONGDANG
            </span>

            <h1 className="ha-hero-brand">
              HI U HAIR
            </h1>

            <div className="ha-hero-sub">
              CHEONGDANG
            </div>

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

            <div className="ha-actions ha-actions-center">
              <BookingButton>
                네이버 예약하기 ↗
              </BookingButton>

              <a
                href="#portfolio"
                className="ha-btn ha-btn-outline"
              >
                헤어스타일 보기
              </a>
            </div>

            <a
              href="#portfolio"
              className="ha-hero-scroll"
            >
              EXPLORE THE COLLECTION ↓
            </a>
          </div>
        </section>

        <div className="ha-strip">
          HAIR DESIGN BY HAERIN LEE
        </div>

        {/* 포트폴리오를 앞으로 이동 */}
        <section
          id="portfolio"
          className="ha-section"
        >
          <div className="ha-wrap">
            <div className="ha-heading">
              <span className="ha-eyebrow">
                THE HAIR COLLECTION
              </span>

              <h2>Signature Hair</h2>

              <p>
                당신의 취향에 맞는 아름다운 변화를 만나보세요.
              </p>
            </div>

            <div className="ha-gallery">
              {portfolio.map((item, index) => (
                <article
                  className="ha-work"
                  key={item.img}
                >
                  <div className="ha-work-photo">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 960px) 50vw, 25vw"
                    />

                    <span className="ha-work-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="ha-work-en">
                    {item.en}
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  <a
                    href={BOOKING}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ha-text-link"
                  >
                    스타일 예약하기 ↗
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 디자이너 소개 */}
        <section
          id="about"
          className="ha-section ha-cream"
        >
          <div className="ha-wrap ha-about-grid">
            <div className="ha-portrait">
              <Image
                src="/IMG_1443.jpeg"
                alt="이해린 디자이너 프로필"
                fill
                sizes="(max-width: 960px) 100vw, 45vw"
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
                사람마다 어울리는 분위기는 다릅니다.
                고객님의 취향과 모발의 특성,
                일상에서의 스타일링까지 함께 고려하여
                자연스럽고 감각적인 변화를 고민합니다.
              </p>

              <div className="ha-credentials">
                <div className="ha-credentials-title">
                  EDUCATION & QUALIFICATIONS
                </div>

                <ul className="ha-highlights">
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <details className="ha-details">
                  <summary>
                    자격 · 수상 경력 전체 보기
                  </summary>

                  <div className="ha-details-content">
                    <strong>자격 및 교육 수료</strong>
                    <ul>
                      {certifications.map((item) => (
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

        {/* 시술 메뉴 */}
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
                나에게 어울리는 스타일을 위한 디자인 메뉴
              </p>
            </div>

            <div className="ha-services">
              {services.map((service) => (
                <article
                  className="ha-service"
                  key={service.num}
                >
                  <div className="ha-service-num">
                    {service.num}
                  </div>

                  <h3>{service.title}</h3>
                  <small>{service.en}</small>
                  <p>{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 고객 리뷰 자동 슬라이드 */}
        <section
          id="reviews"
          className="ha-section ha-reviews"
        >
          <div className="ha-heading ha-wrap">
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

            <div className="ha-review-separator" />

            <div>
              <strong>263</strong>
              <span>좋은 점 평가 참여</span>
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
                      href={REVIEWS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ha-review-card"
                      key={`${copy}-${review.title}`}
                      tabIndex={copy === 1 ? -1 : 0}
                    >
                      <div>
                        <small>NAVER CUSTOMER FEEDBACK</small>
                        <h3>{review.title}</h3>
                      </div>

                      <div>
                        <strong>{review.value}</strong>
                        <p>{review.desc}</p>
                      </div>
                    </a>
                  ))}

                  {styles.map((style) => (
                    <a
                      href="#portfolio"
                      className="ha-review-card"
                      key={`${copy}-${style}`}
                      tabIndex={copy === 1 ? -1 : 0}
                    >
                      <div>
                        <small>HAIR DESIGN STYLE</small>
                        <h3>{style}</h3>
                      </div>

                      <div>
                        <strong>HI U HAIR</strong>
                        <p>포트폴리오 스타일 소개</p>
                      </div>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="ha-actions ha-actions-center">
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

          <p className="ha-note">
            고객 평가 수치는 2026년 10월 10일 확인 기준이며
            실시간 갱신되지 않습니다.
            <br />
            평가 카드 5개와 스타일 소개 카드 5개로
            구성되어 있으며 실제 리뷰 원문은 네이버에서 확인할 수 있습니다.
          </p>
        </section>

        {/* 예약 배너 */}
        <section className="ha-booking">
          <span className="ha-eyebrow">
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

          <div className="ha-actions ha-actions-center">
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

        {/* 위치 */}
        <section
          id="location"
          className="ha-section ha-cream"
        >
          <div className="ha-wrap">
            <div className="ha-heading">
              <span className="ha-eyebrow">
                FIND YOUR SALON
              </span>

              <h2>Visit HI U HAIR</h2>

              <p>
                천안 청당동 하이유헤어 청당점
              </p>
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
                    <a href={`tel:${PHONE}`}>
                      {PHONE_VIEW}
                    </a>
                  </dd>

                  <dt>RESERVATION</dt>
                  <dd>네이버 예약 · 전화 · 문자</dd>
                </dl>

                <div className="ha-actions">
                  <a
                    href={`tel:${PHONE}`}
                    className="ha-btn ha-btn-blue"
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
                    className="ha-btn ha-btn-blue"
                  >
                    네이버 지도 보기 ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="ha-footer">
        <div className="ha-wrap ha-footer-inner">
          <Link href="/" className="ha-brand">
            HI U HAIR
            <small>CHEONGDANG</small>
          </Link>

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

      {/* 모바일 하단 고정 버튼 */}
      <div className="ha-mobile-bar">
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
      </div>
    </div>
  );
}
