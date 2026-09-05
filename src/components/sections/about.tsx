import { getTranslations } from "next-intl/server";

// Entity definition block: one factual paragraph an AI engine or a search
// snippet can quote as-is. Facts only, no marketing copy; keep it between
// 130 and 170 words and in sync with CONTACT_INFO and the services list.
export async function About() {
  const t = await getTranslations("about");

  return (
    <section id="sobre-nosotros" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark mb-5 text-center">
            {t("title")}
          </h2>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg">
            {t("paragraph")}
          </p>
        </div>
      </div>
    </section>
  );
}
