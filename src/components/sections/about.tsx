import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

// Bloque de definición de la entidad ("¿Qué es…?"): un párrafo de hechos que un
// buscador o un asistente de IA puede citar tal cual, con enlaces a los
// servicios clave. 130-170 palabras, en sintonía con CONTACT_INFO y SERVICES.
export async function About() {
  const [t, locale] = await Promise.all([getTranslations("about"), getLocale()]);
  const localePath = locale === "en" ? "/en" : "";

  const link = (slug: string) => (chunks: React.ReactNode) => (
    <Link
      href={`${localePath}/services/${slug}`}
      className="text-red-primary font-medium hover:underline underline-offset-4"
    >
      {chunks}
    </Link>
  );

  return (
    <section id="sobre-nosotros" aria-labelledby="about-title" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 id="about-title" className="text-2xl md:text-3xl font-heading font-bold text-slate-dark mb-5 text-center">
            {t("title")}
          </h2>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg">
            {t.rich("paragraph", {
              chronic: link("condiciones-cronicas"),
              gyn: link("ginecologia"),
              men: link("salud-hombre"),
              lab: link("examenes-sangre"),
              uti: link("infecciones-urinarias"),
              dot: link("examen-dot"),
              imm: link("examenes-inmigracion"),
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
