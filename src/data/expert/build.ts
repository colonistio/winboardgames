import type { Lang } from "../site";
import type { GameGuide, GameListing } from "../gameTypes";
import { metaTitleTemplates } from "./meta";
import type { ExpertEntry, ExpertGuideMap } from "./types";

const generatorLangs: Lang[] = ["en", "tr", "de"];

const complicatedSlugs = new Set<string>([
  "go",
  "backgammon",
  "agricola", "puerto-rico", "power-grid", "terraforming-mars", "brass-birmingham",
  "through-the-ages", "terra-mystica", "gaia-project", "food-chain-magnate", "lisboa",
  "barrage", "anachrony", "mage-knight", "a-feast-for-odin", "great-western-trail",
  "scythe", "ark-nova", "concordia", "viticulture",
  "bridge", "poker", "magic-the-gathering", "yu-gi-oh", "pokemon-tcg",
  "twilight-struggle", "diplomacy", "war-of-the-ring", "root", "dune-imperium",
  "twilight-imperium", "star-wars-rebellion", "kemet", "axis-and-allies", "pax-pamir",
  "sekigahara", "coin-series", "commands-and-colors",
  "gloomhaven", "frosthaven", "spirit-island", "arkham-horror", "mansions-of-madness",
  "robinson-crusoe", "aeons-end", "marvel-champions", "lord-of-the-rings-lcg"
]);

function defaultResources(name: string, lang: Lang) {
  const bggUrl = `https://boardgamegeek.com/geeksearch.php?action=search&objecttype=boardgame&q=${encodeURIComponent(name)}`;
  const labels: Record<Lang, { bgg: string; reddit: string }> = {
    en: { bgg: `${name} on BoardGameGeek`, reddit: "Expert discussion on r/boardgames" },
    tr: { bgg: `${name} BoardGameGeek'te`, reddit: "r/boardgames uzman tartismasi" },
    de: { bgg: `${name} auf BoardGameGeek`, reddit: "Experten-Diskussion auf r/boardgames" }
  };
  return [
    { label: labels[lang].bgg, url: bggUrl },
    { label: labels[lang].reddit, url: "https://www.reddit.com/r/boardgames/" }
  ];
}

export function buildGuideFromExpert(listing: GameListing, entry: ExpertEntry, relatedSlugs: string[]): GameGuide {
  const { name, slug } = listing;
  const metaTitle = {} as Record<Lang, string>;
  const metaDescription = {} as Record<Lang, string>;
  const intro = {} as Record<Lang, string>;
  const quickTips = {} as Record<Lang, string[]>;
  const strategy = {} as Record<Lang, string[]>;
  const resources = {} as Record<Lang, { label: string; url: string }[]>;

  for (const lang of generatorLangs) {
    const content = entry.content[lang];
    metaTitle[lang] = metaTitleTemplates[lang](name);
    metaDescription[lang] = content.metaDescription;
    intro[lang] = content.intro;
    quickTips[lang] = [...content.quickTips];
    strategy[lang] = content.strategy;
    resources[lang] = content.resources ?? defaultResources(name, lang);
  }

  return {
    slug,
    title: name,
    difficulty: entry.difficulty ?? (complicatedSlugs.has(slug) ? "complicated" : "simple"),
    categoryId: entry.categoryId,
    updated: "2026-07-04",
    metaTitle,
    metaDescription,
    intro,
    quickTips,
    strategy,
    resources,
    relatedSlugs
  };
}

export function buildAllExpertGuides(
  expertBySlug: ExpertGuideMap,
  listings: GameListing[],
  categoryListings: Record<string, string[]>
): GameGuide[] {
  const guides: GameGuide[] = [];
  for (const listing of listings) {
    const entry = expertBySlug[listing.slug];
    if (!entry) {
      throw new Error(`Missing expert guide for slug: ${listing.slug}`);
    }
    const categorySlugs = categoryListings[entry.categoryId] ?? [];
    const others = categorySlugs.filter((s) => s !== listing.slug);
    const related = others.slice(0, 3);
    guides.push(buildGuideFromExpert(listing, entry, related));
  }
  return guides;
}
