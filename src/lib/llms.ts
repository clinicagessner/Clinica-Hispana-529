import {
  SITE_CONFIG,
  CONTACT_INFO,
  SERVICES,
  PROMOTIONS,
  FAQ_ITEMS,
  SOCIAL_LINKS,
  GOOGLE_REVIEWS_DATA,
} from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { getServiceFAQs } from "@/lib/service-faqs";
import { getGooglePlaceData } from "@/lib/google-places";
import es from "@/messages/es.json";

// llms.txt / llms-full.txt are generated from the same data the site renders,
// so services, promotions, posts and the Google rating never drift from the
// pages (the previous static file listed 491 reviews while the site showed 605).

const BASE = SITE_CONFIG.baseUrl;

const CATEGORY_LABELS: Record<string, string> = {
  "medicina-general": "Medicina general",
  "salud-mujer": "Salud de la mujer",
  examenes: "Exámenes y certificados",
  laboratorio: "Laboratorio y diagnóstico",
  tratamientos: "Tratamientos y procedimientos",
};

type Messages = Record<string, unknown>;
function msg(key: string): string {
  const value = key.split(".").reduce<unknown>((acc, part) => (acc as Messages)?.[part], es as Messages);
  return typeof value === "string" ? value : key;
}

async function getRating() {
  const google = await getGooglePlaceData().catch(() => null);
  return {
    rating: google?.rating ?? GOOGLE_REVIEWS_DATA.averageRating,
    total: google?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews,
  };
}

function header(rating: { rating: number; total: number }) {
  return [
    `# ${SITE_CONFIG.name}`,
    "",
    `> ${msg("about.paragraph")}`,
    "",
    "## Datos de contacto",
    `- Dirección: ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}`,
    `- Teléfono: ${CONTACT_INFO.phoneFormatted}`,
    `- WhatsApp: https://wa.me/${CONTACT_INFO.phone.replace("+", "")}`,
    `- Email: ${CONTACT_INFO.email}`,
    `- Sitio web: ${BASE} (español) · ${BASE}/en (English)`,
    `- Mapa: ${CONTACT_INFO.googleMapsUrl}`,
    "",
    "## Horario",
    `- ${CONTACT_INFO.hoursWeekday}`,
    `- ${CONTACT_INFO.hoursWeekend}`,
    "- Sin cita previa (walk-ins welcome)",
    "",
    "## Condiciones de atención",
    "- Idiomas: español (principal) e inglés",
    "- No se requiere seguro médico: pago directo, efectivo y tarjetas",
    "- Médico autorizado por USCIS (Civil Surgeon) para el examen de inmigración I-693",
    "",
    "## Reputación",
    `- Google: ${rating.total} reseñas, calificación promedio ${rating.rating.toFixed(1)} de 5`,
    "",
    "## Perfiles externos",
    ...Object.entries(SOCIAL_LINKS)
      .filter(([, url]) => Boolean(url))
      .map(([name, url]) => `- ${name.charAt(0).toUpperCase() + name.slice(1)}: ${url}`),
    "",
  ];
}

function servicesByCategory() {
  const groups = new Map<string, typeof SERVICES>();
  for (const service of [...SERVICES].sort((a, b) => a.order - b.order)) {
    groups.set(service.category, [...(groups.get(service.category) ?? []), service]);
  }
  return groups;
}

export async function buildLlmsTxt(): Promise<string> {
  const lines = header(await getRating());

  lines.push("## Servicios");
  for (const [category, services] of servicesByCategory()) {
    lines.push("", `### ${CATEGORY_LABELS[category] ?? category}`);
    for (const s of services) {
      lines.push(`- [${s.title}](${BASE}/services/${s.slug}): ${s.description} (English: ${BASE}/en/services/${s.slug})`);
    }
  }

  if (PROMOTIONS.length > 0) {
    lines.push("", "## Promociones y paquetes", `Página: ${BASE}/promociones`);
    for (const p of [...PROMOTIONS].sort((a, b) => a.order - b.order)) {
      lines.push(`- ${p.title}${p.price ? ` (${p.price})` : ""}: incluye ${p.includes.join(", ")}.`);
    }
  }

  const posts = getBlogPosts("es");
  if (posts.length > 0) {
    lines.push("", "## Blog", `Página: ${BASE}/blog`);
    for (const post of posts) {
      lines.push(`- [${post.title}](${BASE}/blog/${post.slug}) — ${post.date}: ${post.description}`);
    }
  }

  lines.push(
    "",
    "## Preguntas frecuentes",
    ...FAQ_ITEMS.map((item) => `- ${msg(item.question)} ${msg(item.answer)}`),
    "",
    "## Recursos",
    `- Contenido completo para modelos de lenguaje: ${BASE}/llms-full.txt`,
    `- Sitemap: ${BASE}/sitemap.xml`,
    ""
  );

  return lines.join("\n");
}

export async function buildLlmsFullTxt(): Promise<string> {
  const lines = header(await getRating());

  lines.push("## Servicios (contenido completo)");
  for (const [category, services] of servicesByCategory()) {
    lines.push("", `## ${CATEGORY_LABELS[category] ?? category}`);
    for (const s of services) {
      lines.push(
        "",
        `### ${s.title}`,
        `URL: ${BASE}/services/${s.slug} · English: ${BASE}/en/services/${s.slug}`,
        "",
        s.description,
        "",
        s.longDescription.trim(),
        "",
        "Incluido en este servicio:",
        ...s.features.map((f) => `- ${f}`)
      );
      const faqs = getServiceFAQs(s.slug, "es");
      if (faqs.length > 0) {
        lines.push("", "Preguntas frecuentes:", ...faqs.map((f) => `- ${f.question} ${f.answer}`));
      }
    }
  }

  if (PROMOTIONS.length > 0) {
    lines.push("", "## Promociones y paquetes", `URL: ${BASE}/promociones`);
    for (const p of [...PROMOTIONS].sort((a, b) => a.order - b.order)) {
      lines.push("", `### ${p.title}${p.price ? ` — ${p.price}` : ""}`, p.blurb, "", "Incluye:", ...p.includes.map((i) => `- ${i}`));
    }
  }

  lines.push("", "## Preguntas frecuentes generales", ...FAQ_ITEMS.map((item) => `- ${msg(item.question)} ${msg(item.answer)}`));

  const posts = getBlogPosts("es");
  if (posts.length > 0) {
    lines.push("", "## Artículos del blog");
    for (const post of posts) {
      lines.push(
        "",
        `### ${post.title}`,
        `URL: ${BASE}/blog/${post.slug}`,
        `Publicado: ${post.date}${post.dateModified && post.dateModified !== post.date ? ` · Actualizado: ${post.dateModified}` : ""} · Autor: ${post.author}`,
        "",
        // Markdown links in posts are site-relative; make them absolute for readers outside the site
        post.content.trim().replace(/\]\(\//g, `](${BASE}/`)
      );
    }
  }

  lines.push("");
  return lines.join("\n");
}
