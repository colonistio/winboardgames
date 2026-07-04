export const diceExpert = {
  yahtzee: {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Yahtzee strategy: upper section bonus pursuit, Yahtzee bonus timing, category sacrifice, and expected value on rerolls.",
        intro:
          "Yahtzee is expected-value dice allocation. Experts chase the 35-point upper bonus, hold Yahtzee pairs for the 100-point bonus, and know when to scratch a category versus chase a long shot.",
        quickTips: [
          "Aim for upper section bonus — 63+ points from aces through sixes.",
          "Hold all matching dice when chasing Yahtzee after first match.",
          "Scratch ones early if you cannot reach upper bonus via aces.",
          "Full house and straights are safer mid-game scores than Yahtzee gambles."
        ],
        strategy: [
          "Upper bonus math: you need 63 points from six categories — average 3.5 per die slot. Prioritize 4+ of a kind in upper section over lower section duplicates.",
          "Yahtzee bonus: first Yahtzee scores 50; each additional scores 100. After one Yahtzee, never scratch Yahtzee category — reroll anything for second Yahtzee.",
          "Category sacrifice: late game, scratch the category hardest to fill (often ones or twos) rather than wasting a good roll on a filled slot.",
          "Reroll EV: with 2-2-3-4-6 on first roll chasing large straight, keep 3-4 and roll three dice — two ways to complete vs keeping 2-2.",
          "Chance category: use as overflow when upper is maxed and lower needs a scratch. A 28-point chance beats a speculative full house attempt.",
          "Opponent psychology in head-to-head: when behind, chase Yahtzee and large straight; when ahead, lock safe 25-point full houses."
        ]
      },
      tr: {
        metaDescription:
          "Yahtzee stratejisi: üst bölüm bonusu, Yahtzee bonus zamanlaması, kategori feda etme ve yeniden atış beklenen değeri.",
        intro:
          "Yahtzee beklenen değerli zar dağıtımıdır. Uzmanlar 35 puanlık üst bonusu kovalar, Yahtzee çiftlerini 100 bonus için tutar.",
        quickTips: [
          "Üst bölüm bonusunu hedefle — aslardan altılıya 63+ puan.",
          "İlk eşleşmeden sonra Yahtzee için tüm eşleşen zarları tut.",
          "Aslarla üst bonusa ulaşamıyorsan birleri erken çiz.",
          "Full house ve straight orta oyunda Yahtzee kumarından güvenli."
        ],
        strategy: [
          "Üst bonus matematiği: altı kategoride 63 puan gerekir. Üst bölümde 4'lü kümeyi alt bölüm kopyasından önce al.",
          "Yahtzee bonusu: ilk 50, sonrakiler 100. Bir Yahtzee sonrası kategoriyi asla çizme.",
          "Kategori fedası: geç oyunda doldurması en zor kategoriyi çiz.",
          "Yeniden atış EV: büyük straight için 3-4 tut, üç zar at.",
          "Chance kategorisi: üst doluyken taşma olarak kullan.",
          "Bire bir: gerideyken Yahtzee kovala; öndeyken güvenli full house kilitle."
        ]
      },
      de: {
        metaDescription:
          "Yahtzee-Strategie: Oberer-Bereich-Bonus, Yahtzee-Bonus-Timing, Kategorie-Opfer, Erwartungswert bei Rerolls.",
        intro:
          "Yahtzee ist Erwartungswert-Würfelverteilung. Experten jagen den 35-Punkte-Oberbonus und halten Yahtzee-Paare für 100-Punkte-Bonus.",
        quickTips: [
          "Oberer-Bereich-Bonus anstreben — 63+ von Assen bis Sechsen.",
          "Alle passenden Würfel halten bei Yahtzee-Jagd.",
          "Einsen früh streichen wenn Oberbonus via Asse nicht erreichbar.",
          "Full House und Straights sicherer mid-game als Yahtzee-Gambles."
        ],
        strategy: [
          "Oberbonus-Math: 63 Punkte in sechs Kategorien nötig.",
          "Yahtzee-Bonus: erstes 50, jedes weitere 100. Nach erstem Yahtzee Kategorie nie streichen.",
          "Kategorie-Opfer: spät schwerste Kategorie streichen.",
          "Reroll-EV: bei großer Straße 3-4 halten, drei würfeln.",
          "Chance-Kategorie: als Overflow wenn oben voll.",
          "Kopf-an-Kopf: hinten Yahtzee jagen; vorne sichere Full Houses."
        ]
      }
    }
  },

  farkle: {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Farkle push-your-luck: bank at 300-400 points, hot dice streaks, six-dice 1500 threshold, and risk by score deficit.",
        intro:
          "Farkle rewards banking discipline. Experts bank at 300-400 when ahead, push hot dice (all six scoring) aggressively, and scale risk to points behind.",
        quickTips: [
          "Bank at 300-400 when you have a lead.",
          "Hot dice (all six score) — keep rolling unless match point.",
          "Three 1s is 1000 — always bank after unless far behind.",
          "Never Farkle on first roll with a single 5 — bank 50 and pass."
        ],
        strategy: [
          "Banking threshold: 300 points on a turn is standard safe exit. At 400+ with lead, bank — opponent needs your Farkle to catch up.",
          "Hot dice extension: when all six dice score, you roll again with six fresh dice. This is where 2000+ turn potential lives — push when behind.",
          "Risk scaling: behind by 1000+, roll with 2 dice left at 250 on turn. Ahead by 500, bank at 300 with 3 dice remaining.",
          "Scoring combos: three 1s (1000) > three 2s (200). Keep 1s and 5s across rolls — they're the only singles that score.",
          "Opening roll strategy: if first roll scores nothing, turn ends — some house rules allow 3 Farkle losses. Know your variant.",
          "Endgame: at 9500+ (500 to win), bank at 200. One Farkle from victory is the classic mistake."
        ]
      },
      tr: {
        metaDescription:
          "Farkle şans zorlama: 300-400'de kasaya yaz, sıcak zar serileri, altı zar 1500 eşiği ve skor açığına göre risk.",
        intro:
          "Farkle kasa disiplini ödüllendirir. Uzmanlar öndeyken 300-400'de yazar, sıcak zarları agresif iter.",
        quickTips: [
          "Öndeyken 300-400'de kasaya yaz.",
          "Sıcak zar (altısı da puan) — maç puanı değilse devam et.",
          "Üç 1 = 1000 — çok geride değilsen her zaman yaz.",
          "Tek 5 ile ilk atışta Farkle yapma — 50 yaz ve geç."
        ],
        strategy: [
          "Kasa eşiği: turda 300 standart güvenli çıkış. 400+ önde kasaya yaz.",
          "Sıcak zar uzatması: altı zar puan verince yeniden at. 2000+ tur potansiyeli burada.",
          "Risk ölçekleme: 1000 geride 250'de 2 zarla devam; 500 önde 300'de 3 zarla yaz.",
          "Puan kombinasyonları: üç 1 (1000) > üç 2 (200). 1 ve 5'leri koru.",
          "Açılış: ilk atış puan vermezse tur biter — varyantını bil.",
          "Oyun sonu: 9500+'da 200'de yaz. Zaferden bir Farkle uzakta klasik hata."
        ]
      },
      de: {
        metaDescription:
          "Farkle Gluecksreiz: bei 300-400 einbanken, Hot-Dice-Streaks, Sechs-Würfel-1500-Schwelle, Risiko nach Rückstand.",
        intro:
          "Farkle belohnt Bank-Disziplin. Experten banken bei 300-400 in Führung und pushen Hot Dice aggressiv.",
        quickTips: [
          "Bei 300-400 einbanken wenn in Führung.",
          "Hot Dice — weiterrollen außer Match Point.",
          "Drei 1en = 1000 — immer einbanken außer weit hinten.",
          "Nie Farkle auf erstem Wurf mit einzelner 5."
        ],
        strategy: [
          "Bank-Schwelle: 300 Punkte pro Runde ist Standard.",
          "Hot-Dice-Extension: alle sechs würfeln = neu mit sechs Würfeln.",
          "Risiko-Skalierung: 1000 hinten bei 250 mit 2 Würfeln rollen.",
          "Wertungs-Kombos: drei 1en (1000) > drei 2en (200).",
          "Eröffnung: erster Wurf ohne Punkte beendet Runde.",
          "Endgame: bei 9500+ bei 200 einbanken."
        ]
      }
    }
  },

  bunco: {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Bunco strategy: round target numbers, head table pressure, partnership switching awareness, and scoring tempo in social play.",
        intro:
          "Bunco is a social dice party game where each round targets a different number (ones, then twos, etc.). Experts roll fast, track round numbers, and maximize Bunco bonuses.",
        quickTips: [
          "Roll quickly — speed keeps table rhythm and reduces overthinking.",
          "Call Bunco immediately when all three dice match the round number.",
          "Track which round number is active — ones round 1, twos round 2.",
          "At head table, every point matters for table rotation."
        ],
        strategy: [
          "Round number focus: in round 4, only fours score. Don't celebrate 5s or 6s — they're worthless until the next round.",
          "Bunco bonus: three of the round number scores 21 (or house rule 5). Call it instantly — delayed calls cause disputes.",
          "Head table dynamics: winning head table moves you up; losing moves down. Play slightly more conservatively at head table when one point from rotation.",
          "Partnership awareness: you switch partners each round. Help new partners with clear calls and fast dice passing.",
          "Scoring accumulation: 25 wins is typical match length. Consistency across 6 rounds beats one lucky Bunco.",
          "Social tempo: Bunco is won by attendance and fun — but competitive players track win rate at head table over multiple sessions."
        ]
      },
      tr: {
        metaDescription:
          "Bunco stratejisi: tur hedef sayıları, baş masa baskısı, partner değişimi ve sosyal oyunda skor temposu.",
        intro:
          "Bunco sosyal zar partisi oyunudur; her tur farklı sayı hedefler. Uzmanlar hızlı atar, tur numarasını takip eder.",
        quickTips: [
          "Hızlı at — tempo masayı canlı tutar.",
          "Üç zar tur sayısıyla eşleşince hemen Bunco çağır.",
          "Hangi tur sayısının aktif olduğunu takip et.",
          "Baş masada her puan masa rotasyonu için önemli."
        ],
        strategy: [
          "Tur sayısı odağı: 4. turda yalnızca dörtlü puan verir.",
          "Bunco bonusu: üç eşleşme 21 puan. Anında çağır.",
          "Baş masa dinamiği: kazanmak yukarı, kaybetmek aşağı taşır.",
          "Partner farkındalığı: her tur partner değişir.",
          "Skor birikimi: 25 galibiyet tipik maç uzunluğu.",
          "Sosyal tempo: rekabetçi oyuncular baş masa kazanma oranını izler."
        ]
      },
      de: {
        metaDescription:
          "Bunco-Strategie: Runden-Zielzahlen, Haupttisch-Druck, Partner-Wechsel, Scoring-Tempo.",
        intro:
          "Bunco ist soziales Würfel-Partyspiel mit wechselnder Zielzahl pro Runde. Experten würfeln schnell und tracken Rundennummern.",
        quickTips: [
          "Schnell würfeln — Tempo hält Tischrhythmus.",
          "Bunco sofort rufen wenn alle drei Würfel die Runden-Zahl zeigen.",
          "Aktive Runden-Zahl tracken.",
          "Am Haupttisch zählt jeder Punkt für Rotation."
        ],
        strategy: [
          "Runden-Zahl-Fokus: in Runde 4 nur Vieren zählen.",
          "Bunco-Bonus: drei der Runden-Zahl = 21 Punkte.",
          "Haupttisch-Dynamik: Gewinn nach oben, Verlust nach unten.",
          "Partner-Bewusstsein: Partner wechselt jede Runde.",
          "Scoring: 25 Siege typische Match-Länge.",
          "Soziales Tempo: Haupttisch-Gewinnrate über Sessions tracken."
        ]
      }
    }
  },

  "liars-dice": {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Liar's Dice bidding: probability calculation, late-game bluff escalation, wild ace counting, and challenge timing.",
        intro:
          "Liar's Dice is poker with dice cups. Experts count visible dice, calculate binomial odds on bids, and escalate bluffs when cups empty.",
        quickTips: [
          "Count all visible dice before every bid.",
          "Aces are wild — factor them into every probability.",
          "Challenge when bid exceeds expected value by 2+.",
          "Late game: fewer dice means bids must drop — bluff the opposite."
        ],
        strategy: [
          "Probability math: with 30 dice in play and 5 players, expected count of any face is ~5. A bid of 12 fives needs aces and bluffs to be credible.",
          "Ace wild counting: aces count as any face. Bidding fives when you hold three aces is strong — they satisfy fives bids.",
          "Challenge threshold: challenge when bid > visible count + expected hidden + 2. Early challenges waste dice; late challenges are survival.",
          "Bid escalation: each bid must raise quantity or face. Jumping quantity by 2 signals strength or desperation — read cup sizes.",
          "Endgame bluffing: with 2 dice left, bid aggressively on your highest pair. Opponents often challenge incorrectly on 3-of-a-face bids.",
          "Palifico and special rules: when aces aren't wild, recalculate entirely — ace bids become information bids."
        ]
      },
      tr: {
        metaDescription:
          "Liar's Dice ihale: olasılık hesabı, oyun sonu blöf tırmanışı, joker as sayımı ve challenge zamanlaması.",
        intro:
          "Liar's Dice zar kupalarıyla pokere benzer. Uzmanlar görünen zarları sayar, binom olasılık hesaplar.",
        quickTips: [
          "Her ihaleden önce tüm görünen zarları say.",
          "Aslar joker — her olasılığa dahil et.",
          "İhale beklenen değeri 2+ aştığında challenge et.",
          "Oyun sonu: daha az zar = ihaleler düşmeli — tersini blöfle."
        ],
        strategy: [
          "Olasılık matematiği: 30 zar 5 oyuncuda her yüz için beklenen ~5.",
          "Joker as sayımı: aslar her yüzü sayar.",
          "Challenge eşiği: ihale > görünen + beklenen gizli + 2.",
          "İhale tırmanışı: miktar veya yüz artmalı. 2 artış güç veya çaresizlik sinyali.",
          "Oyun sonu blöfü: 2 zar kaldığında en yüksek çiftte agresif ihale.",
          "Palifico: aslar joker değilse tamamen yeniden hesapla."
        ]
      },
      de: {
        metaDescription:
          "Liar's Dice Bieten: Wahrscheinlichkeitsrechnung, Endgame-Bluff-Eskalation, Joker-Asse, Challenge-Timing.",
        intro:
          "Liar's Dice ist Poker mit Würfelbechern. Experten zählen sichtbare Würfel und berechnen Binomial-Odds.",
        quickTips: [
          "Alle sichtbaren Würfel vor jedem Gebot zählen.",
          "Asse sind wild — in jede Wahrscheinlichkeit einbeziehen.",
          "Challengen wenn Gebot Erwartungswert um 2+ übersteigt.",
          "Endgame: weniger Würfel — Gebote müssen fallen oder Bluff umgekehrt."
        ],
        strategy: [
          "Wahrscheinlichkeits-Math: bei 30 Würfeln ~5 pro Seite erwartet.",
          "Joker-Asse: zählen als jede Seite.",
          "Challenge-Schwelle: Gebot > sichtbar + erwartet versteckt + 2.",
          "Gebots-Eskalation: Menge oder Seite muss steigen.",
          "Endgame-Bluff: bei 2 Würfeln aggressiv auf höchstes Paar bieten.",
          "Palifico: wenn Asse nicht wild, komplett neu rechnen."
        ]
      }
    }
  },

  "shut-the-box": {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Shut the Box strategy: tile elimination order, 7-first openings, high tile priority, and expected value on two-dice sums.",
        intro:
          "Shut the Box is solo probability optimization. Experts open with 7 (highest two-dice probability), prioritize high tiles, and plan dual-tile combinations before rolling.",
        quickTips: [
          "Opening roll: 7 is most likely sum (6/36) — plan 3-4 or 2-5 combos.",
          "Shut high tiles (9, 8, 7) early when sums allow.",
          "Leave flexible low tiles (1-2-3) for late rolls.",
          "If 7, 8, 9 are shut, even low rolls can end the game."
        ],
        strategy: [
          "Probability table: 7 appears in 6/36 rolls, 6 and 8 in 5/36, 2 and 12 in 1/36. Plan tile pairs matching high-probability sums.",
          "High tile priority: shutting 9 early removes the hardest single tile. A roll of 9 (4-5, 3-6, 2-7 invalid if 7 shut) frees big numbers.",
          "Flexible endgame: keep 1, 2, 3 up as long as possible. Almost any roll 3-10 can use small tiles in combination.",
          "Single tile vs pair: rolling 6 can shut 6 alone or 1+5, 2+4. Prefer pairs that preserve high singles only when highs are already shut.",
          "Multiplayer scoring: lowest remaining tile sum wins. Shutting many tiles beats leaving one high tile.",
          "Variant awareness: some rules require exact shut — then preserve 1 for snake eyes (1+1) endgame insurance."
        ]
      },
      tr: {
        metaDescription:
          "Shut the Box stratejisi: karo kapatma sırası, 7 ile açılış, yüksek karo önceliği ve iki zar toplamı beklenen değeri.",
        intro:
          "Shut the Box solo olasılık optimizasyonudur. Uzmanlar 7 ile açar, yüksek karoları önceliklendirir.",
        quickTips: [
          "Açılış: 7 en olası toplam (6/36) — 3-4 veya 2-5 planla.",
          "Toplam izin verdiğinde yüksek karoları (9, 8, 7) erken kapat.",
          "Geç atışlar için esnek düşük karolar (1-2-3) bırak.",
          "7, 8, 9 kapalıysa düşük atışlar bile oyunu bitirebilir."
        ],
        strategy: [
          "Olasılık tablosu: 7 = 6/36, 6 ve 8 = 5/36, 2 ve 12 = 1/36.",
          "Yüksek karo önceliği: 9'u erken kapatmak en zor tek karoyu kaldırır.",
          "Esnek oyun sonu: 1, 2, 3'ü mümkün olduğunca açık tut.",
          "Tek vs çift: 6 tek başına veya 1+5, 2+4 ile kapatılabilir.",
          "Çok oyunculu: en düşük kalan karo toplamı kazanır.",
          "Varyant: tam kapatma kuralında 1'i yılan gözleri için sakla."
        ]
      },
      de: {
        metaDescription:
          "Shut the Box Strategie: Kachel-Reihenfolge, 7-Eröffnung, hohe Kachel-Priorität, Erwartungswert bei zwei Würfeln.",
        intro:
          "Shut the Box ist Solo-Wahrscheinlichkeits-Optimierung. Experten öffnen mit 7 und priorisieren hohe Kacheln.",
        quickTips: [
          "Eröffnung: 7 wahrscheinlichste Summe (6/36).",
          "Hohe Kacheln (9, 8, 7) früh schließen.",
          "Flexible tiefe Kacheln (1-2-3) für späte Würfe lassen.",
          "Wenn 7, 8, 9 zu, können niedrige Würfe das Spiel beenden."
        ],
        strategy: [
          "Wahrscheinlichkeitstabelle: 7 in 6/36, 6 und 8 in 5/36.",
          "Hohe Kachel-Priorität: 9 früh schließen entfernt schwierigste Einzelkachel.",
          "Flexibles Endgame: 1, 2, 3 so lange offen halten wie möglich.",
          "Einzel vs Paar: 6 allein oder 1+5, 2+4.",
          "Mehrspieler: niedrigste verbleibende Kachelsumme gewinnt.",
          "Variante: bei exaktem Schließen 1 für Snake Eyes reservieren."
        ]
      }
    }
  },

  qwixx: {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Qwixx strategy: color locking decisions, penalty avoidance, cross-off priority by die position, and passive vs active scoring.",
        intro:
          "Qwixx is simultaneous dice selection with color locking. Experts lock colors strategically to deny opponents, minimize X penalties, and prioritize high-value cross-offs before locks.",
        quickTips: [
          "Lock a color when opponents need that row more than you.",
          "Avoid penalties — each X costs 5 points at game end.",
          "Cross off rightmost available number when colors are equal value.",
          "White dice sum helps everyone — use it before opponents when ahead."
        ],
        strategy: [
          "Color locking: locking ends that color for all players and gives the locker +2 (or +1 in some editions). Lock when your row is advanced and opponents have more to gain.",
          "Penalty avoidance: you get 4 Xs before elimination. Each unused cross opportunity costs potential; each X costs 5. Never skip a free white-dice cross unless it helps opponent more.",
          "Row priority: red/yellow ascend (2-12), blue/green descend (12-2). Cross the extreme ends first — 2 on red and 12 on blue are hardest to reach later.",
          "White dice sharing: the active player must use one die; white sum is available to all. Cross your row on opponents' turns when white fits.",
          "Lock timing: lock red at 2-3-4-5-6 crossed if opponents have 2-3 red only — they lose the row entirely.",
          "Endgame: count remaining crosses needed for bonus boxes. A row bonus (5+ crosses) is worth more than one penalty risk."
        ]
      },
      tr: {
        metaDescription:
          "Qwixx stratejisi: renk kilitleme kararları, ceza kaçınma, zar konumuna göre çarpı önceliği ve aktif/pasif puanlama.",
        intro:
          "Qwixx eşzamanlı zar seçimi ve renk kilitlemedir. Uzmanlar renkleri stratejik kilitler, X cezalarını minimize eder.",
        quickTips: [
          "Rakiplerin senden fazla ihtiyacı olduğunda rengi kilitle.",
          "Ceza kaçın — her X oyun sonunda 5 puan kaybettirir.",
          "Renkler eşit değerdeyse en sağdaki sayıyı çarp.",
          "Beyaz zar toplamı herkese açık — öndeyken rakiplerden önce kullan."
        ],
        strategy: [
          "Renk kilitleme: kilitlemek o rengi herkese kapatır ve +2 verir. Sıran ilerlediyse ve rakipler daha çok kazanacaksa kilitle.",
          "Ceza kaçınma: 4 X'te elenirsin. Her X 5 puan kaybı. Rakibe fazla yardım etmiyorsa beyaz zarı kaçırma.",
          "Satır önceliği: kırmızı/sarı artan, mavi/yeşil azalan. Uç değerleri önce çarp.",
          "Beyaz zar paylaşımı: aktif oyuncu bir zar kullanmalı; beyaz toplam herkese açık.",
          "Kilit zamanlaması: rakipler az kırmızı çizmişse erken kilitle.",
          "Oyun sonu: bonus kutuları için kalan çarpıları say."
        ]
      },
      de: {
        metaDescription:
          "Qwixx-Strategie: Farb-Sperren, Strafvermeidung, Kreuz-Priorität nach Würfelposition, passives vs aktives Scoring.",
        intro:
          "Qwixx ist simultane Würfelauswahl mit Farb-Sperren. Experten sperren strategisch und minimieren X-Strafen.",
        quickTips: [
          "Farbe sperren wenn Gegner die Reihe mehr brauchen.",
          "Strafen vermeiden — jedes X kostet 5 Punkte.",
          "Rechteste verfügbare Zahl ankreuzen wenn Farben gleichwertig.",
          "Weiße Würfel-Summe allen nutzen — in Führung zuerst."
        ],
        strategy: [
          "Farb-Sperren: sperren beendet Farbe für alle und gibt +2.",
          "Strafvermeidung: 4 Xs bis Elimination. Jedes X kostet 5.",
          "Reihen-Priorität: rot/gelb aufsteigend, blau/grün absteigend. Extreme zuerst.",
          "Weiße Würfel: aktiver Spieler muss einen nutzen; weiße Summe für alle.",
          "Sperr-Timing: rot sperren wenn Gegner wenig rot haben.",
          "Endgame: verbleibende Kreuze für Bonus-Boxen zählen."
        ]
      }
    }
  },

  qwinto: {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Qwinto strategy: star bonuses on five-of-a-kind rows, column completion, color row timing, and penalty X management.",
        intro:
          "Qwinto extends Qwixx with columns and star bonuses. Experts complete columns for multipliers, chase five-in-a-row stars, and coordinate color rows across three orientations.",
        quickTips: [
          "Five crosses in one row earns a star — prioritize nearly-complete rows.",
          "Complete columns for bonus points before locking colors.",
          "Use white dice on opponents' turns when your row fits.",
          "Track penalty Xs — four mistakes ends your game."
        ],
        strategy: [
          "Star bonus: five crosses in a single color row scores a star (typically 2 points). Push one row to 4 crosses early, then complete on any matching roll.",
          "Column completion: three colors cross in each column. Completing a column scores bonus — plan crosses so columns fill evenly.",
          "Color row asymmetry: like Qwixx, red/yellow ascend and blue/green descend. Stars are easier on short rows if you start extremes early.",
          "White dice opportunism: cross on other players' turns without using your active roll. This is free progress — never skip a white cross on your color.",
          "Lock decision: Qwinto locks are less punishing than Qwixx but still deny opponents. Lock when you have star + column bonus secured.",
          "Penalty management: one X per impossible cross attempt. Don't gamble on low-probability crosses when you have 3 Xs."
        ]
      },
      tr: {
        metaDescription:
          "Qwinto stratejisi: beşli seri yıldız bonusları, sütun tamamlama, renk satırı zamanlaması ve X ceza yönetimi.",
        intro:
          "Qwinto Qwixx'i sütunlar ve yıldız bonuslarıyla genişletir. Uzmanlar sütunları tamamlar ve beşli seri yıldızlarını kovalar.",
        quickTips: [
          "Bir satırda beş çarpı yıldız kazandırır — neredeyse dolu satırları önceliklendir.",
          "Renkleri kilitlemeden önce sütun bonusları için tamamla.",
          "Sıran gelmediğinde beyaz zarla kendi satırını çarp.",
          "X cezalarını takip et — dört hata oyunu bitirir."
        ],
        strategy: [
          "Yıldız bonusu: tek renk satırında beş çarpı yıldız verir. Bir satırı 4'e erken getir.",
          "Sütun tamamlama: her sütunda üç renk kesişir. Sütun bonusu planla.",
          "Renk satırı asimetrisi: Qwixx gibi kırmızı/sarı artan, mavi/yeşil azalan.",
          "Beyaz zar fırsatçılığı: başkalarının turunda ücretsiz ilerleme.",
          "Kilit kararı: yıldız + sütun bonusu güvendeyse kilitle.",
          "Ceza yönetimi: 3 X varken düşük olasılıklı çarpıya kumar oynama."
        ]
      },
      de: {
        metaDescription:
          "Qwinto-Strategie: Stern-Boni bei Fünfer-Reihen, Spalten-Vervollständigung, Farb-Reihen-Timing, X-Strafen.",
        intro:
          "Qwinto erweitert Qwixx mit Spalten und Stern-Boni. Experten vervollständigen Spalten und jagen Fünf-in-Reihe-Sterne.",
        quickTips: [
          "Fünf Kreuze in einer Reihe = Stern — fast fertige Reihen priorisieren.",
          "Spalten für Bonus abschließen vor Farb-Sperren.",
          "Weiße Würfel auf Gegnerzügen nutzen wenn Reihe passt.",
          "X-Strafen tracken — vier Fehler beendet das Spiel."
        ],
        strategy: [
          "Stern-Bonus: fünf Kreuze in einer Farbreihe = Stern.",
          "Spalten-Vervollständigung: drei Farben pro Spalte.",
          "Farb-Reihen-Asymmetrie: wie Qwixx auf-/absteigend.",
          "Weiße Würfel-Opportunismus: auf Gegnerzügen kostenlos kreuzen.",
          "Sperr-Entscheidung: sperren wenn Stern + Spaltenbonus gesichert.",
          "Strafen-Management: bei 3 Xs nicht auf unwahrscheinliche Kreuze gambeln."
        ]
      }
    }
  },

  "cant-stop": {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Can't Stop strategy: column commitment thresholds, bust probability math, stop at three markers, and opponent column denial.",
        intro:
          "Can't Stop is pure push-your-luck with column commitment. Experts stop at three markers on multiple columns, calculate bust odds, and block opponents' near-complete columns.",
        quickTips: [
          "Spread markers across 2-3 columns early — don't commit to one.",
          "Stop when any column reaches 3 markers unless odds favor continuing.",
          "Block opponents by starting their near-complete column numbers.",
          "Bust odds rise sharply after 4+ rolls in a turn."
        ],
        strategy: [
          "Column commitment: you need 3 markers to lock a column. Spreading 2-2-2 across three columns is safer than 4-0-0 on one.",
          "Bust probability: each roll, you must hit an active column number. With 3 active columns (6 numbers), bust chance on any roll is ~50%. After 5 rolls, bust is likely.",
          "Stop timing: standard expert stop is after placing 3 markers total across columns, or when one column hits 3 markers. Greed past this loses more than it gains.",
          "Opponent denial: if opponent has 2 markers on 10, start column 10 yourself — if you bust, their progress stalls when you can't continue that column.",
          "Number selection: 6, 7, 8 are most probable sums. Prioritize these columns for faster marker accumulation.",
          "Endgame: when an opponent is one marker from winning, take maximum risk on your turn — conservative play guarantees their win."
        ]
      },
      tr: {
        metaDescription:
          "Can't Stop stratejisi: sütun taahhüt eşikleri, patlama olasılığı, üç işaretçide durma ve rakip sütun engelleme.",
        intro:
          "Can't Stop sütun taahhüdüyle saf şans zorlamadır. Uzmanlar üç işaretçide durur, patlama olasılığını hesaplar.",
        quickTips: [
          "Erken 2-3 sütuna işaretçi yay — tek sütuna bağlanma.",
          "Herhangi bir sütun 3 işaretçiye ulaşınca dur, olasılık uygun değilse.",
          "Rakibin neredeyse tam sütunlarını başlayarak engelle.",
          "4+ atıştan sonra patlama olasılığı keskin artar."
        ],
        strategy: [
          "Sütun taahhüdü: kilitlemek için 3 işaretçi gerekir. 2-2-2 üç sütunda 4-0-0'dan güvenli.",
          "Patlama olasılığı: 3 aktif sütunda her atışta ~%50 patlama.",
          "Durma zamanlaması: toplam 3 işaretçi veya bir sütunda 3 işaretçide dur.",
          "Rakip engelleme: rakibin 10'da 2 işaretçisi varsa sen de 10'u başlat.",
          "Sayı seçimi: 6, 7, 8 en olası toplamlar.",
          "Oyun sonu: rakip bir işaretçi uzaktaysa maksimum risk al."
        ]
      },
      de: {
        metaDescription:
          "Can't Stop Strategie: Spalten-Commitment, Bust-Wahrscheinlichkeit, Stopp bei drei Markern, Gegner-Spalten-Verweigerung.",
        intro:
          "Can't Stop ist reines Gluecksreiz mit Spalten-Commitment. Experten stoppen bei drei Markern und berechnen Bust-Odds.",
        quickTips: [
          "Marker früh auf 2-3 Spalten verteilen.",
          "Stoppen wenn Spalte 3 Marker erreicht.",
          "Gegner blocken durch Start ihrer fast fertigen Spalten.",
          "Bust-Odds steigen nach 4+ Würfen pro Zug stark."
        ],
        strategy: [
          "Spalten-Commitment: 3 Marker zum Sperren nötig. 2-2-2 sicherer als 4-0-0.",
          "Bust-Wahrscheinlichkeit: bei 3 aktiven Spalten ~50% Bust pro Wurf.",
          "Stopp-Timing: nach 3 Markern gesamt oder 3 in einer Spalte.",
          "Gegner-Verweigerung: ihre fast fertige Spalte selbst starten.",
          "Zahlenwahl: 6, 7, 8 wahrscheinlichste Summen.",
          "Endgame: maximal riskieren wenn Gegner einen Marker vom Sieg entfernt."
        ]
      }
    }
  },

  "king-of-tokyo": {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "King of Tokyo strategy: Tokyo city control, points vs claws, heal timing, evolve vs energy, and king of the hill combat.",
        intro:
          "King of Tokyo is king-of-the-hill with dice. Experts balance staying in Tokyo for points against claw damage, evolve for late-game power, and know when to yield Tokyo to heal.",
        quickTips: [
          "Tokyo city: +2 points per turn but all opponents hit you.",
          "Leave Tokyo voluntarily when below half health unless winning on points.",
          "Three claws = 1 damage to all outside Tokyo; in Tokyo, all hit you.",
          "Evolve early for card advantage; points path needs Tokyo time."
        ],
        strategy: [
          "Tokyo city economics: entering Tokyo earns 2 points immediately + 2 per turn inside. The cost is every claw rolled by anyone damages you. Stay only with 8+ health or lethal point lead.",
          "Points vs claws victory: 20 stars wins regardless of health. A player at 16 stars should prioritize hearts and Tokyo over claws.",
          "Heal timing: heal when at 4-5 health outside Tokyo. Inside Tokyo at low health, yield the city — re-entry gives 2 points and resets targeting.",
          "Evolve strategy: energy on evolution cards scales late game. Early evolutions (stretch goal, parasite) compound; don't spend all energy on single-use cards.",
          "Claw pressure: three claws forces opponents to heal or die. When you have claw mutations, stay out of Tokyo and let others fight inside.",
          "King of the hill: when two players contest Tokyo, third player claws freely. Stay out until one is eliminated or weakened."
        ]
      },
      tr: {
        metaDescription:
          "King of Tokyo stratejisi: Tokyo şehir kontrolü, puan vs pençe, iyileşme zamanlaması, evrim vs enerji ve tepe savaşı.",
        intro:
          "King of Tokyo zarlarla tepe oyunudur. Uzmanlar Tokyo'da puan ile pençe hasarı arasında denge kurar.",
        quickTips: [
          "Tokyo şehri: tur başı +2 puan ama tüm rakipler sana vurur.",
          "Yarım candan azsa ve puanla kazanmıyorsan Tokyo'dan çık.",
          "Üç pençe = Tokyo dışındakilere 1 hasar; Tokyo'dayken hepsi sana vurur.",
          "Kart avantajı için erken evrim; puan yolu Tokyo zamanı ister."
        ],
        strategy: [
          "Tokyo ekonomisi: girmek anında 2 + tur başı 2 puan. Maliyet her pençe hasarı. 8+ can veya öldürücü puan farkıyla kal.",
          "Puan vs pençe zaferi: 20 yıldız sağlıktan bağımsız kazanır.",
          "İyileşme zamanlaması: Tokyo dışında 4-5 canda iyileş. Düşük canda şehri bırak.",
          "Evrim stratejisi: erken evrimler bileşir; tüm enerjiyi tek kullanımlık kartlara harcama.",
          "Pençe baskısı: üç pençe rakipleri iyileşmeye veya ölmeye zorlar.",
          "Tepe savaşı: iki rakip Tokyo'da savaşırken üçüncü serbest pençe atar."
        ]
      },
      de: {
        metaDescription:
          "King of Tokyo Strategie: Tokyo-Stadt-Kontrolle, Punkte vs Klauen, Heil-Timing, Evolve vs Energie.",
        intro:
          "King of Tokyo ist King-of-the-Hill mit Würfeln. Experten balancieren Tokyo-Punkte gegen Klauen-Schaden.",
        quickTips: [
          "Tokyo-Stadt: +2 Punkte pro Runde aber alle Gegner treffen dich.",
          "Tokyo freiwillig verlassen unter halber Gesundheit.",
          "Drei Klauen = 1 Schaden an alle außerhalb Tokyo.",
          "Früh evolieren für Karten-Vorteil."
        ],
        strategy: [
          "Tokyo-Ökonomie: Eintritt 2 sofort + 2 pro Runde. Kosten: jede Klauen-Schaden.",
          "Punkte vs Klauen: 20 Sterne gewinnt unabhängig von Gesundheit.",
          "Heil-Timing: bei 4-5 Gesundheit außerhalb heilen. In Tokyo bei wenig Gesundheit verlassen.",
          "Evolve-Strategie: frühe Evolutionen compounden.",
          "Klauen-Druck: drei Klauen zwingen Heilung oder Tod.",
          "King of the Hill: dritter Spieler klaut frei während zwei in Tokyo kämpfen."
        ]
      }
    }
  },

  "zombie-dice": {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Zombie Dice push-your-luck: bank at 3 brains, shotgun wound counting, red vs green die selection, and 13-brain win race.",
        intro:
          "Zombie Dice is fast push-your-luck. Experts bank at 3 brains, track shotgun blasts, and understand that red dice have 3 feet and 1 brain — green dice favor continuing.",
        quickTips: [
          "Bank at 3 brains unless you have 0 shotguns.",
          "Stop immediately at 2 shotguns — next blast ends your turn with 0.",
          "Red dice from the cup are dangerous — expect feet and blasts.",
          "Green dice are safe to push — 2 brains per die possible."
        ],
        strategy: [
          "Bank at 3 brains: expected value of rolling again with 1 shotgun and mixed dice is negative. Three brains is the standard expert bank.",
          "Shotgun tracking: 2 shotguns means 33%+ bust on next roll if cup has red dice. Always bank at 2 shotguns regardless of brain count.",
          "Die color probability: green = 3 brains, 2 feet, 1 blast per 6 sides; yellow = 2/2/2; red = 1/2/3. Know what's left in the cup.",
          "Cup management: after rolling, set aside feet and shotguns, reroll only brain dice plus 3 new from cup. Fewer dice in cup = more variance.",
          "Race to 13: when opponent has 10+ brains, push to 4 brains on a turn if you have 0-1 shotguns — conservative play loses the race.",
          "First player advantage: going first wins ~5% more games. Push slightly harder on opening turns."
        ]
      },
      tr: {
        metaDescription:
          "Zombie Dice şans zorlama: 3 beyinde kasaya yaz, pompalı yara sayımı, kırmızı vs yeşil zar seçimi ve 13 beyin yarışı.",
        intro:
          "Zombie Dice hızlı şans zorlamadır. Uzmanlar 3 beyinde yazar, pompalı patlamalarını takip eder.",
        quickTips: [
          "0 pompalı yoksa 3 beyinde kasaya yaz.",
          "2 pompalıda hemen dur — sonraki patlama turu sıfırlar.",
          "Kupadan kırmızı zar tehlikelidir — ayak ve patlama bekle.",
          "Yeşil zarlar devam için güvenli — zar başı 2 beyin mümkün."
        ],
        strategy: [
          "3 beyinde yaz: 1 pompalı ve karışık zarla devamın beklenen değeri negatif.",
          "Pompalı takibi: 2 pompalıda kırmızı zarla yüzde 33+ patlama. Her zaman dur.",
          "Zar renk olasılığı: yeşil 3 beyin, 2 ayak, 1 patlama; sarı 2/2/2; kırmızı 1/2/3.",
          "Kupa yönetimi: ayak ve pompalıları ayır, yalnızca beyin zarlarını ve 3 yenisini at.",
          "13'e yarış: rakip 10+ beyinde 0-1 pompalıyla 4 beyin için zorla.",
          "İlk oyuncu avantajı: ilk giden yaklaşık yüzde 5 daha fazla kazanır."
        ]
      },
      de: {
        metaDescription:
          "Zombie Dice Gluecksreiz: bei 3 Gehirnen einbanken, Schrotflinten zählen, rot vs grün Würfelauswahl.",
        intro:
          "Zombie Dice ist schnelles Gluecksreiz. Experten banken bei 3 Gehirnen und tracken Schrotflinten.",
        quickTips: [
          "Bei 3 Gehirnen einbanken außer 0 Schrotflinten.",
          "Bei 2 Schrotflinten sofort stoppen.",
          "Rote Würfel aus Becher gefährlich.",
          "Grüne Würfel sicher zum Pushen."
        ],
        strategy: [
          "Bei 3 Gehirnen banken: EV von weiterwürfeln mit 1 Schrotflinte negativ.",
          "Schrotflinten-Tracking: bei 2 Schrotflinten immer banken.",
          "Würfelfarben-Wahrscheinlichkeit: grün 3/2/1, gelb 2/2/2, rot 1/2/3.",
          "Becher-Management: Füße und Schrotflinten beiseite, nur Gehirne rerollen.",
          "Rennen zu 13: bei Gegner 10+ mit 0-1 Schrotflinten auf 4 pushen.",
          "Erster-Spieler-Vorteil: ~5% mehr Siege."
        ]
      }
    }
  },

  "roll-for-the-galaxy": {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Roll for the Galaxy strategy: dice allocation phases, develop vs settle vs explore, purple dice flexibility, and tableau engine building.",
        intro:
          "Roll for the Galaxy is dice worker placement. Experts allocate dice to phases they can win, build consume-produce engines, and use purple dice to fill gaps.",
        quickTips: [
          "Call phases you can staff with dice — winning phase matters.",
          "Develop worlds early for permanent dice discounts.",
          "Settle consumes dice but scores points — time it with produce.",
          "Purple dice (wild) are premium — save for critical phase calls."
        ],
        strategy: [
          "Phase selection: you only execute phases you call or others call. Put dice on phases you want AND can win — empty calls waste dice.",
          "Develop vs settle: develop adds permanent worlds (more dice slots); settle scores immediate points. Engine builders develop first; rush strategies settle.",
          "Explore for credit and tiles: explore when you need new world tiles or credit for expensive developments. Don't explore when tableau is full.",
          "Consume-produce cycles: produce fills goods; consume trades goods for cards and points. A tableau with 3+ consume powers is an engine.",
          "Dice cup management: returned dice go to cup. Worlds that keep dice off phases (permanent assignment) reduce flexibility — balance.",
          "Shipping and bonuses: shipping goods scores points. Combine with trade world powers for endgame point explosions."
        ]
      },
      tr: {
        metaDescription:
          "Roll for the Galaxy stratejisi: zar faz tahsisi, geliştir vs yerleş, mor zar esnekliği ve tablo motoru kurma.",
        intro:
          "Roll for the Galaxy zar işçi yerleştirmedir. Uzmanlar kazanabilecekleri fazlara zar atar, tüket-üret motorları kurar.",
        quickTips: [
          "Zarla doldurabileceğin fazları çağır — fazı kazanmak önemli.",
          "Kalıcı zar indirimi için dünyaları erken geliştir.",
          "Yerleş zar tüketir ama puan verir — üretimle zamanla.",
          "Mor zarlar (joker) premium — kritik faz çağrıları için sakla."
        ],
        strategy: [
          "Faz seçimi: yalnızca çağırdığın veya başkalarının çağırdığı fazlar çalışır.",
          "Geliştir vs yerleş: geliştir kalıcı dünya ekler; yerleş anında puan.",
          "Keşif: yeni dünya karosu veya kredi için. Tablo doluyken keşif yapma.",
          "Tüket-üret döngüleri: üret mal doldurur; tüket malı karta ve puana çevirir.",
          "Zar kupa yönetimi: dönen zarlar kupaya gider.",
          "Nakliye ve bonuslar: mal nakliyesi puan verir."
        ]
      },
      de: {
        metaDescription:
          "Roll for the Galaxy Strategie: Würfel-Phasen-Zuteilung, Entwickeln vs Kolonisieren, lila Würfel-Flexibilität.",
        intro:
          "Roll for the Galaxy ist Würfel-Worker-Placement. Experten verteilen Würfel auf gewinnbare Phasen und bauen Konsum-Produzieren-Engines.",
        quickTips: [
          "Phasen rufen die du mit Würfeln besetzen kannst.",
          "Welten früh entwickeln für permanente Würfel-Rabatte.",
          "Kolonisieren verbraucht Würfel aber scored Punkte.",
          "Lila Würfel (wild) sind Premium."
        ],
        strategy: [
          "Phasenwahl: nur gerufene Phasen werden ausgeführt.",
          "Entwickeln vs Kolonisieren: Entwickeln = mehr Slots; Kolonisieren = sofortige Punkte.",
          "Erkunden für Kredit und Kacheln.",
          "Konsum-Produzieren-Zyklen: Produzieren füllt Güter; Konsum tauscht in Karten und Punkte.",
          "Würfelbecher-Management: zurückgegebene Würfel in Becher.",
          "Versand und Boni: Güter versenden scored Punkte."
        ]
      }
    }
  },

  "dice-throne": {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Dice Throne combat: status effect timing, card-dice synergies, offensive vs defensive form, and CP economy for ability cards.",
        intro:
          "Dice Throne is hero combat with dice and cards. Experts roll for their hero's combat tree, spend CP on timing cards, and chain status effects for burst damage.",
        quickTips: [
          "Learn your hero's combat tree — know all symbol combinations.",
          "Spend CP on cards that enhance your best die faces.",
          "Apply status effects before big damage turns.",
          "Defensive form when low health; offensive when ahead."
        ],
        strategy: [
          "Combat tree mastery: each hero has unique faces (sword, heart, etc.). Know which combinations trigger main abilities vs minor effects.",
          "CP economy: gain CP from rolls and cards. Spend on enhance cards that add symbols to your roll — timing enhance before roll vs after matters.",
          "Status effect chains: stun prevents defensive rolls; poison ticks damage. Apply stun before your big sword turn.",
          "Defensive form: many heroes have defensive stance reducing damage. Switch when below 15 HP or facing OTK combo.",
          "Card-dice synergy: throne cards modify dice. Hold cards that reroll or add symbols for critical combo turns.",
          "Matchup knowledge: some heroes counter others (range vs melee). Draft heroes that beat opponent's weakness."
        ]
      },
      tr: {
        metaDescription:
          "Dice Throne savaş: durum efekti zamanlaması, kart-zar sinerjileri, saldırı vs savunma formu ve CP ekonomisi.",
        intro:
          "Dice Throne kahraman savaşıdır. Uzmanlar savaş ağacına göre atar, CP'yi zamanlama kartlarına harcar.",
        quickTips: [
          "Kahramanın savaş ağacını öğren — tüm sembol kombinasyonlarını bil.",
          "CP'yi en iyi zar yüzlerini güçlendiren kartlara harca.",
          "Büyük hasar turlarından önce durum efektleri uygula.",
          "Düşük canda savunma formu; öndeyken saldırı."
        ],
        strategy: [
          "Savaş ağacı ustalığı: her kahramanın benzersiz yüzleri var.",
          "CP ekonomisi: zar ve kartlardan CP kazan. Enhance kartlarını doğru zamanda kullan.",
          "Durum zincirleri: sersemletme savunma zarını engeller.",
          "Savunma formu: çoğu kahraman hasarı azaltır. 15 HP altında geç.",
          "Kart-zar sinerjisi: throne kartları zarları değiştirir.",
          "Maç bilgisi: bazı kahramanlar diğerlerini counter'lar."
        ]
      },
      de: {
        metaDescription:
          "Dice Throne Kampf: Status-Effekt-Timing, Karten-Würfel-Synergien, offensive vs defensive Form, CP-Ökonomie.",
        intro:
          "Dice Throne ist Heldenkampf mit Würfeln und Karten. Experten würfeln für Kampfbäume und verketten Status-Effekte.",
        quickTips: [
          "Kampfbaum des Helden lernen.",
          "CP für Karten die beste Würfelseiten verstärken.",
          "Status-Effekte vor großen Schadenszügen.",
          "Defensive Form bei wenig HP."
        ],
        strategy: [
          "Kampfbaum-Meisterschaft: jeder Held hat einzigartige Symbole.",
          "CP-Ökonomie: Enhance-Karten timen.",
          "Status-Ketten: Betäubung verhindert defensive Würfe.",
          "Defensive Form unter 15 HP wechseln.",
          "Karten-Würfel-Synergie: Throne-Karten modifizieren Würfel.",
          "Matchup-Wissen: manche Helden counteren andere."
        ]
      }
    }
  },

  "las-vegas": {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Las Vegas dice game: tie-breaking bill placement, casino majority control, slot machine timing, and six-round scoring strategy.",
        intro:
          "Las Vegas is area majority with dice. Experts place bills to break ties in their favor, contest high-value casinos, and spread dice when opponents cluster.",
        quickTips: [
          "Ties go to the player with the higher bill — save big bills for contested casinos.",
          "Spread dice across casinos when opponents overcommit to one.",
          "High-number casinos (9-12) are worth more — contest them early.",
          "Slot machine dice are wild — use them on your weakest casino."
        ],
        strategy: [
          "Tie-breaking with bills: when dice totals tie, highest bill wins. A $100,000 bill on a 2-dice casino beats opponent's 3 dice with no bill.",
          "Casino value: casinos pay by die face value. Casino 12 pays 12 per winning die — one die there can beat three dice at casino 4.",
          "Spread vs concentrate: concentrate when you have majority; spread when opponent has one casino locked to contest elsewhere.",
          "Slot machine timing: the slot die matches any number. Place it where you're one die short of majority or to break a tie.",
          "Bill economy: you receive limited bills per round. Don't waste $100k on a casino you've already won — save for tie fights.",
          "Six-round arc: early rounds establish presence; rounds 4-6 spend bills aggressively on contested majors."
        ]
      },
      tr: {
        metaDescription:
          "Las Vegas zar oyunu: beraberlik kırma fatura yerleştirme, casino çoğunluk kontrolü ve altı tur skor stratejisi.",
        intro:
          "Las Vegas zarlarla alan çoğunluğu oyunudur. Uzmanlar beraberlikleri lehine faturalarla kırar.",
        quickTips: [
          "Beraberlikte daha yüksek fatura kazanır — büyük faturaları çekişmeli casinolara sakla.",
          "Rakip bir casinoya aşırı yığınca zarları yay.",
          "Yüksek numaralı casinolar (9-12) daha değerli — erken mücadele et.",
          "Slot makinesi zarı joker — en zayıf casinonda kullan."
        ],
        strategy: [
          "Fatura ile beraberlik kırma: zar toplamı eşitse en yüksek fatura kazanır.",
          "Casino değeri: casino 12 kazanan zar başına 12 öder.",
          "Yay vs yoğunlaştır: çoğunluğun varken yoğunlaştır; rakip kilitlemişse başka yerde mücadele.",
          "Slot zamanlaması: bir zar eksik çoğunlukta veya beraberlik kırmada kullan.",
          "Fatura ekonomisi: sınırlı fatura alırsın. Kazandığın casinoya 100k harcama.",
          "Altı tur: erken turlar varlık; 4-6. turlar çekişmeli büyük casinolarda agresif fatura."
        ]
      },
      de: {
        metaDescription:
          "Las Vegas Würfelspiel: Gleichstands-Breaking mit Scheinen, Casino-Mehrheit, Sechs-Runden-Strategie.",
        intro:
          "Las Vegas ist Area Majority mit Würfeln. Experten platzieren Scheine um Gleichstände zu brechen.",
        quickTips: [
          "Bei Gleichstand gewinnt höherer Schein.",
          "Würfel verteilen wenn Gegner übercommittet.",
          "Hohe Casinos (9-12) wertvoller.",
          "Slot-Maschinen-Würfel als Joker auf schwächstes Casino."
        ],
        strategy: [
          "Schein-Gleichstands-Breaking: höchster Schein gewinnt bei gleicher Würfelsumme.",
          "Casino-Wert: Casino 12 zahlt 12 pro gewinnendem Würfel.",
          "Verteilen vs konzentrieren je nach Mehrheit.",
          "Slot-Timing: wo ein Würfel zur Mehrheit fehlt.",
          "Schein-Ökonomie: limitierte Scheine pro Runde.",
          "Sechs-Runden-Bogen: Runden 4-6 aggressiv auf umkämpfte Casinos."
        ]
      }
    }
  },

  "thats-pretty-clever": {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "That's Pretty Clever (Ganz schön clever): color chain bonuses, silver tray timing, reroll economy, and passive color scoring.",
        intro:
          "That's Pretty Clever is multiplayer solitaire with interactive passive bonuses. Experts chain color completions for bonuses, time silver tray placements, and manage three rerolls per turn.",
        quickTips: [
          "Complete color chains for bonus actions — yellow unlocks blue, etc.",
          "Silver tray scores multiply — fill it before endgame.",
          "Reroll wisely — you only get three per turn.",
          "Passive colors score on opponents' turns — set them up early."
        ],
        strategy: [
          "Color chain bonuses: completing yellow gives bonus marking on blue; blue unlocks green chain. Plan completion order for maximum chain length.",
          "Silver tray (platinum in expansion): scores endgame multiplier. Mark silver early — empty silver tray is lost points.",
          "Reroll economy: three rerolls per turn. Use first reroll freely; save second and third for high-value color marks.",
          "Passive scoring: when you mark green, opponents may score on their turn if they have green marks. Mark passive colors opponents haven't started.",
          "Number selection priority: orange (sum) and purple (single) are independent; blue/green/yellow chain — prioritize chain colors first.",
          "Fox bonus: the fox scores unused dice pips. Reroll low pips if fox is your best remaining mark."
        ]
      },
      tr: {
        metaDescription:
          "That's Pretty Clever: renk zincir bonusları, gümüş tepsi zamanlaması, yeniden atış ekonomisi ve pasif renk puanlama.",
        intro:
          "That's Pretty Clever etkileşimli pasif bonuslu çok oyunculu solitaire'dır. Uzmanlar renk zincirlerini tamamlar.",
        quickTips: [
          "Bonus aksiyonlar için renk zincirlerini tamamla — sarı mavi açar.",
          "Gümüş tepsi çarpan kazanır — oyun sonundan önce doldur.",
          "Akıllıca yeniden at — tur başına yalnızca üç hakkın var.",
          "Pasif renkler rakip turlarında puan verir — erken kur."
        ],
        strategy: [
          "Renk zincir bonusları: sarı tamamlamak mavi işaret açar. Tamamlama sırasını planla.",
          "Gümüş tepsi: oyun sonu çarpanı. Erken işaretle.",
          "Yeniden atış ekonomisi: ilk serbest; ikinci ve üçüncüyü yüksek değerli işaretler için sakla.",
          "Pasif puanlama: yeşil işaretlediğinde rakipler de puan alabilir.",
          "Sayı seçim önceliği: zincir renklerini önce tamamla.",
          "Tilki bonusu: kullanılmayan zar pipleri puan verir."
        ]
      },
      de: {
        metaDescription:
          "That's Pretty Clever: Farbketten-Boni, Silber-Schale-Timing, Reroll-Ökonomie, passive Farb-Punkte.",
        intro:
          "That's Pretty Clever ist Multiplayer-Solitaire mit passiven Boni. Experten ketten Farb-Vervollständigungen.",
        quickTips: [
          "Farbketten für Bonus-Aktionen vervollständigen.",
          "Silber-Schale multipliziert Endpunkte.",
          "Weise rerollen — nur drei pro Zug.",
          "Passive Farben scoren auf Gegnerzügen."
        ],
        strategy: [
          "Farbketten-Boni: Gelb schaltet Blau frei usw.",
          "Silber-Schale früh markieren.",
          "Reroll-Ökonomie: ersten frei; zweiten und dritten für hohe Markierungen.",
          "Passives Scoring: Grün markieren kann Gegnern Punkte geben.",
          "Zahlenwahl-Priorität: Kettenfarben zuerst.",
          "Fuchs-Bonus: ungenutzte Würfelaugen punkten."
        ]
      }
    }
  },

  tenzi: {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Tenzi speed dice: pattern recognition, physical rolling technique, three-of-a-kind staging, and variant strategy for Tenzi Tower.",
        intro:
          "Tenzi is pure speed — all ten dice showing one number. Experts use cup shaking technique, stage partial matches, and pick target numbers based on first roll.",
        quickTips: [
          "Pick your target number from the first roll's majority.",
          "Keep matching dice aside — only reroll non-matches.",
          "Shake dice in cup flat, not stacked, for faster settles.",
          "Call Tenzi only when all ten show the same face."
        ],
        strategy: [
          "Target selection: on first roll, if you have three 4s, commit to 4s — switching numbers mid-race wastes rolls.",
          "Staging technique: set aside matches immediately. Rerolling 7 dice is slower than rerolling 4 twice.",
          "Physical technique: flat cup shake with wrist snap settles dice faster than vertical shaking. Competitive Tenzi is partly ergonomics.",
          "Pattern recognition: experienced players read partial results without counting — train visual recognition of 6+ matches.",
          "Tenzi Tower variant: stack matching dice — stability matters. Slower shakes prevent tower collapse.",
          "Split variant (80zi): two sets of 5 matching — solve easier number first, then harder."
        ]
      },
      tr: {
        metaDescription:
          "Tenzi hız zarı: örüntü tanıma, fiziksel atış tekniği, üçlü hazırlama ve Tenzi Tower varyant stratejisi.",
        intro:
          "Tenzi saf hızdır — on zar aynı sayıyı göstermeli. Uzmanlar kupa sallama tekniği ve kısmi eşleşme hazırlığı kullanır.",
        quickTips: [
          "Hedef sayıyı ilk atıştaki çoğunluktan seç.",
          "Eşleşen zarları ayır — yalnızca eşleşmeyenleri at.",
          "Hızlı düşüş için zarları düz salla, üst üste değil.",
          "On zar aynı yüzü gösterince Tenzi çağır."
        ],
        strategy: [
          "Hedef seçimi: ilk atışta üç 4 varsa 4'e bağlan — sayı değiştirmek zaman kaybettirir.",
          "Hazırlama: eşleşenleri hemen ayır. 7 zar atmak 4'ü iki kez atmaktan yavaş.",
          "Fiziksel teknik: düz kupa sallama bilek snap'i ile daha hızlı.",
          "Örüntü tanıma: 6+ eşleşmeyi saymadan görsel okuma.",
          "Tenzi Tower: eşleşen zarları istifle — stabilite önemli.",
          "Split varyant (80zi): önce kolay sayı, sonra zor."
        ]
      },
      de: {
        metaDescription:
          "Tenzi Speed-Würfel: Mustererkennung, Wurf-Technik, Dreier-Staging, Tenzi Tower Variante.",
        intro:
          "Tenzi ist reine Geschwindigkeit — alle zehn Würfel zeigen eine Zahl. Experten nutzen Becher-Technik und Staging.",
        quickTips: [
          "Zielzahl aus Mehrheit des ersten Wurfs wählen.",
          "Passende Würfel beiseite — nur Nicht-Treffer rerollen.",
          "Würfel flach im Becher schütteln für schnelleres Settling.",
          "Tenzi rufen wenn alle zehn gleiche Seite zeigen."
        ],
        strategy: [
          "Zielwahl: bei drei 4ern im ersten Wurf auf 4 committen.",
          "Staging: Treffer sofort beiseite. 7 Würfel rerollen langsamer als 4 zweimal.",
          "Physische Technik: flacher Becher-Schütteln mit Handgelenk-Snap.",
          "Mustererkennung: 6+ Treffer visuell ohne Zählen.",
          "Tenzi Tower: passende Würfel stapeln.",
          "Split-Variante (80zi): leichtere Zahl zuerst."
        ]
      }
    }
  },

  perudo: {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Perudo (Liar's Dice) bidding escalation, calza challenges, palifico rounds, and cup reading for bluff detection.",
        intro:
          "Perudo is Liar's Dice with calza (exact bid) challenges and palifico special rounds. Experts escalate bids mathematically and call Dudo when probability breaks.",
        quickTips: [
          "First bid should reflect your hand plus expected table average.",
          "Calza when you're confident the count is exact — gain a die back.",
          "Palifico: aces are not wild — recalculate all odds.",
          "Call Dudo when bid exceeds reasonable probability by 2+."
        ],
        strategy: [
          "Bid escalation math: each bid raises quantity or face value. Jumping quantity by 1 is safe; jumping by 2 signals strength or bluff.",
          "Calza reward: calling exact bid and being right returns a die. Use when you hold exactly the bid count — rare but powerful.",
          "Palifico round: when you reach one die, declare palifico — aces lose wild status. Bid your actual face, not aces as wild.",
          "Cup reading: watch how confidently opponents bid. Hesitation before bid often means weak hand; instant high bid means strength or bluff.",
          "Early elimination: lose dice aggressively by challenging correct bids when opponent pattern-reads you. Vary your bid style.",
          "Endgame one-die: bid your actual face at quantity 1-2. Bluffing with one die is obvious — truth is often optimal."
        ]
      },
      tr: {
        metaDescription:
          "Perudo ihale tırmanışı, calza challenge'ları, palifico turları ve blöf tespiti için kupa okuma.",
        intro:
          "Perudo calza ve palifico özel turlarıyla Liar's Dice'tır. Uzmanlar ihaleleri matematiksel tırmanır.",
        quickTips: [
          "İlk ihale elin + masa ortalamasını yansıtmalı.",
          "Sayının tam olduğundan eminsen calza — zar geri kazan.",
          "Palifico: aslar joker değil — tüm oranları yeniden hesapla.",
          "İhale makul olasılığı 2+ aştığında Dudo çağır."
        ],
        strategy: [
          "İhale tırmanış matematiği: miktar veya yüz artmalı.",
          "Calza ödülü: tam ihale doğruysa zar geri döner.",
          "Palifico turu: bir zara inince palifico ilan et.",
          "Kupa okuma: güvenli ihale güç; tereddüt zayıflık.",
          "Erken eleme: doğru ihalelere challenge ile zar kaybetmek bazen pattern kırar.",
          "Tek zar oyun sonu: gerçek yüzünü 1-2 miktarla ihale et."
        ]
      },
      de: {
        metaDescription:
          "Perudo Gebots-Eskalation, Calza-Challenges, Palifico-Runden, Becher-Lesen für Bluff-Erkennung.",
        intro:
          "Perudo ist Liar's Dice mit Calza und Palifico. Experten eskalieren Gebote mathematisch.",
        quickTips: [
          "Erstes Gebot spiegelt Hand plus Tisch-Durchschnitt.",
          "Calza bei exakter Sicherheit — Würfel zurückgewinnen.",
          "Palifico: Asse nicht wild — Odds neu rechnen.",
          "Dudo wenn Gebot Wahrscheinlichkeit um 2+ übersteigt."
        ],
        strategy: [
          "Gebots-Eskalation: Menge oder Seite muss steigen.",
          "Calza-Belohnung: exaktes Gebot richtig = Würfel zurück.",
          "Palifico-Runde: bei einem Würfel Palifico deklarieren.",
          "Becher-Lesen: Zögern = schwache Hand.",
          "Frühe Elimination: durch Challenges Pattern brechen.",
          "Endgame ein Würfel: echte Seite bei Menge 1-2 bieten."
        ]
      }
    }
  },

  strike: {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Strike dice game: matching vs taking dice, risk when bowl is full, chain reactions, and X elimination management.",
        intro:
          "Strike is a press-your-luck dice bowl game. Experts match dice to take them from the bowl, avoid overflow elimination, and chain matches for momentum.",
        quickTips: [
          "Match bowl dice to take them — empty the bowl to win.",
          "Stop before bowl overflows — you get an X.",
          "Four Xs eliminates you from the round.",
          "Chain matches when multiple dice show your number."
        ],
        strategy: [
          "Match vs take: roll your dice, match any in the bowl, remove matched dice to your zone. First to empty bowl wins round.",
          "Overflow risk: if you can't match and bowl is nearly full, stop rolling. An X is worse than losing tempo.",
          "X management: four Xs eliminates you for the round. At 3 Xs, only roll with guaranteed matches.",
          "Chain reactions: rolling three 4s when bowl has three 4s clears six dice at once — massive swing.",
          "Opponent pressure: when opponent is close to emptying bowl, take risks even at 2 Xs — their win ends the round.",
          "Dice selection: keep diverse numbers in bowl early; specialize when bowl thins."
        ]
      },
      tr: {
        metaDescription:
          "Strike zar oyunu: eşleştirme vs alma, kase doluyken risk, zincir reaksiyonlar ve X eleme yönetimi.",
        intro:
          "Strike şans zorlamalı zar kasesi oyunudur. Uzmanlar kasadaki zarları eşleştirip alır, taşmayı önler.",
        quickTips: [
          "Kasadaki zarları eşleştir ve al — kasayı boşaltan turu kazanır.",
          "Kase taşmadan önce dur — X alırsın.",
          "Dört X seni turdan eleyer.",
          "Birden fazla zar sayını gösterince zincir eşleştir."
        ],
        strategy: [
          "Eşleştir vs al: zarını at, kasadakiyle eşleştir, eşleşenleri al.",
          "Taşma riski: eşleşme yoksa ve kasa doluyorsa dur.",
          "X yönetimi: 3 X'te yalnızca garantili eşleşmelerle at.",
          "Zincir reaksiyonlar: üç 4 atıp kasada üç 4 varsa altı zar birden temizlenir.",
          "Rakip baskısı: rakip kasayı boşaltmaya yakınsa 2 X'te bile risk al.",
          "Zar seçimi: erken çeşitli sayılar; kasa incelince uzmanlaş."
        ]
      },
      de: {
        metaDescription:
          "Strike Würfelspiel: Matchen vs Nehmen, Risiko bei voller Schale, Kettenreaktionen, X-Elimination.",
        intro:
          "Strike ist Gluecksreiz-Würfelschalen-Spiel. Experten matchen Würfel aus der Schale und vermeiden Überlauf.",
        quickTips: [
          "Schalen-Würfel matchen und nehmen.",
          "Stoppen bevor Schale überläuft — X erhalten.",
          "Vier Xs eliminieren für die Runde.",
          "Ketten-Matches wenn mehrere Würfel deine Zahl zeigen."
        ],
        strategy: [
          "Match vs Take: würfeln, matchen, genommene Würfel in Zone.",
          "Überlauf-Risiko: bei voller Schale ohne Match stoppen.",
          "X-Management: bei 3 Xs nur garantierte Matches würfeln.",
          "Kettenreaktionen: drei 4er matchen drei 4er in Schale = sechs auf einmal.",
          "Gegner-Druck: bei fast leerer Gegner-Schale riskieren.",
          "Würfelauswahl: früh divers; spät spezialisieren."
        ]
      }
    }
  },

  "bang-the-dice-game": {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Bang! The Dice Game: arrow accumulation, dynamite rerolls, role deduction, and sheriff vs outlaw endgame pressure.",
        intro:
          "Bang! Dice Game compresses the card game into push-your-luck rolls. Experts manage arrows, reroll dynamite, and play role-appropriate aggression as sheriff or outlaw.",
        quickTips: [
          "Reroll dynamite faces — three dynamite ends your turn with damage.",
          "Arrows accumulate — at three arrows, take damage equal to arrow count.",
          "Sheriff reveals and takes more hits — needs healing rolls.",
          "Outlaws gang up on sheriff — save gun and gatling for sheriff turns."
        ],
        strategy: [
          "Dynamite management: each dynamite must be rerolled. Three dynamite on final roll = 1 damage and turn ends. Reroll dynamite first every roll.",
          "Arrow accumulation: arrows stay until Indian attack (all players with arrows take damage = arrow count). At 2 arrows, consider ending turn.",
          "Role strategy: sheriff targets outlaws aggressively; outlaws focus sheriff. Renegade plays both sides — hide role until endgame.",
          "Gatling and gun: gatling hits all opponents; gun hits one. Save for turns when multiple outlaws are wounded.",
          "Beer healing: sheriff needs beer rolls to survive extra hits. Outlaws heal only to stay in kill range.",
          "Indian attack timing: if you have 1 arrow and opponents have 3, push luck — Indian attack hurts them more."
        ]
      },
      tr: {
        metaDescription:
          "Bang! The Dice Game: ok birikimi, dinamit yeniden atışları, rol çıkarımı ve şerif vs haydut oyun sonu baskısı.",
        intro:
          "Bang! Dice Game kart oyununu şans zorlamalı atışlara sıkıştırır. Uzmanlar okları yönetir, dinamiti yeniden atar.",
        quickTips: [
          "Dinamit yüzlerini yeniden at — üç dinamit turu hasarla bitirir.",
          "Oklar birikir — üç okte ok sayısı kadar hasar al.",
          "Şerif açığa çıkar ve daha çok vurulur — iyileşme atışı gerek.",
          "Haydutlar şerife yüklenir — silah ve gatling'i şerif turlarına sakla."
        ],
        strategy: [
          "Dinamit yönetimi: her dinamit yeniden atılmalı. Son atışta üç dinamit = 1 hasar.",
          "Ok birikimi: Kızılderili saldırısına kadar kalır. 2 okte turu bitirmeyi düşün.",
          "Rol stratejisi: şerif haydutları hedefler; haydutlar şerife odaklanır.",
          "Gatling ve silah: gatling tüm rakiplere; silah tek hedef.",
          "Bira iyileşmesi: şerif ekstra vuruşlara dayanmak için bira ister.",
          "Kızılderili zamanlaması: 1 okun 3 oklu rakiplerden fazla onlara zarar verir."
        ]
      },
      de: {
        metaDescription:
          "Bang! The Dice Game: Pfeil-Akkumulation, Dynamit-Rerolls, Rollen-Deduktion, Sheriff vs Outlaw Endgame.",
        intro:
          "Bang! Dice Game komprimiert das Kartenspiel in Gluecksreiz-Würfe. Experten managen Pfeile und rerollen Dynamit.",
        quickTips: [
          "Dynamit-Gesichter rerollen — drei Dynamit beendet Zug mit Schaden.",
          "Pfeile akkumulieren — bei drei Pfeilen Schaden = Pfeilanzahl.",
          "Sheriff nimmt mehr Treffer — Heilungs-Würfe nötig.",
          "Outlaws fokussieren Sheriff — Gun und Gatling sparen."
        ],
        strategy: [
          "Dynamit-Management: jedes Dynamit muss rerollt werden.",
          "Pfeil-Akkumulation: bis Indianer-Angriff. Bei 2 Pfeilen Zug beenden erwägen.",
          "Rollen-Strategie: Sheriff jagt Outlaws; Outlaws fokussieren Sheriff.",
          "Gatling und Gun: Gatling trifft alle; Gun einen.",
          "Bier-Heilung: Sheriff braucht Bier-Würfe.",
          "Indianer-Angriff-Timing: 1 Pfeil vs Gegner mit 3 schadet ihnen mehr."
        ]
      }
    }
  },

  "railroad-ink": {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Railroad Ink route building: connection scoring, error minimization, exit maximization, and network continuity across four rounds.",
        intro:
          "Railroad Ink is route drawing from dice rolls. Experts connect exits for longest paths, minimize orphaned segments, and plan networks across all four rounds.",
        quickTips: [
          "Connect as many exits as possible — longest route scores most.",
          "Never leave orphaned track segments — they cost points.",
          "Use stations to connect otherwise incompatible routes.",
          "Plan your network holistically across four rounds, not one."
        ],
        strategy: [
          "Exit connection priority: each connected exit adds to longest route. One long network beats two disconnected medium networks.",
          "Error minimization: dead-end tracks and unconnected exits cost -1 each at scoring. Every dice placement should extend toward an exit or existing route.",
          "Station usage: limited stations bridge route gaps. Save for when dice force incompatible orientations.",
          "Special route dice: railroad and highway dice add constraints. Plan buffer space for special dice in rounds 3-4.",
          "Central vs edge building: central networks connect more exits; edge networks are safer from bad dice. Balance based on exit card layout.",
          "Expansion symbols: mountains and lakes block routes — factor terrain into network planning from round 1."
        ]
      },
      tr: {
        metaDescription:
          "Railroad Ink rota kurma: bağlantı puanlama, hata minimizasyonu, çıkış maksimizasyonu ve dört tur ağı planlama.",
        intro:
          "Railroad Ink zar atışlarından rota çizimidir. Uzmanlar en uzun yollar için çıkışları bağlar, yetim segmentleri minimize eder.",
        quickTips: [
          "Mümkün olduğunca çok çıkış bağla — en uzun rota en çok puan verir.",
          "Yetim ray segmentleri bırakma — puan kaybettirir.",
          "Uyumsuz rotaları bağlamak için istasyon kullan.",
          "Ağını dört tur boyunca bütünsel planla."
        ],
        strategy: [
          "Çıkış bağlantı önceliği: her bağlı çıkış en uzun rotaya eklenir.",
          "Hata minimizasyonu: çıkmaz yollar ve bağlanmamış çıkışlar -1.",
          "İstasyon kullanımı: sınırlı istasyonlar boşlukları köprüler.",
          "Özel rota zarları: 3-4. turlar için tampon alan bırak.",
          "Merkez vs kenar: merkez ağlar daha çok çıkış bağlar.",
          "Genişleme sembolleri: dağ ve göl rotaları bloklar — 1. turdan planla."
        ]
      },
      de: {
        metaDescription:
          "Railroad Ink Routenbau: Verbindungs-Scoring, Fehler-Minimierung, Exit-Maximierung, Vier-Runden-Netzwerk.",
        intro:
          "Railroad Ink ist Routenzeichnen aus Würfelwürfen. Experten verbinden Exits für längste Routen.",
        quickTips: [
          "So viele Exits wie möglich verbinden.",
          "Keine verwaisten Gleissegmente — kosten Punkte.",
          "Stationen für inkompatible Routen nutzen.",
          "Netzwerk über vier Runden ganzheitlich planen."
        ],
        strategy: [
          "Exit-Verbindungs-Priorität: jeder verbundene Exit zählt zur längsten Route.",
          "Fehler-Minimierung: Sackgassen und unverbundene Exits -1.",
          "Stationen-Nutzung: limitierte Stationen überbrücken Lücken.",
          "Spezial-Routen-Würfel: Puffer für Runden 3-4.",
          "Zentral vs Rand: zentrale Netzwerke verbinden mehr Exits.",
          "Erweiterungs-Symbole: Berge und Seen blockieren — ab Runde 1 planen."
        ]
      }
    }
  },

  "welcome-to": {
    categoryId: "dice-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Welcome To roll-and-write: house number sequencing, fence placement, pool and park bonuses, and city plan completion.",
        intro:
          "Welcome To is parallel solitaire roll-and-write. Experts sequence house numbers strictly ascending per street, place fences for estate bonuses, and race city plan objectives.",
        quickTips: [
          "House numbers must ascend on each street — no going back.",
          "Fences create estates — larger estates score more at game end.",
          "Pools and parks on estates multiply endgame value.",
          "City plans are race objectives — prioritize achievable plans early."
        ],
        strategy: [
          "Number sequencing: each street must ascend left to right. A 7 after 12 is illegal — plan number placement turns ahead.",
          "Fence placement: fences divide streets into estates. Three-house estates score more than two-house. Place fences when estate size is optimal.",
          "Pool and park bonuses: pools require specific estate sizes; parks need consecutive houses. Mark bonuses before writing numbers that block them.",
          "City plan racing: three public plans are first-come objectives. Evaluate plan difficulty vs opponent progress each turn.",
          "Temp worker and bis actions: limited power-ups. Use temp worker to fill a gap; bis duplicates a number on adjacent streets.",
          "Endgame: when an opponent completes a plan, pivot to estate scoring. Unfinished plans are worthless — estate size always scores."
        ]
      },
      tr: {
        metaDescription:
          "Welcome To roll-and-write: ev numarası sıralaması, çit yerleştirme, havuz ve park bonusları, şehir planı tamamlama.",
        intro:
          "Welcome To paralel solitaire roll-and-write'dır. Uzmanlar sokak başına artan numaralar yazar, çitlerle mülk bonusu kurar.",
        quickTips: [
          "Ev numaraları her sokakta artmalı — geri dönüş yok.",
          "Çitler mülk oluşturur — büyük mülkler oyun sonunda daha çok puan.",
          "Havuz ve parklar mülk değerini çarpar.",
          "Şehir planları yarış hedefleri — erken ulaşılabilir planları önceliklendir."
        ],
        strategy: [
          "Numara sıralaması: her sokak soldan sağa artar. 12'den sonra 7 yasal değil.",
          "Çit yerleştirme: sokakları mülklere böler. Üç evli mülk ikiden üstün.",
          "Havuz ve park bonusları: numara yazmadan önce işaretle.",
          "Şehir planı yarışı: üç kamu planı ilk gelen kazanır.",
          "Geçici işçi ve bis: sınırlı güçlendirmeler.",
          "Oyun sonu: rakip plan tamamlayınca mülk puanına dön."
        ]
      },
      de: {
        metaDescription:
          "Welcome To Roll-and-Write: Hausnummern-Sequenz, Zaun-Platzierung, Pool- und Park-Boni, Stadtplan-Abschluss.",
        intro:
          "Welcome To ist paralleles Solitaire Roll-and-Write. Experten sequenzieren Hausnummern aufsteigend pro Straße.",
        quickTips: [
          "Hausnummern müssen pro Straße aufsteigen.",
          "Zäune schaffen Anwesen — größere scoren mehr.",
          "Pools und Parks multiplizieren Endwert.",
          "Stadtpläne sind Wettlauf-Ziele."
        ],
        strategy: [
          "Nummern-Sequenz: jede Straße links nach rechts aufsteigend.",
          "Zaun-Platzierung: Straßen in Anwesen teilen.",
          "Pool- und Park-Boni: vor Nummernschreiben markieren.",
          "Stadtplan-Rennen: drei öffentliche Pläne first-come.",
          "Temp-Arbeiter und Bis: limitierte Power-Ups.",
          "Endgame: bei Gegner-Plan-Abschluss zu Anwesen-Scoring pivoten."
        ]
      }
    }
  }
};
