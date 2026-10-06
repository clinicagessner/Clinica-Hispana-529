import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function readBlogFile(slug: string, locale: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, locale, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: data.slug || slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    dateModified: data.dateModified,
    author: data.author || "Equipo Médico de Clínica Hispana Familiar 529",
    image: data.image,
    featured: data.featured || false,
    category: data.category,
    readTime: data.readTime,
    keywords: data.keywords || [],
    content: content.trim(),
  };
}

function getAllSlugs(): string[] {
  const esDir = path.join(BLOG_DIR, "es");
  if (!fs.existsSync(esDir)) return [];

  return fs
    .readdirSync(esDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

export function getBlogPosts(locale: string = "es"): BlogPost[] {
  const slugs = getAllSlugs();

  return slugs
    .map((slug) => readBlogFile(slug, locale))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string, locale: string = "es"): BlogPost | null {
  return readBlogFile(slug, locale);
}

export function getFeaturedPost(locale: string = "es"): BlogPost | null {
  // The featured post is always the most recent one (posts are sorted by date desc)
  const posts = getBlogPosts(locale);
  return posts[0] || null;
}

export function getRelatedPosts(slug: string, locale: string = "es", limit: number = 3): BlogPost[] {
  const posts = getBlogPosts(locale);
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}

// Servicios de cada post (§12 B1): cada servicio enlaza a sus artículos y así
// ningún post queda con menos de 3 enlaces de contenido entrantes.
export const POST_SERVICES: Record<string, string[]> = {
  "control-diabetes-houston-guia-pacientes": ["condiciones-cronicas", "examenes-sangre", "farmacia"],
  "laboratorio-clinico-houston-analisis-sangre": ["examenes-sangre", "tiroides", "examen-heces"],
  "vitamina-b12-beneficios-inyecciones-houston": ["examenes-sangre", "sueros-vitaminados"],
  "salud-mujer-houston-servicios-ginecologia": ["ginecologia", "prueba-embarazo", "anticonceptivos", "ultrasonido"],
  "guia-examen-medico-inmigracion-i693-houston": ["examenes-inmigracion", "vacunas", "prueba-tuberculosis"],
  "examen-dot-cdl-camioneros-houston": ["examen-dot", "examen-alcohol-drogas", "electrocardiograma"],
  "atencion-medica-sin-seguro-houston": ["condiciones-cronicas", "enfermedades-respiratorias", "examen-fisico-escolar"],
  "bienvenidos-clinica-hispana-familiar-529": ["suturas-heridas", "unas-encarnadas", "alergias"],
  "salud-hombre-houston-chequeos-preventivos": ["salud-hombre", "infecciones-urinarias", "electrocardiograma"],
  "gripe-o-covid-prueba-rapida-dia-sintomas": ["enfermedades-respiratorias", "prueba-strep", "vacunas"],
};

export function getPostsForService(serviceSlug: string, locale: string = "es"): BlogPost[] {
  return getBlogPosts(locale).filter((post) => POST_SERVICES[post.slug]?.includes(serviceSlug));
}
