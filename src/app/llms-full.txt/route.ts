import { buildLlmsFullTxt } from "@/lib/llms";

// Prerendered at build time; the Google rating is refreshed on rebuilds.
export const dynamic = "force-static";

export async function GET() {
  const body = await buildLlmsFullTxt();
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
