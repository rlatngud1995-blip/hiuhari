
import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";

const SITE = "https://www.hiuhair.com";
const BRAND = "하이유헤어 청당점";
const DESIGNER = "이해린 디자이너";
const ADDRESS = "충남 천안시 동남구 청수4로 16, 2층 201호";

const REGIONS: Record<string, string> = {
  cheonan: "천안",
  cheongdang: "청당동",
  sinbang: "신방동",
  ssangyong: "쌍용동",
  buldang: "불당동",
  dujeong: "두정동",
};

type FAQ = { q: string; a: string };

type Service = {
  name: string;
  english: string;
  headline: string;
  description: string;
  storyTitle: string;
  story: string[];
  features: { title: string; text: string }[];
  recommends: string[];
  process: { title: string; text: string }[];
  care: string[];
  faqs: FAQ[];
};

const SERVICES: Record<string, Service> = {
  "womens-hair": {
    name: "여자머리 전문",
    english: "PERSONAL HAIR DESIGN",
    headline: "나에게 가장 자연스럽게 어울리는 아름다움",
    description:
      "얼굴형과 모질, 평소 스타일링 습관을 고려하는 여성 헤어 디자인. 유행만을 따르기보다 자신에게 어울리는 스타일을 함께 찾아갑니다.",
    storyTitle:
      "좋은 헤어 디자인은 나를 이해하는 것에서 시작됩니다.",
    story: [
      "같은 스타일이라도 얼굴형과 모발의 굵기, 숱에 따라 완성되는 분위기는 달라질 수 있습니다. 원하는 이미지뿐 아니라 현재 모발 상태까지 살펴보는 것이 중요합니다.",
      "하이유헤어 청당점 이해린 디자이너와 상담을 통해 커트 길이, 볼륨의 위치, 컬의 움직임, 컬러 방향을 조율하며 일상에서도 어울리는 헤어 디자인을 찾아보세요.",
    ],
    features: [
      {
        title: "FACE BALANCE",
        text: "얼굴형과 목선, 전체적인 비율을 고려한 헤어 실루엣 상담",
      },
      {
        title: "HAIR TEXTURE",
        text: "모발의 굵기와 숱, 손상 상태, 자연스러운 흐름 확인",
      },
      {
        title: "DAILY STYLING",
        text: "평소 드라이 시간과 손질 습관을 고려한 디자인 제안",
      },
    ],
    recommends: [
      "나에게 어울리는 헤어스타일을 찾고 싶은 분",
      "기존 스타일에서 분위기 변화를 주고 싶은 분",
      "얼굴형에 맞는 길이와 볼륨이 고민인 분",
      "평소 관리하기 편한 스타일을 원하는 분",
    ],
    process: [
      { title: "스타일 상담", text: "원하는 이미지와 평소 손질 습관을 확인합니다." },
      { title: "모발 상태 확인", text: "모질과 모량, 손상 상태를 살펴봅니다." },
      { title: "디자인 조율", text: "길이와 볼륨, 컬러 등 디자인 방향을 상담합니다." },
      { title: "관리 안내", text: "선택한 스타일에 맞는 손질 방법을 안내합니다." },
    ],
    care: [
      "모발 상태에 맞는 샴푸와 컨디셔너를 사용해 주세요.",
      "열기구 사용 전 열 보호 제품을 고려해 주세요.",
      "헤어 디자인에 따라 적절한 손질 및 관리 주기를 상담해 보세요.",
    ],
    faqs: [
      {
        q: "어떤 헤어스타일이 어울릴지 모르겠어요.",
        a: "얼굴형과 모발 상태, 평소 선호하는 분위기를 살펴보며 적합한 디자인을 상담할 수 있습니다.",
      },
      {
        q: "손질이 쉬운 스타일도 가능한가요?",
        a: "평소 사용할 수 있는 손질 시간과 모질을 고려해 디자인을 선택할 수 있습니다.",
      },
      {
        q: "참고 사진을 가져가도 되나요?",
        a: "네. 원하는 분위기가 담긴 사진은 상담에 도움이 됩니다.",
      },
    ],
  },

  "womens-cut": {
    name: "여성 커트",
    english: "WOMEN'S HAIRCUT",
    headline: "작은 길이의 차이로 완성하는 새로운 분위기",
    description:
      "얼굴 주변 라인과 머리의 전체적인 균형을 고려하는 여성 커트. 모발의 움직임과 볼륨을 자연스럽게 살리는 디자인을 상담합니다.",
    storyTitle: "커트는 전체적인 인상을 결정하는 가장 기본적인 디자인입니다.",
    story: [
      "같은 길이에서도 층의 위치와 앞머리 연결, 끝선의 무게감에 따라 인상이 크게 달라질 수 있습니다.",
      "얼굴을 감싸는 라인과 모발이 떨어지는 방향을 함께 고려하며 일상에서도 자연스럽게 어울리는 커트 스타일을 상담합니다.",
    ],
    features: [
      { title: "FACE LINE", text: "얼굴 주변에 떨어지는 길이와 방향의 조화" },
      { title: "SILHOUETTE", text: "볼륨과 끝선의 무게감을 고려한 균형" },
      { title: "EASY STYLING", text: "평소 손질 습관을 고려한 커트 디자인" },
    ],
    recommends: [
      "깔끔하고 단정한 스타일을 원하는 분",
      "얼굴 주변 라인을 정리하고 싶은 분",
      "무거운 머리에 가벼운 변화를 주고 싶은 분",
      "커트만으로 분위기를 바꾸고 싶은 분",
    ],
    process: [
      { title: "길이 상담", text: "원하는 길이와 분위기를 확인합니다." },
      { title: "모발 분석", text: "모량과 모질, 가르마 방향을 살펴봅니다." },
      { title: "커트 디자인", text: "앞머리와 얼굴 주변, 전체 실루엣을 조율합니다." },
      { title: "스타일링 안내", text: "드라이 방향과 손질 방법을 안내합니다." },
    ],
    care: [
      "커트 형태에 맞게 모발 뿌리부터 말려주세요.",
      "끝선이 뻗치는 경우 브러시로 방향을 잡아주세요.",
      "모발 성장과 형태 변화에 맞춰 커트 주기를 상담해 보세요.",
    ],
    faqs: [
      {
        q: "커트만으로 볼륨을 살릴 수 있나요?",
        a: "층과 무게감을 조절해 볼륨감에 변화를 줄 수 있으나 실제 결과는 모질에 따라 달라집니다.",
      },
      {
        q: "앞머리도 함께 상담할 수 있나요?",
        a: "네. 얼굴형과 기존 앞머리 길이를 고려해 상담할 수 있습니다.",
      },
      {
        q: "커트 후 관리 방법도 알려주시나요?",
        a: "선택한 스타일에 맞는 기본 드라이 및 손질 방법을 안내받을 수 있습니다.",
      },
    ],
  },

  "layered-cut": {
    name: "레이어드컷",
    english: "SIGNATURE LAYERED CUT",
    headline: "가볍게 흐르는 레이어, 자연스럽게 살아나는 분위기",
    description:
      "층의 높이와 모발의 흐름을 세심하게 조율하는 레이어드컷. 얼굴 주변의 부드러운 움직임과 자연스러운 실루엣을 고려합니다.",
    storyTitle: "레이어드컷의 완성도는 층의 위치와 연결에 있습니다.",
    story: [
      "레이어드컷은 단순히 층을 많이 내는 커트가 아닙니다. 모발의 양과 길이, 원하는 볼륨에 따라 층의 높이와 형태를 결정하는 것이 중요합니다.",
      "전체 길이는 유지하면서 자연스러운 움직임을 만들거나 얼굴 주변 라인을 부드럽게 연결하는 디자인을 상담할 수 있습니다.",
    ],
    features: [
      { title: "SOFT LAYERS", text: "부드럽게 연결되는 층과 자연스러운 움직임" },
      { title: "FACE FRAMING", text: "얼굴 주변 길이와 흐름의 섬세한 조율" },
      { title: "NATURAL VOLUME", text: "볼륨과 끝선 무게감 사이의 균형" },
    ],
    recommends: [
      "긴 머리의 무게감을 줄이고 싶은 분",
      "자연스럽게 흐르는 스타일을 원하는 분",
      "얼굴 주변에 부드러운 라인을 만들고 싶은 분",
      "드라이했을 때 움직임이 살아나는 커트를 원하는 분",
    ],
    process: [
      { title: "디자인 상담", text: "원하는 층의 높이와 참고 스타일을 확인합니다." },
      { title: "모발 분석", text: "모량과 굵기, 끝선 상태를 살펴봅니다." },
      { title: "레이어 디자인", text: "얼굴 주변 라인과 층을 자연스럽게 연결합니다." },
      { title: "손질 안내", text: "층을 살리는 드라이 방법을 안내합니다." },
    ],
    care: [
      "드라이할 때 모발의 방향을 자연스럽게 잡아주세요.",
      "끝부분에 가벼운 헤어 에센스를 활용할 수 있습니다.",
      "층의 형태와 끝선 상태에 따라 관리 주기를 상담해 보세요.",
    ],
    faqs: [
      {
        q: "머리숱이 많아도 레이어드컷이 어울릴까요?",
        a: "모량과 굵기에 따라 층의 높이와 양을 조절할 수 있습니다.",
      },
      {
        q: "레이어드컷은 펌을 꼭 해야 하나요?",
        a: "반드시 필요한 것은 아니며 원하는 형태와 모질에 따라 결정할 수 있습니다.",
      },
      {
        q: "머리 길이를 유지하면서도 가능한가요?",
        a: "네. 전체 길이를 크게 줄이지 않고 층의 위치를 조정하는 방향도 상담할 수 있습니다.",
      },
    ],
  },

  "build-perm": {
    name: "빌드펌",
    english: "SOFT BUILD PERM",
    headline: "자연스러운 볼륨과 부드러운 컬의 조화",
    description:
      "볼륨과 자연스러운 곡선을 함께 고려하는 빌드펌. 모발 길이와 레이어에 맞춰 편안하고 여성스러운 분위기를 상담합니다.",
    storyTitle: "과하지 않은 컬에서 느껴지는 부드러운 매력.",
    story: [
      "빌드펌은 볼륨이 만들어지는 위치와 컬의 흐름이 중요한 스타일입니다. 모발 길이와 층의 형태에 따라 전체적인 실루엣이 달라집니다.",
      "기존 염색과 펌 이력, 현재 모발 손상 상태를 고려하여 시술 가능 여부와 원하는 디자인을 상담하는 것이 중요합니다.",
    ],
    features: [
      { title: "SOFT VOLUME", text: "전체적인 볼륨 위치와 균형을 고려한 디자인" },
      { title: "NATURAL CURL", text: "부드러운 C컬과 S컬 분위기의 조화" },
      { title: "HAIR CONDITION", text: "모발 손상도와 기존 시술 이력을 고려한 상담" },
    ],
    recommends: [
      "자연스럽고 여성스러운 펌을 원하는 분",
      "머리 끝에 부드러운 움직임을 원하는 분",
      "볼륨 있는 실루엣을 선호하는 분",
      "레이어드 스타일에 컬을 더하고 싶은 분",
    ],
    process: [
      { title: "컬 디자인 상담", text: "원하는 컬과 분위기를 확인합니다." },
      { title: "모발 점검", text: "손상도와 이전 시술 이력을 확인합니다." },
      { title: "시술 방향 상담", text: "모발 상태에 적합한 시술 방법을 결정합니다." },
      { title: "관리 안내", text: "컬을 살리는 건조 및 손질 방법을 안내합니다." },
    ],
    care: [
      "시술 후 샴푸 시점은 담당 디자이너의 안내를 따라주세요.",
      "컬을 강하게 당겨 펴기보다 가볍게 잡아주며 말려주세요.",
      "모발 상태에 맞는 보습 제품을 활용해 주세요.",
    ],
    faqs: [
      {
        q: "빌드펌과 C컬펌은 어떻게 다른가요?",
        a: "빌드펌은 다양한 컬과 볼륨의 흐름을 함께 디자인하는 경우가 많으며 구체적인 형태는 스타일에 따라 달라집니다.",
      },
      {
        q: "염색모도 빌드펌이 가능한가요?",
        a: "기존 염색 이력과 손상도에 따라 달라지므로 시술 전 확인이 필요합니다.",
      },
      {
        q: "펌 후 어떻게 말리면 좋을까요?",
        a: "컬의 방향과 디자인에 맞는 건조 방법을 안내받는 것이 좋습니다.",
      },
    ],
  },

  "wave-perm": {
    name: "물결펌",
    english: "ELEGANT WAVE PERM",
    headline: "부드럽게 이어지는 웨이브, 우아한 움직임",
    description:
      "연속적으로 흐르는 곡선과 풍성한 분위기가 특징인 물결펌. 모발 길이와 모질에 맞춰 웨이브의 크기와 움직임을 상담합니다.",
    storyTitle: "웨이브의 간격과 흐름이 스타일의 분위기를 결정합니다.",
    story: [
      "물결펌은 컬의 크기와 시작 위치, 모발의 길이에 따라 풍성하거나 차분한 느낌으로 연출될 수 있습니다.",
      "원하는 웨이브의 선명함과 평소 손질 방법을 고려해 적합한 디자인을 상담합니다.",
    ],
    features: [
      { title: "WAVE RHYTHM", text: "웨이브 크기와 간격, 흐름의 디자인" },
      { title: "SOFT MOVEMENT", text: "부드럽게 이어지는 컬의 움직임" },
      { title: "STYLE BALANCE", text: "모발 길이와 전체 볼륨 사이의 균형" },
    ],
    recommends: [
      "자연스러운 웨이브를 원하는 분",
      "긴 머리에 풍성함을 더하고 싶은 분",
      "부드럽고 우아한 분위기를 선호하는 분",
      "웨이브 스타일을 즐기고 싶은 분",
    ],
    process: [
      { title: "웨이브 상담", text: "원하는 컬 크기와 분위기를 확인합니다." },
      { title: "모발 체크", text: "길이와 손상 상태, 기존 시술 이력을 확인합니다." },
      { title: "디자인 결정", text: "컬의 시작 위치와 볼륨을 조율합니다." },
      { title: "컬 관리 안내", text: "웨이브를 살리는 건조 방법을 안내합니다." },
    ],
    care: [
      "웨이브를 강하게 당겨 말리지 않도록 주의해 주세요.",
      "컬 크림이나 에센스를 모발 상태에 맞게 활용할 수 있습니다.",
      "빗질과 건조 방법에 따라 웨이브 표현이 달라질 수 있습니다.",
    ],
    faqs: [
      {
        q: "물결펌은 긴 머리에만 가능한가요?",
        a: "중간 길이에서도 상담할 수 있으나 원하는 컬 크기와 길이에 따라 결과가 달라집니다.",
      },
      {
        q: "손질이 많이 필요한가요?",
        a: "모질과 컬의 형태에 따라 다르며 평소 스타일링 시간을 고려해 상담할 수 있습니다.",
      },
      {
        q: "손상모도 물결펌을 할 수 있나요?",
        a: "모발 상태에 따라 시술이 어렵거나 다른 디자인이 권장될 수 있습니다.",
      },
    ],
  },

  color: {
    name: "여성 염색",
    english: "PERSONAL HAIR COLOR",
    headline: "컬러 하나로 달라지는 나만의 분위기",
    description:
      "피부톤과 평소 스타일, 원하는 이미지에 어울리는 헤어 컬러 상담. 밝기와 색감의 차이를 고려해 자연스러운 변화를 디자인합니다.",
    storyTitle: "좋은 염색은 나에게 어울리는 톤을 찾는 과정입니다.",
    story: [
      "같은 브라운 컬러라도 밝기와 붉은기, 차가운 색감의 정도에 따라 서로 다른 분위기가 만들어질 수 있습니다.",
      "기존 염색과 탈색 이력, 모발 상태를 고려해 원하는 색상의 구현 가능 여부와 관리 방법을 상담합니다.",
    ],
    features: [
      { title: "COLOR BALANCE", text: "피부톤과 원하는 분위기를 고려한 컬러 상담" },
      { title: "TONE DESIGN", text: "밝기와 채도, 따뜻하거나 차가운 톤의 조율" },
      { title: "COLOR HISTORY", text: "기존 염색 및 탈색 이력 확인" },
    ],
    recommends: [
      "헤어 컬러로 분위기를 바꾸고 싶은 분",
      "자신에게 어울리는 브라운 컬러가 궁금한 분",
      "피부톤과 어울리는 색감을 원하는 분",
      "기존 염색 컬러를 정리하고 싶은 분",
    ],
    process: [
      { title: "컬러 상담", text: "원하는 색감과 참고 이미지를 확인합니다." },
      { title: "모발 이력 확인", text: "기존 염색 및 탈색 이력을 살펴봅니다." },
      { title: "톤 조율", text: "밝기와 구현 가능성을 상담합니다." },
      { title: "컬러 관리", text: "퇴색과 모발 상태에 따른 관리 방법을 안내합니다." },
    ],
    care: [
      "염색모에 적합한 샴푸와 트리트먼트를 고려해 주세요.",
      "고온의 열기구 사용은 컬러 유지에 영향을 줄 수 있습니다.",
      "컬러에 따라 퇴색 과정이 달라질 수 있습니다.",
    ],
    faqs: [
      {
        q: "탈색하지 않고 원하는 색상을 낼 수 있나요?",
        a: "원하는 색과 현재 모발 색상 및 염색 이력에 따라 달라집니다.",
      },
      {
        q: "염색 후 색상은 얼마나 유지되나요?",
        a: "모발 상태와 컬러 종류, 관리 습관에 따라 차이가 있습니다.",
      },
      {
        q: "컬러를 정하지 않고 방문해도 되나요?",
        a: "네. 원하는 분위기와 평소 메이크업 취향 등을 바탕으로 상담할 수 있습니다.",
      },
    ],
  },

  "wedding-color": {
    name: "웨딩염색",
    english: "BRIDAL HAIR COLOR",
    headline: "가장 특별한 순간을 위한 섬세한 헤어 컬러",
    description:
      "웨딩촬영과 본식, 드레스와 메이크업의 분위기를 고려한 웨딩염색 상담. 사진 속에서도 자연스럽게 어울리는 컬러 밸런스를 고민합니다.",
    storyTitle: "웨딩 헤어 컬러는 특별한 날의 전체적인 조화를 위한 선택입니다.",
    story: [
      "웨딩촬영과 본식에서는 조명과 드레스, 메이크업에 따라 헤어 컬러가 다르게 보일 수 있습니다. 따라서 단순히 밝은 색을 선택하기보다 전체적인 분위기를 고려하는 것이 중요합니다.",
      "웨딩 일정과 기존 염색 이력, 모발 상태를 확인하고 적합한 톤과 시술 시점을 상담합니다. 원하는 드레스와 헤어스타일 참고 사진을 준비하면 도움이 됩니다.",
    ],
    features: [
      { title: "BRIDAL MOOD", text: "드레스와 메이크업 분위기를 고려한 색감" },
      { title: "PHOTO BALANCE", text: "웨딩촬영 조명과 사진 속 컬러 표현 고려" },
      { title: "WEDDING SCHEDULE", text: "촬영 및 본식 일정을 고려한 시술 상담" },
    ],
    recommends: [
      "웨딩촬영을 앞두고 컬러가 고민인 분",
      "본식 메이크업과 어울리는 색감을 찾는 분",
      "기존 모발의 톤을 정리하고 싶은 분",
      "특별한 날 자연스러운 브라운 컬러를 원하는 분",
    ],
    process: [
      { title: "웨딩 일정 확인", text: "촬영과 본식 일정을 확인합니다." },
      { title: "스타일 무드 상담", text: "드레스와 메이크업 분위기를 살펴봅니다." },
      { title: "컬러 디자인", text: "모발 이력과 상태에 맞춰 톤을 상담합니다." },
      { title: "컬러 관리", text: "행사 전 컬러 유지 및 관리 방법을 안내합니다." },
    ],
    care: [
      "웨딩촬영과 본식 일정을 미리 알려주세요.",
      "원하는 드레스와 헤어, 메이크업 참고 사진을 준비해 보세요.",
      "시술 후 컬러 변화와 모발 상태를 고려해 관리해 주세요.",
    ],
    faqs: [
      {
        q: "웨딩염색은 본식 며칠 전에 하는 게 좋을까요?",
        a: "컬러 종류와 모발 상태에 따라 적절한 시점이 다릅니다. 일정을 미리 공유하고 상담해 결정하는 것이 좋습니다.",
      },
      {
        q: "웨딩촬영과 본식 컬러를 다르게 할 수 있나요?",
        a: "두 일정 사이의 간격과 모발 상태를 고려해 상담할 수 있습니다.",
      },
      {
        q: "탈색 없이 웨딩염색이 가능한가요?",
        a: "현재 모발 색과 원하는 컬러에 따라 다르며 탈색이 필요하지 않은 톤부터 상담할 수 있습니다.",
      },
    ],
  },
};

type Props = {
  params: Promise<{ region: string; service: string }>;
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

  if (service === "extensions" && REGIONS[region]) {
    permanentRedirect(`/area/${region}/wedding-color`);
  }

  const regionName = REGIONS[region];
  const item = SERVICES[service];

  if (!regionName || !item) return {};

  const title = `${regionName} ${item.name} | 하이유헤어 청당점 이해린 디자이너`;
  const description = `${regionName} ${item.name} 상담 안내. ${item.description} 실제 매장은 천안 청당동 하이유헤어 청당점입니다.`;
  const url = `${SITE}/area/${region}/${service}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND,
      type: "website",
      locale: "ko_KR",
    },
    robots: { index: true, follow: true },
  };
}

export default async function AreaServicePage({
  params,
}: Props) {
  const { region, service } = await params;

  if (service === "extensions" && REGIONS[region]) {
    permanentRedirect(`/area/${region}/wedding-color`);
  }

  const regionName = REGIONS[region];
  const item = SERVICES[service];

  if (!regionName || !item) notFound();

  const currentUrl = `${SITE}/area/${region}/${service}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE },
        { "@type": "ListItem", position: 2, name: "지역별 헤어스타일", item: `${SITE}/area` },
        {
          "@type": "ListItem",
          position: 3,
          name: `${regionName} ${item.name}`,
          item: currentUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: item.faqs.map((faq) => ({
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
    <main className="hiu-premium">
      <style>{`
        .hiu-premium {
          --navy:#193b71;
          --navy-dark:#122c52;
          --cream:#f7f5f1;
          --gold:#ac9677;
          --ink:#292e36;
          --muted:#727983;
          font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Noto Sans KR",sans-serif;
          background:#fff;
          color:var(--ink);
          min-height:100vh;
          word-break:keep-all;
        }
        .hiu-premium *{box-sizing:border-box}
        .hiu-premium a{text-decoration:none;color:inherit}
        .hiu-container{width:min(1100px,calc(100% - 40px));margin:auto}
        .hiu-header{background:#fff;border-bottom:1px solid #ede9e3}
        .hiu-header-inner{min-height:82px;display:flex;align-items:center;justify-content:space-between;gap:20px}
        .hiu-logo{font:29px Georgia,serif;letter-spacing:3px;color:var(--navy)!important}
        .hiu-header-links{display:flex;gap:25px;font-size:13px;color:#555e69}
        .hiu-header-links a:hover{color:var(--navy)}
        .hiu-breadcrumb{display:flex;flex-wrap:wrap;gap:10px;padding:18px 0;color:#858a92;font-size:12px}
        .hiu-hero{background:var(--cream);position:relative;overflow:hidden}
        .hiu-hero:after{content:"";position:absolute;width:360px;height:360px;border:1px solid rgba(172,150,119,.17);border-radius:50%;right:-150px;bottom:-170px}
        .hiu-hero-inner{position:relative;z-index:1;min-height:500px;padding:90px 0;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}
        .hiu-eyebrow{font-size:11px;letter-spacing:3px;font-weight:700;color:var(--navy);line-height:1.8}
        .hiu-hairline{width:38px;height:1px;background:var(--gold);margin:27px auto}
        .hiu-hero h1{font-size:clamp(31px,5vw,55px);font-weight:500;line-height:1.4;letter-spacing:-1.5px;max-width:900px;margin:0}
        .hiu-hero h1 em{font-style:normal;color:var(--navy)}
        .hiu-hero-description{max-width:650px;font-size:15px;color:#6d747d;line-height:2;margin:28px auto 0}
        .hiu-actions{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:35px}
        .hiu-btn{min-height:49px;display:inline-flex;align-items:center;justify-content:center;padding:14px 25px;font-size:13px;font-weight:600;transition:background .2s}
        .hiu-btn-primary{background:var(--navy);color:#fff!important}
        .hiu-btn-primary:hover{background:var(--navy-dark)}
        .hiu-btn-outline{border:1px solid #aeb6c0;color:var(--navy)!important}
        .hiu-btn-light{background:#fff;color:var(--navy)!important}
        .hiu-service-nav{border-bottom:1px solid #ebe8e3}
        .hiu-service-inner{display:flex;gap:10px;padding:19px 0;overflow-x:auto}
        .hiu-pill{flex-shrink:0;border:1px solid #e1e1e1;padding:11px 17px;font-size:12px;color:#56606b!important;white-space:nowrap}
        .hiu-pill.active{background:var(--navy);border-color:var(--navy);color:#fff!important}
        .hiu-section{padding:92px 0}
        .hiu-soft{background:#faf9f7}
        .hiu-kicker{font-size:11px;letter-spacing:2.5px;font-weight:700;color:var(--gold);margin:0 0 17px}
        .hiu-title{font-size:clamp(27px,3.7vw,39px);font-weight:500;line-height:1.5;letter-spacing:-1px;margin:0 0 20px}
        .hiu-lead{font-size:15px;color:var(--muted);line-height:2;max-width:800px}
        .hiu-section-head{margin-bottom:40px}
        .hiu-story-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:80px}
        .hiu-story-index{border-top:2px solid var(--navy);padding-top:18px;font:16px Georgia,serif;color:var(--navy);letter-spacing:2px}
        .hiu-story h2{font-size:clamp(25px,3.4vw,36px);font-weight:500;line-height:1.55;margin:0 0 26px}
        .hiu-story p{font-size:15px;line-height:2.1;color:#6f7680;margin:0 0 18px}
        .hiu-feature-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:17px}
        .hiu-feature{border:1px solid #ebe7e2;padding:34px 28px;background:#fff;min-height:235px}
        .hiu-number{font:25px Georgia,serif;color:var(--gold);margin-bottom:28px}
        .hiu-feature h3{font-size:14px;letter-spacing:1px;color:var(--navy);margin:0 0 14px}
        .hiu-feature p{font-size:13px;color:#737a83;line-height:1.9;margin:0}
        .hiu-recommend-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:13px}
        .hiu-recommend{display:flex;gap:17px;align-items:flex-start;border:1px solid #ebe8e3;padding:23px;background:white;font-size:14px;line-height:1.8}
        .hiu-check{color:var(--gold);font-weight:700}
        .hiu-process-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px}
        .hiu-process{border-top:2px solid #d5dce6;padding-top:21px}
        .hiu-process strong{font:32px Georgia,serif;color:#a5b3c5;display:block;margin-bottom:23px}
        .hiu-process h3{font-size:17px;color:var(--navy);margin:0 0 12px}
        .hiu-process p{font-size:13px;color:#737a83;line-height:1.9;margin:0}
        .hiu-care-box{background:var(--navy);color:#fff;display:grid;grid-template-columns:.9fr 1.1fr;gap:45px;padding:62px}
        .hiu-care-box h2{font-size:clamp(27px,3vw,35px);font-weight:500;line-height:1.55;margin:0}
        .hiu-care-list{display:grid;gap:19px}
        .hiu-care-item{border-bottom:1px solid rgba(255,255,255,.22);padding-bottom:18px;font-size:14px;line-height:1.9;color:#e6ecf5}
        .hiu-care-item span{color:#d0b998;margin-right:15px}
        .hiu-faq{border-top:1px solid #e5e5e5}
        .hiu-faq details{border-bottom:1px solid #e5e5e5;padding:23px 0}
        .hiu-faq summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;gap:15px;font-size:15px;line-height:1.8;font-weight:600}
        .hiu-faq summary::-webkit-details-marker{display:none}
        .hiu-faq summary:after{content:"+";font-size:22px;font-weight:400;color:var(--navy)}
        .hiu-faq details[open] summary:after{content:"−"}
        .hiu-faq details p{color:#6d7580;font-size:14px;line-height:2;padding:10px 30px 0 0;margin:0}
        .hiu-region-section{background:var(--cream);padding:75px 0}
        .hiu-region-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
        .hiu-region-card{background:white;padding:23px 20px;border:1px solid #e6e1db;color:var(--navy)!important;font-size:14px;font-weight:600;display:flex;justify-content:space-between;gap:10px}
        .hiu-region-card.current{background:var(--navy);color:#fff!important}
        .hiu-region-notice{font-size:13px;color:#777d85;line-height:1.9;margin:25px 0 0}
        .hiu-contact{background:var(--navy);color:#fff;padding:90px 0;text-align:center}
        .hiu-contact h2{font-size:clamp(29px,4vw,43px);line-height:1.5;font-weight:500;margin:18px 0}
        .hiu-contact p{font-size:14px;line-height:2;color:#dce4ef;max-width:680px;margin:0 auto}
        .hiu-contact .hiu-btn-outline{border-color:#8d9db7;color:white!important}
        .hiu-footer{background:#112a4e;color:#b4c2d4;text-align:center;padding:38px 20px;font-size:12px;line-height:2}
        .hiu-footer a{color:#fff}
        .hiu-footer-logo{font:24px Georgia,serif;letter-spacing:3px;color:#fff;margin-bottom:12px}
        @media(max-width:800px){
          .hiu-story-grid{grid-template-columns:1fr;gap:30px}
          .hiu-process-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
          .hiu-care-box{grid-template-columns:1fr;padding:40px;gap:30px}
        }
        @media(max-width:600px){
          .hiu-container{width:calc(100% - 36px)}
          .hiu-header-inner{min-height:72px}
          .hiu-logo{font-size:23px;letter-spacing:1px}
          .hiu-header-links{gap:12px;font-size:11px}
          .hiu-header-links a:nth-child(2){display:none}
          .hiu-hero-inner{min-height:430px;padding:70px 0}
          .hiu-hero h1{font-size:31px;letter-spacing:-.8px}
          .hiu-hero-description{font-size:13px}
          .hiu-section{padding:65px 0}
          .hiu-feature-grid{grid-template-columns:1fr;gap:10px}
          .hiu-feature{min-height:auto;padding:26px}
          .hiu-number{margin-bottom:13px}
          .hiu-recommend-grid{grid-template-columns:1fr;gap:10px}
          .hiu-recommend{padding:18px}
          .hiu-process-grid{gap:28px 16px}
          .hiu-process h3{font-size:15px}
          .hiu-care-box{padding:32px 24px}
          .hiu-region-section{padding:65px 0}
          .hiu-region-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
          .hiu-region-card{padding:19px 13px;font-size:12px}
          .hiu-contact{padding:72px 0}
          .hiu-btn{font-size:12px}
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas).replace(/</g, "\\u003c"),
        }}
      />

      <header className="hiu-header">
        <div className="hiu-container hiu-header-inner">
          <Link href="/" className="hiu-logo">HI U HAIR</Link>
          <nav className="hiu-header-links" aria-label="상단 메뉴">
            <Link href="/">홈</Link>
            <Link href="/hair">포트폴리오</Link>
            <Link href="/area">지역별 시술</Link>
          </nav>
        </div>
      </header>

      <div className="hiu-container">
        <nav className="hiu-breadcrumb" aria-label="현재 위치">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/area">지역별 시술</Link>
          <span>/</span>
          <span>{regionName} {item.name}</span>
        </nav>
      </div>

      <section className="hiu-hero">
        <div className="hiu-container hiu-hero-inner">
          <span className="hiu-eyebrow">
            HI U HAIR · {item.english}
          </span>
          <div className="hiu-hairline" />
          <h1>
            <em>{regionName} {item.name}</em>
            <br />
            {item.headline}
          </h1>
          <p className="hiu-hero-description">
            {item.description}
          </p>
          <div className="hiu-actions">
            <Link href="/" className="hiu-btn hiu-btn-primary">
              시술 상담 안내 ↗
            </Link>
            <Link href="/hair" className="hiu-btn hiu-btn-outline">
              헤어 포트폴리오 보기 →
            </Link>
          </div>
        </div>
      </section>

      <nav className="hiu-service-nav" aria-label="시술 카테고리">
        <div className="hiu-container hiu-service-inner">
          {Object.entries(SERVICES).map(([slug, entry]) => (
            <Link
              key={slug}
              href={`/area/${region}/${slug}`}
              className={`hiu-pill ${slug === service ? "active" : ""}`}
              aria-current={slug === service ? "page" : undefined}
            >
              {entry.name}
            </Link>
          ))}
        </div>
      </nav>

      <section className="hiu-section">
        <div className="hiu-container hiu-story-grid">
          <div className="hiu-story-index">01 / DESIGN STORY</div>
          <div className="hiu-story">
            <h2>{item.storyTitle}</h2>
            {item.story.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p>
              {regionName}에서 {item.name}을 알아보고 계신다면
              천안 청당동 하이유헤어 이해린 디자이너와
              원하는 스타일을 상담해 보세요.
            </p>
          </div>
        </div>
      </section>

      <section className="hiu-section hiu-soft">
        <div className="hiu-container">
          <div className="hiu-section-head">
            <p className="hiu-kicker">02 / DESIGN DETAILS</p>
            <h2 className="hiu-title">
              작은 디테일이 만드는
              <br />스타일의 차이
            </h2>
            <p className="hiu-lead">
              {item.name} 디자인에서 중요하게 고려할 수 있는
              세 가지 포인트를 소개합니다.
            </p>
          </div>
          <div className="hiu-feature-grid">
            {item.features.map((feature, index) => (
              <article key={feature.title} className="hiu-feature">
                <div className="hiu-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hiu-section">
        <div className="hiu-container">
          <div className="hiu-section-head">
            <p className="hiu-kicker">03 / RECOMMENDED FOR</p>
            <h2 className="hiu-title">
              이런 스타일을 찾고 계신가요?
            </h2>
            <p className="hiu-lead">
              아래 항목에 해당한다면 {item.name} 디자인을 상담해 보세요.
            </p>
          </div>
          <div className="hiu-recommend-grid">
            {item.recommends.map((text) => (
              <div key={text} className="hiu-recommend">
                <span className="hiu-check">✓</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hiu-section hiu-soft">
        <div className="hiu-container">
          <div className="hiu-section-head">
            <p className="hiu-kicker">04 / CONSULTING GUIDE</p>
            <h2 className="hiu-title">
              나에게 맞는 스타일을 찾는 과정
            </h2>
            <p className="hiu-lead">
              고객님의 모발 상태와 원하는 디자인에 따라
              상담 및 시술 과정은 달라질 수 있습니다.
            </p>
          </div>
          <div className="hiu-process-grid">
            {item.process.map((step, index) => (
              <article key={index} className="hiu-process">
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hiu-section">
        <div className="hiu-container">
          <div className="hiu-care-box">
            <div>
              <p className="hiu-kicker" style={{ color: "#d0b998" }}>
                05 / HAIR CARE GUIDE
              </p>
              <h2>
                아름다운 스타일을
                <br />오래 즐기기 위한
                <br />관리 가이드
              </h2>
            </div>
            <div className="hiu-care-list">
              {item.care.map((tip, index) => (
                <div key={index} className="hiu-care-item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {tip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hiu-section hiu-soft">
        <div className="hiu-container">
          <div className="hiu-section-head">
            <p className="hiu-kicker">
              06 / FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="hiu-title">
              {item.name} 자주 묻는 질문
            </h2>
            <p className="hiu-lead">
              시술 전 궁금할 수 있는 내용을 정리했습니다.
            </p>
          </div>
          <div className="hiu-faq">
            {item.faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="hiu-region-section">
        <div className="hiu-container">
          <div className="hiu-section-head">
            <p className="hiu-kicker">07 / REGIONAL GUIDE</p>
            <h2 className="hiu-title">
              지역별 {item.name} 안내
            </h2>
            <p className="hiu-lead">
              천안 및 인근 생활권에서 방문을 고려하는
              고객을 위한 지역별 시술 정보입니다.
            </p>
          </div>
          <div className="hiu-region-grid">
            {Object.entries(REGIONS).map(([slug, name]) => (
              <Link
                key={slug}
                href={`/area/${slug}/${service}`}
                className={`hiu-region-card ${slug === region ? "current" : ""}`}
              >
                <span>{name} {item.name}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <p className="hiu-region-notice">
            ※ 위 지역은 방문 고객을 위한 검색 및 시술 안내 구분입니다.
            실제 매장은 천안 청당동 하이유헤어 청당점 한 곳이며,
            각 지역에 별도의 매장을 운영하는 것은 아닙니다.
          </p>
        </div>
      </section>

      <section className="hiu-contact">
        <div className="hiu-container">
          <p
            className="hiu-kicker"
            style={{ color: "#d0b998" }}
          >
            HI U HAIR · DESIGNER HAERIN LEE
          </p>
          <h2>
            당신에게 어울리는
            <br />아름다움을 함께 고민합니다.
          </h2>
          <p>
            {regionName} {item.name}을 고민하고 계신다면
            천안 청당동 하이유헤어 이해린 디자이너와
            원하는 스타일을 상담해 보세요.
          </p>
          <div className="hiu-actions">
            <Link href="/" className="hiu-btn hiu-btn-light">
              홈페이지에서 상담 안내 →
            </Link>
            <Link href="/hair" className="hiu-btn hiu-btn-outline">
              헤어 포트폴리오 보기 →
            </Link>
          </div>
          <p style={{ marginTop: 34, fontSize: 12 }}>
            {BRAND} · {DESIGNER}
            <br />
            {ADDRESS}
          </p>
        </div>
      </section>

      <footer className="hiu-footer">
        <div className="hiu-container">
          <div className="hiu-footer-logo">HI U HAIR</div>
          <p>
            {BRAND} | {DESIGNER}
            <br />
            {ADDRESS}
          </p>
          <p>
            <Link href="/">홈</Link>
            {" · "}
            <Link href="/hair">헤어 포트폴리오</Link>
            {" · "}
            <Link href="/area">지역별 헤어스타일</Link>
          </p>
          <p style={{ opacity: 0.6, marginTop: 22 }}>
            © HI U HAIR. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
