
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE = "https://www.hiuhair.com";

const categories = [
  {
    name: "레이어드컷",
    english: "LAYERED CUT",
    slug: "layered-cut",
    image: "/IMG_1427.jpeg",
    description:
      "자연스러운 레이어와 C컬 디자인",
  },
  {
    name: "빌드펌",
    english: "BUILD PERM",
    slug: "build-perm",
    image: "/IMG_1424.jpeg",
    description:
      "볼륨과 부드러운 컬의 조화",
  },
  {
    name: "물결펌",
    english: "WAVE PERM",
    slug: "wave-perm",
    image: "/IMG_1423.jpeg",
    description:
      "흐르는 듯한 웨이브 디자인",
  },
  {
    name: "여성 염색",
    english: "HAIR COLOR",
    slug: "color",
    image: "/IMG_1445.jpeg",
    description:
      "개성을 표현하는 다양한 헤어 컬러",
  },
  {
    name: "붙임머리",
    english: "HAIR EXTENSIONS",
    slug: "extensions",
    image: "/IMG_1446.jpeg",
    description:
      "길이와 볼륨을 더하는 스타일",
  },
];

export const metadata: Metadata = {
  title: {
    absolute:
      "천안 청당동 헤어 시술 안내 | 하이유헤어 이해린 디자이너",
  },

  description:
    "하이유헤어 청당점 이해린 디자이너의 여성 헤어스타일 안내. 레이어드컷, 빌드펌, 물결펌, 염색, 붙임머리 스타일을 확인하고 예약해 보세요.",

  alternates: {
    canonical: `${SITE}/hair`,
  },

  openGraph: {
    title: "하이유헤어 청당점 헤어스타일 안내",
    description:
      "천안 청당동 이해린 디자이너의 여성 커트, 펌, 염색, 붙임머리 스타일 안내.",
    url: `${SITE}/hair`,
  },
};

export default function HairPage() {
  return (
    <main className="hair-list-page">
      <style>{`
        .hair-list-page {
          background: #fff;
          color: #24272d;
          min-height: 100vh;
        }

        .hair-list-page * {
          box-sizing: border-box;
        }

        .hair-list-container {
          width: min(1050px, calc(100% - 36px));
          margin: auto;
        }

        .hair-list-header {
          border-bottom: 1px solid #ece7e0;
          padding: 23px 0;
        }

        .hair-list-logo {
          font: 27px Georgia, serif;
          color: #193b71;
          letter-spacing: 2px;
        }

        .hair-list-hero {
          text-align: center;
          padding: 80px 20px;
          background: #f7f5f1;
        }

        .hair-list-label {
          color: #193b71;
          letter-spacing: 2px;
          font-size: 11px;
          font-weight: 700;
        }

        .hair-list-hero h1 {
          font-size: clamp(30px,5vw,48px);
          font-weight: 500;
          margin: 20px 0;
        }

        .hair-list-hero p {
          color: #777b83;
          font-size: 13px;
          line-height: 2;
        }

        .hair-list-section {
          padding: 70px 0;
        }

        .hair-list-grid {
          display: grid;
          grid-template-columns:
            repeat(3,minmax(0,1fr));
          gap: 25px 17px;
        }

        .hair-list-image {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #ece8e3;
          border-radius: 4px;
        }

        .hair-list-image img {
          object-fit: cover;
        }

        .hair-list-card h2 {
          font-size: 20px;
          margin: 11px 0;
        }

        .hair-list-card p {
          color: #797c83;
          font-size: 12px;
          line-height: 1.8;
          margin: 0 0 12px;
        }

        .hair-list-card a {
          text-decoration: none;
          color: #193b71;
          font-size: 12px;
          font-weight: 700;
        }

        .hair-list-booking {
          text-align: center;
          padding: 65px 20px;
          background: #193b71;
          color: white;
        }

        .hair-list-booking a {
          display: inline-block;
          margin-top: 19px;
          padding: 16px 25px;
          background: white;
          color: #193b71;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
        }

        @media(max-width:800px) {
          .hair-list-grid {
            grid-template-columns:
              repeat(2,minmax(0,1fr));
            gap: 23px 12px;
          }

          .hair-list-card h2 {
            font-size: 16px;
          }
        }
      `}</style>

      <header className="hair-list-header">
        <div className="hair-list-container">
          <Link href="/" className="hair-list-logo">
            HI U HAIR
          </Link>
        </div>
      </header>

      <section className="hair-list-hero">
        <span className="hair-list-label">
          HAIR DESIGN COLLECTION
        </span>

        <h1>Hair Services</h1>

        <p>
          하이유헤어 청당점 이해린 디자이너
          <br />
          나에게 어울리는 헤어스타일을 만나보세요.
        </p>
      </section>

      <section className="hair-list-section">
        <div className="hair-list-container">
          <div className="hair-list-grid">
            {categories.map((item) => (
              <article
                className="hair-list-card"
                key={item.slug}
              >
                <Link href={`/hair/${item.slug}`}>
                  <div className="hair-list-image">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width:800px) 50vw, 33vw"
                    />
                  </div>
                </Link>

                <p style={{
                  color: "#193b71",
                  marginTop: 16,
                  fontWeight: 700,
                }}>
                  {item.english}
                </p>

                <h2>{item.name}</h2>
                <p>{item.description}</p>

                <Link href={`/hair/${item.slug}`}>
                  자세히 보기 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hair-list-booking">
        <h2>당신만의 아름다움을 디자인합니다.</h2>

        <p>HI U HAIR · DESIGNER HAERIN LEE</p>

        <a
          href="https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&theme=place"
          target="_blank"
          rel="noopener noreferrer"
        >
          네이버 예약하기 ↗
        </a>
      </section>
    </main>
  );
}
