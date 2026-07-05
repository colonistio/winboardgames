import { guides, localizePath } from "../data/games";
import { allLangs, siteUrl } from "../data/site";

const langs = allLangs;

type SitemapUrl = {
  loc: string;
  priority: string;
  lastmod?: string;
};

export async function GET() {
  const homeUrls: SitemapUrl[] = langs.map((lang) => ({
    loc: new URL(localizePath(lang), siteUrl).toString(),
    priority: "1.0"
  }));

  const aboutUrls: SitemapUrl[] = langs.map((lang) => ({
    loc: new URL(localizePath(lang, "about"), siteUrl).toString(),
    priority: "0.7"
  }));

  const guideUrls: SitemapUrl[] = langs.flatMap((lang) =>
    guides.map((guide) => ({
      loc: new URL(localizePath(lang, guide.slug), siteUrl).toString(),
      priority: "0.9",
      lastmod: guide.updated
    }))
  );

  const urls = [...homeUrls, ...aboutUrls, ...guideUrls]
    .map(
      (url) => `<url><loc>${url.loc}</loc>${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ""}<priority>${url.priority}</priority></url>`
    )
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
