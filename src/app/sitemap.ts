import type { MetadataRoute } from "next";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { locales } from "@/i18n/config";

type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  alternates?: {
    languages: Record<string, string>;
  };
};

// Real last-modified dates. Every URL used to carry the build date, and Google
// ignores <lastmod> when it always reads "today". Bump these when the content
// of the page actually changes (per-service dates go in Service.updatedAt).
const CONTENT_UPDATED_AT = {
  home: "2026-09-04",
  services: "2026-09-04",
  promotions: "2026-09-04",
  privacy: "2026-07-14",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;
  const blogPosts = getBlogPosts("es");
  const latestPostDate = blogPosts.reduce(
    (latest, post) => (post.date > latest ? post.date : latest),
    "1970-01-01"
  );
  const latestOf = (...dates: string[]) => new Date(dates.sort().at(-1)!);

  // Helper to create alternates for hreflang
  const createAlternates = (path: string) => ({
    languages: {
      es: `${baseUrl}${path}`,
      en: `${baseUrl}/en${path}`,
      "x-default": `${baseUrl}${path}`,
    },
  });

  // Static pages
  const staticPages = [
    // The home shows the latest post and the promotions, so it moves with them
    { path: "", priority: 1.0, changeFrequency: "weekly" as const, lastModified: latestOf(CONTENT_UPDATED_AT.home, CONTENT_UPDATED_AT.promotions, latestPostDate) },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const, lastModified: new Date(CONTENT_UPDATED_AT.services) },
    { path: "/promociones", priority: 0.8, changeFrequency: "monthly" as const, lastModified: new Date(CONTENT_UPDATED_AT.promotions) },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const, lastModified: new Date(latestPostDate) },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const, lastModified: new Date(CONTENT_UPDATED_AT.privacy) },
  ];

  const staticRoutes: SitemapEntry[] = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: createAlternates(page.path),
    }))
  );

  // Service pages
  const serviceRoutes: SitemapEntry[] = SERVICES.flatMap((service) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}/services/${service.slug}`,
      lastModified: new Date(service.updatedAt ?? CONTENT_UPDATED_AT.services),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: createAlternates(`/services/${service.slug}`),
    }))
  );

  // Blog posts
  const blogRoutes: SitemapEntry[] = blogPosts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: createAlternates(`/blog/${post.slug}`),
    }))
  );

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
