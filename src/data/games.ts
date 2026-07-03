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
    image: "/games/monopoly.svg",
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
    image: "/games/chess.svg",
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
    image: "/games/scrabble.svg",
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
    image: "/games/catan.svg",
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
    image: "/games/carcassonne.svg",
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

export const guides: GameGuide[] = [
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
        { label: "Catan Studio rules and variants", url: "https://www.catan.com" }
      ],
      tr: [
        { label: "Colonist.io'da Catan tarzi pratik yap", url: "https://colonist.io" },
        { label: "Catan Studio kurallar ve varyantlar", url: "https://www.catan.com" }
      ],
      de: [
        { label: "Catan-aehnlich auf Colonist.io ueben", url: "https://colonist.io" },
        { label: "Catan Studio Regeln und Varianten", url: "https://www.catan.com" }
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
