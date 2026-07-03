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

const classics: GameListing[] = [
  {
    name: "Monopoly",
    slug: "monopoly",
    featured: true,
    image: "/games/bgg-monopoly.jpg",
    tagline: {
      en: "Corner the board and bankrupt everyone",
      tr: "Tahtayi ele gecir ve herkesi iflas ettir",
      de: "Beherrsche das Brett und ruiniere alle"
    }
  },
  {
    name: "Chess",
    slug: "chess",
    featured: true,
    image: "/games/bgg-chess.jpg",
    tagline: {
      en: "Stop blundering and start converting wins",
      tr: "Hata yapmayi birak, kazanmaya basla",
      de: "Keine Patzer mehr, verwandle Vorteile"
    }
  },
  { name: "Checkers", slug: "checkers" },
  { name: "Backgammon", slug: "backgammon" },
  { name: "Go", slug: "go" },
  { name: "Mahjong", slug: "mahjong" },
  {
    name: "Scrabble",
    slug: "scrabble",
    featured: true,
    image: "/games/bgg-scrabble.jpg",
    tagline: {
      en: "Score big with tile balance and bingos",
      tr: "Tas dengesi ve bingolarla cok puan al",
      de: "Punkte satt mit Buchstabenbalance"
    }
  },
  { name: "Risk", slug: "risk" },
  { name: "Clue", slug: "clue" },
  { name: "Battleship", slug: "battleship" },
  { name: "Stratego", slug: "stratego" },
  { name: "Othello", slug: "othello" },
  { name: "Mancala", slug: "mancala" },
  { name: "Dominoes", slug: "dominoes" },
  { name: "Ludo", slug: "ludo" },
  { name: "Parcheesi", slug: "parcheesi" },
  { name: "Sorry", slug: "sorry" },
  { name: "Trouble", slug: "trouble" },
  { name: "Connect Four", slug: "connect-four" },
  { name: "Chinese Checkers", slug: "chinese-checkers" },
  { name: "Mastermind", slug: "mastermind" },
  { name: "Rummikub", slug: "rummikub" },
  { name: "Guess Who", slug: "guess-who" },
  { name: "Sequence", slug: "sequence" },
  { name: "Blokus", slug: "blokus" },
  { name: "Labyrinth", slug: "labyrinth" },
  { name: "The Game of Life", slug: "the-game-of-life" },
  { name: "Trivial Pursuit", slug: "trivial-pursuit" },
  { name: "Pictionary", slug: "pictionary" },
  { name: "Operation", slug: "operation" }
];

const euros: GameListing[] = [
  {
    name: "Catan",
    slug: "catan",
    featured: true,
    image: "/games/bgg-catan.png",
    tagline: {
      en: "Pick the right spots, trade like a shark",
      tr: "Dogru koseleri sec, kurt gibi takas yap",
      de: "Beste Plaetze waehlen, clever handeln"
    }
  },
  {
    name: "Carcassonne",
    slug: "carcassonne",
    featured: true,
    image: "/games/bgg-carcassonne.jpg",
    tagline: {
      en: "Free your meeples and out-score rivals",
      tr: "Meeple'larini kurtar, rakipleri geride birak",
      de: "Meeple befreien und Gegner ueberpunkten"
    }
  },
  { name: "Ticket to Ride", slug: "ticket-to-ride" },
  { name: "Agricola", slug: "agricola" },
  { name: "Puerto Rico", slug: "puerto-rico" },
  { name: "Power Grid", slug: "power-grid" },
  { name: "Terraforming Mars", slug: "terraforming-mars" },
  { name: "Wingspan", slug: "wingspan" },
  { name: "Castles of Burgundy", slug: "castles-of-burgundy" },
  { name: "Concordia", slug: "concordia" },
  { name: "7 Wonders", slug: "7-wonders" },
  { name: "Splendor", slug: "splendor" },
  { name: "Azul", slug: "azul" },
  { name: "Viticulture", slug: "viticulture" },
  { name: "Great Western Trail", slug: "great-western-trail" },
  { name: "Brass Birmingham", slug: "brass-birmingham" },
  { name: "Ark Nova", slug: "ark-nova" },
  { name: "Everdell", slug: "everdell" },
  { name: "Scythe", slug: "scythe" },
  { name: "Dominion", slug: "dominion" },
  { name: "Race for the Galaxy", slug: "race-for-the-galaxy" },
  { name: "Res Arcana", slug: "res-arcana" },
  { name: "A Feast for Odin", slug: "a-feast-for-odin" },
  { name: "Terra Mystica", slug: "terra-mystica" },
  { name: "Gaia Project", slug: "gaia-project" },
  { name: "Through the Ages", slug: "through-the-ages" },
  { name: "Barrage", slug: "barrage" },
  { name: "Lisboa", slug: "lisboa" },
  { name: "Anachrony", slug: "anachrony" },
  { name: "Food Chain Magnate", slug: "food-chain-magnate" },
  { name: "Mage Knight", slug: "mage-knight" },
  { name: "Patchwork", slug: "patchwork" },
  { name: "Cascadia", slug: "cascadia" },
  { name: "Calico", slug: "calico" },
  { name: "Isle of Skye", slug: "isle-of-skye" },
  { name: "Sagrada", slug: "sagrada" },
  { name: "Kingdomino", slug: "kingdomino" },
  { name: "Planet Unknown", slug: "planet-unknown" },
  { name: "It's a Wonderful World", slug: "its-a-wonderful-world" }
];

const cards: GameListing[] = [
  { name: "Solitaire", slug: "solitaire" },
  { name: "Spider Solitaire", slug: "spider-solitaire" },
  { name: "FreeCell", slug: "freecell" },
  { name: "Hearts", slug: "hearts" },
  { name: "Spades", slug: "spades" },
  { name: "Bridge", slug: "bridge" },
  { name: "Poker", slug: "poker" },
  { name: "Blackjack", slug: "blackjack" },
  { name: "Rummy", slug: "rummy" },
  { name: "Gin Rummy", slug: "gin-rummy" },
  { name: "Canasta", slug: "canasta" },
  { name: "Cribbage", slug: "cribbage" },
  { name: "Euchre", slug: "euchre" },
  { name: "Uno", slug: "uno" },
  { name: "Phase 10", slug: "phase-10" },
  { name: "Magic: The Gathering", slug: "magic-the-gathering" },
  { name: "Yu-Gi-Oh", slug: "yu-gi-oh" },
  { name: "Pokemon TCG", slug: "pokemon-tcg" },
  { name: "Exploding Kittens", slug: "exploding-kittens" },
  { name: "Love Letter", slug: "love-letter" },
  { name: "Sushi Go", slug: "sushi-go" },
  { name: "The Mind", slug: "the-mind" },
  { name: "Hanabi", slug: "hanabi" },
  { name: "Star Realms", slug: "star-realms" },
  { name: "Hero Realms", slug: "hero-realms" },
  { name: "Clank", slug: "clank" },
  { name: "Skip-Bo", slug: "skip-bo" },
  { name: "Dutch Blitz", slug: "dutch-blitz" },
  { name: "Coup", slug: "coup" },
  { name: "The Crew", slug: "the-crew" }
];

const dice: GameListing[] = [
  { name: "Yahtzee", slug: "yahtzee" },
  { name: "Farkle", slug: "farkle" },
  { name: "Bunco", slug: "bunco" },
  { name: "Liar's Dice", slug: "liars-dice" },
  { name: "Shut the Box", slug: "shut-the-box" },
  { name: "Qwixx", slug: "qwixx" },
  { name: "Qwinto", slug: "qwinto" },
  { name: "Can't Stop", slug: "cant-stop" },
  { name: "King of Tokyo", slug: "king-of-tokyo" },
  { name: "Zombie Dice", slug: "zombie-dice" },
  { name: "Roll for the Galaxy", slug: "roll-for-the-galaxy" },
  { name: "Dice Throne", slug: "dice-throne" },
  { name: "Las Vegas", slug: "las-vegas" },
  { name: "That's Pretty Clever", slug: "thats-pretty-clever" },
  { name: "Tenzi", slug: "tenzi" },
  { name: "Perudo", slug: "perudo" },
  { name: "Strike", slug: "strike" },
  { name: "Bang The Dice Game", slug: "bang-the-dice-game" },
  { name: "Railroad Ink", slug: "railroad-ink" },
  { name: "Welcome To", slug: "welcome-to" }
];

const words: GameListing[] = [
  { name: "Scrabble", slug: "scrabble", featured: true },
  { name: "Boggle", slug: "boggle" },
  { name: "Wordle", slug: "wordle" },
  { name: "Hangman", slug: "hangman" },
  { name: "Codenames", slug: "codenames" },
  { name: "Just One", slug: "just-one" },
  { name: "Taboo", slug: "taboo" },
  { name: "Decrypto", slug: "decrypto" },
  { name: "Bananagrams", slug: "bananagrams" },
  { name: "Scattergories", slug: "scattergories" },
  { name: "Letter Jam", slug: "letter-jam" },
  { name: "Word on the Street", slug: "word-on-the-street" },
  { name: "Paperback", slug: "paperback" },
  { name: "Hardback", slug: "hardback" },
  { name: "So Clover", slug: "so-clover" },
  { name: "Werewords", slug: "werewords" },
  { name: "Letter Tycoon", slug: "letter-tycoon" },
  { name: "Dabble", slug: "dabble" },
  { name: "Quiddler", slug: "quiddler" },
  { name: "A Little Wordy", slug: "a-little-wordy" }
];

const partyFamily: GameListing[] = [
  { name: "Dixit", slug: "dixit" },
  { name: "Codenames", slug: "codenames" },
  { name: "Wavelength", slug: "wavelength" },
  { name: "Telestrations", slug: "telestrations" },
  { name: "The Resistance", slug: "the-resistance" },
  { name: "Avalon", slug: "avalon" },
  { name: "Werewolf", slug: "werewolf" },
  { name: "Secret Hitler", slug: "secret-hitler" },
  { name: "One Night Ultimate Werewolf", slug: "one-night-ultimate-werewolf" },
  { name: "Cards Against Humanity", slug: "cards-against-humanity" },
  { name: "Time's Up", slug: "times-up" },
  { name: "Mysterium", slug: "mysterium" },
  { name: "Spyfall", slug: "spyfall" },
  { name: "Ticket to Ride", slug: "ticket-to-ride" },
  { name: "Sushi Go", slug: "sushi-go" },
  { name: "Camel Up", slug: "camel-up" },
  { name: "Kingdomino", slug: "kingdomino" },
  { name: "Takenoko", slug: "takenoko" },
  { name: "Qwirkle", slug: "qwirkle" },
  { name: "Catan Junior", slug: "catan-junior" },
  { name: "Ticket to Ride First Journey", slug: "ticket-to-ride-first-journey" },
  { name: "Hues and Cues", slug: "hues-and-cues" },
  { name: "Concept", slug: "concept" },
  { name: "Doodle Dash", slug: "doodle-dash" },
  { name: "Skull", slug: "skull" },
  { name: "No Thanks", slug: "no-thanks" },
  { name: "For Sale", slug: "for-sale" },
  { name: "Point Salad", slug: "point-salad" }
];

const cooperative: GameListing[] = [
  { name: "Pandemic", slug: "pandemic" },
  { name: "Forbidden Island", slug: "forbidden-island" },
  { name: "Forbidden Desert", slug: "forbidden-desert" },
  { name: "Spirit Island", slug: "spirit-island" },
  { name: "Gloomhaven", slug: "gloomhaven" },
  { name: "Frosthaven", slug: "frosthaven" },
  { name: "The Crew", slug: "the-crew" },
  { name: "Hanabi", slug: "hanabi" },
  { name: "Arkham Horror", slug: "arkham-horror" },
  { name: "Mansions of Madness", slug: "mansions-of-madness" },
  { name: "Flash Point", slug: "flash-point" },
  { name: "Horrified", slug: "horrified" },
  { name: "Robinson Crusoe", slug: "robinson-crusoe" },
  { name: "Aeon's End", slug: "aeons-end" },
  { name: "Marvel Champions", slug: "marvel-champions" },
  { name: "Lord of the Rings LCG", slug: "lord-of-the-rings-lcg" },
  { name: "Zombicide", slug: "zombicide" },
  { name: "Mechs vs Minions", slug: "mechs-vs-minions" },
  { name: "Ghost Stories", slug: "ghost-stories" },
  { name: "Castle Panic", slug: "castle-panic" }
];

const strategyWar: GameListing[] = [
  { name: "Risk", slug: "risk" },
  { name: "Axis & Allies", slug: "axis-and-allies" },
  { name: "Twilight Struggle", slug: "twilight-struggle" },
  { name: "Diplomacy", slug: "diplomacy" },
  { name: "Memoir '44", slug: "memoir-44" },
  { name: "War of the Ring", slug: "war-of-the-ring" },
  { name: "Root", slug: "root" },
  { name: "Dune Imperium", slug: "dune-imperium" },
  { name: "Small World", slug: "small-world" },
  { name: "Kemet", slug: "kemet" },
  { name: "Blood Rage", slug: "blood-rage" },
  { name: "Inis", slug: "inis" },
  { name: "Twilight Imperium", slug: "twilight-imperium" },
  { name: "Star Wars Rebellion", slug: "star-wars-rebellion" },
  { name: "Hive", slug: "hive" },
  { name: "Quoridor", slug: "quoridor" },
  { name: "Santorini", slug: "santorini" },
  { name: "Onitama", slug: "onitama" },
  { name: "Tak", slug: "tak" },
  { name: "Yinsh", slug: "yinsh" },
  { name: "Tzaar", slug: "tzaar" },
  { name: "Undaunted Normandy", slug: "undaunted-normandy" },
  { name: "Commands & Colors", slug: "commands-and-colors" },
  { name: "Sekigahara", slug: "sekigahara" },
  { name: "Pax Pamir", slug: "pax-pamir" },
  { name: "COIN Series", slug: "coin-series" }
];

export const categories: GameCategory[] = [
  {
    id: "classic-board-games",
    name: {
      en: "Classic Board Games",
      tr: "Klasik Kutu Oyunlari",
      de: "Klassische Brettspiele"
    },
    description: {
      en: "Evergreen games with simple rules, deep habits, and high search demand.",
      tr: "Basit kuralli, kalici ve cok aranan klasik oyunlar.",
      de: "Zeitlose Spiele mit einfachen Regeln, starken Mustern und hoher Nachfrage."
    },
    cardSubtitle: {
      en: "Timeless tactics to win",
      tr: "Kazandiran zamansiz taktikler",
      de: "Zeitlose Taktiken zum Sieg"
    },
    games: classics
  },
  {
    id: "euro-board-games",
    name: {
      en: "Euro Board Games",
      tr: "Euro Kutu Oyunlari",
      de: "Euro-Brettspiele"
    },
    description: {
      en: "Resource, engine-building, tile-laying, and modern strategy games.",
      tr: "Kaynak, motor kurma, karo yerlestirme ve modern strateji oyunlari.",
      de: "Ressourcen-, Engine-Building-, Plattchenlege- und moderne Strategiespiele."
    },
    cardSubtitle: {
      en: "Engine-building & scoring edges",
      tr: "Motor kurma ve puan avantajlari",
      de: "Engine-Building & Punktevorteile"
    },
    games: euros
  },
  {
    id: "card-games",
    name: {
      en: "Card Games",
      tr: "Kart Oyunlari",
      de: "Kartenspiele"
    },
    description: {
      en: "Solo card puzzles, trick-taking classics, party cards, and trading card games.",
      tr: "Tek kisilik kart bulmacalari, koz oyunlari, parti kartlari ve koleksiyon kart oyunlari.",
      de: "Solo-Kartenraetsel, Stichspiele, Party-Karten und Sammelkartenspiele."
    },
    cardSubtitle: {
      en: "Odds, bluffs & winning plays",
      tr: "Olasilik, blof ve kazanan hamleler",
      de: "Chancen, Bluffs & Gewinnzuege"
    },
    games: cards
  },
  {
    id: "dice-games",
    name: {
      en: "Dice Games",
      tr: "Zar Oyunlari",
      de: "Wuerfelspiele"
    },
    description: {
      en: "Push-your-luck and probability games where risk timing matters.",
      tr: "Risk alma ve olasilik hesaplamasinin onemli oldugu zar oyunlari.",
      de: "Gluecksreiz- und Wahrscheinlichkeitsspiele, in denen Timing entscheidet."
    },
    cardSubtitle: {
      en: "Master risk and probability",
      tr: "Risk ve olasiligi yonet",
      de: "Risiko und Wahrscheinlichkeit meistern"
    },
    games: dice
  },
  {
    id: "word-games",
    name: {
      en: "Word Games",
      tr: "Kelime Oyunlari",
      de: "Wortspiele"
    },
    description: {
      en: "Vocabulary, clue-giving, spelling, and deduction games.",
      tr: "Kelime bilgisi, ipucu verme, heceleme ve cikarim oyunlari.",
      de: "Wortschatz-, Hinweis-, Rechtschreib- und Deduktionsspiele."
    },
    cardSubtitle: {
      en: "Outsmart with words & clues",
      tr: "Kelime ve ipuclariyla one gec",
      de: "Mit Woertern & Hinweisen gewinnen"
    },
    games: words
  },
  {
    id: "party-family-games",
    name: {
      en: "Party & Family Games",
      tr: "Parti ve Aile Oyunlari",
      de: "Party- und Familienspiele"
    },
    description: {
      en: "Fast, social, easy-to-teach games for mixed groups.",
      tr: "Karma gruplar icin hizli, sosyal ve kolay ogretilen oyunlar.",
      de: "Schnelle, soziale und leicht erklaerbare Spiele fuer gemischte Gruppen."
    },
    cardSubtitle: {
      en: "Read the table, come out ahead",
      tr: "Masayi oku, one gec",
      de: "Den Tisch lesen und vorn liegen"
    },
    games: partyFamily
  },
  {
    id: "cooperative-games",
    name: {
      en: "Cooperative Games",
      tr: "Isbirlikci Oyunlar",
      de: "Kooperative Spiele"
    },
    description: {
      en: "Team games where planning, role discipline, and shared information win.",
      tr: "Planlama, rol disiplini ve ortak bilginin kazandirdigi takim oyunlari.",
      de: "Teamspiele, in denen Planung, Rollenfokus und geteilte Informationen gewinnen."
    },
    cardSubtitle: {
      en: "Beat the game as a team",
      tr: "Oyunu takim olarak yen",
      de: "Das Spiel im Team besiegen"
    },
    games: cooperative
  },
  {
    id: "strategy-war-games",
    name: {
      en: "Strategy & War Games",
      tr: "Strateji ve Savas Oyunlari",
      de: "Strategie- und Kriegsspiele"
    },
    description: {
      en: "Conflict, negotiation, area control, and abstract strategy games.",
      tr: "Catisma, pazarlik, alan kontrolu ve soyut strateji oyunlari.",
      de: "Konflikt-, Verhandlungs-, Gebietskontroll- und abstrakte Strategiespiele."
    },
    cardSubtitle: {
      en: "Outmaneuver and dominate",
      tr: "Manevrayla ustunluk kur",
      de: "Ueberliste und dominiere"
    },
    games: strategyWar
  }
];

const curatedGuides: GameGuide[] = [
  {
    slug: "monopoly",
    title: "Monopoly",
    difficulty: "simple",
    categoryId: "classic-board-games",
    updated: "2026-07-03",
    metaTitle: {
      en: "How to Win Monopoly: Best Strategy Guide",
      tr: "Monopoly Nasil Kazanilir: En Iyi Strateji",
      de: "Monopoly gewinnen: Die beste Strategie"
    },
    metaDescription: {
      en: "Learn the best Monopoly strategy: buy aggressively, build orange/red monopolies, manage cash, and avoid common trading mistakes.",
      tr: "Monopoly kazanmak icin agresif satin alma, turuncu/kirmizi setler, nakit kontrolu ve takas hatalarini ogren.",
      de: "Lerne die beste Monopoly-Strategie: aggressiv kaufen, orange/rote Sets ausbauen, Bargeld steuern und schlechte Trades vermeiden."
    },
    intro: {
      en: "Monopoly is won by creating rent pressure before other players can stabilize. The best players buy early, trade for high-traffic color groups, and build houses fast.",
      tr: "Monopoly, rakipler dengelenmeden kira baskisi kurarak kazanilir. En iyi oyuncular erken alir, yogun trafige sahip renk gruplari icin takas yapar ve hizla ev kurar.",
      de: "Monopoly gewinnt man, indem man Mietdruck erzeugt, bevor andere Spieler stabil werden. Gute Spieler kaufen frueh, handeln fuer stark besuchte Farbgruppen und bauen schnell Haeuser."
    },
    quickTips: {
      en: ["Buy almost every property early.", "Prioritize orange, red, and light blue sets.", "Build three houses before chasing hotels.", "Trade to complete your monopoly, not to be fair."],
      tr: ["Baslarda neredeyse her arsayi al.", "Turuncu, kirmizi ve acik mavi setlere oncelik ver.", "Otel kovalamadan once uc ev kur.", "Adil gorunmek icin degil, kendi monopolunu tamamlamak icin takas yap."],
      de: ["Kaufe am Anfang fast jedes Feld.", "Priorisiere orange, rote und hellblaue Gruppen.", "Baue drei Haeuser, bevor du Hotels jagst.", "Handle, um dein Monopol zu vollenden, nicht um fair zu wirken."]
    },
    strategy: {
      en: [
        "Your first goal is ownership density. Properties are future leverage, so skipping early purchases usually gives the table cheaper auctions and weakens your trade position.",
        "The strongest practical targets are orange and red because players land there often after jail. Light blue is cheap and fast to develop, while dark blue is powerful but too swingy to rely on.",
        "Once you own a color group, build evenly to three houses. Three houses create the best rent jump for the money and also reduce the house supply available to opponents.",
        "Keep enough cash to survive one bad rent hit, but do not hoard money. Cash that is not turning into houses usually lets opponents catch up."
      ],
      tr: [
        "Ilk hedefin sahiplik yogunlugu olmali. Arsalar gelecekte pazarlik gucudur; erken alimlari pas gecmek genelde masaya ucuz acik artirma verir ve takas gucunu azaltir.",
        "En guclu pratik hedefler turuncu ve kirmizidir, cunku oyuncular hapisten sonra bu bolgeye sik iner. Acik mavi ucuz ve hizli gelisir; koyu mavi gucludur ama fazla dalgalidir.",
        "Bir renk grubunu tamamlayinca esit sekilde uc eve cik. Uc ev, yatirima gore en iyi kira sicramsini verir ve rakiplerin kullanabilecegi ev havuzunu da azaltir.",
        "Bir kotu kira vurusuna dayanacak nakit tut, ama para biriktirme. Eve donusmeyen nakit genelde rakiplerin yetismesine izin verir."
      ],
      de: [
        "Dein erstes Ziel ist Besitzdichte. Strassen sind spaetere Verhandlungsmasse; fruehes Passen gibt dem Tisch oft billige Auktionen und schwaecht deine Position.",
        "Die besten praktischen Ziele sind Orange und Rot, weil Spieler nach dem Gefaengnis oft dort landen. Hellblau ist billig und schnell, Dunkelblau stark, aber zu swingy.",
        "Wenn du eine Farbgruppe besitzt, baue gleichmaessig bis drei Haeuser. Drei Haeuser bringen den besten Mietanstieg pro Geld und verknappen zugleich den Hausvorrat.",
        "Halte genug Bargeld fuer einen schlechten Treffer, aber horte es nicht. Geld, das nicht in Haeuser fliesst, laesst Gegner meist aufholen."
      ]
    },
    resources: {
      en: [{ label: "Monopoly probability chart", url: "https://en.wikipedia.org/wiki/Monopoly_(game)#Probability" }],
      tr: [{ label: "Monopoly olasilik bilgisi", url: "https://en.wikipedia.org/wiki/Monopoly_(game)#Probability" }],
      de: [{ label: "Monopoly-Wahrscheinlichkeiten", url: "https://en.wikipedia.org/wiki/Monopoly_(game)#Probability" }]
    },
    relatedSlugs: ["risk", "catan", "ticket-to-ride"]
  },
  {
    slug: "chess",
    title: "Chess",
    difficulty: "complicated",
    categoryId: "classic-board-games",
    updated: "2026-07-03",
    metaTitle: {
      en: "How to Win Chess: Beginner to Intermediate Strategy",
      tr: "Satranc Nasil Kazanilir: Baslangic ve Orta Seviye Strateji",
      de: "Schach gewinnen: Strategie fuer Einsteiger und Fortgeschrittene"
    },
    metaDescription: {
      en: "A short chess strategy guide covering opening principles, tactics, king safety, endgames, and study resources.",
      tr: "Acilis ilkeleri, taktikler, sah guvenligi, oyun sonlari ve kaynaklarla kisa satranc strateji rehberi.",
      de: "Kurzer Schach-Strategieleitfaden zu Eroeffnung, Taktik, Koenigssicherheit, Endspielen und Lernquellen."
    },
    intro: {
      en: "Chess is too deep for one perfect recipe, but most games below expert level are won by avoiding blunders, developing quickly, and converting simple advantages.",
      tr: "Satranc tek bir kusursuz tarifle cozulemeyecek kadar derindir; ama uzman seviyesinin altinda cogu oyun hata yapmamak, hizli gelismek ve basit ustunlukleri cevirmekle kazanilir.",
      de: "Schach ist zu tief fuer ein perfektes Rezept, aber unter Expertenniveau werden die meisten Partien durch weniger Patzer, schnelle Entwicklung und saubere Vorteilsverwertung gewonnen."
    },
    quickTips: {
      en: ["Fight for the center with pawns and pieces.", "Develop all minor pieces before launching attacks.", "Check every move for captures, checks, and threats.", "Trade when ahead, complicate when behind."],
      tr: ["Merkez icin piyon ve taslarla savas.", "Saldiriya gecmeden once hafif taslari gelistir.", "Her hamlede alma, sah ve tehditleri kontrol et.", "Ondeyken tas degis, gerideyken oyunu karmasiklastir."],
      de: ["Kaempfe mit Bauern und Figuren um das Zentrum.", "Entwickle alle Leichtfiguren vor Angriffen.", "Pruefe jeden Zug auf Schlaege, Schachs und Drohungen.", "Tausche bei Vorteil, verkompliziere bei Rueckstand."]
    },
    strategy: {
      en: [
        "In the opening, play for center control, quick development, and king safety. Do not memorize long lines before you understand why the moves are played.",
        "Most decisive wins come from tactics. Before moving, ask what your opponent attacks, what checks exist, and whether any piece is undefended.",
        "A good middlegame plan usually starts from pawn structure. Attack where your pawns point, improve your worst piece, and avoid moving the same piece repeatedly without a reason.",
        "Endgames reward activity. Centralize the king, push passed pawns, and learn basic king-and-pawn and rook endgames before studying rare checkmates."
      ],
      tr: [
        "Acilista merkez kontrolu, hizli gelisim ve sah guvenligi icin oyna. Hamlelerin neden yapildigini anlamadan uzun varyant ezberleme.",
        "Belirleyici kazancilarin cogu taktiktir. Hamle yapmadan once rakibin neye saldirdigini, hangi sahlarin oldugunu ve hangi taslarin savunmasiz kaldigini sor.",
        "Iyi oyun ortasi plani genelde piyon yapisindan baslar. Piyonlarinin gosterdigi kanatta saldir, en kotu tasini iyilestir ve sebepsiz ayni tasi tekrar tekrar oynama.",
        "Oyun sonlari aktifligi odullendirir. Sahi merkeze getir, gecmis piyonlari sur ve nadir matlardan once temel sah-piyon ve kale oyun sonlarini ogren."
      ],
      de: [
        "In der Eroeffnung geht es um Zentrum, schnelle Entwicklung und Koenigssicherheit. Lerne keine langen Varianten, bevor du die Ideen dahinter verstehst.",
        "Die meisten Siege entstehen durch Taktik. Frage vor jedem Zug: Was greift der Gegner an, welche Schachs gibt es, und welche Figur haengt?",
        "Ein guter Mittelspielplan beginnt oft bei der Bauernstruktur. Greife dort an, wohin deine Bauern zeigen, verbessere deine schlechteste Figur und vermeide ziellose Mehrfachzuege.",
        "Endspiele belohnen Aktivitaet. Zentralisiere den Koenig, schiebe Freibauern und lerne grundlegende Bauern- und Turmendspiele vor seltenen Mattbildern."
      ]
    },
    resources: {
      en: [
        { label: "Lichess practice", url: "https://lichess.org/practice" },
        { label: "Chessable courses", url: "https://www.chessable.com" },
        { label: "Daniel Naroditsky on YouTube", url: "https://www.youtube.com/@DanielNaroditskyGM" }
      ],
      tr: [
        { label: "Lichess alistirmalari", url: "https://lichess.org/practice" },
        { label: "Chessable kurslari", url: "https://www.chessable.com" },
        { label: "Daniel Naroditsky YouTube", url: "https://www.youtube.com/@DanielNaroditskyGM" }
      ],
      de: [
        { label: "Lichess Training", url: "https://lichess.org/practice" },
        { label: "Chessable Kurse", url: "https://www.chessable.com" },
        { label: "Daniel Naroditsky auf YouTube", url: "https://www.youtube.com/@DanielNaroditskyGM" }
      ]
    },
    relatedSlugs: ["go", "checkers", "hive"]
  },
  {
    slug: "catan",
    title: "Catan",
    difficulty: "complicated",
    categoryId: "euro-board-games",
    updated: "2026-07-03",
    metaTitle: {
      en: "How to Win Catan: Best Settlement and Trading Strategy",
      tr: "Catan Nasil Kazanilir: Yerlesim ve Takas Stratejisi",
      de: "Catan gewinnen: Siedlungs- und Handelsstrategie"
    },
    metaDescription: {
      en: "Win more Catan games with better initial settlements, resource balance, expansion timing, development cards, and trading discipline.",
      tr: "Daha iyi ilk yerlesimler, kaynak dengesi, genisleme zamanlamasi, gelisim kartlari ve takas disipliniyle Catan kazan.",
      de: "Gewinne mehr Catan mit besseren Startsiedlungen, Ressourcengleichgewicht, Expansion, Entwicklungskarten und Handelsdisziplin."
    },
    intro: {
      en: "Catan rewards flexible plans. You win by securing production, turning scarcity into trades, and choosing the right race: longest road, largest army, cities, or ports.",
      tr: "Catan esnek planlari odullendirir. Uretimi guvenceye alip kitligi takasa cevirerek ve dogru yarisi secerek kazanirsin: en uzun yol, en buyuk ordu, sehirler veya limanlar.",
      de: "Catan belohnt flexible Plaene. Du gewinnst mit Produktion, klugem Handel und der richtigen Route: laengste Strasse, groesste Rittermacht, Staedte oder Haefen."
    },
    quickTips: {
      en: ["Value ore and wheat highly because they make cities and development cards.", "Do not chase longest road unless your board position supports it.", "Trade before you look threatening.", "Use ports to escape table dependence."],
      tr: ["Sehir ve gelisim karti icin tas ve bugdayi yuksek degerle.", "Tahta konumun desteklemiyorsa en uzun yolu kovalamadan once dusun.", "Tehdit gibi gorunmeden once takas yap.", "Masaya bagimliliktan cikmak icin liman kullan."],
      de: ["Bewerte Erz und Weizen hoch, weil sie Staedte und Entwicklungskarten bringen.", "Jage die laengste Strasse nur, wenn deine Lage passt.", "Handle, bevor du bedrohlich wirkst.", "Nutze Haefen, um unabhaengiger vom Tisch zu werden."]
    },
    strategy: {
      en: [
        "Your opening placements should combine number quality with resource coverage. A 6 or 8 is strong, but a balanced set of wheat, ore, brick, wood, and sheep prevents stalled turns.",
        "Cities are the cleanest path to victory because they multiply production and support development cards. If you have ore and wheat, make them your engine.",
        "Trading is about timing, not kindness. Early trades can accelerate you, but once you lead, offer trades that solve your problem without giving a rival their next point.",
        "Practice online to see more board layouts. Colonist.io is especially useful for learning settlement evaluation and trade discipline quickly."
      ],
      tr: [
        "Ilk yerlesimler sayi kalitesiyle kaynak cesitliligini birlestirmeli. 6 veya 8 gucludur, ama bugday, tas, tugla, odun ve koyun dengesi tikali turlari azaltir.",
        "Sehirler en temiz kazanma yoludur; uretimi katlar ve gelisim kartlarini destekler. Tas ve bugdayin varsa motorunu bunun uzerine kur.",
        "Takas iyilik degil zamanlamadir. Erken takas seni hizlandirir; one gecince rakibe bir sonraki puanini vermeden kendi sorununu cozen takaslar yap.",
        "Daha cok tahta dizilimi gormek icin online pratik yap. Colonist.io, yerlesim degerlendirmesi ve takas disiplini ogrenmek icin ozellikle faydalidir."
      ],
      de: [
        "Deine Startplaetze sollten gute Zahlen und Ressourcenabdeckung verbinden. Eine 6 oder 8 ist stark, aber Weizen, Erz, Lehm, Holz und Schaf verhindern tote Runden.",
        "Staedte sind der sauberste Siegweg, weil sie Produktion verdoppeln und Entwicklungskarten tragen. Wenn du Erz und Weizen hast, baue daraus deine Engine.",
        "Handel ist Timing, nicht Nettigkeit. Fruehe Trades beschleunigen dich; als Fuehrender loest du dein Problem, ohne dem Rivalen den naechsten Punkt zu schenken.",
        "Online-Praxis zeigt dir mehr Brettlayouts. Colonist.io ist besonders nuetzlich, um Startplatzbewertung und Handelsdisziplin schnell zu lernen."
      ]
    },
    resources: {
      en: [
        { label: "Practice Catan-style games on Colonist.io", url: "https://colonist.io" },
        { label: "Colonist Catan rules and setup guide", url: "https://colonist.io/catan-rules" },
        { label: "Colonist strategy videos on YouTube", url: "https://www.youtube.com/@colonistio" },
        { label: "r/Colonist community", url: "https://www.reddit.com/r/Colonist/" }
      ],
      tr: [
        { label: "Colonist.io'da Catan tarzi pratik yap", url: "https://colonist.io" },
        { label: "Colonist Catan kurallari ve kurulum rehberi", url: "https://colonist.io/catan-rules" },
        { label: "YouTube'da Colonist strateji videolari", url: "https://www.youtube.com/@colonistio" },
        { label: "r/Colonist toplulugu", url: "https://www.reddit.com/r/Colonist/" }
      ],
      de: [
        { label: "Catan-aehnlich auf Colonist.io ueben", url: "https://colonist.io" },
        { label: "Colonist Catan-Regeln und Aufbau-Guide", url: "https://colonist.io/catan-rules" },
        { label: "Colonist Strategie-Videos auf YouTube", url: "https://www.youtube.com/@colonistio" },
        { label: "r/Colonist Community", url: "https://www.reddit.com/r/Colonist/" }
      ]
    },
    relatedSlugs: ["carcassonne", "ticket-to-ride", "splendor"]
  },
  {
    slug: "scrabble",
    title: "Scrabble",
    difficulty: "simple",
    categoryId: "word-games",
    updated: "2026-07-03",
    metaTitle: {
      en: "How to Win Scrabble: Word Score and Rack Strategy",
      tr: "Scrabble Nasil Kazanilir: Kelime Puani ve Tas Stratejisi",
      de: "Scrabble gewinnen: Wortwert und Buchstabenstrategie"
    },
    metaDescription: {
      en: "Improve at Scrabble with tile balance, premium squares, short word lists, bingo setup, and defensive board control.",
      tr: "Tas dengesi, ozel kareler, kisa kelime listeleri, bingo hazirligi ve savunmali tahta kontroluyle Scrabble gelistir.",
      de: "Werde besser in Scrabble mit Buchstabenbalance, Bonusfeldern, kurzen Wortlisten, Bingo-Aufbau und defensiver Brettkontrolle."
    },
    intro: {
      en: "Scrabble is not only vocabulary. Strong players manage their rack, use premium squares efficiently, and avoid opening easy scoring lanes.",
      tr: "Scrabble sadece kelime bilgisi degildir. Guclu oyuncular taslarini dengeler, ozel kareleri verimli kullanir ve rakibe kolay puan koridoru acmaz.",
      de: "Scrabble ist nicht nur Wortschatz. Starke Spieler balancieren ihre Buchstaben, nutzen Bonusfelder effizient und oeffnen keine einfachen Punktelinien."
    },
    quickTips: {
      en: ["Keep balanced vowels and consonants.", "Learn two-letter words first.", "Use S and blank tiles for big turns.", "Block premium squares when you cannot score them."],
      tr: ["Unlu ve unsuz dengesini koru.", "Once iki harfli kelimeleri ogren.", "S ve joker taslarini buyuk turlar icin kullan.", "Puan alamayacaksan ozel kareleri kapat."],
      de: ["Halte Vokale und Konsonanten im Gleichgewicht.", "Lerne zuerst Zwei-Buchstaben-Woerter.", "Nutze S und Blankosteine fuer grosse Zuege.", "Blocke Bonusfelder, wenn du sie nicht selbst punktest."]
    },
    strategy: {
      en: [
        "The best Scrabble move is often the one that scores well while leaving a playable rack. Avoid keeping too many vowels, too many duplicates, or awkward high-value tiles.",
        "Two-letter words unlock parallel plays and let you score in multiple directions. They are the fastest study list with the biggest payoff.",
        "Protect triple-word lanes. If your move creates an easy opening, make sure the points you gain are worth the counterattack.",
        "Set up bingos only when your rack supports them. Keep common stems and flexible letters, but do not pass up reliable points for a fantasy seven-letter word."
      ],
      tr: [
        "En iyi Scrabble hamlesi genelde iyi puan alirken oynanabilir tas dizilimi birakandir. Cok fazla unlu, tekrarli harf veya zor yuksek puanli tas tutma.",
        "Iki harfli kelimeler paralel oyunlari acar ve birden fazla yonde puan aldirir. En hizli geri donus veren calisma listesidir.",
        "Uc kelime koridorlarini koru. Hamlen kolay aciklik yaratiyorsa aldigin puan karsi saldiriya degecek kadar yuksek olmali.",
        "Bingo hazirligini sadece taslar destekliyorsa yap. Esnek harfleri tut, ama hayali yedi harfli kelime icin garanti puani kacirma."
      ],
      de: [
        "Der beste Scrabble-Zug punktet gut und laesst ein spielbares Rack zurueck. Vermeide zu viele Vokale, Doppelungen oder sperrige Hochwertsteine.",
        "Zwei-Buchstaben-Woerter oeffnen Parallelzuege und Punkte in mehreren Richtungen. Das ist die schnellste Lernliste mit grossem Nutzen.",
        "Schuetze Dreifachwort-Linien. Wenn dein Zug eine leichte Oeffnung schafft, muessen die Punkte den Gegenschlag wert sein.",
        "Baue Bingos nur auf, wenn dein Rack es hergibt. Halte flexible Buchstaben, aber opfere keine sicheren Punkte fuer ein Wunschwort."
      ]
    },
    resources: {
      en: [{ label: "NASPA word list resources", url: "https://scrabbleplayers.org/w/NASPA_Word_List" }],
      tr: [{ label: "NASPA kelime listesi kaynaklari", url: "https://scrabbleplayers.org/w/NASPA_Word_List" }],
      de: [{ label: "NASPA Wortlisten", url: "https://scrabbleplayers.org/w/NASPA_Word_List" }]
    },
    relatedSlugs: ["boggle", "bananagrams", "codenames"]
  },
  {
    slug: "carcassonne",
    title: "Carcassonne",
    difficulty: "simple",
    categoryId: "euro-board-games",
    updated: "2026-07-03",
    metaTitle: {
      en: "How to Win Carcassonne: Meeple and Tile Strategy",
      tr: "Carcassonne Nasil Kazanilir: Meeple ve Karo Stratejisi",
      de: "Carcassonne gewinnen: Meeple- und Plattchenstrategie"
    },
    metaDescription: {
      en: "Learn Carcassonne strategy: efficient meeple use, shared cities, farming, blocking, and when to score early.",
      tr: "Verimli meeple kullanimi, ortak sehirler, ciftlikler, bloklama ve erken puanlama ile Carcassonne stratejisi ogren.",
      de: "Lerne Carcassonne-Strategie: effiziente Meeple, gemeinsame Staedte, Wiesen, Blockaden und fruehes Punkten."
    },
    intro: {
      en: "Carcassonne is won by scoring efficiently without trapping your meeples. The strongest players share big features, finish small ones, and choose farms carefully.",
      tr: "Carcassonne, meeple'larini hapsetmeden verimli puan alarak kazanilir. En iyi oyuncular buyuk yapilari paylasir, kucukleri bitirir ve ciftlikleri dikkatli secer.",
      de: "Carcassonne gewinnt man durch effizientes Punkten, ohne Meeple zu fangen. Starke Spieler teilen grosse Projekte, beenden kleine und waehlen Wiesen gezielt."
    },
    quickTips: {
      en: ["Do not run out of meeples early.", "Join opponents' large cities when possible.", "Finish small roads and cities for tempo.", "Farm only when the board supports it."],
      tr: ["Erken meeple bitirme.", "Mumkunse rakiplerin buyuk sehirlerine ortak ol.", "Tempo icin kucuk yollar ve sehirleri bitir.", "Sadece tahta destekliyorsa ciftlige gir."],
      de: ["Gehe frueh nicht ohne Meeple aus.", "Steige wenn moeglich in grosse gegnerische Staedte ein.", "Beende kleine Strassen und Staedte fuer Tempo.", "Farme nur, wenn das Brett es traegt."]
    },
    strategy: {
      en: [
        "Meeple are your real economy. A five-point city that returns a meeple quickly can be stronger than a huge unfinished project.",
        "When another player builds a valuable city, look for a legal way to join it instead of racing alone. Shared points are often better than being locked out.",
        "Farmers can decide the game, but early farmers are risky. Wait until city clusters are visible and you know which fields can realistically connect.",
        "Block only when the cost is low. A defensive tile is good if it also scores, preserves your meeples, or denies a major opponent swing."
      ],
      tr: [
        "Asil ekonomin meeple'lardir. Hemen geri donen bes puanlik sehir, bitmeyen dev projeden daha guclu olabilir.",
        "Bir oyuncu degerli sehir kuruyorsa tek basina yarisma yerine yasal ortaklik yolu ara. Paylasilan puan, disarida kalmaktan iyidir.",
        "Ciftciler oyunu belirleyebilir ama erken ciftci risklidir. Sehir kumeleri gorunune ve hangi tarlalarin baglanabilecegini anlayana kadar bekle.",
        "Sadece maliyet dusukken blokla. Savunma karosu ayni zamanda puan aliyor, meeple koruyor veya rakibin buyuk sicramsini engelliyorsa iyidir."
      ],
      de: [
        "Meeple sind deine echte Wirtschaft. Eine schnelle Fuenf-Punkte-Stadt mit Rueckkehr kann staerker sein als ein riesiges unfertiges Projekt.",
        "Wenn jemand eine wertvolle Stadt baut, suche einen legalen Einstieg statt allein zu rennen. Geteilte Punkte sind oft besser als ausgesperrt zu sein.",
        "Bauern koennen entscheiden, sind frueh aber riskant. Warte, bis Stadtgruppen sichtbar sind und klar ist, welche Wiesen realistisch verbinden.",
        "Blocke nur bei niedrigen Kosten. Ein Defensivplaettchen ist gut, wenn es auch punktet, Meeple rettet oder einen grossen gegnerischen Schwung verhindert."
      ]
    },
    resources: {
      en: [{ label: "Carcassonne rules and expansions", url: "https://www.zmangames.com/en/games/carcassonne/" }],
      tr: [{ label: "Carcassonne kurallar ve ek paketler", url: "https://www.zmangames.com/en/games/carcassonne/" }],
      de: [{ label: "Carcassonne Regeln und Erweiterungen", url: "https://www.zmangames.com/en/games/carcassonne/" }]
    },
    relatedSlugs: ["catan", "azul", "kingdomino"]
  }
];

type GuideBank = {
  intro: string[];
  tips: string[];
  strategy: string[];
  metaDesc: string;
};

const guideBanks: Record<string, Record<Lang, GuideBank>> = {
  "classic-board-games": {
    en: {
      intro: [
        "In {name}, steady fundamentals beat flashy plays. Winners protect against mistakes, keep flexible options, and press small edges into a lead.",
        "{name} rewards players who plan a move ahead, control the tempo, and avoid unnecessary risks while the position is even.",
        "Winning {name} comes down to consistent decisions: take safe value early, then convert small advantages before opponents recover."
      ],
      tips: [
        "Learn the core rules cold so you never waste a turn.",
        "Think one move ahead before committing.",
        "Trade or attack only when it improves your position.",
        "Protect your strongest pieces and options.",
        "Punish opponents' mistakes immediately.",
        "Keep your plans flexible until the board commits.",
        "Control the center or the key spaces when you can.",
        "Play for a small, safe edge rather than a risky swing."
      ],
      strategy: [
        "Early in {name}, focus on solid development instead of forcing the issue. A stable position gives you more good options later.",
        "Tempo matters. Every turn that advances your plan while limiting your opponent's is worth more than a flashy but loose move.",
        "Watch for the moment the position opens. When you have a clear advantage in {name}, simplify and convert rather than complicate.",
        "Most losses come from avoidable blunders. Before each move, check what your opponent threatens and whether any piece is undefended.",
        "Keep counting your resources and options. The player who runs out of safe moves in {name} is usually the one who loses.",
        "Endgames reward preparation. Trade down into positions you understand and steer toward a known winning pattern."
      ],
      metaDesc: "Learn how to win {name} with clear fundamentals, better tempo, and fewer mistakes in this quick strategy guide."
    },
    tr: {
      intro: [
        "{name} oyununda gosterisli hamleler degil saglam temeller kazandirir. Kazananlar hata yapmaz, esnek kalir ve kucuk avantajlari one cevirir.",
        "{name} oyununda bir hamle onceden plan yapan, tempoyu kontrol eden ve gereksiz riske girmeyen oyuncu kazanir.",
        "{name} kazanmak tutarli kararlara baglidir: once guvenli deger al, sonra rakip toparlamadan kucuk ustunlukleri cevir."
      ],
      tips: [
        "Temel kurallari cok iyi ogren ki hicbir tur bosa gitmesin.",
        "Hamle yapmadan once bir adim ilerisini dusun.",
        "Sadece konumunu iyilestiriyorsa takas et veya saldir.",
        "En guclu taslarini ve seceneklerini koru.",
        "Rakibin hatalarini aninda cezalandir.",
        "Tahta netlesene kadar planlarini esnek tut.",
        "Mumkun oldukca merkezi veya kilit alanlari kontrol et.",
        "Riskli sicrama yerine kucuk ve guvenli avantaj oyna."
      ],
      strategy: [
        "{name} oyununda erken asamada zorlamak yerine saglam gelisime odaklan. Dengeli konum sana sonra daha cok iyi secenek verir.",
        "Tempo onemlidir. Planini ilerletirken rakibi kisitlayan her tur, gosterisli ama gevsek bir hamleden daha degerlidir.",
        "Konumun acildigi ani izle. {name} oyununda net ustunlugun varsa oyunu basitlestir ve cevir, karmasiklastirma.",
        "Kayiplarin cogu onlenebilir hatalardan gelir. Her hamleden once rakibin neyi tehdit ettigini ve savunmasiz tas olup olmadigini kontrol et.",
        "Kaynaklarini ve seceneklerini saymayi surdur. {name} oyununda guvenli hamlesi biten oyuncu genelde kaybeder.",
        "Oyun sonlari hazirligi odullendirir. Anladigin konumlara takas yap ve bilinen kazanan yapiya yonel."
      ],
      metaDesc: "{name} nasil kazanilir? Net temeller, daha iyi tempo ve daha az hata ile bu kisa strateji rehberinde ogren."
    },
    de: {
      intro: [
        "Bei {name} gewinnen solide Grundlagen, keine spektakulaeren Zuege. Gewinner vermeiden Fehler, bleiben flexibel und bauen kleine Vorteile aus.",
        "{name} belohnt Spieler, die einen Zug vorausdenken, das Tempo bestimmen und im ausgeglichenen Spiel keine unnoetigen Risiken eingehen.",
        "{name} zu gewinnen haengt an konstanten Entscheidungen: frueh sicheren Wert nehmen und kleine Vorteile verwerten, bevor Gegner sich erholen."
      ],
      tips: [
        "Lerne die Grundregeln perfekt, damit kein Zug verschwendet wird.",
        "Denke vor jedem Zug einen Schritt voraus.",
        "Tausche oder greife nur an, wenn es deine Lage verbessert.",
        "Schuetze deine staerksten Figuren und Optionen.",
        "Bestrafe Fehler der Gegner sofort.",
        "Halte deine Plaene flexibel, bis sich das Brett festlegt.",
        "Kontrolliere wenn moeglich das Zentrum oder die Schluesselfelder.",
        "Spiele auf einen kleinen, sicheren Vorteil statt auf ein riskantes Va-Banque."
      ],
      strategy: [
        "Konzentriere dich bei {name} frueh auf solide Entwicklung statt zu forcieren. Eine stabile Lage gibt dir spaeter mehr gute Optionen.",
        "Tempo zaehlt. Jeder Zug, der deinen Plan voranbringt und den Gegner einschraenkt, ist mehr wert als ein schoener, aber loser Zug.",
        "Achte auf den Moment, in dem sich die Stellung oeffnet. Wenn du bei {name} klar vorn liegst, vereinfache und verwerte.",
        "Die meisten Niederlagen kommen von vermeidbaren Patzern. Pruefe vor jedem Zug die Drohungen des Gegners und ungedeckte Figuren.",
        "Zaehle laufend deine Ressourcen und Optionen. Wer bei {name} keine sicheren Zuege mehr hat, verliert meist.",
        "Endspiele belohnen Vorbereitung. Tausche in Stellungen, die du verstehst, und steuere ein bekanntes Gewinnmuster an."
      ],
      metaDesc: "Wie gewinnt man {name}? Lerne klare Grundlagen, besseres Tempo und weniger Fehler in diesem kurzen Strategie-Guide."
    }
  },
  "euro-board-games": {
    en: {
      intro: [
        "{name} rewards a tight engine and efficient turns. Winners set up an income of points early, then spend every action near full value.",
        "In {name}, the player who wastes the fewest actions usually wins. Build toward reliable points and avoid dead turns.",
        "{name} is a race of efficiency: pick one strong scoring path, feed it every round, and adapt only when the board forces you."
      ],
      tips: [
        "Commit to one main scoring engine early.",
        "Avoid dead turns; every action should build value.",
        "Grab scarce resources before opponents do.",
        "Convert resources into points before the game ends.",
        "Watch the round track so you never leave value unused.",
        "Deny a key spot only when it also helps you.",
        "Diversify points late to dodge single-track blocks.",
        "Count end-game scoring before your final moves."
      ],
      strategy: [
        "Your opening in {name} should pick a direction. A focused engine that scores reliably beats a scattered plan that touches everything and finishes nothing.",
        "Action efficiency decides most euro games. Sequence your turns so each one enables the next, and avoid moves that only set up a setup.",
        "Resource conversion is the real clock. Points sitting as unspent resources at the end of {name} are points you did not score.",
        "Read the shared board. Take a contested spot when it advances your plan, but do not spend tempo purely to block unless it swings the score.",
        "Late game, pivot toward guaranteed points. Bonus and end-game scoring in {name} usually reward planning two or three turns ahead.",
        "Track your opponents' engines. If someone is about to run away on one strategy, contest the resource that feeds it rather than racing blindly."
      ],
      metaDesc: "Learn how to win {name}: build an efficient engine, avoid dead turns, and maximize end-game scoring."
    },
    tr: {
      intro: [
        "{name} oyununda siki bir motor ve verimli turlar kazandirir. Kazananlar erken puan geliri kurar, sonra her aksiyonu tam degerinde harcar.",
        "{name} oyununda en az aksiyon israf eden genelde kazanir. Guvenilir puana insa et ve olu turlardan kacin.",
        "{name} bir verimlilik yarisidir: guclu bir puan yolu sec, her tur besle ve sadece tahta zorlayinca uyum sagla."
      ],
      tips: [
        "Erkenden tek bir ana puan motoruna baglan.",
        "Olu turlardan kacin; her aksiyon deger uretmeli.",
        "Kit kaynaklari rakiplerden once kap.",
        "Oyun bitmeden kaynaklari puana cevir.",
        "Tur sayacini izle ki deger bosa gitmesin.",
        "Kilit alani sadece sana da yariyorsa engelle.",
        "Gec asamada puani cesitlendir, tek yol tikanmasin.",
        "Son hamlelerden once oyun sonu puanlamasini hesapla."
      ],
      strategy: [
        "{name} oyununda acilisin bir yon secmeli. Guvenilir puanlayan odakli motor, her seye dokunup hicbir seyi bitirmeyen daginik plandan iyidir.",
        "Aksiyon verimliligi cogu euro oyunu belirler. Turlarini her biri sonrakini acacak sekilde sirala ve sadece hazirligi hazirlayan hamlelerden kacin.",
        "Kaynak donusumu asil saattir. {name} sonunda harcanmamis kaynak olarak duran puanlar, alamadigin puanlardir.",
        "Ortak tahtayi oku. Cekismeli alani planini ilerletiyorsa al ama skoru degistirmedikce sirf engellemek icin tempo harcama.",
        "Gec oyunda garanti puana yonel. {name} oyununda bonus ve oyun sonu puanlamasi genelde iki uc tur onceden plani odullendirir.",
        "Rakiplerin motorlarini takip et. Biri tek stratejiyle kacacaksa korkusuzca yarismak yerine onu besleyen kaynagi cekis."
      ],
      metaDesc: "{name} nasil kazanilir: verimli bir motor kur, olu turlardan kacin ve oyun sonu puanlamasini en yuksege cikar."
    },
    de: {
      intro: [
        "{name} belohnt eine dichte Engine und effiziente Zuege. Gewinner bauen frueh einen Punkte-Zufluss und nutzen jede Aktion fast voll aus.",
        "Bei {name} gewinnt meist, wer die wenigsten Aktionen verschwendet. Baue auf verlaessliche Punkte und vermeide tote Zuege.",
        "{name} ist ein Effizienzrennen: waehle einen starken Punkteweg, fuettere ihn jede Runde und passe dich nur an, wenn das Brett dich zwingt."
      ],
      tips: [
        "Lege dich frueh auf eine Haupt-Engine fest.",
        "Vermeide tote Zuege; jede Aktion soll Wert schaffen.",
        "Schnapp dir knappe Ressourcen vor den Gegnern.",
        "Wandle Ressourcen in Punkte um, bevor das Spiel endet.",
        "Beachte die Rundenleiste, damit kein Wert liegen bleibt.",
        "Blockiere ein Schluesselfeld nur, wenn es dir auch nuetzt.",
        "Streue spaet Punkte, um Einzelweg-Blockaden zu umgehen.",
        "Rechne die Endwertung vor deinen letzten Zuegen."
      ],
      strategy: [
        "Deine Eroeffnung bei {name} sollte eine Richtung waehlen. Eine fokussierte Engine schlaegt einen zerfaserten Plan, der alles anfaengt und nichts beendet.",
        "Aktionseffizienz entscheidet die meisten Euro-Spiele. Ordne deine Zuege so, dass jeder den naechsten ermoeglicht, und vermeide reine Vorbereitungs-Zuege.",
        "Ressourcenumwandlung ist die eigentliche Uhr. Punkte, die am Ende von {name} als ungenutzte Ressourcen liegen, sind nicht erzielte Punkte.",
        "Lies das gemeinsame Brett. Nimm ein umkaempftes Feld, wenn es deinen Plan voranbringt, aber verschwende kein Tempo nur zum Blocken.",
        "Steuere spaet auf sichere Punkte zu. Bonus- und Endwertung bei {name} belohnen meist Planung ueber zwei, drei Zuege.",
        "Beobachte die Engines der Gegner. Zieht jemand mit einer Strategie davon, bekaempfe die Ressource, die sie fuettert, statt blind zu rennen."
      ],
      metaDesc: "Wie gewinnt man {name}: baue eine effiziente Engine, vermeide tote Zuege und maximiere die Endwertung."
    }
  },
  "card-games": {
    en: {
      intro: [
        "{name} rewards players who track cards, manage their hand, and pick the right moment to commit. Small edges in information win close games.",
        "In {name}, hand management and reading the table matter more than luck over time. Play the odds and control your tempo.",
        "Winning {name} means knowing what has been played, protecting your strong cards, and striking when the odds favor you."
      ],
      tips: [
        "Track which key cards have already been played.",
        "Manage your hand; do not dump your best cards early.",
        "Play the odds instead of hoping for one card.",
        "Watch what opponents keep and discard.",
        "Hold flexible cards that work in many situations.",
        "Bluff sparingly so your tells stay unreadable.",
        "Set up big turns instead of small immediate gains.",
        "Adjust risk to the score and how much game is left."
      ],
      strategy: [
        "Information is the edge in {name}. Keep a running memory of played cards so you can estimate what opponents and the deck still hold.",
        "Hand management wins over time. Spend weak cards on low-value turns and save your strongest plays for when they swing the round.",
        "Respect the odds. Chasing a single perfect card in {name} usually loses to steady, high-percentage decisions.",
        "Read tempo and position. Sometimes the best play is to pass or hold, forcing opponents to commit first and reveal information.",
        "Bluffing works only when it is rare. In {name}, mix your play so opponents cannot pattern-read your bets and discards.",
        "Late in the hand, count outs and points. Adjust aggression to the score: press when behind, simplify when ahead."
      ],
      metaDesc: "Learn how to win {name}: track cards, manage your hand, play the odds, and time your big plays."
    },
    tr: {
      intro: [
        "{name} oyununda kart takip eden, elini yoneten ve dogru ani secen kazanir. Bilgi ustunlugu yakin oyunlari kazandirir.",
        "{name} oyununda uzun vadede el yonetimi ve masayi okumak sanstan onemlidir. Olasilik oyna ve tempoyu kontrol et.",
        "{name} kazanmak, oynanan kartlari bilmek, guclu kartlari korumak ve olasilik lehine donunce vurmaktir."
      ],
      tips: [
        "Hangi kilit kartlarin oynandigini takip et.",
        "Elini yonet; en iyi kartlarini erken harcama.",
        "Tek kart umut etme, olasilik oyna.",
        "Rakiplerin ne tuttugunu ve attigini izle.",
        "Cok durumda ise yarayan esnek kartlar tut.",
        "Az blof yap ki ipuclarin okunamasin.",
        "Kucuk anlik kazanc yerine buyuk turlar hazirla.",
        "Riski skora ve kalan oyuna gore ayarla."
      ],
      strategy: [
        "{name} oyununda bilgi ustunluktur. Oynanan kartlari akilda tut ki rakiplerde ve destede ne kaldigini tahmin edebilesin.",
        "El yonetimi uzun vadede kazandirir. Zayif kartlari dusuk degerli turlarda harca, en guclu hamleleri turu ceviren ana sakla.",
        "Olasiliga saygi duy. {name} oyununda tek mukemmel karti kovalamak, istikrarli yuksek olasilikli kararlara genelde kaybeder.",
        "Tempoyu ve konumu oku. Bazen en iyi hamle pas gecmek veya tutmaktir; boylece rakip once baglanir ve bilgi verir.",
        "Blof sadece nadirse ise yarar. {name} oyununda oyununu karistir ki rakip bahis ve atislarindaki oruntuyu okuyamasin.",
        "El sonunda cikislari ve puanlari say. Agresifligi skora gore ayarla: gerideyken bastir, ondeyken basitlestir."
      ],
      metaDesc: "{name} nasil kazanilir: kartlari takip et, elini yonet, olasilik oyna ve buyuk hamleleri zamanla."
    },
    de: {
      intro: [
        "{name} belohnt Spieler, die Karten mitzaehlen, ihre Hand steuern und den richtigen Moment waehlen. Kleine Infovorteile entscheiden enge Spiele.",
        "Bei {name} zaehlen Handmanagement und das Lesen des Tisches langfristig mehr als Glueck. Spiele die Wahrscheinlichkeiten und dein Tempo.",
        "{name} zu gewinnen heisst zu wissen, was gespielt wurde, starke Karten zu schuetzen und zuzuschlagen, wenn die Chancen stimmen."
      ],
      tips: [
        "Merke dir, welche Schluesselkarten schon gespielt wurden.",
        "Steuere deine Hand; wirf starke Karten nicht zu frueh ab.",
        "Spiele die Wahrscheinlichkeit statt auf eine Karte zu hoffen.",
        "Beobachte, was Gegner halten und abwerfen.",
        "Halte flexible Karten, die in vielen Lagen passen.",
        "Bluffe selten, damit deine Tells unlesbar bleiben.",
        "Bereite grosse Zuege vor statt kleiner Sofortgewinne.",
        "Passe das Risiko an Punktestand und Restspiel an."
      ],
      strategy: [
        "Information ist der Vorteil bei {name}. Behalte gespielte Karten im Kopf, um abzuschaetzen, was Gegner und Stapel noch halten.",
        "Handmanagement gewinnt langfristig. Gib schwache Karten in guenstigen Zuegen aus und spare die staerksten fuer entscheidende Runden.",
        "Respektiere die Chancen. Das Jagen einer einzigen perfekten Karte verliert bei {name} meist gegen solide, hochprozentige Entscheidungen.",
        "Lies Tempo und Position. Manchmal ist Passen oder Halten am besten, damit Gegner zuerst festlegen und Infos preisgeben.",
        "Bluffen wirkt nur, wenn es selten ist. Mische bei {name} dein Spiel, damit Gegner deine Einsaetze und Abwuerfe nicht lesen.",
        "Zaehle spaet Outs und Punkte. Passe Aggression dem Stand an: draenge bei Rueckstand, vereinfache bei Fuehrung."
      ],
      metaDesc: "Wie gewinnt man {name}: Karten mitzaehlen, Hand steuern, Chancen spielen und grosse Zuege timen."
    }
  },
  "dice-games": {
    en: {
      intro: [
        "{name} is a push-your-luck game where timing decides everything. Winners bank points at the right moment and understand the real odds.",
        "In {name}, greed loses more games than bad rolls. Know when to stop, and treat each decision as an expected-value bet.",
        "Winning {name} means reading probability, managing variance, and pressing your luck only when the math is on your side."
      ],
      tips: [
        "Bank points before your odds turn bad.",
        "Know the probability of the roll you actually need.",
        "Do not chase losses with reckless rerolls.",
        "Take the safe score when you are ahead.",
        "Press your luck when you are behind and need swing.",
        "Weigh the pot against the chance of busting.",
        "Play the long game; variance evens out.",
        "Adjust risk to how close the finish line is."
      ],
      strategy: [
        "Every choice in {name} is an expected-value bet. Compare what you can lock in now against the average outcome of rolling again.",
        "Manage variance by score. When you lead in {name}, take safer points; when you trail, accept more risk to create a swing.",
        "Know your real odds. Many players over-value long-shot combinations and bust turns that a safer stop would have banked.",
        "Bank discipline wins push-your-luck games. The best players stop one roll before greedy players do.",
        "Watch the finish line. Late in {name}, your risk should be driven by how many points you still need, not by habit.",
        "Track what opponents bank. If someone is about to close out the game, you may need one big push rather than steady safe turns."
      ],
      metaDesc: "Learn how to win {name}: bank at the right time, read the odds, and manage risk in this push-your-luck guide."
    },
    tr: {
      intro: [
        "{name} bir sans zorlama oyunudur ve zamanlama her seyi belirler. Kazananlar puani dogru anda kasaya yazar ve gercek olasiligi bilir.",
        "{name} oyununda acgozluluk, kotu zarlardan daha cok oyun kaybettirir. Ne zaman duracagini bil ve her karari beklenen deger bahsi gibi gor.",
        "{name} kazanmak olasilik okumak, varyansi yonetmek ve sadece matematik lehineyken sans zorlamaktir."
      ],
      tips: [
        "Olasiligin bozulmadan puani kasaya yaz.",
        "Gercekten ihtiyacin olan zarin olasiligini bil.",
        "Kayiplari pervasiz yeniden atislarla kovalama.",
        "Ondeyken guvenli skoru al.",
        "Gerideyken ve sicramaya ihtiyacin varken sans zorla.",
        "Kazanci patlama ihtimaline karsi tart.",
        "Uzun oyunu oyna; varyans dengelenir.",
        "Riski bitis cizgisine ne kadar yakin oldugunla ayarla."
      ],
      strategy: [
        "{name} oyununda her secim beklenen deger bahsidir. Simdi kilitleyebilecegini, tekrar atmanin ortalama sonucuyla karsilastir.",
        "Varyansi skora gore yonet. {name} oyununda ondeyken guvenli puan al; gerideyken sicrama yaratmak icin daha cok risk kabul et.",
        "Gercek olasiligini bil. Cok oyuncu dusuk ihtimalli kombinasyonlari abartir ve guvenli durusun yazacagi turu patlatir.",
        "Kasa disiplini sans zorlama oyunlarini kazanir. En iyi oyuncular acgozlulerden bir atis once durur.",
        "Bitis cizgisini izle. {name} oyununda gec asamada riskin, aliskanlik degil hala kac puana ihtiyacin oldugu belirlemeli.",
        "Rakiplerin ne yazdigini takip et. Biri oyunu kapatmak uzereyse istikrarli guvenli turlar yerine tek buyuk zorlama gerekebilir."
      ],
      metaDesc: "{name} nasil kazanilir: dogru anda kasaya yaz, olasiligi oku ve bu sans zorlama rehberinde riski yonet."
    },
    de: {
      intro: [
        "{name} ist ein Gluecksreiz-Spiel, bei dem Timing alles entscheidet. Gewinner sichern Punkte im richtigen Moment und kennen die echten Chancen.",
        "Bei {name} verliert Gier mehr Spiele als schlechte Wuerfe. Wisse, wann du stoppst, und behandle jede Wahl als Erwartungswert-Wette.",
        "{name} zu gewinnen heisst Wahrscheinlichkeit lesen, Varianz steuern und Glueck nur reizen, wenn die Mathematik fuer dich ist."
      ],
      tips: [
        "Sichere Punkte, bevor deine Chancen kippen.",
        "Kenne die Wahrscheinlichkeit des Wurfs, den du brauchst.",
        "Jage Verluste nicht mit riskanten Neuwuerfen.",
        "Nimm die sichere Wertung, wenn du fuehrst.",
        "Reize dein Glueck bei Rueckstand fuer einen Swing.",
        "Waege den Einsatz gegen die Bust-Wahrscheinlichkeit ab.",
        "Spiele langfristig; Varianz gleicht sich aus.",
        "Passe das Risiko an die Naehe zum Ziel an."
      ],
      strategy: [
        "Jede Wahl bei {name} ist eine Erwartungswert-Wette. Vergleiche, was du jetzt sicherst, mit dem Durchschnitt eines weiteren Wurfs.",
        "Steuere Varianz nach Punktestand. Fuehrst du bei {name}, nimm sicherere Punkte; liegst du zurueck, akzeptiere mehr Risiko.",
        "Kenne deine echten Chancen. Viele ueberschaetzen unwahrscheinliche Kombis und verlieren Zuege, die ein Stopp gesichert haette.",
        "Bank-Disziplin gewinnt Gluecksreiz-Spiele. Die Besten stoppen einen Wurf frueher als gierige Spieler.",
        "Beachte das Ziel. Spaet bei {name} sollte dein Risiko davon abhaengen, wie viele Punkte du noch brauchst, nicht von Gewohnheit.",
        "Verfolge, was Gegner sichern. Schliesst jemand bald ab, brauchst du eher einen grossen Push als ruhige sichere Zuege."
      ],
      metaDesc: "Wie gewinnt man {name}: zur richtigen Zeit sichern, Chancen lesen und Risiko in diesem Gluecksreiz-Guide steuern."
    }
  },
  "word-games": {
    en: {
      intro: [
        "{name} rewards vocabulary plus board sense. Winners score efficiently, keep a workable rack or hand, and deny opponents easy points.",
        "In {name}, quick word-finding and smart positioning beat raw vocabulary alone. Manage your letters and control the board.",
        "Winning {name} means seeing more options fast, using premium spots, and setting up your next turn while blocking theirs."
      ],
      tips: [
        "Keep a balanced mix of letters or options.",
        "Learn the short, high-value words first.",
        "Use premium spaces and bonuses efficiently.",
        "Block opponents' easy scoring lanes.",
        "Set up your next turn, not just this one.",
        "Trade small points now for a bigger play later.",
        "Watch the clock or turn limit and stay decisive.",
        "Track what letters or clues remain in play."
      ],
      strategy: [
        "The best move in {name} scores well and leaves you a workable position. Avoid dumping everything for a few points and stranding yourself next turn.",
        "Short high-value words and combinations are the fastest study. They unlock parallel plays and let you score in multiple directions.",
        "Board control matters. If your move opens an easy lane in {name}, make sure the points you gain outweigh what you give up.",
        "Balance your rack or hand. Holding flexible, common pieces keeps more scoring options open and prevents stuck turns.",
        "Think a turn ahead. Setting up a strong follow-up in {name} often beats grabbing a small score right now.",
        "Play defense when ahead. Denying opponents their big scoring spot can be worth more than a marginal gain of your own."
      ],
      metaDesc: "Learn how to win {name}: balance your letters, use premium spots, block opponents, and set up bigger turns."
    },
    tr: {
      intro: [
        "{name} oyununda kelime bilgisi ve tahta hissi kazandirir. Kazananlar verimli puan alir, calisilabilir bir el tutar ve rakibe kolay puan vermez.",
        "{name} oyununda hizli kelime bulma ve akilli konumlanma, tek basina kelime hazinesinden iyidir. Harflerini yonet ve tahtayi kontrol et.",
        "{name} kazanmak daha cok secenegi hizli gormek, ozel alanlari kullanmak ve rakibi engellerken kendi sirani hazirlamaktir."
      ],
      tips: [
        "Dengeli bir harf veya secenek karisimi tut.",
        "Once kisa ve yuksek puanli kelimeleri ogren.",
        "Ozel kareleri ve bonuslari verimli kullan.",
        "Rakibin kolay puan koridorlarini kapat.",
        "Sadece bu turu degil sonraki turu de hazirla.",
        "Simdi kucuk puani sonra buyuk hamle icin degis.",
        "Sure veya tur sinirini izle ve kararli kal.",
        "Oyunda hangi harf veya ipuclarinin kaldigini takip et."
      ],
      strategy: [
        "{name} oyununda en iyi hamle hem iyi puan alir hem sana calisilabilir konum birakir. Birkac puan icin her seyi bosaltip sonraki turda tikanma.",
        "Kisa yuksek puanli kelimeler ve kombinasyonlar en hizli calismadir. Paralel oyunlari acar ve birden cok yonde puan aldirir.",
        "Tahta kontrolu onemlidir. {name} oyununda hamlen kolay koridor aciyorsa, aldigin puan verdiginden fazla olsun.",
        "Elini dengele. Esnek ve yaygin parcalar tutmak daha cok puan secenegi acik tutar ve tikali turlari onler.",
        "Bir tur ilerisini dusun. {name} oyununda guclu bir devam hazirlamak, simdi kucuk puan kapmaktan cogu zaman iyidir.",
        "Ondeyken savunma oyna. Rakibin buyuk puan noktasini kapatmak, kendi kucuk kazancindan degerli olabilir."
      ],
      metaDesc: "{name} nasil kazanilir: harflerini dengele, ozel alanlari kullan, rakibi engelle ve daha buyuk turlar hazirla."
    },
    de: {
      intro: [
        "{name} belohnt Wortschatz plus Brettgefuehl. Gewinner punkten effizient, halten ein spielbares Blatt und verwehren Gegnern leichte Punkte.",
        "Bei {name} schlagen schnelles Wortfinden und kluge Positionierung reinen Wortschatz. Steuere deine Buchstaben und kontrolliere das Brett.",
        "{name} zu gewinnen heisst schneller mehr Optionen zu sehen, Bonusfelder zu nutzen und den eigenen Zug vorzubereiten, waehrend du blockst."
      ],
      tips: [
        "Halte eine ausgewogene Mischung aus Buchstaben oder Optionen.",
        "Lerne zuerst kurze, hochwertige Woerter.",
        "Nutze Bonusfelder und Praemien effizient.",
        "Blocke leichte Punktelinien der Gegner.",
        "Bereite den naechsten Zug vor, nicht nur diesen.",
        "Tausche kleine Punkte jetzt gegen einen groesseren Zug spaeter.",
        "Beachte Zeit- oder Zuglimit und bleib entschlossen.",
        "Verfolge, welche Buchstaben oder Hinweise noch im Spiel sind."
      ],
      strategy: [
        "Der beste Zug bei {name} punktet gut und laesst dir eine spielbare Lage. Wirf nicht alles fuer wenige Punkte weg und blockiere dich naechste Runde.",
        "Kurze hochwertige Woerter und Kombinationen sind das schnellste Lernen. Sie oeffnen Parallelzuege und Punkte in mehreren Richtungen.",
        "Brettkontrolle zaehlt. Oeffnet dein Zug bei {name} eine leichte Linie, muessen deine Punkte mehr wert sein als das, was du hergibst.",
        "Balanciere dein Blatt. Flexible, haeufige Teile halten mehr Punkteoptionen offen und verhindern festgefahrene Zuege.",
        "Denke einen Zug voraus. Einen starken Anschluss bei {name} vorzubereiten schlaegt oft einen kleinen Sofortgewinn.",
        "Spiele defensiv in Fuehrung. Den grossen Punkteplatz des Gegners zu verwehren kann mehr wert sein als ein kleiner eigener Gewinn."
      ],
      metaDesc: "Wie gewinnt man {name}: Buchstaben balancieren, Bonusfelder nutzen, Gegner blocken und groessere Zuege vorbereiten."
    }
  },
  "party-family-games": {
    en: {
      intro: [
        "{name} rewards reading people and clear communication. Winners give clues and take risks their group will actually get.",
        "In {name}, the best players match their choices to the table, not to themselves. Aim for what most people will read the same way.",
        "Winning {name} is about smart social reads and timing your risks, keeping things simple enough for the whole group to follow."
      ],
      tips: [
        "Aim clues at the way your group thinks.",
        "Keep it simple; clever rarely beats clear.",
        "Watch reactions for hidden information.",
        "Take safe points when the read is uncertain.",
        "Time your bold plays for when they matter most.",
        "Do not overthink; the first strong instinct is often best.",
        "Adjust to each specific group you play with.",
        "Balance standing out with staying understandable."
      ],
      strategy: [
        "In {name}, the target is a shared understanding. The best clue or guess is the one most of your group reads the same way you do.",
        "Read the room. Reactions, hesitation, and quick agreement leak information you can use on your next decision.",
        "Manage risk socially. When you are unsure in {name}, a safe, clear choice usually beats a clever one only you can see.",
        "Timing matters. Save bold, high-variance plays for moments when a safe play cannot close the gap.",
        "Adapt to the group. The same move in {name} lands differently with new players than with a regular crew, so calibrate every game.",
        "Stay understandable. Standing out is only good if the table can still follow you; clarity usually scores more than cleverness."
      ],
      metaDesc: "Learn how to win {name}: read your group, keep clues clear, time your risks, and adapt to every table."
    },
    tr: {
      intro: [
        "{name} oyununda insanlari okumak ve net iletisim kazandirir. Kazananlar grubun gercekten anlayacagi ipuclari verir ve riskler alir.",
        "{name} oyununda en iyi oyuncular secimlerini kendilerine degil masaya gore ayarlar. Cogu kisinin ayni okuyacagi seyi hedefle.",
        "{name} kazanmak akilli sosyal okumalar ve riski zamanlamaktir; her seyi grubun takip edebilecegi kadar basit tut."
      ],
      tips: [
        "Ipuclarini grubunun dusunme bicimine gore ver.",
        "Basit tut; zeki olmak nadiren net olmayi geride birakir.",
        "Gizli bilgi icin tepkileri izle.",
        "Okuma belirsizken guvenli puani al.",
        "Cesur hamleleri en onemli anlara sakla.",
        "Fazla dusunme; ilk guclu sezgi genelde en iyisidir.",
        "Oynadigin her gruba uyum sagla.",
        "One cikmakla anlasilir kalmak arasinda denge kur."
      ],
      strategy: [
        "{name} oyununda hedef ortak anlayistir. En iyi ipucu veya tahmin, grubunun cogunun seninle ayni okudugudur.",
        "Masayi oku. Tepkiler, tereddut ve hizli onay, sonraki kararinda kullanabilecegin bilgi sizdirir.",
        "Riski sosyal yonet. {name} oyununda emin degilken guvenli ve net secim, sadece senin gordugun zekice secime genelde ustundur.",
        "Zamanlama onemlidir. Cesur, yuksek varyansli hamleleri guvenli hamlenin acigi kapatamayacagi anlara sakla.",
        "Gruba uyum sagla. {name} oyununda ayni hamle yeni oyuncularla farkli, sabit ekiple farkli sonuc verir; her oyun kalibre et.",
        "Anlasilir kal. One cikmak, ancak masa seni takip edebiliyorsa iyidir; netlik genelde zekilikten cok puanlar."
      ],
      metaDesc: "{name} nasil kazanilir: grubunu oku, ipuclarini net tut, riski zamanla ve her masaya uyum sagla."
    },
    de: {
      intro: [
        "{name} belohnt Menschenkenntnis und klare Kommunikation. Gewinner geben Hinweise und Risiken, die ihre Gruppe wirklich versteht.",
        "Bei {name} richten die Besten ihre Wahl nach dem Tisch, nicht nach sich selbst. Ziele auf das, was die meisten gleich lesen.",
        "{name} zu gewinnen heisst kluge soziale Reads und getimte Risiken, einfach genug, dass die ganze Gruppe folgen kann."
      ],
      tips: [
        "Richte Hinweise auf die Denkweise deiner Gruppe.",
        "Halte es einfach; klar schlaegt clever meistens.",
        "Beobachte Reaktionen fuer versteckte Infos.",
        "Nimm sichere Punkte, wenn der Read unklar ist.",
        "Time mutige Zuege fuer die wichtigsten Momente.",
        "Denke nicht zu viel; der erste starke Instinkt passt oft.",
        "Passe dich jeder konkreten Gruppe an.",
        "Balanciere Auffallen mit Verstaendlichkeit."
      ],
      strategy: [
        "Bei {name} ist das Ziel ein gemeinsames Verstaendnis. Der beste Hinweis ist der, den die meisten wie du lesen.",
        "Lies den Raum. Reaktionen, Zoegern und schnelles Zustimmen verraten Infos fuer deine naechste Entscheidung.",
        "Steuere Risiko sozial. Bist du bei {name} unsicher, schlaegt eine sichere, klare Wahl meist eine, die nur du siehst.",
        "Timing zaehlt. Spare mutige, variantenreiche Zuege fuer Momente, in denen ein sicherer die Luecke nicht schliesst.",
        "Passe dich der Gruppe an. Derselbe Zug bei {name} wirkt bei neuen Spielern anders als bei einer festen Runde.",
        "Bleib verstaendlich. Auffallen nuetzt nur, wenn der Tisch dir folgen kann; Klarheit punktet meist mehr als Cleverness."
      ],
      metaDesc: "Wie gewinnt man {name}: Gruppe lesen, Hinweise klar halten, Risiken timen und dich jedem Tisch anpassen."
    }
  },
  "cooperative-games": {
    en: {
      intro: [
        "{name} is beaten by planning together, not playing solo. Winners share information, coordinate actions, and spend the team's turns efficiently.",
        "In {name}, the group wins or loses as one. Talk through the plan, focus each role, and attack the biggest threat first.",
        "Beating {name} means tight coordination: pool what you know, sequence actions, and never waste the team's limited economy."
      ],
      tips: [
        "Share information openly every turn.",
        "Plan the whole team's turn, not just yours.",
        "Deal with the biggest threat first.",
        "Use each role's strength on purpose.",
        "Do not waste actions or cards the team needs.",
        "Hold a contingency for bad luck.",
        "Sequence actions so they combo, not overlap.",
        "Agree on a clear leader for tough calls."
      ],
      strategy: [
        "Coordination beats individual brilliance in {name}. Before acting, sync as a group so each player's turn sets up the next.",
        "Triage threats. Spend the team's limited actions on what will hurt most if ignored, not on tidy but low-impact tasks.",
        "Respect the action economy. Every wasted move in {name} is one the game uses to snowball against you.",
        "Play to roles. Let each character or player do what they are best at, and route resources to whoever can use them best.",
        "Keep a buffer. Good teams in {name} plan for the bad draw or roll instead of assuming the best case every turn.",
        "Slow down on key turns. When the game state is fragile, talk through the sequence fully before anyone commits."
      ],
      metaDesc: "Learn how to beat {name}: share information, coordinate actions, triage threats, and use the team's economy well."
    },
    tr: {
      intro: [
        "{name} tek basina degil birlikte plan yaparak yenilir. Kazananlar bilgi paylasir, aksiyonlari koordine eder ve takim turlarini verimli harcar.",
        "{name} oyununda grup tek vucut olarak kazanir ya da kaybeder. Plani konus, her rolu odakla ve once en buyuk tehdide vur.",
        "{name} yenmek siki koordinasyondur: bildiklerini birlestir, aksiyonlari sirala ve takimin kisitli ekonomisini asla bosa harcama."
      ],
      tips: [
        "Her tur bilgiyi acikca paylas.",
        "Sadece kendi turunu degil tum takimin turunu planla.",
        "Once en buyuk tehditle ilgilen.",
        "Her rolun gucunu bilincli kullan.",
        "Takimin ihtiyaci olan aksiyon veya karti bosa harcama.",
        "Kotu sansa karsi bir yedek plan tut.",
        "Aksiyonlari cakismasin, kombolar sekilde sirala.",
        "Zor kararlar icin net bir lider uzerinde anlas."
      ],
      strategy: [
        "{name} oyununda koordinasyon bireysel parlaklikten ustundur. Hareket etmeden once grupca uyum sagla ki her oyuncunun turu sonrakini hazirlasin.",
        "Tehditleri onceliklendir. Takimin kisitli aksiyonlarini gozardi edilirse en cok zarar verecek seye harca, duzenli ama etkisiz islere degil.",
        "Aksiyon ekonomisine saygi duy. {name} oyununda her bosa hamle, oyunun sana karsi buyuttugu bir hamledir.",
        "Rollere gore oyna. Her karakter veya oyuncu en iyi oldugu isi yapsin ve kaynaklari en iyi kullanacak kisiye yonlendir.",
        "Tampon birak. {name} oyununda iyi takimlar her tur en iyi durumu varsaymak yerine kotu cekilis veya zara hazirlanir.",
        "Kilit turlarda yavasla. Oyun durumu kirilganken kimse baglanmadan once sirayi bastan sona konus."
      ],
      metaDesc: "{name} nasil yenilir: bilgi paylas, aksiyonlari koordine et, tehditleri onceliklendir ve takim ekonomisini iyi kullan."
    },
    de: {
      intro: [
        "{name} besiegt man gemeinsam, nicht solo. Gewinner teilen Infos, koordinieren Aktionen und nutzen die Zuege des Teams effizient.",
        "Bei {name} gewinnt oder verliert die Gruppe als Einheit. Besprecht den Plan, fokussiert jede Rolle und schlagt zuerst die groesste Bedrohung.",
        "{name} zu schlagen heisst enge Koordination: buendelt euer Wissen, ordnet Aktionen und verschwendet nie die knappe Oekonomie des Teams."
      ],
      tips: [
        "Teile Informationen jede Runde offen.",
        "Plane den Zug des ganzen Teams, nicht nur deinen.",
        "Kuemmere dich zuerst um die groesste Bedrohung.",
        "Nutze die Staerke jeder Rolle gezielt.",
        "Verschwende keine Aktionen oder Karten, die das Team braucht.",
        "Halte einen Puffer fuer Pech bereit.",
        "Ordne Aktionen so, dass sie komboieren, nicht ueberlappen.",
        "Einigt euch bei harten Entscheidungen auf eine klare Leitung."
      ],
      strategy: [
        "Koordination schlaegt Einzelkoennen bei {name}. Stimmt euch vor dem Handeln ab, damit jeder Zug den naechsten vorbereitet.",
        "Priorisiere Bedrohungen. Gib die knappen Aktionen fuer das aus, was ignoriert am meisten schadet, nicht fuer huebsche Nebenaufgaben.",
        "Respektiere die Aktionsoekonomie. Jeder verschwendete Zug bei {name} ist einer, den das Spiel gegen euch nutzt.",
        "Spiele nach Rollen. Jeder tue, was er am besten kann, und lenkt Ressourcen zu dem, der sie am besten nutzt.",
        "Halte einen Puffer. Gute Teams planen bei {name} fuer den schlechten Zug statt jede Runde den Bestfall anzunehmen.",
        "Werdet bei Schluesselzuegen langsamer. Ist die Lage fragil, besprecht die Reihenfolge ganz, bevor jemand festlegt."
      ],
      metaDesc: "Wie schlaegt man {name}: Infos teilen, Aktionen koordinieren, Bedrohungen priorisieren und die Team-Oekonomie nutzen."
    }
  },
  "strategy-war-games": {
    en: {
      intro: [
        "{name} rewards board control, tempo, and reading intentions. Winners pick fights they win and avoid overextending.",
        "In {name}, position and timing beat raw aggression. Threaten more than you commit and strike when the odds are clear.",
        "Winning {name} means controlling key areas, managing your forces, and turning the table's conflicts to your advantage."
      ],
      tips: [
        "Fight only battles you are likely to win.",
        "Control key territory before chasing kills.",
        "Do not overextend beyond what you can defend.",
        "Use threats to shape opponents' moves.",
        "Keep a reserve for the counterattack.",
        "Turn other players' conflicts to your gain.",
        "Time your push for when rivals are weak.",
        "Track win conditions, not just the fighting."
      ],
      strategy: [
        "Position first in {name}. Controlling key areas and lines is usually worth more than trading blows for their own sake.",
        "Pick your battles. Commit force where you have a real edge, and avoid fights that cost more than they gain even in a win.",
        "Manage tempo and reserves. Overextending in {name} invites the counterattack; keep enough strength to answer a swing.",
        "Use diplomacy and threats. Making an attack look costly for an opponent can be as good as actually stopping them.",
        "Watch the win condition. Fighting is a means, not the goal; in {name} the player who tracks the actual path to victory wins.",
        "Exploit the table. Let rivals grind each other down, then commit your strength when the map has shifted in your favor."
      ],
      metaDesc: "Learn how to win {name}: control key areas, pick winning battles, manage tempo, and track the real victory path."
    },
    tr: {
      intro: [
        "{name} oyununda tahta kontrolu, tempo ve niyet okumak kazandirir. Kazananlar kazanacagi savaslari secer ve fazla yayilmaz.",
        "{name} oyununda konum ve zamanlama ham saldirganligi geride birakir. Baglandigindan cok tehdit et ve olasilik netken vur.",
        "{name} kazanmak kilit bolgeleri kontrol etmek, kuvvetlerini yonetmek ve masadaki catismalari lehine cevirmektir."
      ],
      tips: [
        "Sadece kazanma ihtimalin yuksek savaslari yap.",
        "Oldurme kovalamadan once kilit bolgeyi kontrol et.",
        "Savunabilecediginden fazla yayilma.",
        "Rakiplerin hamlelerini sekillendirmek icin tehdit kullan.",
        "Karsi saldiri icin bir yedek tut.",
        "Diger oyuncularin catismalarini kazanca cevir.",
        "Hamleni rakipler zayifken zamanla.",
        "Sadece savasi degil kazanma kosulunu takip et."
      ],
      strategy: [
        "{name} oyununda once konum. Kilit bolge ve hatlari kontrol etmek, sirf vurusmaktan genelde daha degerlidir.",
        "Savaslarini sec. Gercek ustunlugun oldugu yere kuvvet bagla ve kazansan bile getirisinden cok maliyetli savaslardan kacin.",
        "Tempoyu ve yedekleri yonet. {name} oyununda fazla yayilmak karsi saldiriyi davet eder; bir sicramaya cevap verecek gucu tut.",
        "Diplomasi ve tehdit kullan. Bir saldiriyi rakip icin maliyetli gostermek, onu gercekten durdurmak kadar iyi olabilir.",
        "Kazanma kosulunu izle. Savas bir aractir, amac degil; {name} oyununda zafere giden gercek yolu takip eden kazanir.",
        "Masayi kullan. Rakipler birbirini yipratsin, sonra harita lehine dondugunde gucunu bagla."
      ],
      metaDesc: "{name} nasil kazanilir: kilit bolgeleri kontrol et, kazanan savaslari sec, tempoyu yonet ve gercek zafer yolunu takip et."
    },
    de: {
      intro: [
        "{name} belohnt Brettkontrolle, Tempo und das Lesen von Absichten. Gewinner suchen Kaempfe, die sie gewinnen, und ueberdehnen nicht.",
        "Bei {name} schlagen Position und Timing rohe Aggression. Drohe mehr, als du bindest, und schlage zu, wenn die Chancen klar sind.",
        "{name} zu gewinnen heisst Schluesselgebiete zu kontrollieren, Truppen zu steuern und Konflikte am Tisch zu deinem Vorteil zu nutzen."
      ],
      tips: [
        "Fuehre nur Kaempfe, die du wahrscheinlich gewinnst.",
        "Kontrolliere Schluesselgebiete, bevor du Kills jagst.",
        "Ueberdehne nicht ueber das Verteidigbare hinaus.",
        "Nutze Drohungen, um gegnerische Zuege zu lenken.",
        "Halte eine Reserve fuer den Gegenangriff.",
        "Nutze Konflikte anderer Spieler zu deinem Vorteil.",
        "Time deinen Vorstoss, wenn Rivalen schwach sind.",
        "Verfolge die Siegbedingung, nicht nur das Kaempfen."
      ],
      strategy: [
        "Position zuerst bei {name}. Schluesselgebiete und Linien zu kontrollieren ist meist mehr wert als Schlagabtausch um seiner selbst willen.",
        "Waehle deine Kaempfe. Binde Kraft, wo du einen echten Vorteil hast, und meide Kaempfe, die selbst im Sieg zu teuer sind.",
        "Steuere Tempo und Reserven. Ueberdehnung bei {name} lockt den Gegenangriff; halte genug Staerke fuer einen Swing.",
        "Nutze Diplomatie und Drohungen. Einen Angriff teuer aussehen zu lassen kann so gut sein, wie ihn wirklich zu stoppen.",
        "Beachte die Siegbedingung. Kaempfen ist Mittel, nicht Ziel; bei {name} gewinnt, wer den echten Weg zum Sieg verfolgt.",
        "Nutze den Tisch. Lass Rivalen sich aufreiben und binde deine Staerke, wenn die Karte zu deinen Gunsten gekippt ist."
      ],
      metaDesc: "Wie gewinnt man {name}: Schluesselgebiete kontrollieren, Gewinnkaempfe waehlen, Tempo steuern und den Siegweg verfolgen."
    }
  }
};

const complicatedSlugs = new Set<string>([
  "go",
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

const metaTitleTemplates: Record<Lang, (name: string) => string> = {
  en: (name) => `How to Win ${name}: Strategy Guide`,
  tr: (name) => `${name} Nasil Kazanilir: Strateji Rehberi`,
  de: (name) => `${name} gewinnen: Strategie-Guide`
};

const generatorLangs: Lang[] = ["en", "tr", "de"];

function hashSlug(slug: string): number {
  let hash = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    hash ^= slug.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function rotatePick<T>(bank: T[], count: number, offset: number): T[] {
  const out: T[] = [];
  const len = bank.length;
  for (let i = 0; i < Math.min(count, len); i++) {
    out.push(bank[(offset + i) % len]);
  }
  return out;
}

function fillTemplate(template: string, name: string): string {
  return template.split("{name}").join(name);
}

const categoryListings: Record<string, string[]> = {};
for (const category of categories) {
  const slugs: string[] = [];
  for (const game of category.games) {
    if (!slugs.includes(game.slug)) slugs.push(game.slug);
  }
  categoryListings[category.id] = slugs;
}

function buildGuide(listing: GameListing, categoryId: string): GameGuide {
  const { name, slug } = listing;
  const banks = guideBanks[categoryId];
  const offset = hashSlug(slug);
  const bggUrl = `https://boardgamegeek.com/geeksearch.php?action=search&objecttype=boardgame&q=${encodeURIComponent(name)}`;

  const others = (categoryListings[categoryId] ?? []).filter((s) => s !== slug);
  const related = others.length > 0 ? rotatePick(others, 3, offset % others.length) : [];

  const metaTitle = {} as Record<Lang, string>;
  const metaDescription = {} as Record<Lang, string>;
  const intro = {} as Record<Lang, string>;
  const quickTips = {} as Record<Lang, string[]>;
  const strategy = {} as Record<Lang, string[]>;
  const resources = {} as Record<Lang, { label: string; url: string }[]>;

  const resourceLabels: Record<Lang, { bgg: string; reddit: string }> = {
    en: { bgg: `${name} on BoardGameGeek`, reddit: "Strategy talk on r/boardgames" },
    tr: { bgg: `${name} BoardGameGeek'te`, reddit: "r/boardgames'de strateji" },
    de: { bgg: `${name} auf BoardGameGeek`, reddit: "Strategie auf r/boardgames" }
  };

  for (const lang of generatorLangs) {
    const bank = banks[lang];
    metaTitle[lang] = metaTitleTemplates[lang](name);
    metaDescription[lang] = fillTemplate(bank.metaDesc, name);
    intro[lang] = fillTemplate(bank.intro[offset % bank.intro.length], name);
    quickTips[lang] = rotatePick(bank.tips, 4, offset % bank.tips.length).map((tip) => fillTemplate(tip, name));
    strategy[lang] = rotatePick(bank.strategy, 4, offset % bank.strategy.length).map((line) => fillTemplate(line, name));
    resources[lang] = [
      { label: resourceLabels[lang].bgg, url: bggUrl },
      { label: resourceLabels[lang].reddit, url: "https://www.reddit.com/r/boardgames/" }
    ];
  }

  return {
    slug,
    title: name,
    difficulty: complicatedSlugs.has(slug) ? "complicated" : "simple",
    categoryId,
    updated: "2026-07-03",
    metaTitle,
    metaDescription,
    intro,
    quickTips,
    strategy,
    resources,
    relatedSlugs: related
  };
}

const curatedSlugs = new Set(curatedGuides.map((guide) => guide.slug));
const generatedSlugs = new Set<string>(curatedSlugs);
const generatedGuides: GameGuide[] = [];
for (const category of categories) {
  for (const game of category.games) {
    if (generatedSlugs.has(game.slug)) continue;
    generatedSlugs.add(game.slug);
    generatedGuides.push(buildGuide(game, category.id));
  }
}

export const guides: GameGuide[] = [...curatedGuides, ...generatedGuides];

export const guideBySlug = Object.fromEntries(guides.map((guide) => [guide.slug, guide])) as Record<string, GameGuide>;

export const allListings = categories.flatMap((category) => category.games);

export const listingBySlug = allListings.reduce<Record<string, GameListing>>((acc, game) => {
  acc[game.slug] = game;
  return acc;
}, {});

export const featuredListings = allListings.filter((game, index, all) => {
  return game.featured && all.findIndex((candidate) => candidate.slug === game.slug) === index;
});

export function localizePath(lang: Lang, slug?: string) {
  const cleanSlug = slug ? `/${slug}` : "";
  return lang === "en" ? cleanSlug || "/" : `/${lang}${cleanSlug}`;
}
