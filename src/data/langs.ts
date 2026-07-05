export type Lang = "en" | "tr" | "de" | "es" | "fr" | "ja" | "pt" | "zh" | "ru" | "it";

export const languages: Record<Lang, string> = {
  en: "English",
  tr: "Turkce",
  de: "Deutsch",
  es: "Espanol",
  fr: "Francais",
  ja: "日本語",
  pt: "Portugues",
  zh: "中文",
  ru: "Русский",
  it: "Italiano"
};

export const defaultLang: Lang = "en";

export const nonDefaultLangs: Lang[] = ["tr", "de", "es", "fr", "ja", "pt", "zh", "ru", "it"];

export const allLangs: Lang[] = [defaultLang, ...nonDefaultLangs];

export const ogLocales: Record<Lang, string> = {
  en: "en_US",
  tr: "tr_TR",
  de: "de_DE",
  es: "es_ES",
  fr: "fr_FR",
  ja: "ja_JP",
  pt: "pt_BR",
  zh: "zh_CN",
  ru: "ru_RU",
  it: "it_IT"
};

export function isLangCode(code: string): code is Lang {
  return code in languages;
}

export function slugFromPath(pathParts: string[]): string | undefined {
  const first = pathParts[0];
  if (first && isLangCode(first) && first !== defaultLang) {
    return pathParts[1];
  }
  return pathParts[0];
}
