import type { Lang } from "../site";

export const metaTitleTemplates: Record<Lang, (name: string) => string> = {
  en: (name) => `How to Win ${name}: Expert Strategy Guide`,
  tr: (name) => `${name} Nasil Kazanilir: Uzman Strateji Rehberi`,
  de: (name) => `${name} gewinnen: Experten-Strategie`,
  es: (name) => `Como ganar en ${name}: guia experta`,
  fr: (name) => `Comment gagner a ${name} : guide expert`,
  ja: (name) => `${name}の勝ち方：上級者向けガイド`,
  pt: (name) => `Como vencer em ${name}: guia expert`,
  zh: (name) => `如何赢得${name}：专家攻略`,
  ru: (name) => `Kak vyigrat v ${name}: ekspertnoe rukovodstvo`,
  it: (name) => `Come vincere a ${name}: guida expert`
};
