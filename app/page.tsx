
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";

const PHONE = "01023277653";

const BOOKING =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&theme=place";

const INSTAGRAM =
  "https://www.instagram.com/hiu_haerin/";

const slides = [
  {
    name: "빌드펌",
    english: "BUILD PERM",
    image: "/IMG_1424.jpeg",
    href: "/hair/build-perm",
  },
  {
    name: "레이어드컷",
    english: "LAYERED CUT",
    image: "/IMG_1427.jpeg",
    href: "/hair/layered-cut",
  },
  {
    name: "물결펌",
    english: "WAVE PERM",
    image: "/IMG_1423.jpeg",
    href: "/hair/wave-perm",
  },
  {
    name: "여성 염색",
    english: "HAIR COLOR",
    image: "/IMG_1433.jpeg",
    href: "/hair/color",
  },
  {
    name: "웨딩염색",
    english: "WEDDING COLOR",
    image: "/IMG_1475.jpeg",
    href: "/hair/wedding-color",
  },
];

const menus = [
  {
    number: "01",
    title: "디자이너 소개",
    english: "MEET THE DESIGNER",
    text: "이해린 디자이너의 프로필 · 학력 · 자격 · 수상 경력",
    href: "/designer",
  },
  {
    number: "02",
    title: "서비스별 페이지 안내",
    english: "HAIR SERVICES",
    text: "레이어드컷 · 빌드펌 · 물결펌 · 여성 염색 · 웨딩염색",
    href: "/hair",
  },
  {
    number: "03",
    title: "고객 리뷰",
    english: "CLIENT FEEDBACK",
    text: "네이버 고객 선택 평가 및 실제 방문 리뷰 확인",
    href: "/reviews",
  },
];

export default function HomePage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) return;

    const timer = window.setInterval(() => {
      setActive((previous) =>
        (previous + 1) % slides.length
      );
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hiu-home">
      <style>{`
        .hiu-home {
          --navy:#193b71;
          --cream:#f7f5f1;
          --deep:#152840;
          --line:#e7e2dc;
          --muted:#737b86;
          color:#292d34;
          background:white;
          min-height:100vh;
          font-family:-apple-system,
            BlinkMacSystemFont,
            "Apple SD Gothic Neo",
            "Noto Sans KR",sans-serif;
          word-break:keep-all;
          overflow-x:clip;
        }

        .hiu-home * {
          box-sizing:border-box;
        }

        .hiu-home a {
          text-decoration:none;
          color:inherit;
        }

        .hh-wrap {
          width:min(1200px,calc(100% - 44px));
          margin:auto;
        }

        .hh-hero {
          background:var(--cream);
        }

        .hh-hero-grid {
          display:grid;
          grid-template-columns:1fr .97fr;
          min-height:590px;
        }

        .hh-copy {
          padding:65px 55px 65px 0;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:flex-start;
        }

        .hh-eyebrow {
          color:var(--navy);
          font-size:10px;
          font-weight:700;
          letter-spacing:2.3px;
        }

        .hh-brand {
          font:400 clamp(54px,7vw,91px) Georgia,serif;
          color:var(--navy);
          letter-spacing:-3px;
          white-space:nowrap;
          margin:23px 0 7px;
          line-height:1.1;
        }

        .hh-location {
          color:var(--navy);
          font-size:10px;
          font-weight:700;
          letter-spacing:4px;
        }

        .hh-line {
          width:52px;
          height:1px;
          background:#b9a183;
          margin:35px 0;
        }

        .hh-copy h2 {
          font-size:clamp(32px,3.8vw,49px);
          font-weight:450;
          letter-spacing:-1.4px;
          line-height:1.45;
          margin:0;
        }

        .hh-copy h2 strong {
          color:var(--navy);
          font-weight:600;
        }

        .hh-copy p {
          color:var(--muted);
          font-size:14px;
          line-height:2.1;
          margin:21px 0 0;
        }

        .hh-actions {
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top:27px;
        }

        .hh-button {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:14px 21px;
          min-height:50px;
          border:1px solid var(--navy);
          color:var(--navy)!important;
          font-size:12px;
          font-weight:700;
          transition:transform .2s;
        }

        .hh-button:hover {
          transform:translateY(-2px);
        }

        .hh-button.primary {
          color:white!important;
          background:var(--navy);
        }

        .hh-instagram {
          font-size:12px;
          color:var(--navy)!important;
          font-weight:700;
          margin-top:23px;
        }

        /* AUTOMATIC SLIDER */

        .hh-slider {
          position:relative;
          min-height:590px;
          background:#e6e0d7;
          overflow:hidden;
          isolation:isolate;
        }

        .hh-slide {
          position:absolute;
          inset:0;
          display:block;
          opacity:0;
          pointer-events:none;
          visibility:hidden;
          transition:opacity 850ms ease;
        }

        .hh-slide.active {
          opacity:1;
          pointer-events:auto;
          visibility:visible;
        }

        .hh-slide img {
          object-fit:cover;
          object-position:center 27%;
        }

        .hh-slide:after {
          content:"";
          position:absolute;
          inset:50% 0 0;
          background:linear-gradient(
            transparent,
            rgba(16,27,45,.47)
          );
          pointer-events:none;
        }

        .hh-slide-caption {
          position:absolute;
          z-index:2;
          bottom:28px;
          left:30px;
          right:30px;
          color:white;
          display:flex;
          justify-content:space-between;
          align-items:flex-end;
          gap:20px;
        }

        .hh-slide-caption strong {
          display:block;
          font:25px Georgia,serif;
        }

        .hh-slide-caption small {
          display:block;
          margin-top:9px;
          font-size:10px;
          letter-spacing:1.5px;
        }

        .hh-slide-caption em {
          font-size:10px;
          font-style:normal;
          letter-spacing:2px;
        }

        .hh-slider-counter {
          position:absolute;
          right:21px;
          top:21px;
          z-index:10;
          color:white;
          padding:10px 14px;
          background:rgba(18,34,57,.52);
          font-size:11px;
          letter-spacing:1px;
          pointer-events:none;
        }

        .hh-progress {
          position:absolute;
          z-index:10;
          bottom:0;
          left:0;
          right:0;
          height:3px;
          background:rgba(255,255,255,.35);
          pointer-events:none;
        }

        .hh-progress:after {
          content:"";
          display:block;
          width:100%;
          height:100%;
          background:white;
          transform-origin:left;
          animation:hh-fill 4s linear infinite;
        }

        @keyframes hh-fill {
          from{transform:scaleX(0)}
          to{transform:scaleX(1)}
        }

        /* MENU OVERVIEW */

        .hh-menu-section {
          padding:57px 0 70px;
          background:white;
        }

        .hh-menu-heading {
          text-align:center;
          margin-bottom:29px;
        }

        .hh-menu-heading small {
          font-size:10px;
          color:var(--navy);
          font-weight:700;
          letter-spacing:2.5px;
        }

        .hh-menu-heading h2 {
          font:36px Georgia,serif;
          margin:13px 0 11px;
        }

        .hh-menu-heading p {
          color:var(--muted);
          font-size:12px;
          line-height:1.9;
        }

        .hh-menu-grid {
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:14px;
        }

        .hh-menu-card {
          border:1px solid var(--line);
          padding:25px;
          background:var(--cream);
          min-height:181px;
          display:flex;
          flex-direction:column;
          transition:transform .25s;
        }

        .hh-menu-card:hover {
          transform:translateY(-3px);
        }

        .hh-menu-top {
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:10px;
          color:var(--navy);
        }

        .hh-menu-top span:first-child {
          font:22px Georgia,serif;
        }

        .hh-menu-top span:last-child {
          font-size:9px;
          font-weight:700;
          letter-spacing:1px;
        }

        .hh-menu-card h3 {
          font-size:20px;
          margin:22px 0 9px;
        }

        .hh-menu-card p {
          font-size:12px;
          line-height:1.8;
          color:var(--muted);
          margin:0;
        }

        .hh-menu-card b {
          align-self:flex-end;
          margin-top:auto;
          padding-top:10px;
          font-size:20px;
          color:var(--navy);
        }

        /* FOOTER */

        .hh-footer {
          background:var(--deep);
          padding:33px 0 110px;
          color:white;
        }

        .hh-footer-inner {
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
        }

        .hh-footer strong {
          font:25px Georgia,serif;
          letter-spacing:2px;
        }

        .hh-footer p {
          color:#ccd5e1;
          font-size:11px;
          line-height:2;
        }

        .hh-mobile-bar {
          display:none;
        }

        @media(max-width:850px) {
          .hh-copy {
            padding-right:25px;
          }
        }

        @media(max-width:600px) {
          .hh-wrap {
            width:calc(100% - 36px);
          }

          .hh-hero-grid {
            display:flex;
            flex-direction:column;
          }

          .hh-copy {
            padding:42px 0 35px;
            text-align:center;
            align-items:center;
          }

          .hh-brand {
            font-size:clamp(52px,13vw,78px);
            margin:18px 0 7px;
          }

          .hh-location {
            font-size:9px;
          }

          .hh-line {
            margin:24px 0;
          }

          .hh-copy h2 {
            font-size:31px;
          }

          .hh-copy p {
            font-size:12px;
            margin-top:18px;
          }

          .hh-actions {
            width:100%;
            margin-top:24px;
          }

          .hh-actions .hh-button {
            flex:1;
            font-size:11px;
            padding:12px 9px;
          }

          .hh-instagram {
            font-size:11px;
          }

          .hh-slider {
            min-height:0;
            aspect-ratio:4/3.5;
            margin:0 -18px;
          }

          .hh-slide-caption {
            bottom:22px;
            left:22px;
            right:22px;
          }

          .hh-slide-caption strong {
            font-size:20px;
          }

          .hh-slide-caption small,
          .hh-slide-caption em {
            font-size:9px;
          }

          .hh-menu-section {
            padding:43px 0 52px;
          }

          .hh-menu-heading h2 {
            font-size:31px;
          }

          .hh-menu-grid {
            grid-template-columns:1fr;
            gap:10px;
          }

          .hh-menu-card {
            min-height:0;
            padding:20px;
          }

          .hh-menu-card h3 {
            margin:14px 0 8px;
            font-size:18px;
          }

          .hh-menu-card b {
            padding-top:5px;
          }

          .hh-footer {
            padding-bottom:calc(
              110px + env(safe-area-inset-bottom)
            );
          }

          .hh-footer-inner {
            flex-direction:column;
            align-items:flex-start;
          }

          .hh-mobile-bar {
            display:grid;
            position:fixed;
            bottom:0;
            left:0;
            right:0;
            z-index:100;
            grid-template-columns:1fr 1fr 1.5fr;
            gap:8px;
            padding:10px 12px
              calc(10px + env(safe-area-inset-bottom));
            background:white;
            border-top:1px solid var(--line);
          }

          .hh-mobile-bar a {
            min-height:47px;
            display:flex;
            align-items:center;
            justify-content:center;
            background:var(--cream);
            color:var(--navy);
            font-size:12px;
            font-weight:700;
          }

          .hh-mobile-bar a:last-child {
            background:var(--navy);
            color:white;
          }
        }

        @media(prefers-reduced-motion:reduce) {
          .hh-slide,
          .hh-button,
          .hh-menu-card {
            transition:none;
          }

          .hh-progress:after {
            animation:none;
          }
        }
      `}</style>

      <SiteHeader />

      <main>
        <section className="hh-hero">
          <div className="hh-wrap hh-hero-grid">
            <div className="hh-copy">
              <span className="hh-eyebrow">
                PERSONAL HAIR ATELIER · CHEONGDANG
              </span>

              <h1 className="hh-brand">
                HI U HAIR
              </h1>

              <div className="hh-location">
                CHEONGDANG
              </div>

              <div className="hh-line" />

              <h2>
                당신의 분위기를
                <br />
                <strong>디자인하다.</strong>
              </h2>

              <p>
                섬세한 손길과 감각적인 스타일
                <br />
                이해린 디자이너의 여성 헤어 디자인
              </p>

              <div className="hh-actions">
                <a
                  href={BOOKING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hh-button primary"
                >
                  네이버 예약하기 ↗
                </a>

                <Link
                  href="/hair"
                  className="hh-button"
                >
                  헤어 시술 알아보기 →
                </Link>
              </div>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="hh-instagram"
              >
                Instagram @hiu_haerin ↗
              </a>
            </div>

            <div
              className="hh-slider"
              aria-label="헤어스타일 자동 슬라이드"
            >
              {slides.map((slide, index) => (
                <Link
                  key={slide.href}
                  href={slide.href}
                  className={
                    "hh-slide" +
                    (active === index ? " active" : "")
                  }
                  aria-label={`${slide.name} 자세히 보기`}
                  aria-hidden={active !== index}
                  tabIndex={active === index ? 0 : -1}
                >
                  <Image
                    src={slide.image}
                    alt={`${slide.name} 헤어스타일`}
                    fill
                    priority={index === 0}
                    sizes="(max-width:600px) 100vw, 50vw"
                  />

                  <div className="hh-slide-caption">
                    <div>
                      <strong>Hair by Haerin</strong>
                      <small>
                        {slide.english} · {slide.name}
                      </small>
                    </div>

                    <em>HI U HAIR ↗</em>
                  </div>
                </Link>
              ))}

              <div className="hh-slider-counter">
                {String(active + 1).padStart(2, "0")}
                {" / "}
                05
              </div>

              <div className="hh-progress" />
            </div>
          </div>
        </section>

        <section className="hh-menu-section">
          <div className="hh-wrap">
            <div className="hh-menu-heading">
              <small>EXPLORE HI U HAIR</small>
              <h2>Discover Our Story</h2>
              <p>
                오른쪽 상단 메뉴에서도
                언제든 원하는 페이지로 이동할 수 있습니다.
              </p>
            </div>

            <div className="hh-menu-grid">
              {menus.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className="hh-menu-card"
                >
                  <div className="hh-menu-top">
                    <span>{item.number}</span>
                    <span>{item.english}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <b>→</b>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="hh-footer">
        <div className="hh-wrap hh-footer-inner">
          <strong>HI U HAIR</strong>
          <p>
            하이유헤어 청당점 · 이해린 디자이너
            <br />
            충남 천안시 동남구 청수4로 16,
            2층 201호
            <br />
            010-2327-7653
          </p>
        </div>
      </footer>

      <nav
        className="hh-mobile-bar"
        aria-label="빠른 예약"
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
