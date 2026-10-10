
import Image from "next/image";

const SITE = "https://hiuhair.com";

const ADDRESS =
  "충남 천안시 동남구 청수4로 16, 2층 201호";

const NAVER_MAP =
  "https://map.naver.com/p/search/" +
  encodeURIComponent("하이유헤어 청당점");

const services = [
  {
    number: "01",
    title: "WOMEN'S CUT",
    name: "여성 커트",
    desc: "얼굴형과 모발의 흐름을 고려한 커트 상담",
  },
  {
    number: "02",
    title: "LAYERED CUT",
    name: "레이어드컷",
    desc: "자연스러운 볼륨과 움직임을 살린 스타일",
  },
  {
    number: "03",
    title: "PERM & STYLING",
    name: "여성 펌",
    desc: "원하는 컬과 일상 관리 방식을 고려한 디자인",
  },
  {
    number: "04",
    title: "HAIR COLOR",
    name: "여성 염색",
    desc: "피부 톤과 취향을 고려한 컬러 상담",
  },
];

const gallery = [
  {
    title: "SOFT LAYERED",
    name: "자연스러운 레이어드 스타일",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "ELEGANT WAVE",
    name: "부드러운 웨이브 스타일",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "MODERN HAIR",
    name: "세련된 데일리 헤어",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85",
  },
];

export default function HomePage() {
  return (
    <>
      <header>
        <div className="container header-inner">
          <a href="#home" className="logo">
            HI U HAIR
            <small>CHEONGDANG</small>
          </a>

          <nav className="desktop-nav">
            <a href="#about">DESIGNER</a>
            <a href="#service">SPECIALTY</a>
            <a href="#portfolio">HAIR STYLE</a>
            <a href="#location">LOCATION</a>
            <a href="#booking" className="nav-cta">
              예약 안내
            </a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">
              HI U HAIR · CHEONGDANG
            </span>

            <h1>
              당신에게 어울리는
              <br />
              <strong>아름다움의 완성</strong>
            </h1>

            <p className="hero-desc">
              오늘의 나에게 가장 잘 어울리는 스타일.
              <br />
              취향과 모발의 특성을 함께 고민하는
              <br />
              이해린 디자이너의 헤어 디자인.
            </p>

            <div className="hero-actions">
              <a href="#about" className="btn btn-primary">
                디자이너 소개
              </a>

              <a href="#booking" className="btn btn-outline">
                예약 안내
              </a>
            </div>
          </div>

          <div
            className="hero-photo"
            role="img"
            aria-label="헤어살롱 스타일 이미지"
          >
            <span>THE ART OF PERSONAL STYLE</span>
          </div>
        </section>

        <div className="intro-strip">
          <div className="container">
            HAIR DESIGN BY HAERIN LEE
          </div>
        </div>

        <section id="about" className="section section-light">
          <div className="container profile-grid">
            <div className="profile-photo">
              <div className="profile-placeholder">
                <strong>HAERIN LEE</strong>
                <span>
                  이해린 디자이너
                  <br />
                  프로필 사진 준비 중
                </span>
              </div>
            </div>

            <div className="profile-text">
              <span className="eyebrow">
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
                하이유헤어 청당점 디자이너 이해린입니다.
              </p>

              <p>
                헤어스타일은 단순히 머리 모양을 바꾸는
                것이 아니라, 자신만의 분위기와 개성을
                표현하는 중요한 요소라고 생각합니다.
              </p>

              <p>
                고객님의 취향과 원하는 분위기를 충분히
                듣고, 일상에서도 만족할 수 있는
                헤어스타일을 함께 고민하겠습니다.
              </p>

              <div className="profile-signature">
                HI U HAIR CHEONGDANG
                <br />
                DESIGNER · 이해린
              </div>
            </div>
          </div>
        </section>

        <section id="service" className="section section-cream">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">
                HAIR DESIGN MENU
              </span>
              <h2>여성 헤어 디자인</h2>
              <p className="section-desc">
                나에게 어울리는 스타일을 찾아가는 시간
              </p>
            </div>

            <div className="service-grid">
              {services.map((item) => (
                <article
                  className="service-card"
                  key={item.number}
                >
                  <span className="service-number">
                    {item.number} / {item.title}
                  </span>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="section section-light">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">
                HAIR INSPIRATION
              </span>
              <h2>Style Gallery</h2>
              <p className="section-desc">
                당신의 새로운 스타일을 위한 영감
              </p>
            </div>

            <div className="gallery-grid">
              {gallery.map((item) => (
                <article
                  className="gallery-card"
                  key={item.title}
                >
                  <div className="gallery-image">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={600}
                      height={750}
                      unoptimized
                    />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.name}</p>
                </article>
              ))}
            </div>

            <p className="gallery-notice">
              현재 이미지는 스타일 참고용입니다.
              이해린 디자이너의 실제 시술 사례는
              추후 업데이트됩니다.
            </p>
          </div>
        </section>

        <section id="booking" className="booking-banner">
          <span className="eyebrow" style={{ color: "#dce5ff" }}>
            YOUR BEAUTY, YOUR STYLE
          </span>

          <h2>당신만의 스타일을 만나보세요.</h2>

          <p>
            하이유헤어 청당점 이해린 디자이너
            <br />
            방문 전 예약 방법을 확인해 주세요.
          </p>

          <a href="#location" className="btn">
            매장 위치 및 예약 문의
          </a>
        </section>

        <section id="location" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">
                VISIT HI U HAIR
              </span>
              <h2>Location & Contact</h2>
            </div>

            <div className="location-grid">
              <div className="location-card">
                <h3>하이유헤어 청당점</h3>

                <dl>
                  <dt>DESIGNER</dt>
                  <dd>이해린 디자이너</dd>

                  <dt>ADDRESS</dt>
                  <dd>{ADDRESS}</dd>

                  <dt>RESERVATION</dt>
                  <dd>
                    예약 링크 및 상담 연락처
                    <br />
                    준비 중
                  </dd>

                  <dt>BUSINESS HOURS</dt>
                  <dd>
                    운영시간 확인 후 업데이트 예정
                  </dd>
                </dl>
              </div>

              <div className="map-panel">
                <div>
                  <span className="eyebrow">
                    FIND OUR SALON
                  </span>

                  <h3>HI U HAIR</h3>
                  <p>
                    천안 청당동
                    <br />
                    하이유헤어 청당점
                    <br />
                    {ADDRESS}
                  </p>

                  <a
                    href={NAVER_MAP}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    네이버 지도에서 위치 보기 ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div className="logo" style={{ color: "white" }}>
            HI U HAIR
            <small>CHEONGDANG</small>
          </div>

          <div className="footer-info">
            하이유헤어 청당점 · 디자이너 이해린
            <br />
            {ADDRESS}
            <br />
            © {new Date().getFullYear()} HI U HAIR.
            All rights reserved.
          </div>
        </div>
      </footer>

      <div className="mobile-book">
        <a href="#booking">
          이해린 디자이너 예약 안내 →
        </a>
      </div>
    </>
  );
}
