/** @typedef {{ metaDescription: string; intro: string; quickTips: [string,string,string,string]; strategy: string[] }} Locale */
/** @typedef {{ categoryId: string; difficulty?: string; content: { en: Locale; tr: Locale; de: Locale } }} Entry */

/** @param {string} categoryId @param {string} difficulty @param {Locale} en @param {Locale} tr @param {Locale} de @returns {Entry} */
function g(categoryId, difficulty, en, tr, de) {
  return { categoryId, difficulty, content: { en, tr, de } };
}

/** @type {Record<string, Entry>} */
export const wordsExpert = {
  scrabble: g("word-games", "simple",
    {
      metaDescription: "Expert Scrabble strategy: leave entropy on the rack, fish bingos with S/Z retention, block premium lanes, and trade for stem-friendly leaves.",
      intro: "Top Scrabble players win on rack management and board geometry, not vocabulary alone. The margin is in what you leave behind after every play—balanced leaves that preserve bingo lanes while denying opponents triple-word access.",
      quickTips: [
        "Keep stems like RETAINS and SATINE intact; one blank plus a stem is a bingo pipeline.",
        "Play parallel to existing words to open fewer premium hooks than perpendicular plays.",
        "Trade aggressively when your rack has 5+ vowels or 5+ consonants with no S or blank.",
        "Defensive scoring: a 12-point safe play beats a 28-point opening that gifts a triple."
      ],
      strategy: [
        "Rack entropy: after each play, count vowel-consonant ratio and duplicate tiles. Expert leaves aim for 3-3 or 4-3 splits with at least one flexible hook letter (S, E, R, N).",
        "Opening theory favors central control with balanced leaves over max immediate score. A 20-point opener that leaves RETAINS is superior to a 35-point opener with four Is.",
        "Endgame fishing: when behind, play short words that keep a premium tile (blank, S, high face) while forcing opponent to break a scoring lane. When ahead, pass or exchange to burn clock and shrink board.",
        "Premium blocking: track which triple-word lines remain open. Sacrifice 8-15 points to place a vowel on a hot corner if it closes two bingo lanes at once.",
        "Tracking unseen tiles: mentally bucket Q, Z, X, J, blanks. If two blanks are gone and you hold one, opponent bingo probability drops—play tighter defense on open boards."
      ]
    },
    {
      metaDescription: "Uzman Scrabble stratejisi: rack entropisi, bingo stemleri, premium bloklama ve S/Z tutma ile ustunluk.",
      intro: "Elite Scrabble oyunculari sadece kelime bilgisiyle degil, rack yonetimi ve tahta geometrisiyle kazanir. Her hamleden sonra biraktiginiz harfler bingo yollarini korurken rakibe uc kat acigi kapatmamalidir.",
      quickTips: [
        "RETAINS ve SATINE gibi stemleri koruyun; bir joker arti stem bingo hattidir.",
        "Mevcut kelimelere paralel oynayarak premium kancalari dik oynamaya gore daha az acin.",
        "5+ sesli veya S/joker olmadan 5+ sessiz varken agresif takas yapin.",
        "Savunmali puanlama: rakibe uc kat hediye eden 28 puan yerine 12 puanlik guvenli hamle."
      ],
      strategy: [
        "Rack entropisi: her hamleden sonra sesli-sessiz oranini sayin. Uzman leave'ler 3-3 veya 4-3 dengesi ve S, E, R, N gibi esnek harfler hedefler.",
        "Acilis teorisi anlik maksimum puandan cok merkez kontrolu ve dengeli leave tercih eder. RETAINS birakan 20 puanli acilis, dort I birakan 35 puandan ustundur.",
        "Son oyun balik tutma: gerideyken premium harfi tutan kisa kelimeler oynayin; ondeyken takas veya pas ile tahtayi daraltin.",
        "Premium bloklama: acik uc kat cizgilerini izleyin. Iki bingo yolunu kapatan koseye sesli koymak icin 8-15 puan feda edin.",
        "Gorulmeyen tas takibi: Q, Z, X, J ve jokerleri zihinde gruplayin. Iki joker gittiyse ve sizde biri varsa bingo olasiligi duser—savunmayi sikilastirin."
      ]
    },
    {
      metaDescription: "Scrabble-Expertenstrategie: Rack-Entropie, Bingo-Stems, Premium-Blockaden und S/Z-Retention.",
      intro: "Top-Scrabble-Spieler gewinnen durch Rack-Management und Brettgeometrie, nicht nur Wortschatz. Der Vorteil liegt im Leave nach jedem Zug—balancierte Buchstaben, die Bingo-Linien offen halten und Gegnern keine Dreifach-Woerter schenken.",
      quickTips: [
        "Stems wie RETAINS und SATINE halten; ein Blank plus Stem ist eine Bingo-Pipeline.",
        "Parallel zu bestehenden Woertern spielen, um weniger Premium-Hooks zu oeffnen.",
        "Bei 5+ Vokalen oder 5+ Konsonanten ohne S oder Blank aggressiv tauschen.",
        "Defensives Scoren: 12 sichere Punkte schlagen 28 Punkte, die ein Dreifach verschenken."
      ],
      strategy: [
        "Rack-Entropie: nach jedem Zug Vokal-Konsonanten-Verhaeltnis zaehlen. Experten-Leaves zielen auf 3-3 oder 4-3 mit flexiblen Hook-Buchstaben (S, E, R, N).",
        "Eröffnungstheorie bevorzugt Zentralkontrolle mit balancierten Leaves statt Maximalscore. Ein 20-Punkte-Opener mit RETAINS-Leave schlaegt 35 Punkte mit vier Is.",
        "Endspiel-Fishing: bei Rueckstand kurze Zuege mit Premium-Buchstabe; bei Fuehrung tauschen oder passen, um das Brett zu verengen.",
        "Premium-Blocking: offene Dreifach-Linien tracken. 8-15 Punkte opfern, um eine heisse Ecke zu schliessen, die zwei Bingo-Lanes blockiert.",
        "Unseen-Tiles: Q, Z, X, J, Blanks mental bucketen. Sind zwei Blanks weg und du haeltst einen, sinkt die Gegner-Bingo-Wahrscheinlichkeit."
      ]
    }
  ),

  boggle: g("word-games", "simple",
    {
      metaDescription: "Expert Boggle tactics: prefix trie scanning, Qu tile handling, -ING/-ED suffix mining, and anti-fatigue board sweeps.",
      intro: "Competitive Boggle is a visual search problem solved with systematic sweeps and morphological pattern recognition. Experts scan by letter frequency clusters, not random wandering.",
      quickTips: [
        "Start every board from corners and edges where long words anchor.",
        "Treat Qu as a single unit; never waste time seeking a standalone Q path.",
        "Hunt suffix chains: -ING, -ERS, -EST, -TION endings unlock 6+ letter words fast.",
        "In timed finals, write 4-letter words first to bank points before chasing 8-letter gems."
      ],
      strategy: [
        "Sweep protocol: clockwise spiral from top-left, then reverse diagonal passes. This beats ad-hoc searching and surfaces 15-20% more words under pressure.",
        "Morphological mining: once you spot ROOT+ING, backtrack the root across the grid before moving on—compound extensions (RE+START+ING) often hide on adjacent cubes.",
        "High-value letter pairing: prioritize boards where S, R, E cluster; English morphology makes these the densest word factories.",
        "Duplicate suppression: in head-to-head, finding words opponents miss matters more than longest word. Train obscure but legal 4-5 letter plurals and past tenses.",
        "Endgame sprint: final 30 seconds, abandon 7+ letter hunts; flood the sheet with verified 3-5 letter words you have already visually confirmed."
      ]
    },
    {
      metaDescription: "Uzman Boggle taktikleri: sistematik tarama, Qu birimi, -ING/-ED madenciligi ve yorgunluk onleme.",
      intro: "Rekabetci Boggle rastgele gezmek degil, sistematik tarama ve ek tanima ile cozulur. Uzmanlar harf kumesi frekansina gore tarar.",
      quickTips: [
        "Her tahtaya kose ve kenarlardan baslayin; uzun kelimeler orada tutunur.",
        "Qu'yu tek birim sayin; bagimsiz Q yolu aramayin.",
        "-ING, -ERS, -EST, -TION eklerini avlayin; 6+ harf hizla gelir.",
        "Sureli finalde once 4 harfli kelimeleri yazin, sonra 8 harfe gidin."
      ],
      strategy: [
        "Tarama protokolu: sol ustten saat yonu spiral, sonra capraz geri gecis. Baskida %15-20 daha fazla kelime bulur.",
        "Morfolojik madencilik: ROOT+ING gordugunuzde kok uzerinde geri izleyin; RE+START+ING komsu kupelerde gizlenir.",
        "Yuksek degerli harf eslesmesi: S, R, E kumesi Ingilizce ek yogunlugunun merkezidir.",
        "Tekrar bastirma: karsilikli oyunda uzun kelimeden cok rakibin kacirdigini bulmak onemli; nadir 4-5 harfli cogullari ezberleyin.",
        "Son sprint: son 30 saniyede 7+ harfi birakin; dogruladiginiz 3-5 harfli kelimeleri yagdirin."
      ]
    },
    {
      metaDescription: "Boggle-Expertentaktik: Trie-Scanning, Qu-Handling, Suffix-Mining und Anti-Fatigue-Sweeps.",
      intro: "Wettkampf-Boggle ist ein visuelles Suchproblem mit systematischen Sweeps und morphologischer Mustererkennung. Experten scannen nach Buchstaben-Clustern, nicht zufaellig.",
      quickTips: [
        "Jedes Brett von Ecken und Kanten starten, wo lange Woerter verankern.",
        "Qu als Einheit behandeln; keinen separaten Q-Pfad suchen.",
        "Suffix-Ketten jagen: -ING, -ERS, -EST, -TION fuer schnelle 6+ Buchstaben.",
        "Im Timed-Finale zuerst 4-Buchstaben-Woerter banken, dann 8-Buchstaben-Juwelen."
      ],
      strategy: [
        "Sweep-Protokoll: spiralförmig von oben links, dann diagonale Rueckpaesse. Liefert unter Druck 15-20% mehr Woerter.",
        "Morphologisches Mining: bei ROOT+ING den Stamm zurueckverfolgen; RE+START+ING versteckt sich oft benachbart.",
        "High-Value-Letter-Pairing: Bretter mit S-R-E-Cluster priorisieren—die dichtesten Wortfabriken.",
        "Duplicate Suppression: im Duell zaehlen verpasste Gegner-Woerter mehr als das laengste Wort. Obskure 4-5-Buchstaben-Plurale trainieren.",
        "Endgame-Sprint: letzte 30 Sekunden 7+ aufgeben; verifizierte 3-5-Buchstaben-Woerter fluten."
      ]
    }
  ),

  wordle: g("word-games", "simple",
    {
      metaDescription: "Expert Wordle strategy: entropy-maximizing openers, hard-mode constraint planning, and positional frequency elimination.",
      intro: "Optimal Wordle play is information theory, not guessing. The top 0.1% treat each guess as a partition of the remaining answer set, maximizing expected reduction in candidate words.",
      quickTips: [
        "Open with RAISE, SOARE, or SLATE—high entropy across common letter positions.",
        "Never waste a guess confirming what you already know; every tile must test new information.",
        "Hard mode: pick guesses that fit all greens/yellows but still split the candidate pool.",
        "Track positional frequency: E in position 5 is far more common than E in position 1."
      ],
      strategy: [
        "Entropy opener math: SOARE and SLATE average ~5.8 bits of information on the full answer list; repeat-letter openers like LLAMA waste partition power early.",
        "Second-guess pivot: after strong opener feedback, switch letter sets entirely (e.g., CLINT after SOARE) rather than cycling S-T-A-R-E variants.",
        "Yellow constraint exploitation: when letters are yellow, eliminate entire positional subsets before testing doubles. A yellow A rarely means double-A answers.",
        "Endgame mode switch: at 3 guesses left with <20 candidates, optimize for win probability not entropy—play the most likely word, not the best splitter.",
        "Hard mode trap avoidance: confirm green positions with words that also test remaining unknowns; ROAST with known R_O_S_ beats STORM if T position is still unknown."
      ]
    },
    {
      metaDescription: "Uzman Wordle stratejisi: entropi maksimizasyonu, hard mode planlama ve konumsal frekans eleme.",
      intro: "Optimal Wordle bilgi teorisidir, tahmin degil. En iyi oyuncular her tahmini aday kelime kumesini bolen bir olcum olarak gorur.",
      quickTips: [
        "RAISE, SOARE veya SLATE ile acin; yaygin harf konumlarinda yuksek entropi.",
        "Bildiginizi dogrulayan tahmin yapmayin; her karo yeni bilgi test etmeli.",
        "Hard mode: yesil/sari kurallara uyan ama aday havuzunu bolen tahminler secin.",
        "Konumsal frekans: E 5. pozisyonda 1. pozisyondan cok daha yaygindir."
      ],
      strategy: [
        "Entropi acilisi: SOARE ve SLATE tam listede ~5.8 bit bilgi verir; LLAMA gibi tekrarli acilislar erken bolme gucunu harcar.",
        "Ikinci tahmin pivotu: guclu geri bildirimden sonra harf setini tamamen degistirin (SOARE sonrasi CLINT).",
        "Sari kisit: sari harflerde once konumsal alt kumeleri eleyin; sari A nadiren cift A demektir.",
        "Son oyun modu: 3 tahmin ve <20 adayda kazanma olasiligini optimize edin, entropiyi degil.",
        "Hard mode tuzagi: bilinen yesilleri test ederken bilinmeyenleri de sorgulayan kelime oynayin."
      ]
    },
    {
      metaDescription: "Wordle-Expertenstrategie: Entropie-Maximierung, Hard-Mode-Planung und positionsbasierte Eliminierung.",
      intro: "Optimales Wordle ist Informationstheorie, kein Raten. Die Top 0,1% behandeln jeden Versuch als Partition der verbleibenden Antwortmenge.",
      quickTips: [
        "Mit RAISE, SOARE oder SLATE eroeffnen—hohe Entropie ueber Positionen.",
        "Keinen Versuch verschwenden, der Bekanntes bestaetigt; jedes Feld muss Neues testen.",
        "Hard Mode: Vermutungen waehlen, die Gruen/Gelb erfuellen und den Pool teilen.",
        "Positionsfrequenz: E in Position 5 ist viel haeufiger als in Position 1."
      ],
      strategy: [
        "Entropie-Opener: SOARE und SLATE liefern ~5,8 Bits; Doppelbuchstaben-Opener wie LLAMA verschwenden frueh Partition Power.",
        "Second-Guess-Pivot: nach starkem Feedback Buchstabensets komplett wechseln (CLINT nach SOARE).",
        "Gelb-Constraint: bei gelben Buchstaben zuerst Positionssubsets eliminieren; gelbes A bedeutet selten Doppel-A.",
        "Endgame-Modus: bei 3 Versuchen und <20 Kandidaten Gewinnwahrscheinlichkeit statt Entropie maximieren.",
        "Hard-Mode-Falle: Gruene mit Woertern bestaetigen, die auch Unbekanntes testen."
      ]
    }
  ),

  hangman: g("word-games", "simple",
    {
      metaDescription: "Expert Hangman letter frequency strategy, pattern-based guessing, and endgame consonant-vowel sequencing.",
      intro: "Hangman at expert level is Bayesian inference on word patterns. You update letter probabilities after every reveal, weighting by corpus frequency and positional constraints.",
      quickTips: [
        "Open with E, T, A, O, I, N, S—covering ~65% of English letter mass.",
        "After first hits, switch to positional frequency (R in _R_, NG endings) not global frequency.",
        "Avoid rare letters until pattern narrows; Q and Z are last-resort guesses.",
        "Count blanks and remaining wrong guesses before risking a low-probability letter."
      ],
      strategy: [
        "Corpus weighting: expert players use Scrabble or ENABLE frequency lists, not naive ETAOIN. Position-conditioned tables improve hit rate 12-18%.",
        "Pattern branching: with _ A _ E _, prioritize consonants that appear in C_A_E, M_A_E, W_A_E patterns before guessing L or D.",
        "Endgame risk calculus: with 2 lives and 4 blanks, compute expected value per letter across all matching dictionary words, not single best guess.",
        "Anti-human bias: when playing as setter, choose words with repeated rare letters (J, V, X) and uncommon digraphs (PH, GH) to break frequency openers.",
        "Digraph completion: once TH or CH is partially revealed, complete the digraph before branching—TH__ almost always resolves before testing W."
      ]
    },
    {
      metaDescription: "Uzman Hangman harf frekansi, desen tabanli tahmin ve son oyun sessiz-sesli sirasi.",
      intro: "Uzman Hangman desen uzerinden Bayes cikarimidir. Her acilimda korpus frekansi ve konum kisitlarina gore olasiliklari guncellersiniz.",
      quickTips: [
        "E, T, A, O, I, N, S ile acin; Ingilizce harf kitleminin ~%65'ini kapsar.",
        "Ilk isabetten sonra global degil konumsal frekansa gecin.",
        "Nadir harfleri desen daralana kadar erteleyin.",
        "Dusuk olasilikli harf oncesinde kalan can ve bosluk sayin."
      ],
      strategy: [
        "Korpus agirligi: Scrabble/ENABLE frekans tablolarini kullanin; konum kosullu tablolar isabeti %12-18 artirir.",
        "Desen dallanmasi: _ A _ E _ icin once C_A_E, M_A_E kalıplarindaki sessizleri deneyin.",
        "Son oyun risk hesabi: 2 can ve 4 boslukta tek en iyi harf degil, tum eslesen kelimelerde beklenen deger.",
        "Insan onyargisi: kelime secen olarak J, V, X tekrarlari ve PH, GH gibi nadir ikililer secin.",
        "Ikil tamamlama: TH veya CH kismen acildiysa once ikiliyi tamamlayin."
      ]
    },
    {
      metaDescription: "Hangman-Expertenstrategie: Buchstabenfrequenz, musterbasiertes Raten und Endspiel-Sequencing.",
      intro: "Experten-Hangman ist Bayes'sche Inferenz auf Wortmustern. Nach jeder Enthuellung werden Wahrscheinlichkeiten mit Korpus- und Positionsconstraints aktualisiert.",
      quickTips: [
        "Mit E, T, A, O, I, N, S starten—~65% der englischen Buchstabenmasse.",
        "Nach ersten Treffern zu Positionsfrequenz wechseln.",
        "Seltene Buchstaben erst bei engem Muster riskieren.",
        "Verbleibende Leben und Luecken vor Low-Probability-Guesses zaehlen."
      ],
      strategy: [
        "Korpus-Gewichtung: Scrabble/ENABLE-Frequenz statt naivem ETAOIN; positionierte Tabellen +12-18% Treffer.",
        "Pattern Branching: bei _ A _ E _ Konsonanten aus C_A_E, M_A_E vor L oder D.",
        "Endgame Risk Calculus: bei 2 Leben und 4 Luecken Erwartungswert ueber alle passenden Woerter.",
        "Anti-Human Bias: als Setter Woerter mit seltenen Doppelbuchstaben und ungewoehnlichen Digraphs waehlen.",
        "Digraph Completion: bei teilweise TH oder CH zuerst den Digraph vervollstaendigen."
      ]
    }
  ),

  codenames: g("word-games", "simple",
    {
      metaDescription: "Expert Codenames spymaster strategy: entropy clues, branch-pruning associations, and assassin-aware clue sizing.",
      intro: "Elite spymasters win by maximizing expected team guesses while minimizing assassin exposure. The clue is a compression algorithm over the word grid's semantic graph.",
      quickTips: [
        "Size clues to 2-3 when assassin-adjacent words sit in the same semantic cluster as your targets.",
        "Never clue a word that also strongly links an opponent's unrevealed card.",
        "Use zero clues to confirm known links and burn a turn when the board is nearly solved.",
        "Track which neutral words you have accidentally anchored—operatives will over-extend on them."
      ],
      strategy: [
        "Entropy clue design: the best clue partitions your team's words into a tight cluster while scattering opponent words. A clue of 3 that touches only your cards beats a clue of 4 that also hits neutral.",
        "Assassin graph distance: before giving any clue, map the assassin's 2-hop semantic neighbors. If APPLE is assassin, avoid FRUIT:3 even if three reds are fruits—operatives will stretch to cider, pie, orchard.",
        "Branch pruning for operatives: when guessing, always identify the assassin-linked interpretation first. If your spymaster's clue could read two ways, guess the path that avoids the black card before extending.",
        "Endgame tempo: at 2-2 cards remaining, prefer clue:1 with zero ambiguity over clue:2 that risks a neutral ending your turn. Spymasters who rush multi-hits lose more than cautious singles.",
        "Opponent card denial: when behind, clue neutrals your opponents need—not dirty, but clue words that overlap their strongest remaining cluster forces misguesses on their turn.",
        "Zero clue meta: burning a turn with ZERO on a confirmed link preserves board state when one wrong stretch loses the game."
      ]
    },
    {
      metaDescription: "Uzman Codenames casus lideri stratejisi: entropi ipuclari, dallanma budama ve suikastci farkindaligi.",
      intro: "Elite casus liderleri beklenen dogru tahminleri maksimize ederken suikastci riskini minimize eder. Ipuclari kelime aginin anlamsal grafigini sikistiran bir algoritmadir.",
      quickTips: [
        "Suikastci komsu kelimeler ayni kumede ise 2-3 boyutlu ipucu verin.",
        "Rakibin acik kartina da guclu baglayan ipucu vermeyin.",
        "Tahta cozulurken ZERO ile bilinen baglantiyi onaylayin.",
        "Yanlislikla ankurdugunuz notr kelimeleri takip edin."
      ],
      strategy: [
        "Entropi ipucu tasarimi: en iyi ipucu takim kelimelerini siki kumede toplar, rakip kelimelerini dagitir.",
        "Suikastci graf mesafesi: her ipucundan once suikastcinin 2-atim komsularini haritalayin.",
        "Operatif dallanma budama: tahminde once suikastci yorumunu eleyin.",
        "Son oyun temposu: 2 kart kaldiysa belirsiz 2 yerine sifir belirsizlikli 1 verin.",
        "Rakip inkari: gerideyken rakibin ihtiyac duydugu kume ile cakisan ipucu kelimeleri dusunun.",
        "ZERO metasi: onayli baglantida ZERO yanlis uzatmayi engeller."
      ]
    },
    {
      metaDescription: "Codenames-Spymaster-Expertenstrategie: Entropie-Hinweise, Branch-Pruning und Attentäter-Bewusstsein.",
      intro: "Elite-Spymaster gewinnen durch maximale erwartete Treffer bei minimalem Attentäter-Risiko. Der Hinweis komprimiert den semantischen Graphen des Rasters.",
      quickTips: [
        "Hinweise auf 2-3 begrenzen, wenn Attentäter-Nachbarn im gleichen Cluster liegen.",
        "Keinen Hinweis geben, der auch Gegnerkarten stark verknuepft.",
        "ZERO-Hinweise nutzen, wenn das Brett fast geloest ist.",
        "Versehentlich verankerte neutrale Woerter tracken."
      ],
      strategy: [
        "Entropie-Hinweisdesign: der beste Hinweis buendelt Team-Woerter und streut Gegner-Woerter.",
        "Attentäter-Graph-Distanz: 2-Hop-Nachbarn des Attentäters mappen, bevor FRUIT:3 bei APPLE-Attentäter riskiert wird.",
        "Branch Pruning: Operatives eliminieren zuerst die Attentäter-Interpretation.",
        "Endgame-Tempo: bei 2-2 Karten lieber Hinweis:1 ohne Ambiguitaet als Hinweis:2 mit Neutral-Risiko.",
        "Gegner-Verweigerung: Hinweise waehlen, die ihre staerksten Cluster ueberlappen.",
        "ZERO-Meta: bestaetigte Verknuepfung mit ZERO sichert den Zustand, wenn ein Fehlgriff das Spiel kostet."
      ]
    }
  ),

  "just-one": g("word-games", "simple",
    {
      metaDescription: "Expert Just One strategy: clue uniqueness under collision pressure, synonym tiering, and silent-player inference.",
      intro: "Just One is a collision-avoidance game disguised as cooperative word-giving. Experts engineer clues that survive duplicate elimination while remaining guessable to the active player.",
      quickTips: ["Tier clues: concrete noun > adjective > abstract association.", "Avoid the obvious synonym—if three players think of it, it gets erased.", "Use proper nouns only when the table shares that cultural context.", "As guesser, cross-eliminate after reveals; surviving clues share a semantic root."],
      strategy: ["Collision prediction: before writing, mentally list the top 3 synonyms the table will choose. Pick the 4th-tier clue that still points uniquely.", "Length discipline: one-word clues that are 6+ letters often survive because others default to short synonyms.", "Active player inference: when two clues survive, find the hypernym connecting them—not the intersection of meanings but the narrowest category.", "Hard mode: clue words that share a letter pattern with the target often get duplicated; choose orthogonal domains (sound, shape, era).", "Score maximization: 7/7 requires zero collisions across rounds—conservative clues in early rounds bank safety for aggressive 13-point finales."]
    },
    {
      metaDescription: "Uzman Just One stratejisi: carpisma baskisinda benzersiz ipucu ve sessiz oyuncu cikarimi.",
      intro: "Just One carpisma onleme oyunudur. Uzmanlar tekrarlaninca silinen ipuclarindan kacinarak hedefe isaret eder.",
      quickTips: ["Somut isim > sifat > soyut iliski sirasi kullanin.", "Bariz esanlamlidan kacinin; uc kisi dusunurse silinir.", "Ozel isimleri sadece ortak kultur varsa kullanin.", "Tahminci olarak kalan ipuclarinin ortak kokunu bulun."],
      strategy: ["Carpisma tahmini: masanin sececegi ilk 3 esanlami listeleyin, 4. seviye ipucu yazin.", "Uzunluk disiplini: 6+ harfli tek kelime genelde hayatta kalir.", "Aktif oyuncu cikarimi: iki ipucu kaldiginda en dar ust kategoriyi bulun.", "Zor mod: hedefle harf deseni paylasan ipuclar tekrarlanir; dik alan secin.", "Skor maksimizasyonu: erken turlarda guvenli, finalde agresif 13 puan."]
    },
    {
      metaDescription: "Just-One-Expertenstrategie: eindeutige Hinweise unter Kollisionsdruck.",
      intro: "Just One ist Kollisionsvermeidung. Experten konstruieren Hinweise, die Duplikat-Eliminierung ueberleben.",
      quickTips: ["Hinweis-Tiers: konkretes Nomen > Adjektiv > abstrakte Assoziation.", "Offensichtliches Synonym meiden.", "Eigennamen nur bei geteiltem Kontext.", "Als Rater nach Enthuellungen kreuz-eliminieren."],
      strategy: ["Kollisionsprognose: Top-3-Synonyme der Tabelle listen, 4.-Tier waehlen.", "Laengendisziplin: 6+ Buchstaben ueberleben oefter.", "Aktiver Spieler: Hypernym der ueberlebenden Hinweise finden.", "Hard Mode: orthogonale Domaenen statt Buchstabenmuster.", "Score-Max: frueh konservativ, Finale aggressiv."]
    }
  ),

  taboo: g("word-games", "simple",
    {
      metaDescription: "Expert Taboo clue-giving: taboo-word circumvention paths, grammatical pivot clues, and timer-optimized chunking.",
      intro: "Competitive Taboo is speed-optimized circumlocution. Experts pre-build mental routes around forbidden words using category pivots and sound-alike bridges.",
      quickTips: ["Never pause on a taboo word—pivot instantly to a category or function.", "Use 'the thing that...' constructions to bypass noun taboos.", "Chunk multi-word answers into 2-beat phrases the team can shout back.", "Skip and return: a 3-second skip beats a 15-second stall on one card."],
      strategy: ["Taboo graph routing: for each forbidden word, pre-link 2 alternate descriptors (BANK → 'where money is stored' not 'financial institution').", "Sound bridge discipline: homophone clues ('night/Knight') work once per round—vary to avoid pattern bans.", "Timer chunking: aim for 4 cards per 60 seconds by abandoning cards where taboo words are embedded in the only natural description.", "Defensive passing: when the clue-giver, accept pass on low-frequency proper nouns; variance on obscure cards loses more than skipping.", "Team echo reduction: train teammates to guess partial phrases early; waiting for full sentences burns 40% of clock."]
    },
    {
      metaDescription: "Uzman Taboo ipucu verme: yasak kelime dolanma ve zaman optimizasyonu.",
      intro: "Rekabetci Taboo hizli dolayli anlatimdir. Uzmanlar yasak kelimeler etrafinda kategori pivotlari kurar.",
      quickTips: ["Yasak kelimede durmayin; kategoriye veya isleve pivot yapin.", "'Sunun oldugu yer...' kalibini kullanin.", "Cok kelimeli cevabi 2 vuruşluk parcalara bolun.", "3 saniyelik pas, 15 saniyelik takilmadan iyidir."],
      strategy: ["Yasak graf rotasi: her yasak kelime icin 2 alternatif tanim onceden baglayin.", "Ses koprusu: homofon ipuclarini tur basina bir kez kullanin.", "Zaman parcalama: dogal tek aciklamada yasak gomulu kartlari birakin; dakikada 4 kart hedefleyin.", "Savunmali pas: dusuk frekansli ozel isimlerde pas kabul edin.", "Takim yankisi: tam cumle beklemeyin; kismi tahminleri erken alin."]
    },
    {
      metaDescription: "Taboo-Expertenstrategie: Umgehung verbotener Woerter und Timer-Chunking.",
      intro: "Wettkampf-Taboo ist geschwindigkeitsoptimierte Umschreibung. Experten nutzen Kategorie-Pivots und Klangbruecken.",
      quickTips: ["Bei Tabu-Wort sofort zu Kategorie oder Funktion pivotieren.", "'Der Ort wo...'-Konstruktionen nutzen.", "Mehrwort-Antworten in 2-Beat-Phrasen teilen.", "3-Sekunden-Skip schlaegt 15-Sekunden-Stall."]
      ,
      strategy: ["Tabu-Graph-Routing: pro verbotenem Wort 2 Alternativ-Deskriptoren verknuepfen.", "Sound-Bridge: Homophone einmal pro Runde.", "Timer-Chunking: 4 Karten/60 Sekunden; hoffnungslose Karten fallen lassen.", "Defensives Passen bei obskuren Eigennamen.", "Team-Echo: partielle Phrasen frueh raten lassen."]
    }
  ),

  decrypto: g("word-games", "complicated",
    {
      metaDescription: "Expert Decrypto strategy: code entropy, interceptor baiting, and black-cell misdirection in 4-letter clue chains.",
      intro: "Decrypto at the highest level is signaling through noise. White-hat teams optimize clue independence; black-hat play reads opponent entropy to intercept before the third round.",
      quickTips: ["Clue words must be orthogonal—no shared roots across your three clues per round.", "Never reuse a clue concept that opponents saw you use in round 1.", "Interceptor teams log your clue-to-position mapping after first intercept.", "Misdirect with clue 3: make it look like a repeat pattern while clue 1-2 stay clean."],
      strategy: ["Entropy independence: each clue should partition the keyword space without overlapping semantic fields. If keywords share a domain, use number/texture/color axes instead of topic.", "Interceptor timing: intercept on round 2 when you have 2 data points per team—round 3 intercept is often too late with only one guess left.", "Black cell exploitation: when you must clue the black position, choose a word that could plausibly map to two different opponent keywords—forces wrong guesses.", "Opponent modeling: track which teammate gives the loosest clues; opponents will target that player's patterns first.", "Endgame lock: at 1 misdecode from loss, switch to ultra-literal clues even if intercept risk rises—one black is better than two."]
    },
    {
      metaDescription: "Uzman Decrypto stratejisi: kod entropisi, yakalama tuzağı ve siyah hucre yaniltma.",
      intro: "Decrypto ust seviyede gurultu icinde sinyallesmedir. Beyaz takim bagimsiz ipucu optimize eder; siyah takim rakip entropisini okur.",
      quickTips: ["Ipuclari ortogonal olmali; ortak kok kullanmayin.", "Rakibin gordugu ipucu kavramini tekrarlamayin.", "Yakalayicilar ilk interceptten sonra esleme loglar.", "3. ipucu ile yaniltin; 1-2 temiz kalsin."],
      strategy: ["Entropi bagimsizligi: anahtar kelime uzayini ortak alan olmadan bolun.", "Yakalama zamani: 2. turda 2 veri noktasi varken yakalayin.", "Siyah hucre: iki farkli rakip anahtar kelimeye uyabilecek kelime secin.", "Rakip modelleme: en gevsek ipucu veren oyuncuyu takip edin.", "Son oyun: bir hata kalinca ultra-literal ipuclara gecin."]
    },
    {
      metaDescription: "Decrypto-Expertenstrategie: Code-Entropie, Interceptor-Koederung und Black-Cell-Misdirection.",
      intro: "Decrypto auf Top-Niveau ist Signaling durch Rauschen. Weiss optimiert Unabhaengigkeit; Schwarz liest Gegner-Entropie.",
      quickTips: ["Hinweise orthogonal—keine gemeinsamen Wurzeln.", "Gegnerische Konzepte nicht wiederholen.", "Interceptors loggen Mapping nach erstem Treffer.", "Hinweis 3 als Misdirection nutzen."],
      strategy: ["Entropie-Unabhaengigkeit: Keyword-Raum ohne Ueberlappung partitionieren.", "Interceptor-Timing: Runde 2 mit 2 Datenpunkten intercepten.", "Black Cell: Wort waehlen, das zu zwei Gegner-Keywords passt.", "Gegner-Modellierung: losesten Hinweisgeber tracken.", "Endgame-Lock: bei 1 Fehler ultra-literal werden."]
    }
  ),

  bananagrams: g("word-games", "simple",
    {
      metaDescription: "Expert Bananagrams: peel timing, grid topology for future splits, and dump-letter sequencing under race pressure.",
      intro: "Bananagrams champions optimize grid shape for peel efficiency, not just raw anagram speed. Your cross-word layout determines how fast you absorb new tiles.",
      quickTips: ["Build long horizontal spines with vertical branches—easier to peel into than square grids.", "Dump Q, Z, X, J into short words immediately; they bottleneck peels.", "Peel only when your grid has 2+ insertion points for any letter.", "Call 'Bananas' only when every branch can accept a wildcard letter."],
      strategy: ["Topology first: a T-shaped grid with 3 open ends beats a compact 4x4 that traps vowels in corners.", "Peel discipline: premature peels flood you with tiles while insertion points are locked—wait for 2+ open hooks.", "Letter dump sequencing: play V, K, W into 2-letter words attached to main spine before building fancy long words.", "Split recovery: when stuck, break a non-critical word to free a central vowel—speed beats aesthetics.", "Race psychology: opponents peel when you peel; slow-play to build hooks, then burst 3 peels in sequence to force their dump."]
    },
    {
      metaDescription: "Uzman Bananagrams: soyma zamani, grid topolojisi ve harf bosaltma sirasi.",
      intro: "Bananagrams sampiyonlari anagram hizindan cok soyma verimliligi icin grid seklini optimize eder.",
      quickTips: ["Uzun yatay omurga ve dikey dallar kare gridlerden iyidir.", "Q, Z, X, J'yi hemen kisa kelimelere gomun.", "2+ ekleme noktasi varken soyun.", "Her dal joker harf kabul edince Bananas deyin."],
      strategy: ["Topoloji oncelikli: 3 acik ucu olan T-grid, koseye hapsolmus seslilerden ustundur.", "Soyma disiplini: erken soyma kilitli noktalarda tas bogar.", "Harf bosaltma: V, K, W'yi once 2 harfli kelimelere.", "Bolme kurtarma: kritik olmayan kelimeyi kirarak sesli acin.", "Yaris psikolojisi: kancalari kur, sonra 3 soyma patlamasi yap."]
    },
    {
      metaDescription: "Bananagrams-Expertenstrategie: Peel-Timing, Grid-Topologie und Dump-Sequencing.",
      intro: "Bananagrams-Champions optimieren Grid-Form fuer Peel-Effizienz, nicht nur Anagramm-Speed.",
      quickTips: ["Lange horizontale Spines mit vertikalen Aesten.", "Q, Z, X, J sofort in Kurzwoerter.", "Erst peelen bei 2+ Einfuegepunkten.", "Bananas nur bei offenen Hooks rufen."],
      strategy: ["Topologie zuerst: T-Grid mit 3 offenen Enden schlaegt kompaktes 4x4.", "Peel-Disziplin: fruehes Peelen ueberflutet bei gesperrten Hooks.", "Dump-Sequencing: V, K, W in 2-Buchstaben-Woerter.", "Split Recovery: unkritisches Wort brechen fuer Vokal.", "Race Psychology: Hooks bauen, dann 3-Peel-Burst."]
    }
  ),

  scattergories: g("word-games", "simple",
    {
      metaDescription: "Expert Scattergories: letter-category intersection scoring, obscure-but-valid answers, and duplicate-risk calibration.",
      intro: "Scattergories rewards niche vocabulary at letter-category intersections. Experts pre-load answer templates per letter and category type before the die rolls.",
      quickTips: ["Memorize high-hit B/P/S/T lists: countries, animals, and brands per letter.", "Choose obscure valid answers over famous ones—duplicates score zero.", "Alliteration bonus: pick answers where first AND second word match the letter.", "Skip weak categories early; bank time on categories you have 3+ answers for."],
      strategy: ["Letter-category matrix: build mental spreadsheets (B + 'Things in a kitchen' = blender, baster, broiler) for top 8 letters.", "Validity edge cases: train Scrabble-legal obscure nouns (quokka for Q animals) that casual players won't duplicate.", "Double-letter exploitation: categories allowing phrases favor 'Bobby Brown' over 'Beyonce' when letter is B—less duplicate risk.", "Time allocation: spend 40% of clock on your 3 weakest categories; strong categories need only 5 seconds.", "Challenge defense: cite dictionary sources for borderline answers before the table votes—you win disputes with precedent."]
    },
    {
      metaDescription: "Uzman Scattergories: harf-kategori kesisimi, nadir gecerli cevaplar ve tekrar riski.",
      intro: "Scattergories harf-kategori kesisiminde niş kelime bilgisini odullendirir. Uzmanlar zar atilmadan sablon yukler.",
      quickTips: ["B/P/S/T icin ulke, hayvan, marka listelerini ezberleyin.", "Ucuz tekrar riski olan unlu cevap yerine nadir gecerli cevap.", "Ikinci kelimesi de harfle baslayan bonus firsati.", "Zayif kategorileri erken gecin; guclu 3+ cevapli kategorilere zaman ayirin."],
      strategy: ["Harf-kategori matrisi: top 8 harf icin zihinsel tablo kurun.", "Gecerlilik kenarlari: Scrabble-yasal nadir isimler ezberleyin.", "Cift harf: B harfinde 'Bobby Brown' Beyonce'dan daha az tekrar riski.", "Zaman dagilimi: saatin %40'i en zayif 3 kategoriye.", "Itiraz savunmasi: sinir cevaplarda sozluk gosterin."]
    },
    {
      metaDescription: "Scattergories-Expertenstrategie: Buchstaben-Kategorie-Schnittmenge und Duplikat-Risiko.",
      intro: "Scattergories belohnt Nischen-Vokabular an Buchstaben-Kategorie-Schnittpunkten. Experten laden Antwort-Templates vor dem Wurf.",
      quickTips: ["High-Hit-Listen fuer B/P/S/T memorieren.", "Obskure gueltige Antworten statt beruehmter.", "Alliterations-Bonus nutzen.", "Schwache Kategorien frueh skippen."],
      strategy: ["Buchstaben-Kategorie-Matrix fuer Top-8-Buchstaben.", "Scrabble-legale obskure Nomen trainieren.", "Doppelbuchstaben-Exploitation bei Phrasen.", "40% Zeit auf 3 schwaechste Kategorien.", "Challenge-Defense mit Woerterbuch-Praezedenz."]
    }
  ),

  "letter-jam": g("word-games", "simple",
    {
      metaDescription: "Expert Letter Jam strategy: wildcard staging, left/right clue symmetry, and endgame pip counting.",
      intro: "Letter Jam is partial-information cooperative spelling. Experts coordinate clue placement so every player can reconstruct words without wasting wildcard tokens.",
      quickTips: ["Place your easiest clue letters on the left; harder positions on the right.", "Wildcards belong on the rarest letter in your word, not the first blank.", "Never clue a letter everyone already knows from prior rounds.", "Count remaining pips each round—adjust clue difficulty to finish with 0-1 left."],
      strategy: ["Wildcard staging: hold wilds until round 3-4 when letter entropy is highest; early wild use wastes disambiguation power.", "Symmetric clue design: if you clue position 2 and 4, ensure those letters have different frequency in English—reduces guess collisions.", "Table inference: track which players have placed vowels vs consonants; consonant-heavy players need wildcard help on vowel positions.", "Endgame pip math: with 3 pips and 2 players unsolved, one player must take a 0-wildcard guess—coordinate who has the tighter letter set.", "Anti-redundancy: before cluing, verify no other player's visible word shares your letter at that position."]
    },
    {
      metaDescription: "Uzman Letter Jam stratejisi: joker sahneleme, ipucu simetrisi ve pip sayimi.",
      intro: "Letter Jam kismi bilgiyle isbirlikci hecelemedir. Uzmanlar jokerleri bos yere harcamadan kelimeyi yeniden kurar.",
      quickTips: ["Kolay harfleri sola, zor pozisyonlari saga koyun.", "Jokeri en nadir harfe verin.", "Herkesin bildigi harfi tekrar ipucu yapmayin.", "Kalan pip sayisini her tur sayin."],
      strategy: ["Joker sahneleme: 3-4. tura kadar tutun.", "Simetrik ipucu: 2 ve 4. pozisyonlar farkli frekansli harfler olsun.", "Masa cikarimi: sesli/agirlikli sessiz dagilimini takip edin.", "Son oyun pip matematigi: 3 pip ve 2 cozulmemis oyuncuda koordinasyon.", "Gereksiz tekrar onleme: baska oyuncunun ayni pozisyon harfini kontrol edin."]
    },
    {
      metaDescription: "Letter Jam-Expertenstrategie: Wildcard-Staging und Pip-Zaehlung.",
      intro: "Letter Jam ist kooperatives Buchstabieren mit Teilinformation. Experten platzieren Hinweise ohne Wildcard-Verschwendung.",
      quickTips: ["Einfache Buchstaben links, schwere rechts.", "Wildcards auf selteneste Buchstaben.", "Bekannte Buchstaben nicht erneut cluen.", "Verbleibende Pips jede Runde zaehlen."],
      strategy: ["Wildcard-Staging bis Runde 3-4.", "Symmetrisches Clue-Design mit unterschiedlicher Frequenz.", "Tisch-Inferenz: Vokal-Konsonant-Verteilung tracken.", "Endgame-Pip-Math bei 3 Pips und 2 offenen Spielern.", "Anti-Redundanz vor jedem Clue pruefen."]
    }
  ),

  "word-on-the-street": g("word-games", "simple",
    {
      metaDescription: "Expert Word on the Street: tug-of-war letter prioritization, vowel/consonant lane control, and category-aware word selection.",
      intro: "Word on the Street is area control on the alphabet. Experts pick answers that move high-value consonants toward their side while denying vowel recovery lanes.",
      quickTips: ["Prioritize moving R, S, T, N, L—they sit center and swing games.", "Pick answers with 2+ movable letters on your side of the alphabet.", "Deny opponent recovery: if they need vowels, choose answers heavy in consonants they lack.", "Shorter valid answers beat long words that move letters back toward center."],
      strategy: ["Center lane control: letters at M/N are tug-neutral; focus pulls on letters at K-P where one good answer shifts 2+ positions.", "Category-word pairing: 'Animals' favors ZEBRA (Z pull) over ELEPHANT (E already captured); match category to letter strategy.", "Team consonant stacking: coordinate so both teammates' answers in a round target the same 2 letters from opposite directions.", "Vowel denial: E, A, O recover to center fast—avoid answers that gift opponents vowel pulls unless you also move a consonant.", "Endgame letter lock: when 3 letters from win, choose any valid answer moving those letters even if category is weak—tempo over theme."]
    },
    {
      metaDescription: "Uzman Word on the Street: harf cekme onceligi ve sesli/sessiz serit kontrolu.",
      intro: "Word on the Street alfabede alan kontroludur. Uzmanlar yuksek degerli sessizleri kendi tarafina cekerken sesli kurtarma yollarini kapatir.",
      quickTips: ["R, S, T, N, L'yi onceliklendirin; merkezde oyunu degistirir.", "Alfabenin sizin tarafinizda 2+ hareketli harfli cevaplar secin.", "Rakibin sesli ihtiyacini reddedin.", "Merkeze geri iten uzun kelimeler yerine kisa gecerli cevaplar."],
      strategy: ["Merkez serit kontrolu: K-P arasi iyi cevap 2+ pozisyon kaydirir.", "Kategori eslesmesi: ZEBRA, ELEPHANT'tan Z cekisi icin ustundur.", "Takim sessiz istifi: ayni 2 harfi hedefleyin.", "Sesli inkari: E, A, O hizla merkeze doner.", "Son oyun kilit: 3 harf kala temadan cok harf hareketine odaklanin."]
    },
    {
      metaDescription: "Word on the Street-Expertenstrategie: Buchstaben-Priorisierung und Lane-Control.",
      intro: "Word on the Street ist Gebietskontrolle auf dem Alphabet. Experten ziehen Konsonanten und verweigern Vokal-Recovery.",
      quickTips: ["R, S, T, N, L priorisieren.", "Antworten mit 2+ beweglichen Buchstaben waehlen.", "Gegner-Vokal-Recovery verweigern.", "Kurze Antworten schlagen lange Rueckschub-Woerter."],
      strategy: ["Center-Lane-Control bei K-P.", "Kategorie-Wort-Pairing: ZEBRA vor ELEPHANT fuer Z-Pull.", "Team-Konsonanten-Stacking auf gleiche 2 Buchstaben.", "Vokal-Denial: E, A, O schnell zurueck zur Mitte.", "Endgame-Letter-Lock: Tempo vor Thema."]
    }
  ),

  paperback: g("word-games", "complicated",
    {
      metaDescription: "Expert Paperback deckbuilding: ink efficiency curves, wild timing, and genre-bonus stacking for maximum word value per draw.",
      intro: "Paperback is deck-thinning word engine building. Experts curve ink costs, time wild acquisitions, and stack genre bonuses for explosive 15+ point turns.",
      quickTips: ["Buy 2-cost ink cards early; they thin deck and fund 4-5 cost power cards.", "Wilds belong in decks with high consonant density, not vowel-heavy starters.", "Trigger genre bonus before playing your longest word, not after.", "Dump starting cards aggressively—7-card hands with 3 starters lose tempo."],
      strategy: ["Ink curve: rounds 1-3 buy ink, rounds 4-6 buy wilds or genre cards, rounds 7+ buy point-doublers. Breaking this curve leaves you drawing starters on turn 10.", "Wild placement: hold wilds for the consonant bottleneck in your best word, not the first playable word—one 12-point play beats two 6-point plays.", "Genre stacking: Romance + Mystery on the same word multiplies; plan purchases so 2 genres trigger on a 7+ letter word.", "Deck thinning math: every starter left in deck is ~4% chance to draw it; buy ink until starters are <15% of deck.", "Endgame denial: buy commons opponents need for genre triggers even if you won't use them—deny their multiplier turn."]
    },
    {
      metaDescription: "Uzman Paperback deste kurma: murekkep egrisi, joker zamani ve tur bonus istifi.",
      intro: "Paperback deste inceltme ve kelime motoru kurmadir. Uzmanlar murekkep maliyetini egride tutar ve tur bonuslarini istifler.",
      quickTips: ["Erken 2 maliyetli murekkep alin.", "Jokerleri sessiz yogun destelere koyun.", "En uzun kelimeden once tur bonusunu tetikleyin.", "Baslangic kartlarini agresif atin."],
      strategy: ["Murekkep egrisi: 1-3 murekkep, 4-6 joker/tur, 7+ carpan.", "Joker yerlesimi: ilk kelime degil darbogaz sessizde kullanin.", "Tur istifi: Romance+Mystery 7+ harfte carpilir.", "Deste inceltme: baslangic <%15 olana kadar murekkep alin.", "Son oyun inkari: rakibin tur tetikleyicisini alin."]
    },
    {
      metaDescription: "Paperback-Expertenstrategie: Ink-Kurven und Genre-Bonus-Stacking.",
      intro: "Paperback ist Deckbuilding mit Woertern. Experten curven Ink-Kosten und stapeln Genre-Boni.",
      quickTips: ["Frueh 2-Cost-Ink kaufen.", "Wilds in konsonantendichte Decks.", "Genre-Bonus vor dem laengsten Wort.", "Starter aggressiv abwerfen."],
      strategy: ["Ink-Kurve: R1-3 Ink, R4-6 Wilds/Genre, R7+ Doubler.", "Wild-Placement am Konsonanten-Engpass.", "Genre-Stacking Romance+Mystery bei 7+ Buchstaben.", "Deck-Thinning bis Starter <15%.", "Endgame-Denial: Gegner-Genre-Trigger kaufen."]
    }
  ),

  hardback: g("word-games", "complicated",
    {
      metaDescription: "Expert Hardback strategy: advertisement timing, award row racing, and ink-flood vs genre-specialist deck archetypes.",
      intro: "Hardback adds advertisement manipulation and award races to Paperback's engine. Experts choose between ink-flood thin decks and genre-specialist explosive turns based on table tempo.",
      quickTips: ["Advertise on cards opponents want—it blocks their buy and funds you.", "Race one award row fully before splitting—partial awards score poorly.", "Ink-flood: buy every ink card; genre-specialist: buy 2 genres and wilds only.", "Time your 10+ letter word for when double-advertisement is active."],
      strategy: ["Advertisement denial: place ads on genre cards the leader needs; even if you won't buy, you earn coins and delay their multiplier.", "Award row commitment: completing Advertisement award first snowballs coin income—prioritize it over Genre awards unless you're already genre-stacked.", "Ink-flood archetype: 8+ ink cards by turn 6, wild on turn 7, 12-letter word turn 8. Requires early commons purchases only.", "Genre-specialist: Romance+Mystery+Wild by turn 5, ignore ink awards, one 18-point word wins. Fragile if opponent advertises your genres.", "Endgame clock: when award pile is 2 deep, buy point cards over engine—Hardback ends abruptly and unfinished engines score zero."]
    },
    {
      metaDescription: "Uzman Hardback stratejisi: reklam zamani, odul sira yaris ve deste arketipleri.",
      intro: "Hardback reklam manipulasyonu ve odul yarisini ekler. Uzmanlar masa temposuna gore ink-flood veya tur-uzmanligi secer.",
      quickTips: ["Rakibin istedigi karta reklam verin.", "Bir odul sirasini tamamen bitirin.", "Ink-flood her murekkebi alir; uzman 2 tur+joker alir.", "Cift reklam aktifken 10+ harfli kelime oynayin."],
      strategy: ["Reklam inkari: liderin tur kartina reklam.", "Odul sira bagliligi: Reklam odulunu once bitirin.", "Ink-flood: 6. turda 8+ murekkep, 8. turda 12 harf.", "Tur uzmani: 5. turda Romance+Mystery+Wild.", "Son oyun saati: motor yerine puan karti alin."]
    },
    {
      metaDescription: "Hardback-Expertenstrategie: Werbe-Timing und Award-Row-Racing.",
      intro: "Hardback ergaenzt Paperback um Werbung und Awards. Experten waehlen Ink-Flood oder Genre-Spezialist nach Tempo.",
      quickTips: ["Auf Gegner-Wunschkarten werben.", "Eine Award-Reihe vollenden.", "Ink-Flood vs Genre-Spezialist-Architektur.", "10+ Buchstaben bei Doppel-Werbung."],
      strategy: ["Werbungs-Verweigerung auf Genre-Karten des Leaders.", "Advertisement-Award zuerst fuer Coin-Snowball.", "Ink-Flood: 8+ Ink bis Runde 6.", "Genre-Spezialist: Romance+Mystery+Wild bis Runde 5.", "Endgame: Punktekarten wenn Award-Stapel tief."]
    }
  ),

  "so-clover": g("word-games", "simple",
    {
      metaDescription: "Expert So Clover: quadrant keyword partitioning, cross-word constraint satisfaction, and clue-giver entropy reduction.",
      intro: "So Clover is constraint satisfaction across four intersecting keywords. Experts partition the clue space so each quadrant clue uniquely identifies its word without cross-contamination.",
      quickTips: ["Solve the hardest quadrant first—it constrains the other three.", "Clues must not share semantic fields across quadrants.", "Use number, color, or texture axes when keywords share a topic.", "Verify each clue works in isolation before committing."],
      strategy: ["Constraint propagation: if one keyword is 'OCEAN', eliminate maritime clues for adjacent quadrants—use orthogonal descriptors (SALTY, DEEP, BLUE) only once.", "Hardest-first solving: quadrants with rare keywords (proper nouns, jargon) anchor the grid; easy quadrants fill last.", "Clue entropy: each clue should reduce candidate space by 80%+; vague clues like 'THING' waste cooperative bandwidth.", "Cross-word contamination check: read all four clues aloud—if two could swap quadrants, rewrite before the guesser sees them.", "Speed mode: expert tables solve in under 90 seconds by parallelizing—one player clues while another validates intersections."]
    },
    {
      metaDescription: "Uzman So Clover: dortlu anahtar kelime bolme ve capraz kisit cozumu.",
      intro: "So Clover dort kesisen anahtar kelimede kisit tatminidir. Uzmanlar her dortlu ipucunun benzersiz kalmasini saglar.",
      quickTips: ["En zor dortluyu once cozun.", "Dortluler arasi anlamsal alan paylasmayin.", "Ortak konuda sayi, renk, doku eksenleri kullanin.", "Her ipucunu izole dogrulayin."],
      strategy: ["Kisit yayilimi: OCEAN varsa deniz ipuclarini tek kullanin.", "En zor-once: nadir kelimeler ankraj olur.", "Ipucu entropisi: aday uzayini %80+ daraltin.", "Capraz kontaminasyon: iki ipucu yer degistirebiliyorsa yeniden yazin.", "Hiz modu: 90 saniyede paralel dogrulama."]
    },
    {
      metaDescription: "So-Clover-Expertenstrategie: Quadranten-Partitionierung und Constraint-Satisfaction.",
      intro: "So Clover ist Constraint-Satisfaction ueber vier sich schneidende Keywords. Experten partitionieren ohne Cross-Contamination.",
      quickTips: ["Schwersten Quadranten zuerst.", "Keine geteilten semantischen Felder.", "Zahl/Farbe/Textur bei gemeinsamem Thema.", "Jeden Hinweis isoliert verifizieren."],
      strategy: ["Constraint Propagation bei OCEAN etc.", "Hardest-First fuer seltene Keywords.", "Clue-Entropie: 80%+ Kandidatenreduktion.", "Cross-Word-Contamination-Check.", "Speed-Mode unter 90 Sekunden parallel."]
    }
  ),

  werewords: g("word-games", "simple",
    {
      metaDescription: "Expert Werewords: mayor question sequencing, werewolf misdirection timing, and seer binary-search optimization.",
      intro: "Werewords is 20 Questions with hidden roles. The mayor sequences yes/no questions to binary-search the word while werewolves inject false negatives at critical branches.",
      quickTips: ["Mayor opens with category-narrowing questions before letter questions.", "Seer waits until 3 questions remain before revealing—early reveal helps werewolves.", "Werewolves say NO on the question that would halve the search space most.", "Villagers count inconsistent answers; one lie pattern identifies the werewolf."],
      strategy: ["Mayor binary tree: first question should split candidate space 50/50 (living/non-living, proper noun/common noun). Never ask 'is it an animal' when 60% of words are animals.", "Werewolf timing: lie on question 4-6, not question 1—early lies are obvious; late lies run out of time to recover.", "Seer hold: reveal only when remaining candidates are <8 and werewolf hasn't lied yet—forces werewolf to lie on high-entropy question.", "Villager consistency tracking: log YES/NO per player; werewolves cluster false answers on the same semantic branch.", "Endgame rush: at 30 seconds, mayor switches from narrowing to direct guesses—binary search fails under time pressure."]
    },
    {
      metaDescription: "Uzman Werewords: belediye baskani soru sirasi ve kurt yaniltma zamani.",
      intro: "Werewords gizli rollerle 20 sorudur. Baskan ikili arama yapar, kurtlar kritik dallarda yanlis cevap verir.",
      quickTips: ["Once kategori daraltma, sonra harf sorulari.", "Gorucu 3 soru kalinca aciklansin.", "Kurt arama uzayini en cok bolen soruya HAYIR de.", "Koyluler tutarsiz cevaplari saysin."],
      strategy: ["Baskan ikili agac: ilk soru %50 bolmeli.", "Kurt zamani: 4-6. soruda yalan; erken yalan bariz.", "Gorucu tutma: <8 adayda acikla.", "Koylu tutarlilik logu.", "Son 30 saniyede dogrudan tahmin modu."]
    },
    {
      metaDescription: "Werewords-Expertenstrategie: Mayor-Fragen-Sequencing und Werwolf-Misdirection.",
      intro: "Werewords ist 20 Fragen mit versteckten Rollen. Der Mayor binaersucht; Werwoelfe injizieren falsche Neins.",
      quickTips: ["Mayor: Kategorie vor Buchstaben.", "Seher erst bei 3 Fragen offenbaren.", "Werwolf: NEIN auf die halbierende Frage.", "Doerfer tracken Inkonsistenzen."],
      strategy: ["Mayor-Binaerbaum 50/50-Split.", "Werwolf-Timing: Luege auf Frage 4-6.", "Seher-Hold bei <8 Kandidaten.", "Villager-Consistency-Tracking.", "Endgame-Rush ab 30 Sekunden."]
    }
  ),

  "letter-tycoon": g("word-games", "simple",
    {
      metaDescription: "Expert Letter Tycoon: patent acquisition timing, stockpiling premium letters, and word-length vs patent income tradeoffs.",
      intro: "Letter Tycoon is economic word building. Experts acquire patents on high-frequency letters (E, S, T) early and balance word length against royalty income from opponents.",
      quickTips: ["Buy E, S, T patents before opponents—passive income compounds.", "Long words score points; short words deny opponents patent triggers.", "Stockpile $ before patent auctions on J, Q, X, Z—they're cheap and block bingos.", "Use community letter only when it completes a patent royalty chain."],
      strategy: ["Patent priority queue: E > S > T > R > N for income; J/Q/X/Z for denial. First patent should be E unless table is 3+ players, then S.", "Word length calculus: 6-letter word with 2 owned patents often beats 8-letter word with 0—royalties from 3 opponents = 6 extra dollars.", "Auction timing: bid aggressively on letters appearing in your hand's likely words; pass on letters you'd need to dump to use.", "Community letter exploitation: play it on the letter opponents need for their longest word, not yours—denial > personal score.", "Endgame liquidity: convert patents to cash only when you can buy the last high-value patent; holding 3 patents with steady income beats one expensive letter."]
    },
    {
      metaDescription: "Uzman Letter Tycoon: patent zamani ve telif geliri dengesi.",
      intro: "Letter Tycoon ekonomik kelime kurmadir. Uzmanlar E, S, T patentlerini erken alir ve kelime uzunlugunu telif geliriyle dengeler.",
      quickTips: ["E, S, T patentlerini once alin.", "Uzun kelime puan; kisa kelime rakip patentini engeller.", "J, Q, X, Z patentleri ucuz ve bingo engeller.", "Ortak harfi telif zinciri icin kullanin."],
      strategy: ["Patent oncelik: E>S>T gelir icin.", "Uzunluk hesabi: 6 harf+2 patent cogu zaman 8 harften iyi.", "Muzayede: elinizdeki kelimelerin harflerine agresif teklif.", "Ortak harf inkari: rakibin uzun kelimesini engelleyin.", "Son oyun: 3 patent geliri tek pahali harften ustun."]
    },
    {
      metaDescription: "Letter-Tycoon-Expertenstrategie: Patent-Timing und Lizenz-Einkommen.",
      intro: "Letter Tycoon ist oekonomisches Wortbauen. Experten kaufen E/S/T-Patente frueh und balancieren Laenge vs Royalties.",
      quickTips: ["E, S, T Patente zuerst.", "Lange Woerter punkten; kurze verweigern Patente.", "J/Q/X/Z billig und blockieren Bingos.", "Community-Buchstabe fuer Lizenz-Kette."],
      strategy: ["Patent-Priority: E>S>T>R>N.", "Laengen-Calculus: 6 Buchstaben+2 Patente schlaegt oft 8.", "Auktions-Timing auf Hand-Woerter.", "Community-Letter als Denial.", "Endgame: 3 Patente mit Income schlagen ein teures Buchstaben-Patent."]
    }
  ),

  dabble: g("word-games", "simple",
    {
      metaDescription: "Expert Dabble strategy: tile dump sequencing, 5-word parallel construction, and vowel-consonant ratio management.",
      intro: "Dabble is simultaneous 5-word anagram racing. Experts build all five word slots in parallel, dumping awkward tiles into the 2-letter slot first.",
      quickTips: ["Fill the 2-letter word slot first with your worst tile pair.", "Keep vowel-consonant ratio balanced across all 5 slots.", "Don't complete one long word while others sit empty—parallelize.", "Call Dabble only when every slot has a valid word, not your best word."],
      strategy: ["Slot priority: 2-letter > 3-letter > 6-letter > 4-letter > 5-letter. The 2-letter slot absorbs Q, Z, J dumps; 6-letter slot is built last with remaining best tiles.", "Parallel construction: place tentative roots in all 5 slots before refining any—prevents locking tiles in one word.", "Vowel funnel: if you draw 4 vowels, commit 2 to the 3-letter slot immediately; vowel hoarding blocks 4 and 5-letter slots.", "Race timing: opponents slow when 6-letter slot is empty—rush to place 6+ tiles across slots even if words are suboptimal, then upgrade.", "Validation pass: last 10 seconds, verify every slot is legal—one invalid word invalidates the entire board."]
    },
    {
      metaDescription: "Uzman Dabble stratejisi: tas bosaltma sirasi ve 5 kelime paralel kurulum.",
      intro: "Dabble eszamanli 5 kelime anagram yarisidir. Uzmanlar tum slotlari paralel kurar, zor taslari 2 harfli slota atar.",
      quickTips: ["2 harfli slotu en kotu ciftle doldurun.", "5 slotta sesli-sessiz dengesini koruyun.", "Bir uzun kelimeyi bitirirken digerleri bos kalmasin.", "En iyi kelime degil, her slot gecerli olunca Dabble deyin."],
      strategy: ["Slot onceligi: 2>3>6>4>5 harf.", "Paralel kurulum: once tum slotlara kok yerlestirin.", "Sesli hunisi: 4 sesli cekince 2'sini 3 harfliye verin.", "Yaris zamani: 6 harfli bosken rakip yavaslar.", "Dogrulama: son 10 saniyede tum slotlari kontrol edin."]
    },
    {
      metaDescription: "Dabble-Expertenstrategie: Tile-Dump-Sequencing und Parallel-Bau.",
      intro: "Dabble ist simultanes 5-Wort-Anagramm-Rennen. Experten bauen parallel und dumpen in den 2-Buchstaben-Slot.",
      quickTips: ["2-Buchstaben-Slot zuerst mit schlechtestem Paar.", "Vokal-Konsonant-Ratio balancieren.", "Nicht ein Wort fertigen waehrend andere leer.", "Dabble nur wenn jeder Slot gueltig."],
      strategy: ["Slot-Priority: 2>3>6>4>5.", "Parallel Construction mit tentativen Wurzeln.", "Vowel Funnel bei 4 Vokalen.", "Race Timing wenn 6-Letter-Slot leer.", "Validation Pass in letzten 10 Sekunden."]
    }
  ),

  quiddler: g("word-games", "simple",
    {
      metaDescription: "Expert Quiddler strategy: hand reduction tempo, round-by-round card valuation, and go-out threshold calculation.",
      intro: "Quiddler is rummy with word constraints across 8 rounds. Experts optimize go-out timing—going out early in short rounds, hoarding in long rounds for maximum word value.",
      quickTips: ["Round 3 (3-letter words): go out fast with any valid combo.", "Round 8: maximize word count in hand before going out.", "Wild cards stay flexible until the round's longest word is buildable.", "Track opponent hand sizes—go out when leaders have 5+ cards."],
      strategy: ["Round tempo curve: R1-3 go out immediately with minimum words; R4-6 balance; R7-8 maximize points before going out. Going out round 8 with 6 words beats round 7 with 3.", "Card valuation shifts: in round 5, a 5-letter word slot is worth more than holding for round 6—present value of points matters.", "Wild timing: play wild on the longest word slot in the current round, not saved for next—next round adds a new slot anyway.", "Go-out threshold: calculate if opponents can beat your table points; if leader has 4 cards in round 6, go out with 3 mediocre words to cap their draw.", "Discard signaling: discard high-value letters opponents need for their visible melds—deny without revealing your round target."]
    },
    {
      metaDescription: "Uzman Quiddler stratejisi: el kucultme temposu ve cikis esigi hesabi.",
      intro: "Quiddler 8 turda kelime kisitli rummydir. Uzmanlar kisa turlarda hizli, uzun turlarda maksimum deger icin cikis zamanlar.",
      quickTips: ["3. turda hizli cikin.", "8. turda cikmadan once kelime sayisini maksimize edin.", "Jokerleri en uzun kelime slotuna saklayin.", "Lider 5+ kartta iken cikin."],
      strategy: ["Tur tempo egrisi: R1-3 hizli, R7-8 maksimum puan.", "Kart degerleme: 5. turda 5 harfli slotu tutmak 6. turu beklemekten iyi olabilir.", "Joker zamani: mevcut turun en uzun slotunda oyna.", "Cikis esigi: rakip masayi gecebilir mi hesaplayin.", "Atik sinyali: rakibin meldine lazim harfi atin."]
    },
    {
      metaDescription: "Quiddler-Expertenstrategie: Hand-Reduction-Tempo und Go-Out-Threshold.",
      intro: "Quiddler ist Rummy mit Wort-Constraints ueber 8 Runden. Experten optimieren Go-Out-Timing pro Runde.",
      quickTips: ["Runde 3: schnell ausgehen.", "Runde 8: Wortanzahl maximieren.", "Wilds flexibel bis laengstes Wort baubar.", "Ausgehen wenn Leader 5+ Karten hat."],
      strategy: ["Round-Tempo-Curve R1-3 schnell, R7-8 max Punkte.", "Kartenbewertung verschiebt sich pro Runde.", "Wild-Timing auf laengsten Slot der aktuellen Runde.", "Go-Out-Threshold gegen Leader berechnen.", "Discard-Signaling zur Denial."]
    }
  ),

  "a-little-wordy": g("word-games", "simple",
    {
      metaDescription: "Expert A Little Wordy strategy: tile deduction from opponent swaps, information-gain maximizing exchanges, and endgame letter counting.",
      intro: "A Little Wordy is Battleship-meets-Scrabble with hidden words. Experts maximize information per swap and deduce opponent tiles from their exchange patterns.",
      quickTips: ["Swap tiles that test multiple hypotheses about opponent's word length and letters.", "Track which letters opponents pick from the pool—they reveal what they lack.", "Build your word to be ambiguous until the final 2 tiles.", "Endgame: count remaining pool letters to deduce opponent's last gap."],
      strategy: ["Swap information gain: exchanging 2 tiles that could each fit 3+ positions in your word forces opponent to reveal whether they hold those letters.", "Opponent tile inference: if opponent swaps repeatedly without taking from pool, they're refining a fixed length—narrow your guess to that length class.", "Ambiguous word construction: words with common 2-letter endings (-AT, -ER, -ED) keep multiple valid interpretations until late game.", "Pool letter counting: when pool has 4 tiles left, enumerate all words opponent could hold given their swap history—usually narrows to <5 candidates.", "Defensive swaps: late game, swap tiles you know opponent needs based on their earlier pool picks—deny without revealing your word."]
    },
    {
      metaDescription: "Uzman A Little Wordy stratejisi: rakip takasindan cikarim ve bilgi maksimizasyonu.",
      intro: "A Little Wordy gizli kelimelerle Battleship-Scrabble karisimidir. Uzmanlar her takasta maksimum bilgi cikarir.",
      quickTips: ["Birden fazla hipotezi test eden tas takas edin.", "Rakibin havuzdan sectigi harfler eksiklerini gosterir.", "Kelimenizi son 2 tasa kadar belirsiz tutun.", "Havuzdaki kalan harfleri sayarak son boslugu bulun."],
      strategy: ["Takas bilgi kazanci: 3+ pozisyona uyan 2 tasi takas edin.", "Rakip cikarimi: surekli havuz almayan rakip sabit uzunluk inceliyor.", "Belirsiz kelime: -AT, -ER, -ED gibi yaygin sonlar.", "Havuz sayimi: 4 tas kaldiysa adaylari <5'e indirin.", "Savunmali takas: rakibin ihtiyac duydugu tasi verin."]
    },
    {
      metaDescription: "A-Little-Wordy-Expertenstrategie: Deduktion aus Gegner-Swaps.",
      intro: "A Little Wordy ist Battleship-trifft-Scrabble. Experten maximieren Information pro Swap.",
      quickTips: ["Swaps die mehrere Hypothesen testen.", "Gegner-Pool-Picks tracken.", "Wort bis zu letzten 2 Tiles mehrdeutig halten.", "Pool-Buchstaben zaehlen im Endgame."],
      strategy: ["Swap Information Gain mit Multi-Position-Tiles.", "Gegner-Inferenz bei wiederholten Swaps ohne Pool.", "Mehrdeutige Woerter mit -AT/-ER/-ED.", "Pool-Letter-Counting bei 4 verbleibenden.", "Defensive Swaps zur Denial."]
    }
  )
};
