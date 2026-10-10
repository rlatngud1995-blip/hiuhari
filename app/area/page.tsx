
import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://www.hiuhair.com";

const regions = [
  { slug: "cheonan", name: "천안" },
  { slug: "cheongdang", name: "청당동" },
  { slug: "sinbang", name: "신방동" },
  { slug: "ssangyong", name: "쌍용동" },
  { slug: "buldang", name: "불당동" },
  { slug: "dujeong", name: "두정동" },
];

const services = [
  { slug: "womens-hair", name: "여자머리 전문" },
  { slug: "womens-cut", name: "여성 커트" },
  { slug: "layered-cut", name: "레이어드컷" },
  { slug: "build-perm", name: "빌드펌" },
  { slug: "wave-perm", name: "물결펌" },
  { slug: "color", name: "여성 염색" },
  { slug: "extensions", name: "붙임머리" },
];

export const metadata: Metadata = {
  title: {
    absolute:
      "천안 여자머리 전문·레이어드컷·염색·붙임머리 | 하이유헤어",
  },
  description:
    "천안 청당동 하이유헤어 이해린 디자이너의 여성 헤어스타일 안내. 레이어드컷, 빌드펌, 물결펌, 염색, 붙임머리 정보와 지역별 방문 안내를 확인하세요.",
  alternates: {
    canonical: `${SITE}/area`,
  },
  openGraph: {
    title:
      "천안 여성 헤어스타일 안내 | 하이유헤어",
    description:
      "천안 청당동 이해린 디자이너의 여자머리 시술과 방문 안내.",
    url: `${SITE}/area`,
  },
};

export default function AreaPage() {
  return (
    <main className="area-index">
      <style>{`
        .area-index {
          --blue:#193b71;
          --cream:#f7f5f1;
          color:#252a32;
          background:white;
          min-height:100vh;
        }

        .area-index * {
          box-sizing:border-box;
        }

        .area-index a {
          text-decoration:none;
        }

        .area-index-inner {
          width:min(980px,calc(100% - 36px));
          margin:0 auto;
        }

        .area-index-header {
          padding:24px 0;
          border-bottom:1px solid #ece8e2;
        }

        .area-index-logo {
          color:var(--blue);
          font:27px Georgia,serif;
          letter-spacing:2px;
        }

        .area-index-hero {
          text-align:center;
          padding:75px 20px;
          background:var(--cream);
        }

        .area-index-hero span {
          color:var(--blue);
          font-size:11px;
          font-weight:700;
          letter-spacing:2px;
        }

        .area-index-hero h1 {
          font-size:clamp(29px,5vw,46px);
          font-weight:500;
          line-height:1.5;
          margin:20px 0;
        }

        .area-index-hero p {
          color:#777d85;
          font-size:13px;
          line-height:2;
        }

        .area-index-section {
          padding:65px 0;
        }

        .area-index-section h2 {
          font-size:29px;
          font-weight:500;
          margin:0 0 12px;
        }

        .area-index-section p {
          color:#737981;
          font-size:13px;
          line-height:1.9;
          margin-bottom:30px;
        }

        .area-index-group {
          border:1px solid #e9e5df;
          margin-bottom:17px;
          padding:25px;
          border-radius:4px;
        }

        .area-index-group h3 {
          font-size:21px;
          color:var(--blue);
          margin:0 0 9px;
        }

        .area-index-links {
          display:grid;
          grid-template-columns:
            repeat(3,minmax(0,1fr));
          gap:10px;
          margin-top:17px;
        }

        .area-index-links a {
          background:var(--cream);
          color:var(--blue);
          padding:16px 13px;
          font-size:12px;
          font-weight:700;
          line-height:1.7;
          border-radius:3px;
        }

        .area-index-footer {
          text-align:center;
          background:var(--blue);
          color:white;
          padding:55px 18px;
        }

        .area-index-footer p {
          color:#e0e7f1;
          font-size:13px;
          line-height:2;
        }

        .area-index-footer a {
          display:inline-block;
          padding:14px 24px;
          background:white;
          color:var(--blue);
          font-size:12px;
          font-weight:700;
        }

        @media(max-width:650px) {
          .area-index-links {
            grid-template-columns:repeat(2,minmax(0,1fr));
          }

          .area-index-group {
            padding:20px 15px;
          }
        }
      `}</style>

      <header className="area-index-header">
        <div className="area-index-inner">
          <Link href="/" className="area-index-logo">
            HI U HAIR
          </Link>
        </div>
      </header>

      <section className="area-index-hero">
        <span>DESIGNER HAERIN LEE</span>

        <h1>
          천안 여자머리 스타일
          <br />
          지역별 시술 안내
        </h1>

        <p>
          하이유헤어 청당점 이해린 디자이너
          <br />
          레이어드컷 · 펌 · 염색 · 붙임머리
        </p>
      </section>

      <section className="area-index-section">
        <div className="area-index-inner">
          <h2>지역별 헤어스타일 보기</h2>

          <p>
            아래 지역은 방문을 고려하는 고객을 위한
            검색·시술 안내 구분입니다.
            실제 매장은 천안 청당점 한 곳입니다.
          </p>

          {regions.map((region) => (
            <section
              key={region.slug}
              className="area-index-group"
            >
              <h3>{region.name} 여자머리</h3>

              <div className="area-index-links">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={
                      `/area/${region.slug}/${service.slug}`
                    }
                  >
                    {region.name} {service.name} →
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <footer className="area-index-footer">
        <h2>하이유헤어 청당점</h2>

        <p>
          이해린 디자이너
          <br />
          충남 천안시 동남구 청수4로 16,
          2층 201호
        </p>

        <Link href="/hair">
          실제 헤어 포트폴리오 보기 →
        </Link>
      </footer>
    </main>
  );
}
