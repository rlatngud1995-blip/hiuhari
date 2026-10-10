
import type { MetadataRoute } from "next";

const SITE = "https://www.hiuhair.com";

const HAIR_SERVICES = [
  "layered-cut",
  "build-perm",
  "wave-perm",
  "color",
  "wedding-color",
];

const REGIONS = [
  "cheonan",
  "cheongdang",
  "sinbang",
  "ssangyong",
  "buldang",
  "dujeong",
];

const AREA_SERVICES = [
  "womens-hair",
  "womens-cut",
  "layered-cut",
  "build-perm",
  "wave-perm",
  "color",
  "wedding-color",
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
    HAIR_SERVICES.map(service => ({
      url: `${SITE}/hair/${service}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const areaPages: MetadataRoute.Sitemap =
    REGIONS.flatMap(region =>
      AREA_SERVICES.map(service => ({
        url: `${SITE}/area/${region}/${service}`,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    );

  return [...mainPages, ...hairPages, ...areaPages];
}
