import type { Lang } from "../site";

export type ExpertLocalized = {
  metaDescription: string;
  intro: string;
  quickTips: [string, string, string, string];
  strategy: string[];
  resources?: { label: string; url: string }[];
};

export type ExpertEntry = {
  categoryId: string;
  difficulty?: "simple" | "complicated";
  content: Record<Lang, ExpertLocalized>;
};

export type ExpertGuideMap = Record<string, ExpertEntry>;
