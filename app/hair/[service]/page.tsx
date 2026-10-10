
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE = "https://www.hiuhair.com";

const BOOKING =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&theme=place";

const INSTAGRAM =
  "https://www.instagram.com/hiu_haerin/";

const PHONE = "01023277653";

const hairServices = {
  "layered-cut": {
    name: "레이어드컷",
    english: "LAYERED CUT",
    title: "천안 청당동 레이어드컷",
    description:
      "하이유헤어 청당점 이해린 디자이너의 여성 레이어드컷 안내. 모발의 길이와 얼굴형, 원하는 분위기를 고려한 헤어 디자인을 만나보세요.",
    intro:
      "가벼운 움직임과 자연스러운 볼륨으로 나만의 분위기를 완성하는 레이어드컷.",
    details:
      "레이어드컷은 모발의 길이에 층을 주어 움직임과 볼륨을 표현하는 스타일입니다. 얼굴형과 모발의 양, 평소 손질 방법을 고려하여 디자인을 상담합니다.",
    points: [
      "얼굴형을 고려한 레이어드 디자인",
      "하이레이어드컷 및 C컬 스타일 상담",
      "모발의 양과 길이에 맞춘 커트",
      "일상에서의 손질 방법 안내",
    ],
    images: [
      {
        src: "/IMG_1427.jpeg",
        label: "하이레이어드컷 / C컬",
      },
      {
        src: "/IMG_1444.jpeg",
        label: "레이어드 빌드펌",
      },
    ],
  },

  "build-perm": {
    name: "빌드펌",
    english: "BUILD PERM",
    title: "천안 청당동 빌드펌",
    description:
      "하이유헤어 청당점 이해린 디자이너의 여성 빌드펌 안내. 자연스러운 볼륨과 부드러운 컬, 레이어드 빌드펌 스타일을 상담해 보세요.",
    intro:
      "섬세한 볼륨과 부드러운 컬로 우아한 분위기를 표현하는 빌드펌.",
    details:
      "빌드펌은 모발에 자연스러운 컬과 볼륨감을 더하는 펌 스타일입니다. 모발 상태와 길이, 원하는 컬의 형태에 따라 어울리는 디자인을 함께 고민합니다.",
    points: [
      "자연스러운 볼륨 디자인",
      "레이어드 빌드펌 스타일 상담",
      "모발 상태에 맞춘 펌 상담",
      "컬 유지와 홈케어 방법 안내",
    ],
    images: [
      {
        src: "/IMG_1424.jpeg",
        label: "빌드펌 / 매트브라운",
      },
      {
        src: "/IMG_1444.jpeg",
        label: "레이어드 빌드펌",
      },
    ],
  },

  "wave-perm": {
    name: "물결펌",
    english: "WAVE PERM",
    title: "천안 청당동 물결펌",
    description:
      "하이유헤어 청당점 이해린 디자이너의 여성 물결펌 안내. 부드럽게 흐르는 웨이브와 자연스러운 볼륨의 펌 스타일을 만나보세요.",
    intro:
      "흐르는 듯한 웨이브로 자연스럽고 로맨틱한 분위기를 표현하는 물결펌.",
    details:
      "물결펌은 모발 전체에 부드러운 웨이브의 흐름을 표현하는 스타일입니다. 원하는 웨이브의 굵기와 모발 길이를 고려하여 시술 가능 여부와 디자인을 상담합니다.",
    points: [
      "자연스러운 물결 웨이브",
      "모발 길이에 맞는 컬 디자인",
      "밀크브라운 등 컬러 조합 상담",
      "시술 후 손질과 관리 안내",
    ],
    images: [
      {
        src: "/IMG_1423.jpeg",
        label: "물결펌 / 밀크브라운",
      },
      {
        src: "/IMG_1424.jpeg",
        label: "빌드펌 / 매트브라운",
      },
    ],
  },

  color: {
    name: "여성 염색",
    english: "HAIR COLOR",
    title: "천안 청당동 여성 염색",
    description:
      "하이유헤어 청당점 이해린 디자이너의 여성 염색 안내. 매트브라운, 베이지브라운, 루비레드, 블루, 베이비핑크 컬러를 만나보세요.",
    intro:
      "피부톤과 평소 스타일에 어울리는 컬러로 완성하는 새로운 분위기.",
    details:
      "헤어 컬러는 작은 색감 차이로도 인상을 다르게 표현할 수 있습니다. 현재 모발 색상과 손상 상태, 탈색 이력 등을 확인한 뒤 원하는 컬러와 시술 방법을 상담합니다.",
    points: [
      "매트브라운 / 베이지브라운",
      "루비레드 / 블루 컬러",
      "베이비핑크 컬러",
      "탈색 이력과 모발 상태에 따른 상담",
    ],
    images: [
      {
        src: "/IMG_1433.jpeg",
        label: "루비레드컬러",
      },
      {
        src: "/IMG_1445.jpeg",
        label: "블루염색",
      },
      {
        src: "/IMG_1446.jpeg",
        label: "베이비핑크염색",
      },
      {
        src: "/IMG_1425.jpeg",
        label: "베이지브라운",
      },
    ],
  },

  extensions: {
    name: "붙임머리",
    english: "HAIR EXTENSIONS",
    title: "천안 청당동 붙임머리",
    description:
      "하이유헤어 청당점 이해린 디자이너의 붙임머리 상담 안내. 원하는 길이와 볼륨, 컬러를 고려한 여성 헤어스타일을 상담해 보세요.",
    intro:
      "원하는 길이와 볼륨을 더해 새로운 헤어스타일을 완성하는 붙임머리.",
    details:
      "붙임머리는 기존 모발의 길이와 볼륨을 보완하고 다양한 분위기를 표현할 수 있는 방법입니다. 현재 모발 상태와 원하는 스타일, 관리 방법을 고려하여 상담합니다.",
    points: [
      "원하는 길이와 볼륨 상담",
      "자연스러운 스타일 연결 상담",
      "헤어 컬러 조합 상담",
      "붙임머리 관리 방법 안내",
    ],
    images: [
      {
        src: "/IMG_1446.jpeg",
        label: "베이비핑크염색 / 붙임머리",
      },
    ],
  },
};

type ServiceKey = keyof typeof hairServices;

type PageProps = {
  params: Promise<{
    service: string;
  }>;
};

function getService(slug: string) {
  if (
    Object.prototype.hasOwnProperty.call(
      hairServices,
      slug
    )
  ) {
    return hairServices[slug as ServiceKey];
  }

  return null;
}

/* =====================================
   검색엔진용 정적 경로 생성
===================================== */

export function generateStaticParams() {
  return Object.keys(hairServices).map(
    (service) => ({
      service,
    })
  );
}

export const dynamicParams = false;

/* =====================================
   카테고리별 SEO 자동 생성
===================================== */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service } = await params;
  const item = getService(service);

  if (!item) {
    return {
      title: "페이지를 찾을 수 없습니다",
    };
  }

  const url = `${SITE}/hair/${service}`;

  return {
    title: {
      absolute:
        `${item.title} | 하이유헤어 이해린 디자이너`,
    },

    description: item.description,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: "하이유헤어 청당점",
      title:
        `${item.title} | 하이유헤어 청당점`,
      description: item.description,
      url,
      images: [
        {
          url: item.images[0].src,
          alt: item.images[0].label,
        },
      ],
    },
  };
}

/* =====================================
   시술별 상세 페이지
===================================== */

export default async function HairServicePage({
  params,
}: PageProps) {
  const { service } = await params;
  const item = getService(service);

  if (!item) {
    notFound();
  }

  const otherServices = Object.entries(
    hairServices
  ).filter(([slug]) => slug !== service);

  return (
    <main className="hair-page">
      <style>{`
        .hair-page {
          --blue: #193b71;
          --cream: #f7f5f1;
          --ink: #24272d;
          --muted: #787c84;
          color: var(--ink);
          background: #fff;
          min-height: 100vh;
        }

        .hair-page * {
          box-sizing: border-box;
        }

        .hair-container {
          width: min(1080px, calc(100% - 36px));
          margin: 0 auto;
        }

        .hair-page a {
          text-decoration: none;
        }

        .hair-header {
          background: #fff;
          border-bottom: 1px solid #ece8e2;
          padding: 21px 0;
        }

        .hair-brand {
          font-family: Georgia, serif;
          font-size: 25px;
          color: var(--blue);
          letter-spacing: 2px;
          font-weight: 400;
        }

        .hair-header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .hair-header-link {
          font-size: 12px;
          color: var(--blue);
          font-weight: 600;
        }

        .hair-hero {
          background: var(--cream);
          padding: 88px 20px;
          text-align: center;
        }

        .hair-eyebrow {
          font-size: 11px;
          letter-spacing: 2px;
          color: var(--blue);
          font-weight: 700;
        }

        .hair-hero h1 {
          font-size: clamp(32px, 6vw, 52px);
          margin: 25px 0 20px;
          font-weight: 500;
          letter-spacing: -1.5px;
        }

        .hair-hero p {
          color: var(--muted);
          font-size: 14px;
          line-height: 2;
          max-width: 650px;
          margin: auto;
          word-break: keep-all;
        }

        .hair-section {
          padding: 78px 0;
        }

        .hair-heading {
          text-align: center;
          margin-bottom: 34px;
        }

        .hair-heading h2 {
          font-size: clamp(27px, 4vw, 38px);
          font-weight: 500;
          margin: 12px 0;
        }

        .hair-heading p {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.8;
        }

        .hair-gallery {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 17px;
          max-width: 850px;
          margin: 0 auto;
        }

        .hair-photo {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #e8e4de;
          border-radius: 4px;
        }

        .hair-photo img {
          object-fit: cover;
        }

        .hair-photo-card h3 {
          font-size: 15px;
          font-weight: 600;
          margin: 15px 0 0;
          line-height: 1.7;
        }

        .hair-info {
          background: var(--cream);
        }

        .hair-description {
          max-width: 800px;
          margin: 0 auto 28px;
          text-align: center;
          font-size: 14px;
          line-height: 2.1;
          color: #626771;
          word-break: keep-all;
        }

        .hair-points {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 12px;
          max-width: 800px;
          margin: 0 auto;
        }

        .hair-point {
          background: white;
          border: 1px solid #e9e5de;
          padding: 19px;
          color: #4e535b;
          font-size: 13px;
          line-height: 1.7;
        }

        .hair-point span {
          color: var(--blue);
          margin-right: 8px;
        }

        .hair-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 11px;
          margin-top: 30px;
        }

        .hair-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-height: 49px;
          padding: 13px 24px;
          border: 1px solid var(--blue);
          font-size: 12px;
          font-weight: 700;
          color: var(--blue);
          border-radius: 3px;
        }

        .hair-button-primary {
          color: white;
          background: var(--blue);
        }

        .hair-other-grid {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 11px;
          max-width: 850px;
          margin: 0 auto;
        }

        .hair-other-link {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          padding: 20px;
          border: 1px solid #e8e4de;
          font-size: 14px;
          font-weight: 600;
          color: var(--blue);
        }

        .hair-booking {
          text-align: center;
          padding: 74px 20px;
          background: var(--blue);
          color: white;
        }

        .hair-booking h2 {
          font-size: clamp(27px, 4vw, 40px);
          font-weight: 400;
          margin: 15px 0;
        }

        .hair-booking p {
          color: #dbe4f1;
          font-size: 13px;
          line-height: 2;
        }

        .hair-booking .hair-button {
          border-color: #fff;
          background: white;
          color: var(--blue);
        }

        .hair-footer {
          padding: 42px 15px 80px;
          text-align: center;
          background: #202837;
          color: #fff;
        }

        .hair-footer p {
          font-size: 11px;
          color: #cbd0d9;
          line-height: 2;
        }

        @media(max-width:600px) {
          .hair-hero {
            padding: 68px 18px;
          }

          .hair-section {
            padding: 58px 0;
          }

          .hair-gallery,
          .hair-points,
          .hair-other-grid {
            gap: 10px;
          }

          .hair-photo-card h3 {
            font-size: 12px;
          }

          .hair-point {
            padding: 15px;
            font-size: 12px;
          }

          .hair-other-link {
            padding: 15px;
            font-size: 12px;
          }
        }
      `}</style>

      <header className="hair-header">
        <div className="hair-container hair-header-inner">
          <Link href="/" className="hair-brand">
            HI U HAIR
          </Link>

          <Link href="/hair" className="hair-header-link">
            전체 시술 보기 →
          </Link>
        </div>
      </header>

      <section className="hair-hero">
        <span className="hair-eyebrow">
          HI U HAIR · CHEONGDANG
        </span>

        <h1>{item.title}</h1>

        <p>{item.intro}</p>

        <div className="hair-actions">
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="hair-button hair-button-primary"
          >
            이해린 디자이너 네이버 예약 ↗
          </a>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="hair-button"
          >
            인스타그램 보기 ↗
          </a>
        </div>
      </section>

      <section className="hair-section">
        <div className="hair-container">
          <div className="hair-heading">
            <span className="hair-eyebrow">
              {item.english}
            </span>

            <h2>Hair Collection</h2>

            <p>
              하이유헤어 청당점 헤어스타일 컬렉션
            </p>
          </div>

          <div className="hair-gallery">
            {item.images.map((image) => (
              <article
                key={image.src}
                className="hair-photo-card"
              >
                <div className="hair-photo">
                  <Image
                    src={image.src}
                    alt={image.label}
                    fill
                    sizes="(max-width:600px) 50vw, 400px"
                  />
                </div>

                <h3>{image.label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hair-section hair-info">
        <div className="hair-container">
          <div className="hair-heading">
            <span className="hair-eyebrow">
              PERSONAL HAIR DESIGN
            </span>

            <h2>{item.name} 스타일 안내</h2>
          </div>

          <p className="hair-description">
            {item.details}
          </p>

          <div className="hair-points">
            {item.points.map((point) => (
              <div key={point} className="hair-point">
                <span>✦</span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hair-section">
        <div className="hair-container">
          <div className="hair-heading">
            <span className="hair-eyebrow">
              DISCOVER MORE STYLES
            </span>

            <h2>다른 헤어스타일 보기</h2>
          </div>

          <div className="hair-other-grid">
            {otherServices.map(([slug, other]) => (
              <Link
                href={`/hair/${slug}`}
                key={slug}
                className="hair-other-link"
              >
                {other.name}
                <span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hair-booking">
        <span className="hair-eyebrow" style={{ color: "#dbe4f1" }}>
          DESIGNER HAERIN LEE
        </span>

        <h2>당신만의 스타일을 만나보세요.</h2>

        <p>
          하이유헤어 청당점 이해린 디자이너
          <br />
          상담 후 원하는 스타일을 예약해 보세요.
        </p>

        <div className="hair-actions">
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="hair-button"
          >
            네이버 예약하기 ↗
          </a>

          <a
            href={`sms:${PHONE}`}
            className="hair-button"
          >
            문자 상담
          </a>
        </div>
      </section>

      <footer className="hair-footer">
        <Link href="/" className="hair-brand" style={{ color: "#fff" }}>
          HI U HAIR
        </Link>

        <p>
          하이유헤어 청당점 · 이해린 디자이너
          <br />
          충남 천안시 동남구 청수4로 16, 2층 201호
          <br />
          010-2327-7653
        </p>
      </footer>
    </main>
  );
}
