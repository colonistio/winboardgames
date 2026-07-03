# Win Board Games

Win Board Games is a lightweight, multilingual GitHub Pages site for practical board game strategy guides.

Primary domain: `https://winboardgames.com`

Default language: English  
Additional languages: Turkish (`/tr/...`) and German (`/de/...`)

## Site Goals

- Help players quickly learn how to win classic, family, card, dice, word, Euro, cooperative, strategy, and war board games.
- Keep every page mobile-first, fast, crawlable, and easy to read.
- Use short paragraphs and clear tactical advice.
- Support hundreds of game pages over time.
- Include a footer sponsor block linking to `https://colonist.io` as the recommended online Catan alternative.

## Current First Pages

- Monopoly: `/monopoly`, `/tr/monopoly`, `/de/monopoly`
- Chess: `/chess`, `/tr/chess`, `/de/chess`
- Catan: `/catan`, `/tr/catan`, `/de/catan`
- Scrabble: `/scrabble`, `/tr/scrabble`, `/de/scrabble`
- Carcassonne: `/carcassonne`, `/tr/carcassonne`, `/de/carcassonne`

## Proposed Board Game Catalog

The homepage uses 8 categories. The catalog below is the starting backlog for future guide pages.

### Classic Board Games

Monopoly, Chess, Checkers, Backgammon, Go, Mahjong, Scrabble, Risk, Clue, Battleship, Stratego, Othello, Mancala, Dominoes, Ludo, Parcheesi, Sorry, Trouble, Connect Four, Chinese Checkers, Mastermind, Rummikub, Guess Who, Sequence, Blokus, Labyrinth, The Game of Life, Trivial Pursuit, Pictionary, Operation.

### Euro Board Games

Catan, Carcassonne, Ticket to Ride, Agricola, Puerto Rico, Power Grid, Terraforming Mars, Wingspan, Castles of Burgundy, Concordia, 7 Wonders, Splendor, Azul, Viticulture, Great Western Trail, Brass Birmingham, Ark Nova, Everdell, Scythe, Dominion, Race for the Galaxy, Res Arcana, A Feast for Odin, Terra Mystica, Gaia Project, Through the Ages, Barrage, Lisboa, Anachrony, Food Chain Magnate, Mage Knight, Patchwork, Cascadia, Calico, Isle of Skye, Sagrada, Kingdomino, Planet Unknown, It's a Wonderful World.

### Card Games

Solitaire, Spider Solitaire, FreeCell, Hearts, Spades, Bridge, Poker, Blackjack, Rummy, Gin Rummy, Canasta, Cribbage, Euchre, Uno, Phase 10, Magic: The Gathering, Yu-Gi-Oh, Pokemon TCG, Exploding Kittens, Love Letter, Sushi Go, The Mind, Hanabi, Star Realms, Hero Realms, Clank, Skip-Bo, Dutch Blitz, Coup, The Crew.

### Dice Games

Yahtzee, Farkle, Bunco, Liar's Dice, Shut the Box, Qwixx, Qwinto, Can't Stop, King of Tokyo, Zombie Dice, Roll for the Galaxy, Dice Throne, Las Vegas, That's Pretty Clever, Tenzi, Perudo, Strike, Bang The Dice Game, Railroad Ink, Welcome To.

### Word Games

Scrabble, Boggle, Wordle, Hangman, Codenames, Just One, Taboo, Decrypto, Bananagrams, Scattergories, Letter Jam, Word on the Street, Paperback, Hardback, So Clover, Werewords, Letter Tycoon, Dabble, Quiddler, A Little Wordy.

### Party & Family Games

Dixit, Codenames, Wavelength, Telestrations, The Resistance, Avalon, Werewolf, Secret Hitler, One Night Ultimate Werewolf, Cards Against Humanity, Time's Up, Mysterium, Spyfall, Ticket to Ride, Sushi Go, Camel Up, Kingdomino, Takenoko, Qwirkle, Catan Junior, Ticket to Ride First Journey, Hues and Cues, Concept, Doodle Dash, Skull, No Thanks, For Sale, Point Salad.

### Cooperative Games

Pandemic, Forbidden Island, Forbidden Desert, Spirit Island, Gloomhaven, Frosthaven, The Crew, Hanabi, Arkham Horror, Mansions of Madness, Flash Point, Horrified, Robinson Crusoe, Aeon's End, Marvel Champions, Lord of the Rings LCG, Zombicide, Mechs vs Minions, Ghost Stories, Castle Panic.

### Strategy & War Games

Risk, Axis & Allies, Twilight Struggle, Diplomacy, Memoir '44, War of the Ring, Root, Dune Imperium, Small World, Kemet, Blood Rage, Inis, Twilight Imperium, Star Wars Rebellion, Hive, Quoridor, Santorini, Onitama, Tak, Yinsh, Tzaar, Undaunted Normandy, Commands & Colors, Sekigahara, Pax Pamir, COIN Series.

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## SEO Notes

- Pages include canonical URLs, language alternates, Open Graph metadata, and Article/WebSite structured data.
- Routes are static and GitHub Pages friendly.
- `public/robots.txt` links to `/sitemap.xml`.
- English is root-level (`/monopoly`), Turkish uses `/tr/monopoly`, and German uses `/de/monopoly`.
