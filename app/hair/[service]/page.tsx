
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";

const SITE = "https://www.hiuhair.com";
const BOOKING =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&theme=place";
const INSTAGRAM = "https://www.instagram.com/hiu_haerin/";

const services = {
  "layered-cut": {
    name: "레이어드컷",
    english: "LAYERED CUT",
    title: "천안 청당동 레이어드컷",
    description: "천안 하이유헤어 청당점 이해린 디자이너의 여성 레이어드컷 안내. 얼굴형과 모발 길이에 어울리는 디자인을 상담합니다.",
    intro: "가벼운 움직임과 자연스러운 볼륨을 더하는 레이어드컷.",
    detail: "모발 길이와 양에 따라 층의 높이를 조절하고 원하는 분위기를 상담합니다. 하이레이어드컷과 C컬 스타일도 함께 확인해 보세요.",
    photos: [
      { src: "/IMG_1427.jpeg", alt: "하이레이어드컷 C컬" },
      { src: "/IMG_1444.jpeg", alt: "레이어드 빌드펌" },
    ],
    points: ["얼굴형을 고려한 상담", "레이어드 층 디자인", "C컬 스타일 상담", "일상 손질 방법 안내"],
  },
  "build-perm": {
    name: "빌드펌",
    english: "BUILD PERM",
    title: "천안 청당동 빌드펌",
    description: "천안 하이유헤어 청당점 이해린 디자이너의 빌드펌 안내. 자연스러운 볼륨과 레이어드 빌드펌 스타일을 만나보세요.",
    intro: "부드러운 컬과 자연스러운 볼륨을 표현하는 빌드펌.",
    detail: "모발 상태와 원하는 컬의 굵기, 레이어드컷과의 조화를 고려하여 빌드펌 스타일을 상담합니다.",
    photos: [
      { src: "/IMG_1424.jpeg", alt: "빌드펌 매트브라운" },
      { src: "/IMG_1444.jpeg", alt: "레이어드 빌드펌" },
    ],
    points: ["자연스러운 볼륨", "레이어드 빌드펌", "모발 상태 확인", "컬 관리 안내"],
  },
  "wave-perm": {
    name: "물결펌",
    english: "WAVE PERM",
    title: "천안 청당동 물결펌",
    description: "천안 하이유헤어 청당점 이해린 디자이너의 여성 물결펌. 흐르는 듯한 웨이브와 자연스러운 컬 스타일을 소개합니다.",
    intro: "부드럽게 흐르는 웨이브로 표현하는 물결펌.",
    detail: "모발 길이와 손상 상태를 확인하고 웨이브의 굵기와 원하는 분위기에 맞춰 물결펌 스타일을 상담합니다.",
    photos: [
      { src: "/IMG_1423.jpeg", alt: "물결펌 밀크브라운" },
      { src: "/IMG_1424.jpeg", alt: "빌드펌 매트브라운" },
    ],
    points: ["자연스러운 웨이브", "모발 길이 고려", "컬러 조합 상담", "스타일 관리 안내"],
  },
  color: {
    name: "여성 염색",
    english: "HAIR COLOR",
    title: "천안 청당동 여성 염색",
    description: "천안 하이유헤어 청당점 이해린 디자이너의 여성 염색. 베이지브라운, 루비레드, 블루, 베이비핑크 등 다양한 컬러를 소개합니다.",
    intro: "나만의 분위기를 색감으로 표현하는 헤어 컬러.",
    detail: "현재 모발 상태와 이전 염색·탈색 이력, 원하는 피부톤 조화를 고려해 헤어 컬러를 상담합니다.",
    photos: [
      { src: "/IMG_1433.jpeg", alt: "루비레드 염색" },
      { src: "/IMG_1445.jpeg", alt: "블루 염색" },
      { src: "/IMG_1446.jpeg", alt: "베이비핑크 염색" },
      { src: "/IMG_1425.jpeg", alt: "베이지브라운 염색" },
    ],
    points: ["브라운 계열", "루비레드 컬러", "블루·핑크 컬러", "염색 이력 상담"],
  },
  "wedding-color": {
    name: "웨딩염색",
    english: "WEDDING HAIR COLOR",
    title: "천안 청당동 웨딩염색",
    description: "천안 하이유헤어 청당점 이해린 디자이너의 웨딩염색 상담. 웨딩촬영과 결혼식 전 피부톤과 웨딩 분위기에 어울리는 컬러를 안내합니다.",
    intro: "특별한 날의 분위기를 더욱 아름답게 완성하는 웨딩 헤어 컬러.",
    detail: "웨딩촬영이나 결혼식을 앞두고 있다면 드레스 분위기, 피부톤, 기존 모발 색상과 시술 일정을 고려해 헤어 컬러를 상담해 보세요. 대표 이미지는 웨딩 분위기를 참고하기 위한 사진이며 실제 염색 전후 결과를 의미하지 않습니다.",
    photos: [
      { src: "/IMG_1475.jpeg", alt: "웨딩 헤어 컬러 대표 이미지" },
      { src: "/IMG_1425.jpeg", alt: "베이지브라운 컬러 참고 사진" },
      { src: "/IMG_1424.jpeg", alt: "매트브라운 컬러 참고 사진" },
    ],
    points: [
      "웨딩촬영 전 헤어 컬러 상담",
      "결혼식 일정 고려",
      "드레스 분위기와 피부톤 상담",
      "베이지브라운·매트브라운 컬러 참고",
    ],
  },
} as const;

type ServiceKey = keyof typeof services;
type Props = { params: Promise<{ service: string }> };

function getService(key: string) {
  return Object.prototype.hasOwnProperty.call(services, key)
    ? services[key as ServiceKey]
    : null;
}

export function generateStaticParams() {
  return [...Object.keys(services), "extensions"].map(
    service => ({ service })
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { service } = await params;

  if (service === "extensions") {
    return {
      robots: { index: false, follow: true },
    };
  }

  const item = getService(service);
  if (!item) return {};

  const url = `${SITE}/hair/${service}`;
  const title = `${item.title} | 하이유헤어 이해린 디자이너`;

  return {
    title: { absolute: title },
    description: item.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: "하이유헤어 청당점",
      title,
      description: item.description,
      url,
      images: [
        { url: item.photos[0].src, alt: item.photos[0].alt },
      ],
    },
  };
}

export default async function HairServicePage({
  params,
}: Props) {
  const { service } = await params;

  if (service === "extensions") {
    permanentRedirect("/hair/wedding-color");
  }

  const item = getService(service);
  if (!item) notFound();

  const others = Object.entries(services).filter(
    ([slug]) => slug !== service
  );

  return (
    <main className="hair-detail">
      <style>{`
        .hair-detail {
          --navy: #193b71;
          --cream: #f7f5f1;
          --muted: #747981;
          color: #252932;
          background: white;
          min-height: 100vh;
        }
        .hair-detail * { box-sizing: border-box; }
        .hair-detail a { text-decoration: none; }
        .hd-wrap {
          width: min(1050px, calc(100% - 36px));
          margin: auto;
        }
        .hd-header {
          border-bottom: 1px solid #e8e4df;
          padding: 23px 0;
        }
        .hd-header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        .hd-logo {
          font: 27px Georgia, serif;
          color: var(--navy);
          letter-spacing: 2px;
        }
        .hd-header-link {
          font-size: 12px;
          font-weight: 700;
          color: var(--navy);
        }
        .hd-hero {
          background: var(--cream);
          padding: 78px 18px;
          text-align: center;
        }
        .hd-eyebrow {
          color: var(--navy);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }
        .hd-hero h1 {
          font-size: clamp(30px, 5vw, 49px);
          font-weight: 500;
          line-height: 1.5;
          margin: 24px 0 18px;
          word-break: keep-all;
        }
        .hd-hero p {
          color: var(--muted);
          font-size: 14px;
          line-height: 2;
          max-width: 680px;
          margin: auto;
          word-break: keep-all;
        }
        .hd-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }
        .hd-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-height: 48px;
          padding: 13px 22px;
          border: 1px solid var(--navy);
          color: var(--navy);
          border-radius: 3px;
          font-size: 12px;
          font-weight: 700;
        }
        .hd-btn-primary {
          background: var(--navy);
          color: white;
        }
        .hd-section { padding: 76px 0; }
        .hd-section h2 {
          font-size: clamp(28px, 4vw, 39px);
          font-weight: 500;
          text-align: center;
          margin: 15px 0 30px;
        }
        .hd-center { text-align: center; }
        .hd-gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 17px;
          max-width: 850px;
          margin: auto;
        }
        .hd-photo {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 4px;
          background: #e9e4df;
        }
        .hd-photo img { object-fit: cover; }
        .hd-photo-name {
          font-size: 13px;
          font-weight: 600;
          margin: 14px 0;
        }
        .hd-cream { background: var(--cream); }
        .hd-description {
          max-width: 780px;
          margin: 0 auto 30px;
          color: var(--muted);
          font-size: 14px;
          line-height: 2.1;
          text-align: center;
          word-break: keep-all;
        }
        .hd-points, .hd-other {
          display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          gap: 12px;
          max-width: 850px;
          margin: auto;
        }
        .hd-point, .hd-other a {
          background: #fff;
          border: 1px solid #e7e3dc;
          padding: 19px;
          font-size: 13px;
          line-height: 1.7;
        }
        .hd-point b { color: var(--navy); }
        .hd-other a {
          color: var(--navy);
          font-weight: 700;
          display: flex;
          justify-content: space-between;
        }
        .hd-booking {
          background: var(--navy);
          color: #fff;
          text-align: center;
          padding: 70px 20px;
        }
        .hd-booking h2 {
          font-size: clamp(28px,4vw,40px);
          font-weight: 400;
        }
        .hd-booking p {
          color: #e0e7f0;
          font-size: 13px;
          line-height: 2;
        }
        .hd-booking .hd-btn {
          background: white;
          color: var(--navy);
          border-color: white;
        }
        .hd-footer {
          text-align: center;
          padding: 45px 20px;
          color: #ccd4df;
          background: #202837;
          font-size: 12px;
          line-height: 2;
        }
        @media(max-width:600px) {
          .hd-section { padding: 56px 0; }
          .hd-hero { padding: 61px 17px; }
          .hd-gallery, .hd-points, .hd-other { gap: 10px; }
          .hd-point, .hd-other a { padding: 14px; font-size: 12px; }
        }
      `}</style>

      <header className="hd-header">
        <div className="hd-wrap hd-header-inner">
          <Link href="/" className="hd-logo">HI U HAIR</Link>
          <Link href="/hair" className="hd-header-link">
            전체 시술 보기 →
          </Link>
        </div>
      </header>

      <section className="hd-hero">
        <span className="hd-eyebrow">
          HI U HAIR · DESIGNER HAERIN LEE
        </span>
        <h1>{item.title}</h1>
        <p>{item.intro}</p>

        <div className="hd-actions">
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="hd-btn hd-btn-primary"
          >
            이해린 디자이너 네이버 예약 ↗
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="hd-btn"
          >
            인스타그램 보기 ↗
          </a>
        </div>
      </section>

      <section className="hd-section">
        <div className="hd-wrap">
          <div className="hd-center">
            <span className="hd-eyebrow">{item.english}</span>
          </div>
          <h2>Hair Collection</h2>

          <div className="hd-gallery">
            {item.photos.map(photo => (
              <article key={photo.src}>
                <div className="hd-photo">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width:600px) 50vw, 420px"
                  />
                </div>
                <h3 className="hd-photo-name">{photo.alt}</h3>
              </article>
            ))}
          </div>

          {service === "wedding-color" && (
            <p className="hd-description" style={{ marginTop: 26 }}>
              웨딩 대표 이미지는 분위기 참고용이며,
              염색 시술 전후 사진이 아닙니다.
            </p>
          )}
        </div>
      </section>

      <section className="hd-section hd-cream">
        <div className="hd-wrap">
          <div className="hd-center">
            <span className="hd-eyebrow">
              PERSONAL HAIR DESIGN
            </span>
          </div>
          <h2>{item.name} 스타일 안내</h2>
          <p className="hd-description">{item.detail}</p>

          <div className="hd-points">
            {item.points.map(point => (
              <div className="hd-point" key={point}>
                <b>✦</b> {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hd-section">
        <div className="hd-wrap">
          <h2>다른 헤어스타일 보기</h2>
          <div className="hd-other">
            {others.map(([slug, other]) => (
              <Link href={`/hair/${slug}`} key={slug}>
                {other.name} <span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hd-booking">
        <h2>당신의 분위기를 디자인하다.</h2>
        <p>
          하이유헤어 청당점 · 이해린 디자이너
          <br />
          충남 천안시 동남구 청수4로 16, 2층 201호
        </p>
        <div className="hd-actions">
          <a
            className="hd-btn"
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
          >
            네이버 예약하기 ↗
          </a>
        </div>
      </section>

      <footer className="hd-footer">
        HI U HAIR · CHEONGDANG
        <br />
        이해린 디자이너 · 010-2327-7653
      </footer>
    </main>
  );
}
