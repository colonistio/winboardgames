import type { Lang } from "../langs";

/** Extra taglines for featured games (en/tr/de live in games.ts). */
export const taglineExtra: Record<string, Record<Exclude<Lang, "en" | "tr" | "de">, string>> = {
  monopoly: {
    es: "Controla el tablero y quiebra a todos",
    fr: "Controlez le plateau et ruinez tout le monde",
    ja: "ボードを支配し全員を破産させる",
    pt: "Domine o tabuleiro e falencie todos",
    zh: "掌控棋盘，让对手破产",
    ru: "Контролируйте поле и разорите всех",
    it: "Controlla il tabellone e fallisci tutti"
  },
  chess: {
    es: "Deja de errar y empieza a convertir ventajas",
    fr: "Arretez les gaffes et convertissez vos avantages",
    ja: "ミスを減らし、優位を勝利に変える",
    pt: "Pare de errar e converta vantagens em vitorias",
    zh: "少犯错，把优势转化为胜势",
    ru: "Меньше ошибок — больше побед",
    it: "Smetti di blunderare e converti i vantaggi"
  },
  scrabble: {
    es: "Puntua fuerte con equilibrio de letras y bingos",
    fr: "Marquez gros avec equilibre des lettres et bingos",
    ja: "タイルバランスとビンゴで高得点",
    pt: "Pontue muito com equilibrio de letras e bingos",
    zh: "平衡字母架，拼出高分和宾果",
    ru: "Большие очки за счет баланса букв и бинго",
    it: "Punta in alto con equilibrio lettere e bingo"
  },
  catan: {
    es: "Elige los mejores sitios y negocia como un tiburon",
    fr: "Choisissez les bons emplacements et negociez fort",
    ja: "最良の地点を選び、交渉で勝ち抜く",
    pt: "Escolha os melhores pontos e negocie como tubarao",
    zh: "占据要点，像高手一样交易",
    ru: "Выбирайте лучшие точки и торгуйте жестко",
    it: "Scegli i posti giusti e tratta da squalo"
  },
  carcassonne: {
    es: "Libera tus meeples y supera a rivales",
    fr: "Liberez vos meeples et devancez vos rivaux",
    ja: "ミープルを救い出し、ライバルに差をつける",
    pt: "Liberte seus meeples e supere rivais",
    zh: "收回米宝，分数领先对手",
    ru: "Спасайте миплов и обгоняйте соперников",
    it: "Libera i meeple e supera i rivali"
  }
};

export function taglineFor(slug: string, base?: Partial<Record<Lang, string>>): Record<Lang, string> | undefined {
  const extra = taglineExtra[slug];
  if (!base && !extra) return undefined;
  return {
    ...(base ?? {}),
    ...(extra ?? {})
  } as Record<Lang, string>;
}
