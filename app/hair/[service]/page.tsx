
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  notFound,
  permanentRedirect,
} from "next/navigation";

const SITE = "https://www.hiuhair.com";
const PHONE = "01023277653";
const PHONE_VIEW = "010-2327-7653";
const ADDRESS =
  "충남 천안시 동남구 청수4로 16, 2층 201호";
const BOOKING =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&theme=place";
const INSTAGRAM =
  "https://www.instagram.com/hiu_haerin/";

type Service = {
  name: string;
  english: string;
  title: string;
  intro: string;
  description: string;
  photos: { src: string; alt: string }[];
  headline: string;
  story: string[];
  features: { title: string; text: string }[];
  recommended: string[];
  process: { title: string; text: string }[];
  care: string[];
  faq: { q: string; a: string }[];
};

const services: Record<string, Service> = {
  "layered-cut": {
    name: "레이어드컷",
    english: "LAYERED CUT",
    title: "천안 청당동 레이어드컷",
    intro:
      "가벼운 움직임과 자연스러운 볼륨을 더하는 레이어드컷.",
    description:
      "천안 하이유헤어 청당점 이해린 디자이너의 여성 레이어드컷 안내. 얼굴형과 모발 길이에 어울리는 디자인을 상담합니다.",
    photos: [
      { src: "/IMG_1427.jpeg", alt: "하이레이어드컷 C컬" },
      { src: "/IMG_1444.jpeg", alt: "레이어드 빌드펌" },
    ],
    headline:
      "가볍게 흐르는 레이어, 자연스럽게 완성되는 실루엣",
    story: [
      "레이어드컷은 단순히 층을 많이 내는 커트가 아닙니다. 모발의 길이와 숱, 얼굴형에 따라 층의 높이와 연결 방식을 조절하는 것이 중요합니다.",
      "모발이 떨어지는 방향과 얼굴 주변의 라인, 끝선의 무게감을 함께 고려하면 서로 다른 분위기의 레이어드 스타일을 표현할 수 있습니다.",
      "하이레이어드컷과 C컬 스타일 등 원하는 이미지를 바탕으로 자연스럽게 어울리는 디자인을 상담합니다.",
    ],
    features: [
      {
        title: "FACE FRAMING",
        text: "얼굴 주변 라인과 모발의 흐름을 고려하는 디자인",
      },
      {
        title: "SOFT LAYERS",
        text: "층의 높이와 끝선의 무게감을 조율하는 레이어",
      },
      {
        title: "NATURAL VOLUME",
        text: "모량과 모질에 어울리는 자연스러운 볼륨",
      },
    ],
    recommended: [
      "긴 머리의 무게감을 줄이고 싶은 분",
      "자연스러운 층과 움직임을 원하는 분",
      "얼굴 주변 라인을 부드럽게 표현하고 싶은 분",
      "길이를 유지하면서 분위기를 바꾸고 싶은 분",
    ],
    process: [
      { title: "스타일 상담", text: "원하는 길이와 레이어 높이를 확인합니다." },
      { title: "모발 분석", text: "모량과 모질, 끝선의 상태를 살펴봅니다." },
      { title: "디자인 조율", text: "얼굴 주변 라인과 층의 연결을 상담합니다." },
      { title: "관리 안내", text: "드라이 방향과 손질 방법을 안내합니다." },
    ],
    care: [
      "모발의 흐름에 맞춰 드라이 방향을 잡아주세요.",
      "끝부분에 가벼운 에센스를 사용할 수 있습니다.",
      "레이어 형태에 맞는 커트 주기를 상담해 보세요.",
    ],
    faq: [
      {
        q: "머리숱이 많아도 레이어드컷이 가능한가요?",
        a: "모량과 모발 굵기에 맞춰 층의 높이와 무게감을 조절하는 방향으로 상담할 수 있습니다.",
      },
      {
        q: "레이어드컷은 펌을 꼭 해야 하나요?",
        a: "반드시 필요한 것은 아닙니다. 모질과 원하는 스타일에 따라 커트만으로 표현하거나 펌을 함께 고려할 수 있습니다.",
      },
      {
        q: "머리 길이를 유지하면서 가능한가요?",
        a: "전체 길이를 유지하면서 얼굴 주변과 윗부분의 층을 조절하는 디자인도 상담할 수 있습니다.",
      },
    ],
  },

  "build-perm": {
    name: "빌드펌",
    english: "BUILD PERM",
    title: "천안 청당동 빌드펌",
    intro:
      "부드러운 컬과 자연스러운 볼륨을 표현하는 빌드펌.",
    description:
      "천안 하이유헤어 청당점 이해린 디자이너의 빌드펌 안내. 자연스러운 볼륨과 레이어드 빌드펌 스타일을 만나보세요.",
    photos: [
      { src: "/IMG_1424.jpeg", alt: "빌드펌 매트브라운" },
      { src: "/IMG_1444.jpeg", alt: "레이어드 빌드펌" },
    ],
    headline:
      "부드러운 컬과 자연스러운 볼륨이 만나는 디자인",
    story: [
      "빌드펌은 볼륨이 만들어지는 위치와 컬의 흐름을 함께 고려하는 스타일입니다. 모발의 길이와 레이어에 따라 C컬과 S컬 느낌의 부드러운 움직임을 표현할 수 있습니다.",
      "전체적인 실루엣을 결정할 때는 컬의 크기뿐 아니라 모발의 양과 기존 시술 이력도 중요합니다.",
      "현재 모발 상태와 손상도, 원하는 이미지를 바탕으로 적합한 시술 방향을 상담합니다.",
    ],
    features: [
      {
        title: "SOFT VOLUME",
        text: "과하지 않은 볼륨과 자연스러운 실루엣",
      },
      {
        title: "C & S CURL",
        text: "부드러운 컬의 연결과 움직임을 고려하는 디자인",
      },
      {
        title: "HAIR BALANCE",
        text: "레이어와 컬의 조화를 고려하는 스타일",
      },
    ],
    recommended: [
      "자연스러운 볼륨을 원하는 분",
      "머리 끝에 부드러운 컬을 더하고 싶은 분",
      "레이어드컷에 펌을 더하고 싶은 분",
      "여성스러운 분위기의 컬을 선호하는 분",
    ],
    process: [
      { title: "컬 상담", text: "원하는 컬의 크기와 형태를 확인합니다." },
      { title: "모발 점검", text: "손상도와 기존 시술 이력을 살펴봅니다." },
      { title: "디자인 조율", text: "볼륨의 위치와 컬의 흐름을 상담합니다." },
      { title: "관리 안내", text: "컬을 살리는 건조 방법을 안내합니다." },
    ],
    care: [
      "시술 후 샴푸 시점은 담당 디자이너의 안내를 따라주세요.",
      "컬의 방향을 잡아주면서 가볍게 말려주세요.",
      "모발 상태에 맞는 보습 제품을 고려해 주세요.",
    ],
    faq: [
      {
        q: "빌드펌과 일반 C컬펌은 어떻게 다른가요?",
        a: "빌드펌은 컬과 볼륨의 흐름을 함께 디자인하는 경우가 많습니다. 구체적인 형태는 원하는 스타일에 따라 달라집니다.",
      },
      {
        q: "염색한 머리도 빌드펌이 가능한가요?",
        a: "기존 염색 이력과 모발 손상도에 따라 달라집니다. 시술 전 모발 상태 확인이 필요합니다.",
      },
      {
        q: "빌드펌은 어떻게 손질하나요?",
        a: "컬의 방향과 모질에 맞춰 말리는 것이 중요하며 개별적인 관리 방법을 안내받는 것이 좋습니다.",
      },
    ],
  },

  "wave-perm": {
    name: "물결펌",
    english: "WAVE PERM",
    title: "천안 청당동 물결펌",
    intro:
      "부드럽게 흐르는 웨이브로 표현하는 물결펌.",
    description:
      "천안 하이유헤어 청당점 이해린 디자이너의 여성 물결펌. 흐르는 듯한 웨이브와 자연스러운 컬 스타일을 소개합니다.",
    photos: [
      { src: "/IMG_1423.jpeg", alt: "물결펌 밀크브라운" },
      { src: "/IMG_1424.jpeg", alt: "빌드펌 매트브라운" },
    ],
    headline:
      "부드럽게 이어지는 웨이브, 우아한 움직임",
    story: [
      "물결펌은 연속적으로 이어지는 곡선과 풍성한 움직임이 특징인 헤어스타일입니다.",
      "웨이브의 크기와 시작 위치, 모발 길이에 따라 차분하거나 풍성한 분위기를 표현할 수 있습니다.",
      "원하는 웨이브의 선명함과 현재 모발 상태, 평소 손질 방법을 고려해 디자인을 상담합니다.",
    ],
    features: [
      {
        title: "WAVE RHYTHM",
        text: "웨이브의 크기와 간격을 고려한 자연스러운 흐름",
      },
      {
        title: "SOFT MOVEMENT",
        text: "부드러운 곡선과 풍성한 움직임",
      },
      {
        title: "STYLE BALANCE",
        text: "머리 길이와 전체 볼륨의 균형",
      },
    ],
    recommended: [
      "긴 머리에 웨이브를 더하고 싶은 분",
      "풍성하고 부드러운 스타일을 선호하는 분",
      "자연스러운 곡선의 움직임을 원하는 분",
      "웨이브와 컬러의 조화를 고민하는 분",
    ],
    process: [
      { title: "웨이브 상담", text: "원하는 컬의 크기를 확인합니다." },
      { title: "모발 분석", text: "길이와 손상도를 확인합니다." },
      { title: "컬 디자인", text: "컬의 시작 위치와 볼륨을 상담합니다." },
      { title: "관리 안내", text: "웨이브를 살리는 손질 방법을 안내합니다." },
    ],
    care: [
      "컬을 강하게 당겨 펴면서 말리지 않도록 주의해 주세요.",
      "모발 상태에 맞는 컬 크림이나 에센스를 활용할 수 있습니다.",
      "건조와 빗질 방법에 따라 웨이브 표현이 달라질 수 있습니다.",
    ],
    faq: [
      {
        q: "물결펌은 긴 머리에만 가능한가요?",
        a: "중간 길이에서도 상담할 수 있으나 모발 길이에 따라 웨이브 표현이 달라집니다.",
      },
      {
        q: "물결펌은 손질이 어려운가요?",
        a: "모질과 컬의 형태에 따라 달라집니다. 평소 관리 습관을 고려해 상담할 수 있습니다.",
      },
      {
        q: "손상모도 물결펌을 할 수 있나요?",
        a: "모발 상태에 따라 시술이 어려울 수 있으므로 사전 확인이 필요합니다.",
      },
    ],
  },

  color: {
    name: "여성 염색",
    english: "HAIR COLOR",
    title: "천안 청당동 여성 염색",
    intro:
      "나만의 분위기를 색감으로 표현하는 헤어 컬러.",
    description:
      "천안 하이유헤어 청당점 이해린 디자이너의 여성 염색. 베이지브라운, 루비레드, 블루, 베이비핑크 등 다양한 컬러를 소개합니다.",
    photos: [
      { src: "/IMG_1433.jpeg", alt: "루비레드 염색" },
      { src: "/IMG_1445.jpeg", alt: "블루 염색" },
      { src: "/IMG_1446.jpeg", alt: "베이비핑크 염색" },
      { src: "/IMG_1425.jpeg", alt: "베이지브라운 염색" },
    ],
    headline:
      "컬러 하나로 달라지는 나만의 새로운 분위기",
    story: [
      "헤어 컬러는 같은 색상 이름이라도 밝기와 채도, 기존 모발 색상에 따라 서로 다른 분위기를 만들어냅니다.",
      "베이지브라운처럼 자연스러운 색감부터 루비레드, 블루, 베이비핑크 등 개성 있는 컬러까지 원하는 이미지를 바탕으로 상담할 수 있습니다.",
      "이전 염색과 탈색 이력, 현재 모발의 손상 상태를 확인하여 컬러의 구현 가능 여부와 관리 방법을 함께 고려합니다.",
    ],
    features: [
      {
        title: "COLOR BALANCE",
        text: "피부톤과 원하는 분위기의 조화",
      },
      {
        title: "TONE DESIGN",
        text: "밝기와 채도, 컬러의 방향을 고려한 디자인",
      },
      {
        title: "COLOR HISTORY",
        text: "이전 염색·탈색 이력을 확인하는 상담",
      },
    ],
    recommended: [
      "헤어 컬러로 분위기를 바꾸고 싶은 분",
      "자신에게 어울리는 색감이 궁금한 분",
      "개성 있는 컬러를 시도하고 싶은 분",
      "기존 염색 컬러를 정리하고 싶은 분",
    ],
    process: [
      { title: "컬러 상담", text: "원하는 색감과 이미지를 확인합니다." },
      { title: "모발 이력 확인", text: "기존 염색·탈색 이력을 살펴봅니다." },
      { title: "톤 디자인", text: "원하는 밝기와 가능 여부를 상담합니다." },
      { title: "컬러 관리", text: "퇴색과 관리 방법을 안내합니다." },
    ],
    care: [
      "염색 모발에 적합한 샴푸와 트리트먼트를 고려해 주세요.",
      "고온 열기구 사용은 색감 유지에 영향을 줄 수 있습니다.",
      "컬러 종류에 따라 퇴색 속도가 달라질 수 있습니다.",
    ],
    faq: [
      {
        q: "탈색하지 않고 원하는 색을 낼 수 있나요?",
        a: "현재 모발 색과 원하는 컬러, 기존 염색 이력에 따라 달라집니다.",
      },
      {
        q: "염색 컬러는 얼마나 유지되나요?",
        a: "모발 상태와 색상 종류, 관리 습관에 따라 차이가 있습니다.",
      },
      {
        q: "원하는 컬러를 정하지 않고 가도 되나요?",
        a: "네. 원하는 분위기와 평소 스타일을 바탕으로 컬러 방향을 상담할 수 있습니다.",
      },
    ],
  },

  "wedding-color": {
    name: "웨딩염색",
    english: "WEDDING HAIR COLOR",
    title: "천안 청당동 웨딩염색",
    intro:
      "특별한 날의 분위기를 더욱 아름답게 완성하는 웨딩 헤어 컬러.",
    description:
      "천안 하이유헤어 청당점 이해린 디자이너의 웨딩염색 상담. 웨딩촬영과 결혼식 전 피부톤과 웨딩 분위기에 어울리는 컬러를 안내합니다.",
    photos: [
      {
        src: "/IMG_1475.jpeg",
        alt: "웨딩 헤어 컬러 대표 이미지",
      },
      {
        src: "/IMG_1425.jpeg",
        alt: "베이지브라운 컬러 참고 사진",
      },
      {
        src: "/IMG_1424.jpeg",
        alt: "매트브라운 컬러 참고 사진",
      },
    ],
    headline:
      "가장 특별한 순간을 위한 섬세한 헤어 컬러",
    story: [
      "웨딩염색은 드레스와 메이크업, 웨딩촬영 조명, 본식 분위기를 함께 고려하는 컬러 상담입니다.",
      "사진 속에서 표현되는 헤어 컬러는 실제 조명과 촬영 환경에 따라 달라질 수 있기 때문에 전체적인 조화를 고려하는 것이 중요합니다.",
      "촬영 및 본식 날짜와 현재 모발 상태, 기존 염색 이력을 확인하여 원하는 색감과 적절한 시술 시점을 상담합니다.",
    ],
    features: [
      {
        title: "BRIDAL MOOD",
        text: "드레스와 메이크업 분위기를 고려한 컬러",
      },
      {
        title: "PHOTO BALANCE",
        text: "사진과 촬영 조명을 고려한 색감",
      },
      {
        title: "WEDDING SCHEDULE",
        text: "웨딩촬영과 본식 일정에 맞춘 상담",
      },
    ],
    recommended: [
      "웨딩촬영을 준비하고 있는 분",
      "본식에 어울리는 컬러를 고민하는 분",
      "드레스와 메이크업에 맞는 색감을 원하는 분",
      "기존 모발 색상을 정리하고 싶은 분",
    ],
    process: [
      { title: "일정 확인", text: "촬영과 본식 날짜를 확인합니다." },
      { title: "무드 상담", text: "드레스 및 메이크업 분위기를 살펴봅니다." },
      { title: "컬러 디자인", text: "모발 상태와 원하는 색감을 상담합니다." },
      { title: "관리 안내", text: "행사 전 컬러 관리 방법을 안내합니다." },
    ],
    care: [
      "웨딩촬영과 본식 일정을 미리 알려주세요.",
      "드레스와 메이크업 참고 이미지를 준비해 보세요.",
      "컬러의 퇴색과 모발 상태를 고려해 관리해 주세요.",
    ],
    faq: [
      {
        q: "웨딩염색은 본식 며칠 전에 해야 하나요?",
        a: "컬러 종류와 모발 상태, 퇴색 특성에 따라 적절한 시점이 달라집니다. 일정을 미리 공유하고 상담하는 것이 좋습니다.",
      },
      {
        q: "웨딩촬영과 본식 컬러를 다르게 할 수 있나요?",
        a: "두 일정의 간격과 모발 상태를 고려하여 상담할 수 있습니다.",
      },
      {
        q: "탈색 없이 웨딩염색이 가능한가요?",
        a: "현재 모발 색과 원하는 컬러에 따라 달라집니다. 탈색 없이 가능한 톤부터 상담할 수 있습니다.",
      },
    ],
  },
};

type Props = {
  params: Promise<{ service: string }>;
};

function getService(slug: string) {
  return Object.prototype.hasOwnProperty.call(
    services,
    slug
  )
    ? services[slug]
    : null;
}

export function generateStaticParams() {
  return [
    ...Object.keys(services),
    "extensions",
  ].map((service) => ({ service }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { service } = await params;

  if (service === "extensions") {
    return {
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const item = getService(service);
  if (!item) return {};

  const url = `${SITE}/hair/${service}`;
  const title =
    `${item.title} | 하이유헤어 이해린 디자이너`;

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
        {
          url: `${SITE}${item.photos[0].src}`,
          alt: item.photos[0].alt,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
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

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "홈",
          item: SITE,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "헤어 시술",
          item: `${SITE}/hair`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: item.name,
          item: `${SITE}/hair/${service}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: item.faq.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ];

  return (
    <div className="hd-page">
      <style>{`
        .hd-page {
          --navy:#193b71;
          --deep:#142945;
          --cream:#f7f5f1;
          --gold:#af9875;
          --ink:#292e36;
          --muted:#737a83;
          --line:#e7e2dc;
          background:#fff;
          color:var(--ink);
          font-family:-apple-system,BlinkMacSystemFont,
            "Apple SD Gothic Neo","Noto Sans KR",Arial,sans-serif;
          word-break:keep-all;
          min-height:100vh;
          overflow-x:clip;
        }
        .hd-page *{box-sizing:border-box}
        .hd-page a{text-decoration:none;color:inherit}
        .hd-wrap{width:min(1160px,calc(100% - 50px));margin:auto}
        .hd-header{background:#fff;border-bottom:1px solid var(--line);position:sticky;top:0;z-index:50}
        .hd-header-inner{min-height:76px;display:flex;justify-content:space-between;align-items:center;gap:20px}
        .hd-logo{font:29px Georgia,serif;letter-spacing:2px;color:var(--navy)!important;white-space:nowrap}
        .hd-header-links{display:flex;align-items:center;gap:22px;font-size:12px;font-weight:600}
        .hd-header-book{background:var(--navy);color:#fff!important;padding:14px 19px}
        .hd-breadcrumb{padding:17px 0;color:#81858d;font-size:11px;display:flex;gap:10px;flex-wrap:wrap}
        .hd-eyebrow{font-size:10px;font-weight:700;letter-spacing:2.3px;color:var(--navy);line-height:1.9}
        .hd-hero{background:var(--cream)}
        .hd-hero-grid{display:grid;grid-template-columns:1fr .95fr;min-height:580px}
        .hd-hero-content{padding:68px 60px 68px 0;display:flex;flex-direction:column;align-items:flex-start;justify-content:center}
        .hd-line{width:42px;height:1px;background:var(--gold);margin:26px 0}
        .hd-hero h1{font-size:clamp(35px,4.5vw,58px);line-height:1.3;font-weight:500;letter-spacing:-1.5px;margin:0;color:var(--navy)}
        .hd-hero h2{font-size:clamp(22px,2.6vw,35px);font-weight:450;line-height:1.55;margin:20px 0}
        .hd-hero p{font-size:14px;color:var(--muted);line-height:2.1;margin:0}
        .hd-actions{display:flex;gap:11px;flex-wrap:wrap;margin-top:29px}
        .hd-btn{display:inline-flex;justify-content:center;align-items:center;min-height:49px;padding:13px 21px;border:1px solid var(--navy);font-size:12px;font-weight:700;color:var(--navy)!important;transition:transform .2s}
        .hd-btn:hover{transform:translateY(-2px)}
        .hd-primary{background:var(--navy);color:#fff!important}
        .hd-light{background:#fff;border-color:#fff;color:var(--navy)!important}
        .hd-hero-photo{position:relative;min-height:580px;background:#e5dfd8;overflow:hidden}
        .hd-hero-photo img{object-fit:cover;object-position:center 25%}
        .hd-hero-photo:after{content:"";position:absolute;inset:55% 0 0;background:linear-gradient(transparent,rgba(11,23,42,.43))}
        .hd-image-label{position:absolute;z-index:2;bottom:30px;left:30px;color:#fff;font:24px Georgia,serif;letter-spacing:1px}
        .hd-category-nav{background:var(--deep)}
        .hd-category-inner{display:flex;gap:8px;overflow-x:auto;padding:14px 0;scrollbar-width:thin}
        .hd-category-inner a{flex-shrink:0;font-size:12px;color:#e0e8f3;padding:12px 17px}
        .hd-category-inner a.active{background:#fff;color:var(--navy);font-weight:700}
        .hd-section{padding:93px 0;scroll-margin-top:85px}
        .hd-cream{background:var(--cream)}
        .hd-heading{margin-bottom:40px}
        .hd-number{display:flex;gap:15px;align-items:center;font-size:10px;font-weight:700;letter-spacing:2px;color:var(--navy)}
        .hd-number span:first-child{font:20px Georgia,serif;color:var(--gold)}
        .hd-heading h2{font-size:clamp(31px,4vw,49px);font-weight:450;line-height:1.45;letter-spacing:-1px;margin:17px 0}
        .hd-heading p{color:var(--muted);font-size:14px;line-height:2}
        .hd-gallery{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:19px}
        .hd-gallery.three{grid-template-columns:repeat(3,minmax(0,1fr))}
        .hd-gallery.four{grid-template-columns:repeat(4,minmax(0,1fr))}
        .hd-photo-frame{position:relative;aspect-ratio:4/5;overflow:hidden;background:#ebe6de}
        .hd-photo-frame img{object-fit:cover;transition:transform .4s}
        .hd-photo:hover img{transform:scale(1.045)}
        .hd-photo-index{position:absolute;left:13px;top:13px;background:#fff;color:var(--navy);width:33px;height:33px;display:grid;place-items:center;font:15px Georgia,serif}
        .hd-photo h3{font-size:15px;margin:16px 0 6px;line-height:1.5}
        .hd-photo small{font-size:9px;letter-spacing:1px;color:var(--navy)}
        .hd-story-grid{display:grid;grid-template-columns:.7fr 1.3fr;gap:65px}
        .hd-story-side{border-top:2px solid var(--navy);padding-top:19px;color:var(--navy);font:17px Georgia,serif}
        .hd-story h2{font-size:clamp(27px,3.5vw,39px);font-weight:450;line-height:1.5;margin:0 0 27px}
        .hd-story p{color:var(--muted);font-size:15px;line-height:2.15;margin:0 0 20px}
        .hd-feature-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
        .hd-feature{background:#fff;border:1px solid var(--line);padding:31px;min-height:215px}
        .hd-feature-index{font:27px Georgia,serif;color:var(--gold);margin-bottom:26px}
        .hd-feature h3{font-size:13px;color:var(--navy);letter-spacing:1px;margin:0 0 15px}
        .hd-feature p{color:var(--muted);font-size:13px;line-height:1.9;margin:0}
        .hd-recommend-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
        .hd-recommend{display:flex;gap:15px;padding:22px;border:1px solid var(--line);font-size:14px;line-height:1.9}
        .hd-recommend span{color:var(--gold);font-weight:700}
        .hd-process-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}
        .hd-process{border-top:2px solid #d6dde7;padding-top:20px}
        .hd-process strong{font:30px Georgia,serif;color:#9baec7}
        .hd-process h3{font-size:16px;color:var(--navy);margin:23px 0 12px}
        .hd-process p{font-size:13px;color:var(--muted);line-height:1.9;margin:0}
        .hd-care{background:var(--navy);color:#fff;padding:54px;display:grid;grid-template-columns:.9fr 1.1fr;gap:45px}
        .hd-care h2{font-size:clamp(27px,3vw,36px);line-height:1.5;font-weight:450;margin:17px 0 0}
        .hd-care-list{display:grid;gap:19px}
        .hd-care-item{display:flex;gap:14px;font-size:14px;line-height:1.9;color:#e6edf7;border-bottom:1px solid rgba(255,255,255,.2);padding-bottom:18px}
        .hd-care-item span{font:17px Georgia,serif;color:#d4c1a2}
        .hd-faq{border-top:1px solid var(--line)}
        .hd-faq details{padding:23px 0;border-bottom:1px solid var(--line)}
        .hd-faq summary{display:flex;justify-content:space-between;gap:15px;cursor:pointer;font-size:15px;font-weight:600;line-height:1.8;list-style:none}
        .hd-faq summary::-webkit-details-marker{display:none}
        .hd-faq summary:after{content:"+";font-size:22px;color:var(--navy)}
        .hd-faq details[open] summary:after{content:"−"}
        .hd-faq details p{font-size:14px;color:var(--muted);line-height:2;margin:14px 0 0}
        .hd-other-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
        .hd-other{background:#fff;border:1px solid var(--line);overflow:hidden}
        .hd-other-image{position:relative;aspect-ratio:4/4;background:#e6e1dc}
        .hd-other-image img{object-fit:cover}
        .hd-other-body{padding:19px 15px}
        .hd-other-body small{display:block;color:var(--navy);font-size:9px;letter-spacing:1px;margin-bottom:10px}
        .hd-other-body strong{display:flex;justify-content:space-between;gap:8px;font-size:15px}
        .hd-booking{background:var(--navy);color:#fff;text-align:center;padding:85px 20px}
        .hd-booking h2{font-size:clamp(29px,4vw,45px);font-weight:450;line-height:1.5;margin:18px 0}
        .hd-booking p{color:#e2e9f3;line-height:2;font-size:13px}
        .hd-booking .hd-actions{justify-content:center}
        .hd-booking .hd-btn:not(.hd-light){color:#fff!important;border-color:#aab8cd}
        .hd-footer{background:#17263b;color:#c6cfdb;text-align:center;padding:45px 20px 110px;font-size:12px;line-height:2}
        .hd-footer-logo{font:29px Georgia,serif;color:#fff;letter-spacing:3px;margin-bottom:16px}
        .hd-footer-links{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;margin-top:20px;color:#fff}
        .hd-mobile-bar{display:none}
        @media(max-width:900px){
          .hd-header-links{display:none}
          .hd-story-grid{grid-template-columns:1fr;gap:30px}
          .hd-process-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
          .hd-other-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
        }
        @media(max-width:600px){
          .hd-wrap{width:calc(100% - 36px)}
          .hd-header-inner{min-height:68px}
          .hd-logo{font-size:23px;letter-spacing:1px}
          .hd-header-book{padding:12px;font-size:11px}
          .hd-hero-grid{display:flex;flex-direction:column}
          .hd-hero-content{padding:48px 0 40px;align-items:center;text-align:center}
          .hd-line{margin:22px auto}
          .hd-hero h1{font-size:33px}
          .hd-hero h2{font-size:24px}
          .hd-hero p{font-size:12px}
          .hd-actions{justify-content:center;gap:9px;width:100%}
          .hd-actions .hd-btn{flex:1;padding:12px 10px;font-size:11px}
          .hd-hero-photo{min-height:0;aspect-ratio:4/3.5;margin:0 -18px}
          .hd-image-label{font-size:20px;bottom:22px;left:22px}
          .hd-category-inner{padding:10px 0}
          .hd-category-inner a{font-size:11px;padding:11px 13px}
          .hd-section{padding:65px 0}
          .hd-heading{margin-bottom:30px}
          .hd-heading h2{font-size:35px}
          .hd-heading p{font-size:12px}
          .hd-gallery,.hd-gallery.three,.hd-gallery.four{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
          .hd-photo h3{font-size:12px;margin-top:11px}
          .hd-story h2{font-size:29px}
          .hd-story p{font-size:13px}
          .hd-feature-grid{grid-template-columns:1fr;gap:10px}
          .hd-feature{padding:24px;min-height:auto}
          .hd-feature-index{margin-bottom:14px}
          .hd-recommend-grid{grid-template-columns:1fr;gap:9px}
          .hd-recommend{font-size:13px;padding:17px}
          .hd-process-grid{gap:25px 15px}
          .hd-process h3{font-size:15px}
          .hd-care{grid-template-columns:1fr;padding:30px 23px;gap:29px}
          .hd-care h2{font-size:27px}
          .hd-care-item{font-size:13px}
          .hd-faq summary{font-size:13px}
          .hd-faq details p{font-size:12px}
          .hd-other-grid{gap:10px}
          .hd-other-body{padding:15px 12px}
          .hd-other-body strong{font-size:13px}
          .hd-booking{padding:75px 18px}
          .hd-booking h2{font-size:30px}
          .hd-footer{padding-bottom:calc(115px + env(safe-area-inset-bottom))}
          .hd-mobile-bar{display:grid;position:fixed;z-index:100;bottom:0;left:0;right:0;grid-template-columns:1fr 1fr 1.5fr;gap:8px;padding:10px 12px calc(10px + env(safe-area-inset-bottom));background:#fff;border-top:1px solid var(--line)}
          .hd-mobile-bar a{min-height:47px;display:flex;align-items:center;justify-content:center;background:#f0ede7;color:var(--navy);font-size:12px;font-weight:700}
          .hd-mobile-bar a:last-child{background:var(--navy);color:#fff}
        }
        @media(prefers-reduced-motion:reduce){
          .hd-btn,.hd-photo-frame img{transition:none}
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <header className="hd-header">
        <div className="hd-wrap hd-header-inner">
          <Link href="/" className="hd-logo">
            HI U HAIR
          </Link>

          <nav className="hd-header-links">
            <Link href="/">HOME</Link>
            <Link href="/hair">HAIR MENU</Link>
            <a href="#collection">COLLECTION</a>
            <a href="#design">DESIGN</a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM ↗
            </a>
          </nav>

          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="hd-header-book"
          >
            네이버 예약 ↗
          </a>
        </div>
      </header>

      <main>
        <div className="hd-wrap">
          <nav
            className="hd-breadcrumb"
            aria-label="현재 위치"
          >
            <Link href="/">HOME</Link>
            <span>/</span>
            <Link href="/hair">HAIR MENU</Link>
            <span>/</span>
            <span>{item.name}</span>
          </nav>
        </div>

        {/* HERO */}
        <section className="hd-hero">
          <div className="hd-wrap hd-hero-grid">
            <div className="hd-hero-content">
              <span className="hd-eyebrow">
                HI U HAIR · {item.english}
              </span>
              <div className="hd-line" />
              <h1>{item.title}</h1>
              <h2>{item.headline}</h2>
              <p>{item.intro}</p>
              <div className="hd-actions">
                <a
                  href={BOOKING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hd-btn hd-primary"
                >
                  이해린 디자이너 예약 ↗
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
            </div>

            <div className="hd-hero-photo">
              <Image
                src={item.photos[0].src}
                alt={item.photos[0].alt}
                fill
                priority
                sizes="(max-width:600px) 100vw, 50vw"
              />
              <div className="hd-image-label">
                Hair by Haerin
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY MENU */}
        <nav
          className="hd-category-nav"
          aria-label="시술 카테고리"
        >
          <div className="hd-wrap hd-category-inner">
            {Object.entries(services).map(
              ([slug, data]) => (
                <Link
                  key={slug}
                  href={`/hair/${slug}`}
                  className={
                    slug === service ? "active" : ""
                  }
                  aria-current={
                    slug === service
                      ? "page"
                      : undefined
                  }
                >
                  {data.name}
                </Link>
              )
            )}
          </div>
        </nav>

        {/* COLLECTION */}
        <section
          id="collection"
          className="hd-section"
        >
          <div className="hd-wrap">
            <div className="hd-heading">
              <div className="hd-number">
                <span>01</span>
                <span>THE HAIR COLLECTION</span>
              </div>
              <h2>Hair Collection</h2>
              <p>
                이해린 디자이너의 헤어스타일을
                만나보세요.
              </p>
            </div>

            <div
              className={
                "hd-gallery " +
                (item.photos.length === 4
                  ? "four"
                  : item.photos.length === 3
                    ? "three"
                    : "")
              }
            >
              {item.photos.map((photo, index) => (
                <article
                  key={photo.src}
                  className="hd-photo"
                >
                  <div className="hd-photo-frame">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width:600px) 50vw, 30vw"
                    />
                    <span className="hd-photo-index">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </div>
                  <h3>{photo.alt}</h3>
                  <small>
                    HI U HAIR · HAERIN
                  </small>
                </article>
              ))}
            </div>

            {service === "wedding-color" && (
              <p
                style={{
                  fontSize: 12,
                  lineHeight: 1.9,
                  color: "#737a83",
                  marginTop: 25,
                }}
              >
                웨딩 대표 이미지는 분위기
                참고용이며 실제 염색 전후
                결과를 의미하지 않습니다.
              </p>
            )}
          </div>
        </section>

        {/* DESIGN STORY */}
        <section
          id="design"
          className="hd-section hd-cream"
        >
          <div className="hd-wrap hd-story-grid">
            <div className="hd-story-side">
              02 / DESIGN STORY
            </div>

            <div className="hd-story">
              <h2>{item.headline}</h2>
              {item.story.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        </section>

        {/* DESIGN FEATURES */}
        <section className="hd-section hd-cream" style={{paddingTop:0}}>
          <div className="hd-wrap">
            <div className="hd-heading">
              <div className="hd-number">
                <span>03</span>
                <span>DESIGN DETAILS</span>
              </div>
              <h2>Design Details</h2>
              <p>
                {item.name} 디자인에서
                중요하게 고려할 수 있는 요소입니다.
              </p>
            </div>

            <div className="hd-feature-grid">
              {item.features.map(
                (feature, index) => (
                  <article
                    key={feature.title}
                    className="hd-feature"
                  >
                    <div className="hd-feature-index">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* RECOMMENDED */}
        <section className="hd-section">
          <div className="hd-wrap">
            <div className="hd-heading">
              <div className="hd-number">
                <span>04</span>
                <span>RECOMMENDED FOR</span>
              </div>
              <h2>이런 스타일을 찾고 계신가요?</h2>
              <p>
                원하는 스타일과 모발 상태에 맞춰
                상담해 보세요.
              </p>
            </div>

            <div className="hd-recommend-grid">
              {item.recommended.map((text) => (
                <div
                  key={text}
                  className="hd-recommend"
                >
                  <span>✓</span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONSULTATION */}
        <section className="hd-section hd-cream">
          <div className="hd-wrap">
            <div className="hd-heading">
              <div className="hd-number">
                <span>05</span>
                <span>CONSULTING GUIDE</span>
              </div>
              <h2>Personal Consultation</h2>
              <p>
                모발 상태와 원하는 디자인에 따라
                상담 과정은 달라질 수 있습니다.
              </p>
            </div>

            <div className="hd-process-grid">
              {item.process.map(
                (step, index) => (
                  <article
                    key={index}
                    className="hd-process"
                  >
                    <strong>
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </strong>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* HAIR CARE */}
        <section className="hd-section">
          <div className="hd-wrap">
            <div className="hd-care">
              <div>
                <span
                  className="hd-eyebrow"
                  style={{color:"#d4c1a2"}}
                >
                  06 / HAIR CARE GUIDE
                </span>
                <h2>
                  아름다운 스타일을
                  <br />
                  오래 즐기기 위한
                  <br />
                  관리 가이드
                </h2>
              </div>

              <div className="hd-care-list">
                {item.care.map(
                  (text, index) => (
                    <div
                      className="hd-care-item"
                      key={index}
                    >
                      <span>
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>
                      <div>{text}</div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="hd-section hd-cream">
          <div className="hd-wrap">
            <div className="hd-heading">
              <div className="hd-number">
                <span>07</span>
                <span>QUESTIONS & ANSWERS</span>
              </div>
              <h2>{item.name} 자주 묻는 질문</h2>
              <p>
                시술 전 궁금할 수 있는 내용을
                정리했습니다.
              </p>
            </div>

            <div className="hd-faq">
              {item.faq.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER SERVICES */}
        <section className="hd-section">
          <div className="hd-wrap">
            <div className="hd-heading">
              <div className="hd-number">
                <span>08</span>
                <span>DISCOVER MORE STYLES</span>
              </div>
              <h2>Explore More Styles</h2>
              <p>
                다른 헤어스타일도 살펴보세요.
              </p>
            </div>

            <div className="hd-other-grid">
              {others.map(([slug, other]) => (
                <Link
                  href={`/hair/${slug}`}
                  key={slug}
                  className="hd-other"
                >
                  <div className="hd-other-image">
                    <Image
                      src={other.photos[0].src}
                      alt={other.name}
                      fill
                      sizes="(max-width:600px) 50vw, 25vw"
                    />
                  </div>
                  <div className="hd-other-body">
                    <small>{other.english}</small>
                    <strong>
                      {other.name}
                      <span>↗</span>
                    </strong>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section className="hd-booking">
          <span
            className="hd-eyebrow"
            style={{color:"#d4c1a2"}}
          >
            HI U HAIR · DESIGNER HAERIN LEE
          </span>

          <h2>
            당신의 분위기를
            <br />
            디자인하다.
          </h2>

          <p>
            하이유헤어 청당점 · 이해린 디자이너
            <br />
            {ADDRESS}
          </p>

          <div className="hd-actions">
            <a
              href={BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="hd-btn hd-light"
            >
              네이버 예약하기 ↗
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
      </main>

      <footer className="hd-footer">
        <div className="hd-footer-logo">
          HI U HAIR
        </div>

        하이유헤어 청당점 · 이해린 디자이너
        <br />
        {ADDRESS}
        <br />
        {PHONE_VIEW}

        <nav className="hd-footer-links">
          <Link href="/">HOME</Link>
          <Link href="/hair">HAIR MENU</Link>
          <Link href="/area">REGIONAL GUIDE</Link>
        </nav>
      </footer>

      <nav
        className="hd-mobile-bar"
        aria-label="빠른 상담 및 예약"
      >
        <a href={`tel:${PHONE}`}>전화</a>
        <a href={`sms:${PHONE}`}>문자</a>
        <a
          href={BOOKING}
          target="_blank"
          rel="noopener noreferrer"
        >
          네이버 예약
        </a>
      </nav>
    </div>
  );
}
