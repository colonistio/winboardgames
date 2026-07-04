import type { Lang } from "./site";

export type GameListing = {
  name: string;
  slug: string;
  featured?: boolean;
  image?: string;
  tagline?: Record<Lang, string>;
};

export type GameCategory = {
  id: string;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  cardSubtitle: Record<Lang, string>;
  games: GameListing[];
};

export type GameGuide = {
  slug: string;
  title: string;
  difficulty: "simple" | "complicated";
  categoryId: string;
  updated: string;
  metaTitle: Record<Lang, string>;
  metaDescription: Record<Lang, string>;
  intro: Record<Lang, string>;
  quickTips: Record<Lang, string[]>;
  strategy: Record<Lang, string[]>;
  resources: Record<Lang, { label: string; url: string }[]>;
  relatedSlugs: string[];
};
