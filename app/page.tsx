
"use client";

import {
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";

/* =========================================
   HI U HAIR · EDITORIAL SALON HOME
   파일: app/page.tsx
========================================= */

const PHONE = "01023277653";
const PHONE_VIEW = "010-2327-7653";

const BOOKING =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&theme=place";

const INSTAGRAM =
  "https://www.instagram.com/hiu_haerin/";

const ADDRESS =
  "충남 천안시 동남구 청수4로 16, 2층 201호";

const MAP =
  "https://map.naver.com/p/search/" +
  encodeURIComponent("하이유헤어 청당점");

/* 기존 자동 슬라이드 사진 및 순서 유지 */

const slides = [
  {
    name: "빌드펌",
    english: "BUILD PERM",
    image: "/IMG_1424.jpeg",
    href: "/hair/build-perm",
    desc: "자연스럽게 완성하는 볼륨과 움직임",
  },
  {
    name: "레이어드컷",
    english: "LAYERED CUT",
    image: "/IMG_1427.jpeg",
    href: "/hair/layered-cut",
    desc: "가볍고 유연하게 흐르는 레이어",
  },
  {
    name: "물결펌",
    english: "WAVE PERM",
    image: "/IMG_1423.jpeg",
    href: "/hair/wave-perm",
    desc: "부드러운 웨이브로 만드는 분위기",
  },
  {
    name: "여성 염색",
    english: "HAIR COLOR",
    image: "/IMG_1433.jpeg",
    href: "/hair/color",
    desc: "컬러로 발견하는 새로운 이미지",
  },
  {
    name: "웨딩염색",
    english: "WEDDING COLOR",
    image: "/IMG_1475.jpeg",
    href: "/hair/wedding-color",
    desc: "특별한 순간을 위한 섬세한 컬러",
  },
];

/* 메인에 노출할 대표 시술 사진 */

const signatures = [
  {
    no: "01",
    en: "THE ART OF LAYERS",
    title: "Layered Cut",
    korean: "레이어드컷",
    desc: "얼굴형과 모발의 흐름을 고려한 가벼운 실루엣.",
    image: "/IMG_1427.jpeg",
    href: "/hair/layered-cut",
  },
  {
    no: "02",
    en: "SOFT & NATURAL",
    title: "Build Perm",
    korean: "빌드펌",
    desc: "자연스러운 컬과 볼륨으로 완성하는 분위기.",
    image: "/IMG_1424.jpeg",
    href: "/hair/build-perm",
  },
  {
    no: "03",
    en: "YOUR OWN COLOR",
    title: "Hair Color",
    korean: "여성 염색",
    desc: "피부톤과 취향에 맞춰 상담하는 컬러 디자인.",
    image: "/IMG_1433.jpeg",
    href: "/hair/color",
  },
];

function Arrow({
  diagonal = false,
}: {
  diagonal?: boolean;
}) {
  return (
    <span aria-hidden="true">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

export default function HomePage() {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] =
    useState(false);

  /* 기존 4초 자동 슬라이드 기능 유지 */

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => {
      setReducedMotion(media.matches);
    };

    update();
    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const timer = window.setInterval(() => {
      setActive((previous) =>
        (previous + 1) % slides.length
      );
    }, 4000);

    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  const current = slides[active];

  return (
    <div className="hu-page">
      <style>{`
        .hu-page {
          --navy:#193b71;
          --deep:#162338;
          --ink:#252a30;
          --muted:#747880;
          --ivory:#f8f7f4;
          --beige:#efebe4;
          --gold:#baa283;
          --line:#e5e2dc;
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
          -webkit-font-smoothing:antialiased;
          overflow-x:clip;
        }

        .hu-page *,
        .hu-page *:before,
        .hu-page *:after {
          box-sizing:border-box;
        }

        .hu-page a {
          color:inherit;
          text-decoration:none;
        }

        .hu-container {
          width:min(
            1180px,
            calc(100% - 64px)
          );
          margin:0 auto;
        }

        .hu-eyebrow {
          color:var(--navy);
          font-size:10px;
          letter-spacing:2.8px;
          font-weight:700;
          line-height:1.8;
        }

        .hu-btn {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:20px;
          min-height:52px;
          padding:15px 23px;
          font-size:12px;
          font-weight:700;
          border:1px solid var(--navy);
          transition:
            transform .25s,
            background .25s;
        }

        .hu-btn:hover {
          transform:translateY(-2px);
        }

        .hu-btn-dark {
          background:var(--navy);
          color:white!important;
        }

        .hu-btn-line {
          color:var(--navy)!important;
          background:transparent;
        }

        .hu-btn-light {
          background:white;
          border-color:white;
          color:var(--navy)!important;
        }

        /* =====================================
           01. HERO
        ===================================== */

        .hu-hero {
          height:min(800px,calc(100svh - 76px));
          min-height:570px;
          position:relative;
          background:#34312f;
          isolation:isolate;
          overflow:hidden;
        }

        .hu-slides {
          position:absolute;
          inset:0;
        }

        .hu-slide {
          position:absolute;
          inset:0;
          opacity:0;
          visibility:hidden;
          transition:
            opacity 950ms ease,
            visibility 950ms ease;
        }

        .hu-slide.is-active {
          opacity:1;
          visibility:visible;
        }

        .hu-slide img {
          object-fit:cover;
          object-position:center 27%;
        }

        .hu-overlay {
          position:absolute;
          inset:0;
          z-index:1;
          background:
            linear-gradient(
              90deg,
              rgba(15,25,37,.64),
              rgba(15,25,37,.22) 67%,
              rgba(15,25,37,.13)
            ),
            linear-gradient(
              180deg,
              rgba(10,19,29,.08) 0%,
              rgba(10,19,29,.05) 40%,
              rgba(10,19,29,.62) 100%
            );
          pointer-events:none;
        }

        .hu-hero-inner {
          position:relative;
          z-index:2;
          width:min(1180px,calc(100% - 64px));
          height:100%;
          margin:auto;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          pointer-events:none;
        }

        .hu-hero-top {
          padding-top:42px;
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          gap:25px;
        }

        .hu-hero-top span {
          font-size:10px;
          font-weight:700;
          color:rgba(255,255,255,.9);
          letter-spacing:2.5px;
          line-height:1.8;
        }

        .hu-hero-number {
          font:16px Georgia,serif!important;
          letter-spacing:2px!important;
        }

        .hu-hero-content {
          max-width:800px;
          padding-bottom:80px;
          color:white;
        }

        .hu-hero-pretitle {
          display:flex;
          align-items:center;
          gap:15px;
          font-size:11px;
          font-weight:700;
          letter-spacing:3px;
          margin-bottom:23px;
        }

        .hu-hero-pretitle:before {
          content:"";
          width:38px;
          height:1px;
          background:#dbc4a3;
        }

        .hu-hero h1 {
          font-size:clamp(48px,6.3vw,85px);
          line-height:1.3;
          font-weight:400;
          letter-spacing:-3.5px;
          margin:0;
        }

        .hu-hero h1 strong {
          font-weight:600;
        }

        .hu-hero-desc {
          font-size:15px;
          line-height:2;
          color:rgba(255,255,255,.9);
          margin:23px 0 0;
        }

        .hu-hero-designer {
          margin-top:25px;
          font-size:10px;
          font-weight:700;
          letter-spacing:2.5px;
          color:#e5d5bd;
        }

        .hu-hero-actions {
          display:flex;
          flex-wrap:wrap;
          gap:12px;
          margin-top:35px;
          pointer-events:auto;
        }

        .hu-hero-actions .hu-btn-line {
          border-color:rgba(255,255,255,.75);
          color:white!important;
          background:rgba(255,255,255,.08);
          backdrop-filter:blur(8px);
        }

        /* HERO STATUS STRIP */

        .hu-hero-status {
          background:var(--deep);
          color:white;
          position:relative;
          padding:20px 0;
        }

        .hu-status-inner {
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
          min-height:40px;
        }

        .hu-status-title {
          display:flex;
          align-items:center;
          gap:20px;
          min-width:0;
        }

        .hu-status-title b {
          font:27px Georgia,serif;
          color:#d0b998;
        }

        .hu-status-title strong {
          display:block;
          font-size:13px;
          letter-spacing:1px;
        }

        .hu-status-title small {
          display:block;
          font-size:11px;
          color:#c1ccd9;
          margin-top:6px;
        }

        .hu-status-link {
          font-size:11px;
          font-weight:700;
          white-space:nowrap;
          display:inline-flex;
          align-items:center;
          gap:15px;
        }

        .hu-progress {
          position:absolute;
          bottom:0;
          left:0;
          right:0;
          height:2px;
          background:rgba(255,255,255,.18);
        }

        .hu-progress:after {
          content:"";
          display:block;
          background:#d5bc9c;
          width:100%;
          height:100%;
          transform-origin:left;
          animation:hu-progress 4s linear infinite;
        }

        @keyframes hu-progress {
          from {transform:scaleX(0)}
          to {transform:scaleX(1)}
        }

        /* =====================================
           02. BRAND MESSAGE
        ===================================== */

        .hu-intro {
          padding:92px 0 85px;
          background:var(--ivory);
        }

        .hu-intro-layout {
          display:grid;
          grid-template-columns:.8fr 1.2fr;
          align-items:start;
          gap:8%;
        }

        .hu-intro h2 {
          font:400 clamp(32px,4vw,49px) Georgia,serif;
          line-height:1.35;
          letter-spacing:-1px;
          margin:0 0 25px;
        }

        .hu-intro h2 em {
          color:var(--navy);
          font-style:italic;
        }

        .hu-intro-copy {
          font-size:14px;
          line-height:2.3;
          color:#686d76;
          margin:0;
        }

        .hu-intro-values {
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top:28px;
        }

        .hu-intro-values span {
          font-size:11px;
          padding:10px 14px;
          background:white;
          border:1px solid var(--line);
          color:var(--navy);
          font-weight:600;
        }

        /* =====================================
           03. SIGNATURE WORK
        ===================================== */

        .hu-work {
          padding:95px 0 100px;
        }

        .hu-section-top {
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap:25px;
          margin-bottom:40px;
        }

        .hu-section-top h2 {
          font:400 clamp(34px,4.8vw,59px) Georgia,serif;
          margin:13px 0 0;
          letter-spacing:-1.2px;
        }

        .hu-section-top p {
          font-size:13px;
          color:var(--muted);
          line-height:2;
          max-width:290px;
          margin:0;
        }

        .hu-work-grid {
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:20px;
        }

        .hu-work-card {
          display:block;
          min-width:0;
        }

        .hu-work-photo {
          position:relative;
          aspect-ratio:4/5;
          background:#eee9e2;
          overflow:hidden;
        }

        .hu-work-photo img {
          object-fit:cover;
          transition:transform .6s ease;
        }

        .hu-work-card:hover .hu-work-photo img {
          transform:scale(1.045);
        }

        .hu-photo-number {
          position:absolute;
          left:17px;
          top:17px;
          display:grid;
          place-items:center;
          width:38px;
          height:38px;
          background:white;
          color:var(--navy);
          font:16px Georgia,serif;
        }

        .hu-work-info {
          padding:20px 1px 0;
        }

        .hu-work-info small {
          font-size:10px;
          font-weight:700;
          color:var(--navy);
          letter-spacing:1.7px;
        }

        .hu-work-info h3 {
          font:27px Georgia,serif;
          margin:13px 0 6px;
        }

        .hu-work-info p {
          color:var(--muted);
          font-size:12px;
          line-height:1.9;
          margin:0 0 14px;
        }

        .hu-work-more {
          display:inline-flex;
          align-items:center;
          gap:13px;
          font-size:11px;
          font-weight:700;
          color:var(--navy);
          border-bottom:1px solid #aeb9c8;
          padding-bottom:7px;
        }

        .hu-work-footer {
          display:flex;
          justify-content:center;
          margin-top:45px;
        }

        /* =====================================
           04. EXPERTISE
        ===================================== */

        .hu-expertise {
          background:var(--deep);
          color:white;
          padding:85px 0;
        }

        .hu-expertise-grid {
          display:grid;
          grid-template-columns:.8fr 1.2fr;
          align-items:center;
          gap:9%;
        }

        .hu-expertise h2 {
          font:400 clamp(33px,4.5vw,56px) Georgia,serif;
          line-height:1.3;
          margin:18px 0 22px;
        }

        .hu-expertise h2 em {
          font-style:italic;
          color:#d6bfa0;
        }

        .hu-expertise p {
          color:#c8d3df;
          font-size:13px;
          line-height:2.1;
        }

        .hu-expertise .hu-btn {
          border-color:rgba(255,255,255,.65);
          color:white!important;
          margin-top:23px;
        }

        .hu-expertise-facts {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:13px;
        }

        .hu-fact {
          border:1px solid rgba(255,255,255,.19);
          padding:26px 22px;
          min-height:160px;
        }

        .hu-fact-num {
          font:22px Georgia,serif;
          color:#d6bfa0;
        }

        .hu-fact h3 {
          font-size:15px;
          font-weight:600;
          line-height:1.6;
          margin:20px 0 8px;
        }

        .hu-fact p {
          font-size:11px;
          line-height:1.8;
          color:#acbacb;
          margin:0;
        }

        /* =====================================
           05. CONSULTATION
        ===================================== */

        .hu-consult {
          background:var(--ivory);
          padding:85px 0;
        }

        .hu-consult-grid {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:70px;
          align-items:center;
        }

        .hu-consult h2 {
          font-size:clamp(30px,4vw,47px);
          font-weight:450;
          letter-spacing:-1.3px;
          line-height:1.5;
          margin:17px 0 22px;
        }

        .hu-consult h2 strong {
          color:var(--navy);
        }

        .hu-consult p {
          font-size:13px;
          line-height:2.2;
          color:#707681;
        }

        .hu-consult-list {
          border-top:1px solid #dcd6ce;
        }

        .hu-consult-row {
          display:flex;
          align-items:flex-start;
          gap:19px;
          padding:21px 0;
          border-bottom:1px solid #dcd6ce;
        }

        .hu-consult-row b {
          font:21px Georgia,serif;
          color:#b8a184;
        }

        .hu-consult-row strong {
          font-size:14px;
          font-weight:600;
        }

        .hu-consult-row span {
          display:block;
          font-size:12px;
          color:var(--muted);
          line-height:1.9;
          margin-top:7px;
        }

        /* =====================================
           06. REVIEW & VISIT
        ===================================== */

        .hu-trust {
          padding:70px 0;
          background:white;
          border-bottom:1px solid var(--line);
        }

        .hu-trust-inner {
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:30px;
        }

        .hu-trust h2 {
          font:400 35px Georgia,serif;
          margin:12px 0;
        }

        .hu-trust p {
          color:var(--muted);
          font-size:13px;
          line-height:1.9;
          margin:0;
        }

        .hu-visit {
          padding:80px 0;
          background:white;
        }

        .hu-visit-grid {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:70px;
          align-items:center;
        }

        .hu-visit h2 {
          font:400 43px Georgia,serif;
          margin:15px 0 20px;
        }

        .hu-visit-address {
          color:#646b74;
          font-size:14px;
          line-height:2.2;
          margin:0 0 22px;
        }

        .hu-visit-links {
          display:flex;
          flex-wrap:wrap;
          gap:11px;
        }

        .hu-visit-feature {
          position:relative;
          background:var(--beige);
          min-height:260px;
          padding:45px;
          display:flex;
          flex-direction:column;
          justify-content:center;
        }

        .hu-visit-feature:before {
          content:"";
          position:absolute;
          inset:16px;
          border:1px solid #d4c8b7;
        }

        .hu-visit-feature span,
        .hu-visit-feature strong,
        .hu-visit-feature p {
          position:relative;
          z-index:1;
        }

        .hu-visit-feature span {
          color:var(--navy);
          font-size:10px;
          font-weight:700;
          letter-spacing:2px;
        }

        .hu-visit-feature strong {
          font:45px Georgia,serif;
          color:var(--navy);
          margin:18px 0;
        }

        .hu-visit-feature p {
          font-size:12px;
          color:#737983;
          line-height:2;
          margin:0;
        }

        /* =====================================
           07. BOOKING / FOOTER
        ===================================== */

        .hu-booking {
          background:var(--navy);
          color:white;
          padding:82px 20px;
          text-align:center;
        }

        .hu-booking h2 {
          font-size:clamp(30px,4.4vw,49px);
          line-height:1.5;
          font-weight:450;
          margin:19px 0;
        }

        .hu-booking p {
          color:#d7e1ee;
          font-size:13px;
          line-height:1.9;
        }

        .hu-booking .hu-btn {
          margin-top:25px;
        }

        .hu-footer {
          background:var(--deep);
          color:#d2d9e2;
          padding:38px 0 110px;
        }

        .hu-footer-inner {
          display:flex;
          justify-content:space-between;
          gap:35px;
          align-items:center;
        }

        .hu-footer-logo {
          color:white;
          font:29px Georgia,serif;
          letter-spacing:2px;
        }

        .hu-footer p {
          text-align:right;
          font-size:11px;
          line-height:2;
          margin:0;
        }

        .hu-mobile-bar {
          display:none;
        }

        /* =====================================
           TABLET
        ===================================== */

        @media(max-width:850px) {
          .hu-container,
          .hu-hero-inner {
            width:calc(100% - 44px);
          }

          .hu-intro-layout,
          .hu-expertise-grid,
          .hu-consult-grid,
          .hu-visit-grid {
            gap:35px;
          }

          .hu-work-grid {
            gap:13px;
          }
        }

        /* =====================================
           MOBILE
        ===================================== */

        @media(max-width:600px) {
          .hu-container,
          .hu-hero-inner {
            width:calc(100% - 38px);
          }

          .hu-hero {
            min-height:550px;
            height:calc(100svh - 68px - 65px);
            max-height:850px;
          }

          .hu-slide img {
            object-position:center 24%;
          }

          .hu-overlay {
            background:linear-gradient(
              180deg,
              rgba(10,19,29,.1) 0%,
              rgba(10,19,29,.08) 31%,
              rgba(10,19,29,.45) 60%,
              rgba(10,19,29,.86) 100%
            );
          }

          .hu-hero-top {
            padding-top:24px;
          }

          .hu-hero-top span {
            font-size:9px;
            letter-spacing:1.7px;
          }

          .hu-hero-content {
            padding-bottom:42px;
          }

          .hu-hero-pretitle {
            font-size:9px;
            letter-spacing:1.8px;
            gap:10px;
            margin-bottom:20px;
          }

          .hu-hero-pretitle:before {
            width:24px;
          }

          .hu-hero h1 {
            font-size:clamp(38px,10vw,53px);
            line-height:1.38;
            letter-spacing:-1.7px;
          }

          .hu-hero-desc {
            font-size:12px;
            line-height:1.9;
            margin-top:19px;
          }

          .hu-hero-designer {
            font-size:9px;
            margin-top:18px;
          }

          .hu-hero-actions {
            margin-top:26px;
            gap:9px;
          }

          .hu-hero-actions .hu-btn {
            font-size:11px;
            padding:12px 13px;
            min-height:46px;
            gap:8px;
          }

          .hu-status-inner {
            gap:12px;
          }

          .hu-status-title {
            gap:12px;
          }

          .hu-status-title b {
            font-size:23px;
          }

          .hu-status-title strong {
            font-size:11px;
          }

          .hu-status-title small {
            font-size:10px;
          }

          .hu-status-link {
            font-size:10px;
            gap:5px;
          }

          .hu-intro {
            padding:65px 0;
          }

          .hu-intro-layout,
          .hu-expertise-grid,
          .hu-consult-grid,
          .hu-visit-grid {
            grid-template-columns:1fr;
            gap:24px;
          }

          .hu-intro h2 {
            font-size:37px;
            margin-bottom:8px;
          }

          .hu-intro-copy {
            font-size:12px;
          }

          .hu-intro-values {
            margin-top:23px;
            gap:8px;
          }

          .hu-intro-values span {
            font-size:10px;
            padding:9px 11px;
          }

          .hu-work {
            padding:69px 0;
          }

          .hu-section-top {
            display:block;
            margin-bottom:29px;
          }

          .hu-section-top h2 {
            font-size:40px;
          }

          .hu-section-top p {
            max-width:none;
            font-size:12px;
            margin-top:13px;
          }

          .hu-work-grid {
            grid-template-columns:
              repeat(2,minmax(0,1fr));
            gap:27px 12px;
          }

          .hu-work-grid .hu-work-card:last-child {
            grid-column:1 / -1;
          }

          .hu-work-grid .hu-work-card:last-child
          .hu-work-photo {
            aspect-ratio:16/10;
          }

          .hu-work-info h3 {
            font-size:23px;
          }

          .hu-work-info p {
            font-size:11px;
          }

          .hu-work-info small {
            font-size:9px;
          }

          .hu-photo-number {
            width:31px;
            height:31px;
            font-size:13px;
            top:11px;
            left:11px;
          }

          .hu-work-footer {
            margin-top:36px;
          }

          .hu-expertise {
            padding:64px 0;
          }

          .hu-expertise h2 {
            font-size:42px;
          }

          .hu-expertise p {
            font-size:12px;
          }

          .hu-expertise-facts {
            gap:9px;
          }

          .hu-fact {
            min-height:145px;
            padding:20px 15px;
          }

          .hu-fact h3 {
            font-size:13px;
          }

          .hu-fact p {
            font-size:10px;
          }

          .hu-consult {
            padding:65px 0;
          }

          .hu-consult h2 {
            font-size:35px;
          }

          .hu-consult p {
            font-size:12px;
          }

          .hu-trust {
            padding:60px 0;
          }

          .hu-trust-inner {
            flex-direction:column;
            align-items:flex-start;
            gap:23px;
          }

          .hu-trust h2 {
            font-size:33px;
          }

          .hu-trust p {
            font-size:12px;
          }

          .hu-visit {
            padding:65px 0;
          }

          .hu-visit h2 {
            font-size:39px;
          }

          .hu-visit-address {
            font-size:12px;
          }

          .hu-visit-feature {
            min-height:230px;
            padding:35px;
          }

          .hu-visit-feature strong {
            font-size:37px;
          }

          .hu-booking {
            padding:68px 20px;
          }

          .hu-booking h2 {
            font-size:31px;
          }

          .hu-footer {
            padding:42px 0
              calc(110px + env(safe-area-inset-bottom));
          }

          .hu-footer-inner {
            flex-direction:column;
            align-items:flex-start;
            gap:20px;
          }

          .hu-footer p {
            text-align:left;
          }

          .hu-mobile-bar {
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
            background:white;
            border-top:1px solid var(--line);
          }

          .hu-mobile-bar a {
            display:flex;
            align-items:center;
            justify-content:center;
            min-height:47px;
            background:#f0ede7;
            color:var(--navy);
            font-size:12px;
            font-weight:700;
          }

          .hu-mobile-bar a:last-child {
            background:var(--navy);
            color:white;
          }
        }

        @media(prefers-reduced-motion:reduce) {
          .hu-slide,
          .hu-work-photo img,
          .hu-btn {
            transition:none;
          }

          .hu-progress:after {
            animation:none;
          }
        }
      `}</style>

      {/* 공통 상단 로고 · 예약 · 삼선 메뉴 */}
      <SiteHeader />

      <main>
        {/* =============================
            HERO / AUTO SLIDESHOW
        ============================= */}

        <section
          className="hu-hero"
          aria-label="하이유헤어 메인 헤어컬렉션"
        >
          <div className="hu-slides">
            {slides.map((slide, index) => (
              <div
                key={slide.href}
                className={
                  "hu-slide" +
                  (active === index ? " is-active" : "")
                }
                aria-hidden={active !== index}
              >
                <Image
                  src={slide.image}
                  alt={`${slide.name} 헤어스타일`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  quality={85}
                />
              </div>
            ))}
          </div>

          <div className="hu-overlay" />

          <div className="hu-hero-inner">
            <div className="hu-hero-top">
              <span>
                HI U HAIR
                <br />
                CHEONGDANG
              </span>

              <span className="hu-hero-number">
                {String(active + 1).padStart(2, "0")}
                {" / "}
                05
              </span>
            </div>

            <div className="hu-hero-content">
              <div className="hu-hero-pretitle">
                PERSONAL HAIR DESIGN
              </div>

              <h1>
                당신의 분위기를
                <br />
                <strong>디자인하다.</strong>
              </h1>

              <p className="hu-hero-desc">
                섬세한 손길과 감각적인 스타일
                <br />
                나에게 어울리는 아름다움을 찾는 시간
              </p>

              <div className="hu-hero-designer">
                HAIR DESIGN BY HAERIN LEE
              </div>

              <div className="hu-hero-actions">
                <a
                  href={BOOKING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hu-btn hu-btn-light"
                >
                  네이버 예약하기
                  <Arrow diagonal />
                </a>

                <Link
                  href="/hair"
                  className="hu-btn hu-btn-line"
                >
                  시술 스타일 보기
                  <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 슬라이드 현재 스타일 */}
        <div className="hu-hero-status">
          <div className="hu-container hu-status-inner">
            <div className="hu-status-title">
              <b>
                {String(active + 1).padStart(2, "0")}
              </b>

              <div>
                <strong>{current.english}</strong>
                <small>{current.desc}</small>
              </div>
            </div>

            <Link
              href={current.href}
              className="hu-status-link"
            >
              {current.name} 보기
              <Arrow diagonal />
            </Link>
          </div>

          <div
            className="hu-progress"
            style={{
              animationPlayState:reducedMotion
                ? "paused"
                : "running",
            }}
          />
        </div>

        {/* =============================
            BRAND INTRO
        ============================= */}

        <section className="hu-intro">
          <div className="hu-container hu-intro-layout">
            <div>
              <span className="hu-eyebrow">
                THE PHILOSOPHY OF HI U HAIR
              </span>
            </div>

            <div>
              <h2>
                Beautiful Hair,
                <br />
                <em>Beautiful You.</em>
              </h2>

              <p className="hu-intro-copy">
                아름다운 헤어스타일은
                단순히 유행을 따르는 것이 아니라,
                나에게 가장 자연스럽게 어울리는
                분위기를 찾는 과정이라고 생각합니다.
                <br />
                <br />
                하이유헤어 이해린 디자이너는
                얼굴형과 모발의 특성, 평소 스타일링
                습관까지 함께 고려하여 고객님과
                어울리는 디자인을 고민합니다.
              </p>

              <div className="hu-intro-values">
                <span>FACE SHAPE</span>
                <span>HAIR TEXTURE</span>
                <span>PERSONAL COLOR</span>
              </div>
            </div>
          </div>
        </section>

        {/* =============================
            SIGNATURE STYLES
        ============================= */}

        <section className="hu-work">
          <div className="hu-container">
            <div className="hu-section-top">
              <div>
                <span className="hu-eyebrow">
                  THE SIGNATURE COLLECTION
                </span>

                <h2>Hair Artistry</h2>
              </div>

              <p>
                이해린 디자이너의
                대표 헤어 디자인을 만나보세요.
              </p>
            </div>

            <div className="hu-work-grid">
              {signatures.map((item) => (
                <Link
                  href={item.href}
                  key={item.no}
                  className="hu-work-card"
                >
                  <div className="hu-work-photo">
                    <Image
                      src={item.image}
                      alt={`${item.korean} 스타일 사진`}
                      fill
                      sizes="(max-width:600px) 50vw, 33vw"
                    />

                    <span className="hu-photo-number">
                      {item.no}
                    </span>
                  </div>

                  <div className="hu-work-info">
                    <small>{item.en}</small>

                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>

                    <span className="hu-work-more">
                      {item.korean} 자세히 보기
                      <Arrow diagonal />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="hu-work-footer">
              <Link
                href="/hair"
                className="hu-btn hu-btn-line"
              >
                모든 헤어스타일 살펴보기
                <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {/* =============================
            DESIGNER EXPERTISE
        ============================= */}

        <section className="hu-expertise">
          <div className="hu-container hu-expertise-grid">
            <div>
              <span
                className="hu-eyebrow"
                style={{ color:"#dcc7a8" }}
              >
                MEET YOUR DESIGNER
              </span>

              <h2>
                The Art
                <br />
                of <em>Details.</em>
              </h2>

              <p>
                스타일의 완성도를 높이는 것은
                작은 차이를 놓치지 않는 감각입니다.
                <br />
                이해린 디자이너의 전문 자격과
                수상 경력을 확인해 보세요.
              </p>

              <Link
                href="/designer"
                className="hu-btn"
              >
                이해린 디자이너 소개
                <Arrow />
              </Link>
            </div>

            <div className="hu-expertise-facts">
              <div className="hu-fact">
                <span className="hu-fact-num">
                  01
                </span>
                <h3>뷰티케어 전공</h3>
                <p>유원대학교 뷰티케어학과 졸업</p>
              </div>

              <div className="hu-fact">
                <span className="hu-fact-num">
                  02
                </span>
                <h3>헤어 국가자격</h3>
                <p>헤어 국가자격증 · 미용 종합면허증</p>
              </div>

              <div className="hu-fact">
                <span className="hu-fact-num">
                  03
                </span>
                <h3>퍼스널컬러</h3>
                <p>Personal Color Consultant 자격증</p>
              </div>

              <div className="hu-fact">
                <span className="hu-fact-num">
                  04
                </span>
                <h3>미용 대회 수상</h3>
                <p>Permanent 은상 · Haircolor 동상 외</p>
              </div>
            </div>
          </div>
        </section>

        {/* =============================
            PERSONAL CONSULTATION
        ============================= */}

        <section className="hu-consult">
          <div className="hu-container hu-consult-grid">
            <div>
              <span className="hu-eyebrow">
                PERSONALIZED HAIR DESIGN
              </span>

              <h2>
                유행보다 중요한 건
                <br />
                <strong>나에게 어울리는 스타일.</strong>
              </h2>

              <p>
                같은 커트와 같은 컬러라도
                얼굴형과 모질, 원하는 분위기에 따라
                표현은 달라질 수 있어요.
                <br />
                시술 전 원하는 스타일과
                평소 관리 방법을 함께 상담해 보세요.
              </p>
            </div>

            <div className="hu-consult-list">
              <div className="hu-consult-row">
                <b>01</b>
                <div>
                  <strong>얼굴형과 이미지</strong>
                  <span>
                    얼굴형과 원하는 분위기를 고려한
                    커트·레이어 디자인 상담
                  </span>
                </div>
              </div>

              <div className="hu-consult-row">
                <b>02</b>
                <div>
                  <strong>모질과 손질 습관</strong>
                  <span>
                    모발 상태와 일상적인 스타일링
                    방법에 맞춘 펌 상담
                  </span>
                </div>
              </div>

              <div className="hu-consult-row">
                <b>03</b>
                <div>
                  <strong>컬러와 피부톤</strong>
                  <span>
                    취향과 원하는 인상을 고려한
                    염색·웨딩염색 상담
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================
            NAVER REVIEWS
        ============================= */}

        <section className="hu-trust">
          <div className="hu-container hu-trust-inner">
            <div>
              <span className="hu-eyebrow">
                REAL CLIENT STORIES
              </span>

              <h2>Client Reviews</h2>

              <p>
                하이유헤어를 방문한 고객들의
                실제 네이버 리뷰를 확인해 보세요.
              </p>
            </div>

            <Link
              href="/reviews"
              className="hu-btn hu-btn-line"
            >
              고객 리뷰 확인하기
              <Arrow />
            </Link>
          </div>
        </section>

        {/* =============================
            LOCATION
        ============================= */}

        <section className="hu-visit">
          <div className="hu-container hu-visit-grid">
            <div>
              <span className="hu-eyebrow">
                VISIT OUR SALON
              </span>

              <h2>Find HI U HAIR</h2>

              <p className="hu-visit-address">
                하이유헤어 청당점
                <br />
                이해린 디자이너
                <br />
                {ADDRESS}
                <br />
                {PHONE_VIEW}
              </p>

              <div className="hu-visit-links">
                <a
                  href={MAP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hu-btn hu-btn-dark"
                >
                  네이버 지도
                  <Arrow diagonal />
                </a>

                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hu-btn hu-btn-line"
                >
                  Instagram
                  <Arrow diagonal />
                </a>
              </div>
            </div>

            <div className="hu-visit-feature">
              <span>CHEONGDANG · CHEONAN</span>
              <strong>HI U HAIR</strong>
              <p>
                PERSONAL HAIR DESIGN
                <br />
                BY HAERIN LEE
              </p>
            </div>
          </div>
        </section>

        {/* =============================
            BOOKING
        ============================= */}

        <section className="hu-booking">
          <span
            className="hu-eyebrow"
            style={{ color:"#dac5a7" }}
          >
            YOUR BEAUTIFUL MOMENT
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

          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="hu-btn hu-btn-light"
          >
            이해린 디자이너 예약하기
            <Arrow diagonal />
          </a>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="hu-footer">
        <div className="hu-container hu-footer-inner">
          <span className="hu-footer-logo">
            HI U HAIR
          </span>

          <p>
            하이유헤어 청당점 · 이해린 디자이너
            <br />
            {ADDRESS}
            <br />
            {PHONE_VIEW}
            <br />
            © {new Date().getFullYear()} HI U HAIR.
          </p>
        </div>
      </footer>

      {/* 기존 모바일 전화 / 문자 / 예약 */}

      <nav
        className="hu-mobile-bar"
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
