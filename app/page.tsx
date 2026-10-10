
import Link from "next/link";
import Image from "next/image";

const PHONE = "01023277653";
const PHONE_VIEW = "010-2327-7653";

const ADDRESS =
  "충남 천안시 동남구 청수4로 16, 2층 201호";

const NAVER_BOOKING =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&theme=place";

const NAVER_REVIEWS =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&tab=review&theme=place";

const NAVER_MAP =
  "https://map.naver.com/p/search/" +
  encodeURIComponent("하이유헤어 청당점");

/* =====================================
   여성 헤어 시술 카테고리
===================================== */

const services = [
  {
    number: "01",
    english: "WOMEN'S CUT",
    name: "여성 커트",
    desc: "얼굴형과 모발의 흐름을 고려한 커트 디자인",
  },
  {
    number: "02",
    english: "LAYERED STYLE",
    name: "레이어드컷",
    desc: "하이레이어드컷과 자연스러운 C컬",
  },
  {
    number: "03",
    english: "PERM DESIGN",
    name: "여성 펌",
    desc: "빌드펌, 물결펌, 레이어드 빌드펌",
  },
  {
    number: "04",
    english: "HAIR COLOR",
    name: "여성 염색",
    desc: "브라운, 루비레드, 블루, 베이비핑크",
  },
  {
    number: "05",
    english: "HAIR EXTENSION",
    name: "붙임머리",
    desc: "원하는 길이와 분위기를 고려한 디자인 상담",
  },
];

/* =====================================
   포트폴리오 8개

   GitHub public 폴더의
   실제 파일명 그대로 사용
===================================== */

const portfolio = [
  {
    id: "build-perm",
    english: "BUILD PERM",
    title: "빌드펌 / 매트브라운",
    desc: "풍성한 볼륨과 차분한 매트브라운 컬러",
    image: "/IMG_1424.jpeg",
  },
  {
    id: "high-layered",
    english: "HIGH LAYERED CUT",
    title: "하이레이어드컷 / C컬",
    desc: "자연스러운 레이어와 부드러운 C컬",
    image: "/IMG_1427.jpeg",
  },
  {
    id: "wave-perm",
    english: "WAVE PERM",
    title: "물결펌 / 밀크브라운",
    desc: "부드러운 물결 웨이브와 밀크브라운",
    image: "/IMG_1423.jpeg",
  },
  {
    id: "beige-brown",
    english: "BEIGE BROWN",
    title: "베이지브라운",
    desc: "은은하고 세련된 베이지브라운 컬러",
    image: "/IMG_1425.jpeg",
  },
  {
    id: "ruby-red",
    english: "RUBY RED",
    title: "루비레드컬러",
    desc: "선명하고 깊이감 있는 루비레드 컬러",
    image: "/IMG_1433.jpeg",
  },
  {
    id: "layered-build",
    english: "LAYERED BUILD PERM",
    title: "레이어드 빌드펌",
    desc: "레이어드 커트에 볼륨과 컬을 더한 스타일",
    image: "/IMG_1444.jpeg",
  },
  {
    id: "blue-color",
    english: "BLUE HAIR COLOR",
    title: "블루염색",
    desc: "선명한 블루 컬러로 완성하는 개성 있는 헤어",
    image: "/IMG_1445.jpeg",
  },
  {
    id: "baby-pink",
    english: "BABY PINK & EXTENSION",
    title: "베이비핑크염색 / 붙임머리",
    desc: "사랑스러운 베이비핑크 컬러와 롱헤어 디자인",
    image: "/IMG_1446.jpeg",
  },
];

/* =====================================
   네이버 예약 고객 평가

   이전에 정리한 평가 항목 5개만
   집계 수치를 표시함.

   나머지 5개는 시술 스타일 소개 카드.
   실제 후기 개수인 것처럼 표시하지 않음.
===================================== */

const reviewCards = [
  {
    id: "review-1",
    category: "CUSTOMER FEEDBACK",
    title: "원하는 스타일로 잘해줘요",
    count: "259명",
    desc: "네이버 예약 고객 선택 항목",
  },
  {
    id: "review-2",
    category: "CUSTOMER FEEDBACK",
    title: "친절해요",
    count: "218명",
    desc: "네이버 예약 고객 선택 항목",
  },
  {
    id: "review-3",
    category: "CUSTOMER FEEDBACK",
    title: "시술이 꼼꼼해요",
    count: "168명",
    desc: "네이버 예약 고객 선택 항목",
  },
  {
    id: "review-4",
    category: "CUSTOMER FEEDBACK",
    title: "스타일 추천을 잘해줘요",
    count: "146명",
    desc: "네이버 예약 고객 선택 항목",
  },
  {
    id: "review-5",
    category: "CUSTOMER FEEDBACK",
    title: "트렌디해요",
    count: "73명",
    desc: "네이버 예약 고객 선택 항목",
  },
  {
    id: "style-1",
    category: "HAIR STYLE",
    title: "레이어드컷",
    count: "LAYERED",
    desc: "여성 레이어드 스타일",
  },
  {
    id: "style-2",
    category: "HAIR STYLE",
    title: "빌드펌",
    count: "BUILD PERM",
    desc: "볼륨과 자연스러운 컬 디자인",
  },
  {
    id: "style-3",
    category: "HAIR STYLE",
    title: "브라운 컬러",
    count: "BROWN",
    desc: "매트브라운과 밀크브라운",
  },
  {
    id: "style-4",
    category: "HAIR STYLE",
    title: "블루염색",
    count: "BLUE",
    desc: "개성 있는 블루 컬러 디자인",
  },
  {
    id: "style-5",
    category: "HAIR STYLE",
    title: "베이비핑크",
    count: "PINK",
    desc: "베이비핑크 컬러와 붙임머리",
  },
];

/* =====================================
   네이버 예약 버튼
===================================== */

function NaverBookingButton({
  children,
  outline = false,
}: {
  children: React.ReactNode;
  outline?: boolean;
}) {
  return (
    <a
      href={NAVER_BOOKING}
      target="_blank"
      rel="noopener noreferrer"
      className={
        outline
          ? "hiu-button hiu-button-outline"
          : "hiu-button hiu-button-primary"
      }
    >
      {children}
    </a>
  );
}

/* =====================================
   홈페이지
===================================== */

export default function HomePage() {
  return (
    <>
      <style>{`
        .hiu-page {
          --hiu-blue: #173b72;
          --hiu-ink: #242730;
          --hiu-muted: #777b83;
          --hiu-cream: #f5f2ed;
          overflow-x: hidden;
        }

        .hiu-page * {
          box-sizing: border-box;
        }

        .hiu-container {
          width: min(1150px, calc(100% - 40px));
          margin: 0 auto;
        }

        .hiu-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255,255,255,.97);
          border-bottom: 1px solid #ece8e2;
        }

        .hiu-header-inner {
          min-height: 77px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .hiu-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          font-family: Georgia, serif;
          font-size: 27px;
          letter-spacing: 2px;
          line-height: 1.1;
          color: var(--hiu-blue);
          white-space: nowrap;
        }

        .hiu-brand span {
          font-family: Arial, sans-serif;
          font-size: 9px;
          letter-spacing: 3px;
          margin-top: 8px;
        }

        .hiu-nav {
          display: flex;
          align-items: center;
          gap: 23px;
          font-size: 12px;
          font-weight: 600;
        }

        .hiu-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 49px;
          padding: 14px 21px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid var(--hiu-blue);
          border-radius: 3px;
          transition: .2s;
          cursor: pointer;
        }

        .hiu-button-primary {
          background: var(--hiu-blue);
          color: #fff;
        }

        .hiu-button-outline {
          background: transparent;
          color: var(--hiu-blue);
        }

        .hiu-button:hover {
          transform: translateY(-2px);
        }

        .hiu-hero {
          background: #fff;
          text-align: center;
          padding: 85px 20px 85px;
        }

        .hiu-eyebrow {
          display: block;
          color: var(--hiu-blue);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1.6;
        }

        .hiu-hero h1 {
          font-family: Georgia, serif;
          font-size: clamp(42px, 9vw, 108px);
          color: var(--hiu-blue);
          font-weight: 400;
          letter-spacing: -2px;
          white-space: nowrap;
          line-height: 1.15;
          margin: 34px 0 20px;
        }

        .hiu-hero-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          max-width: 350px;
          margin: auto;
          color: var(--hiu-blue);
          letter-spacing: 3px;
          font-size: 11px;
        }

        .hiu-hero-line::before,
        .hiu-hero-line::after {
          content: "";
          flex: 1;
          height: 1px;
          background: var(--hiu-blue);
        }

        .hiu-hero h2 {
          font-size: clamp(26px, 5vw, 38px);
          font-weight: 500;
          margin: 50px 0 15px;
        }

        .hiu-desc {
          color: var(--hiu-muted);
          font-size: 13px;
          line-height: 2.1;
          word-break: keep-all;
        }

        .hiu-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 29px;
        }

        .hiu-strip {
          background: var(--hiu-blue);
          color: #fff;
          padding: 24px 16px;
          text-align: center;
          font-size: 11px;
          letter-spacing: 3px;
        }

        .hiu-section {
          padding: 95px 0;
          scroll-margin-top: 85px;
        }

        .hiu-section-white {
          background: #fff;
        }

        .hiu-section-cream {
          background: var(--hiu-cream);
        }

        .hiu-heading {
          text-align: center;
          margin-bottom: 43px;
        }

        .hiu-heading h2 {
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 500;
          margin: 12px 0;
          letter-spacing: -1.5px;
        }

        .hiu-heading p {
          color: var(--hiu-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .hiu-profile {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }

        .hiu-profile-photo {
          min-height: 440px;
          background: linear-gradient(
            135deg,
            #e7e0d6,
            #b9b1aa
          );
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
          padding: 35px;
        }

        .hiu-profile-photo strong {
          font-family: Georgia, serif;
          display: block;
          font-size: 42px;
          font-weight: 400;
          letter-spacing: 3px;
          margin-bottom: 15px;
        }

        .hiu-profile-photo span {
          font-size: 13px;
          line-height: 2;
        }

        .hiu-profile-text h2 {
          font-size: 36px;
          font-weight: 500;
          margin: 14px 0 24px;
        }

        .hiu-profile-text h2 b {
          color: var(--hiu-blue);
        }

        .hiu-profile-text p {
          font-size: 14px;
          line-height: 2.15;
          color: #70747c;
          word-break: keep-all;
        }

        .hiu-signature {
          border-top: 1px solid #e6e0d8;
          padding-top: 23px;
          margin-top: 28px;
          font-size: 12px;
          line-height: 2;
          font-weight: 600;
          color: var(--hiu-blue);
        }

        .hiu-services {
          display: grid;
          grid-template-columns: repeat(5, minmax(0,1fr));
          gap: 12px;
        }

        .hiu-service {
          background: white;
          border: 1px solid #e9e4dc;
          padding: 28px 19px;
          min-height: 215px;
        }

        .hiu-service small {
          color: var(--hiu-blue);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .hiu-service h3 {
          font-size: 19px;
          margin: 28px 0 12px;
        }

        .hiu-service p {
          font-size: 12px;
          color: var(--hiu-muted);
          line-height: 1.8;
          word-break: keep-all;
        }

        .hiu-portfolio-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 24px 16px;
        }

        .hiu-portfolio-item {
          min-width: 0;
        }

        .hiu-portfolio-image {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #e9e4dd;
          border-radius: 4px;
        }

        .hiu-portfolio-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s;
        }

        .hiu-portfolio-item:hover img {
          transform: scale(1.045);
        }

        .hiu-portfolio-number {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 7px 10px;
          background: rgba(255,255,255,.90);
          color: var(--hiu-blue);
          font-size: 10px;
          font-weight: 700;
        }

        .hiu-portfolio-english {
          font-size: 10px;
          color: var(--hiu-blue);
          font-weight: 700;
          letter-spacing: 1px;
          margin-top: 18px;
        }

        .hiu-portfolio-item h3 {
          font-size: 17px;
          margin: 8px 0;
          word-break: keep-all;
        }

        .hiu-portfolio-item p {
          color: var(--hiu-muted);
          font-size: 12px;
          line-height: 1.8;
          min-height: 40px;
          margin: 0 0 12px;
        }

        .hiu-portfolio-link {
          color: var(--hiu-blue);
          font-size: 12px;
          font-weight: 600;
        }

        .hiu-review-section {
          background: #f1eee8;
          padding: 95px 0;
          overflow: hidden;
          scroll-margin-top: 85px;
        }

        .hiu-review-summary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 25px;
          margin: 10px auto 43px;
          text-align: center;
        }

        .hiu-review-summary strong {
          color: var(--hiu-blue);
          font-family: Georgia, serif;
          font-size: 41px;
          font-weight: 400;
          display: block;
        }

        .hiu-review-summary span {
          font-size: 11px;
          color: var(--hiu-muted);
        }

        .hiu-review-divider {
          width: 1px;
          height: 45px;
          background: #d3cfc8;
        }

        .hiu-review-window {
          width: 100%;
          overflow: hidden;
          padding: 5px 0 22px;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 4%,
            black 96%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 4%,
            black 96%,
            transparent
          );
        }

        .hiu-review-track {
          display: flex;
          width: max-content;
          animation: hiu-marquee 65s linear infinite;
          will-change: transform;
        }

        .hiu-review-window:hover .hiu-review-track,
        .hiu-review-window:focus-within .hiu-review-track {
          animation-play-state: paused;
        }

        .hiu-review-set {
          display: flex;
          flex-shrink: 0;
          gap: 16px;
          padding-right: 16px;
        }

        .hiu-review-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-shrink: 0;
          width: 265px;
          min-height: 225px;
          padding: 25px;
          background: #fff;
          border: 1px solid #e8e2da;
          border-radius: 7px;
          white-space: normal;
        }

        .hiu-review-card small {
          color: var(--hiu-blue);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .hiu-review-card h3 {
          font-size: 19px;
          font-weight: 600;
          line-height: 1.6;
          margin: 17px 0;
          word-break: keep-all;
        }

        .hiu-review-card strong {
          color: var(--hiu-blue);
          font-size: 24px;
          font-family: Georgia, serif;
          font-weight: 500;
        }

        .hiu-review-card p {
          color: #858891;
          font-size: 11px;
          margin: 9px 0 0;
        }

        @keyframes hiu-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .hiu-review-note {
          text-align: center;
          color: #777b83;
          font-size: 11px;
          line-height: 1.9;
          padding: 0 20px;
          margin-top: 18px;
        }

        .hiu-booking-banner {
          background: var(--hiu-blue);
          color: white;
          padding: 80px 20px;
          text-align: center;
        }

        .hiu-booking-banner h2 {
          font-size: clamp(27px, 4vw, 44px);
          font-weight: 400;
          margin: 16px 0;
        }

        .hiu-booking-banner p {
          color: #e3e8f1;
          font-size: 13px;
          line-height: 2;
        }

        .hiu-booking-banner .hiu-button-primary {
          background: white;
          color: var(--hiu-blue);
          border-color: white;
        }

        .hiu-booking-banner .hiu-button-outline {
          color: white;
          border-color: white;
        }

        .hiu-location-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .hiu-location-card {
          background: white;
          padding: 40px;
          border: 1px solid #e8e4df;
        }

        .hiu-location-card h3 {
          font-size: 23px;
          margin: 0 0 25px;
        }

        .hiu-location-card dt {
          color: var(--hiu-blue);
          font-weight: 700;
          font-size: 11px;
          margin-top: 23px;
        }

        .hiu-location-card dd {
          font-size: 14px;
          line-height: 1.8;
          margin: 7px 0;
        }

        .hiu-map-card {
          background: #e6e4de;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 40px 20px;
          min-height: 350px;
        }

        .hiu-map-card h3 {
          font-family: Georgia, serif;
          font-size: 35px;
          color: var(--hiu-blue);
          letter-spacing: 2px;
        }

        .hiu-map-card p {
          font-size: 13px;
          line-height: 2;
          color: #686c73;
        }

        .hiu-footer {
          background: #1b2230;
          color: #fff;
          padding: 50px 0 105px;
        }

        .hiu-footer-inner {
          display: flex;
          justify-content: space-between;
          gap: 30px;
        }

        .hiu-footer p {
          color: #bec4cf;
          font-size: 11px;
          line-height: 2;
        }

        .hiu-bottom-bar {
          display: none;
        }

        @media(max-width: 950px) {
          .hiu-nav {
            display: none;
          }

          .hiu-profile {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .hiu-services {
            grid-template-columns: repeat(2,minmax(0,1fr));
          }

          .hiu-portfolio-grid {
            grid-template-columns: repeat(2,minmax(0,1fr));
          }
        }

        @media(max-width: 650px) {
          .hiu-header-inner {
            min-height: 68px;
          }

          .hiu-hero {
            padding: 76px 13px 68px;
          }

          .hiu-hero h1 {
            font-size: clamp(37px, 10vw, 64px);
          }

          .hiu-section {
            padding: 68px 0;
          }

          .hiu-profile-photo {
            min-height: 340px;
          }

          .hiu-service {
            min-height: 185px;
            padding: 24px 17px;
          }

          .hiu-service h3 {
            font-size: 17px;
          }

          .hiu-portfolio-grid {
            gap: 28px 12px;
          }

          .hiu-portfolio-item h3 {
            font-size: 14px;
          }

          .hiu-portfolio-item p {
            font-size: 11px;
          }

          .hiu-portfolio-english {
            font-size: 9px;
          }

          .hiu-review-section {
            padding: 70px 0;
          }

          .hiu-review-card {
            width: 255px;
          }

          .hiu-location-grid {
            grid-template-columns: 1fr;
          }

          .hiu-location-card {
            padding: 30px;
          }

          .hiu-footer-inner {
            flex-direction: column;
          }

          .hiu-bottom-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            display: grid;
            grid-template-columns: 1fr 1fr 1.5fr;
            gap: 8px;
            z-index: 100;
            background: white;
            border-top: 1px solid #e5e2de;
            padding: 10px 12px calc(
              10px + env(safe-area-inset-bottom)
            );
          }

          .hiu-bottom-bar a {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 14px 5px;
            background: #f0eee9;
            color: var(--hiu-blue);
            font-size: 12px;
            font-weight: 700;
            text-align: center;
            border-radius: 3px;
          }

          .hiu-bottom-bar a:last-child {
            background: var(--hiu-blue);
            color: white;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .hiu-review-track {
            animation: none;
          }

          .hiu-review-window {
            overflow-x: auto;
            mask-image: none;
            -webkit-mask-image: none;
          }
        }
      `}</style>

      <div className="hiu-page">
        {/* 헤더 */}
        <header className="hiu-header">
          <div className="hiu-container hiu-header-inner">
            <Link href="/" className="hiu-brand">
              HI U HAIR
              <span>CHEONGDANG</span>
            </Link>

            <nav className="hiu-nav">
              <a href="#about">DESIGNER</a>
              <a href="#services">SPECIALTY</a>
              <a href="#portfolio">PORTFOLIO</a>
              <a href="#reviews">REVIEWS</a>
              <a href="#location">LOCATION</a>
              <NaverBookingButton>
                네이버 예약
              </NaverBookingButton>
            </nav>
          </div>
        </header>

        <main>
          {/* 첫 화면 */}
          <section className="hiu-hero">
            <span className="hiu-eyebrow">
              CHEONGDANG · PERSONAL HAIR DESIGNER
            </span>

            <h1>HI U HAIR</h1>

            <div className="hiu-hero-line">
              CHEONGDANG
            </div>

            <h2>이해린 디자이너</h2>

            <p className="hiu-desc">
              당신에게 어울리는 아름다움을 디자인합니다.
              <br />
              여성 커트 · 레이어드컷 · 펌 · 염색
            </p>

            <div className="hiu-actions">
              <NaverBookingButton>
                네이버 예약하기 ↗
              </NaverBookingButton>

              <Link
                href="/reservation"
                className="hiu-button hiu-button-outline"
              >
                문자 예약 신청
              </Link>
            </div>
          </section>

          <div className="hiu-strip">
            HAIR DESIGN BY HAERIN LEE
          </div>

          {/* 디자이너 */}
          <section
            id="about"
            className="hiu-section hiu-section-white"
          >
            <div className="hiu-container hiu-profile">
              <div className="hiu-profile-photo">
                <div>
                  <strong>HAERIN LEE</strong>
                  <span>
                    PERSONAL HAIR DESIGNER
                    <br />
                    이해린 디자이너
                    <br />
                    프로필 사진 준비 중
                  </span>
                </div>
              </div>

              <div className="hiu-profile-text">
                <span className="hiu-eyebrow">
                  PERSONAL HAIR DESIGNER
                </span>

                <h2>
                  헤어 디자이너
                  <br />
                  <b>이해린</b>
                </h2>

                <p>
                  안녕하세요.
                  <br />
                  하이유헤어 청당점 이해린 디자이너입니다.
                </p>

                <p>
                  헤어스타일은 단순한 변화를 넘어
                  자신만의 분위기와 개성을 표현하는
                  중요한 요소라고 생각합니다.
                </p>

                <p>
                  고객님의 취향과 원하는 분위기를
                  충분히 듣고, 일상에서도 만족할 수
                  있는 스타일을 함께 고민하겠습니다.
                </p>

                <div className="hiu-signature">
                  HI U HAIR CHEONGDANG
                  <br />
                  DESIGNER · 이해린
                </div>

                <div
                  className="hiu-actions"
                  style={{ justifyContent: "flex-start" }}
                >
                  <NaverBookingButton>
                    이해린 디자이너 예약하기
                  </NaverBookingButton>
                </div>
              </div>
            </div>
          </section>

          {/* 시술 서비스 */}
          <section
            id="services"
            className="hiu-section hiu-section-cream"
          >
            <div className="hiu-container">
              <div className="hiu-heading">
                <span className="hiu-eyebrow">
                  HAIR DESIGN MENU
                </span>

                <h2>여성 헤어 디자인</h2>

                <p>
                  당신에게 어울리는 스타일을 찾아가는 시간
                </p>
              </div>

              <div className="hiu-services">
                {services.map((service) => (
                  <article
                    className="hiu-service"
                    key={service.number}
                  >
                    <small>
                      {service.number} / {service.english}
                    </small>

                    <h3>{service.name}</h3>
                    <p>{service.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 포트폴리오 8개 */}
          <section
            id="portfolio"
            className="hiu-section hiu-section-white"
          >
            <div className="hiu-container">
              <div className="hiu-heading">
                <span className="hiu-eyebrow">
                  HAIR DESIGN COLLECTION
                </span>

                <h2>Hair Portfolio</h2>

                <p>
                  이해린 디자이너 헤어스타일 컬렉션
                </p>
              </div>

              <div className="hiu-portfolio-grid">
                {portfolio.map((item, index) => (
                  <article
                    className="hiu-portfolio-item"
                    key={item.id}
                  >
                    <div className="hiu-portfolio-image">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={750}
                        sizes="(max-width: 950px) 50vw, 25vw"
                        priority={index === 0}
                      />

                      <span className="hiu-portfolio-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="hiu-portfolio-english">
                      {item.english}
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>

                    <a
                      className="hiu-portfolio-link"
                      href={NAVER_BOOKING}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      네이버 예약 문의 ↗
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 네이버 고객 평가 자동 슬라이드 */}
          <section
            id="reviews"
            className="hiu-review-section"
          >
            <div className="hiu-container">
              <div className="hiu-heading">
                <span className="hiu-eyebrow">
                  NAVER BOOKING FEEDBACK
                </span>

                <h2>Real Customer Reviews</h2>

                <p>
                  네이버 예약 고객 평가와
                  <br />
                  다양한 헤어스타일을 만나보세요.
                </p>
              </div>

              <div className="hiu-review-summary">
                <div>
                  <strong>293</strong>
                  <span>예약자 리뷰</span>
                </div>

                <div className="hiu-review-divider" />

                <div>
                  <strong>263</strong>
                  <span>좋은 점 평가 참여</span>
                </div>
              </div>
            </div>

            <div className="hiu-review-window">
              <div className="hiu-review-track">
                {[0, 1].map((copy) => (
                  <div
                    className="hiu-review-set"
                    key={copy}
                    aria-hidden={copy === 1}
                  >
                    {reviewCards.map((review) => (
                      <a
                        key={`${copy}-${review.id}`}
                        href={NAVER_REVIEWS}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hiu-review-card"
                        tabIndex={copy === 1 ? -1 : 0}
                      >
                        <div>
                          <small>{review.category}</small>
                          <h3>{review.title}</h3>
                        </div>

                        <div>
                          <strong>{review.count}</strong>
                          <p>{review.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="hiu-actions">
              <a
                href={NAVER_REVIEWS}
                target="_blank"
                rel="noopener noreferrer"
                className="hiu-button hiu-button-outline"
              >
                네이버 고객 리뷰 보기 ↗
              </a>

              <NaverBookingButton>
                네이버 예약하기 ↗
              </NaverBookingButton>
            </div>

            <p className="hiu-review-note">
              고객 평가 수치는 2026년 10월 10일
              확인 기준이며 자동으로 갱신되지 않습니다.
              <br />
              첫 5개 카드는 고객 평가 항목,
              나머지 5개는 헤어스타일 안내입니다.
              개별 후기 원문은 네이버에서 확인해 주세요.
            </p>
          </section>

          {/* 예약 배너 */}
          <section
            id="booking"
            className="hiu-booking-banner"
          >
            <span
              className="hiu-eyebrow"
              style={{ color: "#dfe8f6" }}
            >
              YOUR BEAUTY, YOUR STYLE
            </span>

            <h2>
              당신만의 스타일을 만나보세요.
            </h2>

            <p>
              하이유헤어 청당점 이해린 디자이너
              <br />
              원하는 헤어스타일을 상담하고 예약해 보세요.
            </p>

            <div className="hiu-actions">
              <NaverBookingButton>
                네이버 바로 예약하기 ↗
              </NaverBookingButton>

              <Link
                href="/reservation"
                className="hiu-button hiu-button-outline"
              >
                문자 예약 신청
              </Link>
            </div>
          </section>

          {/* 매장 안내 */}
          <section
            id="location"
            className="hiu-section hiu-section-cream"
          >
            <div className="hiu-container">
              <div className="hiu-heading">
                <span className="hiu-eyebrow">
                  VISIT HI U HAIR
                </span>
                <h2>Location & Contact</h2>
              </div>

              <div className="hiu-location-grid">
                <div className="hiu-location-card">
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
                    <dd>
                      네이버 예약 · 전화 · 문자
                    </dd>
                  </dl>

                  <div
                    className="hiu-actions"
                    style={{ justifyContent: "flex-start" }}
                  >
                    <a
                      href={`tel:${PHONE}`}
                      className="hiu-button hiu-button-primary"
                    >
                      전화하기
                    </a>

                    <a
                      href={`sms:${PHONE}`}
                      className="hiu-button hiu-button-outline"
                    >
                      문자하기
                    </a>
                  </div>
                </div>

                <div className="hiu-map-card">
                  <div>
                    <span className="hiu-eyebrow">
                      FIND OUR SALON
                    </span>

                    <h3>HI U HAIR</h3>

                    <p>
                      천안 청당동 하이유헤어 청당점
                      <br />
                      {ADDRESS}
                    </p>

                    <a
                      href={NAVER_MAP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hiu-button hiu-button-primary"
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
        <footer className="hiu-footer">
          <div className="hiu-container hiu-footer-inner">
            <div
              className="hiu-brand"
              style={{ color: "#fff" }}
            >
              HI U HAIR
              <span>CHEONGDANG</span>
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

        {/* 모바일 하단 고정 버튼 */}
        <div className="hiu-bottom-bar">
          <a href={`tel:${PHONE}`}>
            전화
          </a>

          <a href={`sms:${PHONE}`}>
            문자
          </a>

          <a
            href={NAVER_BOOKING}
            target="_blank"
            rel="noopener noreferrer"
          >
            네이버 예약
          </a>
        </div>
      </div>
    </>
  );
}
