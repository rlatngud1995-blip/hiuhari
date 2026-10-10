
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE = "https://www.hiuhair.com";

const BOOKING =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&theme=place";

const INSTAGRAM =
  "https://www.instagram.com/hiu_haerin/";

const ADDRESS =
  "충남 천안시 동남구 청수4로 16, 2층 201호";

const PHONE = "01023277653";

/* =====================================
   검색 대상 지역 6개

   매장은 청당점 한 곳입니다.
===================================== */

const regions = {
  cheonan: {
    name: "천안",
    location:
      "천안에서 여자머리 스타일을 고민하고 있다면",
    guide:
      "하이유헤어 청당점은 천안시 동남구 청수4로에 위치해 있습니다.",
  },
  cheongdang: {
    name: "청당동",
    location:
      "청당동에서 여자머리 시술을 알아보고 있다면",
    guide:
      "하이유헤어 청당점은 청당동 인근 청수4로에 위치한 미용실입니다.",
  },
  sinbang: {
    name: "신방동",
    location:
      "신방동에서 여자머리 스타일을 알아보고 있다면",
    guide:
      "신방동에서 방문을 고려하는 고객님께 청당동 하이유헤어의 스타일과 예약 정보를 안내합니다.",
  },
  ssangyong: {
    name: "쌍용동",
    location:
      "쌍용동에서 여성 헤어스타일을 찾고 있다면",
    guide:
      "쌍용동 고객님도 참고하실 수 있도록 하이유헤어 청당점의 시술 포트폴리오를 소개합니다.",
  },
  buldang: {
    name: "불당동",
    location:
      "불당동에서 여성 헤어스타일을 알아보고 있다면",
    guide:
      "불당동에서 청당점 방문을 고려하실 때 확인할 수 있는 헤어스타일 정보와 예약 방법을 안내합니다.",
  },
  dujeong: {
    name: "두정동",
    location:
      "두정동에서 여자머리 디자인을 알아보고 있다면",
    guide:
      "두정동에서 방문을 고려하는 분들을 위해 청당동 하이유헤어의 스타일 안내를 준비했습니다.",
  },
};

/* =====================================
   여성 헤어 시술 7개
===================================== */

const services = {
  "womens-hair": {
    name: "여자머리 전문",
    keyword: "여자머리 전문",
    intro:
      "나에게 어울리는 여자머리 스타일을 고민하는 고객님을 위한 안내입니다.",
    detail:
      "평소 선호하는 분위기, 모발 길이, 얼굴형, 손질 방법을 함께 고려해 커트와 펌, 염색 등 적합한 스타일을 상담합니다.",
    image: "/IMG_1427.jpeg",
    related: "/hair",
    tips: [
      "평소 원하는 스타일 사진 준비",
      "모발 길이와 손질 습관 확인",
      "커트·펌·염색 중 원하는 방향 상담",
    ],
  },
  "womens-cut": {
    name: "여성 커트",
    keyword: "여자 커트",
    intro:
      "모발의 길이와 층, 얼굴 주변의 라인을 고려하는 여성 커트 안내입니다.",
    detail:
      "현재 모발의 무게감과 원하는 길이를 확인하고, 레이어드 디자인이나 자연스러운 C컬 스타일 등 선호하는 분위기를 상담합니다.",
    image: "/IMG_1427.jpeg",
    related: "/hair/layered-cut",
    tips: [
      "희망하는 커트 길이 확인",
      "앞머리와 얼굴 주변 라인 상담",
      "평소 드라이·고데기 사용 여부 확인",
    ],
  },
  "layered-cut": {
    name: "레이어드컷",
    keyword: "레이어드컷",
    intro:
      "자연스러운 층과 움직임을 표현하는 여성 레이어드컷 안내입니다.",
    detail:
      "레이어드컷은 모발에 층을 주어 가벼운 움직임을 만드는 스타일입니다. 길이와 모발의 양에 따라 디자인과 손질 방법이 달라질 수 있습니다.",
    image: "/IMG_1427.jpeg",
    related: "/hair/layered-cut",
    tips: [
      "레이어드 층의 높이 상담",
      "모발의 양과 길이에 맞는 디자인",
      "C컬 스타일과의 조합 상담",
    ],
  },
  "build-perm": {
    name: "빌드펌",
    keyword: "빌드펌",
    intro:
      "자연스러운 볼륨과 부드러운 컬을 표현하는 빌드펌 안내입니다.",
    detail:
      "빌드펌은 레이어드 디자인과 어울리는 컬과 볼륨을 표현할 수 있습니다. 모발 상태와 원하는 컬의 형태에 따라 시술을 상담합니다.",
    image: "/IMG_1424.jpeg",
    related: "/hair/build-perm",
    tips: [
      "컬의 굵기와 볼륨 상담",
      "펌·탈색 이력 확인",
      "스타일 유지와 홈케어 방법 안내",
    ],
  },
  "wave-perm": {
    name: "물결펌",
    keyword: "물결펌",
    intro:
      "부드러운 웨이브의 흐름을 표현하는 여성 물결펌 안내입니다.",
    detail:
      "물결펌은 웨이브가 이어지는 형태의 스타일입니다. 모발 길이와 손상 상태를 확인하고 컬의 굵기와 손질 방법을 상담합니다.",
    image: "/IMG_1423.jpeg",
    related: "/hair/wave-perm",
    tips: [
      "웨이브 굵기와 시작 위치 상담",
      "모발 길이와 펌 이력 확인",
      "웨이브 손질 및 관리 방법 안내",
    ],
  },
  color: {
    name: "여성 염색",
    keyword: "염색 잘하는 곳",
    intro:
      "천연스러운 브라운부터 개성 있는 포인트 컬러까지 여성 염색 안내입니다.",
    detail:
      "매트브라운, 베이지브라운, 루비레드, 블루, 베이비핑크 등 다양한 컬러 포트폴리오를 참고해 보세요. 원하는 색상과 현재 모발 상태에 따라 가능한 시술이 달라질 수 있습니다.",
    image: "/IMG_1433.jpeg",
    related: "/hair/color",
    tips: [
      "원하는 컬러 사진 준비",
      "현재 염색·탈색 이력 확인",
      "색상 유지와 관리 방법 상담",
    ],
  },
  extensions: {
    name: "붙임머리",
    keyword: "붙임머리",
    intro:
      "원하는 길이와 볼륨을 더하는 붙임머리 스타일 상담 안내입니다.",
    detail:
      "기존 모발과 조화로운 길이와 볼륨을 고려하고 원하는 컬러와 스타일을 상담합니다. 상담 시 현재 머리 길이와 모발 상태를 확인하는 것이 좋습니다.",
    image: "/IMG_1446.jpeg",
    related: "/hair/extensions",
    tips: [
      "원하는 붙임머리 길이 상담",
      "현재 모발 길이와 상태 확인",
      "붙임머리 관리 방법 안내",
    ],
  },
};

type RegionKey = keyof typeof regions;
type ServiceKey = keyof typeof services;

type Props = {
  params: Promise<{
    region: string;
    service: string;
  }>;
};

function getData(
  regionSlug: string,
  serviceSlug: string
) {
  const region =
    regions[regionSlug as RegionKey];
  const service =
    services[serviceSlug as ServiceKey];

  if (!region || !service) {
    return null;
  }

  return { region, service };
}

/* =====================================
   6개 지역 × 7개 시술 = 42개 URL
===================================== */

export function generateStaticParams() {
  return Object.keys(regions).flatMap(
    (region) =>
      Object.keys(services).map((service) => ({
        region,
        service,
      }))
  );
}

export const dynamicParams = false;

/* =====================================
   지역 × 시술별 SEO
===================================== */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { region, service } = await params;
  const data = getData(region, service);

  if (!data) {
    return {
      title: "페이지를 찾을 수 없습니다",
    };
  }

  const { region: r, service: s } = data;

  const title =
    `${r.name} ${s.keyword} | 하이유헤어 이해린 디자이너`;

  const description =
    `${r.name} ${s.name} 스타일을 알아보세요. 하이유헤어 청당점 이해린 디자이너의 포트폴리오, 스타일 상담 및 네이버 예약 안내.`;

  const url =
    `${SITE}/area/${region}/${service}`;

  return {
    title: {
      absolute: title,
    },
    description,
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
      title,
      description,
      url,
      images: [
        {
          url: s.image,
          alt: `${s.name} 헤어스타일`,
        },
      ],
    },
  };
}

/* =====================================
   상세 페이지
===================================== */

export default async function AreaServicePage({
  params,
}: Props) {
  const { region, service } = await params;
  const data = getData(region, service);

  if (!data) {
    notFound();
  }

  const { region: r, service: s } = data;

  const faq = [
    {
      question:
        `${r.name}에서 ${s.name} 상담을 받을 수 있나요?`,
      answer:
        `하이유헤어 청당점 이해린 디자이너의 스타일을 확인하고 예약하실 수 있습니다. 실제 매장 위치는 ${ADDRESS}입니다.`,
    },
    {
      question: "예약 전 무엇을 준비하면 좋나요?",
      answer:
        "원하는 헤어스타일 사진과 현재 모발 상태, 이전 시술 이력을 미리 확인해 두면 상담에 도움이 됩니다.",
    },
    {
      question: "방문 위치는 어디인가요?",
      answer:
        `하이유헤어 청당점은 ${ADDRESS}에 있습니다. 예약 및 방문 전에 매장 위치를 확인해 주세요.`,
    },
  ];

  const relatedServices = Object.entries(services)
    .filter(([slug]) => slug !== service)
    .slice(0, 6);

  return (
    <main className="area-hair">
      <style>{`
        .area-hair {
          --blue:#193b71;
          --cream:#f7f5f1;
          --muted:#717681;
          background:white;
          color:#24272e;
          min-height:100vh;
        }

        .area-hair * {
          box-sizing:border-box;
        }

        .area-hair a {
          text-decoration:none;
        }

        .area-container {
          width:min(980px,calc(100% - 36px));
          margin:auto;
        }

        .area-header {
          border-bottom:1px solid #eae6df;
          padding:21px 0;
        }

        .area-header-inner {
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:15px;
        }

        .area-logo {
          font:26px Georgia,serif;
          letter-spacing:2px;
          color:var(--blue);
        }

        .area-small-link {
          color:var(--blue);
          font-size:12px;
          font-weight:700;
        }

        .area-hero {
          background:var(--cream);
          padding:76px 0;
          text-align:center;
        }

        .area-label {
          font-size:11px;
          font-weight:700;
          color:var(--blue);
          letter-spacing:2px;
        }

        .area-hero h1 {
          font-size:clamp(30px,5vw,47px);
          font-weight:500;
          line-height:1.5;
          margin:20px 0;
          word-break:keep-all;
        }

        .area-hero p {
          color:var(--muted);
          font-size:14px;
          line-height:2;
          max-width:680px;
          margin:auto;
          word-break:keep-all;
        }

        .area-actions {
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:10px;
          margin-top:27px;
        }

        .area-btn {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          min-height:48px;
          padding:13px 22px;
          border:1px solid var(--blue);
          color:var(--blue);
          font-size:12px;
          font-weight:700;
          border-radius:3px;
        }

        .area-primary {
          background:var(--blue);
          color:white;
        }

        .area-section {
          padding:75px 0;
        }

        .area-section h2 {
          font-size:clamp(25px,4vw,36px);
          font-weight:500;
          line-height:1.5;
          margin:13px 0 23px;
        }

        .area-content {
          display:grid;
          grid-template-columns:1fr 1fr;
          align-items:center;
          gap:40px;
        }

        .area-image {
          position:relative;
          aspect-ratio:4/5;
          background:#e7e2db;
          overflow:hidden;
          border-radius:4px;
        }

        .area-image img {
          object-fit:cover;
        }

        .area-text {
          font-size:14px;
          line-height:2.1;
          color:var(--muted);
          word-break:keep-all;
        }

        .area-points {
          padding:0;
          list-style:none;
          margin:25px 0;
        }

        .area-points li {
          padding:13px 0;
          border-bottom:1px solid #e9e5df;
          font-size:13px;
        }

        .area-points li:before {
          content:"✦ ";
          color:var(--blue);
          margin-right:8px;
        }

        .area-soft {
          background:var(--cream);
        }

        .area-faq {
          max-width:800px;
          margin:auto;
        }

        .area-faq details {
          background:white;
          border:1px solid #e7e2dc;
          margin-bottom:10px;
          padding:20px;
        }

        .area-faq summary {
          cursor:pointer;
          font-weight:700;
          font-size:14px;
          line-height:1.8;
        }

        .area-faq p {
          color:var(--muted);
          font-size:13px;
          line-height:2;
          margin-bottom:0;
        }

        .area-links {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:12px;
        }

        .area-links a {
          border:1px solid #e7e2dc;
          color:var(--blue);
          font-size:13px;
          font-weight:700;
          padding:20px;
          display:flex;
          justify-content:space-between;
          gap:8px;
        }

        .area-visit {
          background:var(--blue);
          color:white;
          text-align:center;
          padding:70px 20px;
        }

        .area-visit p {
          font-size:13px;
          color:#dce4ee;
          line-height:2;
        }

        .area-visit .area-btn {
          background:white;
          border-color:white;
          color:var(--blue);
        }

        .area-footer {
          background:#202837;
          color:white;
          text-align:center;
          padding:40px 20px;
        }

        .area-footer p {
          color:#cbd0d9;
          font-size:12px;
          line-height:2;
        }

        @media(max-width:700px) {
          .area-hero {
            padding:60px 0;
          }

          .area-section {
            padding:55px 0;
          }

          .area-content {
            grid-template-columns:1fr;
            gap:25px;
          }

          .area-image {
            max-width:500px;
            width:100%;
            margin:auto;
          }

          .area-links {
            grid-template-columns:repeat(2,1fr);
          }

          .area-links a {
            padding:15px;
            font-size:12px;
          }
        }
      `}</style>

      <header className="area-header">
        <div className="area-container area-header-inner">
          <Link href="/" className="area-logo">
            HI U HAIR
          </Link>
          <Link href="/area" className="area-small-link">
            지역별 시술 보기 →
          </Link>
        </div>
      </header>

      <section className="area-hero">
        <div className="area-container">
          <span className="area-label">
            HI U HAIR · HAERIN LEE
          </span>

          <h1>
            {r.name} {s.name}
            <br />
            이해린 디자이너
          </h1>

          <p>
            {r.location}
            <br />
            {s.intro}
          </p>

          <div className="area-actions">
            <a
              href={BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="area-btn area-primary"
            >
              네이버 예약하기 ↗
            </a>

            <Link
              href={s.related}
              className="area-btn"
            >
              시술 사진 더 보기 →
            </Link>
          </div>
        </div>
      </section>

      <section className="area-section">
        <div className="area-container area-content">
          <div className="area-image">
            <Image
              src={s.image}
              alt={`하이유헤어 ${s.name} 헤어스타일`}
              fill
              sizes="(max-width:700px) 100vw, 50vw"
              priority
            />
          </div>

          <div>
            <span className="area-label">
              WOMEN'S HAIR DESIGN
            </span>

            <h2>{s.name} 스타일 안내</h2>

            <p className="area-text">
              {s.detail}
            </p>

            <ul className="area-points">
              {s.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>

            <Link
              href={s.related}
              className="area-btn area-primary"
            >
              포트폴리오 확인하기 →
            </Link>
          </div>
        </div>
      </section>

      <section className="area-section area-soft">
        <div className="area-container area-faq">
          <span className="area-label">
            VISIT & CONSULTATION
          </span>

          <h2>{r.name} 고객을 위한 방문 안내</h2>

          <p className="area-text">
            {r.guide}
            <br />
            실제 시술과 예약 상담은 하이유헤어
            청당점에서 진행됩니다.
          </p>

          <div style={{ marginTop: 28 }}>
            {faq.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="area-section">
        <div className="area-container">
          <span className="area-label">
            DISCOVER MORE HAIR STYLES
          </span>

          <h2>다른 여자머리 시술 보기</h2>

          <div className="area-links">
            {relatedServices.map(
              ([slug, other]) => (
                <Link
                  key={slug}
                  href={`/area/${region}/${slug}`}
                >
                  {other.name}
                  <span>→</span>
                </Link>
              )
            )}
          </div>

          <div
            className="area-actions"
            style={{ marginTop: 30 }}
          >
            <Link href="/area" className="area-btn">
              전체 지역별 안내 →
            </Link>
          </div>
        </div>
      </section>

      <section className="area-visit">
        <span
          className="area-label"
          style={{ color: "#dce4ee" }}
        >
          HI U HAIR CHEONGDANG
        </span>

        <h2>하이유헤어 청당점</h2>

        <p>
          이해린 디자이너
          <br />
          {ADDRESS}
          <br />
          010-2327-7653
        </p>

        <div className="area-actions">
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="area-btn"
          >
            네이버 예약 ↗
          </a>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="area-btn"
          >
            인스타그램 ↗
          </a>

          <a
            href={`tel:${PHONE}`}
            className="area-btn"
          >
            전화 문의
          </a>
        </div>
      </section>

      <footer className="area-footer">
        <Link
          href="/"
          className="area-logo"
          style={{ color: "white" }}
        >
          HI U HAIR
        </Link>

        <p>
          하이유헤어 청당점 · 이해린 디자이너
          <br />
          {ADDRESS}
        </p>
      </footer>
    </main>
  );
}
