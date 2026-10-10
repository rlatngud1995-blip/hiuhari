
import Link from "next/link";
import Image from "next/image";

const PHONE = "01023277653";
const PHONE_VIEW = "010-2327-7653";

const ADDRESS =
  "충남 천안시 동남구 청수4로 16, 2층 201호";

const MAP_URL =
  "https://map.naver.com/p/search/" +
  encodeURIComponent("하이유헤어 청당점");

const services = [
  {
    number: "01",
    title: "WOMEN'S CUT",
    name: "여성 커트",
    desc: "얼굴형과 모발의 흐름을 고려한 커트 디자인",
  },
  {
    number: "02",
    title: "LAYERED CUT",
    name: "레이어드컷 / C컬",
    desc: "움직임과 볼륨감을 살린 자연스러운 스타일",
  },
  {
    number: "03",
    title: "PERM DESIGN",
    name: "여성 펌",
    desc: "빌드펌, 물결펌 등 취향에 맞춘 펌 디자인",
  },
  {
    number: "04",
    title: "HAIR COLOR",
    name: "여성 염색",
    desc: "매트브라운, 밀크브라운, 루비레드 등",
  },
];

const gallery = [
  {
    title: "BUILD PERM",
    name: "빌드펌 / 매트브라운",
    description:
      "풍성한 볼륨과 차분한 매트브라운 컬러",
    image: "/IMG_1424.jpeg",
  },
  {
    title: "HIGH LAYERED CUT",
    name: "하이레이어드컷 / C컬",
    description:
      "자연스러운 레이어와 부드러운 C컬",
    image: "/IMG_1427.jpeg",
  },
  {
    title: "WAVE PERM",
    name: "물결펌 / 밀크브라운",
    description:
      "부드러운 물결 웨이브와 밀크브라운 컬러",
    image: "/IMG_1423.jpeg",
  },
  {
    title: "BEIGE BROWN",
    name: "베이지브라운",
    description:
      "은은하고 세련된 베이지브라운 컬러",
    image: "/IMG_1425.jpeg",
  },
  {
    title: "RUBY RED COLOR",
    name: "루비레드컬러",
    description:
      "선명하면서 깊이감 있는 루비레드 컬러",
    image: "/IMG_1433.jpeg",
  },
];

export default function HomePage() {
  return (
    <>
      <header>
        <div className="container header-inner">
          <Link href="/" className="logo">
            HI U HAIR
            <small>CHEONGDANG</small>
          </Link>

          <nav className="desktop-nav">
            <a href="#about">DESIGNER</a>
            <a href="#service">SPECIALTY</a>
            <a href="#portfolio">HAIR STYLE</a>
            <a href="#location">LOCATION</a>
            <Link
              href="/reservation"
              className="nav-cta"
            >
              예약하기
            </Link>
          </nav>
        </div>
      </header>

      <main id="home">
        {/* 메인 로고 영역 */}
        <section
          style={{
            background: "#ffffff",
            padding: "85px 20px 80px",
            textAlign: "center",
            borderBottom: "1px solid #e8e8e8",
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "3px",
              color: "#173b72",
              marginBottom: 35,
              fontWeight: 600,
            }}
          >
            CHEONGDANG · PERSONAL HAIR DESIGNER
          </div>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              color: "#173b72",
              fontSize: "clamp(42px, 10vw, 110px)",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              margin: "0 auto",
              whiteSpace: "nowrap",
            }}
          >
            HI U HAIR
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              margin: "24px auto 0",
              maxWidth: 360,
            }}
          >
            <div
              style={{
                height: 1,
                background: "#173b72",
                flex: 1,
              }}
            />

            <span
              style={{
                fontSize: 11,
                letterSpacing: "3px",
                color: "#173b72",
              }}
            >
              CHEONGDANG
            </span>

            <div
              style={{
                height: 1,
                background: "#173b72",
                flex: 1,
              }}
            />
          </div>

          <div
            style={{
              marginTop: 55,
              color: "#1d2633",
            }}
          >
            <div
              style={{
                fontSize: 12,
                letterSpacing: "2px",
                color: "#173b72",
                marginBottom: 15,
              }}
            >
              DESIGNER HAERIN LEE
            </div>

            <h2
              style={{
                fontSize: "clamp(26px, 5vw, 38px)",
                fontWeight: 500,
                margin: "0 0 18px",
              }}
            >
              이해린 디자이너
            </h2>

            <p
              style={{
                fontSize: 13,
                lineHeight: 2.1,
                color: "#717781",
              }}
            >
              당신에게 어울리는 아름다움을 디자인합니다.
              <br />
              여성 커트 · 레이어드컷 · 펌 · 염색
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 10,
              marginTop: 35,
            }}
          >
            <Link
              href="/reservation"
              className="btn btn-primary"
            >
              이해린 디자이너 예약하기 →
            </Link>

            <a
              href={`sms:${PHONE}`}
              className="btn btn-outline"
            >
              문자 상담
            </a>
          </div>
        </section>

        <div className="intro-strip">
          <div className="container">
            HAIR DESIGN BY HAERIN LEE
          </div>
        </div>

        {/* 디자이너 소개 */}
        <section
          id="about"
          className="section section-light"
        >
          <div className="container profile-grid">
            <div className="profile-photo">
              <div className="profile-placeholder">
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
                하이유헤어 청당점 이해린 디자이너입니다.
              </p>

              <p>
                헤어스타일은 단순히 머리 모양을 바꾸는
                것을 넘어 자신만의 분위기와 개성을
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

              <div className="hero-actions">
                <Link
                  href="/reservation"
                  className="btn btn-primary"
                >
                  디자이너 예약하기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 시술 메뉴 */}
        <section
          id="service"
          className="section section-cream"
        >
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

        {/* 실제 업로드 사진 갤러리 */}
        <section
          id="portfolio"
          className="section section-light"
        >
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">
                HAIR DESIGN COLLECTION
              </span>

              <h2>Hair Portfolio</h2>

              <p className="section-desc">
                다양한 여성 헤어 디자인을 만나보세요.
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
                      width={650}
                      height={800}
                      sizes="(max-width: 600px) 50vw, (max-width: 900px) 50vw, 33vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <h3>{item.name}</h3>

                  <p>{item.description}</p>

                  <div style={{ marginTop: 17 }}>
                    <Link
                      href="/reservation"
                      style={{
                        color: "#173b72",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      이 스타일 예약 문의 →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 예약 안내 */}
        <section
          id="booking"
          className="booking-banner"
        >
          <span
            className="eyebrow"
            style={{ color: "#dce5ff" }}
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

          <div
            className="hero-actions"
            style={{ justifyContent: "center" }}
          >
            <Link
              href="/reservation"
              className="btn"
            >
              예약 신청하기
            </Link>

            <a
              href={`sms:${PHONE}`}
              className="btn"
            >
              문자 문의하기
            </a>
          </div>
        </section>

        {/* 매장 정보 */}
        <section
          id="location"
          className="section"
        >
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

                  <dt>CONTACT</dt>
                  <dd>
                    <a href={`tel:${PHONE}`}>
                      {PHONE_VIEW}
                    </a>
                  </dd>

                  <dt>RESERVATION</dt>
                  <dd>
                    전화 · 문자 · 홈페이지 예약 신청
                  </dd>
                </dl>

                <div className="hero-actions">
                  <a
                    href={`tel:${PHONE}`}
                    className="btn btn-primary"
                  >
                    전화하기
                  </a>

                  <a
                    href={`sms:${PHONE}`}
                    className="btn btn-outline"
                  >
                    문자하기
                  </a>
                </div>
              </div>

              <div className="map-panel">
                <div>
                  <span className="eyebrow">
                    FIND OUR SALON
                  </span>

                  <h3>HI U HAIR</h3>

                  <p>
                    천안 청당동 하이유헤어 청당점
                    <br />
                    {ADDRESS}
                  </p>

                  <a
                    href={MAP_URL}
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

      {/* 푸터 */}
      <footer>
        <div className="container footer-inner">
          <div
            className="logo"
            style={{ color: "white" }}
          >
            HI U HAIR
            <small>CHEONGDANG</small>
          </div>

          <div className="footer-info">
            하이유헤어 청당점 · 디자이너 이해린
            <br />
            {ADDRESS}
            <br />
            연락처: {PHONE_VIEW}
            <br />
            © {new Date().getFullYear()} HI U HAIR.
            All rights reserved.
          </div>
        </div>
      </footer>

      {/* 모바일 하단 고정 버튼 */}
      <div className="mobile-book">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1.5fr",
            gap: 8,
          }}
        >
          <a href={`tel:${PHONE}`}>
            전화
          </a>

          <a href={`sms:${PHONE}`}>
            문자
          </a>

          <Link href="/reservation">
            예약하기
          </Link>
        </div>
      </div>
    </>
  );
}
