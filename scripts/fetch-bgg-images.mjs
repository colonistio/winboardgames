// Fetch official board game cover art from BoardGameGeek and self-host it.
//
// Why this exists: BGG's search API is blocked from most environments, but the
// public geekitems JSON endpoint works when you already know a game's numeric
// BGG id. So we keep a curated slug -> BGG id map below, fetch each cover, and
// VALIDATE that the returned game name matches before saving. A wrong/unknown
// id is skipped and the game keeps the placeholder image (never a wrong cover).
//
// Usage:
//   node scripts/fetch-bgg-images.mjs
//
// It downloads images into public/games/bgg-<slug>.<ext> and regenerates
// src/data/gameImages.ts (the manifest consumed by src/data/games.ts).
//
// To add a new game's cover: find its BGG id (the number in a
// boardgamegeek.com/boardgame/<id>/... URL), add "<slug>": <id> below, and
// re-run this script.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const gamesDir = path.join(root, "public", "games");
const dataFile = path.join(root, "src", "data", "games.ts");
const manifestFile = path.join(root, "src", "data", "gameImages.ts");

// slug -> BoardGameGeek object id
const bggIds = {
  // Classic board games
  monopoly: 1406, chess: 171, checkers: 2083, backgammon: 2397, go: 188,
  mahjong: 2093, scrabble: 320, risk: 181, clue: 1294, battleship: 2425,
  stratego: 1917, othello: 2389, mancala: 9488, dominoes: 2394, ludo: 2136,
  parcheesi: 2136, sorry: 2407, trouble: 1410, "connect-four": 2719,
  "chinese-checkers": 2386, mastermind: 2392, rummikub: 811, "guess-who": 4143,
  sequence: 2375, blokus: 2453, labyrinth: 1219, "the-game-of-life": 2921,
  "trivial-pursuit": 2952, pictionary: 2281, operation: 3737,

  // Euro board games
  catan: 13, carcassonne: 822, "ticket-to-ride": 9209, agricola: 31260,
  "puerto-rico": 3076, "power-grid": 2651, "terraforming-mars": 167791,
  wingspan: 266192, "castles-of-burgundy": 84876, concordia: 124361,
  "7-wonders": 68448, splendor: 148228, azul: 230802, viticulture: 183394,
  "great-western-trail": 341169, "brass-birmingham": 224517, "ark-nova": 342942,
  everdell: 199792, scythe: 169786, dominion: 36218, "race-for-the-galaxy": 28143,
  "res-arcana": 262712, "a-feast-for-odin": 177736, "terra-mystica": 120677,
  "gaia-project": 220308, "through-the-ages": 182028, barrage: 251247,
  lisboa: 161533, anachrony: 185343, "food-chain-magnate": 175914,
  "mage-knight": 96848, patchwork: 163412, cascadia: 295947, calico: 283155,
  "isle-of-skye": 176494, sagrada: 199561, kingdomino: 204583,
  "planet-unknown": 258779, "its-a-wonderful-world": 271324,

  // Card games (solo/traditional — no BGG id = placeholder)
  hearts: 6887, bridge: 2181, poker: 1115, blackjack: 10816, rummy: 15878,
  "gin-rummy": 25574, canasta: 17104, cribbage: 2398, euchre: 6901, uno: 2223,
  "phase-10": 1258, "magic-the-gathering": 463, "yu-gi-oh": 4154,
  "pokemon-tcg": 2165, solitaire: 10400, freecell: 63788, spades: 592, hangman: 5314, "exploding-kittens": 172225, "love-letter": 129622,
  "sushi-go": 133473, "the-mind": 244992, hanabi: 98778, "star-realms": 147020,
  "hero-realms": 198994, clank: 201808, "skip-bo": 1269, "dutch-blitz": 148203,
  coup: 131357, "the-crew": 284083,

  // Dice games
  yahtzee: 2243, farkle: 3181, bunco: 13586, "liars-dice": 45,
  "shut-the-box": 9851, qwixx: 131260, qwinto: 183006, "cant-stop": 41,
  "king-of-tokyo": 70323, "zombie-dice": 62871, "roll-for-the-galaxy": 132531,
  "dice-throne": 216734, "las-vegas": 117959, "thats-pretty-clever": 244522,
  tenzi: 113819, perudo: 45, strike: 123570, "bang-the-dice-game": 143741,
  "railroad-ink": 245654, "welcome-to": 233867,

  // Word games
  boggle: 1293, wordle: 367033, codenames: 178900,
  "just-one": 254640, taboo: 1111, decrypto: 225694, bananagrams: 27225,
  scattergories: 2381, "letter-jam": 275467, "word-on-the-street": 40990,
  paperback: 141572, hardback: 223750, "so-clover": 329839, werewords: 219215,
  "letter-tycoon": 169147, dabble: 105602, quiddler: 339, "a-little-wordy": 335869,

  // Party & family games
  dixit: 39856, wavelength: 262543, telestrations: 46213, "the-resistance": 41114,
  avalon: 128882, werewolf: 25821, "secret-hitler": 188834,
  "one-night-ultimate-werewolf": 147949, "cards-against-humanity": 50381,
  "times-up": 1353, mysterium: 181304, spyfall: 166384, "camel-up": 153938,
  takenoko: 70919, qwirkle: 25669, "catan-junior": 125921,
  "ticket-to-ride-first-journey": 205125, "hues-and-cues": 302520, concept: 147151,
  "doodle-dash": 334379, skull: 92415, "no-thanks": 12942, "for-sale": 172,
  "point-salad": 274960,

  // Cooperative games
  pandemic: 30549, "forbidden-island": 65244, "forbidden-desert": 136063,
  "spirit-island": 162886, gloomhaven: 174430, frosthaven: 295770,
  "arkham-horror": 205637, "mansions-of-madness": 205059, "flash-point": 100901,
  horrified: 282524, "robinson-crusoe": 121921, "aeons-end": 191189,
  "marvel-champions": 285774, "lord-of-the-rings-lcg": 77423, zombicide: 113924,
  "mechs-vs-minions": 209010, "ghost-stories": 37046, "castle-panic": 43443,

  // Strategy & war games
  "axis-and-allies": 98, "twilight-struggle": 12333, diplomacy: 483,
  "memoir-44": 10630, "war-of-the-ring": 115746, root: 237182,
  "dune-imperium": 316554, "small-world": 40692, kemet: 127023,
  "blood-rage": 170216, inis: 155821, "twilight-imperium": 233078,
  "star-wars-rebellion": 187645, hive: 2655, quoridor: 624, santorini: 194655,
  onitama: 160477, tak: 197405, yinsh: 7854, tzaar: 31999,
  "undaunted-normandy": 268864, "commands-and-colors": 14105, sekigahara: 25021,
  "pax-pamir": 256960, "coin-series": 144189
};

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36";

function parseSlugNames() {
  const src = fs.readFileSync(dataFile, "utf8");
  const map = {};
  const re = /name:\s*"([^"]+)",\s*slug:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(src))) {
    if (!map[m[2]]) map[m[2]] = m[1];
  }
  return map;
}

function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const stopWords = new Set(["the", "a", "an", "of", "and", "for", "to", "in", "on", "at", "game", "card", "edition", "board"]);

function significantTokens(str) {
  return normalize(str)
    .split(" ")
    .filter((t) => t.length > 2 && !stopWords.has(t));
}

// Extra substrings that count as a match for tricky slug/name pairs.
const slugAliases = {
  ludo: ["pachisi"],
  parcheesi: ["pachisi"],
  "liars-dice": ["perudo", "liar"],
  perudo: ["perudo", "liar"],
  werewolf: ["werewolf", "werewolves"],
  mancala: ["mancala"],
  "trivial-pursuit": ["trivial", "pursuit"],
  "ticket-to-ride-first-journey": ["ticket", "ride", "journey"],
  "catan-junior": ["catan", "junior"],
  "yu-gi-oh": ["yu", "gi", "oh"],
  "pokemon-tcg": ["pokemon"],
  wordle: ["wordle"],
  "coin-series": ["fire", "lake"],
  "lord-of-the-rings-lcg": ["lord", "rings"],
  "dice-throne": ["dice", "throne"],
  "thats-pretty-clever": ["clever", "ganz"],
  "magic-the-gathering": ["magic", "gathering"],
  solitaire: ["patience", "klondike"],
  freecell: ["freecell"],
  spades: ["spades"],
  hangman: ["hangman"]
};

function namesMatch(expected, actual, slug) {
  const a = normalize(expected);
  const b = normalize(actual);
  if (!a || !b) return false;
  if (a === b || a.includes(b) || b.includes(a)) return true;

  const aliases = slugAliases[slug] ?? [];
  if (aliases.some((token) => b.includes(token))) return true;

  const expTokens = significantTokens(expected);
  if (!expTokens.length) return false;
  return expTokens.every(
    (t) => b.includes(t) || significantTokens(actual).some((at) => at.includes(t) || t.includes(at))
  );
}

function existingImage(slug) {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    const file = path.join(gamesDir, `bgg-${slug}.${ext}`);
    if (fs.existsSync(file)) return `/games/bgg-${slug}.${ext}`;
  }
  return null;
}

function extFromUrl(url) {
  const clean = url.split("?")[0];
  const match = clean.match(/\.(jpe?g|png|webp)$/i);
  return match ? match[1].toLowerCase().replace("jpeg", "jpg") : "jpg";
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/json" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 1000) throw new Error(`file too small (${buf.length} bytes)`);
  fs.writeFileSync(dest, buf);
  return buf.length;
}

async function main() {
  const slugNames = parseSlugNames();
  const manifest = {};
  const results = { kept: [], downloaded: [], skippedNoId: [], failed: [] };

  for (const [slug, expectedName] of Object.entries(slugNames)) {
    const existing = existingImage(slug);
    if (existing) {
      manifest[slug] = existing;
      results.kept.push(slug);
      continue;
    }

    const id = bggIds[slug];
    if (!id) {
      results.skippedNoId.push(slug);
      continue;
    }

    try {
      const data = await fetchJson(`https://api.geekdo.com/api/geekitems?objectid=${id}&objecttype=thing`);
      const item = data.item || {};
      const actualName = item.name || "";
      const imageUrl = item.imageurl || (item.images && item.images.original);

      if (!imageUrl) throw new Error("no imageurl");
      if (!namesMatch(expectedName, actualName, slug)) {
        throw new Error(`name mismatch: expected "${expectedName}" got "${actualName}"`);
      }

      const ext = extFromUrl(imageUrl);
      const rel = `/games/bgg-${slug}.${ext}`;
      const size = await download(imageUrl, path.join(gamesDir, `bgg-${slug}.${ext}`));
      manifest[slug] = rel;
      results.downloaded.push(`${slug} (${actualName}, ${Math.round(size / 1024)}KB)`);
    } catch (err) {
      results.failed.push(`${slug}: ${err.message}`);
    }

    await new Promise((r) => setTimeout(r, 350));
  }

  const manualImages = {
    "spider-solitaire": "https://upload.wikimedia.org/wikipedia/commons/1/13/Spider_%28solitaire%29.jpg"
  };

  for (const [slug, url] of Object.entries(manualImages)) {
    if (manifest[slug]) continue;
    try {
      const rel = `/games/bgg-${slug}.jpg`;
      const size = await download(url, path.join(gamesDir, `bgg-${slug}.jpg`));
      manifest[slug] = rel;
      results.downloaded.push(`${slug} (manual, ${Math.round(size / 1024)}KB)`);
    } catch (err) {
      results.failed.push(`${slug}: ${err.message}`);
    }
  }

  const sortedSlugs = Object.keys(manifest).sort();
  const lines = sortedSlugs.map((slug) => `  "${slug}": "${manifest[slug]}"`);
  const out =
    "// AUTO-GENERATED by scripts/fetch-bgg-images.mjs. Do not edit by hand.\n" +
    "// Run `node scripts/fetch-bgg-images.mjs` to refresh after adding BGG ids.\n" +
    "export const gameImages: Record<string, string> = {\n" +
    lines.join(",\n") +
    "\n};\n";
  fs.writeFileSync(manifestFile, out);

  console.log(`\nKept existing:   ${results.kept.length}`);
  console.log(`Downloaded new:  ${results.downloaded.length}`);
  console.log(`No BGG id:       ${results.skippedNoId.length}`);
  console.log(`Failed/mismatch: ${results.failed.length}`);
  console.log(`\nManifest games:  ${sortedSlugs.length}\n`);
  if (results.downloaded.length) console.log("Downloaded:\n  " + results.downloaded.join("\n  ") + "\n");
  if (results.skippedNoId.length) console.log("No id (placeholder):\n  " + results.skippedNoId.join(", ") + "\n");
  if (results.failed.length) console.log("Failed (placeholder):\n  " + results.failed.join("\n  ") + "\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
