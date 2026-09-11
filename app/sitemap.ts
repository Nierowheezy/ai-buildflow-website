import type { MetadataRoute } from "next";
import { getAllDocSlugs } from "@/lib/mdx";
import { flattenDocNav } from "@/lib/docs";

const baseUrl = "https://ai-buildflow-dev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const landingRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const navRoutes: MetadataRoute.Sitemap = flattenDocNav().map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Ensure every content route is covered even if not in the nav
  const contentRoutes: MetadataRoute.Sitemap = getAllDocSlugs()
    .map((slug) => `/docs/${slug}`)
    .filter((href) => !flattenDocNav().some((i) => i.href === href))
    .map((href) => ({
      url: `${baseUrl}${href}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    }));

  return [...landingRoutes, ...navRoutes, ...contentRoutes];
}