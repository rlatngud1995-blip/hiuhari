
import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";

const SITE = "https://www.hiuhair.com";

const REGIONS: Record<string, string> = {
  cheonan: "천안",
  cheongdang: "청당동",
  sinbang: "신방동",
  ssangyong: "쌍용동",
  buldang: "불당동",
  dujeong: "두정동",
};

const SERVICES: Record<string, string> = {
  "womens-hair": "여자머리전문",
  "womens-cut": "여자커트",
  "layered-cut": "레이어드컷",
  "build-perm": "빌드펌",
  "wave-perm": "물결펌",
  color: "염색",
  "wedding-color": "웨딩염색",
};

const SERVICE_DESCRIPTIONS: Record<string, string> = {
  "womens-hair":
    "여성 헤어스타일과 얼굴형, 모질에 어울리는 디자인을 상담합니다.",
  "womens-cut":
    "얼굴형과 모발 상태를 고려한 여자커트 스타일을 상담합니다.",
  "layered-cut":
    "모발의 길이와 층을 고려한 레이어드컷 디자인을 상담합니다.",
  "build-perm":
    "자연스러운 볼륨과 컬을 표현하는 빌드펌 스타일을 상담합니다.",
  "wave-perm":
    "부드러운 웨이브와 움직임을 살리는 물결펌을 상담합니다.",
  color:
    "피부톤과 원하는 분위기에 맞는 염색 컬러를 상담합니다.",
  "wedding-color":
    "웨딩 촬영과 본식 스타일에 어울리는 웨딩염색 컬러를 상담합니다.",
};

type Props = {
  params: Promise<{
    region: string;
    service: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(REGIONS).flatMap((region) =>
    Object.keys(SERVICES).map((service) => ({
      region,
      service,
    }))
  );
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { region, service } = await params;

  if (service === "extensions") {
    return {
      title: "웨딩염색 | 하이유헤어 해린",
      robots: { index: false, follow: true },
    };
  }

  const regionName = REGIONS[region];
  const serviceName = SERVICES[service];

  if (!regionName || !serviceName) {
    return {};
  }

  const title = `${regionName} ${serviceName} | 하이유헤어 해린`;
  const description =
    `${regionName} ${serviceName} 상담. ` +
    `${SERVICE_DESCRIPTIONS[service]} ` +
    "천안 청당동 하이유헤어 해린.";

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE}/area/${region}/${service}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE}/area/${region}/${service}`,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function AreaServicePage({
  params,
}: Props) {
  const { region, service } = await params;

  if (service === "extensions" && REGIONS[region]) {
    permanentRedirect(
      `/area/${region}/wedding-color`
    );
  }

  const regionName = REGIONS[region];
  const serviceName = SERVICES[service];

  if (!regionName || !serviceName) {
    notFound();
  }

  const description =
    SERVICE_DESCRIPTIONS[service];

  return (
    <main
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "48px 20px 90px",
        fontFamily: "sans-serif",
        lineHeight: 1.8,
      }}
    >
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "#666",
          fontSize: 14,
        }}
      >
        ← 하이유헤어 홈으로
      </Link>

      <section
        style={{
          marginTop: 28,
          padding: "48px 24px",
          borderRadius: 22,
          background: "#f9f1f2",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#9c6875" }}>
          HIU HAIR · HAERIN
        </p>

        <h1
          style={{
            fontSize: "clamp(26px, 5vw, 40px)",
            lineHeight: 1.4,
            margin: "18px 0",
            color: "#30252a",
          }}
        >
          {regionName} {serviceName}
        </h1>

        <p style={{ color: "#655a5e" }}>
          천안 청당동 하이유헤어 해린
        </p>

        <p style={{ marginTop: 20 }}>
          {description}
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            marginTop: 25,
            padding: "13px 26px",
            borderRadius: 999,
            color: "white",
            background: "#a56e7b",
            textDecoration: "none",
          }}
        >
          홈페이지에서 상담 안내 확인
        </Link>
      </section>

      <section style={{ marginTop: 50 }}>
        <h2>{serviceName} 시술 안내</h2>

        <p>
          하이유헤어 해린은 천안 청당동에
          위치하고 있습니다.
          고객님의 모질, 모발 상태,
          원하는 스타일을 고려하여
          상담을 진행합니다.
        </p>

        <p>
          {regionName}에서 {serviceName}을
          알아보고 계신다면,
          상담을 통해 원하는 디자인과
          시술 가능 여부를 확인해 보세요.
        </p>
      </section>

      <section style={{ marginTop: 48 }}>
        <h2>다른 헤어 시술 살펴보기</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 20,
          }}
        >
          {Object.entries(SERVICES).map(
            ([slug, name]) => (
              <Link
                key={slug}
                href={`/area/${region}/${slug}`}
                style={{
                  padding: "10px 15px",
                  border: "1px solid #e4d4d8",
                  borderRadius: 12,
                  color: "#44343a",
                  textDecoration: "none",
                  background:
                    slug === service
                      ? "#f9e8ed"
                      : "#fff",
                }}
              >
                {name}
              </Link>
            )
          )}
        </div>
      </section>

      <section style={{ marginTop: 48 }}>
        <h2>지역별 시술 안내</h2>

        <p>
          하이유헤어 매장은 천안 청당동에
          있습니다. 아래 지역에서도
          시술 정보를 확인할 수 있습니다.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 20,
          }}
        >
          {Object.entries(REGIONS).map(
            ([slug, name]) => (
              <Link
                key={slug}
                href={`/area/${slug}/${service}`}
                style={{
                  padding: "10px 15px",
                  border: "1px solid #ddd",
                  borderRadius: 12,
                  color: "#333",
                  textDecoration: "none",
                }}
              >
                {name}
              </Link>
            )
          )}
        </div>
      </section>

      <footer
        style={{
          marginTop: 65,
          paddingTop: 25,
          borderTop: "1px solid #eee",
          color: "#777",
          fontSize: 13,
        }}
      >
        하이유헤어 해린 · 천안 청당동
      </footer>
    </main>
  );
}
