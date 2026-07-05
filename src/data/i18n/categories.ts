import type { Lang } from "../site";
import { categoryExtra } from "./extra";

export function catField(
  categoryId: string,
  field: "name" | "description" | "cardSubtitle",
  base: Record<"en" | "tr" | "de", string>
): Record<Lang, string> {
  const extra = categoryExtra[categoryId];
  return {
    ...base,
    es: extra.es[field],
    fr: extra.fr[field],
    ja: extra.ja[field],
    pt: extra.pt[field],
    zh: extra.zh[field],
    ru: extra.ru[field],
    it: extra.it[field]
  };
}
