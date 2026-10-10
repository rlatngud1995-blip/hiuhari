
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
    description: "자연스러운 레이어와 C컬 디자인",
  },
  {
    name: "빌드펌",
    english: "BUILD PERM",
    slug: "build-perm",
    image: "/IMG_1424.jpeg",
    description: "부드러운 컬과 자연스러운 볼륨",
  },
  {
    name: "물결펌",
    english: "WAVE PERM",
    slug: "wave-perm",
    image: "/IMG_1423.jpeg",
    description: "흐르는 듯한 웨이브 스타일",
  },
  {
    name: "여성 염색",
    english: "HAIR COLOR",
    slug: "color",
    image: "/IMG_1445.jpeg",
    description: "개성을 표현하는 다양한 헤어 컬러",
  },
  {
    name: "웨딩염색",
    english: "WEDDING COLOR",
    slug: "wedding-color",
    image: "/IMG_1475.jpeg",
    description: "웨딩촬영과 결혼식을 위한 컬러 상담",
  },
];

export const metadata: Metadata = {
  title: {
    absolute:
      "천안 여자머리·웨딩염색·레이어드컷 | 하이유헤어 청당점",
  },
  description:
    "하이유헤어 청당점 이해린 디자이너의 여성 헤어스타일 안내. 레이어드컷, 빌드펌, 물결펌, 염색, 웨딩염색을 만나보세요.",
  alternates: {
    canonical: `${SITE}/hair`,
  },
};

export default function HairPage() {
  return (
    <main className="hair-list">
      <style>{`
        .hair-list {
          --navy: #193b71;
          background: #fff;
          min-height: 100vh;
          color: #252932;
        }
        .hair-list * { box-sizing: border-box; }
        .hair-list a { text-decoration: none; }
        .hl-wrap {
          width: min(1060px,calc(100% - 36px));
          margin: auto;
        }
        .hl-header {
          padding: 23px 0;
          border-bottom: 1px solid #e9e5df;
        }
        .hl-logo {
          color: var(--navy);
          font: 27px Georgia,serif;
          letter-spacing: 2px;
        }
        .hl-hero {
          text-align: center;
          padding: 80px 20px;
          background: #f7f5f1;
        }
        .hl-eyebrow {
          color: var(--navy);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }
        .hl-hero h1 {
          font-size: clamp(30px,5vw,48px);
          font-weight: 500;
          margin: 20px 0;
        }
        .hl-hero p {
          font-size: 13px;
          line-height: 2;
          color: #777d85;
        }
        .hl-section { padding: 75px 0; }
        .hl-grid {
          display: grid;
          grid-template-columns: repeat(3,minmax(0,1fr));
          gap: 27px 17px;
        }
        .hl-image {
          position: relative;
          aspect-ratio: 4/5;
          background: #e8e3df;
          border-radius: 4px;
          overflow: hidden;
        }
        .hl-image img { object-fit: cover; }
        .hl-card small {
          display: block;
          color: var(--navy);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-top: 16px;
        }
        .hl-card h2 {
          font-size: 20px;
          margin: 10px 0;
        }
        .hl-card p {
          color: #797e86;
          font-size: 12px;
          line-height: 1.8;
        }
        .hl-card a {
          color: var(--navy);
          font-size: 12px;
          font-weight: 700;
        }
        .hl-footer {
          text-align: center;
          padding: 65px 20px;
          background: var(--navy);
          color: white;
        }
        .hl-footer p {
          color: #dce5ef;
          font-size: 13px;
          line-height: 2;
        }
        @media(max-width:700px) {
          .hl-grid {
            grid-template-columns: repeat(2,minmax(0,1fr));
            gap: 24px 12px;
          }
          .hl-card h2 { font-size: 16px; }
          .hl-section { padding: 55px 0; }
        }
      `}</style>

      <header className="hl-header">
        <div className="hl-wrap">
          <Link href="/" className="hl-logo">
            HI U HAIR
          </Link>
        </div>
      </header>

      <section className="hl-hero">
        <span className="hl-eyebrow">
          HAIR DESIGN COLLECTION
        </span>
        <h1>Hair Services</h1>
        <p>
          하이유헤어 청당점 이해린 디자이너
          <br />
          나에게 어울리는 헤어스타일을 만나보세요.
        </p>
      </section>

      <section className="hl-section">
        <div className="hl-wrap">
          <div className="hl-grid">
            {categories.map(item => (
              <article className="hl-card" key={item.slug}>
                <Link href={`/hair/${item.slug}`}>
                  <div className="hl-image">
                    <Image
                      src={item.image}
                      alt={`${item.name} 대표 이미지`}
                      fill
                      sizes="(max-width:700px) 50vw, 33vw"
                    />
                  </div>
                </Link>
                <small>{item.english}</small>
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

      <footer className="hl-footer">
        <h2>하이유헤어 청당점</h2>
        <p>이해린 디자이너 · 천안 청당동 여자머리</p>
        <Link
          href="/"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          메인 홈페이지 돌아가기 →
        </Link>
      </footer>
    </main>
  );
}
