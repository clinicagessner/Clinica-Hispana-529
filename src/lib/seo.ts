import { SITE_CONFIG } from "@/lib/constants";

// Landings de Google Ads: su <title>, H1 y meta no se cambian sin aprobación
// (regla 5 de HERMES.md). Conservan el título que tenían.
export const ADS_LANDING_SLUGS = new Set(["ginecologia", "salud-hombre", "enfermedades-transmision-sexual"]);

// <title> de ≤60 caracteres (§7 B0.16): con la marca completa si cabe, si no
// con la corta, y si tampoco, solo el título. Evita la plantilla del layout,
// que llevaba casi todos los títulos a 61-116 caracteres.
export function seoTitle(title: string): string {
  for (const brand of [SITE_CONFIG.name, "Clínica 529"]) {
    const full = `${title} | ${brand}`;
    if (full.length <= 60) return full;
  }
  return title;
}

export const OG_IMAGE = `${SITE_CONFIG.baseUrl}/images/clinic-interior.webp`;
