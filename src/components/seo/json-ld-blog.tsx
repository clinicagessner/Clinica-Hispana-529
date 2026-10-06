import { SITE_CONFIG } from "@/lib/constants";
import type { BlogPost } from "@/types";

type Props = {
  post: BlogPost;
  locale: string;
};

export function JsonLdBlogPosting({ post, locale }: Props) {
  // Spanish is the default locale and has no URL prefix
  const localePath = locale === "en" ? "/en" : "";
  const url = `${SITE_CONFIG.baseUrl}${localePath}/blog/${post.slug}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: post.title,
    description: post.description,
    image: post.image
      ? `${SITE_CONFIG.baseUrl}${post.image}`
      : `${SITE_CONFIG.baseUrl}/images/og-image.jpg`,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    author: {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
      name: post.author,
      url: SITE_CONFIG.baseUrl,
    },
    publisher: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
    // Revisado por el equipo médico de la clínica (§12 B2; sin médico nombrado, §9).
    reviewedBy: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
    lastReviewed: post.dateModified || post.date,
    inLanguage: locale === "es" ? "es-MX" : "en-US",
    wordCount: post.content.split(/\s+/).length,
    articleSection: post.category || "Salud",
    keywords: post.keywords?.length
      ? post.keywords.join(", ")
      : [
          "clínica hispana Houston",
          "salud",
          "medicina familiar Houston",
          post.category?.toLowerCase() || "salud",
        ].join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "es" ? "Inicio" : "Home",
        item: SITE_CONFIG.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_CONFIG.baseUrl}${localePath}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
