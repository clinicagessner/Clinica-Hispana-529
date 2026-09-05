import { getTranslations } from "next-intl/server";
import { FaqList } from "@/components/ui/faq-list";
import { FAQ_ITEMS } from "@/lib/constants";
import { JsonLdFAQ } from "@/components/seo/json-ld";

export async function FAQ() {
  const t = await getTranslations();

  // Prepare FAQ data for JSON-LD
  const faqData = FAQ_ITEMS.map((item) => ({
    question: t(item.question),
    answer: t(item.answer),
  }));

  return (
    <section id="preguntas-frecuentes" className="py-16 md:py-24 bg-red-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="animate-on-scroll fade-up text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-dark mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="animate-on-scroll fade-up stagger-1 max-w-3xl mx-auto">
          <FaqList items={faqData} name="faq-home" />
        </div>
      </div>

      {/* JSON-LD for FAQ */}
      <JsonLdFAQ questions={faqData} />
    </section>
  );
}
