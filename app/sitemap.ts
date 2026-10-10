
import type { MetadataRoute } from "next";

const SITE = "https://www.hiuhair.com";

/* 기존 헤어 시술 */
const HAIR_SERVICES = [
  "layered-cut",
  "build-perm",
  "wave-perm",
  "color",
  "extensions",
];

/* 지역별 검색 페이지 */
const REGIONS = [
  "cheonan",
  "cheongdang",
  "sinbang",
  "ssangyong",
  "buldang",
  "dujeong",
];

/* 여자머리 관련 검색 키워드 */
const AREA_SERVICES = [
  "womens-hair",
  "womens-cut",
  "layered-cut",
  "build-perm",
  "wave-perm",
  "color",
  "extensions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: SITE,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE}/reservation`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/hair`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/area`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const hairPages: MetadataRoute.Sitemap =
    HAIR_SERVICES.map((service) => ({
      url: `${SITE}/hair/${service}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const areaPages: MetadataRoute.Sitemap =
    REGIONS.flatMap((region) =>
      AREA_SERVICES.map((service) => ({
        url: `${SITE}/area/${region}/${service}`,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    );

  return [
    ...mainPages,
    ...hairPages,
    ...areaPages,
  ];
}
