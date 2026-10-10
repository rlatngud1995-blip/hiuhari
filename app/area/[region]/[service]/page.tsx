
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/* =====================================
   하이유헤어 청당점 기본 정보
===================================== */

const SITE = "https://www.hiuhair.com";

const COMPANY = "하이유헤어 청당점";

const DESIGNER = "이해린";

const ADDRESS =
  "충남 천안시 동남구 청수4로 16, 2층 201호";

const PHONE = "01023277653";

const PHONE_DISPLAY = "010-2327-7653";

const BOOKING =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&theme=place";

const INSTAGRAM =
  "https://www.instagram.com/hiu_haerin/";

const MAP =
  "https://map.naver.com/p/search/" +
  encodeURIComponent("하이유헤어 청당점");

/* =====================================
   지역 설정

   실제 매장은 천안 청당점 한 곳

   다른 지역은 방문을 고려하는 고객을
   위한 안내 페이지로 표시
===================================== */

const REGIONS = {
  cheonan: {
    name: "천안",
    type: "city",
    heading: "천안 여자머리 스타일",
    intro:
      "천안에서 여자머리 스타일을 고민하고 있다면 하이유헤어 청당점 이해린 디자이너의 포트폴리오를 확인해 보세요.",
    visit:
      "하이유헤어 청당점은 천안시 동남구 청수4로 16에 위치해 있습니다.",
  },

  cheongdang: {
    name: "청당동",
    type: "local",
    heading: "청당동 여자머리 스타일",
    intro:
      "천안 청당동에서 여자머리 시술을 알아보고 있다면 하이유헤어 청당점의 다양한 헤어스타일을 만나보세요.",
    visit:
      "하이유헤어 청당점은 천안시 동남구 청수4로 16, 2층 201호에 있습니다.",
  },

  sinbang: {
    name: "신방동",
    type: "nearby",
    heading: "신방동 고객을 위한 헤어스타일 안내",
    intro:
      "신방동에서 여자머리 스타일을 알아보는 분들을 위해 청당동 하이유헤어 이해린 디자이너의 시술 포트폴리오를 소개합니다.",
    visit:
      "신방동에 별도 지점이 있는 것은 아니며 실제 시술은 천안 청당동 하이유헤어 청당점에서 진행됩니다.",
  },

  ssangyong: {
    name: "쌍용동",
    type: "nearby",
    heading: "쌍용동 고객을 위한 헤어스타일 안내",
    intro:
      "쌍용동에서 여성 커트, 펌, 염색 등 헤어스타일을 찾는 분들을 위해 하이유헤어 청당점의 스타일을 안내합니다.",
    visit:
      "쌍용동에 별도 지점이 있는 것은 아니며 실제 매장은 천안 청당동에 위치합니다.",
  },

  buldang: {
    name: "불당동",
    type: "nearby",
    heading: "불당동 고객을 위한 헤어스타일 안내",
    intro:
      "불당동에서 여자머리 스타일을 고민하고 있다면 천안 청당동 하이유헤어 이해린 디자이너의 시술 사진과 예약 정보를 확인해 보세요.",
    visit:
      "불당동에 별도 지점이 있는 것은 아니며 시술은 하이유헤어 청당점에서 진행됩니다.",
  },

  dujeong: {
    name: "두정동",
    type: "nearby",
    heading: "두정동 고객을 위한 헤어스타일 안내",
    intro:
      "두정동에서 여자머리 디자인을 알아보는 분들을 위해 천안 청당동 하이유헤어의 헤어스타일과 상담 정보를 소개합니다.",
    visit:
      "두정동에 별도 지점이 있는 것은 아니며 예약 및 시술은 천안 청당점에서 진행됩니다.",
  },
} as const;

/* =====================================
   여자머리 시술 7개
===================================== */

const SERVICES = {
  "womens-hair": {
    name: "여자머리 전문",
    keyword: "여자머리 전문",
    title: "여자머리 스타일",
    description:
      "여성 커트, 레이어드컷, 펌, 염색, 붙임머리 등 다양한 여자머리 스타일을 상담합니다.",
    detail:
      "원하는 분위기와 모발의 길이, 얼굴형, 평소 손질 방법을 고려하여 어울리는 스타일을 상담합니다. 시술별 포트폴리오를 확인하고 원하는 스타일을 디자이너에게 전달해 보세요.",
    image: "/IMG_1427.jpeg",
    imageAlt: "여성 하이레이어드컷과 C컬 스타일",
    related: "/hair",
    tips: [
      "원하는 헤어스타일 사진 준비",
      "현재 모발 상태와 길이 확인",
      "커트·펌·염색 등 시술 방향 상담",
      "평소 스타일링 방법 확인",
    ],
  },

  "womens-cut": {
    name: "여성 커트",
    keyword: "여자 커트",
    title: "여자 커트 스타일",
    description:
      "모발 길이와 얼굴 주변 라인을 고려한 여성 커트 및 레이어드 디자인을 안내합니다.",
    detail:
      "여성 커트는 원하는 길이와 층의 높이, 얼굴 주변의 라인에 따라 분위기가 달라집니다. 자연스러운 레이어드컷과 C컬 스타일을 참고하여 디자인을 상담해 보세요.",
    image: "/IMG_1427.jpeg",
    imageAlt: "여성 레이어드컷 헤어스타일",
    related: "/hair/layered-cut",
    tips: [
      "원하는 커트 길이 확인",
      "앞머리와 얼굴 주변 라인 상담",
      "모발 양에 맞는 층 디자인",
      "평소 손질 방법 안내",
    ],
  },

  "layered-cut": {
    name: "레이어드컷",
    keyword: "레이어드컷",
    title: "여성 레이어드컷",
    description:
      "가벼운 움직임과 자연스러운 볼륨을 표현하는 여성 레이어드컷 스타일을 안내합니다.",
    detail:
      "레이어드컷은 모발에 층을 주어 자연스러운 움직임을 만드는 스타일입니다. 모발의 길이와 양, 원하는 볼륨에 따라 층의 높이를 상담하고 C컬 스타일과의 조합도 고려할 수 있습니다.",
    image: "/IMG_1427.jpeg",
    imageAlt: "하이레이어드컷 C컬 시술 스타일",
    related: "/hair/layered-cut",
    tips: [
      "하이레이어드컷 스타일 상담",
      "얼굴형과 모발 길이 고려",
      "레이어드 층의 높이 조절 상담",
      "C컬 및 자연스러운 볼륨 스타일",
    ],
  },

  "build-perm": {
    name: "빌드펌",
    keyword: "빌드펌",
    title: "여성 빌드펌",
    description:
      "자연스러운 볼륨과 부드러운 컬을 표현하는 여성 빌드펌 스타일을 안내합니다.",
    detail:
      "빌드펌은 자연스러운 볼륨과 부드러운 컬을 연출하는 펌 스타일입니다. 레이어드컷과의 조합, 원하는 컬의 굵기, 모발 상태 등을 고려하여 시술을 상담합니다.",
    image: "/IMG_1424.jpeg",
    imageAlt: "빌드펌과 매트브라운 헤어스타일",
    related: "/hair/build-perm",
    tips: [
      "자연스러운 볼륨 상담",
      "레이어드 빌드펌 디자인",
      "모발의 펌·탈색 이력 확인",
      "컬 관리 및 손질 안내",
    ],
  },

  "wave-perm": {
    name: "물결펌",
    keyword: "물결펌",
    title: "여성 물결펌",
    description:
      "흐르는 듯한 웨이브와 부드러운 움직임이 특징인 여성 물결펌 스타일을 소개합니다.",
    detail:
      "물결펌은 모발에 이어지는 웨이브로 자연스럽고 부드러운 분위기를 표현하는 스타일입니다. 원하는 웨이브의 굵기와 모발의 길이, 시술 이력을 고려해 상담합니다.",
    image: "/IMG_1423.jpeg",
    imageAlt: "물결펌과 밀크브라운 스타일",
    related: "/hair/wave-perm",
    tips: [
      "물결 웨이브 굵기 상담",
      "모발 길이에 맞는 컬 디자인",
      "밀크브라운 컬러 조합 상담",
      "웨이브 유지 및 손질 안내",
    ],
  },

  color: {
    name: "여성 염색",
    keyword: "염색",
    title: "여자 염색 스타일",
    description:
      "매트브라운, 베이지브라운, 루비레드, 블루, 베이비핑크 등 다양한 여성 염색 스타일을 소개합니다.",
    detail:
      "헤어 컬러는 피부톤과 기존 모발 색상, 탈색 이력에 따라 결과가 달라집니다. 브라운 계열부터 개성 있는 포인트 컬러까지 포트폴리오를 참고하여 원하는 컬러를 상담해 보세요.",
    image: "/IMG_1433.jpeg",
    imageAlt: "여성 루비레드 헤어 컬러",
    related: "/hair/color",
    tips: [
      "매트브라운 · 베이지브라운",
      "루비레드 · 블루염색",
      "베이비핑크 컬러",
      "기존 염색·탈색 이력 확인",
    ],
  },

  extensions: {
    name: "붙임머리",
    keyword: "붙임머리",
    title: "여성 붙임머리",
    description:
      "원하는 길이와 볼륨을 더하는 여성 붙임머리 헤어스타일을 안내합니다.",
    detail:
      "붙임머리는 모발의 길이와 볼륨을 보완하고 다양한 스타일을 표현하는 방법입니다. 현재 모발 길이와 원하는 디자인, 컬러 및 관리 방법을 함께 고려하여 상담합니다.",
    image: "/IMG_1446.jpeg",
    imageAlt: "베이비핑크염색과 붙임머리 스타일",
    related: "/hair/extensions",
    tips: [
      "원하는 붙임머리 길이 상담",
      "볼륨과 연결 스타일 확인",
      "컬러 조합 상담",
      "붙임머리 관리 방법 안내",
    ],
  },
} as const;

/* =====================================
   타입 및 데이터 확인
===================================== */

type RegionKey = keyof typeof REGIONS;
type ServiceKey = keyof typeof SERVICES;

type PageProps = {
  params: Promise<{
    region: string;
    service: string;
  }>;
};

function getPageData(
  regionSlug: string,
  serviceSlug: string
) {
  if (
    !Object.prototype.hasOwnProperty.call(
      REGIONS,
      regionSlug
    ) ||
    !Object.prototype.hasOwnProperty.call(
      SERVICES,
      serviceSlug
    )
  ) {
    return null;
  }

  return {
    region: REGIONS[regionSlug as RegionKey],
    service: SERVICES[serviceSlug as ServiceKey],
  };
}

/* =====================================
   42개 정적 URL 생성
===================================== */

export function generateStaticParams() {
  return Object.keys(REGIONS).flatMap(
    (region) =>
      Object.keys(SERVICES).map((service) => ({
        region,
        service,
      }))
  );
}

export const dynamicParams = false;

/* =====================================
   네이버 SEO 설정

   실제 매장은 청당점임을 명확하게 표시
===================================== */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { region, service } = await params;

  const data = getPageData(region, service);

  if (!data) {
    return {
      title: "페이지를 찾을 수 없습니다",
    };
  }

  const r = data.region;
  const s = data.service;

  const isNearby = r.type === "nearby";

  const title = isNearby
    ? `${r.name} 고객을 위한 ${s.keyword} 안내 | 하이유헤어 청당점`
    : `${r.name} ${s.keyword} | 하이유헤어 청당점 이해린`;

  const description = isNearby
    ? `${r.name}에서 ${s.name} 스타일을 알아보세요. 실제 매장은 천안 청당동 하이유헤어입니다. 이해린 디자이너의 포트폴리오와 예약을 안내합니다.`
    : `${r.name} ${s.name} 스타일 안내. 천안 하이유헤어 청당점 이해린 디자이너의 시술 사진과 네이버 예약 정보를 확인하세요.`;

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
      siteName: COMPANY,
      title,
      description,
      url,
      images: [
        {
          url: s.image,
          alt: s.imageAlt,
        },
      ],
    },
  };
}

/* =====================================
   전체 지역 상세 페이지
===================================== */

export default async function AreaServicePage({
  params,
}: PageProps) {
  const { region, service } = await params;

  const data = getPageData(region, service);

  if (!data) {
    notFound();
  }

  const r = data.region;
  const s = data.service;

  const isNearby = r.type === "nearby";

  const otherServices = (
    Object.keys(SERVICES) as ServiceKey[]
  ).filter((slug) => slug !== service);

  const faqs = [
    {
      q: `${r.name}에서 ${s.name} 상담을 받을 수 있나요?`,
      a: `하이유헤어 청당점 이해린 디자이너의 스타일과 예약 정보를 확인할 수 있습니다. 실제 시술은 ${ADDRESS}에서 진행됩니다.`,
    },
    {
      q: "시술 전 무엇을 준비하면 좋나요?",
      a: "원하는 헤어스타일 사진과 현재 머리 길이, 이전 펌·염색 이력을 미리 확인해 두면 상담에 도움이 됩니다.",
    },
    {
      q: "하이유헤어 매장 위치는 어디인가요?",
      a: `하이유헤어 청당점의 주소는 ${ADDRESS}입니다. 다른 동네에는 이 페이지에서 안내하는 별도 지점이 없습니다.`,
    },
  ];

  return (
    <main className="hiu-area-page">
      <style>{`
        .hiu-area-page {
          --navy: #193b71;
          --cream: #f7f5f1;
          --ink: #272a30;
          --muted: #707781;
          --line: #e9e5df;
          background: #fff;
          color: var(--ink);
          min-height: 100vh;
        }

        .hiu-area-page * {
          box-sizing: border-box;
        }

        .hiu-area-page a {
          text-decoration: none;
        }

        .hiu-container {
          width: min(1050px, calc(100% - 36px));
          margin: 0 auto;
        }

        .hiu-header {
          padding: 23px 0;
          border-bottom: 1px solid var(--line);
          background: #fff;
        }

        .hiu-header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
        }

        .hiu-logo {
          font-family: Georgia, serif;
          color: var(--navy);
          font-size: 28px;
          letter-spacing: 2px;
          white-space: nowrap;
        }

        .hiu-header-link {
          color: var(--navy);
          font-size: 12px;
          font-weight: 700;
        }

        .hiu-hero {
          text-align: center;
          padding: 79px 20px;
          background: var(--cream);
        }

        .hiu-eyebrow {
          color: var(--navy);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1.8;
        }

        .hiu-hero h1 {
          margin: 24px 0 18px;
          font-size: clamp(32px, 5vw, 47px);
          font-weight: 500;
          line-height: 1.5;
          letter-spacing: -1px;
          word-break: keep-all;
        }

        .hiu-hero h1 strong {
          color: var(--navy);
          font-weight: 600;
        }

        .hiu-hero-desc {
          margin: 0 auto;
          max-width: 670px;
          color: var(--muted);
          font-size: 14px;
          line-height: 2.1;
          word-break: keep-all;
        }

        .hiu-location-note {
          max-width: 590px;
          margin: 24px auto 0;
          padding: 15px 17px;
          background: #fff;
          border: 1px solid #e2dfd9;
          color: #565d68;
          font-size: 12px;
          line-height: 1.9;
          word-break: keep-all;
        }

        .hiu-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .hiu-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-height: 49px;
          padding: 13px 22px;
          border: 1px solid var(--navy);
          border-radius: 3px;
          color: var(--navy);
          font-size: 12px;
          font-weight: 700;
          text-align: center;
        }

        .hiu-btn-primary {
          color: white;
          background: var(--navy);
        }

        .hiu-section {
          padding: 75px 0;
        }

        .hiu-section-title {
          font-size: clamp(26px, 4vw, 37px);
          font-weight: 500;
          line-height: 1.5;
          letter-spacing: -0.5px;
          margin: 15px 0 22px;
          word-break: keep-all;
        }

        .hiu-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 48px;
        }

        .hiu-photo {
          position: relative;
          aspect-ratio: 4 / 5;
          background: #e8e3dd;
          border-radius: 4px;
          overflow: hidden;
        }

        .hiu-photo img {
          object-fit: cover;
        }

        .hiu-paragraph {
          color: var(--muted);
          font-size: 14px;
          line-height: 2.15;
          word-break: keep-all;
        }

        .hiu-tips {
          margin: 26px 0;
          padding: 0;
          list-style: none;
        }

        .hiu-tips li {
          padding: 13px 0;
          border-bottom: 1px solid var(--line);
          color: #505762;
          font-size: 13px;
          line-height: 1.7;
        }

        .hiu-tips li:before {
          content: "✦";
          margin-right: 10px;
          color: var(--navy);
        }

        .hiu-bg-cream {
          background: var(--cream);
        }

        .hiu-visit-box {
          max-width: 850px;
          margin: auto;
        }

        .hiu-visit-detail {
          background: white;
          border: 1px solid var(--line);
          padding: 24px;
          margin: 25px 0;
        }

        .hiu-visit-detail strong {
          display: block;
          color: var(--navy);
          font-size: 13px;
          margin-bottom: 10px;
        }

        .hiu-visit-detail p {
          color: var(--muted);
          font-size: 13px;
          line-height: 2;
          margin: 0;
        }

        .hiu-faq details {
          border: 1px solid var(--line);
          padding: 19px;
          margin-bottom: 10px;
          background: white;
        }

        .hiu-faq summary {
          cursor: pointer;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.8;
        }

        .hiu-faq p {
          color: var(--muted);
          font-size: 13px;
          line-height: 2;
          margin-bottom: 0;
        }

        .hiu-other-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 27px;
        }

        .hiu-other-grid a {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          padding: 20px;
          border: 1px solid var(--line);
          color: var(--navy);
          font-size: 13px;
          font-weight: 700;
          line-height: 1.6;
        }

        .hiu-booking {
          background: var(--navy);
          color: white;
          text-align: center;
          padding: 77px 20px;
        }

        .hiu-booking h2 {
          font-size: clamp(28px, 5vw, 40px);
          font-weight: 400;
          margin: 17px 0;
        }

        .hiu-booking p {
          color: #e1e8f1;
          font-size: 13px;
          line-height: 2;
        }

        .hiu-booking .hiu-btn {
          background: white;
          border-color: white;
          color: var(--navy);
        }

        .hiu-footer {
          padding: 42px 20px;
          text-align: center;
          background: #202837;
        }

        .hiu-footer p {
          color: #cbd2dc;
          font-size: 12px;
          line-height: 2;
        }

        .hiu-footer .hiu-logo {
          color: white;
        }

        @media (max-width: 700px) {
          .hiu-header {
            padding: 19px 0;
          }

          .hiu-logo {
            font-size: 25px;
          }

          .hiu-hero {
            padding: 61px 17px;
          }

          .hiu-hero h1 {
            font-size: 31px;
          }

          .hiu-section {
            padding: 56px 0;
          }

          .hiu-content-grid {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .hiu-photo {
            max-width: 500px;
            width: 100%;
            margin: auto;
          }

          .hiu-other-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .hiu-other-grid a {
            padding: 15px;
            font-size: 12px;
          }

          .hiu-visit-detail {
            padding: 20px;
          }
        }
      `}</style>

      {/* =====================================
          상단 메뉴
      ===================================== */}

      <header className="hiu-header">
        <div className="hiu-container hiu-header-inner">
          <Link href="/" className="hiu-logo">
            HI U HAIR
          </Link>

          <Link
            href="/hair"
            className="hiu-header-link"
          >
            전체 시술 보기 →
          </Link>
        </div>
      </header>

      {/* =====================================
          지역별 대표 화면
      ===================================== */}

      <section className="hiu-hero">
        <span className="hiu-eyebrow">
          HI U HAIR · CHEONGDANG
        </span>

        <h1>
          {isNearby ? (
            <>
              천안 여자머리 전문
              <br />
              <strong>하이유헤어 청당점</strong>
              <br />
              {r.name} 고객을 위한
              <br />
              {s.name} 안내
            </>
          ) : (
            <>
              {r.name} {s.keyword}
              <br />
              <strong>하이유헤어 청당점</strong>
              <br />
              이해린 디자이너
            </>
          )}
        </h1>

        <p className="hiu-hero-desc">
          {r.intro}
          <br />
          {s.description}
        </p>

        <div className="hiu-location-note">
          <strong>실제 매장 위치 · 천안 청당점</strong>
          <div>{ADDRESS}</div>
        </div>

        <div className="hiu-actions">
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="hiu-btn hiu-btn-primary"
          >
            네이버 예약하기 ↗
          </a>

          <Link
            href={s.related}
            className="hiu-btn"
          >
            시술 사진 더 보기 →
          </Link>
        </div>
      </section>

      {/* =====================================
          헤어스타일 소개
      ===================================== */}

      <section className="hiu-section">
        <div className="hiu-container hiu-content-grid">
          <div className="hiu-photo">
            <Image
              src={s.image}
              alt={s.imageAlt}
              fill
              priority
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="hiu-eyebrow">
              WOMEN'S HAIR DESIGN
            </span>

            <h2 className="hiu-section-title">
              {s.title}
            </h2>

            <p className="hiu-paragraph">
              {s.detail}
            </p>

            <ul className="hiu-tips">
              {s.tips.map((tip) => (
                <li key={tip}>
                  {tip}
                </li>
              ))}
            </ul>

            <Link
              href={s.related}
              className="hiu-btn hiu-btn-primary"
            >
              시술 포트폴리오 확인 →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          지역별 방문 안내
      ===================================== */}

      <section className="hiu-section hiu-bg-cream">
        <div className="hiu-container hiu-visit-box">
          <span className="hiu-eyebrow">
            SALON LOCATION & VISIT
          </span>

          <h2 className="hiu-section-title">
            {isNearby
              ? `${r.name} 고객을 위한 청당점 방문 안내`
              : "하이유헤어 청당점 방문 안내"}
          </h2>

          <p className="hiu-paragraph">
            {r.visit}
          </p>

          <div className="hiu-visit-detail">
            <strong>
              하이유헤어 청당점 · 이해린 디자이너
            </strong>

            <p>
              주소: {ADDRESS}
              <br />
              전화: {PHONE_DISPLAY}
              <br />
              방문 전 예약 및 매장 위치를 확인해 주세요.
            </p>

            <div
              className="hiu-actions"
              style={{ justifyContent: "flex-start" }}
            >
              <a
                href={MAP}
                target="_blank"
                rel="noopener noreferrer"
                className="hiu-btn"
              >
                네이버 지도 ↗
              </a>
            </div>
          </div>

          <div className="hiu-faq">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          다른 시술 페이지 연결
      ===================================== */}

      <section className="hiu-section">
        <div className="hiu-container">
          <span className="hiu-eyebrow">
            EXPLORE MORE STYLES
          </span>

          <h2 className="hiu-section-title">
            다른 여자머리 시술 알아보기
          </h2>

          <div className="hiu-other-grid">
            {otherServices.map((slug) => (
              <Link
                key={slug}
                href={`/area/${region}/${slug}`}
              >
                {SERVICES[slug].name}
                <span>→</span>
              </Link>
            ))}
          </div>

          <div className="hiu-actions">
            <Link href="/hair" className="hiu-btn">
              전체 시술 포트폴리오 →
            </Link>

            <Link href="/area" className="hiu-btn">
              지역별 안내 전체 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          예약 안내
      ===================================== */}

      <section className="hiu-booking">
        <span
          className="hiu-eyebrow"
          style={{ color: "#dce4ef" }}
        >
          DESIGNER HAERIN LEE
        </span>

        <h2>당신의 분위기를 디자인하다.</h2>

        <p>
          하이유헤어 청당점 이해린 디자이너
          <br />
          {ADDRESS}
        </p>

        <div className="hiu-actions">
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="hiu-btn"
          >
            네이버 예약하기 ↗
          </a>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="hiu-btn"
          >
            인스타그램 ↗
          </a>

          <a
            href={`tel:${PHONE}`}
            className="hiu-btn"
          >
            전화 문의
          </a>
        </div>
      </section>

      {/* =====================================
          푸터
      ===================================== */}

      <footer className="hiu-footer">
        <Link href="/" className="hiu-logo">
          HI U HAIR
        </Link>

        <p>
          {COMPANY}
          <br />
          {DESIGNER} 디자이너
          <br />
          {ADDRESS}
          <br />
          {PHONE_DISPLAY}
        </p>
      </footer>
    </main>
  );
}
