import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    // Optimizador de Vercel desactivado (cuota de Image Optimization, /_next/image
    // → 402). Loader propio (B4): sirve las variantes pregeneradas de public/images
    // (scripts/generate-image-variants.mjs, en prebuild; manifiesto en
    // src/lib/image-variants.json) para que next/image emita srcset y el móvil no
    // descargue el archivo de escritorio. Lo que no está en el manifiesto (remotas,
    // PNG/JPG) se sirve tal cual.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [384, 640, 828, 1080, 1376],
    imageSizes: [128, 256, 512],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "lucide-react", "@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-select"],
  },
  async redirects() {
    // Redirects genéricos por si llegan visitas con URLs en español o restos de
    // la web anterior de clinica529.com. Los ~150 redirects de WordPress del
    // proyecto de referencia (Airline) se eliminaron: no aplican a esta clínica.
    return [
      { source: "/servicios", destination: "/services", permanent: true },
      { source: "/servicios/:path*", destination: "/services", permanent: true },
      { source: "/nosotros", destination: "/", permanent: true },
      { source: "/nosotros/:path*", destination: "/", permanent: true },
      { source: "/contacto", destination: "/#contacto", permanent: true },
      { source: "/tag/:slug*", destination: "/blog", permanent: true },
      { source: "/category/:slug*", destination: "/blog", permanent: true },
      { source: "/:year(\\d{4})/:month(\\d{2})", destination: "/blog", permanent: true },
      { source: "/:year(\\d{4})", destination: "/blog", permanent: true },
      // URLs basura reportadas como 404 en Search Console (ago 2026)
      { source: "/services-9", destination: "/services", permanent: true },
      { source: "/blank", destination: "/", permanent: true },
      // URLs de la web antigua (WordPress) que Google aún tiene indexadas
      { source: "/urologia", destination: "/services/salud-hombre", permanent: true },
      { source: "/gallery", destination: "/", permanent: true },
      // URL final de un anuncio de Google Ads que no existe en el sitio (2026-10-02)
      { source: "/examenes-de-std", destination: "/services/enfermedades-transmision-sexual", permanent: true },
    ];
  },
  async headers() {
    return [
      // Imágenes de public/: 30 días + revalidación en segundo plano. No
      // `immutable` porque los nombres no llevan hash y un flyer puede
      // reemplazarse con el mismo nombre.
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);
