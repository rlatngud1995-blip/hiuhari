
import type { MetadataRoute } from "next";

const SITE = "https://www.hiuhair.com";

const SERVICES = [
  "layered-cut",
  "build-perm",
  "wave-perm",
  "color",
  "extensions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
    ...SERVICES.map((service) => ({
      url: `${SITE}/hair/${service}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
