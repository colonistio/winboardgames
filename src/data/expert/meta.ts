import type { Lang } from "../site";

export const metaTitleTemplates: Record<Lang, (name: string) => string> = {
  en: (name) => `How to Win ${name}: Expert Strategy Guide`,
  tr: (name) => `${name} Nasil Kazanilir: Uzman Strateji Rehberi`,
  de: (name) => `${name} gewinnen: Experten-Strategie`
};
