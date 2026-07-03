export type Lang = "en" | "tr" | "de";

export const languages: Record<Lang, string> = {
  en: "English",
  tr: "Turkce",
  de: "Deutsch"
};

export const defaultLang: Lang = "en";

export const siteUrl = "https://winboardgames.com";

export const colonistUrl = "https://colonist.io";

export const repoUrl = "https://github.com/colonistio/winboardgames";

export const ui = {
  en: {
    siteName: "Win Board Games",
    tagline: "Short, practical strategies for winning classic, family, and modern board games.",
    searchPlaceholder: "Search board games",
    featured: "Featured strategy guides",
    allGames: "Board Game Strategies",
    readGuide: "Read strategy",
    sponsorTitle: "Best online Catan alternative",
    sponsorText:
      "Play Catan-style games online with friends at Colonist.io.",
    sponsorCta: "Play on Colonist.io",
    languages: "Languages",
    noResults: "No games match your search yet.",
    home: "Home",
    pageDescription:
      "Browse board game strategy guides by category and learn practical ways to win hundreds of board games.",
    lastUpdated: "Last updated",
    quickTips: "Quick winning principles",
    strategy: "Ideal strategy",
    resources: "Recommended learning",
    related: "Related games",
    contributeLink: "Contribute fixes on GitHub"
  },
  tr: {
    siteName: "Win Board Games",
    tagline: "Klasik, aile ve modern kutu oyunlari icin kisa ve pratik kazanma stratejileri.",
    searchPlaceholder: "Kutu oyunu ara",
    featured: "One cikan strateji rehberleri",
    allGames: "Kutu Oyunu Stratejileri",
    readGuide: "Stratejiyi oku",
    sponsorTitle: "En iyi online Catan alternatifi",
    sponsorText:
      "Arkadaslarinla Catan tarzi oyunlari Colonist.io'da online oyna.",
    sponsorCta: "Colonist.io'da oyna",
    languages: "Diller",
    noResults: "Aramanla eslesen oyun henuz yok.",
    home: "Ana sayfa",
    pageDescription:
      "Kutu oyunu stratejilerini kategoriye gore incele ve yuzlerce oyunu kazanmak icin pratik yollar ogren.",
    lastUpdated: "Son guncelleme",
    quickTips: "Hizli kazanma ilkeleri",
    strategy: "Ideal strateji",
    resources: "Onerilen kaynaklar",
    related: "Benzer oyunlar",
    contributeLink: "GitHub'da duzeltme gonder"
  },
  de: {
    siteName: "Win Board Games",
    tagline: "Kurze, praktische Strategien zum Gewinnen klassischer, familiaerer und moderner Brettspiele.",
    searchPlaceholder: "Brettspiele suchen",
    featured: "Empfohlene Strategien",
    allGames: "Brettspiel-Strategien",
    readGuide: "Strategie lesen",
    sponsorTitle: "Beste Online-Catan-Alternative",
    sponsorText:
      "Spiele Catan-aehnliche Partien online mit Freunden auf Colonist.io.",
    sponsorCta: "Auf Colonist.io spielen",
    languages: "Sprachen",
    noResults: "Noch keine Spiele zu dieser Suche gefunden.",
    home: "Startseite",
    pageDescription:
      "Durchsuche Brettspiel-Strategien nach Kategorie und lerne praktische Wege, hunderte Brettspiele zu gewinnen.",
    lastUpdated: "Zuletzt aktualisiert",
    quickTips: "Schnelle Gewinnprinzipien",
    strategy: "Ideale Strategie",
    resources: "Empfohlenes Lernen",
    related: "Aehnliche Spiele",
    contributeLink: "Verbesserungen auf GitHub einreichen"
  }
} as const;
