export type { Lang } from "./langs";
export { languages, defaultLang, nonDefaultLangs, allLangs, ogLocales, isLangCode, slugFromPath } from "./langs";

import { aboutExtra, uiExtra } from "./i18n/extra";

export const siteUrl = "https://winboardgames.com";
export const colonistUrl = "https://colonist.io";
export const repoUrl = "https://github.com/colonistio/winboardgames";

const uiBase = {
  en: {
    siteName: "Win Board Games",
    tagline: "Short, practical strategies for winning classic, family, and modern board games.",
    searchPlaceholder: "Search board games",
    featured: "Featured strategy guides",
    allGames: "Board Game Strategies",
    readGuide: "Read strategy",
    sponsorTitle: "Best online Catan alternative",
    sponsorText: "Play Catan-style games online with friends at Colonist.io.",
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
    contributeLink: "Contribute fixes on GitHub",
    aboutLink: "About this site",
    showAllGames: "Show all",
    showFewerGames: "Show less"
  },
  tr: {
    siteName: "Win Board Games",
    tagline: "Klasik, aile ve modern kutu oyunlari icin kisa ve pratik kazanma stratejileri.",
    searchPlaceholder: "Kutu oyunu ara",
    featured: "One cikan strateji rehberleri",
    allGames: "Kutu Oyunu Stratejileri",
    readGuide: "Stratejiyi oku",
    sponsorTitle: "En iyi online Catan alternatifi",
    sponsorText: "Arkadaslarinla Catan tarzi oyunlari Colonist.io'da online oyna.",
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
    contributeLink: "GitHub'da duzeltme gonder",
    aboutLink: "Site hakkinda",
    showAllGames: "Tumunu goster",
    showFewerGames: "Daha az goster"
  },
  de: {
    siteName: "Win Board Games",
    tagline: "Kurze, praktische Strategien zum Gewinnen klassischer, familiaerer und moderner Brettspiele.",
    searchPlaceholder: "Brettspiele suchen",
    featured: "Empfohlene Strategien",
    allGames: "Brettspiel-Strategien",
    readGuide: "Strategie lesen",
    sponsorTitle: "Beste Online-Catan-Alternative",
    sponsorText: "Spiele Catan-aehnliche Partien online mit Freunden auf Colonist.io.",
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
    contributeLink: "Verbesserungen auf GitHub einreichen",
    aboutLink: "Ueber diese Seite",
    showAllGames: "Alle anzeigen",
    showFewerGames: "Weniger anzeigen"
  }
} as const;

const aboutBase = {
  en: {
    title: "About Win Board Games",
    metaDescription:
      "Win Board Games is a free library of practical board game strategy guides. Learn what the site covers and how to contribute on GitHub.",
    intro:
      "Win Board Games is a free reference for players who want to win more often — not after reading a novel, but after a short, focused guide they can use in their next game.",
    missionTitle: "What we publish",
    mission:
      "We cover hundreds of board games across classics, euros, card games, dice games, word games, party games, co-ops, and strategy titles. Each guide includes quick winning principles, a step-by-step ideal strategy, and links for deeper learning on complicated games.",
    contributeTitle: "Contribute on GitHub",
    contribute:
      "This site is open source. If a strategy is wrong, outdated, or missing, you can fix it directly on GitHub: fork the repository, edit the game data or guide content, and open a pull request. Every page links to the repo in the footer.",
    contributeCta: "Open the GitHub repository"
  },
  tr: {
    title: "Win Board Games Hakkinda",
    metaDescription:
      "Win Board Games, pratik kutu oyunu strateji rehberleri sunan ucretsiz bir kutuphanedir. Siteyi ve GitHub'da nasil katki yapabileceginizi ogrenin.",
    intro:
      "Win Board Games, daha cok kazanmak isteyen oyuncular icin ucretsiz bir kaynaktir — uzun makaleler degil, bir sonraki oyunda kullanabileceginiz kisa ve odakli rehberler.",
    missionTitle: "Ne yayinliyoruz",
    mission:
      "Klasiklerden euro oyunlara, kart ve zar oyunlarindan kelime ve parti oyunlarina, isbirlikci ve strateji basliklarina yuzlerce oyunu kapsiyoruz. Her rehberde hizli kazanma ilkeleri, adim adim ideal strateji ve karmasik oyunlar icin derinlemesine kaynaklar var.",
    contributeTitle: "GitHub'da katki yap",
    contribute:
      "Bu site acik kaynaklidir. Bir strateji yanlissa, guncel degilse veya eksikse GitHub uzerinden duzeltebilirsiniz: repoyu fork edin, oyun verisini veya rehber icerigini duzenleyin ve pull request acin. Her sayfanin altinda repo baglantisi var.",
    contributeCta: "GitHub reposunu ac"
  },
  de: {
    title: "Ueber Win Board Games",
    metaDescription:
      "Win Board Games ist eine kostenlose Bibliothek praktischer Brettspiel-Strategien. Erfahre, was die Seite bietet und wie du auf GitHub mitwirken kannst.",
    intro:
      "Win Board Games ist eine kostenlose Referenz fuer Spieler, die oefter gewinnen wollen — nicht nach einem Roman, sondern nach einem kurzen, fokussierten Guide fuer die naechste Partie.",
    missionTitle: "Was wir veroeffentlichen",
    mission:
      "Wir decken Hunderte Brettspiele ab: Klassiker, Eurogames, Kartenspiele, Wuerfelspiele, Wortspiele, Partyspiele, Koop-Titel und Strategiespiele. Jeder Guide enthaelt schnelle Gewinnprinzipien, eine Schritt-fuer-Schritt-Strategie und Links zum Vertiefen bei komplexen Spielen.",
    contributeTitle: "Auf GitHub mitwirken",
    contribute:
      "Diese Seite ist Open Source. Wenn eine Strategie falsch, veraltet oder unvollstaendig ist, kannst du sie direkt auf GitHub korrigieren: Repository forken, Spieldaten oder Guide-Inhalt bearbeiten und einen Pull Request oeffnen. Jede Seite verlinkt unten auf das Repo.",
    contributeCta: "GitHub-Repository oeffnen"
  }
} as const;

export const ui = { ...uiBase, ...uiExtra };
export const aboutContent = { ...aboutBase, ...aboutExtra };
