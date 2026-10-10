
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const BOOKING =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&theme=place";

const menu = [
  { name: "홈", en: "HOME", href: "/" },
  {
    name: "디자이너 소개",
    en: "OUR DESIGNER",
    href: "/designer",
  },
  {
    name: "서비스별 페이지 안내",
    en: "HAIR SERVICES",
    href: "/hair",
  },
  {
    name: "고객 리뷰",
    en: "CLIENT REVIEWS",
    href: "/reviews",
  },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <style>{`
        .hiu-global-header,
        .hiu-global-header *,
        .hiu-menu-panel,
        .hiu-menu-panel *,
        .hiu-menu-backdrop {
          box-sizing:border-box;
        }

        .hiu-global-header {
          --hiu-blue:#193b71;
          position:sticky;
          top:0;
          z-index:200;
          background:rgba(255,255,255,.97);
          backdrop-filter:blur(16px);
          border-bottom:1px solid #e9e4dd;
        }

        .hiu-global-inner {
          width:min(1200px,calc(100% - 40px));
          min-height:76px;
          margin:auto;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:15px;
        }

        .hiu-global-logo {
          display:flex;
          flex-direction:column;
          color:#193b71;
          font:28px Georgia,serif;
          letter-spacing:2px;
          line-height:1.1;
          text-decoration:none;
          white-space:nowrap;
        }

        .hiu-global-logo small {
          margin-top:7px;
          font:700 8px Arial,sans-serif;
          letter-spacing:4px;
        }

        .hiu-global-right {
          display:flex;
          align-items:center;
          gap:14px;
        }

        .hiu-global-book {
          background:#193b71;
          color:white;
          text-decoration:none;
          padding:14px 19px;
          font-size:12px;
          font-weight:700;
        }

        .hiu-menu-toggle {
          width:49px;
          height:49px;
          display:grid;
          place-items:center;
          border:0;
          background:transparent;
          color:#193b71;
          cursor:pointer;
        }

        .hiu-menu-toggle svg {
          width:28px;
          height:28px;
          stroke:currentColor;
          fill:none;
          stroke-width:1.8;
          stroke-linecap:round;
        }

        .hiu-menu-backdrop {
          position:fixed;
          inset:0;
          z-index:210;
          background:rgba(13,25,43,.5);
          opacity:0;
          visibility:hidden;
          transition:opacity .3s,visibility .3s;
        }

        .hiu-menu-backdrop.open {
          opacity:1;
          visibility:visible;
        }

        .hiu-menu-panel {
          position:fixed;
          top:0;
          right:0;
          bottom:0;
          z-index:220;
          width:min(400px,88vw);
          height:100dvh;
          background:#f7f5f1;
          transform:translateX(105%);
          transition:transform .35s ease;
          overflow-y:auto;
          box-shadow:-10px 0 35px rgba(0,0,0,.08);
          padding:29px 27px;
          display:flex;
          flex-direction:column;
        }

        .hiu-menu-panel.open {
          transform:translateX(0);
        }

        .hiu-menu-top {
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:15px;
          padding-bottom:32px;
          border-bottom:1px solid #ddd7ce;
        }

        .hiu-menu-brand {
          font:25px Georgia,serif;
          letter-spacing:2px;
          color:#193b71;
        }

        .hiu-close {
          border:0;
          background:transparent;
          color:#193b71;
          font-size:31px;
          cursor:pointer;
          width:44px;
          height:44px;
        }

        .hiu-menu-caption {
          margin:35px 0 12px;
          color:#193b71;
          font-size:10px;
          font-weight:700;
          letter-spacing:2px;
        }

        .hiu-menu-list {
          display:flex;
          flex-direction:column;
        }

        .hiu-menu-link {
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:15px;
          padding:19px 0;
          text-decoration:none;
          border-bottom:1px solid #e1dcd5;
          color:#252b35;
        }

        .hiu-menu-link strong {
          display:block;
          font-size:18px;
          font-weight:600;
        }

        .hiu-menu-link small {
          display:block;
          margin-top:7px;
          color:#888b92;
          letter-spacing:1px;
          font-size:9px;
        }

        .hiu-menu-arrow {
          color:#193b71;
          font-size:22px;
        }

        .hiu-menu-bottom {
          margin-top:auto;
          padding-top:35px;
        }

        .hiu-menu-reserve {
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:18px 20px;
          background:#193b71;
          color:white;
          text-decoration:none;
          font-size:13px;
          font-weight:700;
        }

        .hiu-menu-address {
          color:#777d85;
          font-size:11px;
          line-height:2;
          margin-top:22px;
        }

        @media(max-width:600px) {
          .hiu-global-inner {
            min-height:68px;
            width:calc(100% - 36px);
          }

          .hiu-global-logo {
            font-size:23px;
          }

          .hiu-global-book {
            font-size:11px;
            padding:12px;
          }

          .hiu-global-right {
            gap:5px;
          }

          .hiu-menu-toggle {
            width:45px;
            height:45px;
          }
        }

        @media(prefers-reduced-motion:reduce) {
          .hiu-menu-backdrop,
          .hiu-menu-panel {
            transition:none;
          }
        }
      `}</style>

      <header className="hiu-global-header">
        <div className="hiu-global-inner">
          <Link href="/" className="hiu-global-logo">
            HI U HAIR
            <small>CHEONGDANG</small>
          </Link>

          <div className="hiu-global-right">
            <a
              href={BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="hiu-global-book"
            >
              네이버 예약 ↗
            </a>

            <button
              type="button"
              className="hiu-menu-toggle"
              aria-label="전체 메뉴 열기"
              aria-expanded={open}
              aria-controls="hiu-side-menu"
              onClick={() => setOpen(true)}
            >
              <svg viewBox="0 0 24 24">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={
          "hiu-menu-backdrop" + (open ? " open" : "")
        }
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      <aside
        id="hiu-side-menu"
        className={
          "hiu-menu-panel" + (open ? " open" : "")
        }
        aria-label="전체 메뉴"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="hiu-menu-top">
          <span className="hiu-menu-brand">
            HI U HAIR
          </span>

          <button
            type="button"
            className="hiu-close"
            onClick={() => setOpen(false)}
            aria-label="메뉴 닫기"
          >
            ×
          </button>
        </div>

        <div className="hiu-menu-caption">
          EXPLORE HI U HAIR
        </div>

        <nav className="hiu-menu-list">
          {menu.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="hiu-menu-link"
              onClick={() => setOpen(false)}
            >
              <span>
                <strong>{item.name}</strong>
                <small>{item.en}</small>
              </span>

              <span
                className="hiu-menu-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          ))}
        </nav>

        <div className="hiu-menu-bottom">
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="hiu-menu-reserve"
            onClick={() => setOpen(false)}
          >
            이해린 디자이너 네이버 예약
            <span>↗</span>
          </a>

          <div className="hiu-menu-address">
            HI U HAIR CHEONGDANG
            <br />
            충남 천안시 동남구 청수4로 16,
            2층 201호
            <br />
            010-2327-7653
          </div>
        </div>
      </aside>
    </>
  );
}
