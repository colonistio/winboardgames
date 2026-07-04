import type { Lang } from "./site";
import { gameImages } from "./gameImages";
import type { GameCategory, GameGuide, GameListing } from "./gameTypes";
import { expertBySlug } from "./expert/guides";
import { buildAllExpertGuides } from "./expert/build";

export type { GameCategory, GameGuide, GameListing } from "./gameTypes";

function withImage(game: GameListing): GameListing {
  return {
    ...game,
    image: game.image ?? gameImages[game.slug]
  };
}

const classics: GameListing[] = [
  {
    name: "Monopoly",
    slug: "monopoly",
    featured: true,
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
    games: classics.map(withImage)
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
    games: euros.map(withImage)
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
    games: cards.map(withImage)
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
    games: dice.map(withImage)
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
    games: words.map(withImage)
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
    games: partyFamily.map(withImage)
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
    games: cooperative.map(withImage)
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
    games: strategyWar.map(withImage)
  }
];

const categoryListings: Record<string, string[]> = {};
for (const category of categories) {
  const slugs: string[] = [];
  for (const game of category.games) {
    if (!slugs.includes(game.slug)) slugs.push(game.slug);
  }
  categoryListings[category.id] = slugs;
}

const guideListings: GameListing[] = [];
const seenGuideSlugs = new Set<string>();
for (const category of categories) {
  for (const game of category.games) {
    if (seenGuideSlugs.has(game.slug)) continue;
    seenGuideSlugs.add(game.slug);
    guideListings.push(game);
  }
}

export const guides: GameGuide[] = buildAllExpertGuides(expertBySlug, guideListings, categoryListings);

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

export function cardSubtitleFor(game: GameListing, lang: Lang): string | null {
  if (game.tagline?.[lang]) return game.tagline[lang];
  const guide = guideBySlug[game.slug];
  const tip = guide?.quickTips[lang]?.[0];
  return tip ?? null;
}
