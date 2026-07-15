"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Phone, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FloatingButtonsProps = {
  phoneOverride?: { phone: string; phoneFormatted: string };
};

export function FloatingButtons({ phoneOverride }: FloatingButtonsProps = {}) {
  const t = useTranslations("cta");
  const [isVisible, setIsVisible] = useState(false);
  const phone = phoneOverride?.phone ?? CONTACT_INFO.phone;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // WhatsApp siempre usa el número principal de la clínica (el override de
  // CallRail solo aplica a llamadas telefónicas).
  const whatsappHref = `https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, "")}?text=${encodeURIComponent(t("whatsappMessage"))}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Maps + teléfono aparecen al hacer scroll para no tapar el hero */}
      <div
        className={cn(
          "flex flex-col gap-3 transition-all duration-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
      {/* Location Button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={CONTACT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 rounded-full bg-white text-slate-dark border border-slate-200 shadow-md flex items-center justify-center hover:bg-slate-50 hover:shadow-lg transition-all"
            aria-label="Ver ubicación en Google Maps"
          >
            <MapPin className="size-5" weight="fill" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{t("getDirections")}</p>
        </TooltipContent>
      </Tooltip>

      {/* Phone Button - Primary CTA */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={`tel:${phone}`}
            className="size-14 rounded-full bg-red-primary text-white shadow-md shadow-red-primary/30 flex items-center justify-center hover:bg-red-dark hover:shadow-lg transition-all animate-pulse-float"
            aria-label="Llamar ahora"
            suppressHydrationWarning
          >
            <Phone className="size-6" weight="fill" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{t("callNow")}</p>
        </TooltipContent>
      </Tooltip>
      </div>

      {/* WhatsApp Button - siempre visible */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="size-14 rounded-full bg-whatsapp text-white shadow-md shadow-whatsapp/40 flex items-center justify-center hover:bg-whatsapp-dark hover:shadow-lg transition-all"
            aria-label={`${t("whatsapp")} ${CONTACT_INFO.phoneFormatted}`}
          >
            <WhatsappLogo className="size-7" weight="fill" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{t("whatsapp")}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
