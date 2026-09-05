import { CaretDown } from "@phosphor-icons/react/dist/ssr";

interface FaqListProps {
  items: { question: string; answer: string }[];
  /** Shared <details name> so only one item stays open (native exclusive accordion). */
  name?: string;
}

// Native <details>/<summary> instead of the Radix accordion: the answers must be
// present in the server HTML so search engines and AI crawlers can read them
// (Radix unmounts closed content). Works without JavaScript.
export function FaqList({ items, name = "faq" }: FaqListProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details
          key={index}
          name={name}
          className="group bg-white border border-slate-100 rounded-2xl px-6 shadow-sm hover:shadow-md hover:border-red-primary/20 transition-all duration-300 open:border-red-primary/30 open:shadow-md"
        >
          <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none font-semibold text-slate-dark hover:text-red-primary group-open:text-red-primary [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-4 text-left">
              <span className="flex items-center justify-center size-8 shrink-0 rounded-lg bg-red-bg text-red-primary text-sm font-bold group-open:bg-red-primary group-open:text-white transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">{item.question}</span>
            </span>
            <CaretDown
              className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
              weight="bold"
            />
          </summary>
          <p className="text-muted-foreground pb-5 pl-12 leading-relaxed">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
