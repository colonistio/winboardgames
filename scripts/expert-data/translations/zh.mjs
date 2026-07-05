export const zhTranslations = {
  "monopoly": {
    "metaDescription": "Monopoly expert guide: jail equity, 3-house rule, orange/red landing math, and auction psychology.",
    "intro": "Monopoly is won on expected-value property buys and cash timing, not lucky dice. Masters treat every roll as a probability event and every trade as a net-present-value calculation.",
    "quickTips": [
      "Buy every property you land on in the first two laps unless it breaks your 3-house bank.",
      "Orange (St James, Vine, Marlborough) and red (Trafalgar, Leicester, Coventry) groups have the highest jail-exit landing frequency.",
      "Build three houses per color before a fourth; rent jumps are steepest at the 3-house tier.",
      "Stay in jail late game when opponents own developed sets; pay to leave early when boards are undeveloped."
    ],
    "strategy": [
      "Jail math: after ~25% of properties are owned, paying $50 to leave jail is usually -EV; rolling saves expected rent payments. Before development, leave jail immediately to buy cheap lots.",
      "The 3-house rule: never place a hotel until every other owned set has three houses. Hotels return houses to the bank and enable opponents to build.",
      "Orange/red frequency: a token leaving jail hits orange ~13% and red ~14% on the next roll (7-space average). Prioritize completing these groups over greens or dark blues.",
      "Auction psychology: bid up opponents when you hold a blocking card in that color; stop bidding once price exceeds 70% of expected rent yield over 15 turns.",
      "Trade for monopolies, not cash: a single orange deed is worth more than $200 when it blocks a completed set. Always demand a premium for the last card in a color.",
      "Mortgage strategically: unmortgage the deed that completes a buildable set before paying unrelated debts."
    ]
  },
  "chess": {
    "metaDescription": "Chess expert guide: opening principles, calculation trees, pawn structure, and endgame technique.",
    "intro": "Chess mastery combines opening theory, brute-force calculation, structural understanding, and tablebase-precise endings. The gap between strong and elite is measured in candidate-move discipline.",
    "quickTips": [
      "Develop knights before bishops, castle early, and never move the same piece twice in the opening without concrete gain.",
      "Calculate forcing lines first: checks, captures, threats — then evaluate quiet moves.",
      "Identify fixed pawn chains and fight for the open file they create.",
      "In rook endings, activate your king before pushing passed pawns."
    ],
    "strategy": [
      "Opening principles: fight for the center (e4/d4), complete development by move 10, connect rooks, and contest open files. In the Italian Game (1.e4 e5 2.Nf3 Nc6 3.Bc4), prioritize d4 breaks; in the Queen's Gambit Declined, aim for minority attack on the queenside.",
      "Calculation: use the candidate-move method — list 2-4 plausible replies at each node, prune with checks/captures/threats, and verify your final line backwards for tactical holes.",
      "Pawn structure: recognize IQP (isolated queen pawn) positions — dynamic compensation but weak d-pawn endgames. In Carlsbad structures (c4 e6 d4 d5), plan cxd5 then minority attack with b4-b5.",
      "Endgame technique: king-and-pawn endings require opposition and triangulation; Lucena and Philidor rook endings are must-know. Tablebase-perfect K+Q vs K+R is a win in under 35 moves — learn the Cochrane shuffle.",
      "Prophylaxis: ask what your opponent wants to play before choosing your move; prevent ...Nd4 in Sicilian structures, prevent ...f5 breaks in closed positions.",
      "Time management: spend 40% of clock in the first 15 moves when theory ends; reserve 30 seconds per move in time trouble but never blitz recaptures."
    ]
  },
  "checkers": {
    "metaDescription": "Checkers expert guide: opening systems, shot patterns, bridge positions, and king endgame technique.",
    "intro": "Competitive checkers (8x8 English draughts) is solved in openings and sharp in tactics. Experts win by controlling the long diagonal and forcing two-for-one exchanges.",
    "quickTips": [
      "Play 11-15 (old 14-18) or 9-14 as Black; as White respond with the Cross or Single Corner systems.",
      "Keep pieces on the long diagonal (a1-h8 for White) until you can crown safely.",
      "Look for dyke and ripple shots — two-for-one captures that win material.",
      "In king endings, use the opposition on the main diagonal to restrict enemy kings."
    ],
    "strategy": [
      "Opening theory: the Old 14 (11-15 22-18 15x22) leads to balanced middlegames; avoid premature 6-9 pushes that weaken the double corner.",
      "Shot patterns: study the Payne shot, Duffer shot, and Laird's double — these recur from standard formations.",
      "Bridge positions: when ahead a man, trade into simplified king endings rather than complex piece play.",
      "Endgame: two kings vs one is a win if you control the main diagonal; three kings vs two requires precise maneuvering on the edges.",
      "Tempo: every move should either develop, attack, or restrict — passive retreat on the wings invites breakthrough shots."
    ]
  },
  "backgammon": {
    "metaDescription": "Backgammon expert guide: 24/23 split opening, bearoff distribution, duplication, cube decisions, priming vs blitz.",
    "intro": "Backgammon is a race with contact. Elite play balances racing equity, priming structures, and cube decisions at the 25% take/pass threshold.",
    "quickTips": [
      "Open with 24/23 split and 13/11 slot when possible — the modern standard for balanced offense and defense.",
      "Bear in with the 1-empty, 2-full, 1-empty, 2-full home board pattern for maximum bearoff efficiency.",
      "Use duplication: leave shots where your opponent needs the same number to hit and enter.",
      "Double when you have 75%+ winning chances; take at 25% equity, pass below."
    ],
    "strategy": [
      "Opening: the 24/23 split plus 13/11 slot (or 24/23 13/9) fights for the 5-point and keeps outfield anchors. Avoid stacking both split checkers on the same point.",
      "Bear-in/bearoff distribution: on the home board arrange checkers as 1 empty, 2 full, 1 empty, 2 full (alternating empty points and 2-checker points). This minimizes wastage and shot vulnerability during bearoff.",
      "Duplication: when leaving a blot, choose points where opponent needs the same roll to hit and cover — e.g. leaving a shot requiring 6s when they need 6s to escape your prime.",
      "Cube math: take any double you can win 25%+ of the time at the given match score (take point). At gammon danger, adjust take/pass — pass earlier when losing gammon equity exceeds 15%.",
      "Priming vs blitz: build a 6-prime when ahead in the race; blitz (attack inner board) when behind but with more home-board builders. Switch from blitz to prime once you make the 5-point.",
      "Racing formulas: use Keith count or pip count comparison — if your adjusted pip count is 5+ lower after contact clears, drop the cube."
    ]
  },
  "go": {
    "metaDescription": "Go expert guide: tenuki, shape, influence vs territory, and life-and-death reading.",
    "intro": "Go rewards whole-board judgment over local fighting. Strong players balance territory, influence, shape efficiency, and precise life-and-death reading.",
    "quickTips": [
      "Play tenuki when local moves lose sente or when a bigger point exists elsewhere on the board.",
      "Good shape: bamboo joint, table shape, and one-space jumps are efficient; empty triangles waste liberties.",
      "Influence points (4-4, 3-4, 5-4) build framework; corner enclosures secure territory.",
      "Read two moves ahead minimum in life-and-death — check snapback and shortage of liberties."
    ],
    "strategy": [
      "Tenuki: leave a local sequence when the follow-up is gote or when a shoulder hit, approach, or invasion elsewhere is bigger. The 10-point rule: if two areas differ by 10+ points in value, tenuki.",
      "Shape: prefer kosumi (diagonal), keima (knight's move), and ogeima (large knight's) over clumsy jumps. Recognize heavy stones — overconcentrated groups that lack eye space.",
      "Influence vs territory: early game build moyo (framework); convert to territory with invasions at the 3-3 or shoulder hits. Don't fill your own territory — play on the boundary.",
      "Life and death: learn L-group, J-group, and carpenter's square kills. Two eyes in the corner need specific key points; on the side, bent-four in the corner is dead under Japanese rules.",
      "Fighting: don't atari automatically — check if it strengthens the opponent. Use thickness to attack, not to make territory directly.",
      "Endgame: count territory and komi; 1-point gote endgame moves add up — reverse sente is worth 2 points."
    ]
  },
  "mahjong": {
    "metaDescription": "Mahjong expert guide: riichi defense, tile efficiency, dora counting, and push/fold thresholds.",
    "intro": "Riichi mahjong is a probability and efficiency game. Experts maximize uke-ire (acceptance), count han/fu precisely, and fold when opponent riichi exceeds your expected value.",
    "quickTips": [
      "Keep 5-block shape: five groups plus one pair maximizes flexibility toward any winning hand.",
      "Discard safe tiles late: genbutsu (tiles you discarded) and suji (3/6/9 offsuit) against riichi.",
      "Count dora indicators and uradora before pushing marginal tenpai.",
      "Riichi when your hand is closed, tenpai, and expected han justifies the 1000-point cost."
    ],
    "strategy": [
      "Tile efficiency: use shanten reduction — each discard should minimize shanten while maximizing uke-ire. Prefer 3467 waits over 4578 when both reach tenpai.",
      "Riichi timing: riichi at tenpai with 3+ han expected or when dora are visible. Damaten (hidden tenpai) when you need flexibility or fear exhaustive draw.",
      "Defense: against riichi, fold if your expected points < 25% of opponent's expected win. Chase only with 2+ han guaranteed or mangan potential.",
      "Yaku planning: build toward riichi + pinfu + tanyao; avoid pointless yakuless tenpai. Sanshoku and ittsu are high-value speed yaku.",
      "Furiten awareness: never discard a tile you could win on; track all opponents' discards for furiten traps.",
      "Endgame: at exhaustive draw, tenpai pays 3000/1000 — sometimes tanyao speed beats slow han-heavy builds."
    ]
  },
  "scrabble": {
    "metaDescription": "Expert Scrabble strategy: leave entropy on the rack, fish bingos with S/Z retention, block premium lanes, and trade for stem-friendly leaves.",
    "intro": "Top Scrabble players win on rack management and board geometry, not vocabulary alone. The margin is in what you leave behind after every play—balanced leaves that preserve bingo lanes while denying opponents triple-word access.",
    "quickTips": [
      "Keep stems like RETAINS and SATINE intact; one blank plus a stem is a bingo pipeline.",
      "Play parallel to existing words to open fewer premium hooks than perpendicular plays.",
      "Trade aggressively when your rack has 5+ vowels or 5+ consonants with no S or blank.",
      "Defensive scoring: a 12-point safe play beats a 28-point opening that gifts a triple."
    ],
    "strategy": [
      "Rack entropy: after each play, count vowel-consonant ratio and duplicate tiles. Expert leaves aim for 3-3 or 4-3 splits with at least one flexible hook letter (S, E, R, N).",
      "Opening theory favors central control with balanced leaves over max immediate score. A 20-point opener that leaves RETAINS is superior to a 35-point opener with four Is.",
      "Endgame fishing: when behind, play short words that keep a premium tile (blank, S, high face) while forcing opponent to break a scoring lane. When ahead, pass or exchange to burn clock and shrink board.",
      "Premium blocking: track which triple-word lines remain open. Sacrifice 8-15 points to place a vowel on a hot corner if it closes two bingo lanes at once.",
      "Tracking unseen tiles: mentally bucket Q, Z, X, J, blanks. If two blanks are gone and you hold one, opponent bingo probability drops—play tighter defense on open boards."
    ]
  },
  "risk": {
    "metaDescription": "Expert Risk: continent lock timing, card trade denial, and fortify path optimization for defense in depth.",
    "intro": "Expert Risk is continent timing and card trade math. Lock continents early for bonus troops, deny opponents' trade timing, and fortify for defense in depth.",
    "quickTips": [
      "Australia and South America lock with 2 borders—easiest continents.",
      "Trade cards at 3+ for maximum troop burst.",
      "Fortify borders, not random territories.",
      "Break opponent continent locks before they reinforce."
    ],
    "strategy": [
      "Continent lock timing: Australia (2 borders) and South America (2 borders) lock round 2-3; Europe and North America need 3+ borders—lock only with 4+ troops on each border.",
      "Card trade denial: count opponent cards; when they have 3+, attack to force trade before they get 5-card bonus.",
      "Fortify depth: stack 8+ on continent border, 2-3 on interior—spreading 4 on every territory loses to concentrated breakthrough.",
      "Break priority: break smallest continent lock first (Australia) to deny 2 troops/turn.",
      "Endgame: when 2 players remain, card trades decide—hoard cards until 5-trade for 15 troops swing."
    ]
  },
  "clue": {
    "metaDescription": "Clue expert guide: information theory, optimal suggestions, card tracking, and deduction trees.",
    "intro": "Clue is pure deduction. Experts maximize information per suggestion, track every card shown, and narrow the solution space with Bayesian elimination.",
    "quickTips": [
      "Make suggestions that include cards in your hand — you learn what opponents cannot disprove.",
      "Enter rooms you haven't visited to force new suggestions.",
      "Track who showed what — the shower's other cards are still unknown.",
      "Save one unknown card in your final accusation room for the win."
    ],
    "strategy": [
      "Information maximization: suggest suspect-weapon-room combos where you hold two cards — the response tells you the third.",
      "Room rotation: visit every room once early to unlock suggestion rights everywhere.",
      "Card tracking matrix: maintain a grid of who has shown which cards; cross-reference to deduce hidden holdings.",
      "Bluff suggestions: include a card you know is in the envelope to force opponents to reveal without learning your hand.",
      "Endgame accusation: accuse only when exactly one suspect, weapon, and room remain — premature accusation loses the game.",
      "Opponent modeling: if a player repeatedly suggests the same suspect, they likely hold that card or the weapon."
    ]
  },
  "battleship": {
    "metaDescription": "Battleship expert guide: hunt-target mode, probability density, parity shooting, and ship placement.",
    "intro": "Battleship is a search optimization problem. Experts use probability maps, switch between hunt and target modes, and place ships to maximize ambiguity.",
    "quickTips": [
      "Start with parity shooting (checkerboard pattern) — hits on half the squares.",
      "Switch to target mode immediately after a hit — shoot all adjacent squares.",
      "Place ships away from edges and avoid parallel alignment patterns.",
      "Track remaining ship lengths to prune impossible orientations."
    ],
    "strategy": [
      "Hunt mode: shoot squares with highest probability density based on remaining ship placements. Center squares have higher hit probability than corners.",
      "Target mode: after a hit, prioritize inline extensions before diagonals. A hit with no adjacent hits means orient and extend both directions.",
      "Parity optimization: checkerboard covers every other cell; once a ship of even length is sunk, adjust parity for odd-length ships.",
      "Ship placement: scatter ships across the board; avoid clustering. Place destroyer (2) in a corner to reduce hunt efficiency.",
      "Probability map: recalculate after each sink — a 3-length ship has fewer valid positions than a 5-length carrier.",
      "Salvo variant: distribute shots across high-probability zones rather than clustering on one hit."
    ]
  },
  "stratego": {
    "metaDescription": "Stratego expert guide: piece valuation, scout chains, bomb placement, miner lanes, and flag defense.",
    "intro": "Stratego is imperfect-information chess. Experts value pieces by exchange equity, probe with scouts, and protect the flag with layered bombs and lakes.",
    "quickTips": [
      "Place bombs on the two squares flanking your flag — miners must expose themselves to defuse.",
      "Use scouts in chains of 3+ to map opponent ranks without losing high pieces.",
      "Never trade marshal (10) unless you have confirmed enemy marshal location.",
      "Keep spy (S) adjacent to your marshal path for counter-threat."
    ],
    "strategy": [
      "Piece valuation: marshal=10, general=9 down to scout=1; a spy killing marshal is +9 exchange. Bomb trades even with any piece except miner.",
      "Scout chains: advance scouts in connected lines so one loss reveals rank but the chain continues probing.",
      "Bomb placement: ring flag with bombs on diagonal approaches; leave one gap baiting miner commits.",
      "Miner lanes: clear a path for miners on the wing where opponent bombs cluster — never send miner through center.",
      "Bluff high ranks: leave sergeant (6) or lieutenant (5) unmoved in center to absorb attacks.",
      "Endgame: when material is low, march flag-side pieces forward — a revealed flag with one defender loses to any attack."
    ]
  },
  "othello": {
    "metaDescription": "Othello expert guide: corner control, mobility, frontier discs, parity, and endgame counting.",
    "intro": "Othello rewards corners, stable discs, and mobility. Experts sacrifice early discs for position, fight for C-squares, and count parity in the final 10 moves.",
    "quickTips": [
      "Corners are permanent — never concede a corner without forcing a catastrophic trade.",
      "Minimize frontier discs (discs adjacent to empty squares) in the midgame.",
      "X-squares (diagonal to corner) are dangerous — avoid giving opponent corner access.",
      "Count empty regions in endgame — odd regions let the last mover flip."
    ],
    "strategy": [
      "Corner theory: C-squares (adjacent to corner) are only playable when you can recapture the corner. A-squares (edge next to corner) are safer early.",
      "Mobility: maximize your legal moves while minimizing opponent's. Low mobility forces bad moves.",
      "Frontier management: internal stable discs (no empty neighbors) are immune to flipping — build stable edges toward corners.",
      "Parity: divide the board into regions; the player moving last in an odd-sized region gains flips. Sacrifice discs to force opponent to move first in key regions.",
      "Opening: prefer perpendicular openings (e.g. f5/d6) over parallel — parallel gives opponent more central control.",
      "Endgame: when 10 or fewer empties remain, calculate exact flip counts — one miscount loses 10+ discs."
    ]
  },
  "mancala": {
    "metaDescription": "Mancala expert guide: extra-turn paths, capture setups, stone counting, and endgame sweeps.",
    "intro": "Kalah (6-rack mancala) is solved in endgame with stone counting. Experts chain extra turns, set up captures on empty opponent pits, and sweep remaining stones.",
    "quickTips": [
      "Empty your rightmost pit early to enable extra-turn chains down the row.",
      "Never leave opponent's pit 1 (closest to their store) empty and vulnerable.",
      "Count stones in each pit — if a pit has exactly enough to land in your store, play it.",
      "In endgame, sweep all remaining stones with one chain if opponent cannot capture."
    ],
    "strategy": [
      "Extra-turn chains: a play that lands your last stone in your store grants another turn. Chain 2-3 extra turns to accumulate store advantage.",
      "Capture setup: land your last stone in an empty pit on your side, opposite an opponent pit with 2+ stones — captures all opposite stones.",
      "Stone counting: track total stones on each side. If you have more on your side at endgame, force opponent to move first into your captures.",
      "Defensive emptying: never create a situation where opponent can capture your entire row in one move.",
      "Pit 6 (rightmost) strategy: keep stones here for endgame sweep — moving from pit 6 often grants extra turns.",
      "Endgame: when opponent has fewer than 12 stones, calculate exact landing positions — one stone misplaced loses the entire row."
    ]
  },
  "dominoes": {
    "metaDescription": "Dominoes expert guide: pip counting, board control, blocking doubles, and endgame lockouts.",
    "intro": "Draw dominoes rewards pip minimization and board control. Experts count opponent pips, play to open ends they control, and lock opponents with strategic passes.",
    "quickTips": [
      "Play doubles early to open the board or late to block — never midgame without purpose.",
      "Count remaining pips in opponent hands — play to maximize their unplayable total.",
      "Hold diverse suits (numbers) to maintain play options on both ends.",
      "Force passes by closing ends to numbers you hold exclusively."
    ],
    "strategy": [
      "Pip counting: track total pips dealt minus played. When opponent passes, they lack that number — narrow their options.",
      "Board control: prefer playing to ends where you hold the connecting tiles. Control both open ends when possible.",
      "Double strategy: play high doubles (9-9, 8-8) early to dump pips; save low doubles for blocking.",
      "Spinner management: in games with a spinner, branch early to create four ends you can control.",
      "Endgame lockout: when holding 3-4 tiles, play to leave ends matching only your tiles — force pass and win on pip count.",
      "Draw discipline: draw only when necessary; each draw reveals information about your hand size."
    ]
  },
  "ludo": {
    "metaDescription": "Ludo expert guide: safe zones, block formations, entry timing, and home stretch racing.",
    "intro": "Ludo is a racing game with capture mechanics. Experts balance piece spread, form blocks on safe squares, and time entries from base to maximize 6s.",
    "quickTips": [
      "Never keep all four pieces in base — spread entries to increase capture chances.",
      "Form blocks (two pieces on same square) on safe zones to prevent captures.",
      "Prioritize getting one piece home before spreading others — a finished piece is worth more than three exposed.",
      "Use captures to delay leaders, not to score — racing wins, not captures."
    ],
    "strategy": [
      "Entry timing: enter on 6s early to maximize board presence; holding pieces in base wastes 6 rolls.",
      "Block formation: stack two pieces on a safe square (star/colored) to create an impassable block opponents must detour around.",
      "Spread vs cluster: keep pieces 7+ spaces apart to avoid double-capture risk; cluster only on safe squares.",
      "Home stretch: once a piece enters the colored home path, prioritize it — exposed pieces on the main track are vulnerable.",
      "Capture math: capturing sets opponent back 15+ spaces — only capture when it delays a piece closer to home than yours.",
      "Endgame: sacrifice exposed pieces to block opponent home entries if you have a piece in the final stretch."
    ]
  },
  "parcheesi": {
    "metaDescription": "Parcheesi expert guide: blockades, safety zones, entry rolls, and home column timing.",
    "intro": "Parcheesi combines racing with blockade tactics. Experts form blockades on safe squares, time doublets for extra moves, and race pieces home in pairs.",
    "quickTips": [
      "Form blockades with two pieces on the same safe square — opponents cannot pass.",
      "Enter all pieces early; pieces in start waste doublet bonuses.",
      "Use safety zones (colored circles) to shelter pieces from capture.",
      "Race two pieces home together — a lone piece on the home stretch is vulnerable."
    ],
    "strategy": [
      "Blockade formation: place two pieces on a safe square to create a wall. Break blockades only when you can advance past opponent blockades.",
      "Doublet exploitation: rolling doubles grants four moves (or entry from start). Use doublets to move one piece far rather than four pieces short.",
      "Capture priority: capture pieces within 7 spaces of your blockade to trap them behind your wall.",
      "Home column: enter home column only when you can reach home in 1-2 rolls — stuck pieces block your own path.",
      "Safe zone cycling: move between safety zones to avoid capture corridors on the main track.",
      "Endgame: when one piece is 5 spaces from home, sacrifice blockade pieces to clear the path."
    ]
  },
  "sorry": {
    "metaDescription": "Sorry expert guide: card probability, slide zones, safety points, and Sorry! attack timing.",
    "intro": "Sorry! is card-driven racing with attack cards. Experts track discards, exploit slide zones, and time Sorry! plays to knock leaders back to start.",
    "quickTips": [
      "Always move a piece out of start on 1 or 2 — board presence beats holding cards.",
      "Use 4 cards backward only to enter safety zones or block opponent slides.",
      "Save Sorry! cards for opponent pieces within 4 spaces of home.",
      "Slide zones (red triangles) can advance you 4+ spaces — position pieces before opponent slides."
    ],
    "strategy": [
      "Card probability: 45 cards, 5 of each number 1-12 except one 1 and one 2 removed. Track discards to calculate draw odds.",
      "Slide exploitation: enter slide zones with exact count to ride the full slide. Block slides by occupying the entry square.",
      "Safety points: the 5 safe circles per color protect from Sorry! and slides — camp here when threatened.",
      "Sorry! timing: play on the leading piece, not the closest. Knocking a piece 3 spaces from home to start is worth more than one 10 spaces out.",
      "7 card split: always split 7 to move two pieces when both advance toward home; never waste on one piece unless it reaches home.",
      "Endgame: hold a 1 or 2 for guaranteed home entry rather than risking a 3-6 overshoot."
    ]
  },
  "trouble": {
    "metaDescription": "Trouble expert guide: Pop-O-Matic probability, peg blocking, finish zone entries, and capture lanes.",
    "intro": "Trouble is pure dice racing with capture mechanics. Experts maximize peg spread, block finish entries, and use captures to delay leaders on the shared track.",
    "quickTips": [
      "Get all four pegs on the board quickly — more pegs means more capture opportunities.",
      "Block opponent finish zone entries by occupying the square before their peg arrives.",
      "Never leave a peg alone on the shared track near an opponent's peg.",
      "A 6 grants an extra roll — chain 6s by keeping pegs spread across the track."
    ],
    "strategy": [
      "Peg spread: distribute pegs across the 28-space track to maximize landing-on-opponent chances.",
      "Finish zone blocking: occupy the entry square to opponent's finish — they must wait or capture you.",
      "Capture lanes: position pegs 6 spaces behind opponents to guarantee capture on your next 6 or exact roll.",
      "6-chain probability: with 4 pegs on board, each roll has ~67% chance of at least one peg moving; prioritize keeping pegs active.",
      "Home stretch: once a peg enters the colored finish path, never move it backward — forward-only racing wins.",
      "Endgame: sacrifice a trailing peg to block the leader's finish entry if your leading peg is 3+ spaces ahead on the finish path."
    ]
  },
  "connect-four": {
    "metaDescription": "Connect Four expert guide: solved book moves, center column control, threat pairs, and zugzwang.",
    "intro": "Connect Four is a solved game — perfect play guarantees a win for the first player. Experts control the center, build threat pairs, and force zugzwang in the endgame.",
    "quickTips": [
      "Play column 4 (center) first — it participates in the most winning lines.",
      "Build threat pairs: two connected threats where opponent can block only one.",
      "Never play directly below an opponent's three-in-a-row unless you create your own threat.",
      "Count vertical threats — a column with three of your discs on bottom rows is unstoppable."
    ],
    "strategy": [
      "Book opening: 1. d1 (center column) is proven optimal. Respond to opponent's edge plays with center-adjacent columns (3 or 5).",
      "Center column control: column 4 connects to 21 winning lines; columns 3 and 5 connect to 17; edges connect to 11. Dominate center.",
      "Threat pairs: create two simultaneous threats (e.g. horizontal at row 3 and diagonal through row 5) — opponent blocks one, you win with the other.",
      "Vertical traps: stack three discs in a column on rows 1-3, forcing opponent to play above you, then complete four vertically.",
      "Zugzwang: in late game, force opponent to play in a column that gives you the win on the next move.",
      "Odd-even column theory: on a 7-column board, columns 1,3,5,7 have odd height capacity; use parity to predict when a column fills."
    ]
  },
  "chinese-checkers": {
    "metaDescription": "Chinese Checkers expert guide: hop chains, star point openings, peg distribution, and blocking lanes.",
    "intro": "Chinese Checkers rewards efficient hop chains over single steps. Experts open through the center star, chain 3+ hops per turn, and block opponent star points.",
    "quickTips": [
      "Always prefer hop chains over single-step moves — one hop can equal 3-5 steps.",
      "Occupy the center star point early for maximum hop options in all directions.",
      "Spread pegs across your triangle base — clustered pegs limit hop chains.",
      "Block opponent star points to force them into longer routes."
    ],
    "strategy": [
      "Hop chain optimization: plan moves that chain 3+ hops by positioning pegs as stepping stones. A single turn can advance a peg 8+ spaces.",
      "Star point control: the six star points around center are the highest-value squares. Occupy yours and contest center.",
      "Opening: move base-row pegs toward center star, not directly forward — diagonal hops are longer than straight advances.",
      "Blocking: place a peg on opponent's target star point to add 4+ moves to their route.",
      "Peg distribution: keep 2-3 pegs in your base as hop anchors while advancing leaders.",
      "Endgame: when one peg is 3 hops from goal, clear a hop lane by moving blockers sideways — never advance blockers forward."
    ]
  },
  "mastermind": {
    "metaDescription": "Mastermind expert guide: Knuth algorithm, information entropy, first-guess optimization, and constraint narrowing.",
    "intro": "Mastermind is an information theory game. Experts use Knuth's algorithm to minimize worst-case guesses and maximize information per guess.",
    "quickTips": [
      "Open with a guess using 2-3 colors (e.g. AABB) to maximize information, not all different colors.",
      "Never repeat a guess that received zero black and zero white pegs.",
      "Track eliminated colors and positions after each response.",
      "Aim to eliminate 50%+ of remaining codes with each guess."
    ],
    "strategy": [
      "Knuth's algorithm: after each guess, calculate remaining consistent codes. Choose the next guess that minimizes the maximum remaining set size (minimax).",
      "First guess optimization: AABB (two pairs) is optimal for 6 colors/4 pegs — it partitions the 1296 codes into balanced response groups.",
      "Information entropy: a guess that splits remaining codes into equal-sized groups maximizes expected information. Avoid guesses that leave one large group.",
      "Constraint narrowing: black pegs fix position; white pegs fix color but not position. Cross-reference both constraints before guessing.",
      "Endgame: with fewer than 10 codes remaining, guess a valid code directly rather than a probe — you might win immediately.",
      "Duplicate colors: remember codes can repeat colors (AAAA is valid). Don't eliminate color repetition too early."
    ]
  },
  "rummikub": {
    "metaDescription": "Rummikub expert guide: initial meld timing, joker management, table manipulation, and rack reduction.",
    "intro": "Rummikub is rummy with board manipulation. Experts make the initial 30-point meld efficiently, hoard jokers, and rearrange the table to dump tiles.",
    "quickTips": [
      "Make your initial 30-point meld as early as possible with high-value tiles.",
      "Hoard jokers — they are worth 30 points and enable any set or run.",
      "Manipulate the table every turn after your initial meld — never just play from rack.",
      "Keep diverse numbers to maintain manipulation options."
    ],
    "strategy": [
      "Initial meld: play runs (3+ consecutive same color) over sets (3-4 same number) — runs are harder for opponents to manipulate around.",
      "Joker management: use jokers only when they complete a meld that lets you dump 4+ tiles. Never leave a joker isolated on the table.",
      "Table manipulation: rearrange existing melds to free your tiles — split a 1-2-3-4 run into 1-2-3 and play your 4 elsewhere.",
      "Rack reduction: prioritize dumping high-value tiles (10, 11, 12, 13) early to minimize penalty if opponent wins.",
      "Blocking: leave melds that use numbers opponents likely hold based on their draws and discards.",
      "Endgame: when opponent has 3 tiles, manipulate to play all tiles in one turn — calling Rummikub with 1 tile left is a 30-point penalty risk."
    ]
  },
  "guess-who": {
    "metaDescription": "Guess Who expert guide: binary search questions, feature frequency, expected value questioning, and elimination trees.",
    "intro": "Guess Who is binary search with faces. Experts ask questions that eliminate ~50% of remaining characters and track feature correlations.",
    "quickTips": [
      "Ask about features shared by roughly half the remaining characters.",
      "Prioritize hair color and accessories — they split the board most evenly.",
      "Track opponent eliminations to infer their remaining pool.",
      "Never ask about a feature you've already eliminated on your board."
    ],
    "strategy": [
      "Binary search: each question should eliminate 10-12 of 24 characters. Features with ~50% yes rate are optimal.",
      "Feature frequency: glasses (~8/24), brown hair (~10/24), hats (~6/24). Calculate remaining pool before each question.",
      "Expected value: if 12 characters remain, a 50/50 question is worth 6 eliminations. A 75/25 question is worth only 3 expected eliminations.",
      "Correlation tracking: if opponent asks about glasses early, they likely don't have glasses — narrow their pool accordingly.",
      "Endgame: with 4 or fewer characters, ask compound-feature questions if your edition allows, or guess directly when odds favor you.",
      "First question: 'Does your person have brown hair?' or 'Is your person wearing glasses?' splits most editions near 50/50."
    ]
  },
  "sequence": {
    "metaDescription": "Sequence expert guide: corner control, two-way threats, dead card management, and team coordination.",
    "intro": "Sequence is connect-five with cards. Experts control corners (wild spaces), build two-way threats, and coordinate with partners to block and complete sequences.",
    "quickTips": [
      "Corners are wild — control all four corners for flexible sequence completion.",
      "Build two-way threats: chips that could complete a sequence in either direction.",
      "Discard dead cards immediately — a card you can't play wastes a draw.",
      "In teams, signal by playing near partner's chips to build shared threats."
    ],
    "strategy": [
      "Corner priority: corners count for any team's sequence. Occupy corners before center — they connect to 4 directions.",
      "Two-way threats: place a chip that threatens sequences horizontally and diagonally — opponent can block only one.",
      "Dead card management: if you hold a card whose space is occupied by your own chip, discard and draw. Never hold more than one dead card.",
      "Blocking: place on opponent's 4-in-a-row threat immediately. A 3-in-a-row with open ends is lower priority than a 4-threat.",
      "Team coordination: in 2v2, build sequences through partner's chips — a sequence can use both teams' chips on the same line.",
      "Endgame: with 2 sequences needed, prioritize completing one fully before starting another — partial sequences are vulnerable."
    ]
  },
  "blokus": {
    "metaDescription": "Blokus expert guide: corner anchoring, piece valuation, territory blocking, and endgame tile conservation.",
    "intro": "Blokus is spatial territory control. Experts anchor from corners, play large pieces early, and block opponent corner access in the endgame.",
    "quickTips": [
      "Play your largest pieces (pentominoes) in the first 5 turns while space is open.",
      "Always touch diagonally, never edge-to-edge with your own pieces.",
      "Expand toward the center early, then pivot to block opponent corners.",
      "Save the 1x1 monomino for the final turn — it guarantees one more placement."
    ],
    "strategy": [
      "Corner anchoring: your first piece must include your corner square. Expand diagonally from corner to maximize territory options.",
      "Piece valuation: play 5-blocks and 4-blocks first (F, P, Y pentominoes). Save flexible 3-blocks (L, T trominoes) for gaps.",
      "Territory blocking: in 4-player, position pieces to cut opponent paths to the center. A blocked opponent plays fewer total pieces.",
      "Diagonal rule exploitation: place pieces so opponents cannot legally touch your territory edge — force them into narrow corridors.",
      "Endgame conservation: count remaining squares. With 3 pieces left, prioritize the monomino (1 square) for last — it's the most flexible.",
      "Scoring: -1 per unplayed square. Sacrifice a large piece to block an opponent's 5+ square territory if it saves you 3+ squares."
    ]
  },
  "labyrinth": {
    "metaDescription": "Labyrinth expert guide: tile insertion strategy, path pre-calculation, treasure blocking, and spare tile hoarding.",
    "intro": "Labyrinth (Ravensburger) is path manipulation racing. Experts pre-calculate insertions 2 moves ahead, block opponent paths, and hoard the spare tile for decisive shifts.",
    "quickTips": [
      "Before moving your piece, plan the tile insertion that creates your shortest path.",
      "Insert tiles to disconnect opponent paths, not just advance your own.",
      "Collect treasures on the far side of the board to minimize return trips.",
      "Track which tile type (T, L, I) is the spare — it determines insertion options."
    ],
    "strategy": [
      "Insertion priority: push a tile that opens your path AND closes the opponent's shortest route. Dual-purpose insertions win games.",
      "Path pre-calculation: map your route to the next treasure before inserting. Count moves including the insertion shift.",
      "Treasure blocking: if opponent needs treasure 3 spaces away, insert to wall off that corridor — force them a 5+ move detour.",
      "Spare tile hoarding: when you hold the spare tile after insertion, opponents cannot predict the next board state — use this information advantage.",
      "Edge insertion: inserting on edge rows (not center) shifts fewer pieces but gives more predictable path changes.",
      "Endgame: when one treasure remains, insert to place yourself 1 move away while opponent is 3+ moves — even if your path is longer overall."
    ]
  },
  "the-game-of-life": {
    "metaDescription": "Game of Life expert guide: college ROI, insurance timing, stock market odds, and salary path optimization.",
    "intro": "The Game of Life is expected-value optimization disguised as a family game. Experts take college for long-term salary advantage, buy insurance before Spin to Win, and maximize stock holdings.",
    "quickTips": [
      "Always choose college — the salary advantage compounds over 40+ years of play.",
      "Buy insurance before every Spin to Win and lawsuit risk space.",
      "Invest in stock early — each stock pays on every opponent's spin matching your number.",
      "Choose the highest-salary career path even if it costs more upfront."
    ],
    "strategy": [
      "College ROI: college costs $100k but unlocks $100k+ salary jobs vs $40k for non-college. Break-even is turn 3-4 — always worth it.",
      "Insurance timing: auto and fire insurance cost $10k each but save $40-100k on disaster spaces. Buy before every risk zone.",
      "Stock market: buy stock when you land on the space — it pays $40k every time any player spins your number. Expected value scales with player count.",
      "Salary optimization: doctor ($130k) > lawyer ($100k) > teacher ($60k). Choose highest even with higher promissory notes.",
      "House strategy: buy the most expensive house you can afford — mansion resale value is highest and life tiles scale with wealth.",
      "Endgame: retire to the richest life tile space. Count total wealth (cash + tiles + stocks) — stocks often decide close games."
    ]
  },
  "trivial-pursuit": {
    "metaDescription": "Trivial Pursuit expert guide: wedge targeting, category strength mapping, hub control, and final chase strategy.",
    "intro": "Trivial Pursuit rewards category specialization and board positioning. Experts target their strongest wedge first, control hub spaces, and optimize final chase routes.",
    "quickTips": [
      "Identify your strongest category and aim for that wedge space first.",
      "Land on hub spaces to choose any category — always pick your strongest.",
      "In teams, assign categories by player expertise.",
      "Memorize common question patterns: geography favors capitals, history favors dates."
    ],
    "strategy": [
      "Wedge targeting: collect wedges in order of your expertise — don't chase random categories. Geography and Entertainment have highest question repetition.",
      "Category strength mapping: rank all 6 categories by your hit rate. Only pursue hub spaces that offer your top-2 categories.",
      "Hub control: the center hub lets you choose category — always land here when you need a specific wedge. Roll odds favor reaching hub every 3-4 turns.",
      "Blocking: in competitive play, land on opponent's needed wedge space to force them to answer in their weak category.",
      "Final chase: once you have 5 wedges, calculate shortest path to center. Roll probability: need exact count 50% of the time — position 3-4 spaces away for two chances.",
      "Question patterns: Sports asks Olympic years, Science asks periodic table, Literature asks Shakespeare. Pre-study high-frequency subtopics."
    ]
  },
  "pictionary": {
    "metaDescription": "Pictionary expert guide: drawing shortcuts, category signaling, time management, and guesser communication.",
    "intro": "Pictionary is communication speed under constraint. Experts use standardized drawing shortcuts, signal category first, and manage the 60-second clock ruthlessly.",
    "quickTips": [
      "Signal category first: draw a square for movie, wavy line for song, book shape for title.",
      "Use standardized shortcuts: stick figure + arrow = verb, X = no, checkmark = yes.",
      "Draw the hardest word first, then add context clues.",
      "Guessers should shout partial matches to narrow options."
    ],
    "strategy": [
      "Category signaling: first 3 seconds establish medium — film reel for movie, musical note for song, open book for book title. Saves 10+ seconds of guessing.",
      "Drawing shortcuts: draw phonetic components for hard words (draw 'cat' for 'catalog'). Use number of syllables (hold up fingers) before drawing.",
      "Time management: spend 5 seconds planning, 40 seconds drawing, 15 seconds refining. Never erase — cross out and redraw.",
      "Guesser protocol: yell all associations immediately ('sounds like', 'type of', 'rhymes with'). Silence loses games.",
      "All-play strategy: in all-play rounds, draw the most distinctive visual element — avoid abstract concepts.",
      "Difficult words: for proper nouns, draw the most famous association (Eiffel Tower for Paris, not a map of France)."
    ]
  },
  "operation": {
    "metaDescription": "Operation expert guide: tweezer technique, high-value extraction order, steady-hand positioning, and risk-reward banking.",
    "intro": "Operation is fine motor control under pressure. Experts use proper tweezer grip, extract high-value pieces first, and bank points before attempting risky extractions.",
    "quickTips": [
      "Use thumb-and-index tweezer grip at the metal band, not the foam handles.",
      "Extract high-value pieces (brain $600, heart $500) before low-value ones.",
      "Brace your elbow on the table for stability.",
      "Bank accumulated money before attempting the most difficult pieces."
    ],
    "strategy": [
      "Tweezer technique: grip tweezers at the metal hinge, not the foam. Approach pieces from the side slot, not top-down — side entry minimizes edge contact.",
      "Extraction order: brain ($600) and heart ($500) first while tweezers are cold. Save wishbone ($100) and spare rib ($100) for last when pressure is highest.",
      "Steady-hand positioning: rest your wrist on the table edge, use pinky finger as anchor. Breathe out during extraction, not in.",
      "Edge avoidance: each piece has a safe extraction angle. Heart exits best from the left slot; funny bone from the top-right channel.",
      "Risk-reward banking: after $800+ accumulated, attempt only high-value remaining pieces. A buzz costs your turn but not banked money in most house rules.",
      "Speed vs precision: in timed variants, skip low-value pieces entirely — one brain extraction equals six spare rib attempts."
    ]
  },
  "catan": {
    "metaDescription": "Win Catan with ore-wheat city engines, port control, and robber denial—not random expansion.",
    "intro": "Expert Catan is a race to three cities on a 2:1 ore port or equivalent production. Settlements are stepping stones; dev cards are insurance, not a primary plan. Control the robber as a denial tool on opponents' ore and wheat hexes.",
    "quickTips": [
      "Aim for 2:1 ore port plus ore-wheat-sheep triangle before chasing longest road.",
      "Place the robber on opponents' sole ore or wheat hex, not their brick surplus.",
      "Upgrade to cities before building a fourth settlement unless you need a port.",
      "Buy development cards when ore-wheat is flowing and no one can steal your city pieces."
    ],
    "strategy": [
      "Draft numbers that share a rare resource with opponents so trades favor you. A 6-8-5 on ore with only one competitor on that hex is ideal.",
      "City engine beats settlement sprawl: each city doubles ore and wheat income that feeds more cities. Two cities on ore-wheat is the standard expert pivot.",
      "Longest road is a 2 VP side bet—take it only if it costs one road segment and does not delay your third city.",
      "Harbor settlements on 2:1 ore or 3:1 generic are worth a worse initial number if they accelerate city timing by one turn.",
      "Trade aggressively early to complete cities, then tighten—deny 1:1 trades that let opponents hit city breakpoints.",
      "Track dev card count: when the deck is thin, robber pressure on your production matters less than securing the final city."
    ]
  },
  "carcassonne": {
    "metaDescription": "Win Carcassonne by farming endgame points, meeple economy, and cloister timing—not random tile placement.",
    "intro": "Expert Carcassonne is won in the farmer scoring phase. Meeples are a scarce currency: every placement must either score soon, steal a city, or secure a field that will connect to multiple completed cities.",
    "quickTips": [
      "Place farmers early on fields touching two or more unfinished cities.",
      "Complete small cities fast to recover meeples; never leave five meeples trapped.",
      "Use abbots or small monasteries for safe 9-point closes when meeples are tight.",
      "Steal shared cities by placing tiles that enlarge the city on your side only."
    ],
    "strategy": [
      "Farmer endgame: count connected cities per field before placing—one farmer in a field feeding three cities beats two farmers in separate fields.",
      "Meeple economy: aim to have 4–5 meeples in play mid-game with at least two returning within three turns.",
      "City stealing: when joining cities, control the tile orientation so opponents cannot re-steal with a follower.",
      "Cloister placement on central crossroads denies opponents clean field boundaries and scores reliably.",
      "Endgame tile denial: if you cannot score, place tiles that isolate opponent farmers from new city completions.",
      "Inns and cathedrals: commit a meeple only when the city will finish before the deck runs out."
    ]
  },
  "ticket-to-ride": {
    "metaDescription": "Expert Ticket to Ride: route blocking, card tempo, and destination risk calibration for family tables.",
    "intro": "At family tables, Ticket to Ride is route denial and card draw tempo. Experts complete short routes early, block longest paths, and manage destination risk.",
    "quickTips": [
      "Draft 6-8 cards before committing to a color.",
      "Block the longest unclaimed route segment opponents need.",
      "Keep at least one short destination for late completion insurance.",
      "Draw from deck when color you need is visible in face-up row."
    ],
    "strategy": [
      "Route blocking priority: identify opponents' likely destinations from early station placement; block the bottleneck segment, not the whole route.",
      "Card tempo: 6-8 card draws before first claim; premature claims telegraph routes and invite blocks.",
      "Destination risk: hold one 4-6 point destination completable in 3 turns as insurance; long destinations only with 20+ cards in hand.",
      "Face-up row denial: take cards from face-up even if not needed to deny opponents their color—especially late game.",
      "Endgame train count: reserve 2-3 trains for a 1-segment completion; running out with incomplete destination is -point swing."
    ]
  },
  "agricola": {
    "metaDescription": "Win Agricola with action blocking, family growth timing, and bread ovens—not unfocused farm expansion.",
    "intro": "Expert Agricola is action-space denial. You must grow your family on schedule while blocking opponents from wood, clay, and the occupation you need. A bread oven by round 4 is the standard tempo benchmark.",
    "quickTips": [
      "Take Family Growth the round before opponents expect it to deny them the action.",
      "Build a clay oven or hearth by round 4—bread feeds family growth and begging cards.",
      "Block the Major Improvement space when opponents need the oven more than you.",
      "Plow fields in pairs so one Sow action plants two grain."
    ],
    "strategy": [
      "Action blocking: track opponents' unbuilt rooms and take Wood or Reed the turn before their expansion.",
      "Family growth timing: first growth round 5–6, second round 9–11—each extra action multiplies all future income.",
      "Bread engine: clay oven plus two grain fields eliminates begging and frees actions for animals.",
      "Occupation synergy: draft occupations that reward your planned animal or grain path, not generic discounts.",
      "Fencing: three pastures with two animals each scores more efficiently than one large pasture late.",
      "Endgame: one of each improvement and full family minus three begging cards is the expert scoring floor."
    ]
  },
  "puerto-rico": {
    "metaDescription": "Win Puerto Rico with role selection, corn vs indigo timing, and builder engine—not passive shipping.",
    "intro": "Expert Puerto Rico is about role privilege: the player who picks Builder with three quarries and a coffee plant gains 4 VP per build. Corn is tempo; indigo and coffee are scaling. Know when to fill the ship versus keep goods.",
    "quickTips": [
      "Take Builder when you have three buildings ready and opponents cannot afford to follow.",
      "Choose corn as first good unless indigo plant comes free on turn one.",
      "Fill the ship only when it clears your warehouse at full price—never for one doubloon.",
      "Prospector when you need colonists more than opponents need gold."
    ],
    "strategy": [
      "Role selection: alternate between roles only you can exploit—Builder with discount buildings, Craftsman when you hold five coffee.",
      "Corn vs indigo: corn funds early colonists; switch to coffee or tobacco before the builder engine peaks.",
      "Builder timing: five buildings plus three quarries makes each Builder role worth 8+ VP over two turns.",
      "Shipping denial: leave one space on a ship to trap opponents' goods in warehouse.",
      "Colonist rush: Hacienda plus early Prospector yields three colonists before opponents fill production buildings.",
      "Endgame: factory and large buildings score only if occupied—colonist placement is the hidden clock."
    ]
  },
  "power-grid": {
    "metaDescription": "Win Power Grid with turn-order auction, plant efficiency, and city count timing—not overpaying for plants.",
    "intro": "Expert Power Grid is an efficiency calculation: income divided by resource cost per turn. Turn order in bureaucracy is everything—being last lets you buy resources cheap and expand into contested cities last.",
    "quickTips": [
      "Buy the cheapest plant that powers your current cities plus one—never skip efficiency for a future plant.",
      "Stay in last place on bureaucracy when you need resources and city access.",
      "Trigger Step 2 only when you have a plant that uses the new resource mix.",
      "Count elec capacity: one leftover power is wasted money every turn."
    ],
    "strategy": [
      "Turn-order auction: bid exactly one more than the plant is worth to you—overbidding drops you to first place and raises resource prices.",
      "Plant efficiency: oil/coal hybrids at 2:1 city ratio are the expert baseline until Step 3.",
      "City count timing: expand to seven cities in one turn to end the game when you can power all seven.",
      "Resource market: buy when third-from-right slot is cheap; opponents in first place will drain expensive slots.",
      "Plant discard: force Step 3 by buying the highest plant when your engine supports uranium or renewables.",
      "Endgame: power plants 25+ with seven cities beats a larger network that cannot power."
    ]
  },
  "terraforming-mars": {
    "metaDescription": "Win Terraforming Mars with standard project timing, milestone races, and steel efficiency—not card hoarding.",
    "intro": "Expert Terraforming Mars balances card engine with standard projects. Raise TR on odd generations when cards are weak. Milestones at 35 TR are races—claim Mayor or Planner before opponents reach the threshold.",
    "quickTips": [
      "Buy standard projects when hand has no playable cards and TR raise costs less than 3 VP per step.",
      "Use steel on blue cards only; titanium on space and Jovian tags.",
      "Claim a milestone the generation you hit 35 TR—waiting one round loses to tiebreak.",
      "Plant trees before oxygen raises plant production value for everyone."
    ],
    "strategy": [
      "Standard project timing: Asteroid and Comet for TR when hand is dead; Power Plant only with building tag synergy.",
      "Card engine: draw engines need 3+ draw cards before they beat standard project tempo.",
      "Milestone races: Mayor with three city tiles, Planner with 16+ cards—track opponents' city count every generation.",
      "Steel efficiency: spend steel at 2:1 on cards worth 3+ VP per steel, never on 1 VP greenery.",
      "Award funding: fund an award only when you lead that category by 3+ points or it costs opponents 8+ M€.",
      "Endgame: TR above 40 with greenery for city bonuses beats a thin card combo that stalls at 38 TR."
    ]
  },
  "wingspan": {
    "metaDescription": "Win Wingspan with bonus card routes, egg spam on grasslands, and tuck-and-cache engines—not random bird plays.",
    "intro": "Expert Wingspan builds toward round goals and bonus cards from turn one. Grassland eggs feed forest tuck engines. A four-bird combo in one habitat is worth more than spreading across three.",
    "quickTips": [
      "Draft bonus cards that match your opening habitat—Ravens and Franklin's Gull for cavity nesters.",
      "Spam eggs on grassland birds before round 4 egg scoring.",
      "Tuck from forest when round goal rewards bird count, not points.",
      "Use pink powers on opponents' turns for extra food and cards."
    ],
    "strategy": [
      "Bonus card routes: Cartographer plus large wingspan birds, or Photographer with three birds that tuck.",
      "Egg strategy: grassland holds six eggs cheaply—fill it before converting food to new birds in round 3.",
      "Tuck engines: Great Horned Owl plus birds that tuck from forest create card draw without spending actions.",
      "Round goal timing: commit to the round 4 goal on round 3's last action, not mid-round.",
      "Food engine: pink powers that gain wheat and berry on opponents' turns save two actions per round.",
      "Endgame: bonus card plus forest row of five birds with eggs often beats a wetland-only point rush."
    ]
  },
  "castles-of-burgundy": {
    "metaDescription": "Win Castles of Burgundy with phase planning, knowledge tiles, and shipping bonuses—not random tile grabs.",
    "intro": "Expert Castles of Burgundy plans the full phase before rolling. Silverlings fund knowledge tiles that break placement rules. Shipping track bonuses at 6 and 11 are the highest VP per action in the game.",
    "quickTips": [
      "Take the 2:1 knowledge tile before expanding past three hex types.",
      "Ship goods the turn your shipping bonus crosses 6 or 11 VP threshold.",
      "Use the warehouse to hold a tile that completes a color bonus for next phase.",
      "Place mines and pastures early—they compound every phase."
    ],
    "strategy": [
      "Phase planning: decide your three placements before the roll; reroll only when two of three tiles are useless.",
      "Knowledge tiles: Building Permit and Animal Breed are the expert picks for flexible placement.",
      "Shipping bonuses: two goods shipped at bonus 6 scores 12 VP—time your warehouse goods for this.",
      "Color bonuses: completing all tiles of one color in one phase triggers 10 VP; warehouse holds the fifth tile.",
      "Animal sets: three different animals scores 10 VP; prioritize new species over duplicates.",
      "Endgame: castle completion plus two shipping bonuses beats scattered six-tile boards without bonuses."
    ]
  },
  "concordia": {
    "metaDescription": "Win Concordia with hand management, Saturn scoring, and colonist tempo—not buying every card.",
    "intro": "Expert Concordia scores through card diversity at game end. Saturn and Venus multiply colonist placement. Buy cards that match your map position, not the highest printed value.",
    "quickTips": [
      "Keep Prefect and Consul in hand for the turn you need both colonists and cash.",
      "Buy Saturn when you have colonists on four different city types.",
      "Draft Mercator before opponents block your preferred brick or food city.",
      "Do not buy duplicate production cards—one brick and one food card suffices."
    ],
    "strategy": [
      "Hand management: six cards with five types scores more than eight cards with three types.",
      "Saturn scoring: place colonists on brick, food, wine, cloth, and tool cities before buying Saturn.",
      "Colonist tempo: Prefect plus Consul on consecutive turns places three colonists and funds the next card.",
      "Card denial: buy Mercator or Diplomat when opponents need that resource type for their next colonist.",
      "Cash flow: Tribune early refunds cards but costs tempo—use only when hand is dead.",
      "Endgame: count card scores before final buy; Jupiter plus four types often beats over-investing in colonists."
    ]
  },
  "7-wonders": {
    "metaDescription": "Win 7 Wonders with science pairs, military timing, and guild selection—not random card passing.",
    "intro": "Expert 7 Wonders commits to science or military by age two. Science pairs score exponentially; a third symbol is worth less than completing two pairs. Guilds in age three reward what neighbors built.",
    "quickTips": [
      "Draft science symbols you already have—pairs score 4, triples only add 1 each.",
      "Take military in age two when neighbors are building science, not age one.",
      "Pick guilds that score off neighbors' brown and grey cards.",
      "Chain-build your wonder stages in ages one and two for free card plays."
    ],
    "strategy": [
      "Science pairs: two tablets plus two compasses scores 16; chasing a third symbol wastes drafts.",
      "Military timing: age two shields when neighbors ignore military; one loss costs 1 VP, two losses cost 5.",
      "Guild selection: Mathematicians Guild plus science neighbors, or Guild of Merchants with resource-heavy neighbors.",
      "Resource economy: buy from neighbors only when the card saves a full draft; otherwise take gold.",
      "Wonder stages: Babylon stage two hiding a card enables science pair completion in age three.",
      "Endgame: science board with 4 symbols plus one guild often beats military without wonder points."
    ]
  },
  "splendor": {
    "metaDescription": "Win Splendor with reservation engines, noble timing, and tier-two discounts—not hoarding gems.",
    "intro": "Expert Splendor builds a discount engine to 5–6 of one color, then reserves tier-three cards. Nobles are VP with a discount requirement—position gems to attract two nobles in one turn.",
    "quickTips": [
      "Reserve tier-three cards early—they cost no gems and block opponents.",
      "Build to five green discounts before chasing nobles.",
      "Take gold only when reserving a card opponents need this turn.",
      "Do not buy tier-one cards after turn 6 unless they unlock a noble."
    ],
    "strategy": [
      "Reservation engine: reserve two tier-three cards by turn 8; buy them with 4–5 discounts each.",
      "Noble timing: track noble requirements on the board—shift one purchase to attract two nobles at 15 points.",
      "Card development: tier-two cards with two bonuses accelerate faster than three tier-one cards.",
      "Gold usage: reserve the card an opponent can afford this turn, then buy it next turn with gold.",
      "Denial: take the last card of a color an opponent needs for a noble, even if you do not need it.",
      "Endgame: two tier-three cards plus two nobles at 16 points ends the game—count opponents' discounts every turn."
    ]
  },
  "azul": {
    "metaDescription": "Win Azul with floor line denial, pattern timing, and negative space control—not greedy tile grabs.",
    "intro": "Expert Azul treats the floor line as a weapon. Taking four tiles of one color forces opponents to overflow or pass. Complete rows top-down to unlock pattern lines early.",
    "quickTips": [
      "Take four tiles of a color opponents need when your pattern line cannot accept them.",
      "Complete the top row first—five pattern lines open scoring faster.",
      "Never place a tile on the floor if you can draft one fewer tile instead.",
      "Plan two turns ahead for wall completion bonuses."
    ],
    "strategy": [
      "Negative line management: overflow opponents by draining a factory of their needed color into your safe line.",
      "Pattern selection: draft colors that complete both pattern line and wall bonus in the same placement.",
      "Floor penalty avoidance: one floor tile costs 1 point; three costs 6—draft one less tile to stay clean.",
      "Factory denial: empty a factory of one color so the center pile forces opponents to take floor tiles.",
      "Endgame: wall completion on column five scores 7 plus row bonus—set up two completions in one round.",
      "Two-player: mirror opponents' wall gaps and draft the color they cannot place without floor penalty."
    ]
  },
  "viticulture": {
    "metaDescription": "Win Viticulture with visitor timing, wake-up track spots, and wine value chains—not random vine planting.",
    "intro": "Expert Viticulture chains wake-up bonuses with seasonal worker placement. Summer visitors fund winter wine sales. The wake-up track's top spot (draw two visitors) is worth an entire season of workers.",
    "quickTips": [
      "Take wake-up spot 1 (draw two visitors) unless you need the extra worker more.",
      "Play summer visitors that grant cards before winter sales for cash.",
      "Plant vines matching your wine order row—mismatched grapes waste crush actions.",
      "Build trellis and irrigation before filling your third vine field."
    ],
    "strategy": [
      "Visitor timing: summer visitors for vine planting and cards; winter visitors for VP and wine orders.",
      "Wake-up spots: position zero grants two visitors—equivalent to 6 VP if visitors chain into wine orders.",
      "Vine placement: plant left-to-right on the wine order card to minimize field walks.",
      "Wine value: fill highest-value order first; partial orders score nothing.",
      "Structure synergy: tasting room plus winery doubles wine sales—build before filling orders.",
      "Endgame: three filled wine orders plus visitor VP beats a sprawling vineyard without structures."
    ]
  },
  "great-western-trail": {
    "metaDescription": "Win Great Western Trail with cattle deck cycling, station buildings, and hiring order—not slow trail walks.",
    "intro": "Expert Great Western Trail optimizes the cattle deck: trash low-value cows, hire builders early, and deliver at Kansas City when deck average is highest. Station buildings compound every delivery.",
    "quickTips": [
      "Hire the Builder before your second delivery to unlock station tiles.",
      "Trash starter cows with the cattle market action by turn 3.",
      "Deliver when your hand average is 4+ coin value, not when you reach the city.",
      "Take the train shortcut only when it saves two trail spaces worth of hazards."
    ],
    "strategy": [
      "Cattle deck management: cycle deck every three deliveries; keep 6–8 cards with two purple and two blue cows minimum.",
      "Station buildings: Teepee plus Hazard pay for themselves in two deliveries—build before third trip.",
      "Hiring order: Builder first, then Craftsman for station discounts, then Rancher for deck thinning.",
      "Kansas City timing: deliver with full hand at highest average; partial deliveries waste station bonuses.",
      "Trail hazards: pay coin to avoid hazard tiles unless they block opponents' faster routes.",
      "Endgame: four deliveries with full station row beats five rushed deliveries with starter cows."
    ]
  },
  "brass-birmingham": {
    "metaDescription": "Win Brass Birmingham with canal-era networks, cotton loops, and rail era VP tiles—not scattered industries.",
    "intro": "Expert Brass Birmingham wins in the rail era with beer-fueled industry tiles. Canal era builds the network; rail era converts connections to VP. Cotton mills on loops with two linked markets are the core engine.",
    "quickTips": [
      "Build cotton mills on canal loops connecting two markets in era one.",
      "Develop away level-1 industries before rail era to access level-2 tiles.",
      "Use beer from breweries to flip industry tiles at double income.",
      "Claim merchant tiles that match your built industry types."
    ],
    "strategy": [
      "Canal vs rail era: canal places max 10 tiles for network; rail flips them for 4–8 VP each.",
      "Cotton loops: mill plus two market links generates 5 income and sets up rail-era VP.",
      "Industry network: pottery and manufacturer share coal—place both on the same canal branch.",
      "Beer economy: brewery adjacent to flip-ready tiles is worth two extra VP per rail action.",
      "VP tiles: take the 10 VP tile matching your dominant industry before opponents develop into it.",
      "Endgame: 12 VP from flipped tiles plus two merchant bonuses beats income without rail conversion."
    ]
  },
  "ark-nova": {
    "metaDescription": "Win Ark Nova with card pairing, conservation projects, and zoo enclosure synergy—not random animal plays.",
    "intro": "Expert Ark Nova pairs animal cards with matching sponsors and enclosures. Conservation projects are VP bombs timed to break 1–2 rating. The action row punishes wasted slots—plan three actions ahead.",
    "quickTips": [
      "Pair each animal with a sponsor card sharing its tag before playing.",
      "Break rating by 1–2 points to trigger conservation at maximum efficiency.",
      "Build enclosures that match animals in hand, not animals on the board.",
      "Use the X action only when all three slots have high-value plays."
    ],
    "strategy": [
      "Card pairing: reptile sponsor plus reptile animal plus large enclosure scores 12+ VP in two actions.",
      "Conservation projects: time rating break when two projects are affordable—double VP in one round.",
      "Zoo layout: adjacent enclosures with shared icons reduce action cost for repeated tags.",
      "Action row: sponsors and animals on the same turn waste less than splitting across rounds.",
      "Card economy: draw three when hand is empty; discard sponsors only after animal is played.",
      "Endgame: two conservation projects plus full zoo row beats card draw without enclosure synergy."
    ]
  },
  "everdell": {
    "metaDescription": "Win Everdell with seasonal worker curves, card combos, and event timing—not slow city building.",
    "intro": "Expert Everdell front-loads workers in spring and summer, then converts to card plays in fall and winter. Pair production cards with destinations. Basic events are 4 VP—claim them before opponents in summer.",
    "quickTips": [
      "Place four workers by end of summer to maximize fall card plays.",
      "Pair Courthouse with Judge for free critter plays.",
      "Claim basic events in summer when you have the resources ready.",
      "Build a production engine (Farm plus Mine) before playing point cards."
    ],
    "strategy": [
      "Seasonal workers: spring places two, summer places two more, fall plays three cards with zero new workers.",
      "Card combos: School plus University plus Teacher is 6 VP plus draw engine.",
      "Event timing: summer events cost less competition; winter events need prepared resources.",
      "City size: 15 cards is the soft cap—treasury and judge free plays stretch to 18.",
      "Production chain: Farm feeds Ever Tree; Mine funds construction—build both before winter.",
      "Endgame: three events plus 16-card city with production beats a 20-card city without events."
    ]
  },
  "scythe": {
    "metaDescription": "Win Scythe with faction asymmetry, popularity track, and combat timing—not random expansion.",
    "intro": "Expert Scythe maximizes popularity (stars cost less above 11) while racing to six stars. Combat is for denying opponents' star actions, not territory. Each faction has a one-turn power spike—Polania recruits, Saxony builds.",
    "quickTips": [
      "Keep popularity above 11 before placing any star—combat costs drop to 1 coin.",
      "Win combat only to stop an opponent's star action, not for territory.",
      "Upgrade productivity before expanding to a fourth territory.",
      "Take the Produce action with all four workers before building mechs."
    ],
    "strategy": [
      "Faction asymmetry: Polania rush recruits for star four; Saxony build and deploy for star two.",
      "Popularity track: every combat below 11 popularity costs 2 coins—avoid fights until boosted.",
      "Combat timing: attack the turn an opponent would place a star with their mech.",
      "Structure stars: mine, upgrade, recruit, deploy, build—sequence for cheapest star path.",
      "Encounter cards: bottom-row choices that give popularity plus resources beat top-row combat.",
      "Endgame: six stars with popularity 14 beats seven stars at popularity 8 due to coin penalties."
    ]
  },
  "dominion": {
    "metaDescription": "Win Dominion with deck thinning, trashing, and engine tempo—not big money without acceleration.",
    "intro": "Expert Dominion trashes starters by turn 4 and builds a draw engine or terminal-action cluster. Big money caps at 40 VP; engines reach 60+. Chapel or Steward on turn 2 is the standard opener.",
    "quickTips": [
      "Buy Chapel or Steward on turn 2 and trash both Estates and Coppers.",
      "Add one Gold before your third Action card unless engine pieces are available.",
      "Do not buy Victory cards until you can buy Province twice in one shuffle.",
      "Track your deck cycle—engines need 8+ cards drawn per turn."
    ],
    "strategy": [
      "Deck thinning: trash to 13 cards before adding duplicates; each extra Copper costs one VP per cycle.",
      "Trashing: Chapel turn 2 trashes four cards by turn 4—equivalent to skipping two dead draws per shuffle.",
      "Engine vs big money: Village plus Smithy plus Festival needs three Villages before Province rush.",
      "Terminal collision: one terminal per Village; extra Terminals without +Actions stall the engine.",
      "Kingdom analysis: trashing plus draw plus +Buy is an engine; only money attacks is big money.",
      "Endgame: Province plus Duchy in final two turns when deck cycles every turn beats early green."
    ]
  },
  "race-for-the-galaxy": {
    "metaDescription": "Win Race for the Galaxy with role selection, tableau tempo, and military vs develop paths—not passive settling.",
    "intro": "Expert Race for the Galaxy picks a tableau strategy by turn 3: military conquest, production engine, or card draw spam. Role selection is prediction—call Develop when opponents need Explore.",
    "quickTips": [
      "Commit to military or develop by turn 3 based on opening draws.",
      "Call Consume when you have a trade good and opponents lack consume powers.",
      "Settle only when the world completes a tableau combo, not for 1 VP.",
      "Use Explore+5 to dig for a missing tableau piece, not every turn."
    ],
    "strategy": [
      "Role selection: Develop when opponents hold three cards; Explore when they need worlds.",
      "Tableau development: New Sparta plus military worlds is 20 VP in 8 turns.",
      "Military vs develop: military wins with 4+ military worlds; develop wins with 5+ production tags.",
      "Consume timing: call Trade when you hold goods and opponents cannot Consume.",
      "Card economy: keep hand size below 7 to avoid forced discards before Explore.",
      "Endgame: 12 tableau cards with consume combo beats 15 scattered low-value worlds."
    ]
  },
  "res-arcana": {
    "metaDescription": "Win Res Arcana with essence economy, artifact timing, and monument rush—not hoarding essences.",
    "intro": "Expert Res Arcana spends essences every turn—hoarding is wasted tempo. Artifacts break the essence economy; grab Alchemist's Vault or Crystal Earring early. Monuments are the win condition at 10 VP.",
    "quickTips": [
      "Spend all essences each turn—unspent essences are lost actions.",
      "Draft artifacts that produce essences, not one-shot VP.",
      "Race to two monuments before opponents stabilize their engine.",
      "Collect sets of three different essences for the +1 bonus each round."
    ],
    "strategy": [
      "Essence economy: produce 4 essences per turn by round 3; spend on creatures that produce more.",
      "Artifact timing: Vault or Earring on turn 2 accelerates every future turn.",
      "Monument rush: Dragon Monument plus any two 3-cost monuments ends the game at turn 8.",
      "Creature synergy: familiars that reduce essence costs chain into expensive creatures same turn.",
      "Draft denial: take the last gold essence card when opponent needs it for their monument.",
      "Endgame: 10 VP in monuments plus one creature row beats 12 VP with no recurring production."
    ]
  },
  "a-feast-for-odin": {
    "metaDescription": "Win A Feast for Odin with action covering, exploration boards, and feast timing—not unfilled boards.",
    "intro": "Expert A Feast for Odin covers action spaces with upgraded pieces to unlock better actions. Exploration boards are 20+ VP—prioritize over minor upgrades. Feast only when you have orange and red goods ready.",
    "quickTips": [
      "Cover action spaces with upgraded tiles to access the best row actions.",
      "Take exploration boards before buying minor upgrades.",
      "Prepare orange and red goods before taking the feast action.",
      "Place income buildings on the home board before round 6."
    ],
    "strategy": [
      "Action covering: upgrade a tile each round to reach the top action row by round 4.",
      "Exploration boards: Iceland and Greenland are 15–20 VP—claim before opponents exhaust the stack.",
      "Craft items: silver and gold items fill awkward spaces for 3–5 VP each.",
      "Feast timing: feast with three orange and two red goods scores 18 VP plus income boost.",
      "Hunting and whaling: early meat and fish cover home board gaps cheaply.",
      "Endgame: two exploration boards plus full feast beats a covered home board without exploration."
    ]
  },
  "terra-mystica": {
    "metaDescription": "Win Terra Mystica with spade wheel timing, power actions, and network bridges—not isolated dwellings.",
    "intro": "Expert Terra Mystica builds a connected network for endgame scoring. The spade wheel is the tempo engine—cult bonus on spade rounds funds terraforming. Power actions (7 VP for 12 power) are the hidden scoring line.",
    "quickTips": [
      "Build bridges to connect dwellings before upgrading to trading houses.",
      "Take cult bonus on spade wheel rounds to fund terraforming.",
      "Use the 12-power action for 7 VP when power would otherwise be wasted.",
      "Terraform toward the center for endgame network scoring."
    ],
    "strategy": [
      "Terraforming network: each dwelling must connect to two others before endgame scoring.",
      "Spade wheel: plan terraforming for spade rounds—cult bonus pays 3–5 power per spade.",
      "Power actions: burn 12 power for 7 VP in the final round when no terraforming remains.",
      "Faction asymmetry: Witches gain from swamps; Halflings expand cheaply—play to your passive.",
      "Dwelling-to-trading-house ratio: upgrade only when the trading house opens a new network branch.",
      "Endgame: 7 VP power action plus full network beats 10 trading houses without connections."
    ]
  },
  "gaia-project": {
    "metaDescription": "Win Gaia Project with federation engine, planet type conversion, and scoring track timing—not random expansion.",
    "intro": "Expert Gaia Project races the scoring track while building federations. Each federation tile is 2 VP plus a power boost. Terraform to your native planet type for free actions; convert others at a premium.",
    "quickTips": [
      "Form federations of three adjacent buildings for 2 VP plus power boost.",
      "Terraform to your home planet type whenever possible for free actions.",
      "Take the scoring track bonus at 24 and 28—opponents race the same thresholds.",
      "Build mines on grey planets for income, not VP—VP comes from federations."
    ],
    "strategy": [
      "Federation engine: three buildings in a cluster plus federation tile is 6 VP and 3 power.",
      "Planet types: Xenos ignore transformation costs—expand on foreign types aggressively.",
      "Scoring track timing: move to 24 before opponents to claim the 6 VP bonus tile.",
      "Power cycle: spend 4 power for QIC, use QIC for terraforming, terraform for new buildings.",
      "Brainstone: hold power between rounds only when a scoring track bonus is one action away.",
      "Endgame: four federations plus scoring track 30 beats six buildings without federation tiles."
    ]
  },
  "through-the-ages": {
    "metaDescription": "Win Through the Ages with wonder timing, military culture balance, and event deck reads—not neglecting military.",
    "intro": "Expert Through the Ages balances culture generation with military defense. Wonders on Age A and I set tempo. Events punish weak military—keep strength within 2 of the leader or lose culture every round.",
    "quickTips": [
      "Draft Age A wonders that give culture or science, not only resources.",
      "Keep military strength within 2 of the leader every age.",
      "Play events that hurt leaders, not events that hurt you equally.",
      "Replace weak government before Age III—democracy doubles culture output."
    ],
    "strategy": [
      "Wonder timing: Hanging Gardens or Colossus in Age A funds Age I civ cards.",
      "Military vs culture: 2 military actions per age minimum; more if leaders are aggressive.",
      "Event deck: Civil War and Cultural Decline target weak military—stay above average strength.",
      "Science engine: Philosophy plus Code of Laws plus Printing Press is the culture multiplier.",
      "Leader cards: Gandhi for culture, Churchill for military—pick before opponents in Age II.",
      "Endgame: 50 culture with full wonder row beats 60 culture with collapsed military and lost events."
    ]
  },
  "barrage": {
    "metaDescription": "Win Barrage with water flow control, dam placement, and contract fulfillment—not random construction.",
    "intro": "Expert Barrage controls water flow to your dams before opponents. Headwater contracts score early; downstream contracts scale. The management board spot for extra engineers is worth 8 VP over the game.",
    "quickTips": [
      "Place headwater dams first to control flow to downstream placements.",
      "Fulfill contracts matching your dam height—do not build tall without contracts.",
      "Take the management spot that grants an extra engineer in round 2.",
      "Use conduits to redirect opponents' water away from their contracts."
    ],
    "strategy": [
      "Water flow: dams on the same river channel stack—first dam controls all downstream income.",
      "Dam placement: height 3 dams on contracts with bonus VP pay for themselves in two rounds.",
      "Contract fulfillment: match contract color to your technology track for bonus tiles.",
      "Engineer economy: three engineers by round 3 enables simultaneous dam plus conduit actions.",
      "Management board: executive action for 2 VP plus resource beats neutral spots after round 4.",
      "Endgame: four fulfilled contracts plus height-4 dam beats five dams without contract bonuses."
    ]
  },
  "lisboa": {
    "metaDescription": "Win Lisboa with rabelo shipping, clerics track, and scoring tile timing—not scattered city rebuilding.",
    "intro": "Expert Lisboa chains rabelo boats to store deliveries for scoring tiles. Clerics unlock powerful one-time bonuses. The city grid rewards connected buildings—plan your rubble placement for maximum adjacency.",
    "quickTips": [
      "Ship rabelo boats to the store before taking scoring tiles that need goods.",
      "Advance clerics track to the bonus that matches your built city section.",
      "Place rubble to enable future building adjacency, not random clearing.",
      "Take the official action when opponents cannot afford to follow."
    ],
    "strategy": [
      "Rabelo shipping: deliver three goods to the store, then claim the 12 VP scoring tile.",
      "Clerics track: bishop bonus doubles one building score—time for your largest district.",
      "Scoring tiles: take tiles matching your store contents before opponents empty the market.",
      "City rebuilding: connected buildings of the same type score exponentially—plan rubble paths.",
      "Influence: spend wigs on officials only when the action saves two worker placements.",
      "Endgame: three scoring tiles plus full cleric track beats a rebuilt city without store synergy."
    ]
  },
  "anachrony": {
    "metaDescription": "Win Anachrony with paradox management, exosuit breaks, and building row synergy—not wasted time travel.",
    "intro": "Expert Anachrony uses time travel to duplicate high-value actions, not fix mistakes. Exosuit breaks fund worker placement. Paradoxes are acceptable when the duplicated action gains 4+ resources.",
    "quickTips": [
      "Send resources back only to actions worth 4+ resources, not 1-resource fixes.",
      "Break exosuits for worker slots before the worker placement round fills.",
      "Build superprojects that match your building row bonuses.",
      "Accept one paradox per game if it duplicates a superproject action."
    ],
    "strategy": [
      "Time travel paradox: duplicate the water production or mine action, not a generic resource.",
      "Exosuit breaks: two breaks by round 3 gives four workers—standard expert tempo.",
      "Building row: three buildings of one type unlock the row bonus—commit by round 4.",
      "Superproject timing: complete before the timeline advances past your needed resources.",
      "Leader abilities: play to your faction's free time travel or free building break.",
      "Endgame: two superprojects plus full building row beats three superprojects without row bonus."
    ]
  },
  "food-chain-magnate": {
    "metaDescription": "Win Food Chain Magnate with milestone timing, employee hiring order, and pricing strategy—not slow expansion.",
    "intro": "Expert Food Chain Magnate races milestones in the first three rounds. Trainer enables marketing; marketing enables pricing power. The first to 10 restaurants triggers a VP milestone—speed beats efficiency early.",
    "quickTips": [
      "Hire Trainer in round 1 to unlock marketing before opponents.",
      "Claim the 10-restaurant milestone by round 4.",
      "Price burgers at $10 when you have the only supplier in range.",
      "Place restaurants in the center, not the suburbs, for maximum demand."
    ],
    "strategy": [
      "Milestone timing: first Trainer, first 10 restaurants, first $100 revenue—track all three.",
      "Employee hiring: Trainer, then Marketing, then Recruiter for duplicate hires.",
      "Pricing: raise prices when opponents lack suppliers in your neighborhood—$15 burger with monopoly.",
      "Restaurant placement: central map positions serve three neighborhoods; suburbs serve one.",
      "Marketing: permanent demand boost beats temporary campaigns—train marketers early.",
      "Endgame: three milestones plus 15 restaurants beats 20 restaurants without milestones."
    ]
  },
  "mage-knight": {
    "metaDescription": "Win Mage Knight with day-night planning, deck optimization, and fame routing—not combat without purpose.",
    "intro": "Expert Mage Knight plans the full day before moving. Fame is the win condition—route to level 5 and the high-value artifact. Combat only when it yields 3+ fame or blocks a critical tile.",
    "quickTips": [
      "Plan your entire day before the first move—undo is not an option in competition.",
      "Route to the nearest artifact that matches your deck's attack type.",
      "Use night for village influence and spell preparation, not exploration.",
      "Reject cards that do not match your planned route—deck bloat kills tempo."
    ],
    "strategy": [
      "Day/night planning: day for movement and combat; night for leveling and village upgrades.",
      "Deck management: keep 8-card deck with 4 movement and 4 attack by scenario 2.",
      "Fame routing: orcs give 2 fame; fortresses give 4—fortress only with attack 4+ hand.",
      "Combat timing: fight when wounded enemies reduce your damage taken.",
      "Advanced action cards:0 take the movement or attack card matching your planned route in round 1.",
      "Endgame: level 5 plus two artifacts plus one city conquered beats level 6 without artifacts."
    ]
  },
  "patchwork": {
    "metaDescription": "Win Patchwork with button economy, 7x7 bonus timing, and odd-shape placement—not greedy piece grabs.",
    "intro": "Expert Patchwork treats buttons as the real currency—time is secondary. The 7x7 bonus is 7 points; structure your board to claim it by move 12. Take small pieces late to fill gaps, not large pieces for buttons.",
    "quickTips": [
      "Take pieces that net positive buttons (income exceeds cost).",
      "Plan the 7x7 bonus by move 12—it is worth two medium pieces.",
      "Move the neutral token to deny opponents their needed piece shape.",
      "Fill single-hole gaps with 1x1 patches, not by skipping turns."
    ],
    "strategy": [
      "Button economy: piece income minus cost should be positive; leather patch is the baseline.",
      "7x7 bonus: leave a 7-wide rectangle open and fill it with three pieces for the bonus.",
      "Odd shapes: L-pieces and T-pieces fill corners that 2x2 pieces cannot.",
      "Time token: moving ahead for a needed piece is correct when the piece scores 3+ buttons net.",
      "Denial: place the token past the opponent's needed 1x4 piece even if you do not want it.",
      "Endgame: 7x7 bonus plus button income above 8 beats a larger board without the bonus."
    ]
  },
  "cascadia": {
    "metaDescription": "Win Cascadia with habitat scoring pairs, wildlife pattern optimization, and tile drafting—not random placement.",
    "intro": "Expert Cascadia pairs habitat hexes with wildlife scoring cards. Each scoring card rewards a specific pattern—draft tiles that complete your active patterns, not the highest immediate score.",
    "quickTips": [
      "Draft habitat-wildlife pairs that advance your highest-value scoring card.",
      "Complete one scoring pattern fully before starting another.",
      "Place bears in pairs, elk in lines, salmon upstream—match each species' rule.",
      "Deny opponents the habitat tile that completes their scoring pattern."
    ],
    "strategy": [
      "Habitat scoring: four of one terrain type scores 10—commit to two terrain types maximum.",
      "Wildlife patterns: bear pairs need adjacent placement; plan two pairs before drafting bears.",
      "Tile drafting: take the pair that scores on two cards simultaneously over one high card.",
      "Salmon runs: upstream placement chains—start at the river source for maximum length.",
      "Hawk solitaire: isolate hawks with empty hexes between for solo scoring.",
      "Endgame: three completed scoring cards plus habitat bonus beats four partial patterns."
    ]
  },
  "calico": {
    "metaDescription": "Win Calico with pattern tile selection, button economy, and goal quilt completion—not random patching.",
    "intro": "Expert Calico selects pattern tiles that complete two quilt goals simultaneously. Buttons fund tile selection order—being first to pick the tile that completes your 3x3 brown quilt is worth 5 VP.",
    "quickTips": [
      "Draft tiles that progress two quilt goals at once.",
      "Complete the 3x3 same-color quilt for 5 VP before round 4.",
      "Place buttons on tiles that complete pattern lines for income.",
      "Deny opponents the tile color they need for their cat placement."
    ],
    "strategy": [
      "Pattern scoring: three-in-a-row of the same pattern scores 3; plan rows before placing.",
      "Button economy: buttons on completed pattern lines generate income—place on high-value lines.",
      "Goal quilts: brown 3x3 and green 2x2 are the fastest—prioritize by your starting tiles.",
      "Cat placement: cats score 3 VP each when surrounded by correct colors—plan the surround before the cat.",
      "Tile selection: spend buttons to go first when the display has your needed color.",
      "Endgame: three quilt goals plus two cats beats four goals without cat bonuses."
    ]
  },
  "isle-of-skye": {
    "metaDescription": "Win Isle of Skye with tile pricing, scroll selection, and income timing—not overpaying for tiles.",
    "intro": "Expert Isle of Skye sets tile prices to manipulate opponent purchases. Scroll selection in rounds 2, 3, and 4 defines your strategy—pick scrolls that compound, not scatter. Income from whiskey tracks funds expensive tiles.",
    "quickTips": [
      "Price tiles opponents need at $5; price useless tiles at $0 to drain their cash.",
      "Pick scrolls that reward one terrain type, not three different types.",
      "Take the whiskey track bonus before buying expensive tiles in round 4.",
      "Connect lakes and mountains for scroll bonuses, not isolated single tiles."
    ],
    "strategy": [
      "Tile pricing: $5 for tiles opponents need forces them to spend or pass; $0 tiles waste their purchase.",
      "Scroll selection: round 2 scroll defines your terrain—commit and price tiles accordingly.",
      "Income timing: whiskey track at 4+ income funds two $5 tiles per round.",
      "Terrain chains: connected sheep pastures score scroll bonuses—build contiguous, not scattered.",
      "Denial: take the barn or bridge tile even at $0 if it blocks an opponent's connection.",
      "Endgame: three scroll bonuses plus income 5 beats four scrolls without terrain chains."
    ]
  },
  "sagrada": {
    "metaDescription": "Win Sagrada with constraint planning, tool card timing, and die placement order—not random window filling.",
    "intro": "Expert Sagrada plans the full window before placing dice. Tool cards break constraint rules at critical moments. Draft dice that fit two placements, not one perfect placement.",
    "quickTips": [
      "Plan your entire window before placing the first die.",
      "Save tool cards for when a die fits nowhere without them.",
      "Draft dice that satisfy two row and column constraints simultaneously.",
      "Take the initiative token when the pool has your needed color and value."
    ],
    "strategy": [
      "Constraint planning: corners are hardest—place flexible dice in corners first.",
      "Tool cards: use on turn 4–6 when constraints tighten, not turn 1.",
      "Die placement: a die matching two constraints is worth more than a perfect shade match.",
      "Initiative: going first to draft two dice that complete a row beats last-pick shade bonus.",
      "Shade matching: shade bonuses are 2 VP; constraint completion is 4 VP—prioritize constraints.",
      "Endgame: full window with shade bonus beats perfect shades with one empty space."
    ]
  },
  "kingdomino": {
    "metaDescription": "Expert Kingdomino: domino selection order, 5x5 grid crown maximization, and turn-order sacrifice.",
    "intro": "Kingdomino is draft order optimization on a 5x5 grid. Experts sacrifice first pick to get better second domino when crown value difference exceeds 2 points.",
    "quickTips": [
      "Crown count matters more than territory size—2 crowns beats 10 squares.",
      "Take domino with most crowns even if terrain doesn't fit perfectly.",
      "Plan your 5x5 grid before placing—one hole ruins endgame.",
      "Sacrifice first pick when second domino has 3+ more crowns."
    ],
    "strategy": [
      "Selection order sacrifice: if domino #1 has 1 crown and #2 has 4, take #3 first to secure #2—net +2 crowns.",
      "5x5 grid planning: reserve center for flexible terrain; corners for single-terrain dead zones.",
      "Crown density: target 12+ crowns on 5x5; territory size is tiebreaker, crowns win games.",
      "Meeple blocking: when tied for turn order, take domino opponent needs for their crown combo.",
      "Endgame hole prevention: never create unfillable 1x1 gaps—each hole costs ~2 crowns in lost placement."
    ]
  },
  "planet-unknown": {
    "metaDescription": "Win Planet Unknown with sector rotation, polyomino placement, and scoring track commitment—not random tile drops.",
    "intro": "Expert Planet Unknown commits to two scoring tracks by round 2 and rotates sectors to feed them. Polyomino placement covers life track spaces efficiently. Civilization track unlocks powerful one-time bonuses.",
    "quickTips": [
      "Commit to two scoring tracks by round 2—spreading across four tracks scores nothing.",
      "Rotate sectors to place polyominoes on your committed tracks.",
      "Cover life track spaces with L-shaped polyominoes for maximum coverage.",
      "Take civilization bonuses that match your committed tracks."
    ],
    "strategy": [
      "Sector rotation: rotate to align your polyomino with two track spaces simultaneously.",
      "Polyomino placement: T-shapes cover three life spaces; save them for tracks you committed to.",
      "Scoring tracks: water and technology are the highest ceiling—commit early or abandon entirely.",
      "Civilization track: bonuses at 3 and 6 unlock extra rotations—reach 3 by round 3.",
      "Resource conversion: biomass to water when water track is committed; do not hoard.",
      "Endgame: two tracks at 12+ plus civilization 6 beats four tracks at 6."
    ]
  },
  "its-a-wonderful-world": {
    "metaDescription": "Win It's a Wonderful World with draft selection, resource conversion chains, and wonder timing—not hoarding cards.",
    "intro": "Expert It's a Wonderful World builds conversion chains: raw materials to processed to wonders. Draft cards that feed your chain, not highest VP in isolation. Wonders score at game end—complete them by round 4.",
    "quickTips": [
      "Draft cards that complete a conversion chain, not isolated high-VP cards.",
      "Recycle low-value cards to fund wonder construction.",
      "Complete wonders by round 4—they score at game end only if finished.",
      "Deny opponents cards that complete their visible wonder."
    ],
    "strategy": [
      "Draft selection: pick the card that feeds your existing production chain over a standalone 3 VP card.",
      "Resource conversion: stone to steel to wonder is the standard chain—draft quarry and factory together.",
      "Wonder timing: three wonders completed by round 4 scores 15+ VP; partial wonders score zero.",
      "Recycle timing: recycle two 1 VP cards to build a 5 VP wonder—net gain of 3 VP.",
      "Military: military cards deny opponent resources—draft when opponents are one resource from completing.",
      "Endgame: three completed wonders plus production chain beats five incomplete wonders."
    ]
  },
  "solitaire": {
    "metaDescription": "Master Klondike solitaire: empty-column king moves, uncover hidden cards first, and balance tableau builds with foundation runs.",
    "intro": "Klondike solitaire rewards patience and sequencing. The win rate jumps when you treat every empty column as a king landing zone and prioritize flipping face-down cards over rushing aces to the foundation.",
    "quickTips": [
      "Create empty columns only when a king can move there immediately.",
      "Flip hidden tableau cards before building long runs on the same pile.",
      "Move aces to foundations early, but delay 2s and 3s if they block reveals.",
      "Work from the highest blocked cards downward to maximize new flips."
    ],
    "strategy": [
      "Empty columns are your most valuable resource. Never fill one with a non-king just to tidy the board — a king in an empty column unlocks entire stacks.",
      "Prioritize moves that increase face-up card count. A single flip often beats a neat color-alternating build that buries hidden cards.",
      "Recycle the stock with intent. Track how many passes remain and whether buried cards are still reachable before cycling endlessly.",
      "Build longest runs on the tableau pile with the most hidden cards beneath, so future kings have somewhere to land without breaking progress.",
      "When choosing between two legal moves, pick the one that preserves future king slots and keeps red-black flexibility on partial builds."
    ]
  },
  "spider-solitaire": {
    "metaDescription": "Win Spider Solitaire by building same-suit runs, hoarding empty columns, and sequencing moves to expose every hidden card.",
    "intro": "Spider punishes messy builds. In four-suit mode, treat empty columns like gold and only complete suited stacks when doing so opens more face-down cards.",
    "quickTips": [
      "Keep at least one empty column free whenever possible.",
      "Build in-suit before mixing suits on deep stacks.",
      "Break mixed-suit runs only to flip a hidden card or free a king.",
      "Deal from the stock only when no productive tableau move exists."
    ],
    "strategy": [
      "Empty columns multiply mobility. Moving a full king stack into an empty slot often beats incremental same-suit progress that traps kings.",
      "In four-suit Spider, mixed-suit builds are temporary scaffolding. Plan the unmixing path before committing cards to a pile.",
      "Deal timing matters: ten new cards can bury kings. Exhaust high-yield flips and column clears before touching the stock.",
      "Work from the highest incomplete stacks first — buried kings in low piles are the main endgame failure mode.",
      "When two suits compete for the same column, favor the suit with more remaining cards in the deck for completion potential."
    ]
  },
  "freecell": {
    "metaDescription": "FreeCell expert play: treat free cells as gold, plan multi-move sequences backward, and never strand low cards above kings.",
    "intro": "Nearly every FreeCell deal is winnable with correct sequencing. Free cells are temporary storage, not parking lots — four occupied cells choke the board.",
    "quickTips": [
      "Keep at least two free cells open during midgame.",
      "Plan king moves by working backward from the target column.",
      "Clear a column before moving a deep stack across the board.",
      "Build aces to foundations aggressively when cells are tight."
    ],
    "strategy": [
      "Free cells are a budget, not storage. Each occupied cell reduces maximum stack depth you can move by one — treat empty cells as tempo.",
      "Before moving a long sequence, simulate the reverse: which cards must land in cells temporarily, and can you recover them?",
      "Empty columns beat empty cells. A cleared column moves entire king stacks; prioritize column clears over cautious single-card shuffles.",
      "Avoid burying low cards under kings in the tableau. If a 3 sits above a queen stack, solve that inversion before dealing with new builds.",
      "Foundation ascension timing: moving a 5 to foundations may block a needed 4 transfer — count supermove capacity before auto-playing up."
    ]
  },
  "hearts": {
    "metaDescription": "Hearts strategy: pass the 2 of clubs, void clubs early, duck points when opponents shoot the moon, and track the queen of spades.",
    "intro": "Hearts is a trick-avoidance game with a dramatic swing option. Expert play balances bleeding spades, passing danger cards, and recognizing when shooting the moon is viable.",
    "quickTips": [
      "Pass the 2 of clubs to force the lead and control the first trick.",
      "Void clubs early so you cannot win the first trick accidentally.",
      "Hold low spades until the queen has been played or is safe.",
      "Dump point cards on players who are already collecting hearts."
    ],
    "strategy": [
      "Opening lead logic: with the 2 of clubs you choose who eats the first trick. Pass it to the player least likely to dump points on you.",
      "Shoot-the-moon detection: if an opponent takes an early heart and keeps winning tricks, feed them low cards instead of points — or take the moon yourself if you can absorb all 26.",
      "Spade management: leading low spades after the queen is out strips opponents of exit cards. Before the queen appears, never lead spades from length.",
      "Passing strategy by hand strength: pass high hearts and the queen on weak hands; pass low clubs and middle spades on strong avoidance hands.",
      "Endgame counting: with 3 hearts and the queen still out, know exactly who must take the last trick and force the queen onto the leader."
    ]
  },
  "spades": {
    "metaDescription": "Spades bidding and play: count winners honestly, protect nil bids, manage bag penalties, and lead trump to pull opponents' spades.",
    "intro": "Spades is won at the bid table. Accurate trick counting, nil defense, and bag math separate experts from players who swing 2-3 tricks every hand.",
    "quickTips": [
      "Bid one less than your optimistic count when hands are volatile.",
      "Cover partner's nil before chasing your own overtricks.",
      "Track spades played — when they're all out, your side cards become kings.",
      "Avoid bag penalties: sandbag at +9 bags, so bag intentionally only when behind."
    ],
    "strategy": [
      "Accurate bidding is 80% of Spades. Count sure tricks first (aces, protected kings, singleton spades), then add conditional tricks only at 50%+ probability.",
      "Nil defense: when opponents bid nil, lead suits they are void in and avoid feeding them safe exits. Your first duty is setting the nil, not making your bid.",
      "Trump pulling: when you have spade length but are short in a side suit, lead spades early to flush opponents before they cash side winners.",
      "Partnership signaling is limited but real: returning partner's lead suit often means they want a ruff or have length. Don't trump partner's winners.",
      "Bag math at 7-8 bags: sometimes taking a deliberate set is correct if it prevents a 100-point bag penalty that would cost more than the hand loss.",
      "Blind nil and double-nil are tournament weapons — only attempt with ace-heavy short suits and confirmed partner cover."
    ]
  },
  "bridge": {
    "metaDescription": "Bridge expert guide: five-card majors, Stayman, Blackwood, negative doubles, and opening-lead conventions that win IMPs.",
    "intro": "Bridge is a partnership bidding language. Experts agree on system (2/1, Standard American, ACOL) and then win on card-reading, percentage safety plays, and disciplined slam investigation.",
    "quickTips": [
      "Open five-card majors when system allows — it clarifies fits faster.",
      "Use Stayman after 1NT to find major fits without guessing.",
      "Blackwood 4NT asks for aces; Roman Key Card is the modern upgrade.",
      "Lead partner's bid suit unless a passive lead is clearly safer."
    ],
    "strategy": [
      "Bidding system discipline: pick 2/1 Game Forcing or Standard and stick to it. Partnership accidents cost more than clever deviations.",
      "Stayman and transfers after 1NT: 2♣ asks for majors; responder transfers to hide strength. Know your follow-ups to 2NT and invitational ranges.",
      "Negative doubles after overcalls show unbid majors with opening values — they replace the old 'borrow a bid' chaos at the two-level.",
      "Slam bidding: cue-bid controls before Blackwood. Ask for key cards only when you can handle a missing king in a side suit.",
      "Declarer play: count losers before winners. Establish long suits with entries planned backward from the trick you need.",
      "Defense: lead top of sequence vs NT; low from honor vs suit contracts. Signal attitude on partner's lead, count on declarer's."
    ]
  },
  "poker": {
    "metaDescription": "Poker strategy basics: GTO fundamentals, position, pot odds, range construction, and balanced bluff frequencies for Texas Hold'em.",
    "intro": "Modern poker is solved in spots, not in souls. Experts think in ranges, use position to inflate value and bluff, and size bets so their story matches their line.",
    "quickTips": [
      "Play tighter from early position; widen steals from the button.",
      "Calculate pot odds before calling draws — need equity to continue.",
      "Balance value bets with bluffs on scary river cards.",
      "Track bet sizing tells but trust ranges over single hands."
    ],
    "strategy": [
      "GTO basics: defend the big blind at correct frequencies vs opens; don't over-fold to c-bets on dry boards where you have range advantage.",
      "Position is leverage. On the button you close the action — open wider, float more flops, and steal blinds when folds are likely.",
      "Pot odds and implied odds: a flush draw needs ~35% equity to call a half-pot bet; add implied odds only when stacks are deep and villain pays off.",
      "Range construction: your preflop open, 3-bet, and call ranges should be coherent. If you 3-bet only premiums, observant players fold everything else.",
      "Bluff frequency on rivers: if you bet pot for value with top pair+, you need enough bluffs so villain can't fold profitably. Blockers matter — ace of spades on a three-spade board is a better bluff.",
      "Bankroll and table selection beat hero calls. Move down when stressed; game quality matters as much as card skill."
    ]
  },
  "blackjack": {
    "metaDescription": "Blackjack basic strategy, when to double and split, why insurance is -EV, and card counting fundamentals for serious players.",
    "intro": "Blackjack is beatable with perfect basic strategy and optional counting. The house edge shrinks to near zero when you never deviate from the math on hit, stand, double, and split.",
    "quickTips": [
      "Memorize basic strategy — never take insurance.",
      "Always split aces and 8s; never split 10s or 5s.",
      "Double on 11 vs dealer 2-10; on 10 vs 2-9.",
      "Assume the hole card is a 10 unless counting says otherwise."
    ],
    "strategy": [
      "Basic strategy is a complete decision chart derived from billions of simulated hands. Deviation costs roughly 0.5% edge per common mistake.",
      "Soft hands (ace as 11): double soft 17-18 vs dealer 3-6; stand on soft 19+. Treat them as flexible totals, not fixed numbers.",
      "Pair splitting: split 2s and 3s vs weak dealer upcards; never split 4s (8 total is better for doubling). Split 9s vs 2-9 except 7.",
      "Surrender where offered: hard 16 vs 10 and 15 vs 10 are canonical give-up spots that save long-run money.",
      "Hi-Lo counting basics: +1 low cards, -1 high cards, bet spread with true count. Penetration and table rules matter more than genius.",
      "Bankroll discipline: even with an edge, variance is brutal. 200+ max bets in reserve or don't play seriously."
    ]
  },
  "rummy": {
    "metaDescription": "Rummy expert tips: minimize deadwood, extend melds before discarding, read opponent pickups, and time your knock or layoff.",
    "intro": "Rummy rewards players who reduce deadwood while watching the discard pile like a ledger. Every pickup reveals opponent intent; every discard is a gift or a trap.",
    "quickTips": [
      "Prioritize melds that use high deadwood cards first.",
      "Watch what opponents pick — it exposes their meld shape.",
      "Hold middle connectors (6-7-8) for flexible meld extension.",
      "Discard cards that cannot help opponents more than you."
    ],
    "strategy": [
      "Deadwood minimization beats speed. A hand with two small melds and 15 deadwood loses to a slower build that reaches gin.",
      "Discard pile discipline: picking up signals commitment. Only take if the card completes a meld or unlocks two-card flexibility.",
      "Layoff timing in knock rummy: attach to opponent melds only when it drops your deadwood below the knock threshold without helping them go out next turn.",
      "Block discards: if an opponent needs 7s, your 7 is safer in hand than as a discard — but deadwood pressure may force the risk.",
      "Endgame counting: track which ranks are exhausted. Drawing a dead rank is worse than a high deadwood card you can meld."
    ]
  },
  "gin-rummy": {
    "metaDescription": "Gin Rummy strategy: knock at 8-10 deadwood, avoid undercuts, retain middle cards, and read opponent discards for meld shape.",
    "intro": "Gin Rummy is a race to minimal deadwood. Experts knock early when ahead on score and play for gin when the discard pile reveals opponent weakness.",
    "quickTips": [
      "Knock at 8-10 deadwood when opponent's hand looks strong.",
      "Never break a completed meld to knock — undercut risk spikes.",
      "Keep 5-6-7 connectors over isolated face cards.",
      "Discard high deadwood that cannot fit opponent melds."
    ],
    "strategy": [
      "Knock threshold shifts with score: when behind, chase gin; when ahead, knock at 6-7 deadwood to limit opponent gin bonus.",
      "Undercut math: knocking with 9 deadwood risks opponent at 8 or less. Estimate their deadwood from pickups before knocking.",
      "Middle card retention: 4-5-6-7-8 form more meld combinations than 10-J-Q. Face cards are deadwood magnets late.",
      "Discard reading: three consecutive picks in one suit means opponent is committed — deny that suit's key ranks.",
      "Knock vs gin EV: gin pays 25+ bonus; only pursue when deadwood cannot drop below 10 in two draws.",
      "Defensive discards late: when opponent has not knocked through 15+ cards, assume low deadwood and break your own risky extensions."
    ]
  },
  "canasta": {
    "metaDescription": "Canasta strategy: hit 3000 points via natural canastas, manage wild card ratios, freeze the pile, and time your go-out.",
    "intro": "Canasta is meld economy. Winning partnerships balance wild-card discipline, pile control, and the 100-point go-out bonus against opponents still holding cards.",
    "quickTips": [
      "Keep wild ratio at 2:1 or better in every meld.",
      "Freeze the pile with a wild card when opponents are picking aggressively.",
      "Build natural canastas (no wilds) for 500-point bonuses.",
      "Hold back one meldable card so partner can go out on your discard."
    ],
    "strategy": [
      "Opening meld thresholds (50-90-120 by score) dictate tempo. Don't open thin — a failed opening wastes wilds and tempo.",
      "Wild card budget: three wilds in one meld is legal but weakens other melds. Spread wilds to maximize canasta completion count.",
      "Pile freeze is a defensive weapon. A wild on the pile stops opponents from picking up garbage into a 7-card meld.",
      "Black threes block the pile when discarded — use them to kill opponent pickup lines before they complete canastas.",
      "Go-out timing: partner must have at least one meld. Coordinate so one player holds the exit card while the other completes the last canasta.",
      "Defensive discard at end: never discard a card that lets opponent pick up and go out — discard dead cards even if they help their meld shape slightly."
    ]
  },
  "cribbage": {
    "metaDescription": "Cribbage expert play: maximize crib throws, pegging traps with 15s and pairs, count outs during the pegging phase, and balance offense vs defense.",
    "intro": "Cribbage splits into hand evaluation and pegging warfare. Experts throw cards to the crib that help them more than dealer, then peg aggressively for 15s, pairs, and runs.",
    "quickTips": [
      "Throw 5s and pairs to opponent's crib, not your own.",
      "Lead from a pair in pegging to trap a third card.",
      "Count to 31 and 15 during pegging — don't guess.",
      "Keep connectors (6-7-8) when holding for the pegging phase."
    ],
    "strategy": [
      "Crib throw logic: as dealer, throw connected cards (5-6, 7-8) to your crib; as non-dealer, throw disjoint cards and keep 5s away from opponent crib.",
      "Pegging traps: leading a 4 invites 11-for-two (to 15); holding back a 5 after opponent leads 10 sets up 15-2.",
      "Don't break runs in hand for crib unless the run points exceed crib risk. A 6-7-8 run is 3 points pegging insurance.",
      "Position pegging: at 116+, play safe — a go or 31 is worth more than a risky pair.",
      "Muggins: always recount opponent pegging — missed points are free.",
      "Endgame dealer advantage: as dealer you peg second — use last-card advantage to land on 31 or trap opponent at 20."
    ]
  },
  "euchre": {
    "metaDescription": "Euchre strategy: call trump with two bowers, second-seat aggression, going alone at 3+ point leads, and lead trump to pull opponents.",
    "intro": "Euchre is a fast trick-taking game where bowers dominate. Seat position drives bidding aggression — second seat calls most, dealer picks up with support.",
    "quickTips": [
      "Call with two trump including a bower from any seat.",
      "Second seat should call aggressively — pass only garbage.",
      "Go alone when you hold both bowers and ace of trump.",
      "Lead trump early to pull opponents' trump out."
    ],
    "strategy": [
      "Bower hierarchy: right bower is unbeatable; left bower is second trump. Count bowers before calling — one bower plus ace is often enough from second seat.",
      "Second seat aggression: you see one round of passes. Call thin with two trump — waiting lets dealer pick up cheaply.",
      "Going alone: at 8-9 points, alone for 4 is match-winning. Need both bowers or right bower + ace + off-ace.",
      "Trump lead strategy: pull trump when you have length — three or more trump led early empties opponents before you cash aces.",
      "Defensive passing: in first seat, pass marginal hands to let partner call from second with more information.",
      "Stick the dealer: when everyone passes round two, dealer must call — factor this when passing as dealer's left."
    ]
  },
  "uno": {
    "metaDescription": "Uno strategy: hoard Wild and Draw Four cards, time Reverse and Skip chains, track colors, and manage hand size in 4+ player games.",
    "intro": "Uno looks random but rewards hand-size management and action card timing. Experts count colors, save Wilds for lockouts, and never hold Draw Twos when opponents are at one card.",
    "quickTips": [
      "Save Wild Draw Four for opponents with 1-2 cards left.",
      "Match color over number when you have color flexibility.",
      "Play Draw Two before opponents can Uno, not after.",
      "Track which colors opponents cannot match."
    ],
    "strategy": [
      "Hand size is the real life total. Two cards beats twelve — prioritize dumping count over point value until someone hits Uno.",
      "Wild card economy: +4 is your finisher. Using it mid-game on a player with 8 cards wastes the lockout potential.",
      "Color tracking: when an opponent picks up after a color change, note what they couldn't play. Lead back to that color when they're vulnerable.",
      "Action card chains: Skip-Skip or Reverse-Reverse in 2-player equals a Skip. In 4-player, Reverse skips one — count seats before playing.",
      "Defensive hold: keep one card of your dominant color as insurance when opponents have Uno — switching color forces pickup.",
      "Partnership house rules: agree whether stacking Draw cards is allowed; if yes, hoard +2s to escalate on a leader."
    ]
  },
  "phase-10": {
    "metaDescription": "Phase 10 strategy: complete phases early, hoard Skip-Bo cards for leaders, wild timing, and phase order planning across 10 rounds.",
    "intro": "Phase 10 is a race through ten escalating requirements. Experts front-load hard phases when opponents are scattered and weaponize Skip cards against players about to go out.",
    "quickTips": [
      "Complete your phase before laying extra cards — going out matters.",
      "Save Skip cards for the player one phase ahead of you.",
      "Use Wilds on hard phases (7s runs, 9s of one color).",
      "Lay off on opponents' phases to empty hand faster."
    ],
    "strategy": [
      "Phase order planning: phases 6-8 (runs of 7, 9 of one color) are hardest. Draw aggressively early when opponents can't Skip you effectively.",
      "Skip card targeting: skip the player who will complete phase and go out this turn — not the leader in total score unless they're also closest to out.",
      "Wild allocation: one wild completes most phases. Never use wild on phase 1-3 unless it lets you go out same turn.",
      "Layoff strategy: attach to opponent completed phases to dump deadwood — going out with 0 cards beats holding for next phase.",
      "Hand retention between phases: if you complete phase 4 but can't go out, keep cards that start phase 5 to avoid dead draws.",
      "Score pressure: when behind on points, take risks to go out first; when ahead, play safe and force opponents to hold cards."
    ]
  },
  "magic-the-gathering": {
    "metaDescription": "MTG competitive basics: mana curve, card advantage, stack priority, mulligan discipline, and combat math for Constructed and Limited.",
    "intro": "Magic is a resource engine disguised as combat. Experts curve out, trade up on card advantage, hold interaction for lethal threats, and mulligan aggressively for functional hands.",
    "quickTips": [
      "Build a mana curve with most spells at 2-4 mana.",
      "Two-for-one trades (removal + draw) win long games.",
      "Hold instant-speed interaction until it changes the game.",
      "Mulligan hands with no 2-3 drop or wrong color sources."
    ],
    "strategy": [
      "Mana curve theory: aggro peaks at 2 CMC, midrange at 3-4, control at 4+. A missed land drop is often worse than a weak spell.",
      "Card advantage: any draw-two, recursive creature, or planeswalker that sticks generates incremental wins. Don't trade one-for-one when you're ahead on board.",
      "Stack priority: respond at the last moment before resolution. Holding up mana signals countermagic — use that bluff even without the card.",
      "Combat math: double-blocking assigns first strike and trample correctly. Calculate lethal before attacking — don't give free two-for-ones.",
      "Mulligan to 5 in Limited with no plays; to 6 in Constructed with functional curve. London mulligan bottoming requires land-spell balance.",
      "Sideboard planning: bring in hate pieces vs their plan, not random good cards. Cut marginal matchups, not core engine pieces."
    ]
  },
  "yu-gi-oh": {
    "metaDescription": "Yu-Gi-Oh expert play: hand trap timing, combo line efficiency, graveyard as resource, board wipe recovery, and going first vs second.",
    "intro": "Modern Yu-Gi-Oh is a combo game with interaction layers. Experts know their one-card starters, when to Ash Blossom, and how to extend through Nibiru and board breaks.",
    "quickTips": [
      "Memorize your one-card combo lines to maximum board.",
      "Ash Blossom on search effects, not on random draws.",
      "Extend plays through graveyard effects before committing normal summon.",
      "Keep a breaker in hand when going second."
    ],
    "strategy": [
      "Hand trap timing: Ash Blossom stops searches; Infinite Impermanence on key combo starters; Nibiru after 5 summons. Don't waste traps on low-value steps.",
      "Combo efficiency: every card in the line should advance board or extend. Cut dead draws that only work if you already have two names.",
      "Graveyard as resource: many archetypes revive from GY. Know what's live after Called by the Grave and banish interaction.",
      "Going first: aim for omni-negate + disruption + follow-up. Going second: calculate if your board clears theirs plus OTK — if not, play for grind.",
      "Board wipe recovery: Super Polymerization, Kaijus, and follow-up extenders let you play through Dark Ruler No More.",
      "Side deck: Droll vs search decks, board breakers vs combo, hand traps vs going second. Don't side out your engine."
    ]
  },
  "pokemon-tcg": {
    "metaDescription": "Pokemon TCG strategy: prize card math, energy acceleration, bench management, gust effects, and knockout sequencing for competitive play.",
    "intro": "Pokemon TCG is prize racing with resource acceleration. Experts count prizes, manage bench slots, gust weak targets, and sequence knockouts to avoid giving up two prizes.",
    "quickTips": [
      "Count prizes remaining every turn — plan two-KO turns.",
      "Never bench more than you can protect from gust.",
      "Attach energy every turn; acceleration wins races.",
      "Gust (Boss's Orders) weak targets before they evolve."
    ],
    "strategy": [
      "Prize math: standard games are 6 prizes. Plan your knockout route — two triple-KO turns beat steady one-prizers when timed with energy acceleration.",
      "Bench management: five slots fill fast. Basic Pokemon on bench are liabilities if opponent gusts. Evolve or retreat before benching extras.",
      "Energy acceleration: cards like Arceus VSTAR, Koraidon, or Miraidon define meta speed. Attach from deck, discard, or abilities — never rely on one attach per turn.",
      "Gust effects: Boss's Orders and Prime Catcher snipe bench Pokemon. Gust before they evolve into threats or set up energy.",
      "Knockout sequencing: don't KO a one-prize attacker if it lets opponent bring up a two-prize threat for free. Consider passive turns.",
      "Hand disruption vs setup: Mew, Lugia, and Lost Box reward knowing when to Iono at 1-2 prizes vs when to let them whiff."
    ]
  },
  "exploding-kittens": {
    "metaDescription": "Exploding Kittens strategy: hoard Defuse cards, Nope timing, Skip and Attack chains, and deck probability tracking.",
    "intro": "Exploding Kittens is probability management with take-that chaos. Experts count cards, save Defuses for late game, and use Nope to steal tempo on See the Future and Shuffle.",
    "quickTips": [
      "Never waste Defuse early unless you have a backup.",
      "Nope opponent's See the Future — information is power.",
      "Skip and Attack to force opponents to draw more.",
      "Track how many Exploding Kittens remain in the deck."
    ],
    "strategy": [
      "Defuse economy: early Defuse use is acceptable only with two in hand. Late game with one Defuse and thin deck is death.",
      "Nope priority: counter See the Future first, then Favor, then Shuffle. Let minor cards resolve to conserve Nopes.",
      "Skip-Attack chains: Attack forces next player to draw twice; combine with Skip to push draws onto the leader.",
      "Deck counting: with 5 players and 4 kittens left, each draw is ~20% death. Adjust aggression to remaining kittens vs cards.",
      "Streaking and Hairy Potato Cat: use low-value cards to bait Nopes before your real combo.",
      "Endgame positioning: when deck is under 10 cards, hoard Skip and Defuse; force rivals to draw with Attack."
    ]
  },
  "love-letter": {
    "metaDescription": "Love Letter deduction: count remaining ranks, Guard probabilities, Princess discard traps, and endgame card elimination.",
    "intro": "Love Letter is pure deduction in 16 cards. Experts track every played card, calculate Guard odds, and engineer Princess discards when opponents hold Countess.",
    "quickTips": [
      "Track all played cards — the deck is only 16 cards.",
      "Use Guard on players who haven't been targeted yet.",
      "Hold Princess until you can win or force a discard.",
      "Priest reveals — use before Guard when hands are unknown."
    ],
    "strategy": [
      "Card counting: with 16 cards and 2-4 players, knowing 8 played cards makes Guard ~33% per guess. Eliminate impossible targets first.",
      "Guard targeting: aim at players who haven't been guessed — they're more likely to hold high cards opponents avoided checking.",
      "Princess trap: when you hold King or Prince, targeting a player with unknown high card can force Princess discard via Prince.",
      "Countess deduction: if Baron was played and no one died, Countess is in someone's hand paired with King — Priest confirms.",
      "Endgame with 2 players: if 5+ cards are visible, calculate exact remaining distribution before Guard guessing.",
      "Round EV: one token lead means play safe with Handmaid and Priest; when behind, Prince gambles for eliminations."
    ]
  },
  "sushi-go": {
    "metaDescription": "Expert Sushi Go: draft denial, pudding insurance, and maki count optimization.",
    "intro": "Sushi Go is simultaneous draft with denial. Experts track pudding counts, deny opponent maki ties, and value tempura/sashimi pairs over speculative pudding.",
    "quickTips": [
      "Count pudding—whoever has least loses 6 points in 4+ player games.",
      "Take maki to break ties, not to win maki unless you can secure 1st.",
      "Complete tempura pairs before chasing wasabi-nigiri combos.",
      "Deny opponents their obvious 3rd sashimi card."
    ],
    "strategy": [
      "Pudding insurance: in 4-player, ensure you're not last in pudding even if it costs a good card—-6 swing beats +3 from tempura.",
      "Maki denial: when two players tie for maki lead, draft the 3-maki card to break tie even if you don't want maki—denial is +6 swing.",
      "Wasabi-nigiri timing: only chase wasabi if you see 2+ nigiri in the draft; single wasabi is -3 net.",
      "Sashimi completion: opponents' 2nd sashimi is denial priority over your 1st tempura.",
      "Hand prediction: with 3 cards left in hand, opponents' last picks are predictable—deny their known combo piece."
    ]
  },
  "the-mind": {
    "metaDescription": "The Mind telepathy: card spacing signals, opening hand reads, synchronized pauses, and level-by-level rhythm calibration.",
    "intro": "The Mind is silent coordination. Experts develop micro-timing tells — how long to wait between 23 and 31 signals your hand density without breaking the no-communication rule.",
    "quickTips": [
      "Short pause after low cards; longer pause before big jumps.",
      "On level 1, play instantly on 1 and hesitate before 2-3.",
      "Track which numbers have been played — never duplicate.",
      "When stuck, the longest pause holder usually has the next card."
    ],
    "strategy": [
      "Spacing conventions: develop team rhythm — 0.5s per number gap is a common baseline. A hand with 12-13-14 plays in rapid succession; 12-45-78 needs long gaps.",
      "Opening reads: lowest card often plays first with minimal pause. If you hold 3, play quickly; if you hold 67, wait for mid-sequence pauses.",
      "Level scaling: higher levels add cards and lives. Recalibrate timing each level — what worked at level 4 fails at level 8 with denser hands.",
      "Stuck state resolution: when three players pause, the one with the lowest unplayed card in range should break silence. Count played cards to estimate range.",
      "Throwing star use: only on confirmed stuck states, not early frustration. Save for levels 9-12 where density causes deadlock.",
      "Life economics: one mistake costs a life. Conservative play on borderline timing beats aggressive speed that loses life 1."
    ]
  },
  "hanabi": {
    "metaDescription": "Expert Hanabi: clue efficiency, chop line management, and playable card inference from discards.",
    "intro": "Hanabi is information efficiency. Experts maximize clues per point scored and infer playable cards from discard pile and chop line position.",
    "quickTips": [
      "Clue playability before uniqueness—'playable' clues beat 'these are 3s'.",
      "Track chop line: card at chop is discarded next fuse loss.",
      "Conventional hints: left player knows 'newest card is playable' convention.",
      "Never discard if you might have a playable card."
    ],
    "strategy": [
      "Clue efficiency: one clue that makes 2+ cards playable beats two clues on single cards—multi-playable clues are gold.",
      "Chop line management: identify which card hits chop in 1-2 turns; save or play it before fuse loss.",
      "Discard inference: every discard reveals what numbers are exhausted—if two 3s discarded, your 3 is unique and likely playable.",
      "Conventional hints protocol: 'playable' clue on newest card; 'not playable' on older cards—table must agree convention round 1.",
      "Fuse conservation: at fuse 1, only clue playability; never clue color/number without playability confirmation.",
      "Endgame: with deck empty, play without clues—infer from discards and chop position."
    ]
  },
  "star-realms": {
    "metaDescription": "Star Realms deckbuilding: trade vs combat balance, ally factions, base protection, and authority race tempo.",
    "intro": "Star Realms is a lean deckbuilder race to zero authority. Experts balance trade for early economy, pivot to combat when opponent's authority stalls, and exploit faction ally chains.",
    "quickTips": [
      "Buy trade early; shift to combat when deck cycles fast.",
      "Prioritize bases with defense — they stick and generate every turn.",
      "Ally abilities trigger on same-faction cards in one turn.",
      "Scrap weak cards whenever scrap abilities appear."
    ],
    "strategy": [
      "Trade-combat pivot: turns 1-4 favor trade (Scout, Explorer, trade bases). By turn 5-6, combat cards should dominate if opponent authority is below 40.",
      "Faction synergy: Blob and Star Empire reward combat chains; Trade Federation and Machine Cult reward economy and scrapping. Don't mix factions without ally payoffs.",
      "Base protection: outposts must be destroyed before authority damage. A turn buying only combat into an outpost wall wastes damage.",
      "Deck thinning: scrap Explorers and weak Scouts mid-game. A 12-card deck with 6 combat cards cycles twice per turn.",
      "Authority math: 6 damage per turn from turn 7 wins in 3 turns. Calculate if you can close before opponent's next big buy.",
      "Scout rush counter: if opponent buys 4+ Scouts, race authority with bases — they lack damage tempo late."
    ]
  },
  "hero-realms": {
    "metaDescription": "Hero Realms strategy: champion timing, gold curve, faction focus, and health race management in competitive play.",
    "intro": "Hero Realms adds champion combat to deckbuilding. Experts curve gold into champions, focus one or two factions, and time combat for lethal before opponent stabilizes.",
    "quickTips": [
      "Buy gold-producing cards turns 1-3 before expensive champions.",
      "Champions attack immediately — time them for lethal pressure.",
      "Focus one faction for consistent ally triggers.",
      "Heal only when it buys a full extra turn of survival."
    ],
    "strategy": [
      "Gold curve: aim for 4-5 gold by turn 4 to buy champions on curve. A turn with 2 gold buys nothing useful — prioritize gold cards early.",
      "Champion timing: champions attack the turn they're played. Hold a champion in hand if opponent has no guard until you can pair with action cards for lethal.",
      "Faction focus: mixing all five factions dilutes ally bonuses. Pick two complementary factions (e.g., Cleric + Fighter for heal and damage).",
      "Health race: at 15 health with opponent at 25, you must be the aggressor. Defensive buys lose the race even if they feel safe.",
      "Guard and stun: opponent champions with guard block your champions. Buy stun or direct damage to clear guards before champion attacks.",
      "Deck cycling: thin starter cards with scrap abilities. A 10-card deck sees your champion every turn."
    ]
  },
  "clank": {
    "metaDescription": "Clank deckbuilding: noise management, dragon attack timing, market purchases, and dungeon depth risk/reward.",
    "intro": "Clank is push-your-luck dungeon diving. Experts buy movement and skill early, manage clank noise, and time artifact retrieval before the dragon wakes.",
    "quickTips": [
      "Buy movement and skill before heavy clank cards.",
      "Retrieve artifacts before dragon attacks escalate.",
      "Remove clank cubes when market offers boots or skill.",
      "Depth rewards points but increases dragon damage risk."
    ],
    "strategy": [
      "Clank noise budget: every clank card adds dragon damage potential. Keep clank below 8 cubes until you're ready to exit with an artifact.",
      "Dragon attack timing: attacks happen on dragon card reveals. Track clank in the bag — more clank means higher hit probability on your color.",
      "Market efficiency: boots and skill are tempo; swords and gold are situational. Buy movement to reach artifacts before opponents.",
      "Depth risk: level 3 artifacts score more but require deeper clank investment. Go deep only with teleport or heavy movement.",
      "Exit timing: retrieve artifact and head to surface before second major dragon attack. Surface scoring requires surviving the final attack.",
      "Monkey idol and minor artifacts: sometimes a fast minor artifact outscores a slow major when dragon is aggressive."
    ]
  },
  "skip-bo": {
    "metaDescription": "Skip-Bo strategy: stock pile priority, build pile sequencing, discard pile management, and Skip-Bo wild timing.",
    "intro": "Skip-Bo is a solitaire-style race. Experts empty their stock pile first, use Skip-Bo wilds to bridge gaps, and organize discard piles for multi-card turns.",
    "quickTips": [
      "Always prioritize playing from your stock pile.",
      "Use Skip-Bo cards to fill sequence gaps on build piles.",
      "Organize discard piles so you can chain multiple plays.",
      "Block opponents by building to 12 when they need low numbers."
    ],
    "strategy": [
      "Stock pile priority: every card from stock advances win condition. Discard pile plays are setup — never play from discard when stock has a legal play.",
      "Skip-Bo wild timing: use wilds to complete a build pile to 12 and clear it, or to unblock stock when the next stock card is unreachable.",
      "Discard organization: keep discard piles in ascending usable order. Three organized piles enable 5+ card turns.",
      "Build pile awareness: four build piles mean four sequences. Fill gaps opponents need — if their stock is likely 7 and build is at 6, play 7 elsewhere if legal.",
      "Hand management: draw to 5 every turn. Empty hand before ending turn when possible for maximum options next draw.",
      "Endgame race: when stock is under 5, play aggressively from hand even if discard setup suffers — speed beats optimization."
    ]
  },
  "dutch-blitz": {
    "metaDescription": "Dutch Blitz speed strategy: blitz pile priority, post pile management, three-card hand cycling, and call discipline.",
    "intro": "Dutch Blitz is speed solitaire racing. Experts clear their blitz pile first, cycle the three-card hand efficiently, and only call Blitz when the pile is truly empty.",
    "quickTips": [
      "Play from blitz pile before post piles or hand.",
      "Cycle three cards from hand — never hold waiting for perfect.",
      "Play any legal card immediately — speed beats planning.",
      "Call Blitz only when blitz pile is completely empty."
    ],
    "strategy": [
      "Blitz pile priority: every blitz card played is -1 toward victory. Post piles are staging — play blitz whenever legal even if post setup is prettier.",
      "Hand cycling: draw three, play any legal, repeat. Don't save a 7 in hand hoping for 8 on blitz when a post pile needs it now.",
      "Post pile management: four post piles give flexibility. Start new piles with low cards; build up to free stuck blitz cards.",
      "Shared Dutch piles: anyone can play 1-10 in center. Watch opponents' speed — if they're stuck, your blitz 9 might sit while you help them by playing 8 on Dutch.",
      "Call discipline: premature Blitz call costs -2. Verify blitz pile is empty and no legal play exists before calling.",
      "Physical technique: one-hand play, card positioning, and minimal reach distance matter at competitive speed."
    ]
  },
  "coup": {
    "metaDescription": "Coup bluffing strategy: challenge timing, action credibility, exchange value, and endgame influence counting.",
    "intro": "Coup is social deduction with bluffing. Experts vary their tells, challenge when odds favor it, and count remaining influence to know when a coup wins.",
    "quickTips": [
      "Bluff ambassador and assassin early — they're hard to disprove.",
      "Challenge when someone claims a third duke in a 3-player game.",
      "Exchange with ambassador when deck composition is unknown.",
      "Coup when opponent is at 1 influence — don't give them time."
    ],
    "strategy": [
      "Challenge EV: challenge when probability opponent lacks the role exceeds 50%. Three players, two dukes claimed — third duke claim is likely bluff.",
      "Bluff credibility: if you challenged last turn and were wrong, bluff again — opponents hesitate to double-challenge.",
      "Action priority: foreign aid is safe but slow. Assassinate removes influence; steal shifts tempo. Mix actions so your pattern isn't readable.",
      "Exchange value: ambassador exchange is strongest early when deck is full. Late game, exchange risks drawing revealed cards.",
      "Endgame counting: with 4 influence left in game (2 players at 2), coup is lethal. Force blocks that waste actions.",
      "Contessa defense: claiming contessa against assassinate is pure bluff or truth — track assassin eliminations to know if contessa remains."
    ]
  },
  "the-crew": {
    "metaDescription": "Expert The Crew: task assignment by hand strength, trump conservation, and communication constraint exploitation.",
    "intro": "The Crew is trick-taking cooperation with limited communication. Experts assign tasks by inferred hand strength and conserve trumps for task completion.",
    "quickTips": [
      "Strongest hand takes hardest task.",
      "Conserve trump for your own task tricks.",
      "Lead low when you want to lose the trick.",
      "Communication: one card reveal must be permanent signal."
    ],
    "strategy": [
      "Task assignment: player with most cards in suit X takes task requiring suit X—count dealt cards per suit at start.",
      "Trump conservation: never trump a trick you can lose—trumps are scarce and needed for your own task.",
      "Lead signaling: lead your task suit when you want partner to win; lead off-suit when you want to lose.",
      "Communication optimization: reveal card that permanently signals your task suit or needed suit—never reveal a card you'll play anyway.",
      "Task ordering: complete easy tasks (low cards) first to free communication; hard tasks (10, A) last when trump is conserved.",
      "Rocket timing: use rocket only on your own task trick or to save partner's critical task—rocket on random trick wastes win condition."
    ]
  },
  "yahtzee": {
    "metaDescription": "Yahtzee strategy: upper section bonus pursuit, Yahtzee bonus timing, category sacrifice, and expected value on rerolls.",
    "intro": "Yahtzee is expected-value dice allocation. Experts chase the 35-point upper bonus, hold Yahtzee pairs for the 100-point bonus, and know when to scratch a category versus chase a long shot.",
    "quickTips": [
      "Aim for upper section bonus — 63+ points from aces through sixes.",
      "Hold all matching dice when chasing Yahtzee after first match.",
      "Scratch ones early if you cannot reach upper bonus via aces.",
      "Full house and straights are safer mid-game scores than Yahtzee gambles."
    ],
    "strategy": [
      "Upper bonus math: you need 63 points from six categories — average 3.5 per die slot. Prioritize 4+ of a kind in upper section over lower section duplicates.",
      "Yahtzee bonus: first Yahtzee scores 50; each additional scores 100. After one Yahtzee, never scratch Yahtzee category — reroll anything for second Yahtzee.",
      "Category sacrifice: late game, scratch the category hardest to fill (often ones or twos) rather than wasting a good roll on a filled slot.",
      "Reroll EV: with 2-2-3-4-6 on first roll chasing large straight, keep 3-4 and roll three dice — two ways to complete vs keeping 2-2.",
      "Chance category: use as overflow when upper is maxed and lower needs a scratch. A 28-point chance beats a speculative full house attempt.",
      "Opponent psychology in head-to-head: when behind, chase Yahtzee and large straight; when ahead, lock safe 25-point full houses."
    ]
  },
  "farkle": {
    "metaDescription": "Farkle push-your-luck: bank at 300-400 points, hot dice streaks, six-dice 1500 threshold, and risk by score deficit.",
    "intro": "Farkle rewards banking discipline. Experts bank at 300-400 when ahead, push hot dice (all six scoring) aggressively, and scale risk to points behind.",
    "quickTips": [
      "Bank at 300-400 when you have a lead.",
      "Hot dice (all six score) — keep rolling unless match point.",
      "Three 1s is 1000 — always bank after unless far behind.",
      "Never Farkle on first roll with a single 5 — bank 50 and pass."
    ],
    "strategy": [
      "Banking threshold: 300 points on a turn is standard safe exit. At 400+ with lead, bank — opponent needs your Farkle to catch up.",
      "Hot dice extension: when all six dice score, you roll again with six fresh dice. This is where 2000+ turn potential lives — push when behind.",
      "Risk scaling: behind by 1000+, roll with 2 dice left at 250 on turn. Ahead by 500, bank at 300 with 3 dice remaining.",
      "Scoring combos: three 1s (1000) > three 2s (200). Keep 1s and 5s across rolls — they're the only singles that score.",
      "Opening roll strategy: if first roll scores nothing, turn ends — some house rules allow 3 Farkle losses. Know your variant.",
      "Endgame: at 9500+ (500 to win), bank at 200. One Farkle from victory is the classic mistake."
    ]
  },
  "bunco": {
    "metaDescription": "Bunco strategy: round target numbers, head table pressure, partnership switching awareness, and scoring tempo in social play.",
    "intro": "Bunco is a social dice party game where each round targets a different number (ones, then twos, etc.). Experts roll fast, track round numbers, and maximize Bunco bonuses.",
    "quickTips": [
      "Roll quickly — speed keeps table rhythm and reduces overthinking.",
      "Call Bunco immediately when all three dice match the round number.",
      "Track which round number is active — ones round 1, twos round 2.",
      "At head table, every point matters for table rotation."
    ],
    "strategy": [
      "Round number focus: in round 4, only fours score. Don't celebrate 5s or 6s — they're worthless until the next round.",
      "Bunco bonus: three of the round number scores 21 (or house rule 5). Call it instantly — delayed calls cause disputes.",
      "Head table dynamics: winning head table moves you up; losing moves down. Play slightly more conservatively at head table when one point from rotation.",
      "Partnership awareness: you switch partners each round. Help new partners with clear calls and fast dice passing.",
      "Scoring accumulation: 25 wins is typical match length. Consistency across 6 rounds beats one lucky Bunco.",
      "Social tempo: Bunco is won by attendance and fun — but competitive players track win rate at head table over multiple sessions."
    ]
  },
  "liars-dice": {
    "metaDescription": "Liar's Dice bidding: probability calculation, late-game bluff escalation, wild ace counting, and challenge timing.",
    "intro": "Liar's Dice is poker with dice cups. Experts count visible dice, calculate binomial odds on bids, and escalate bluffs when cups empty.",
    "quickTips": [
      "Count all visible dice before every bid.",
      "Aces are wild — factor them into every probability.",
      "Challenge when bid exceeds expected value by 2+.",
      "Late game: fewer dice means bids must drop — bluff the opposite."
    ],
    "strategy": [
      "Probability math: with 30 dice in play and 5 players, expected count of any face is ~5. A bid of 12 fives needs aces and bluffs to be credible.",
      "Ace wild counting: aces count as any face. Bidding fives when you hold three aces is strong — they satisfy fives bids.",
      "Challenge threshold: challenge when bid > visible count + expected hidden + 2. Early challenges waste dice; late challenges are survival.",
      "Bid escalation: each bid must raise quantity or face. Jumping quantity by 2 signals strength or desperation — read cup sizes.",
      "Endgame bluffing: with 2 dice left, bid aggressively on your highest pair. Opponents often challenge incorrectly on 3-of-a-face bids.",
      "Palifico and special rules: when aces aren't wild, recalculate entirely — ace bids become information bids."
    ]
  },
  "shut-the-box": {
    "metaDescription": "Shut the Box strategy: tile elimination order, 7-first openings, high tile priority, and expected value on two-dice sums.",
    "intro": "Shut the Box is solo probability optimization. Experts open with 7 (highest two-dice probability), prioritize high tiles, and plan dual-tile combinations before rolling.",
    "quickTips": [
      "Opening roll: 7 is most likely sum (6/36) — plan 3-4 or 2-5 combos.",
      "Shut high tiles (9, 8, 7) early when sums allow.",
      "Leave flexible low tiles (1-2-3) for late rolls.",
      "If 7, 8, 9 are shut, even low rolls can end the game."
    ],
    "strategy": [
      "Probability table: 7 appears in 6/36 rolls, 6 and 8 in 5/36, 2 and 12 in 1/36. Plan tile pairs matching high-probability sums.",
      "High tile priority: shutting 9 early removes the hardest single tile. A roll of 9 (4-5, 3-6, 2-7 invalid if 7 shut) frees big numbers.",
      "Flexible endgame: keep 1, 2, 3 up as long as possible. Almost any roll 3-10 can use small tiles in combination.",
      "Single tile vs pair: rolling 6 can shut 6 alone or 1+5, 2+4. Prefer pairs that preserve high singles only when highs are already shut.",
      "Multiplayer scoring: lowest remaining tile sum wins. Shutting many tiles beats leaving one high tile.",
      "Variant awareness: some rules require exact shut — then preserve 1 for snake eyes (1+1) endgame insurance."
    ]
  },
  "qwixx": {
    "metaDescription": "Qwixx strategy: color locking decisions, penalty avoidance, cross-off priority by die position, and passive vs active scoring.",
    "intro": "Qwixx is simultaneous dice selection with color locking. Experts lock colors strategically to deny opponents, minimize X penalties, and prioritize high-value cross-offs before locks.",
    "quickTips": [
      "Lock a color when opponents need that row more than you.",
      "Avoid penalties — each X costs 5 points at game end.",
      "Cross off rightmost available number when colors are equal value.",
      "White dice sum helps everyone — use it before opponents when ahead."
    ],
    "strategy": [
      "Color locking: locking ends that color for all players and gives the locker +2 (or +1 in some editions). Lock when your row is advanced and opponents have more to gain.",
      "Penalty avoidance: you get 4 Xs before elimination. Each unused cross opportunity costs potential; each X costs 5. Never skip a free white-dice cross unless it helps opponent more.",
      "Row priority: red/yellow ascend (2-12), blue/green descend (12-2). Cross the extreme ends first — 2 on red and 12 on blue are hardest to reach later.",
      "White dice sharing: the active player must use one die; white sum is available to all. Cross your row on opponents' turns when white fits.",
      "Lock timing: lock red at 2-3-4-5-6 crossed if opponents have 2-3 red only — they lose the row entirely.",
      "Endgame: count remaining crosses needed for bonus boxes. A row bonus (5+ crosses) is worth more than one penalty risk."
    ]
  },
  "qwinto": {
    "metaDescription": "Qwinto strategy: star bonuses on five-of-a-kind rows, column completion, color row timing, and penalty X management.",
    "intro": "Qwinto extends Qwixx with columns and star bonuses. Experts complete columns for multipliers, chase five-in-a-row stars, and coordinate color rows across three orientations.",
    "quickTips": [
      "Five crosses in one row earns a star — prioritize nearly-complete rows.",
      "Complete columns for bonus points before locking colors.",
      "Use white dice on opponents' turns when your row fits.",
      "Track penalty Xs — four mistakes ends your game."
    ],
    "strategy": [
      "Star bonus: five crosses in a single color row scores a star (typically 2 points). Push one row to 4 crosses early, then complete on any matching roll.",
      "Column completion: three colors cross in each column. Completing a column scores bonus — plan crosses so columns fill evenly.",
      "Color row asymmetry: like Qwixx, red/yellow ascend and blue/green descend. Stars are easier on short rows if you start extremes early.",
      "White dice opportunism: cross on other players' turns without using your active roll. This is free progress — never skip a white cross on your color.",
      "Lock decision: Qwinto locks are less punishing than Qwixx but still deny opponents. Lock when you have star + column bonus secured.",
      "Penalty management: one X per impossible cross attempt. Don't gamble on low-probability crosses when you have 3 Xs."
    ]
  },
  "cant-stop": {
    "metaDescription": "Can't Stop strategy: column commitment thresholds, bust probability math, stop at three markers, and opponent column denial.",
    "intro": "Can't Stop is pure push-your-luck with column commitment. Experts stop at three markers on multiple columns, calculate bust odds, and block opponents' near-complete columns.",
    "quickTips": [
      "Spread markers across 2-3 columns early — don't commit to one.",
      "Stop when any column reaches 3 markers unless odds favor continuing.",
      "Block opponents by starting their near-complete column numbers.",
      "Bust odds rise sharply after 4+ rolls in a turn."
    ],
    "strategy": [
      "Column commitment: you need 3 markers to lock a column. Spreading 2-2-2 across three columns is safer than 4-0-0 on one.",
      "Bust probability: each roll, you must hit an active column number. With 3 active columns (6 numbers), bust chance on any roll is ~50%. After 5 rolls, bust is likely.",
      "Stop timing: standard expert stop is after placing 3 markers total across columns, or when one column hits 3 markers. Greed past this loses more than it gains.",
      "Opponent denial: if opponent has 2 markers on 10, start column 10 yourself — if you bust, their progress stalls when you can't continue that column.",
      "Number selection: 6, 7, 8 are most probable sums. Prioritize these columns for faster marker accumulation.",
      "Endgame: when an opponent is one marker from winning, take maximum risk on your turn — conservative play guarantees their win."
    ]
  },
  "king-of-tokyo": {
    "metaDescription": "King of Tokyo strategy: Tokyo city control, points vs claws, heal timing, evolve vs energy, and king of the hill combat.",
    "intro": "King of Tokyo is king-of-the-hill with dice. Experts balance staying in Tokyo for points against claw damage, evolve for late-game power, and know when to yield Tokyo to heal.",
    "quickTips": [
      "Tokyo city: +2 points per turn but all opponents hit you.",
      "Leave Tokyo voluntarily when below half health unless winning on points.",
      "Three claws = 1 damage to all outside Tokyo; in Tokyo, all hit you.",
      "Evolve early for card advantage; points path needs Tokyo time."
    ],
    "strategy": [
      "Tokyo city economics: entering Tokyo earns 2 points immediately + 2 per turn inside. The cost is every claw rolled by anyone damages you. Stay only with 8+ health or lethal point lead.",
      "Points vs claws victory: 20 stars wins regardless of health. A player at 16 stars should prioritize hearts and Tokyo over claws.",
      "Heal timing: heal when at 4-5 health outside Tokyo. Inside Tokyo at low health, yield the city — re-entry gives 2 points and resets targeting.",
      "Evolve strategy: energy on evolution cards scales late game. Early evolutions (stretch goal, parasite) compound; don't spend all energy on single-use cards.",
      "Claw pressure: three claws forces opponents to heal or die. When you have claw mutations, stay out of Tokyo and let others fight inside.",
      "King of the hill: when two players contest Tokyo, third player claws freely. Stay out until one is eliminated or weakened."
    ]
  },
  "zombie-dice": {
    "metaDescription": "Zombie Dice push-your-luck: bank at 3 brains, shotgun wound counting, red vs green die selection, and 13-brain win race.",
    "intro": "Zombie Dice is fast push-your-luck. Experts bank at 3 brains, track shotgun blasts, and understand that red dice have 3 feet and 1 brain — green dice favor continuing.",
    "quickTips": [
      "Bank at 3 brains unless you have 0 shotguns.",
      "Stop immediately at 2 shotguns — next blast ends your turn with 0.",
      "Red dice from the cup are dangerous — expect feet and blasts.",
      "Green dice are safe to push — 2 brains per die possible."
    ],
    "strategy": [
      "Bank at 3 brains: expected value of rolling again with 1 shotgun and mixed dice is negative. Three brains is the standard expert bank.",
      "Shotgun tracking: 2 shotguns means 33%+ bust on next roll if cup has red dice. Always bank at 2 shotguns regardless of brain count.",
      "Die color probability: green = 3 brains, 2 feet, 1 blast per 6 sides; yellow = 2/2/2; red = 1/2/3. Know what's left in the cup.",
      "Cup management: after rolling, set aside feet and shotguns, reroll only brain dice plus 3 new from cup. Fewer dice in cup = more variance.",
      "Race to 13: when opponent has 10+ brains, push to 4 brains on a turn if you have 0-1 shotguns — conservative play loses the race.",
      "First player advantage: going first wins ~5% more games. Push slightly harder on opening turns."
    ]
  },
  "roll-for-the-galaxy": {
    "metaDescription": "Roll for the Galaxy strategy: dice allocation phases, develop vs settle vs explore, purple dice flexibility, and tableau engine building.",
    "intro": "Roll for the Galaxy is dice worker placement. Experts allocate dice to phases they can win, build consume-produce engines, and use purple dice to fill gaps.",
    "quickTips": [
      "Call phases you can staff with dice — winning phase matters.",
      "Develop worlds early for permanent dice discounts.",
      "Settle consumes dice but scores points — time it with produce.",
      "Purple dice (wild) are premium — save for critical phase calls."
    ],
    "strategy": [
      "Phase selection: you only execute phases you call or others call. Put dice on phases you want AND can win — empty calls waste dice.",
      "Develop vs settle: develop adds permanent worlds (more dice slots); settle scores immediate points. Engine builders develop first; rush strategies settle.",
      "Explore for credit and tiles: explore when you need new world tiles or credit for expensive developments. Don't explore when tableau is full.",
      "Consume-produce cycles: produce fills goods; consume trades goods for cards and points. A tableau with 3+ consume powers is an engine.",
      "Dice cup management: returned dice go to cup. Worlds that keep dice off phases (permanent assignment) reduce flexibility — balance.",
      "Shipping and bonuses: shipping goods scores points. Combine with trade world powers for endgame point explosions."
    ]
  },
  "dice-throne": {
    "metaDescription": "Dice Throne combat: status effect timing, card-dice synergies, offensive vs defensive form, and CP economy for ability cards.",
    "intro": "Dice Throne is hero combat with dice and cards. Experts roll for their hero's combat tree, spend CP on timing cards, and chain status effects for burst damage.",
    "quickTips": [
      "Learn your hero's combat tree — know all symbol combinations.",
      "Spend CP on cards that enhance your best die faces.",
      "Apply status effects before big damage turns.",
      "Defensive form when low health; offensive when ahead."
    ],
    "strategy": [
      "Combat tree mastery: each hero has unique faces (sword, heart, etc.). Know which combinations trigger main abilities vs minor effects.",
      "CP economy: gain CP from rolls and cards. Spend on enhance cards that add symbols to your roll — timing enhance before roll vs after matters.",
      "Status effect chains: stun prevents defensive rolls; poison ticks damage. Apply stun before your big sword turn.",
      "Defensive form: many heroes have defensive stance reducing damage. Switch when below 15 HP or facing OTK combo.",
      "Card-dice synergy: throne cards modify dice. Hold cards that reroll or add symbols for critical combo turns.",
      "Matchup knowledge: some heroes counter others (range vs melee). Draft heroes that beat opponent's weakness."
    ]
  },
  "las-vegas": {
    "metaDescription": "Las Vegas dice game: tie-breaking bill placement, casino majority control, slot machine timing, and six-round scoring strategy.",
    "intro": "Las Vegas is area majority with dice. Experts place bills to break ties in their favor, contest high-value casinos, and spread dice when opponents cluster.",
    "quickTips": [
      "Ties go to the player with the higher bill — save big bills for contested casinos.",
      "Spread dice across casinos when opponents overcommit to one.",
      "High-number casinos (9-12) are worth more — contest them early.",
      "Slot machine dice are wild — use them on your weakest casino."
    ],
    "strategy": [
      "Tie-breaking with bills: when dice totals tie, highest bill wins. A $100,000 bill on a 2-dice casino beats opponent's 3 dice with no bill.",
      "Casino value: casinos pay by die face value. Casino 12 pays 12 per winning die — one die there can beat three dice at casino 4.",
      "Spread vs concentrate: concentrate when you have majority; spread when opponent has one casino locked to contest elsewhere.",
      "Slot machine timing: the slot die matches any number. Place it where you're one die short of majority or to break a tie.",
      "Bill economy: you receive limited bills per round. Don't waste $100k on a casino you've already won — save for tie fights.",
      "Six-round arc: early rounds establish presence; rounds 4-6 spend bills aggressively on contested majors."
    ]
  },
  "thats-pretty-clever": {
    "metaDescription": "That's Pretty Clever (Ganz schön clever): color chain bonuses, silver tray timing, reroll economy, and passive color scoring.",
    "intro": "That's Pretty Clever is multiplayer solitaire with interactive passive bonuses. Experts chain color completions for bonuses, time silver tray placements, and manage three rerolls per turn.",
    "quickTips": [
      "Complete color chains for bonus actions — yellow unlocks blue, etc.",
      "Silver tray scores multiply — fill it before endgame.",
      "Reroll wisely — you only get three per turn.",
      "Passive colors score on opponents' turns — set them up early."
    ],
    "strategy": [
      "Color chain bonuses: completing yellow gives bonus marking on blue; blue unlocks green chain. Plan completion order for maximum chain length.",
      "Silver tray (platinum in expansion): scores endgame multiplier. Mark silver early — empty silver tray is lost points.",
      "Reroll economy: three rerolls per turn. Use first reroll freely; save second and third for high-value color marks.",
      "Passive scoring: when you mark green, opponents may score on their turn if they have green marks. Mark passive colors opponents haven't started.",
      "Number selection priority: orange (sum) and purple (single) are independent; blue/green/yellow chain — prioritize chain colors first.",
      "Fox bonus: the fox scores unused dice pips. Reroll low pips if fox is your best remaining mark."
    ]
  },
  "tenzi": {
    "metaDescription": "Tenzi speed dice: pattern recognition, physical rolling technique, three-of-a-kind staging, and variant strategy for Tenzi Tower.",
    "intro": "Tenzi is pure speed — all ten dice showing one number. Experts use cup shaking technique, stage partial matches, and pick target numbers based on first roll.",
    "quickTips": [
      "Pick your target number from the first roll's majority.",
      "Keep matching dice aside — only reroll non-matches.",
      "Shake dice in cup flat, not stacked, for faster settles.",
      "Call Tenzi only when all ten show the same face."
    ],
    "strategy": [
      "Target selection: on first roll, if you have three 4s, commit to 4s — switching numbers mid-race wastes rolls.",
      "Staging technique: set aside matches immediately. Rerolling 7 dice is slower than rerolling 4 twice.",
      "Physical technique: flat cup shake with wrist snap settles dice faster than vertical shaking. Competitive Tenzi is partly ergonomics.",
      "Pattern recognition: experienced players read partial results without counting — train visual recognition of 6+ matches.",
      "Tenzi Tower variant: stack matching dice — stability matters. Slower shakes prevent tower collapse.",
      "Split variant (80zi): two sets of 5 matching — solve easier number first, then harder."
    ]
  },
  "perudo": {
    "metaDescription": "Perudo (Liar's Dice) bidding escalation, calza challenges, palifico rounds, and cup reading for bluff detection.",
    "intro": "Perudo is Liar's Dice with calza (exact bid) challenges and palifico special rounds. Experts escalate bids mathematically and call Dudo when probability breaks.",
    "quickTips": [
      "First bid should reflect your hand plus expected table average.",
      "Calza when you're confident the count is exact — gain a die back.",
      "Palifico: aces are not wild — recalculate all odds.",
      "Call Dudo when bid exceeds reasonable probability by 2+."
    ],
    "strategy": [
      "Bid escalation math: each bid raises quantity or face value. Jumping quantity by 1 is safe; jumping by 2 signals strength or bluff.",
      "Calza reward: calling exact bid and being right returns a die. Use when you hold exactly the bid count — rare but powerful.",
      "Palifico round: when you reach one die, declare palifico — aces lose wild status. Bid your actual face, not aces as wild.",
      "Cup reading: watch how confidently opponents bid. Hesitation before bid often means weak hand; instant high bid means strength or bluff.",
      "Early elimination: lose dice aggressively by challenging correct bids when opponent pattern-reads you. Vary your bid style.",
      "Endgame one-die: bid your actual face at quantity 1-2. Bluffing with one die is obvious — truth is often optimal."
    ]
  },
  "strike": {
    "metaDescription": "Strike dice game: matching vs taking dice, risk when bowl is full, chain reactions, and X elimination management.",
    "intro": "Strike is a press-your-luck dice bowl game. Experts match dice to take them from the bowl, avoid overflow elimination, and chain matches for momentum.",
    "quickTips": [
      "Match bowl dice to take them — empty the bowl to win.",
      "Stop before bowl overflows — you get an X.",
      "Four Xs eliminates you from the round.",
      "Chain matches when multiple dice show your number."
    ],
    "strategy": [
      "Match vs take: roll your dice, match any in the bowl, remove matched dice to your zone. First to empty bowl wins round.",
      "Overflow risk: if you can't match and bowl is nearly full, stop rolling. An X is worse than losing tempo.",
      "X management: four Xs eliminates you for the round. At 3 Xs, only roll with guaranteed matches.",
      "Chain reactions: rolling three 4s when bowl has three 4s clears six dice at once — massive swing.",
      "Opponent pressure: when opponent is close to emptying bowl, take risks even at 2 Xs — their win ends the round.",
      "Dice selection: keep diverse numbers in bowl early; specialize when bowl thins."
    ]
  },
  "bang-the-dice-game": {
    "metaDescription": "Bang! The Dice Game: arrow accumulation, dynamite rerolls, role deduction, and sheriff vs outlaw endgame pressure.",
    "intro": "Bang! Dice Game compresses the card game into push-your-luck rolls. Experts manage arrows, reroll dynamite, and play role-appropriate aggression as sheriff or outlaw.",
    "quickTips": [
      "Reroll dynamite faces — three dynamite ends your turn with damage.",
      "Arrows accumulate — at three arrows, take damage equal to arrow count.",
      "Sheriff reveals and takes more hits — needs healing rolls.",
      "Outlaws gang up on sheriff — save gun and gatling for sheriff turns."
    ],
    "strategy": [
      "Dynamite management: each dynamite must be rerolled. Three dynamite on final roll = 1 damage and turn ends. Reroll dynamite first every roll.",
      "Arrow accumulation: arrows stay until Indian attack (all players with arrows take damage = arrow count). At 2 arrows, consider ending turn.",
      "Role strategy: sheriff targets outlaws aggressively; outlaws focus sheriff. Renegade plays both sides — hide role until endgame.",
      "Gatling and gun: gatling hits all opponents; gun hits one. Save for turns when multiple outlaws are wounded.",
      "Beer healing: sheriff needs beer rolls to survive extra hits. Outlaws heal only to stay in kill range.",
      "Indian attack timing: if you have 1 arrow and opponents have 3, push luck — Indian attack hurts them more."
    ]
  },
  "railroad-ink": {
    "metaDescription": "Railroad Ink route building: connection scoring, error minimization, exit maximization, and network continuity across four rounds.",
    "intro": "Railroad Ink is route drawing from dice rolls. Experts connect exits for longest paths, minimize orphaned segments, and plan networks across all four rounds.",
    "quickTips": [
      "Connect as many exits as possible — longest route scores most.",
      "Never leave orphaned track segments — they cost points.",
      "Use stations to connect otherwise incompatible routes.",
      "Plan your network holistically across four rounds, not one."
    ],
    "strategy": [
      "Exit connection priority: each connected exit adds to longest route. One long network beats two disconnected medium networks.",
      "Error minimization: dead-end tracks and unconnected exits cost -1 each at scoring. Every dice placement should extend toward an exit or existing route.",
      "Station usage: limited stations bridge route gaps. Save for when dice force incompatible orientations.",
      "Special route dice: railroad and highway dice add constraints. Plan buffer space for special dice in rounds 3-4.",
      "Central vs edge building: central networks connect more exits; edge networks are safer from bad dice. Balance based on exit card layout.",
      "Expansion symbols: mountains and lakes block routes — factor terrain into network planning from round 1."
    ]
  },
  "welcome-to": {
    "metaDescription": "Welcome To roll-and-write: house number sequencing, fence placement, pool and park bonuses, and city plan completion.",
    "intro": "Welcome To is parallel solitaire roll-and-write. Experts sequence house numbers strictly ascending per street, place fences for estate bonuses, and race city plan objectives.",
    "quickTips": [
      "House numbers must ascend on each street — no going back.",
      "Fences create estates — larger estates score more at game end.",
      "Pools and parks on estates multiply endgame value.",
      "City plans are race objectives — prioritize achievable plans early."
    ],
    "strategy": [
      "Number sequencing: each street must ascend left to right. A 7 after 12 is illegal — plan number placement turns ahead.",
      "Fence placement: fences divide streets into estates. Three-house estates score more than two-house. Place fences when estate size is optimal.",
      "Pool and park bonuses: pools require specific estate sizes; parks need consecutive houses. Mark bonuses before writing numbers that block them.",
      "City plan racing: three public plans are first-come objectives. Evaluate plan difficulty vs opponent progress each turn.",
      "Temp worker and bis actions: limited power-ups. Use temp worker to fill a gap; bis duplicates a number on adjacent streets.",
      "Endgame: when an opponent completes a plan, pivot to estate scoring. Unfinished plans are worthless — estate size always scores."
    ]
  },
  "boggle": {
    "metaDescription": "Expert Boggle tactics: prefix trie scanning, Qu tile handling, -ING/-ED suffix mining, and anti-fatigue board sweeps.",
    "intro": "Competitive Boggle is a visual search problem solved with systematic sweeps and morphological pattern recognition. Experts scan by letter frequency clusters, not random wandering.",
    "quickTips": [
      "Start every board from corners and edges where long words anchor.",
      "Treat Qu as a single unit; never waste time seeking a standalone Q path.",
      "Hunt suffix chains: -ING, -ERS, -EST, -TION endings unlock 6+ letter words fast.",
      "In timed finals, write 4-letter words first to bank points before chasing 8-letter gems."
    ],
    "strategy": [
      "Sweep protocol: clockwise spiral from top-left, then reverse diagonal passes. This beats ad-hoc searching and surfaces 15-20% more words under pressure.",
      "Morphological mining: once you spot ROOT+ING, backtrack the root across the grid before moving on—compound extensions (RE+START+ING) often hide on adjacent cubes.",
      "High-value letter pairing: prioritize boards where S, R, E cluster; English morphology makes these the densest word factories.",
      "Duplicate suppression: in head-to-head, finding words opponents miss matters more than longest word. Train obscure but legal 4-5 letter plurals and past tenses.",
      "Endgame sprint: final 30 seconds, abandon 7+ letter hunts; flood the sheet with verified 3-5 letter words you have already visually confirmed."
    ]
  },
  "wordle": {
    "metaDescription": "Expert Wordle strategy: entropy-maximizing openers, hard-mode constraint planning, and positional frequency elimination.",
    "intro": "Optimal Wordle play is information theory, not guessing. The top 0.1% treat each guess as a partition of the remaining answer set, maximizing expected reduction in candidate words.",
    "quickTips": [
      "Open with RAISE, SOARE, or SLATE—high entropy across common letter positions.",
      "Never waste a guess confirming what you already know; every tile must test new information.",
      "Hard mode: pick guesses that fit all greens/yellows but still split the candidate pool.",
      "Track positional frequency: E in position 5 is far more common than E in position 1."
    ],
    "strategy": [
      "Entropy opener math: SOARE and SLATE average ~5.8 bits of information on the full answer list; repeat-letter openers like LLAMA waste partition power early.",
      "Second-guess pivot: after strong opener feedback, switch letter sets entirely (e.g., CLINT after SOARE) rather than cycling S-T-A-R-E variants.",
      "Yellow constraint exploitation: when letters are yellow, eliminate entire positional subsets before testing doubles. A yellow A rarely means double-A answers.",
      "Endgame mode switch: at 3 guesses left with <20 candidates, optimize for win probability not entropy—play the most likely word, not the best splitter.",
      "Hard mode trap avoidance: confirm green positions with words that also test remaining unknowns; ROAST with known R_O_S_ beats STORM if T position is still unknown."
    ]
  },
  "hangman": {
    "metaDescription": "Expert Hangman letter frequency strategy, pattern-based guessing, and endgame consonant-vowel sequencing.",
    "intro": "Hangman at expert level is Bayesian inference on word patterns. You update letter probabilities after every reveal, weighting by corpus frequency and positional constraints.",
    "quickTips": [
      "Open with E, T, A, O, I, N, S—covering ~65% of English letter mass.",
      "After first hits, switch to positional frequency (R in _R_, NG endings) not global frequency.",
      "Avoid rare letters until pattern narrows; Q and Z are last-resort guesses.",
      "Count blanks and remaining wrong guesses before risking a low-probability letter."
    ],
    "strategy": [
      "Corpus weighting: expert players use Scrabble or ENABLE frequency lists, not naive ETAOIN. Position-conditioned tables improve hit rate 12-18%.",
      "Pattern branching: with _ A _ E _, prioritize consonants that appear in C_A_E, M_A_E, W_A_E patterns before guessing L or D.",
      "Endgame risk calculus: with 2 lives and 4 blanks, compute expected value per letter across all matching dictionary words, not single best guess.",
      "Anti-human bias: when playing as setter, choose words with repeated rare letters (J, V, X) and uncommon digraphs (PH, GH) to break frequency openers.",
      "Digraph completion: once TH or CH is partially revealed, complete the digraph before branching—TH__ almost always resolves before testing W."
    ]
  },
  "codenames": {
    "metaDescription": "Expert Codenames party play: table tempo, operative trust calibration, and assassin-adjacent cluster denial.",
    "intro": "In party settings, Codenames is won by spymasters who read table culture—literal vs associative players—and calibrate clue entropy to their operatives' guessing style.",
    "quickTips": [
      "Know your operatives: literal tables need concrete clues; creative tables thrive on abstraction.",
      "Assassin-adjacent clusters are the #1 loss condition—map them before every clue.",
      "Clue:2 beats clue:4 when neutrals sit between your targets.",
      "Use zero clues to reset tempo when operatives are overheating."
    ],
    "strategy": [
      "Table culture read: first round probe with clue:2 on obvious pairs—operatives' stretch behavior reveals literal vs lateral thinkers.",
      "Entropy clue design: partition your team's words into tight semantic clusters; a clue touching only your cards beats a clue of +1 that also hits neutral.",
      "Assassin graph: map 2-hop neighbors of the black card before every clue; FRUIT:3 fails when APPLE is assassin.",
      "Operative trust calibration: after one bad stretch, switch to clue:1 for two rounds—rebuild trust before another multi-hit.",
      "Tempo denial: when opponents are one card from win, clue words overlapping their remaining cluster—even as neutral bait on your turn.",
      "Zero clue meta: burn a turn confirming a link when one wrong guess loses the game."
    ]
  },
  "just-one": {
    "metaDescription": "Expert Just One strategy: clue uniqueness under collision pressure, synonym tiering, and silent-player inference.",
    "intro": "Just One is a collision-avoidance game disguised as cooperative word-giving. Experts engineer clues that survive duplicate elimination while remaining guessable to the active player.",
    "quickTips": [
      "Tier clues: concrete noun > adjective > abstract association.",
      "Avoid the obvious synonym—if three players think of it, it gets erased.",
      "Use proper nouns only when the table shares that cultural context.",
      "As guesser, cross-eliminate after reveals; surviving clues share a semantic root."
    ],
    "strategy": [
      "Collision prediction: before writing, mentally list the top 3 synonyms the table will choose. Pick the 4th-tier clue that still points uniquely.",
      "Length discipline: one-word clues that are 6+ letters often survive because others default to short synonyms.",
      "Active player inference: when two clues survive, find the hypernym connecting them—not the intersection of meanings but the narrowest category.",
      "Hard mode: clue words that share a letter pattern with the target often get duplicated; choose orthogonal domains (sound, shape, era).",
      "Score maximization: 7/7 requires zero collisions across rounds—conservative clues in early rounds bank safety for aggressive 13-point finales."
    ]
  },
  "taboo": {
    "metaDescription": "Expert Taboo clue-giving: taboo-word circumvention paths, grammatical pivot clues, and timer-optimized chunking.",
    "intro": "Competitive Taboo is speed-optimized circumlocution. Experts pre-build mental routes around forbidden words using category pivots and sound-alike bridges.",
    "quickTips": [
      "Never pause on a taboo word—pivot instantly to a category or function.",
      "Use 'the thing that...' constructions to bypass noun taboos.",
      "Chunk multi-word answers into 2-beat phrases the team can shout back.",
      "Skip and return: a 3-second skip beats a 15-second stall on one card."
    ],
    "strategy": [
      "Taboo graph routing: for each forbidden word, pre-link 2 alternate descriptors (BANK → 'where money is stored' not 'financial institution').",
      "Sound bridge discipline: homophone clues ('night/Knight') work once per round—vary to avoid pattern bans.",
      "Timer chunking: aim for 4 cards per 60 seconds by abandoning cards where taboo words are embedded in the only natural description.",
      "Defensive passing: when the clue-giver, accept pass on low-frequency proper nouns; variance on obscure cards loses more than skipping.",
      "Team echo reduction: train teammates to guess partial phrases early; waiting for full sentences burns 40% of clock."
    ]
  },
  "decrypto": {
    "metaDescription": "Expert Decrypto strategy: code entropy, interceptor baiting, and black-cell misdirection in 4-letter clue chains.",
    "intro": "Decrypto at the highest level is signaling through noise. White-hat teams optimize clue independence; black-hat play reads opponent entropy to intercept before the third round.",
    "quickTips": [
      "Clue words must be orthogonal—no shared roots across your three clues per round.",
      "Never reuse a clue concept that opponents saw you use in round 1.",
      "Interceptor teams log your clue-to-position mapping after first intercept.",
      "Misdirect with clue 3: make it look like a repeat pattern while clue 1-2 stay clean."
    ],
    "strategy": [
      "Entropy independence: each clue should partition the keyword space without overlapping semantic fields. If keywords share a domain, use number/texture/color axes instead of topic.",
      "Interceptor timing: intercept on round 2 when you have 2 data points per team—round 3 intercept is often too late with only one guess left.",
      "Black cell exploitation: when you must clue the black position, choose a word that could plausibly map to two different opponent keywords—forces wrong guesses.",
      "Opponent modeling: track which teammate gives the loosest clues; opponents will target that player's patterns first.",
      "Endgame lock: at 1 misdecode from loss, switch to ultra-literal clues even if intercept risk rises—one black is better than two."
    ]
  },
  "bananagrams": {
    "metaDescription": "Expert Bananagrams: peel timing, grid topology for future splits, and dump-letter sequencing under race pressure.",
    "intro": "Bananagrams champions optimize grid shape for peel efficiency, not just raw anagram speed. Your cross-word layout determines how fast you absorb new tiles.",
    "quickTips": [
      "Build long horizontal spines with vertical branches—easier to peel into than square grids.",
      "Dump Q, Z, X, J into short words immediately; they bottleneck peels.",
      "Peel only when your grid has 2+ insertion points for any letter.",
      "Call 'Bananas' only when every branch can accept a wildcard letter."
    ],
    "strategy": [
      "Topology first: a T-shaped grid with 3 open ends beats a compact 4x4 that traps vowels in corners.",
      "Peel discipline: premature peels flood you with tiles while insertion points are locked—wait for 2+ open hooks.",
      "Letter dump sequencing: play V, K, W into 2-letter words attached to main spine before building fancy long words.",
      "Split recovery: when stuck, break a non-critical word to free a central vowel—speed beats aesthetics.",
      "Race psychology: opponents peel when you peel; slow-play to build hooks, then burst 3 peels in sequence to force their dump."
    ]
  },
  "scattergories": {
    "metaDescription": "Expert Scattergories: letter-category intersection scoring, obscure-but-valid answers, and duplicate-risk calibration.",
    "intro": "Scattergories rewards niche vocabulary at letter-category intersections. Experts pre-load answer templates per letter and category type before the die rolls.",
    "quickTips": [
      "Memorize high-hit B/P/S/T lists: countries, animals, and brands per letter.",
      "Choose obscure valid answers over famous ones—duplicates score zero.",
      "Alliteration bonus: pick answers where first AND second word match the letter.",
      "Skip weak categories early; bank time on categories you have 3+ answers for."
    ],
    "strategy": [
      "Letter-category matrix: build mental spreadsheets (B + 'Things in a kitchen' = blender, baster, broiler) for top 8 letters.",
      "Validity edge cases: train Scrabble-legal obscure nouns (quokka for Q animals) that casual players won't duplicate.",
      "Double-letter exploitation: categories allowing phrases favor 'Bobby Brown' over 'Beyonce' when letter is B—less duplicate risk.",
      "Time allocation: spend 40% of clock on your 3 weakest categories; strong categories need only 5 seconds.",
      "Challenge defense: cite dictionary sources for borderline answers before the table votes—you win disputes with precedent."
    ]
  },
  "letter-jam": {
    "metaDescription": "Expert Letter Jam strategy: wildcard staging, left/right clue symmetry, and endgame pip counting.",
    "intro": "Letter Jam is partial-information cooperative spelling. Experts coordinate clue placement so every player can reconstruct words without wasting wildcard tokens.",
    "quickTips": [
      "Place your easiest clue letters on the left; harder positions on the right.",
      "Wildcards belong on the rarest letter in your word, not the first blank.",
      "Never clue a letter everyone already knows from prior rounds.",
      "Count remaining pips each round—adjust clue difficulty to finish with 0-1 left."
    ],
    "strategy": [
      "Wildcard staging: hold wilds until round 3-4 when letter entropy is highest; early wild use wastes disambiguation power.",
      "Symmetric clue design: if you clue position 2 and 4, ensure those letters have different frequency in English—reduces guess collisions.",
      "Table inference: track which players have placed vowels vs consonants; consonant-heavy players need wildcard help on vowel positions.",
      "Endgame pip math: with 3 pips and 2 players unsolved, one player must take a 0-wildcard guess—coordinate who has the tighter letter set.",
      "Anti-redundancy: before cluing, verify no other player's visible word shares your letter at that position."
    ]
  },
  "word-on-the-street": {
    "metaDescription": "Expert Word on the Street: tug-of-war letter prioritization, vowel/consonant lane control, and category-aware word selection.",
    "intro": "Word on the Street is area control on the alphabet. Experts pick answers that move high-value consonants toward their side while denying vowel recovery lanes.",
    "quickTips": [
      "Prioritize moving R, S, T, N, L—they sit center and swing games.",
      "Pick answers with 2+ movable letters on your side of the alphabet.",
      "Deny opponent recovery: if they need vowels, choose answers heavy in consonants they lack.",
      "Shorter valid answers beat long words that move letters back toward center."
    ],
    "strategy": [
      "Center lane control: letters at M/N are tug-neutral; focus pulls on letters at K-P where one good answer shifts 2+ positions.",
      "Category-word pairing: 'Animals' favors ZEBRA (Z pull) over ELEPHANT (E already captured); match category to letter strategy.",
      "Team consonant stacking: coordinate so both teammates' answers in a round target the same 2 letters from opposite directions.",
      "Vowel denial: E, A, O recover to center fast—avoid answers that gift opponents vowel pulls unless you also move a consonant.",
      "Endgame letter lock: when 3 letters from win, choose any valid answer moving those letters even if category is weak—tempo over theme."
    ]
  },
  "paperback": {
    "metaDescription": "Expert Paperback deckbuilding: ink efficiency curves, wild timing, and genre-bonus stacking for maximum word value per draw.",
    "intro": "Paperback is deck-thinning word engine building. Experts curve ink costs, time wild acquisitions, and stack genre bonuses for explosive 15+ point turns.",
    "quickTips": [
      "Buy 2-cost ink cards early; they thin deck and fund 4-5 cost power cards.",
      "Wilds belong in decks with high consonant density, not vowel-heavy starters.",
      "Trigger genre bonus before playing your longest word, not after.",
      "Dump starting cards aggressively—7-card hands with 3 starters lose tempo."
    ],
    "strategy": [
      "Ink curve: rounds 1-3 buy ink, rounds 4-6 buy wilds or genre cards, rounds 7+ buy point-doublers. Breaking this curve leaves you drawing starters on turn 10.",
      "Wild placement: hold wilds for the consonant bottleneck in your best word, not the first playable word—one 12-point play beats two 6-point plays.",
      "Genre stacking: Romance + Mystery on the same word multiplies; plan purchases so 2 genres trigger on a 7+ letter word.",
      "Deck thinning math: every starter left in deck is ~4% chance to draw it; buy ink until starters are <15% of deck.",
      "Endgame denial: buy commons opponents need for genre triggers even if you won't use them—deny their multiplier turn."
    ]
  },
  "hardback": {
    "metaDescription": "Expert Hardback strategy: advertisement timing, award row racing, and ink-flood vs genre-specialist deck archetypes.",
    "intro": "Hardback adds advertisement manipulation and award races to Paperback's engine. Experts choose between ink-flood thin decks and genre-specialist explosive turns based on table tempo.",
    "quickTips": [
      "Advertise on cards opponents want—it blocks their buy and funds you.",
      "Race one award row fully before splitting—partial awards score poorly.",
      "Ink-flood: buy every ink card; genre-specialist: buy 2 genres and wilds only.",
      "Time your 10+ letter word for when double-advertisement is active."
    ],
    "strategy": [
      "Advertisement denial: place ads on genre cards the leader needs; even if you won't buy, you earn coins and delay their multiplier.",
      "Award row commitment: completing Advertisement award first snowballs coin income—prioritize it over Genre awards unless you're already genre-stacked.",
      "Ink-flood archetype: 8+ ink cards by turn 6, wild on turn 7, 12-letter word turn 8. Requires early commons purchases only.",
      "Genre-specialist: Romance+Mystery+Wild by turn 5, ignore ink awards, one 18-point word wins. Fragile if opponent advertises your genres.",
      "Endgame clock: when award pile is 2 deep, buy point cards over engine—Hardback ends abruptly and unfinished engines score zero."
    ]
  },
  "so-clover": {
    "metaDescription": "Expert So Clover: quadrant keyword partitioning, cross-word constraint satisfaction, and clue-giver entropy reduction.",
    "intro": "So Clover is constraint satisfaction across four intersecting keywords. Experts partition the clue space so each quadrant clue uniquely identifies its word without cross-contamination.",
    "quickTips": [
      "Solve the hardest quadrant first—it constrains the other three.",
      "Clues must not share semantic fields across quadrants.",
      "Use number, color, or texture axes when keywords share a topic.",
      "Verify each clue works in isolation before committing."
    ],
    "strategy": [
      "Constraint propagation: if one keyword is 'OCEAN', eliminate maritime clues for adjacent quadrants—use orthogonal descriptors (SALTY, DEEP, BLUE) only once.",
      "Hardest-first solving: quadrants with rare keywords (proper nouns, jargon) anchor the grid; easy quadrants fill last.",
      "Clue entropy: each clue should reduce candidate space by 80%+; vague clues like 'THING' waste cooperative bandwidth.",
      "Cross-word contamination check: read all four clues aloud—if two could swap quadrants, rewrite before the guesser sees them.",
      "Speed mode: expert tables solve in under 90 seconds by parallelizing—one player clues while another validates intersections."
    ]
  },
  "werewords": {
    "metaDescription": "Expert Werewords: mayor question sequencing, werewolf misdirection timing, and seer binary-search optimization.",
    "intro": "Werewords is 20 Questions with hidden roles. The mayor sequences yes/no questions to binary-search the word while werewolves inject false negatives at critical branches.",
    "quickTips": [
      "Mayor opens with category-narrowing questions before letter questions.",
      "Seer waits until 3 questions remain before revealing—early reveal helps werewolves.",
      "Werewolves say NO on the question that would halve the search space most.",
      "Villagers count inconsistent answers; one lie pattern identifies the werewolf."
    ],
    "strategy": [
      "Mayor binary tree: first question should split candidate space 50/50 (living/non-living, proper noun/common noun). Never ask 'is it an animal' when 60% of words are animals.",
      "Werewolf timing: lie on question 4-6, not question 1—early lies are obvious; late lies run out of time to recover.",
      "Seer hold: reveal only when remaining candidates are <8 and werewolf hasn't lied yet—forces werewolf to lie on high-entropy question.",
      "Villager consistency tracking: log YES/NO per player; werewolves cluster false answers on the same semantic branch.",
      "Endgame rush: at 30 seconds, mayor switches from narrowing to direct guesses—binary search fails under time pressure."
    ]
  },
  "letter-tycoon": {
    "metaDescription": "Expert Letter Tycoon: patent acquisition timing, stockpiling premium letters, and word-length vs patent income tradeoffs.",
    "intro": "Letter Tycoon is economic word building. Experts acquire patents on high-frequency letters (E, S, T) early and balance word length against royalty income from opponents.",
    "quickTips": [
      "Buy E, S, T patents before opponents—passive income compounds.",
      "Long words score points; short words deny opponents patent triggers.",
      "Stockpile $ before patent auctions on J, Q, X, Z—they're cheap and block bingos.",
      "Use community letter only when it completes a patent royalty chain."
    ],
    "strategy": [
      "Patent priority queue: E > S > T > R > N for income; J/Q/X/Z for denial. First patent should be E unless table is 3+ players, then S.",
      "Word length calculus: 6-letter word with 2 owned patents often beats 8-letter word with 0—royalties from 3 opponents = 6 extra dollars.",
      "Auction timing: bid aggressively on letters appearing in your hand's likely words; pass on letters you'd need to dump to use.",
      "Community letter exploitation: play it on the letter opponents need for their longest word, not yours—denial > personal score.",
      "Endgame liquidity: convert patents to cash only when you can buy the last high-value patent; holding 3 patents with steady income beats one expensive letter."
    ]
  },
  "dabble": {
    "metaDescription": "Expert Dabble strategy: tile dump sequencing, 5-word parallel construction, and vowel-consonant ratio management.",
    "intro": "Dabble is simultaneous 5-word anagram racing. Experts build all five word slots in parallel, dumping awkward tiles into the 2-letter slot first.",
    "quickTips": [
      "Fill the 2-letter word slot first with your worst tile pair.",
      "Keep vowel-consonant ratio balanced across all 5 slots.",
      "Don't complete one long word while others sit empty—parallelize.",
      "Call Dabble only when every slot has a valid word, not your best word."
    ],
    "strategy": [
      "Slot priority: 2-letter > 3-letter > 6-letter > 4-letter > 5-letter. The 2-letter slot absorbs Q, Z, J dumps; 6-letter slot is built last with remaining best tiles.",
      "Parallel construction: place tentative roots in all 5 slots before refining any—prevents locking tiles in one word.",
      "Vowel funnel: if you draw 4 vowels, commit 2 to the 3-letter slot immediately; vowel hoarding blocks 4 and 5-letter slots.",
      "Race timing: opponents slow when 6-letter slot is empty—rush to place 6+ tiles across slots even if words are suboptimal, then upgrade.",
      "Validation pass: last 10 seconds, verify every slot is legal—one invalid word invalidates the entire board."
    ]
  },
  "quiddler": {
    "metaDescription": "Expert Quiddler strategy: hand reduction tempo, round-by-round card valuation, and go-out threshold calculation.",
    "intro": "Quiddler is rummy with word constraints across 8 rounds. Experts optimize go-out timing—going out early in short rounds, hoarding in long rounds for maximum word value.",
    "quickTips": [
      "Round 3 (3-letter words): go out fast with any valid combo.",
      "Round 8: maximize word count in hand before going out.",
      "Wild cards stay flexible until the round's longest word is buildable.",
      "Track opponent hand sizes—go out when leaders have 5+ cards."
    ],
    "strategy": [
      "Round tempo curve: R1-3 go out immediately with minimum words; R4-6 balance; R7-8 maximize points before going out. Going out round 8 with 6 words beats round 7 with 3.",
      "Card valuation shifts: in round 5, a 5-letter word slot is worth more than holding for round 6—present value of points matters.",
      "Wild timing: play wild on the longest word slot in the current round, not saved for next—next round adds a new slot anyway.",
      "Go-out threshold: calculate if opponents can beat your table points; if leader has 4 cards in round 6, go out with 3 mediocre words to cap their draw.",
      "Discard signaling: discard high-value letters opponents need for their visible melds—deny without revealing your round target."
    ]
  },
  "a-little-wordy": {
    "metaDescription": "Expert A Little Wordy strategy: tile deduction from opponent swaps, information-gain maximizing exchanges, and endgame letter counting.",
    "intro": "A Little Wordy is Battleship-meets-Scrabble with hidden words. Experts maximize information per swap and deduce opponent tiles from their exchange patterns.",
    "quickTips": [
      "Swap tiles that test multiple hypotheses about opponent's word length and letters.",
      "Track which letters opponents pick from the pool—they reveal what they lack.",
      "Build your word to be ambiguous until the final 2 tiles.",
      "Endgame: count remaining pool letters to deduce opponent's last gap."
    ],
    "strategy": [
      "Swap information gain: exchanging 2 tiles that could each fit 3+ positions in your word forces opponent to reveal whether they hold those letters.",
      "Opponent tile inference: if opponent swaps repeatedly without taking from pool, they're refining a fixed length—narrow your guess to that length class.",
      "Ambiguous word construction: words with common 2-letter endings (-AT, -ER, -ED) keep multiple valid interpretations until late game.",
      "Pool letter counting: when pool has 4 tiles left, enumerate all words opponent could hold given their swap history—usually narrows to <5 candidates.",
      "Defensive swaps: late game, swap tiles you know opponent needs based on their earlier pool picks—deny without revealing your word."
    ]
  },
  "dixit": {
    "metaDescription": "Expert Dixit strategy: rabbit-hole baiting, storyteller ambiguity calibration, and voter herd-breaking.",
    "intro": "Dixit rewards controlled ambiguity. The best storyteller gives clues that fit their card but also plausibly fit 2-3 opponents' cards—never just one.",
    "quickTips": [
      "Aim for clues that match 2-3 other cards, not zero and not all.",
      "Never reference a unique visual detail only your card has.",
      "As voter, avoid the obvious match—storyteller wants the herd on wrong cards.",
      "Rabbit strategy: vote for the card that 'almost' fits to steal bonus points."
    ],
    "strategy": [
      "Ambiguity calibration: clue difficulty should scale with table size—4 players need 2-3 matches; 6 players need 3-4.",
      "Rabbit-hole baiting: reference abstract concepts (loneliness, transition) that map to multiple surreal images.",
      "Anti-solo clue: if your clue fits only your card, add one word of intentional ambiguity even at risk of missing all votes.",
      "Voter entropy: never vote first; let others reveal herd direction, then vote the second-best fit.",
      "Score leader defense: when ahead, give ultra-vague clues—bonus points matter less than not giving rabbits free votes."
    ]
  },
  "wavelength": {
    "metaDescription": "Expert Wavelength: spectrum anchoring, opponent psych modeling, and left-right bias correction.",
    "intro": "Wavelength is continuous spectrum estimation. Experts anchor clues to spectrum endpoints and model how each opponent calibrates abstract concepts.",
    "quickTips": [
      "Anchor to spectrum extremes in your clue, not the middle.",
      "Know your team's left-right bias—most groups skew toward center.",
      "Psych clues beat literal clues for abstract spectra (hot-cold, boring-exciting).",
      "As psychic, give a clue that pins one endpoint, not the target directly."
    ],
    "strategy": [
      "Spectrum anchoring: 'literally ice' pins cold end; let teammates interpolate. Direct target clues cause center-clustering.",
      "Team bias correction: track your team's historical offset—if they consistently land 10% right of target, psychic should aim 10% left.",
      "Opponent psych modeling: in 4v4, read whether opponents use pop-culture vs literal anchors and counter-position your dial.",
      "Edge spectrum exploitation: on binary-feeling spectra (good-evil), clues at 85% and 15% beat 50% clues that collapse guesses.",
      "Round 10 leverage: when behind, psychic gives polarizing clues forcing wide spreads—variance favors comeback."
    ]
  },
  "telestrations": {
    "metaDescription": "Expert Telestrations: misinterpretation seeding, drawable decomposition, and chain-entropy maximization.",
    "intro": "Telestrations winners don't draw well—they draw ambiguously. Seed misinterpretations that compound hilariously while staying recognizable.",
    "quickTips": [
      "Break phrases into drawable nouns, not abstract concepts.",
      "Add one ambiguous detail that forks interpretation (hat vs crown).",
      "Simple shapes beat detailed art under 60-second timer.",
      "Write guesses that could match multiple drawings—compound the chain."
    ],
    "strategy": [
      "Misinterpretation seeding: draw the most literal visual of an idiomatic phrase—'break the ice' as cracking ice cube guarantees chain divergence.",
      "Drawable decomposition: 'happy birthday' → cake with candles, not 'celebration'—nouns survive, adjectives die in translation.",
      "Ambiguity injection: one extra element (two similar objects) creates fork points that maximize chain entropy.",
      "Guess optimization: when guessing, pick the most common misread of the drawing, not the most accurate—matches the next player's mental model.",
      "Chain steering: as drawer, recognize when your chain is 'too accurate' and add deliberate ambiguity to keep point potential high."
    ]
  },
  "the-resistance": {
    "metaDescription": "Expert Resistance strategy: mission team composition reads, fail-point optimization, and spy bus timing.",
    "intro": "The Resistance is social deduction on mission composition. Experts read voting patterns for spy tells and optimize which mission to fail as spy.",
    "quickTips": [
      "Track who proposes teams—they reveal allegiance through inclusion patterns.",
      "Resistance: never approve a team you can't explain rejecting.",
      "Spy: fail mission 3, not mission 1—early fails expose you.",
      "Leader rotation reveals who spies trust."
    ],
    "strategy": [
      "Vote pattern analysis: spies approve teams containing other spies 85%+ of the time; resistance players show more variance.",
      "Fail-point optimization (spy): fail on mission 3 or 4 when resistance needs 3 successes—failing mission 1-2 gives too much information.",
      "Bus timing (spy): when one spy is exposed, the other fails the next mission immediately—coordinate or solo-fail to maximize chaos.",
      "Resistance team building: include one suspect to gather vote data; reject your own team if spy votes approve unanimously.",
      "Endgame 2-2: resistance must put only confirmed clean players on final mission—one spy on a 2-person team is 50% fail rate."
    ]
  },
  "avalon": {
    "metaDescription": "Expert Avalon: Merlin protection, Percival decoy reads, and assassin endgame targeting.",
    "intro": "Avalon adds role asymmetry to Resistance. Experts protect Merlin's information advantage while Percival creates intentional ambiguity for the assassin.",
    "quickTips": [
      "Merlin: never vote perfectly—introduce one 'mistake' per game.",
      "Percival: react identically to both Merlin candidates until mission 3.",
      "Assassin: track who looks away when evil wins, not who celebrates.",
      "Good players: propose teams that force evil to self-identify through rejects."
    ],
    "strategy": [
      "Merlin camouflage: approve one evil team in missions 1-2 to break perfect-vote tell; assassin hunts consistent approvers.",
      "Percival decoy: ask both Merlin candidates identical questions; real Merlin answers with slightly more hesitation.",
      "Assassin endgame: target the player who gives the most information in discussions but votes 'wrong' once—classic Merlin pattern.",
      "Evil fail timing: same as Resistance but assassin must preserve one evil player for final mission fail.",
      "Lady of the Lake: pass to players who approved failed missions to confirm evil—not to confirmed good."
    ]
  },
  "werewolf": {
    "metaDescription": "Expert Werewolf: night kill priority, seer protection, and villager claim timing.",
    "intro": "Classic Werewolf is night-kill sequencing and day-vote manipulation. Experts prioritize kills that remove information roles without confirming their existence.",
    "quickTips": [
      "Wolves: kill the quiet analyst, not the loud random player.",
      "Seer: never reveal night 1—accumulate 3 checks first.",
      "Villagers: force claims on day 3 when vote math tightens.",
      "Doctor: self-heal night 1, protect seer night 2 if identified."
    ],
    "strategy": [
      "Kill priority (wolves): eliminate players who ask structured questions—seer tells are inquiry patterns, not answers.",
      "Seer hold: reveal only with 3 confirmed wolves or when nominated—early reveal gets you night-killed and confirms seer exists.",
      "Claim timing: power roles claim on day 3-4 when wolf count is known; day 1 claims are wolf bait.",
      "Vote block manipulation: coordinate 4-vote bloc on the player wolves want eliminated—wolves steer without revealing.",
      "Endgame 3-player: seer must share all checks before final vote—silence loses to wolf tie."
    ]
  },
  "secret-hitler": {
    "metaDescription": "Expert Secret Hitler: policy deck estimation, fascist tracker manipulation, and liberal investigation priority.",
    "intro": "Secret Hitler is policy probability and role deduction. Experts track deck composition, fascist policy placements, and when liberals must investigate vs enact.",
    "quickTips": [
      "Track enacted policy ratio—deck reshuffles at 5 enacted.",
      "Fascists: give liberal policies early to earn chancellor trust.",
      "Liberals: investigate before electing unknown chancellors in 4-5 fascist policy games.",
      "Hitler never takes obvious fascist policy—watch chancellors who pass clean."
    ],
    "strategy": [
      "Deck estimation: after 6 policies enacted, calculate remaining fascist/liberal ratio in deck—chancellor picks become deterministic.",
      "Fascist tracker manipulation: as president, bury fascist policies in discard when possible—reshuffle timing controls election windows.",
      "Investigation priority: investigate the most electable unknown player, not the most suspicious—electability predicts Hitler risk.",
      "Hitler camouflage: fascist players give Hitler liberal policies in first 2 governments to build trust for late Hitler chancellorship.",
      "Endgame 5 fascist policies: liberals must force confirmed liberals as president/chancellor—one Hitler chancellor ends the game."
    ]
  },
  "one-night-ultimate-werewolf": {
    "metaDescription": "Expert One Night Ultimate Werewolf: night action sequencing, center card deduction, and zero-information vote bluffing.",
    "intro": "One Night compresses Werewolf into a single night of role swaps and one day of deduction. Experts deduce center cards from night action results and bluff votes.",
    "quickTips": [
      "Track every night action claim—contradictions reveal center cards.",
      "Werewolf: claim villager and vote for a villager to split the vote.",
      "Seer: check center + player, share partial info to bait wolf claims.",
      "Tanner wins on death—vote Tanner when you want chaos."
    ],
    "strategy": [
      "Center card deduction: if Robber claims swap with Player A who claims Seer, one center card is likely Werewolf—enumerate possibilities.",
      "Night action sequencing: Minion sees wolves first; use that info to validate or invalidate wolf claims before voting.",
      "Zero-information bluff: villagers vote randomly early to force wolves to reveal through defensive claims.",
      "Role claim pressure: force all players to claim by end of discussion—unclaimed seats are center card candidates.",
      "Tanner exploitation: when village is split 3-3, vote the Tanner claimer—if wrong, wolves win; if right, Tanner wins and village loses anyway."
    ]
  },
  "cards-against-humanity": {
    "metaDescription": "Expert Cards Against Humanity: judge modeling, card economy, and shock-value calibration for consistent wins.",
    "intro": "CAH is judge psychology, not humor. Experts model each judge's comedy preference and play cards that match their demonstrated taste.",
    "quickTips": [
      "Read the judge's laugh triggers from previous rounds.",
      "Play the card that matches the judge's humor tier, not your funniest card.",
      "Save your best card for a judge who matches your style.",
      "Two-card plays: pair specific + absurd, not absurd + absurd."
    ],
    "strategy": [
      "Judge modeling: track whether current judge prefers literal, dark, or absurdist combinations—submit accordingly.",
      "Card economy: hold 2-3 versatile white cards (nouns that pair broadly) for unknown judges.",
      "Shock calibration: with conservative judges, witty > shocking; with edgy judges, escalate.",
      "Pick 2 timing: when black card has two blanks, play specific+wildcard—'My therapist says ___' wants a noun, not a phrase.",
      "House judge meta: if same judge twice in a row, play their demonstrated favorite archetype from round 1."
    ]
  },
  "times-up": {
    "metaDescription": "Expert Time's Up: three-round escalation, celebrity tier memorization, and pass-skip optimization.",
    "intro": "Time's Up rewards celebrity familiarity across three escalating constraint rounds. Experts memorize card contents in round 1 for round 3 one-word dominance.",
    "quickTips": [
      "Round 1: memorize every card pulled—round 3 is one word only.",
      "Round 2: use exactly one gesture per card, no more.",
      "Skip obscure cards in round 3; bank time on cards you memorized.",
      "Team echo: shout partial names early in round 1 to lock memory."
    ],
    "strategy": [
      "Round 1 memorization: assign each card a unique one-word hook your team agrees on—'Beckham' becomes 'cross' internally.",
      "Round 2 gesture library: develop 5 standard gestures (sports, movie, politician) that cover 80% of cards.",
      "Round 3 skip discipline: 3-second skip on unknown cards; 40% of round 3 time is recoverable via skips.",
      "Celebrity tiering: prioritize memorizing Tier 1 celebrities (Obama, Beckham, Titanic) that appear in multiple games.",
      "Opponent card denial: in round 1, deliberately slow on cards opponents struggled with—you see their weak spots for round 3."
    ]
  },
  "mysterium": {
    "metaDescription": "Expert Mysterium: ghost vision card sequencing, psychic clue clustering, and final vision tiebreaker reads.",
    "intro": "Mysterium is asymmetric clue-giving under constraint. The ghost must sequence vision cards so psychics build consistent narratives without explicit links.",
    "quickTips": [
      "Ghost: group vision cards by suspect/location/weapon before dealing.",
      "Psychics: cluster clues by color and symbol, not by card order.",
      "Never guess until you have 2+ clues pointing to same card.",
      "Final vision: ghost gives strongest card first, weakest last."
    ],
    "strategy": [
      "Ghost sequencing: deal location clues before suspect clues—locations have fewer candidates and anchor deduction.",
      "Vision card economy: save high-entropy cards (multi-symbol) for ambiguous suspects; single-symbol cards for unique locations.",
      "Psychic clustering: when 3+ players share a clue symbol, that symbol is likely the correct attribute—coordinate guesses.",
      "Clover token timing: use on the guess you're 80% confident on, not 50%—wasted clovers lose games.",
      "Final vision ordering: ghost ranks cards 1-3 by match strength; psychics vote on order, not individual cards."
    ]
  },
  "spyfall": {
    "metaDescription": "Expert Spyfall: location question trees, spy entrapment questions, and innocent answer consistency.",
    "intro": "Spyfall is location deduction through targeted questions. Innocents must answer specifically enough to prove knowledge; spies must answer generically enough to hide ignorance.",
    "quickTips": [
      "Innocents: ask questions only answerable by someone who knows the location.",
      "Spy: answer with 'it depends' or ask counter-questions to stall.",
      "Never ask 'how long does it take to get here'—too spy-friendly.",
      "Vote when one player's answers are consistently location-agnostic."
    ],
    "strategy": [
      "Location question trees: build 3-hop question chains (transport → activity → equipment) that expose spies who can't maintain consistency.",
      "Spy entrapment: innocents ask 'what do you do if X happens here'—spies give generic answers; innocents give specific ones.",
      "Answer specificity: innocents include one location-specific detail per answer (proper noun, local custom)—spies can't fake depth.",
      "Timer exploitation: spy should ask questions 60% of the time to avoid answering—forces innocents to reveal location through their questions.",
      "Vote timing: call vote when 2+ players have given agnostic answers; don't wait for certainty—spy wins on time."
    ]
  },
  "camel-up": {
    "metaDescription": "Expert Camel Up: pyramid betting EV, leg position reads, and oasis/desert tile denial.",
    "intro": "Camel Up is expected-value betting on race outcomes. Experts calculate leg-by-leg win probabilities and bet against the herd on long-shot pyramids.",
    "quickTips": [
      "Bet on 2nd/3rd place legs, not just winners—payout multipliers favor place bets.",
      "Place oasis/desert tiles to slow leaders, not trailing camels.",
      "When camel stack is 3+ high, bet on the bottom camel surging.",
      "Distribute bets across legs—one big winner bet rarely pays."
    ],
    "strategy": [
      "Pyramid EV: 4th-place bet at 10:1 has positive EV when leader stack is unstable—calculate stack height vs dice probability.",
      "Leg position reads: camels on oasis tiles move less; desert tiles cause skips—bet on camels 1 tile behind leaders.",
      "Herd betting: when table bets heavily on leader, place bet on 2nd—payout multiplier rises and leader stacks collapse often.",
      "Tile denial: place desert in front of leader's next landing, oasis behind trailing camel—swing leg outcomes.",
      "Endgame leg: final leg bets should cover 3 camels minimum—winner variance is highest on last leg."
    ]
  },
  "takenoko": {
    "metaDescription": "Expert Takenoko: objective racing, bamboo growth denial, and panda hunger management.",
    "intro": "Takenoko is objective racing with panda sabotage. Experts rush 3-point objectives early while denying opponents bamboo growth needed for their cards.",
    "quickTips": [
      "Rush 3-point objectives before opponents can block.",
      "Move panda to eat opponents' irrigated bamboo, not random plots.",
      "Irrigate before growing—unirrigated growth is wasted.",
      "Weather tiles: sun for movement, rain for irrigation, wind for two actions."
    ],
    "strategy": [
      "Objective racing: complete 2 easy objectives (gardener/panda) before pursuing 3-point plot objectives—early points compound turn advantage.",
      "Panda denial: track opponents' objective cards; eat bamboo on plots matching their color needs—denial is worth 2-3 points swing.",
      "Irrigation priority: irrigate 3 plots before any growth action—unirrigated bamboo is vulnerable to panda and scores nothing.",
      "Weather exploitation: wind tile enables move+grow+eat in one turn—save wind for objective completion turns.",
      "Emperor objective: when 3-point emperor card appears, rush it—only one player can complete and it ends the round race."
    ]
  },
  "qwirkle": {
    "metaDescription": "Expert Qwirkle: Qwirkle setup plays, color vs shape line blocking, and hand management for multi-line scores.",
    "intro": "Qwirkle is spatial line building. Experts set up Qwirkle opportunities (6-tile lines) while blocking opponents' multi-line plays.",
    "quickTips": [
      "Always check if your tile completes a 6-line Qwirkle before playing elsewhere.",
      "Block opponents' lines at 5 tiles—they're one away from Qwirkle.",
      "Hold tiles that could Qwirkle on your next turn.",
      "Play to open 2+ scoring lines with one tile when possible."
    ],
    "strategy": [
      "Qwirkle setup: place 4-5 tile lines with one gap matching your hand—complete next turn for 12+ points.",
      "5-tile block: when opponent's line has 5 tiles, play the blocking tile even if it scores 0—Qwirkle denial is 12-point swing.",
      "Multi-line plays: one tile touching 2 lines scores both; prioritize placement geometry over single-line length.",
      "Hand management: keep 2 tiles of same color AND 2 of same shape for flexible Qwirkle completion.",
      "Endgame tile dump: when bag is empty, play highest-scoring tile even if it sets up opponent—points now beat setup."
    ]
  },
  "catan-junior": {
    "metaDescription": "Expert Catan Junior: ghost ship blocking, Coco the Parrot rush, and island resource tempo.",
    "intro": "Catan Junior simplifies Catan for kids but experts still optimize ghost ship placement and Coco card rush for consistent wins.",
    "quickTips": [
      "Move ghost ship to block opponents' best resource island.",
      "Rush Coco cards early—they compound ship movement advantage.",
      "Build hideouts on diverse islands, not clustered.",
      "Trade with the market only when it completes a hideout."
    ],
    "strategy": [
      "Ghost ship denial: place ship on the island opponents need for their next hideout—blocks resource collection for 1-2 turns.",
      "Coco rush: prioritize Coco cards over hideouts in rounds 1-3; parrot abilities accelerate all future actions.",
      "Island diversity: 3 hideouts on 3 islands beats 4 on 2—market trade flexibility and ghost ship resilience.",
      "Market timing: trade only when 1 resource away from hideout; early trades gift opponents tempo.",
      "Endgame ship control: with 4 hideouts, ghost ship on leader's sole resource island forces market trades at disadvantage."
    ]
  },
  "ticket-to-ride-first-journey": {
    "metaDescription": "Expert Ticket to Ride First Journey: ticket completion race, route blocking for kids, and train conservation.",
    "intro": "First Journey is a simplified race to complete tickets. Experts block opponents' visible routes and conserve trains for ticket completion.",
    "quickTips": [
      "Complete your first ticket before drawing a second.",
      "Block the central hub routes opponents need.",
      "Count trains—running out with incomplete ticket loses.",
      "Take face-up cards matching your ticket colors first."
    ],
    "strategy": [
      "Ticket sequencing: complete ticket 1 before drawing ticket 2—unfinished tickets are -point risk with no upside.",
      "Hub blocking: central map junctions connect 3+ routes; blocking one hub denies multiple opponents.",
      "Train conservation: reserve 3 trains minimum for final ticket segment—kids often run out on last connection.",
      "Visible route reads: opponents' placed routes reveal ticket destinations—block the 2-segment gap they need.",
      "Color commitment: commit to one color only after 5+ cards; mixed colors waste draws in short game."
    ]
  },
  "hues-and-cues": {
    "metaDescription": "Expert Hues and Cues: gamut positioning, saturation anchoring, and opponent color-blindness exploitation.",
    "intro": "Hues and Cues is color gamut communication. Experts anchor clues to gamut extremes and account for how opponents perceive saturation vs hue.",
    "quickTips": [
      "Clue to gamut edge (darkest, brightest) not the target square.",
      "Use 'coral' not 'orange' when target is desaturated.",
      "Track which gamut regions opponents confuse—blues/greens most common.",
      "Give hue + lightness clue, not hue alone."
    ],
    "strategy": [
      "Gamut anchoring: 'the darkest blue' pins one axis; teammates interpolate. Direct color names cause center-clustering.",
      "Saturation calibration: 'dusty rose' vs 'hot pink' distinguishes adjacent squares—hue-only clues fail on pastel regions.",
      "Confusion zone mapping: most players confuse blue-green boundary; clue toward cyan or navy, never 'teal' without lightness modifier.",
      "Opponent history: track each player's offset from target—systematic right-shifters need left-anchored clues.",
      "Round 10: when behind, give polarizing gamut-edge clues forcing wide spreads—variance favors comeback."
    ]
  },
  "concept": {
    "metaDescription": "Expert Concept: icon layering order, exclusion marking, and concept decomposition for minimal guess rounds.",
    "intro": "Concept is icon-based charades. Experts layer icons from general to specific and mark exclusions early to narrow the guess space.",
    "quickTips": [
      "Place broad category icons first (living, object, place).",
      "Mark exclusion icons before adding specific attributes.",
      "Decompose concept into 3 icon layers: category → attribute → specific.",
      "Never add a 4th icon before team guesses the first 3 layers."
    ],
    "strategy": [
      "Icon layering order: category (person) → attribute (fictional) → specific (wizard)—each layer should trigger a guess attempt.",
      "Exclusion marking: mark 'not real' early when concept is fictional—prevents teammates guessing historical figures.",
      "Concept decomposition: 'Eiffel Tower' = place + metal + France; never add 'tall' before 'place' is confirmed.",
      "Guess round minimization: pause after 3 icons for guess; adding icons without guessing wastes cognitive load.",
      "Opponent disruption: when guessing opponents' concepts, shout broad category guesses to force them to add exclusion icons—burns their turn."
    ]
  },
  "doodle-dash": {
    "metaDescription": "Expert Doodle Dash: shape-first drawing, category-specific shortcuts, and guess-before-complete racing.",
    "intro": "Doodle Dash is speed Pictionary. Experts use category-specific shape shortcuts and trigger guesses before finishing drawings.",
    "quickTips": [
      "Draw the most recognizable silhouette first, not details.",
      "Animals: ears and tail first. Objects: outline first.",
      "Shout guesses while drawing—team can guess incomplete drawings.",
      "Skip cards with un drawable abstract concepts immediately."
    ],
    "strategy": [
      "Shape-first protocol: 3-stroke silhouette triggers guess; details only if no guess in 5 seconds.",
      "Category shortcuts: animals=get ears; vehicles=get wheels; food=get round shape—train 5 shortcuts per category.",
      "Guess-before-complete: teammates should guess at 40% completion; drawer adds confirming stroke only.",
      "Skip discipline: abstract cards ('happiness', 'idea') get 2-second attempt then skip—recover 8 seconds.",
      "Round pacing: aim for 6 cards per 60 seconds; card 5-6 should be aggressive skips if behind."
    ]
  },
  "skull": {
    "metaDescription": "Expert Skull: bid escalation, rose timing, and opponent skull placement reads.",
    "intro": "Skull is bluffing on hidden disc stacks. Experts read opponent bid patterns for skull placement and time rose reveals for maximum information.",
    "quickTips": [
      "Bid one higher than you think is safe, not your maximum.",
      "Place skull on your own stack early to enable future bluff bids.",
      "Rose reveals: flip rose only when you need to confirm flower count.",
      "Never bid on a stack you haven't seen flipped at least once."
    ],
    "strategy": [
      "Bid escalation: opening bid of 1 gathers info; escalate only when you've seen 2+ stacks flip successfully.",
      "Skull placement: put skull on your own stack in round 1—enables bluff bids on your stack later when opponents fear your skull.",
      "Rose timing: reveal rose when opponent bids 3+ on unknown stack—confirms flower count without risking skull.",
      "Stack reads: players who bid aggressively on others' stacks likely have skull on own stack—avoid bidding on their stack.",
      "Endgame 2-player: bid exactly opponent's expected flip count minus 1—forces them to overbid or pass."
    ]
  },
  "no-thanks": {
    "metaDescription": "Expert No Thanks: card valuation by sequence gaps, chip conservation, and endgame penalty avoidance.",
    "intro": "No Thanks is sequential card avoidance with chip economy. Experts value cards by gap-filling potential and conserve chips for endgame penalty avoidance.",
    "quickTips": [
      "Take cards that fill sequence gaps, not high-value isolated cards.",
      "Pass when chip cost exceeds card's gap-fill value.",
      "Conserve 3+ chips for endgame when deck runs out.",
      "Force opponents to take cards by passing until chip pile is tempting."
    ],
    "strategy": [
      "Gap valuation: card 7 when you hold 6 and 8 is worth +2 net; card 15 isolated is -15 penalty.",
      "Chip conservation: never spend last 3 chips on marginal cards—endgame without chips forces bad takes.",
      "Pass psychology: pass on 12+ cards to build chip pile; opponents take when pile hits 4+ chips.",
      "Sequence racing: complete 2 sequences of 4+ before pursuing single high cards—sequences score double.",
      "Endgame deck empty: when deck runs out, take any card that reduces penalty even at 0 chips—penalty avoidance beats chip hoarding."
    ]
  },
  "for-sale": {
    "metaDescription": "Expert For Sale: auction bid calibration, property matching, and coin conservation for high-value properties.",
    "intro": "For Sale splits into auction and matching phases. Experts calibrate auction bids to property tier and conserve coins for matching high-value properties.",
    "quickTips": [
      "Auction: bid half your coins on tier-1 properties, save for tier-3.",
      "Matching: play lowest card that still wins the property.",
      "Never bid all coins in auction—you need matching ammo.",
      "Count remaining properties to calibrate bid aggression."
    ],
    "strategy": [
      "Auction tiering: tier-1 (1-10) bid 1-3 coins; tier-2 (11-20) bid 3-5; tier-3 (21-30) bid 5-8—save 10+ coins for matching.",
      "Coin conservation: never spend last 5 coins in auction; matching phase requires 3+ coins for competitive bids.",
      "Matching optimization: play card equal to property value minus 1 when opponent has shown lower—minimize card waste.",
      "Property count tracking: with 4 properties left, bid aggressively on tier-3; with 8 left, conserve.",
      "Bluff bidding: bid 1 on tier-3 to force opponent overspend, then win tier-2 cheaply."
    ]
  },
  "point-salad": {
    "metaDescription": "Expert Point Salad: negative point avoidance, combo drafting, and pepper multiplier timing.",
    "intro": "Point Salad is multi-category drafting. Experts avoid negative points ruthlessly and time pepper multipliers for maximum combo scoring.",
    "quickTips": [
      "Never take a card with negative points unless it completes a 10+ point combo.",
      "Draft peppers early—they multiply all future scoring.",
      "Complete one full category before splitting across categories.",
      "Deny opponents their 3rd card in a scoring category."
    ],
    "strategy": [
      "Negative point ruthlessness: -2 card needs +4 combo to break even; skip unless it enables 15+ point turn.",
      "Pepper timing: draft 2 peppers by turn 3; each pepper multiplies all category bonuses for remaining game.",
      "Category commitment: complete 7-card category for 10 bonus before starting second—partial categories score poorly.",
      "Denial priority: opponents' 3rd card in a category is denial target over your 1st card in new category.",
      "Endgame point calculation: before each draft, sum possible combos; draft card that maximizes total, not single category."
    ]
  },
  "pandemic": {
    "metaDescription": "Expert Pandemic: outbreak cascade prevention, role action sequencing, and cure-before-eradication tempo.",
    "intro": "Expert Pandemic is outbreak graph management. One chain reaction loses the game; winners sequence roles to cap cube growth before pursuing cures.",
    "quickTips": [
      "Treat outbreaks as the real loss condition, not cube supply.",
      "Scientist cures with 4 cards; always feed them matching colors.",
      "Operations Expert builds research stations before anyone travels.",
      "Cure all four before eradicating any color."
    ],
    "strategy": [
      "Outbreak cascade math: each outbreak adds 3-8 cubes in chain; cap at 6 total outbreaks by midgame through proactive cube removal, not reactive firefighting.",
      "Role action sequencing: Medic clears 2+ cubes per action in hotspot; Researcher feeds Scientist; Dispatcher enables Medic double-moves.",
      "Cure tempo: cure at 5-6 outbreaks, not 3—curing doesn't reduce board pressure; cube removal does.",
      "Infection deck forecasting: when 3+ epidemic cards remain, hold 2 cards of each color before drawing—epidemic spikes kill unprepared tables.",
      "Endgame eradication trap: eradicating one color before all four cures wastes actions—complete all cures first, then eradicate in one sweep."
    ]
  },
  "forbidden-island": {
    "metaDescription": "Expert Forbidden Island: flood rate management, shore-up priority lanes, and treasure runner specialization.",
    "intro": "Forbidden Island is tempo against rising water. Experts shore up treasure tile lanes before collecting and specialize one runner per treasure.",
    "quickTips": [
      "Shore up treasure tiles before they flood, not after.",
      "Navigator moves two players—use for treasure runs.",
      "Diver can swim through flooded tiles—shortcuts critical paths.",
      "Don't collect treasure until all 4 tiles are shored up."
    ],
    "strategy": [
      "Flood rate management: at water level 4+, shore up 2 tiles per turn minimum—collection pauses until flood rate stabilizes.",
      "Shore-up priority: treasure tiles first, then corners and edges (sink first), then paths between treasures.",
      "Runner specialization: assign one player per treasure color; Navigator shuttles them to collection points.",
      "Pilot burst timing: save Pilot fly for emergency shore-up when 3+ treasure tiles flood simultaneously.",
      "Helicopter escape: move all players to Fool's Landing 2 turns before deck empty—waiting 1 turn risks sink."
    ]
  },
  "forbidden-desert": {
    "metaDescription": "Expert Forbidden Desert: sand clearing lanes, water conservation, and solar deck timing.",
    "intro": "Forbidden Desert adds sand and thirst. Experts clear sand lanes to buried parts and conserve water through role synergies.",
    "quickTips": [
      "Clear sand from launch pad tiles before digging for parts.",
      "Water carrier refills at oasis—never let team drop below 3 water.",
      "Solar deck: sun beats move sand; storm beats dig.",
      "Meteorologist reduces storm intensity—use before big digs."
    ],
    "strategy": [
      "Sand lane clearing: clear 3-tile path to each part location before digging—digging without lane wastes actions on re-burial.",
      "Water conservation: never move without purpose when below 5 water; Explorer's diagonal move saves 1 water per turn.",
      "Solar deck timing: plan digs on sun turns; use Meteorologist to skip storm before multi-tile dig.",
      "Part collection order: collect parts nearest launch pad first—reduces carry distance on final assembly.",
      "Jet pack + Tunnel: combine for 3-tile sand clear in one turn when part is 2 sand deep."
    ]
  },
  "spirit-island": {
    "metaDescription": "Expert Spirit Island: slow/growth curves, fear generation sequencing, and presence placement for control thresholds.",
    "intro": "Spirit Island experts manage slow/growth power curves across rounds. Fear generation and presence placement determine when you flip from defensive to dominant.",
    "quickTips": [
      "Turn 1-3: growth and presence only; minimal energy spending.",
      "Fear cards trigger at thresholds—plan 2 fear/turn minimum from round 4.",
      "Presence tracks control; 2+ presence on a land enables many powers.",
      "Blight cascade prevention beats explorer removal every time."
    ],
    "strategy": [
      "Slow/growth curve: rounds 1-2 pure growth; round 3 first energy power; round 4+ fear generation. Breaking this curve leaves you energy-starved when invaders spike.",
      "Fear sequencing: generate 2 fear/turn from round 4 to hit first fear card by round 6—fear cards remove invaders without spending actions.",
      "Presence placement: 2 presence on high-value lands (coasts, wetlands) enables reclaim and push; 1 presence everywhere wastes threshold bonuses.",
      "Blight cascade math: one blight on a land with 3+ invaders cascades to 2 adjacent—remove explorers before adding blight, always.",
      "Innate power timing: trigger innate on round 5-6 when presence thresholds hit; innate before growth on those rounds.",
      "Spirit pairing: Lightning + River synergize fear+energy; Bringer of Dreams pairs with any fear spirit for threshold acceleration."
    ]
  },
  "gloomhaven": {
    "metaDescription": "Expert Gloomhaven: initiative manipulation, loss card economy, and element infusion sequencing.",
    "intro": "Gloomhaven experts treat loss cards as a finite resource and sequence initiative to control monster activation order. Element infusion timing unlocks power card bonuses.",
    "quickTips": [
      "Never lose more than 1 card per scenario on trash attacks.",
      "Go late initiative to act after monsters move into position.",
      "Infuse elements the round BEFORE you need the bonus.",
      "Loss card retirement: lose 2 cards max per long rest cycle."
    ],
    "strategy": [
      "Loss card economy: each scenario has a loss budget (~6-8 cards); track per room. Trash attacks that cost 2 loss cards are scenario-loss conditions.",
      "Initiative manipulation: late initiative (80+) lets monsters move into your AoE; early initiative (20-) for kill-before-activation on fragile targets.",
      "Element infusion sequencing: infuse fire/ice round N for power card bonus round N+1—infusing same round wastes the element.",
      "Long rest timing: long rest when 3+ loss cards played and health below 50%; short rest for stamina recovery only.",
      "Class synergies: Spellweaver summons + Cragheart obstacles = zero-loss monster control.",
      "Scenario retirement: lose scenario rather than lose 4+ cards—card economy matters more than single scenario win."
    ]
  },
  "frosthaven": {
    "metaDescription": "Expert Frosthaven: crafting resource loops, town prosperity investment, and scenario modifier exploitation.",
    "intro": "Frosthaven adds crafting and town meta between scenarios. Experts invest prosperity early and craft items that break specific scenario modifiers.",
    "quickTips": [
      "Invest prosperity before buying gear—unlocks better shop.",
      "Craft scenario-specific items before entering.",
      "Masteries: complete bonus objectives for retirement upgrades.",
      "Don't retire until mastery and prosperity goals met."
    ],
    "strategy": [
      "Prosperity investment: +1 prosperity before any gear purchase—each level unlocks better shop tier permanently.",
      "Crafting loops: identify scenario modifier (cold, traps, shields) and craft counter-item before scenario—entering unprepared costs 2+ loss cards.",
      "Mastery sequencing: complete mastery on first attempt; failing mastery blocks retirement upgrade permanently for that class.",
      "Town event optimization: choose events that add crafting materials over gold—materials compound, gold doesn't.",
      "Class retirement timing: retire at level 5 with mastery, not level 3—level 5 unlocks full perk tree for next class.",
      "Scenario modifier exploitation: some modifiers help players (fog = monsters can't target at range)—choose scenarios matching your party strength."
    ]
  },
  "arkham-horror": {
    "metaDescription": "Expert Arkham Horror: gate compression, clue spending tempo, and mythos mitigation through role specialization.",
    "intro": "Arkham Horror LCG is action economy under mythos pressure. Experts compress gate spawning, spend clues at optimal tempo, and specialize roles for mythos mitigation.",
    "quickTips": [
      "Close gates before they accumulate—3+ open gates triggers doom.",
      "Spend clues on investigations, not early evasion.",
      "Mystic handles spell charges; Guardian handles enemy engagement.",
      "Mythos phase: mitigate horror before damage."
    ],
    "strategy": [
      "Gate compression: never let 3+ gates open; each gate adds mythos difficulty. Close gates same round they open when possible.",
      "Clue tempo: spend clues when investigation skill reaches 4+; hoarding clues past 4 wastes actions on re-investigation.",
      "Role specialization: Guardian engages and tanks; Mystic evades and spell-damages; Seeker investigates and clues; Rogue evades and resource-generates.",
      "Mythos mitigation: horror removal before damage—horror kills investigators over 3 rounds; damage is recoverable.",
      "Scenario objective racing: identify win condition round 1; ignore side objectives that don't advance main goal.",
      "Card draw engine: Seeker's Old Book of Lore + Dr. Milan Christopher = 2 free actions per turn—invest in draw early."
    ]
  },
  "mansions-of-madness": {
    "metaDescription": "Expert Mansions of Madness: app timing exploitation, investigator role locking, and horror threshold management.",
    "intro": "Mansions of Madness is app-driven exploration with horror thresholds. Experts lock investigator roles early and manage horror before it triggers damage.",
    "quickTips": [
      "Lock roles round 1: Guardian fights, Seeker investigates, Support heals.",
      "Horror threshold: rest before reaching damage trigger.",
      "App timing: move during 'safe' app phases, not combat phases.",
      "Objective first: ignore loot when objective is one room away."
    ],
    "strategy": [
      "Role locking: assign combat/support/investigation round 1; switching roles mid-scenario wastes action economy.",
      "Horror threshold management: rest at horror 3-4, not 5—damage from horror is unrecoverable in short scenarios.",
      "App phase exploitation: move and investigate during app 'exploration' phases; combat during 'combat' phases—never mix.",
      "Objective racing: identify objective room round 1; path directly, loot only on path.",
      "Keeper counter-play (1e): when playing Keeper, spawn monsters on objective path, not random rooms.",
      "Investigator synergy: Ashcan Pete + Daisy Walker = combat + clue generation without overlap."
    ]
  },
  "flash-point": {
    "metaDescription": "Expert Flash Point: fire spread prediction, specialist action chaining, and victim rescue priority.",
    "intro": "Flash Point is fire spread prediction and specialist chaining. Experts predict flashover triggers and chain Driver + Fire Captain actions.",
    "quickTips": [
      "Rescue victims before fighting fire—victims score, fire doesn't.",
      "Fire Captain: extinguish 2 adjacent fires per action.",
      "Driver: move 2 specialists per action.",
      "Flashover warning: 4+ fires in room triggers—prevent at 3."
    ],
    "strategy": [
      "Fire spread prediction: fire spreads to adjacent rooms each turn; map spread 2 turns ahead and pre-position specialists.",
      "Specialist chaining: Driver moves Fire Captain to hotspot; Fire Captain extinguishes 2; CAFS clears remainder—3 actions, 4+ fires removed.",
      "Victim priority: rescue victims in flashover-risk rooms first—victim death is loss condition, fire is tempo.",
      "Flashover prevention: never let room reach 4 fires; at 3 fires, dedicate full turn to that room.",
      "Structural damage: avoid actions that add structural damage unless victim rescue requires it.",
      "Endgame: when 4+ victims rescued, shift to fire containment—win is victim count, not fire elimination."
    ]
  },
  "horrified": {
    "metaDescription": "Expert Horrified: monster activation order, item delivery chains, and terror management.",
    "intro": "Horrified is monster activation management and item delivery. Experts sequence monster defeats and chain item deliveries across the map.",
    "quickTips": [
      "Defeat monsters in activation order—last activated is easiest to isolate.",
      "Chain item deliveries: pick up 2 items per trip when possible.",
      "Terror: stay below 5; each monster defeat reduces terror.",
      "Perk timing: use perks on delivery turns, not movement turns."
    ],
    "strategy": [
      "Monster activation order: identify which monster activates last; defeat it first while others are dormant.",
      "Item delivery chains: plan route that picks up 2+ items before delivery—single-item trips waste actions.",
      "Terror management: terror 5+ triggers loss; defeat one monster to drop terror before pushing to 5.",
      "Perk optimization: Advanced Actions perk on delivery turn (2 deliveries); Extra Move on multi-item pickup turn.",
      "Monster-specific tactics: Creature can't enter buildings—lure to open areas; Invisible Man reveals on item pickup.",
      "Endgame: when 2 monsters remain, focus items for final monster—ignore terror if delivery path is clear."
    ]
  },
  "robinson-crusoe": {
    "metaDescription": "Expert Robinson Crusoe: wound management, invention priority, and weather die mitigation.",
    "intro": "Robinson Crusoe is survival action economy. Experts prioritize inventions that reduce weather damage and manage wounds before they compound.",
    "quickTips": [
      "Shelter + roof before exploring far.",
      "Wounds compound—heal at 2 wounds, not 3.",
      "Invention: shovel and map before weapons.",
      "Weather die: build shelter to reduce weather damage."
    ],
    "strategy": [
      "Invention priority: Shelter → Roof → Shovel → Map → Weapon. Shovel enables faster resource gathering; map enables exploration.",
      "Wound management: 2 wounds = -1 action; 3 wounds = death risk. Heal at 2 always.",
      "Weather die mitigation: roof reduces weather damage by 1; without roof, weather can cost 2+ actions per turn.",
      "Exploration timing: explore only after shelter+roof+shovel—inadequate prep costs 2+ wounds per exploration.",
      "Resource conversion: wood → shelter → roof → invention pipeline; don't hoard wood past 3.",
      "Character specialization: Cook reduces food cost; Carpenter builds faster; Explorer explores safer."
    ]
  },
  "aeons-end": {
    "metaDescription": "Expert Aeon's End: breach opening order, spell charge timing, and nemesis turn card manipulation.",
    "intro": "Aeon's End has no shuffle—deck order is knowable. Experts open breaches in optimal order and time spell charges for nemesis turn card breaks.",
    "quickTips": [
      "Open breaches 1-4 before 5-6—cheaper breaches fund expensive ones.",
      "Spell charges: hold for nemesis turn card break, not random damage.",
      "Deck order: count cards—know when Power Ritual comes.",
      "Focus fire: all mages target same nemesis minion."
    ],
    "strategy": [
      "Breach opening order: breaches 1-4 cost less; open 1-2 round 1, 3-4 round 2, 5-6 when spells need them.",
      "Spell charge timing: charge spells to break nemesis turn card (minion spawn, attack)—not for incremental damage.",
      "Deck order exploitation: no shuffle means card 15 is always Power Ritual—plan 15 turns ahead.",
      "Nemesis minion focus: all players target same minion—killing one prevents damage; spreading kills none.",
      "Market composition: buy spells that scale with breaches open; don't buy before breaches ready.",
      "Mage pairing: Mist + Brama for spell charge generation; Xev for breach opening discount."
    ]
  },
  "marvel-champions": {
    "metaDescription": "Expert Marvel Champions: threat management, thwart sequencing, and identity-specific resource curves.",
    "intro": "Marvel Champions is threat tempo and thwart sequencing. Experts manage threat before it triggers scheme and sequence thwart for maximum threat reduction per action.",
    "quickTips": [
      "Thwart before threat hits scheme threshold.",
      "Identity resource: Spider-Man thwarts, Hulk attacks, Captain Marvel generates resources.",
      "Defeat minions before they activate.",
      "Alter-Ego form for resource generation, Hero for damage."
    ],
    "strategy": [
      "Threat management: thwart when threat is 2 below scheme threshold—waiting until 1 below risks acceleration.",
      "Thwart sequencing: thwart 2+ threat per action (Black Widow, Spider-Man) beats attack-then-thwart.",
      "Minion activation: minions activate before villain; defeat minions that deal most damage on activation.",
      "Alter-Ego/Hero timing: Alter-Ego rounds 1-2 for resource setup; Hero when threat approaches threshold.",
      "Identity curves: Spider-Man draws + thwarts; Hulk damages + heals; Captain Marvel resource generation.",
      "Villain phase exploitation: stun villain before villain phase to skip activation—stun timing is win condition."
    ]
  },
  "lord-of-the-rings-lcg": {
    "metaDescription": "Expert Lord of the Rings LCG: threat curve management, sphere balancing, and quest stage racing.",
    "intro": "LOTR LCG is threat curve and sphere balance. Experts manage threat growth, balance leadership/lore/spirit/tactics, and race quest stages before threat overwhelms.",
    "quickTips": [
      "Threat 49 = loss—keep below 40 when possible.",
      "Sphere balance: each sphere handles different encounter types.",
      "Quest stage racing: advance before threat spikes.",
      "Solo spirit for willpower, tactics for combat."
    ],
    "strategy": [
      "Threat curve: threat grows 1-2 per turn; at 40+, one bad encounter ends game. Thwart/location control threat.",
      "Sphere balancing: Leadership for resources; Lore for draw; Spirit for willpower; Tactics for combat—mono-sphere fails.",
      "Quest stage racing: advance quest when threat <35; waiting for perfect board state costs stages.",
      "Willpower commitment: commit only enough willpower to advance—excess willpower wastes characters.",
      "Encounter deck forecasting: count encounter cards; when 5 remain, threat spike likely—thwart before final 5.",
      "Hero pairing: Eowyn (spirit willpower) + Legolas (tactics combat) covers quest + combat."
    ]
  },
  "zombicide": {
    "metaDescription": "Expert Zombicide: noise management, spawn point control, and objective racing before spawn escalation.",
    "intro": "Zombicide is noise management and spawn control. Experts complete objectives before spawn rate escalates and minimize noise to control zombie placement.",
    "quickTips": [
      "Noise attracts spawns—use silent weapons when possible.",
      "Complete objectives before spawn rate increases.",
      "Spawn points: control which zones zombies enter.",
      "Abominations: focus fire, don't spread damage."
    ],
    "strategy": [
      "Noise management: each noise token draws spawn; silent kills (knife, crossbow) prevent spawn escalation.",
      "Spawn point control: position survivors to block spawn zones; zombies spawn in active zones.",
      "Objective racing: complete 2 objectives before spawn rate hits level 4+—late objectives face 10+ zombies per zone.",
      "Abomination focus: all survivors target one abomination; spreading damage leaves multiple abominations alive.",
      "Weapon progression: find better weapons before pushing deep—under-equipped survivors die to lucky spawn.",
      "Endgame: when 1 objective remains, sacrifice noise for speed—spawn control matters less than completion."
    ]
  },
  "mechs-vs-minions": {
    "metaDescription": "Expert Mechs vs Minions: command line programming, damage type matching, and schematic ability chaining.",
    "intro": "Mechs vs Minions is command line programming under pressure. Experts program damage type matching and chain schematic abilities for combo turns.",
    "quickTips": [
      "Match damage type to minion weakness—fire vs ice minions.",
      "Program 4+ slots before executing—partial programs waste turns.",
      "Schematic abilities chain—read all before programming.",
      "Boss phases: save ultimate abilities for phase transitions."
    ],
    "strategy": [
      "Damage type matching: each minion type has weakness; programming fire against ice minions doubles damage.",
      "Command line length: 4-slot programs beat 2-slot programs—wait to fill line before execute.",
      "Schematic chaining: Schematic A enables Schematic B on same turn—read both before programming order.",
      "Boss phase timing: save ultimate/damage abilities for phase 2-3 transitions when boss is vulnerable.",
      "Minion priority: kill minions that buff boss before boss—buffed boss costs 2x actions.",
      "Mech pairing: Ashe + Jinx for fire+ice coverage; Ziggs for AoE on minion swarms."
    ]
  },
  "ghost-stories": {
    "metaDescription": "Expert Ghost Stories: yin/yang balance, Tao token placement, and wu-feng timing.",
    "intro": "Ghost Stories is yin/yang balance and Tao placement. Experts balance exorcism tempo with yin accumulation and place Tao tokens for wu-feng vulnerability windows.",
    "quickTips": [
      "Yin kills at 4—exorcise before yin accumulates.",
      "Tao tokens on wu-feng's color weaken him.",
      "Exorcise ghosts before they reach middle.",
      "Purple ghosts: exorcise same turn they arrive."
    ],
    "strategy": [
      "Yin/yang balance: each failed exorcism adds yin; at yin 4, lose. Exorcise before yin 3.",
      "Tao placement: place Tao on wu-feng's current color before attacking—Tao reduces wu-feng health.",
      "Ghost arrival priority: ghosts reaching middle board become harder; exorcise at arrival, not after movement.",
      "Purple ghost rule: purple ghosts activate on arrival—exorcise same turn or face double activation.",
      "Wu-feng timing: attack wu-feng when Tao count on his color is 3+; below 3, focus ghosts.",
      "Taoist pairing: yellow (movement) + green (exorcism) for board control + damage."
    ]
  },
  "castle-panic": {
    "metaDescription": "Expert Castle Panic: tower segment priority, trade timing, and monster token denial.",
    "intro": "Castle Panic is tower defense with card trading. Experts prioritize tower segments by breach risk and time trades for optimal monster kills.",
    "quickTips": [
      "Repair breached towers before attacking.",
      "Trade 1:1 when you need specific color for kill.",
      "Kill monsters in walls before they reach towers.",
      "Save Axe for 2-damage kills on strong monsters."
    ],
    "strategy": [
      "Tower segment priority: center tower breaches lose game fastest; repair center before outer.",
      "Trade timing: trade when you have 2 of one color and need 1 of another for kill—don't trade for collection.",
      "Wall kills: monsters in walls are 1 HP; kill before they enter tower zone.",
      "Axe conservation: Axe does 2 damage; save for Troll/Goblin King, not 1-HP monsters.",
      "Barter timing: Barter lets trade 2:1; use when hand has 3+ of one color.",
      "Endgame: when 2 monsters in tower zone, all players focus tower—ignore wall monsters."
    ]
  },
  "axis-and-allies": {
    "metaDescription": "Expert Axis & Allies: IPC income curves, transport shucking, and national objective timing.",
    "intro": "Axis & Allies is IPC economy and transport logistics. Experts maximize income curves, shuck infantry via transports, and time national objectives for income spikes.",
    "quickTips": [
      "Russia: trade space for time; don't die in round 1.",
      "Germany: pressure Russia while Japan expands.",
      "UK: secure Africa IPCs before D-Day.",
      "US: build transports, not battleships."
    ],
    "strategy": [
      "IPC income curves: Axis needs round 5-6 income lead; Allies win round 8+ when US production overwhelms. Germany must pressure Russia by round 3.",
      "Transport shucking: UK/US shuck 4 infantry per transport per turn to Europe—infantry density beats naval investment.",
      "National objective timing: Japan captures Dutch East Indies round 2 for +10 IPC; Germany holds France round 1 for +5.",
      "Russia survival: fall back to Moscow perimeter; trading Ukraine for time is correct.",
      "D-Day timing: Allies land round 5-6 when Germany has 2 fronts; round 4 is too early (insufficient buildup)."
    ]
  },
  "twilight-struggle": {
    "metaDescription": "Expert Twilight Struggle: DEFCON timing, ops/event sequencing, and influence placement for control thresholds.",
    "intro": "Twilight Struggle experts treat DEFCON as a resource. Influence placement targets control thresholds; ops/event sequencing maximizes tempo without triggering nuclear war.",
    "quickTips": [
      "Never play ops in DEFCON 2 battleground countries.",
      "Realignment beats coup when you have adjacency advantage.",
      "Space race: dump bad events, not good ops cards.",
      "Asia/Africa/Middle East: 2 influence for control, not 3."
    ],
    "strategy": [
      "DEFCON timing: coup in battleground drops DEFCON; at DEFCON 2, coups are forbidden. Play ops in non-battleground at DEFCON 2; save coups for DEFCON 3+.",
      "Ops/event sequencing: play event when opponent benefits more; play ops when you need influence. Never waste 4-op card as event when you need 4 influence.",
      "Control thresholds: 2 influence for control in Asia/Africa/ME; 3 in Europe. Over-investing in Europe bleeds ops.",
      "Realignment vs coup: realignment when you have 2+ adjacent countries; coup when you need to break control and DEFCON allows.",
      "Scoring card timing: play scoring when you have ops advantage that turn; never hold scoring card opponent can play.",
      "DEFCON manipulation: force opponent to coup at DEFCON 2 (they lose) by placing influence in battleground they must answer."
    ]
  },
  "diplomacy": {
    "metaDescription": "Expert Diplomacy: stalemate line construction, support order sequencing, and alliance betrayal timing.",
    "intro": "Diplomacy is negotiation backed by support order math. Experts construct stalemate lines, sequence supports for guaranteed gains, and time betrayals for maximum positional swing.",
    "quickTips": [
      "Support holds beat unsupported attacks.",
      "Stalemate lines: 3 units can hold 4 provinces.",
      "Alliance betrayal: strike when ally is overextended.",
      "Convoy: army to dislodged sea can convoy."
    ],
    "strategy": [
      "Stalemate line construction: 3 units in defensive formation hold 4+ provinces; identify stalemate lines before attacking.",
      "Support order sequencing: A supports B into C only when no enemy support cuts; always check support cut paths.",
      "Alliance betrayal timing: betray when ally has 2+ units committed elsewhere; betrayal during their attack phase maximizes gain.",
      "Convoy exploitation: convoy army through dislodged fleet's sea zone—creates unexpected attack vectors.",
      "Draw negotiation: when 3 powers remain, offer stalemate line to weakest—eliminates them, you fight 1v1.",
      "Opening theory: France-England alliance vs Germany; Italy-Austria vs Turkey—know standard openings to predict supports."
    ]
  },
  "memoir-44": {
    "metaDescription": "Expert Memoir '44: card counting, terrain exploitation, and unit activation priority.",
    "intro": "Memoir '44 is card-driven tactics. Experts count cards in the draw pile, exploit terrain for defense, and prioritize unit activation for objective control.",
    "quickTips": [
      "Count cards—know when armor section is depleted.",
      "Hills and towns: +1 defense die.",
      "Activate units that can reach objective this turn.",
      "Right flank card: often weakest—save for retreat."
    ],
    "strategy": [
      "Card counting: 6 cards per section; when 2 armor played, 4 remain—plan armor push when opponent's section depleted.",
      "Terrain exploitation: hills/towns give +1 defense; position infantry on objectives with terrain.",
      "Activation priority: activate unit that reaches objective or kills key unit; don't activate for movement alone.",
      "Section card management: left/center/right cards restrict activation; play section card when that flank has best opportunity.",
      "Ambush timing: ambush when opponent commits 2+ units to attack—wipes their turn.",
      "Medal racing: 4 medals wins; objective control gives medals—prioritize objectives over kills."
    ]
  },
  "war-of-the-ring": {
    "metaDescription": "Expert War of the Ring: action dice allocation, fellowship progression, and military vs corruption race.",
    "intro": "War of the Ring is action dice economy. Free Peoples race fellowship to Mount Doom while Shadow militarily pressures; experts allocate dice by game phase.",
    "quickTips": [
      "Fellowship: move when corruption is low, hide when high.",
      "Shadow: military pressure forces Free Peoples dice to defense.",
      "Action dice: use character dice for fellowship, army dice for battle.",
      "Ring progression: each step toward Mordor increases corruption risk."
    ],
    "strategy": [
      "Action dice allocation: Free Peoples use character dice for fellowship movement, army dice for defense; Shadow uses army dice for conquest, character for hunt.",
      "Fellowship progression: move fellowship when corruption <3; hide and heal when corruption 4+.",
      "Military vs corruption race: Shadow wins by conquering 10 points of Free Peoples settlements; Free Peoples win by ring destruction.",
      "Hunt allocation: Shadow allocates hunt tiles to fellowship path; more tiles = higher corruption on reveal.",
      "Elven rings: use elven ring abilities before dice roll—action generation compounds.",
      "Endgame: when fellowship reaches Mordor, Shadow must hunt aggressively; Free Peoples must destroy ring before military loss."
    ]
  },
  "root": {
    "metaDescription": "Expert Root: faction-specific meta, sympathy timing, and coalition denial for Woodland Alliance.",
    "intro": "Root experts play faction-specific metas. Marquise engine-builds, Eyrie decree management, Woodland sympathy bursts, and Vagabond coalition timing each have distinct win paths.",
    "quickTips": [
      "Marquise: sawmill- recruiter- lodge triangle before warriors.",
      "Eyrie: never add to decree you can't fulfill.",
      "Woodland: sympathy before revolt.",
      "Vagabond: repair then coalition with dominant faction."
    ],
    "strategy": [
      "Marquise meta: sawmill → recruiter → lodge pipeline; 2 warriors per clearing for control; overbuild before opponents contest.",
      "Eyrie decree: start with 2-action decree; add only actions you'll repeat every turn; decree crash = elimination.",
      "Woodland sympathy: spread sympathy to 3+ clearings before revolt; revolt with 2+ sympathy in target clearing.",
      "Vagabond coalition: repair items, then coalition with faction at 20+ points—they win, you win.",
      "Cats vs Birds: Marquise contests Eyrie starting clearing round 1; delays Eyrie decree setup.",
      "Faction denial: when behind, attack leader's key buildings, not random—deny VP engine."
    ]
  },
  "dune-imperium": {
    "metaDescription": "Expert Dune Imperium: water placement for conflict thresholds, alliance card timing, and spice debt management.",
    "intro": "Dune Imperium is water placement for conflict control and alliance card tempo. Experts place water to hit conflict thresholds and time alliance plays for maximum influence.",
    "quickTips": [
      "Water on conflict: 2 water = 2 troops in conflict.",
      "Alliance cards: play when you can afford influence cost.",
      "Spice must flow: borrow spice early, repay with endgame VP.",
      "Intrigue: combat intrigue wins conflicts; economic intrigue builds engine."
    ],
    "strategy": [
      "Water placement: 2 water in conflict = 2 troops; place water to reach threshold (4, 6, 8) not spread.",
      "Conflict threshold: 4/6/8 troops trigger rewards; aim for 2nd place at 6 when you can't win—2nd still scores.",
      "Alliance timing: play alliance when you have 2+ influence and can afford card cost; early alliances fund late-game.",
      "Spice debt: borrow 3 spice round 1-2 for key card; repay by round 4 or lose VP.",
      "Intrigue balance: 1 combat intrigue per conflict; rest economic for solari/recruitment.",
      "Faction focus: Atreides (draw), Harkonnen (intrigue), Fremen (combat)—pick 2, not 3."
    ]
  },
  "small-world": {
    "metaDescription": "Expert Small World: race/power combo valuation, decline timing, and region count optimization.",
    "intro": "Small World is race/power combo efficiency and decline timing. Experts value combos by regions held per turn and decline before power is exhausted.",
    "quickTips": [
      "Combo value: regions held × coins per turn.",
      "Decline when you can't expand—don't overextend.",
      "In decline: 1 coin per region, no attacks.",
      "Avoid contested regions—spread to empty areas."
    ],
    "strategy": [
      "Combo valuation: Tritons (water) + Flying = 8+ regions; Zombies + Diplomat = slow but steady. Value = regions × turns before decline.",
      "Decline timing: decline when 2+ regions are contested and you can't conquer new—decline at peak, not after losses.",
      "In-decline income: 1 coin per region in decline; position decline tokens on high-value regions.",
      "Region count: 6 regions beats 4 with better combo—quantity over quality in early game.",
      "Power exhaustion: Skeletons grow on decline; decline Skeletons when at 10+ tokens for maximum final income.",
      "Endgame: last race should be high-coin (Humans, Sorcerers) for final round scoring."
    ]
  },
  "kemet": {
    "metaDescription": "Expert Kemet: pyramid control, power tile acquisition order, and battle card bluffing.",
    "intro": "Kemet is pyramid control and power tile sequencing. Experts control pyramids for prayer points, acquire powers in optimal order, and bluff battle cards.",
    "quickTips": [
      "Pyramid control: 1 prayer per pyramid level per turn.",
      "Power tiles: mobility and recruitment before combat.",
      "Battle cards: bluff retreat when you have high damage.",
      "Night phase: buy powers before praying."
    ],
    "strategy": [
      "Pyramid control: 3 pyramids = 3 prayer/turn; contest pyramids before buying expensive powers.",
      "Power acquisition order: Mobility (2) → Recruitment (2) → Combat (3) → Divine. Mobility enables pyramid contest.",
      "Battle card bluffing: play Retreat when you have 4+ damage card—opponent expects fight, you avoid losses.",
      "Night phase sequencing: buy 1 power, then pray; don't pray before buying—powers cost prayer.",
      "Battle timing: attack when opponent has few units; Kemet rewards aggressive expansion.",
      "Victory points: 10 VP wins; VP powers (Phoenix, Divine) are endgame, not opening."
    ]
  },
  "blood-rage": {
    "metaDescription": "Expert Blood Rage: clan upgrade pathing, rage allocation, and battle loss scoring.",
    "intro": "Blood Rage rewards controlled battle losses. Experts path clan upgrades for synergy and allocate rage for quests over combat when behind on glory.",
    "quickTips": [
      "Losing battle with 1 figure = 1 glory; winning with 3 = 1 glory.",
      "Clan upgrades: ship and axe before warrior count.",
      "Rage on quests when you can't win battle.",
      "Yggdrasil: pick upgrades that synergize with clan."
    ],
    "strategy": [
      "Battle loss scoring: 1 figure in losing battle = 1 glory + 1 figure saved; 3 figures winning = 1 glory. Lose smart.",
      "Clan upgrade pathing: Ship (2) → Axe (2) → Warrior Count (3) → Special. Ship enables quest completion.",
      "Rage allocation: 4 rage on quest when battle is unwinnable; 2 rage on battle when you can win with 1 figure.",
      "Yggdrasil synergy: pick upgrades matching clan (Wolf = combat, Raven = quest).",
      "Ragnarok timing: when Ragnarok approaches, position 1 figure per province for loss scoring.",
      "Monster timing: kill monsters for glory when you have axe upgrade; don't contest without."
    ]
  },
  "inis": {
    "metaDescription": "Expert Inis: Brenn law card timing, clan token placement, and festival action selection.",
    "intro": "Inis is Brenn law manipulation and clan token area control. Experts time Brenn cards for maximum impact and place tokens for festival action advantage.",
    "quickTips": [
      "Brenn law: play when it benefits you most, not immediately.",
      "Clan tokens: 2+ in territory for control.",
      "Festival: pick action others won't contest.",
      "Sanctuary: 6 clan figures for victory."
    ],
    "strategy": [
      "Brenn law timing: hold Brenn card until opponent commits to action; play law that nullifies their plan.",
      "Clan token placement: 2 tokens = control; place in territories with festivals for action advantage.",
      "Festival action selection: pick action with fewest opponents (e.g., Movement when others want Combat).",
      "Sanctuary path: 6 clan figures in sanctuary wins; prioritize sanctuary over territory spread.",
      "Epic card timing: play epic when it wins festival or blocks opponent epic.",
      "Seasonal timing: winter favors defense; summer favors expansion—adjust Brenn plays."
    ]
  },
  "twilight-imperium": {
    "metaDescription": "Expert Twilight Imperium: strategy card timing, technology pathing, and objective race tempo.",
    "intro": "Twilight Imperium is 8-hour strategy card and technology optimization. Experts time strategy cards for objective windows and path technologies for synergy.",
    "quickTips": [
      "Strategy cards: pick Trade when you need trade goods; Technology when you need tech.",
      "Technology: path to War Sun or Dreadnought.",
      "Objectives: score 2 per round when possible.",
      "Speaker: pass early to get initiative next round."
    ],
    "strategy": [
      "Strategy card timing: Leadership when you need command tokens; Technology when tech skip objective; Imperial when you can score 2 objectives.",
      "Technology pathing: War Sun (2 red, 2 yellow) or Dreadnought (2 blue, 1 red)—pick one path round 2.",
      "Objective race: public objectives score 1; secret score 1; aim for 2 VP per round from round 4.",
      "Speaker timing: pass first to become speaker next round—speaker chooses strategy card 1.",
      "Fleet logistics: carriers + fighters for combat; dreadnoughts for defense.",
      "Alliance timing: negotiate when 2 players approach 10 VP—eliminate leader together."
    ]
  },
  "star-wars-rebellion": {
    "metaDescription": "Expert Star Wars Rebellion: probe droid placement, reputation vs military victory paths, and leader ability chaining.",
    "intro": "Star Wars Rebellion splits Rebel reputation vs military paths. Empire hunts base; Rebels build reputation or military. Experts optimize probe placement and leader chains.",
    "quickTips": [
      "Rebels: hide base, build reputation.",
      "Empire: probe to find base.",
      "Leader abilities chain in combat.",
      "Reputation 14 = Rebel win; 16 Death Stars = Empire win."
    ],
    "strategy": [
      "Probe placement (Empire): probe systems adjacent to Rebel activity; probe cards reveal base sector.",
      "Reputation path (Rebel): complete objectives for reputation; 14 reputation wins without destroying Death Star.",
      "Military path (Rebel): destroy 2 Death Stars for military win—requires heavy combat investment.",
      "Leader chaining: Vader + Emperor in space combat; Luke + Leia in ground—abilities stack.",
      "Base relocation: Rebels move base when probe finds sector; move to opposite map corner.",
      "Combat resolution: space combat first; ground combat only if space lost—prioritize space leaders."
    ]
  },
  "hive": {
    "metaDescription": "Expert Hive: queen pinning, mobility piece sacrifice, and endgame grasshopper positioning.",
    "intro": "Hive is piece mobility and queen pinning. Experts pin the opponent queen with beetles, sacrifice mobility pieces for tempo, and position grasshopper for endgame.",
    "quickTips": [
      "Pin queen with beetle on top—queen can't move.",
      "Grasshopper jumps in straight lines—endgame piece.",
      "Spider and ant for mobility; beetle for pinning.",
      "One Hive rule: never break the connected group."
    ],
    "strategy": [
      "Queen pinning: beetle on opponent queen = queen immobile; pin before they expand.",
      "Mobility sacrifice: trade ant for ant to gain tempo; ant moves 3 spaces, highest mobility.",
      "Grasshopper endgame: grasshopper jumps over pieces—position for final queen surround.",
      "Piece value: Queen (mobility) > Beetle (pin) > Spider (3-step) > Ant (3-step) > Grasshopper (jump).",
      "Opening: spider/ant expansion before queen placement; queen placed turn 3-4.",
      "Endgame: surround opponent queen with 6 pieces; grasshopper delivers final surround from distance."
    ]
  },
  "quoridor": {
    "metaDescription": "Expert Quoridor: wall placement for path denial, pawn advancement tempo, and wall count conservation.",
    "intro": "Quoridor is pathfinding with wall placement. Experts place walls to maximize opponent path length while conserving walls for endgame.",
    "quickTips": [
      "Wall placement: force opponent 4+ extra moves.",
      "Advance pawn when opponent is blocked.",
      "Conserve 2+ walls for endgame.",
      "Never wall yourself into longer path."
    ],
    "strategy": [
      "Wall placement math: wall that adds 4+ moves to opponent path is worth 1 wall; 2-move wall is waste.",
      "Path denial: place wall to force opponent through your pawn's column—creates block.",
      "Wall conservation: 10 walls each; use 6-7 by midgame, save 3 for endgame block.",
      "Pawn tempo: advance when opponent spends turn on wall; 2 pawn moves beat 1 wall.",
      "Endgame: with 2 walls and pawn 2 from goal, wall opponent's direct path—forces 4+ detour.",
      "Self-path check: before placing wall, verify your path isn't longer than opponent's."
    ]
  },
  "santorini": {
    "metaDescription": "Expert Santorini: god power exploitation, build-block sequencing, and domed worker positioning.",
    "intro": "Santorini is 3D movement with god powers. Experts exploit god abilities for build-block sequences and position workers for domed win threats.",
    "quickTips": [
      "Build before move when blocking opponent win.",
      "God powers: Athena blocks opponent build adjacent.",
      "Dome on your level 3 before opponent builds level 3.",
      "Two workers: one threatens win, one blocks."
    ],
    "strategy": [
      "Build-block sequencing: if opponent can win next turn, build dome on their level 3 before moving—blocks win.",
      "God power exploitation: Athena prevents opponent build adjacent; position to block key squares.",
      "Domed worker positioning: worker on level 2 with build to level 3 = win threat; opponent must block.",
      "Two-worker coordination: worker A threatens win; worker B blocks opponent's block path.",
      "Rising tide (if used): level 1 start changes opening—build up faster.",
      "Endgame: when both have level 2 workers, build-block wins over move-up."
    ]
  },
  "onitama": {
    "metaDescription": "Expert Onitama: card rotation prediction, student sacrifice, and master path to temple.",
    "intro": "Onitama is card rotation chess. Experts predict which cards return to opponent, sacrifice students for tempo, and path master to temple.",
    "quickTips": [
      "Cards rotate: played card goes to opponent.",
      "Sacrifice student to advance master.",
      "Master to temple wins; student capture doesn't.",
      "Track which cards opponent will have next turn."
    ],
    "strategy": [
      "Card rotation prediction: when you play card X, opponent gets it next turn—don't play cards that give opponent winning move.",
      "Student sacrifice: move student into capture to free master path—master win > student loss.",
      "Master pathing: shortest path to opponent temple; 4-5 moves with correct cards.",
      "Card denial: play card that would win for you but is useless to opponent when they receive it.",
      "Temple control: occupy center for card flexibility; edge limits movement.",
      "Endgame: when master 2 from temple, sacrifice both students to clear path."
    ]
  },
  "tak": {
    "metaDescription": "Expert Tak: road vs wall win condition, capstone flattening, and piece placement tempo.",
    "intro": "Tak is road or wall victory on a growing board. Experts choose win condition early and use capstone to flatten opponent walls.",
    "quickTips": [
      "Road: connect opposite edges.",
      "Wall: stack 3+ pieces in one square.",
      "Capstone flattens walls to roads.",
      "Place pieces to block opponent road."
    ],
    "strategy": [
      "Win condition choice: road is faster on 5x5; wall requires capstone—choose road unless opponent commits to road.",
      "Capstone timing: flatten opponent wall when it reaches 3 high—prevents wall win.",
      "Road blocking: place piece to break opponent's shortest path; force 4+ detour.",
      "Piece tempo: 2 placement moves beat 1 capstone move early; capstone wins endgame.",
      "Board growth: expand board when opponent's road is 2 from win—adds distance.",
      "Endgame: with capstone and 2 stones, flatten then road in 2 turns."
    ]
  },
  "yinsh": {
    "metaDescription": "Expert Yinsh: ring placement for line potential, marker flipping chains, and ring removal timing.",
    "intro": "Yinsh is ring placement and marker flipping. Experts place rings for line potential, chain marker flips, and time ring removal for maximum line clears.",
    "quickTips": [
      "5 in a row removes ring; 3 rings removed wins.",
      "Place rings where they create multiple line threats.",
      "Flip markers to create flip chains.",
      "Remove ring when it clears 2+ lines."
    ],
    "strategy": [
      "Ring placement: place ring where 4 markers already align—one move from line.",
      "Marker flip chains: flip marker that flips adjacent markers—chain flips create multiple lines.",
      "Ring removal timing: remove ring when it completes 2 lines (removes 2 opponent rings).",
      "Line threat pressure: create 2 simultaneous line threats—opponent can block one.",
      "Center control: center rings influence more lines; edge rings are defensive.",
      "Endgame: with 2 rings, create double line threat; opponent blocks one, you complete other."
    ]
  },
  "tzaar": {
    "metaDescription": "Expert Tzaar: piece type balance, capture priority, and endgame tzaar preservation.",
    "intro": "Tzaar is capture with piece type balance. Experts maintain tzarrs, tazars, and tots balance while capturing opponent pieces.",
    "quickTips": [
      "Lose all of one type = loss.",
      "Capture highest value piece when possible.",
      "Tzaar (big) > Tazar (medium) > Tot (small).",
      "Don't sacrifice tzaar for tot."
    ],
    "strategy": [
      "Piece type balance: never let one type drop to 0; capture opponent's strongest type first.",
      "Capture priority: tzaar capture removes opponent's strongest; tot capture is tempo.",
      "Endgame tzaar preservation: with 2 tzaars, never risk both—one tzaar must survive.",
      "Stack control: pieces on stacks are harder to capture; build stacks defensively.",
      "Forced capture: when capture available, must capture—use to force opponent into bad captures.",
      "Endgame: when opponent has 1 of a type, capture it to win—prioritize type elimination."
    ]
  },
  "undaunted-normandy": {
    "metaDescription": "Expert Undaunted Normandy: deck building tempo, suppression fire, and initiative control.",
    "intro": "Undaunted is deck-building tactics. Experts build lean decks, use suppression to pin opponents, and control initiative for action order.",
    "quickTips": [
      "Remove weak cards from deck—lean deck cycles faster.",
      "Suppression pins opponent units.",
      "Initiative: play initiative card when you need first action.",
      "Scout reveals opponent hand—plan suppression."
    ],
    "strategy": [
      "Deck building: remove 1-2 weak cards per scenario; 6-card deck cycles in 3 turns.",
      "Suppression fire: suppress opponent key unit before they act—pins for 1 turn.",
      "Initiative control: play initiative when you have kill shot; pass initiative when opponent has weak hand.",
      "Scout timing: scout before opponent plays—reveals hand for suppression targeting.",
      "Unit positioning: units in cover take less damage; advance under suppression.",
      "Endgame: when opponent deck is 3 cards, scout every turn—predictable hand."
    ]
  },
  "commands-and-colors": {
    "metaDescription": "Expert Commands & Colors: card play for battle back, terrain line exploitation, and weakened flank targeting.",
    "intro": "Commands & Colors is card-driven battle. Experts play cards for battle back, exploit terrain for defense, and target weakened flanks.",
    "quickTips": [
      "Battle back: defender attacks if they survive.",
      "Terrain: hills reduce damage.",
      "Play card matching section with most units.",
      "Weakened flank: attack where opponent has fewest blocks."
    ],
    "strategy": [
      "Battle back exploitation: leave 1 block to survive and battle back—2 damage for 1 block trade.",
      "Terrain lines: hills and towns give defense; hold terrain with few blocks.",
      "Card-section matching: play left card when left flank has 4+ units—maximizes activation.",
      "Weakened flank: attack flank with 2 blocks; don't attack 4-block center.",
      "Leadership: leadership card adds to all battles that turn—play when 2+ battles.",
      "Endgame: when opponent has 2 flags, attack aggressively—flags win, not block preservation."
    ]
  },
  "sekigahara": {
    "metaDescription": "Expert Sekigahara: loyalty testing, battle card commitment, and deployment zone control.",
    "intro": "Sekigahara is loyalty testing and battle commitment. Experts test opponent loyalty with small battles and commit cards when loyalty is confirmed.",
    "quickTips": [
      "Loyalty: opponent may betray if you attack their daimyo.",
      "Test loyalty with small battles first.",
      "Commit elite cards when loyalty confirmed.",
      "Deployment: control central deployment zones."
    ],
    "strategy": [
      "Loyalty testing: attack with 1-2 units first; if opponent commits, loyalty likely true.",
      "Battle card commitment: save elite cards for decisive battle; don't commit on loyalty tests.",
      "Deployment zone control: central zones give reinforcement advantage; control before main battle.",
      "Betrayal timing: betray when opponent has committed elite cards—wipe their army.",
      "Daimyo protection: keep daimyo behind front line; daimyo loss = army collapse.",
      "Endgame: when 2 armies remain, loyalty test all opponents before final battle."
    ]
  },
  "pax-pamir": {
    "metaDescription": "Expert Pax Pamir: coalition pivoting, spy network placement, and dominance vs victory condition racing.",
    "intro": "Pax Pamir is coalition pivoting in the Great Game. Experts pivot between British and Russian coalitions, place spies for network control, and race dominance vs victory conditions.",
    "quickTips": [
      "Coalition: pivot when your coalition is winning.",
      "Spies: place in contested territories.",
      "Dominance: 4+ points in one coalition.",
      "Victory: complete patron agenda."
    ],
    "strategy": [
      "Coalition pivoting: join winning coalition by turn 3; pivot to losing coalition if they offer better patron cards.",
      "Spy network: spies in 3+ territories give card draw; place in territories opponents need.",
      "Dominance path: 4+ coalition points wins; military cards give coalition points.",
      "Victory path: patron agenda (e.g., 3 military victories) wins; agenda cards guide deck.",
      "Tableau building: buy cards matching patron; don't diversify.",
      "Endgame: when opponent has 3 coalition points, pivot or block their 4th."
    ]
  },
  "coin-series": {
    "metaDescription": "Expert COIN series: faction eligibility, operation sequencing, and event card leverage for multi-faction tempo.",
    "intro": "COIN series games are asymmetric insurgency. Experts maximize faction eligibility, sequence operations for compound effects, and leverage events for tempo.",
    "quickTips": [
      "Eligibility: pass when you can't act effectively.",
      "Operations: pair with capability for bonus.",
      "Events: play when opponent faction benefits less.",
      "Train/assault: clear enemies before building."
    ],
    "strategy": [
      "Faction eligibility: pass if no good operation—forcing others to act first gives information.",
      "Operation sequencing: Propaganda then Build then Attack—each compounds.",
      "Event leverage: play event when your faction gains more than opponent's eligible faction.",
      "Train before assault: train troops increase assault success; assault without train wastes.",
      "Control vs opposition: COIN factions need 2+ more control than opposition; focus control in key spaces.",
      "Multi-faction: in 4-faction games, negotiate to eliminate leader—3-way beats 1 leader."
    ]
  }
};
