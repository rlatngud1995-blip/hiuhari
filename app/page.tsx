
import Link from "next/link";
import Image from "next/image";

const PHONE = "01023277653";
const PHONE_VIEW = "010-2327-7653";
const ADDRESS = "충남 천안시 동남구 청수4로 16, 2층 201호";

const INSTAGRAM = "https://www.instagram.com/hiu_haerin/";

const BOOKING =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&theme=place";

const REVIEWS =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&tab=review&theme=place";

const MAP =
  "https://map.naver.com/p/search/" +
  encodeURIComponent("하이유헤어 청당점");

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

const services = [
  {
    num: "01",
    en: "CUT & LAYER",
    name: "여성 커트",
    desc: "얼굴형과 모발 흐름을 고려한 스타일",
  },
  {
    num: "02",
    en: "PERM & WAVE",
    name: "여성 펌",
    desc: "빌드펌 · 물결펌 · 레이어드펌",
  },
  {
    num: "03",
    en: "COLOR DESIGN",
    name: "여성 염색",
    desc: "브라운 · 루비레드 · 블루 · 베이비핑크",
  },
  {
    num: "04",
    en: "HAIR EXTENSION",
    name: "붙임머리",
    desc: "원하는 길이와 분위기에 맞춘 스타일",
  },
];

const highlights = [
  "유원대학교 뷰티케어학과 졸업",
  "미용 종합면허증",
  "헤어 · 메이크업 국가자격증",
  "Personal Color Consultant 자격증",
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

const feedback = [
  ["원하는 스타일로 잘해줘요", "259명"],
  ["친절해요", "218명"],
  ["시술이 꼼꼼해요", "168명"],
  ["스타일 추천을 잘해줘요", "146명"],
  ["트렌디해요", "73명"],
];

const styleCards = [
  "레이어드컷",
  "빌드펌",
  "브라운 컬러",
  "블루염색",
  "베이비핑크",
];

function SocialLink({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={INSTAGRAM}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
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
      strokeWidth="1.7"
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
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="ha-page">
      <style>{`
        .ha-page {
          --blue:#193b71;
          --ink:#25272b;
          --muted:#797c83;
          --cream:#f6f4f0;
          --line:#e8e4de;
          background:#fff;
          color:var(--ink);
          overflow-x:clip;
        }
        .ha-page *{box-sizing:border-box}
        .ha-wrap{
          width:min(1120px,calc(100% - 40px));
          margin:0 auto;
        }
        .ha-page a{text-decoration:none}
        .ha-eyebrow{
          color:var(--blue);
          font-size:10px;
          font-weight:700;
          letter-spacing:2.5px;
          line-height:1.8;
        }
        .ha-btn{
          min-height:49px;
          padding:14px 23px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:9px;
          border:1px solid var(--blue);
          border-radius:3px;
          font-size:12px;
          font-weight:600;
          text-align:center;
          transition:transform .2s;
        }
        .ha-btn:hover{transform:translateY(-2px)}
        .ha-btn-blue{background:var(--blue);color:#fff}
        .ha-btn-outline{background:transparent;color:var(--blue)}
        .ha-btn-light{background:#fff;color:var(--blue);border-color:#fff}
        .ha-actions{
          display:flex;
          flex-wrap:wrap;
          align-items:center;
          gap:10px;
          margin-top:27px;
        }
        .ha-center{justify-content:center}

        /* Header */
        .ha-header{
          position:sticky;
          top:0;
          z-index:50;
          background:rgba(255,255,255,.97);
          border-bottom:1px solid var(--line);
          backdrop-filter:blur(12px);
        }
        .ha-header-inner{
          display:flex;
          align-items:center;
          justify-content:space-between;
          min-height:75px;
          gap:20px;
        }
        .ha-brand{
          display:flex;
          flex-direction:column;
          color:var(--blue);
          font-family:Georgia,serif;
          font-size:26px;
          letter-spacing:2px;
          line-height:1;
          white-space:nowrap;
        }
        .ha-brand small{
          margin-top:9px;
          font-family:Arial,sans-serif;
          font-size:9px;
          letter-spacing:4px;
        }
        .ha-nav{
          display:flex;
          align-items:center;
          gap:20px;
          font-size:11px;
          font-weight:600;
        }
        .ha-nav a:hover{color:var(--blue)}

        /* Hero */
        .ha-hero{
          position:relative;
          overflow:hidden;
          background:radial-gradient(
            ellipse at 50% 0%,
            #fff 0%,#f6f4f0 83%
          );
          text-align:center;
          padding:94px 18px 83px;
        }
        .ha-hero-inner{position:relative;z-index:1}
        .ha-hero-brand{
          font-family:Georgia,serif;
          font-size:clamp(42px,9vw,105px);
          font-weight:400;
          letter-spacing:-2px;
          color:var(--blue);
          white-space:nowrap;
          margin:27px 0 13px;
          line-height:1.2;
        }
        .ha-hero-sub{
          display:flex;
          justify-content:center;
          align-items:center;
          gap:15px;
          max-width:320px;
          margin:0 auto 54px;
          color:var(--blue);
          font-size:10px;
          letter-spacing:4px;
        }
        .ha-hero-sub:before,.ha-hero-sub:after{
          content:"";
          flex:1;
          height:1px;
          background:#b3becf;
        }
        .ha-hero h2{
          font-size:clamp(29px,5vw,45px);
          font-weight:400;
          letter-spacing:-1.4px;
          line-height:1.5;
          margin:0 0 17px;
          word-break:keep-all;
        }
        .ha-hero h2 strong{color:var(--blue);font-weight:600}
        .ha-hero-desc{
          font-size:13px;
          line-height:2.1;
          color:var(--muted);
        }
        .ha-hero-social{
          margin-top:24px;
          display:inline-flex;
          align-items:center;
          gap:8px;
          color:var(--blue);
          font-size:12px;
          font-weight:600;
          letter-spacing:.3px;
        }
        .ha-scroll{
          display:block;
          margin-top:42px;
          color:var(--blue);
          font-size:10px;
          letter-spacing:2px;
        }
        .ha-strip{
          background:var(--blue);
          color:#fff;
          padding:21px 15px;
          text-align:center;
          font-size:10px;
          letter-spacing:4px;
        }

        /* Headings */
        .ha-section{padding:93px 0;scroll-margin-top:85px}
        .ha-cream{background:var(--cream)}
        .ha-heading{text-align:center;margin-bottom:43px}
        .ha-heading h2{
          font-family:Georgia,"Noto Sans KR",serif;
          font-size:clamp(33px,5vw,50px);
          font-weight:400;
          letter-spacing:-1px;
          margin:12px 0 17px;
        }
        .ha-heading p{
          font-size:13px;
          line-height:1.9;
          color:var(--muted);
          margin:0;
        }

        /* Portfolio */
        .ha-gallery{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:32px 16px;
        }
        .ha-work{min-width:0}
        .ha-work-photo{
          position:relative;
          aspect-ratio:4/5.1;
          overflow:hidden;
          background:#e7e2dc;
          border-radius:4px;
        }
        .ha-work-photo img{
          object-fit:cover;
          transition:transform .45s;
        }
        .ha-work:hover img{transform:scale(1.045)}
        .ha-work-number{
          position:absolute;
          top:12px;
          left:12px;
          background:rgba(255,255,255,.95);
          color:var(--blue);
          width:34px;
          height:34px;
          display:grid;
          place-items:center;
          font-size:13px;
          font-family:Georgia,serif;
        }
        .ha-work-en{
          color:var(--blue);
          font-size:9px;
          font-weight:700;
          letter-spacing:1px;
          margin-top:17px;
          line-height:1.7;
        }
        .ha-work h3{
          font-size:16px;
          font-weight:600;
          margin:8px 0;
          line-height:1.6;
          word-break:keep-all;
        }
        .ha-work p{
          color:var(--muted);
          font-size:12px;
          line-height:1.8;
          margin:0 0 14px;
          word-break:keep-all;
        }
        .ha-text-link{
          font-size:12px;
          font-weight:700;
          color:var(--blue);
        }
        .ha-instagram-feature{
          background:var(--cream);
          border:1px solid var(--line);
          margin-top:55px;
          padding:32px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:22px;
        }
        .ha-instagram-feature h3{
          margin:10px 0 6px;
          font-size:23px;
          font-weight:500;
        }
        .ha-instagram-feature p{
          color:var(--muted);
          font-size:12px;
          line-height:1.8;
          margin:0;
        }

        /* Designer */
        .ha-about-grid{
          display:grid;
          grid-template-columns:.92fr 1.08fr;
          align-items:center;
          gap:74px;
        }
        .ha-portrait{
          position:relative;
          aspect-ratio:4/5.2;
          background:#e0dcda;
          overflow:hidden;
          border-radius:4px;
        }
        .ha-portrait img{
          object-fit:cover;
          object-position:center 35%;
        }
        .ha-about h2{
          font-size:clamp(32px,4vw,46px);
          font-weight:500;
          line-height:1.45;
          letter-spacing:-1.3px;
          margin:15px 0 24px;
        }
        .ha-about h2 strong{color:var(--blue)}
        .ha-about p{
          font-size:14px;
          line-height:2.1;
          color:#72757c;
          word-break:keep-all;
        }
        .ha-profile-social{
          display:inline-flex;
          align-items:center;
          gap:8px;
          color:var(--blue);
          font-size:13px;
          font-weight:700;
          margin:14px 0 5px;
        }
        .ha-credentials{
          border-top:1px solid #dedad4;
          margin-top:25px;
          padding-top:23px;
        }
        .ha-credentials-title{
          font-size:11px;
          font-weight:700;
          letter-spacing:1px;
          color:var(--blue);
          margin-bottom:13px;
        }
        .ha-credentials ul{padding-left:18px;margin:0}
        .ha-credentials li{
          font-size:12px;
          color:#63666e;
          line-height:2.1;
        }
        .ha-details{
          border-top:1px solid #e2ddd6;
          margin-top:19px;
        }
        .ha-details summary{
          cursor:pointer;
          color:var(--blue);
          font-size:12px;
          font-weight:700;
          padding:18px 0;
        }
        .ha-details-content{
          padding-bottom:17px;
          font-size:12px;
          line-height:2;
          color:#686c74;
        }
        .ha-details-content strong{
          display:block;
          margin:12px 0 6px;
        }

        /* Services */
        .ha-services{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:14px;
        }
        .ha-service{
          background:#fff;
          border:1px solid var(--line);
          padding:26px 21px;
          min-height:185px;
        }
        .ha-service-num{
          font-family:Georgia,serif;
          color:var(--blue);
          font-size:23px;
        }
        .ha-service h3{
          font-size:18px;
          margin:17px 0 9px;
        }
        .ha-service small{
          color:var(--blue);
          font-weight:700;
          font-size:9px;
          letter-spacing:1px;
        }
        .ha-service p{
          font-size:12px;
          line-height:1.8;
          color:var(--muted);
        }

        /* Review marquee */
        .ha-reviews{overflow:hidden}
        .ha-review-summary{
          display:flex;
          justify-content:center;
          align-items:center;
          gap:34px;
          margin-bottom:38px;
          text-align:center;
        }
        .ha-review-summary strong{
          font:400 43px Georgia,serif;
          color:var(--blue);
          display:block;
        }
        .ha-review-summary span{
          font-size:11px;
          color:var(--muted);
        }
        .ha-review-separator{
          width:1px;
          height:45px;
          background:var(--line);
        }
        .ha-marquee-window{
          width:100%;
          overflow:hidden;
          padding:5px 0 20px;
        }
        .ha-marquee-track{
          display:flex;
          width:max-content;
          animation:ha-marquee 64s linear infinite;
        }
        .ha-marquee-window:hover .ha-marquee-track,
        .ha-marquee-window:focus-within .ha-marquee-track{
          animation-play-state:paused;
        }
        .ha-marquee-set{
          display:flex;
          gap:14px;
          flex-shrink:0;
          padding-right:14px;
        }
        .ha-review-card{
          width:265px;
          min-height:211px;
          border:1px solid var(--line);
          background:var(--cream);
          padding:24px;
          border-radius:5px;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          flex-shrink:0;
        }
        .ha-review-card small{
          color:var(--blue);
          font-size:10px;
          font-weight:700;
          letter-spacing:1px;
        }
        .ha-review-card h3{
          font-size:18px;
          line-height:1.6;
          margin:15px 0;
          word-break:keep-all;
        }
        .ha-review-card strong{
          color:var(--blue);
          font:500 23px Georgia,serif;
        }
        .ha-review-card p{
          font-size:11px;
          color:var(--muted);
          margin:8px 0 0;
        }
        @keyframes ha-marquee {
          from{transform:translateX(0)}
          to{transform:translateX(-50%)}
        }
        .ha-review-note{
          text-align:center;
          font-size:11px;
          color:var(--muted);
          line-height:1.9;
          margin-top:20px;
          padding:0 20px;
        }

        /* Booking and location */
        .ha-booking{
          background:var(--blue);
          color:#fff;
          text-align:center;
          padding:82px 20px;
        }
        .ha-booking h2{
          font-size:clamp(29px,5vw,45px);
          font-weight:400;
          line-height:1.5;
          margin:17px 0;
        }
        .ha-booking p{
          color:#dce4ef;
          font-size:13px;
          line-height:2;
        }
        .ha-booking .ha-btn-outline{
          border-color:#d1dced;
          color:#fff;
        }
        .ha-location{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:22px;
        }
        .ha-location-info,.ha-location-map{
          min-height:340px;
          padding:38px;
          border:1px solid var(--line);
          background:#fff;
        }
        .ha-location-info h3{
          margin:0 0 27px;
          font-size:24px;
        }
        .ha-location-info dt{
          color:var(--blue);
          font-size:10px;
          letter-spacing:1px;
          font-weight:700;
          margin-top:20px;
        }
        .ha-location-info dd{
          margin:7px 0;
          font-size:13px;
          line-height:1.9;
        }
        .ha-location-map{
          background:#eae7e1;
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
        }
        .ha-location-map h3{
          color:var(--blue);
          font:400 35px Georgia,serif;
          letter-spacing:2px;
        }
        .ha-location-map p{
          font-size:12px;
          color:#737680;
          line-height:2;
        }

        /* Footer */
        .ha-footer{
          background:#1c2432;
          color:#fff;
          padding:52px 0 110px;
        }
        .ha-footer-inner{
          display:flex;
          justify-content:space-between;
          gap:30px;
        }
        .ha-footer .ha-brand{color:#fff}
        .ha-footer p{
          font-size:11px;
          line-height:2;
          color:#bfc6d2;
        }
        .ha-footer-social{
          display:inline-flex;
          gap:9px;
          align-items:center;
          margin-top:15px;
          font-size:13px;
          color:#fff;
        }
        .ha-mobile-bar{display:none}

        @media(max-width:950px){
          .ha-nav{display:none}
          .ha-gallery{grid-template-columns:repeat(2,minmax(0,1fr))}
          .ha-about-grid{grid-template-columns:1fr;gap:36px}
          .ha-portrait{width:100%;max-width:570px;margin:auto}
          .ha-services{grid-template-columns:repeat(2,minmax(0,1fr))}
        }
        @media(max-width:600px){
          .ha-header-inner{min-height:67px}
          .ha-brand{font-size:23px}
          .ha-hero{padding:73px 15px 64px}
          .ha-hero-brand{font-size:clamp(36px,10.1vw,59px)}
          .ha-hero-sub{margin-bottom:46px}
          .ha-hero h2{font-size:29px}
          .ha-section{padding:68px 0}
          .ha-heading{margin-bottom:32px}
          .ha-heading h2{font-size:35px}
          .ha-gallery{gap:27px 12px}
          .ha-work h3{font-size:14px}
          .ha-work p{font-size:11px}
          .ha-work-en{font-size:9px}
          .ha-instagram-feature{
            flex-direction:column;
            align-items:flex-start;
            padding:23px;
            margin-top:38px;
          }
          .ha-instagram-feature .ha-btn{width:100%}
          .ha-services{gap:10px}
          .ha-service{padding:22px 17px;min-height:171px}
          .ha-service h3{font-size:16px}
          .ha-review-card{width:252px}
          .ha-location{grid-template-columns:1fr}
          .ha-location-info,.ha-location-map{padding:29px}
          .ha-footer-inner{flex-direction:column}
          .ha-mobile-bar{
            display:grid;
            position:fixed;
            bottom:0;
            left:0;
            right:0;
            z-index:100;
            grid-template-columns:1fr 1fr 1.5fr;
            gap:8px;
            background:#fff;
            border-top:1px solid var(--line);
            padding:10px 12px calc(
              10px + env(safe-area-inset-bottom)
            );
          }
          .ha-mobile-bar a{
            min-height:47px;
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            color:var(--blue);
            background:#f1efeb;
            font-size:12px;
            font-weight:700;
            border-radius:3px;
          }
          .ha-mobile-bar a:last-child{
            background:var(--blue);
            color:#fff;
          }
        }
        @media(prefers-reduced-motion:reduce){
          .ha-marquee-track{animation:none}
          .ha-marquee-window{overflow-x:auto}
          .ha-work-photo img,.ha-btn{transition:none}
        }
      `}</style>

      {/* 상단 */}
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
            <SocialLink>INSTAGRAM ↗</SocialLink>
            <a href={BOOKING} target="_blank" rel="noopener noreferrer">
              NAVER BOOKING ↗
            </a>
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
              <a
                href={BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="ha-btn ha-btn-blue"
              >
                네이버 예약하기 ↗
              </a>

              <a href="#portfolio" className="ha-btn ha-btn-outline">
                헤어스타일 보기
              </a>
            </div>

            <SocialLink className="ha-hero-social">
              <InstagramIcon />
              Instagram @hiu_haerin ↗
            </SocialLink>

            <a href="#portfolio" className="ha-scroll">
              EXPLORE THE COLLECTION ↓
            </a>
          </div>
        </section>

        <div className="ha-strip">
          HAIR DESIGN BY HAERIN LEE
        </div>

        {/* 포트폴리오 */}
        <section id="portfolio" className="ha-section">
          <div className="ha-wrap">
            <div className="ha-heading">
              <span className="ha-eyebrow">
                THE HAIR COLLECTION
              </span>
              <h2>Signature Hair</h2>
              <p>당신의 취향에 맞는 아름다운 변화를 만나보세요.</p>
            </div>

            <div className="ha-gallery">
              {portfolio.map((item, index) => (
                <article className="ha-work" key={item.img}>
                  <div className="ha-work-photo">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      priority={index < 2}
                      sizes="(max-width:950px) 50vw,25vw"
                    />
                    <span className="ha-work-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="ha-work-en">{item.en}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  <a
                    className="ha-text-link"
                    href={BOOKING}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    스타일 예약하기 ↗
                  </a>
                </article>
              ))}
            </div>

            {/* 인스타그램 포트폴리오 연결 */}
            <div className="ha-instagram-feature">
              <div>
                <span className="ha-eyebrow">
                  FOLLOW THE HAIR JOURNEY
                </span>
                <h3>More Styles on Instagram</h3>
                <p>
                  이해린 디자이너의 헤어 디자인과
                  새로운 스타일을 인스타그램에서 만나보세요.
                </p>
              </div>

              <SocialLink className="ha-btn ha-btn-blue">
                <InstagramIcon />
                @hiu_haerin 바로가기 ↗
              </SocialLink>
            </div>
          </div>
        </section>

        {/* 디자이너 */}
        <section id="about" className="ha-section ha-cream">
          <div className="ha-wrap ha-about-grid">
            <div className="ha-portrait">
              <Image
                src="/IMG_1443.jpeg"
                alt="이해린 디자이너 프로필"
                fill
                sizes="(max-width:950px) 100vw,45vw"
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

              <SocialLink className="ha-profile-social">
                <InstagramIcon />
                @hiu_haerin ↗
              </SocialLink>

              <div className="ha-credentials">
                <div className="ha-credentials-title">
                  EDUCATION & QUALIFICATIONS
                </div>

                <ul>
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <details className="ha-details">
                  <summary>자격 · 수상 경력 전체 보기</summary>

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
                <a
                  href={BOOKING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ha-btn ha-btn-blue"
                >
                  이해린 디자이너 예약 ↗
                </a>
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
              <span className="ha-eyebrow">OUR SPECIALTIES</span>
              <h2>Hair Services</h2>
              <p>나에게 어울리는 스타일을 위한 디자인 메뉴</p>
            </div>

            <div className="ha-services">
              {services.map((service) => (
                <article className="ha-service" key={service.num}>
                  <div className="ha-service-num">
                    {service.num}
                  </div>
                  <h3>{service.name}</h3>
                  <small>{service.en}</small>
                  <p>{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 네이버 평가 자동 슬라이드 */}
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
                  {feedback.map(([title, value]) => (
                    <a
                      href={REVIEWS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ha-review-card"
                      key={`${copy}-${title}`}
                      tabIndex={copy === 1 ? -1 : 0}
                    >
                      <div>
                        <small>NAVER CUSTOMER FEEDBACK</small>
                        <h3>{title}</h3>
                      </div>
                      <div>
                        <strong>{value}</strong>
                        <p>네이버 고객 선택 평가</p>
                      </div>
                    </a>
                  ))}

                  {styleCards.map((style) => (
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

          <div className="ha-actions ha-center">
            <a
              href={REVIEWS}
              target="_blank"
              rel="noopener noreferrer"
              className="ha-btn ha-btn-outline"
            >
              네이버 고객 리뷰 보기 ↗
            </a>
            <a
              href={BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="ha-btn ha-btn-blue"
            >
              네이버 예약하기 ↗
            </a>
          </div>

          <p className="ha-review-note">
            고객 평가 수치는 2026년 10월 10일 확인 기준이며
            자동 갱신되지 않습니다.
            <br />
            고객 평가 카드 5개와 스타일 소개 카드 5개입니다.
            개별 후기 원문은 네이버에서 확인할 수 있습니다.
          </p>
        </section>

        {/* 예약 */}
        <section className="ha-booking">
          <span className="ha-eyebrow" style={{ color: "#d9e5f7" }}>
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
            <a
              href={BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="ha-btn ha-btn-light"
            >
              네이버 예약하기 ↗
            </a>

            <Link
              href="/reservation"
              className="ha-btn ha-btn-outline"
            >
              홈페이지 문자 예약
            </Link>
          </div>
        </section>

        {/* 위치 */}
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
                    <SocialLink>@hiu_haerin ↗</SocialLink>
                  </dd>
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
          <div>
            <Link href="/" className="ha-brand">
              HI U HAIR
              <small>CHEONGDANG</small>
            </Link>

            <SocialLink className="ha-footer-social">
              <InstagramIcon />
              @hiu_haerin ↗
            </SocialLink>
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

      {/* 모바일 하단 버튼 */}
      <div className="ha-mobile-bar">
        <a href={`tel:${PHONE}`}>전화</a>
        <a href={`sms:${PHONE}`}>문자</a>
        <a href={BOOKING} target="_blank" rel="noopener noreferrer">
          네이버 예약
        </a>
      </div>
    </div>
  );
}
