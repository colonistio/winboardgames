/** Expert strategy content for classic board games (en / tr / de). */
export const classicsExpert = {
  monopoly: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Monopoly expert guide: jail equity, 3-house rule, orange/red landing math, and auction psychology.",
        intro: "Monopoly is won on expected-value property buys and cash timing, not lucky dice. Masters treat every roll as a probability event and every trade as a net-present-value calculation.",
        quickTips: [
          "Buy every property you land on in the first two laps unless it breaks your 3-house bank.",
          "Orange (St James, Vine, Marlborough) and red (Trafalgar, Leicester, Coventry) groups have the highest jail-exit landing frequency.",
          "Build three houses per color before a fourth; rent jumps are steepest at the 3-house tier.",
          "Stay in jail late game when opponents own developed sets; pay to leave early when boards are undeveloped."
        ],
        strategy: [
          "Jail math: after ~25% of properties are owned, paying $50 to leave jail is usually -EV; rolling saves expected rent payments. Before development, leave jail immediately to buy cheap lots.",
          "The 3-house rule: never place a hotel until every other owned set has three houses. Hotels return houses to the bank and enable opponents to build.",
          "Orange/red frequency: a token leaving jail hits orange ~13% and red ~14% on the next roll (7-space average). Prioritize completing these groups over greens or dark blues.",
          "Auction psychology: bid up opponents when you hold a blocking card in that color; stop bidding once price exceeds 70% of expected rent yield over 15 turns.",
          "Trade for monopolies, not cash: a single orange deed is worth more than $200 when it blocks a completed set. Always demand a premium for the last card in a color.",
          "Mortgage strategically: unmortgage the deed that completes a buildable set before paying unrelated debts."
        ]
      },
      tr: {
        metaDescription: "Monopoly uzman rehberi: hapishane matematigi, 3-ev kurali, turuncu/kirmizi inis frekansi ve acik artirma psikolojisi.",
        intro: "Monopoly sansli zarla degil, beklenen degerli mulk alimlari ve nakit zamanlamasiyla kazanilir. Ustalar her atisi olasilik, her takasi net bugunku deger hesabi olarak gorur.",
        quickTips: [
          "Ilk iki turda 3-ev bankanizi bozmadikca indiginiz her mulku alin.",
          "Turuncu ve kirmizi gruplar hapishaneden cikista en yuksek inis frekansina sahiptir.",
          "Dorduncu evden once her renkte uc ev yapin; kira sicramalari 3 evde en diktir.",
          "Rakipler gelistirmis setlere sahipken gec oyunda hapishanede kalin; tahta gelismemisse erken cikin."
        ],
        strategy: [
          "Hapishane matematigi: mulklerin ~%25'i sahiplenildikten sonra 50$ odeyip cikmak genelde -EV'dir; zar atmak beklenen kira odemelerinden tasarruf saglar. Gelisimden once ucuz lot almak icin hemen cikin.",
          "3-ev kurali: diger her sette uc ev olmadan asla otele gecmeyin. Oteller evleri bankaya iade eder ve rakiplerin insaat yapmasini kolaylastirir.",
          "Turuncu/kirmizi frekansi: hapishaneden cikan pul bir sonraki atista turuncuya ~%13, kirmiziya ~%14 isabet eder. Yesil veya koyu maviye gore bu gruplari onceliklendirin.",
          "Acik artirma psikolojisi: o renkte blok kartiniz varsa rakibi yukari cekin; fiyat 15 tur beklenen kira getirisinin %70'ini gectiginde durun.",
          "Tekel icin takas, nakit degil: tamamlanmis seti engelleyen tek turuncu tapu 200$'dan degerlidir. Renkteki son kart icin her zaman prim isteyin.",
          "Stratejik ipotek: ilgisiz borclari odemeden once insaat yapilabilir seti tamamlayan tapuyu ipotekten cikarin."
        ]
      },
      de: {
        metaDescription: "Monopoly-Expertenrat: Gefaengnis-Mathematik, 3-Haeuser-Regel, Orange/Rot-Landefrequenz und Auktionspsychologie.",
        intro: "Monopoly gewinnt man durch erwartungswertige Grundstueckskaeufe und Cash-Timing, nicht durch Glueckswuerfel. Profis behandeln jeden Wurf als Wahrscheinlichkeitsereignis und jeden Tausch als Kapitalwertrechnung.",
        quickTips: [
          "Kaufe in den ersten zwei Runden jedes Grundstueck, es sei denn es sprengt deine 3-Haeuser-Reserve.",
          "Orange und Rot haben die hoechste Landefrequenz beim Verlassen des Gefaengnisses.",
          "Baue drei Haeuser pro Farbe vor dem vierten; Mietspitzen liegen bei drei Haeusern.",
          "Bleib spaet im Spiel im Gefaengnis wenn Gegner entwickelte Sets haben; zahle frueh wenn das Brett unentwickelt ist."
        ],
        strategy: [
          "Gefaengnis-Mathematik: Nach ~25% besetzter Grundstuecke ist 50$ zahlen meist -EV; Wuerfeln spart erwartete Mietzahlungen. Vor Entwicklung sofort verlassen um billige Lots zu kaufen.",
          "3-Haeuser-Regel: Nie ein Hotel bauen bevor jedes andere Set drei Haeuser hat. Hotels geben Haeuser an die Bank zurueck und ermoeglichen Gegnerbau.",
          "Orange/Rot-Frequenz: Eine Figur aus dem Gefaengnis trifft Orange ~13% und Rot ~14% beim naechsten Wurf. Priorisiere diese Gruppen vor Gruen oder Dunkelblau.",
          "Auktionspsychologie: Biete Gegner hoch wenn du eine Blockkarte in der Farbe hast; stoppe wenn der Preis 70% der erwarteten Mietrendite ueber 15 Runden uebersteigt.",
          "Tausche fuer Monopole, nicht Cash: Eine Orange-Urkunde die ein Set blockiert ist mehr wert als 200$. Verlange immer einen Aufschlag fuer die letzte Karte einer Farbe.",
          "Strategische Hypothek: Loese die Urkunde die ein baubares Set vervollstaendigt vor unbezogenen Schulden."
        ]
      }
    }
  },

  chess: {
    categoryId: "classic-board-games",
    difficulty: "complicated",
    content: {
      en: {
        metaDescription: "Chess expert guide: opening principles, calculation trees, pawn structure, and endgame technique.",
        intro: "Chess mastery combines opening theory, brute-force calculation, structural understanding, and tablebase-precise endings. The gap between strong and elite is measured in candidate-move discipline.",
        quickTips: [
          "Develop knights before bishops, castle early, and never move the same piece twice in the opening without concrete gain.",
          "Calculate forcing lines first: checks, captures, threats — then evaluate quiet moves.",
          "Identify fixed pawn chains and fight for the open file they create.",
          "In rook endings, activate your king before pushing passed pawns."
        ],
        strategy: [
          "Opening principles: fight for the center (e4/d4), complete development by move 10, connect rooks, and contest open files. In the Italian Game (1.e4 e5 2.Nf3 Nc6 3.Bc4), prioritize d4 breaks; in the Queen's Gambit Declined, aim for minority attack on the queenside.",
          "Calculation: use the candidate-move method — list 2-4 plausible replies at each node, prune with checks/captures/threats, and verify your final line backwards for tactical holes.",
          "Pawn structure: recognize IQP (isolated queen pawn) positions — dynamic compensation but weak d-pawn endgames. In Carlsbad structures (c4 e6 d4 d5), plan cxd5 then minority attack with b4-b5.",
          "Endgame technique: king-and-pawn endings require opposition and triangulation; Lucena and Philidor rook endings are must-know. Tablebase-perfect K+Q vs K+R is a win in under 35 moves — learn the Cochrane shuffle.",
          "Prophylaxis: ask what your opponent wants to play before choosing your move; prevent ...Nd4 in Sicilian structures, prevent ...f5 breaks in closed positions.",
          "Time management: spend 40% of clock in the first 15 moves when theory ends; reserve 30 seconds per move in time trouble but never blitz recaptures."
        ]
      },
      tr: {
        metaDescription: "Satranc uzman rehberi: acilis prensipleri, hesaplama, piyon yapisi ve oyunsonu teknikleri.",
        intro: "Satranc ustaligi acilis teorisi, zorla hesaplama, yapisal anlayis ve tablo-bazi hassas oyunsonlarini birlestirir. Guclu ile elit arasindaki fark aday hamle disiplinindedir.",
        quickTips: [
          "Acilista atlari fileden once gelistirin, erken rok atin, somut kazanc olmadan ayni tasi iki kez oynamayin.",
          "Once zorlayici varyantlari hesaplayin: sah, alma, tehdit — sonra sakin hamleleri degerlendirin.",
          "Sabit piyon zincirlerini taniyin ve actiklari sutunu kapin.",
          "Kale oyunsonlarinda gecer piyon itmeden once sahinizi aktive edin."
        ],
        strategy: [
          "Acilis prensipleri: merkez icin savasin (e4/d4), 10. hamlede gelisimi tamamlayin, kaleleri baglayin, acik sutunlari kapin. Italyan Oyunu'nda d4 kirilimlarini onceliklendirin; Kraliyet Gambiti Reddi'nde vezir kanadinda azinlik saldirisi hedefleyin.",
          "Hesaplama: aday hamle yontemi — her dugumde 2-4 olasi cevap listele, sah/alma/tehdit ile buda, son varyanti taktik aciklar icin geriye dogru dogrula.",
          "Piyon yapisi: IQP (yalniz vezir piyonu) pozisyonlarini taniyin — dinamik tazminat ama zayif d-piyonu oyunsonlari. Carlsbad yapisinda cxd5 sonra b4-b5 azinlik saldirisi planlayin.",
          "Oyunsonu teknikleri: sahin-piyon oyunsonlari muhalefet ve triangulasyon gerektirir; Lucena ve Philidor kale oyunsonlari sart. K+V vs K+K tablo-bazi kazanci 35 hamle altinda — Cochrane karistirmasini ogrenin.",
          "Profilaksi: hamlenizi secmeden once rakibin ne oynamak istedigini sorun; Sicilya yapisinda ...Nd4'u, kapali pozisyonlarda ...f5 kirilimini engelleyin.",
          "Sure yonetimi: teori bittiginde ilk 15 hamlede saatin %40'ini harcayin; zaman sikintisinda hamle basina 30 saniye ayirin ama geri almalari asla aceleyle oynamayin."
        ]
      },
      de: {
        metaDescription: "Schach-Expertenrat: Eroeffnungsprinzipien, Berechnung, Bauernstruktur und Endspieltechnik.",
        intro: "Schachmeisterchaft verbindet Eroeffnungstheorie, brutale Berechnung, Strukturverstaendnis und tischbase-praezise Endspiele. Die Luecke zwischen stark und Elite liegt in der Kandidatenzug-Disziplin.",
        quickTips: [
          "Entwickle Springer vor Laeufern, rochiere frueh, bewege dasselbe Stueck in der Eroeffnung nicht zweimal ohne konkreten Gewinn.",
          "Berechne zuerst erzwingende Varianten: Schach, Schlagen, Drohungen — dann ruhige Zuege.",
          "Erkenne feste Bauernketten und kaempfe um die offene Linie die sie schaffen.",
          "In Turmendspielen aktiviere den Koenig bevor du Freibauern schiebst."
        ],
        strategy: [
          "Eroeffnungsprinzipien: Kaempfe um das Zentrum (e4/d4), schliesse Entwicklung bis Zug 10 ab, verbinde Tuerme, besetze offene Linien. Im Italienischen Game priorisiere d4-Breaks; in der Damengambit-Ablehnung plane Minderheitsangriff am Damenfluegel.",
          "Berechnung: Kandidatenzug-Methode — liste 2-4 plausible Antworten pro Knoten, stutze mit Schach/Schlagen/Drohungen, verifiziere die Endvariante rueckwaerts auf taktische Loecher.",
          "Bauernstruktur: erkenne IQP-Stellungen — dynamische Kompensation aber schwache d-Bauern-Endspiele. In Carlsbad-Strukturen plane cxd5 dann Minderheitsangriff mit b4-b5.",
          "Endspieltechnik: Koenig-Bauern-Endspiele brauchen Opposition und Triangulation; Lucena und Philidor sind Pflicht. Tischbase-perfektes K+D vs K+T gewinnt in unter 35 Zuegen — lerne das Cochrane-Shuffle.",
          "Prophylaxe: frage was der Gegner spielen will bevor du waehlst; verhindere ...Nd4 in Sizilianisch-Strukturen, verhindere ...f5-Breaks in geschlossenen Stellungen.",
          "Zeitmanagement: gib 40% der Uhr in den ersten 15 Zuegen wenn die Theorie endet; reserviere 30 Sekunden pro Zug in Zeitnot aber blitz nie Abnahmen."
        ]
      }
    }
  },

  checkers: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Checkers expert guide: opening systems, shot patterns, bridge positions, and king endgame technique.",
        intro: "Competitive checkers (8x8 English draughts) is solved in openings and sharp in tactics. Experts win by controlling the long diagonal and forcing two-for-one exchanges.",
        quickTips: [
          "Play 11-15 (old 14-18) or 9-14 as Black; as White respond with the Cross or Single Corner systems.",
          "Keep pieces on the long diagonal (a1-h8 for White) until you can crown safely.",
          "Look for dyke and ripple shots — two-for-one captures that win material.",
          "In king endings, use the opposition on the main diagonal to restrict enemy kings."
        ],
        strategy: [
          "Opening theory: the Old 14 (11-15 22-18 15x22) leads to balanced middlegames; avoid premature 6-9 pushes that weaken the double corner.",
          "Shot patterns: study the Payne shot, Duffer shot, and Laird's double — these recur from standard formations.",
          "Bridge positions: when ahead a man, trade into simplified king endings rather than complex piece play.",
          "Endgame: two kings vs one is a win if you control the main diagonal; three kings vs two requires precise maneuvering on the edges.",
          "Tempo: every move should either develop, attack, or restrict — passive retreat on the wings invites breakthrough shots."
        ]
      },
      tr: {
        metaDescription: "Dama uzman rehberi: acilis sistemleri, vurus kaliplari, kopru pozisyonlari ve kral oyunsonu teknikleri.",
        intro: "Rekabetci dama acilislarda cozulmus ve taktikte keskindir. Ustalar uzun caprazi kontrol ederek ve iki karsilik bir degisim zorlayarak kazanir.",
        quickTips: [
          "Siyah olarak 11-15 veya 9-14 oynayin; Beyaz olarak Cross veya Single Corner sistemleriyle yanit verin.",
          "Guvenle kral oluncaya kadar taslari uzun caprazda tutun.",
          "Dyke ve ripple vuruslarini arayin — malzeme kazandiran iki karsilik bir almalar.",
          "Kral oyunsonlarinda rakip krallari kisitlamak icin ana caprazda muhalefet kullanin."
        ],
        strategy: [
          "Acilis teorisi: Old 14 (11-15 22-18 15x22) dengeli orta oyunlara gider; cift koseyi zayiflatan erken 6-9 itmelerinden kacin.",
          "Vurus kaliplari: Payne, Duffer ve Laird cift vurusunu calisin — standart formasyonlardan tekrarlar.",
          "Kopru pozisyonlari: bir tas ondeyken karmasik tas oyunu yerine basitlestirilmis kral oyunsonuna takas yapin.",
          "Oyunsonu: ana caprazi kontrol ederseniz iki kral bire karsi kazanir; uc kral ikiye karsi kenarlarda hassas manevra gerektirir.",
          "Tempo: her hamle gelistirmeli, saldirmali veya kisitlamali — kanatlarda pasif geri cekilme kirilim vuruslarina davetiye cikarir."
        ]
      },
      de: {
        metaDescription: "Dame-Expertenrat: Eroeffnungssysteme, Schussmuster, Brueckenstellungen und Koenig-Endspieltechnik.",
        intro: "Wettkampf-Dame ist in Eroeffnungen geloest und taktisch scharf. Experten gewinnen durch Kontrolle der langen Diagonale und erzwungene Zwei-gegen-Eins-Tausche.",
        quickTips: [
          "Spiele als Schwarz 11-15 oder 9-14; als Weiss antworte mit Cross- oder Single-Corner-Systemen.",
          "Halte Steine auf der langen Diagonale bis sichere Damung moeglich ist.",
          "Suche Dyke- und Ripple-Schuesse — Zwei-gegen-Eins-Schlagzuege die Material gewinnen.",
          "In Koenig-Endspielen nutze Opposition auf der Hauptdiagonale um gegnerische Koenige einzuschraenken."
        ],
        strategy: [
          "Eroeffnungstheorie: Old 14 (11-15 22-18 15x22) fuehrt zu ausgeglichenen Mittelspielen; vermeide fruehe 6-9-Vorstoesse die die Doppelecke schwachen.",
          "Schussmuster: studiere Payne-Schuss, Duffer-Schuss und Lairds Doppel — diese wiederholen sich aus Standardformationen.",
          "Brueckenstellungen: bei einem Stein Vorsprung tausche in vereinfachte Koenig-Endspiele statt komplexes Steinespiel.",
          "Endspiel: zwei Koenige gegen einen gewinnen bei Hauptdiagonalenkontrolle; drei gegen zwei erfordert praezises Manoevern am Rand.",
          "Tempo: jeder Zug soll entwickeln, angreifen oder einschraenken — passiver Rueckzug an den Fluegeln laedt Durchbruch-Schuesse ein."
        ]
      }
    }
  },

  backgammon: {
    categoryId: "classic-board-games",
    difficulty: "complicated",
    content: {
      en: {
        metaDescription: "Backgammon expert guide: 24/23 split opening, bearoff distribution, duplication, cube decisions, priming vs blitz.",
        intro: "Backgammon is a race with contact. Elite play balances racing equity, priming structures, and cube decisions at the 25% take/pass threshold.",
        quickTips: [
          "Open with 24/23 split and 13/11 slot when possible — the modern standard for balanced offense and defense.",
          "Bear in with the 1-empty, 2-full, 1-empty, 2-full home board pattern for maximum bearoff efficiency.",
          "Use duplication: leave shots where your opponent needs the same number to hit and enter.",
          "Double when you have 75%+ winning chances; take at 25% equity, pass below."
        ],
        strategy: [
          "Opening: the 24/23 split plus 13/11 slot (or 24/23 13/9) fights for the 5-point and keeps outfield anchors. Avoid stacking both split checkers on the same point.",
          "Bear-in/bearoff distribution: on the home board arrange checkers as 1 empty, 2 full, 1 empty, 2 full (alternating empty points and 2-checker points). This minimizes wastage and shot vulnerability during bearoff.",
          "Duplication: when leaving a blot, choose points where opponent needs the same roll to hit and cover — e.g. leaving a shot requiring 6s when they need 6s to escape your prime.",
          "Cube math: take any double you can win 25%+ of the time at the given match score (take point). At gammon danger, adjust take/pass — pass earlier when losing gammon equity exceeds 15%.",
          "Priming vs blitz: build a 6-prime when ahead in the race; blitz (attack inner board) when behind but with more home-board builders. Switch from blitz to prime once you make the 5-point.",
          "Racing formulas: use Keith count or pip count comparison — if your adjusted pip count is 5+ lower after contact clears, drop the cube."
        ]
      },
      tr: {
        metaDescription: "Tavla uzman rehberi: 24/23 split acilisi, bearoff dagilimi, duplikasyon, kup kararlari, prime vs blitz.",
        intro: "Tavla temasli bir yaris. Elit oyun yaris esitligini, prime yapisini ve %25 take/pass esiginde kup kararlarini dengeler.",
        quickTips: [
          "Mumkun oldugunda 24/23 split ve 13/11 slot acilisi yapin — modern dengeli standart.",
          "Bearoff verimliligi icin ev tahtasinda 1 bos, 2 dolu, 1 bos, 2 dolu desenini kullanin.",
          "Duplikasyon: rakibin vurmak ve girmek icin ayni zari gerektiren atislar birakin.",
          "Kazanma sansi %75+ iken kup verin; %25 esitlikte take, altinda pass."
        ],
        strategy: [
          "Acilis: 24/23 split arti 13/11 slot 5 noktasi icin savasir ve dis saha capalarini korur. Split taslarini ayni noktada istiflemekten kacin.",
          "Bear-in/bearoff dagilimi: ev tahtasinda taslari 1 bos, 2 dolu, 1 bos, 2 dolu olarak duzenleyin (bos ve 2 tasli noktalar sirayla). Bu bearoff sirasinda israf ve atis acikligini minimize eder.",
          "Duplikasyon: blot birakirken rakibin vurmak ve kapatmak icin ayni zari gerektiren noktalari secin — ornegin prime'inizdan kacmak icin 6 gerektiginde 6 isteyen atis birakin.",
          "Kup matematigi: verilen mac skorunda %25+ kazanma sansiniz varsa take edin. Gammon tehlikesinde erken pass — gammon esitligi %15'i gectiginde.",
          "Prime vs blitz: yaris ondeyken 6-prime kurun; gerideyken ama ev tahtasi insaatcilariniz fazlaysa blitz. 5 noktasini yaptiktan sonra blitz'ten prime'e gecin.",
          "Yaris formulleri: Keith sayimi veya pip karsilastirmasi — temas temizlendikten sonra ayarli pip sayiniz 5+ dusukse kupu verin."
        ]
      },
      de: {
        metaDescription: "Backgammon-Expertenrat: 24/23-Split-Eroeffnung, Bearoff-Verteilung, Duplikation, Cube-Entscheidungen, Prime vs Blitz.",
        intro: "Backgammon ist ein Rennen mit Kontakt. Elite-Spiel balanciert Renn-Equity, Prime-Strukturen und Cube-Entscheidungen bei der 25%-Take/Pass-Schwelle.",
        quickTips: [
          "Eroeffne mit 24/23-Split und 13/11-Slot wenn moeglich — der moderne Standard fuer ausgewogene Offense und Defense.",
          "Bear-in mit dem 1-leer, 2-voll, 1-leer, 2-voll Heimbrett-Muster fuer maximale Bearoff-Effizienz.",
          "Nutze Duplikation: lasse Schuesse wo der Gegner dieselbe Zahl zum Schlagen und Eintragen braucht.",
          "Verdopple bei 75%+ Gewinnchancen; nimm bei 25% Equity, passe darunter."
        ],
        strategy: [
          "Eroeffnung: 24/23-Split plus 13/11-Slot kaempft um den 5-Punkt und haelt Aussenfeld-Anker. Stapele Split-Steine nicht auf demselben Punkt.",
          "Bear-in/Bearoff-Verteilung: ordne Steine auf dem Heimbrett als 1 leer, 2 voll, 1 leer, 2 voll (abwechselnd leere und 2-Steiner-Punkte). Minimiert Verschwendung und Schussanfaelligigkeit beim Bearoff.",
          "Duplikation: waehle beim Blot-Lassen Punkte wo der Gegner dieselbe Zahl zum Schlagen und Decken braucht — z.B. Schuss der 6er erfordert wenn er 6er zum Entkommen braucht.",
          "Cube-Mathematik: nimm jedes Verdoppeln das du 25%+ gewinnst beim gegebenen Match-Score. Bei Gammon-Gefahr frueher passen wenn Gammon-Equity 15% uebersteigt.",
          "Prime vs Blitz: baue einen 6-Prime wenn vorn im Rennen; blitze wenn hinten aber mit mehr Heimbrett-Buildern. Wechsle von Blitz zu Prime sobald du den 5-Punkt machst.",
          "Rennformeln: Keith Count oder Pip-Vergleich — wenn dein angepasster Pip-Count 5+ niedriger nach Kontaktklaerung, gib den Cube."
        ]
      }
    }
  },

  go: {
    categoryId: "classic-board-games",
    difficulty: "complicated",
    content: {
      en: {
        metaDescription: "Go expert guide: tenuki, shape, influence vs territory, and life-and-death reading.",
        intro: "Go rewards whole-board judgment over local fighting. Strong players balance territory, influence, shape efficiency, and precise life-and-death reading.",
        quickTips: [
          "Play tenuki when local moves lose sente or when a bigger point exists elsewhere on the board.",
          "Good shape: bamboo joint, table shape, and one-space jumps are efficient; empty triangles waste liberties.",
          "Influence points (4-4, 3-4, 5-4) build framework; corner enclosures secure territory.",
          "Read two moves ahead minimum in life-and-death — check snapback and shortage of liberties."
        ],
        strategy: [
          "Tenuki: leave a local sequence when the follow-up is gote or when a shoulder hit, approach, or invasion elsewhere is bigger. The 10-point rule: if two areas differ by 10+ points in value, tenuki.",
          "Shape: prefer kosumi (diagonal), keima (knight's move), and ogeima (large knight's) over clumsy jumps. Recognize heavy stones — overconcentrated groups that lack eye space.",
          "Influence vs territory: early game build moyo (framework); convert to territory with invasions at the 3-3 or shoulder hits. Don't fill your own territory — play on the boundary.",
          "Life and death: learn L-group, J-group, and carpenter's square kills. Two eyes in the corner need specific key points; on the side, bent-four in the corner is dead under Japanese rules.",
          "Fighting: don't atari automatically — check if it strengthens the opponent. Use thickness to attack, not to make territory directly.",
          "Endgame: count territory and komi; 1-point gote endgame moves add up — reverse sente is worth 2 points."
        ]
      },
      tr: {
        metaDescription: "Go uzman rehberi: tenuki, sekil, etki vs bolge ve yasam-olum okumasi.",
        intro: "Go yerel savastan cok butun tahta muhakemesini odullendirir. Guclu oyuncular bolge, etki, sekil verimliligi ve hassas yasam-olum okumasini dengeler.",
        quickTips: [
          "Yerel hamleler sente kaybettiginde veya tahtada daha buyuk nokta varken tenuki oynayin.",
          "Iyi sekil: bamboo joint, masa sekli ve bir bosluklu ziprama verimlidir; bos ucgenler ozgurluk israf eder.",
          "Etki noktalari (4-4, 3-4, 5-4) cerceve kurar; kose kapatmalari bolge guvence altina alir.",
          "Yasam-olumda en az iki hamle ileri okuyun — snapback ve ozgurluk yetersizligini kontrol edin."
        ],
        strategy: [
          "Tenuki: devam gote oldugunda veya baska yerde omuz vurusu, yaklasma veya istila daha buyuk oldugunda yerel diziden ayrilin. 10 puan kurali: iki alan 10+ puan farkliyse tenuki.",
          "Sekil: kosumi, keima ve ogeima'yi beceriksiz zipramalara tercih edin. Agir taslari taniyin — goz alani yetersiz yogun gruplar.",
          "Etki vs bolge: erken oyunda moyo kurun; 3-3 istilalari veya omuz vuruslariyla bolgeye donusturun. Kendi bolgenizi doldurmayin — sinirda oynayin.",
          "Yasam-olum: L-grup, J-grup ve marangoz kare oldurmelerini ogrenin. Kosede iki goz belirli anahtar noktalar gerektirir; Japon kurallarinda kosede bent-four oludur.",
          "Savasta: otomatik atari yapmayin — rakibi guclendirip guclendirmedigini kontrol edin. Kalinligi saldirmak icin kullanin, dogrudan bolge yapmak icin degil.",
          "Oyunsonu: bolge ve komi sayin; 1 puanlik gote oyunsonu hamleleri birikir — ters sente 2 puandir."
        ]
      },
      de: {
        metaDescription: "Go-Expertenrat: Tenuki, Form, Einfluss vs Territorium und Leben-Tod-Lesen.",
        intro: "Go belohnt Ganzbrett-Urteil ueber lokales Kampfspiel. Starke Spieler balancieren Territorium, Einfluss, Formeffizienz und praezises Leben-Tod-Lesen.",
        quickTips: [
          "Spiele Tenuki wenn lokale Zuege Sente verlieren oder ein groesserer Punkt woanders existiert.",
          "Gute Form: Bamboo Joint, Tischform und Einsprung-Spruenge sind effizient; leere Dreiecke verschwenden Freiheiten.",
          "Einflusspunkte (4-4, 3-4, 5-4) bauen Framework; Ecken-Umschluesse sichern Territorium.",
          "Lese in Leben-Tod mindestens zwei Zuege voraus — pruefe Snapback und Freiheitsmangel."
        ],
        strategy: [
          "Tenuki: verlasse eine lokale Sequenz wenn der Follow-up Gote ist oder ein Shoulder Hit, Approach oder Invasion woanders groesser ist. 10-Punkte-Regel: bei 10+ Punkten Unterschied tenuki.",
          "Form: bevorzuge Kosumi, Keima und Ogeima vor ungeschickten Spruengen. Erkenne schwere Steine — ueberkonzentrierte Gruppen ohne Augenraum.",
          "Einfluss vs Territorium: baue frueh Moyo; wandle mit 3-3-Invasionen oder Shoulder Hits in Territorium um. Fuelle kein eigenes Territorium — spiele an der Grenze.",
          "Leben und Tod: lerne L-Gruppe, J-Gruppe und Zimmermanns-Quadrat-Tode. Zwei Augen in der Ecke brauchen Schluesselpunkte; Bent-Four in der Ecke ist unter japanischen Regeln tot.",
          "Kampf: atari nicht automatisch — pruefe ob es den Gegner staerkt. Nutze Dicke zum Angreifen, nicht direkt fuer Territorium.",
          "Endspiel: zaehle Territorium und Komi; 1-Punkt-Gote-Endspielzuege summieren — Reverse Sente ist 2 Punkte wert."
        ]
      }
    }
  },

  mahjong: {
    categoryId: "classic-board-games",
    difficulty: "complicated",
    content: {
      en: {
        metaDescription: "Mahjong expert guide: riichi defense, tile efficiency, dora counting, and push/fold thresholds.",
        intro: "Riichi mahjong is a probability and efficiency game. Experts maximize uke-ire (acceptance), count han/fu precisely, and fold when opponent riichi exceeds your expected value.",
        quickTips: [
          "Keep 5-block shape: five groups plus one pair maximizes flexibility toward any winning hand.",
          "Discard safe tiles late: genbutsu (tiles you discarded) and suji (3/6/9 offsuit) against riichi.",
          "Count dora indicators and uradora before pushing marginal tenpai.",
          "Riichi when your hand is closed, tenpai, and expected han justifies the 1000-point cost."
        ],
        strategy: [
          "Tile efficiency: use shanten reduction — each discard should minimize shanten while maximizing uke-ire. Prefer 3467 waits over 4578 when both reach tenpai.",
          "Riichi timing: riichi at tenpai with 3+ han expected or when dora are visible. Damaten (hidden tenpai) when you need flexibility or fear exhaustive draw.",
          "Defense: against riichi, fold if your expected points < 25% of opponent's expected win. Chase only with 2+ han guaranteed or mangan potential.",
          "Yaku planning: build toward riichi + pinfu + tanyao; avoid pointless yakuless tenpai. Sanshoku and ittsu are high-value speed yaku.",
          "Furiten awareness: never discard a tile you could win on; track all opponents' discards for furiten traps.",
          "Endgame: at exhaustive draw, tenpai pays 3000/1000 — sometimes tanyao speed beats slow han-heavy builds."
        ]
      },
      tr: {
        metaDescription: "Mahjong uzman rehberi: riichi savunmasi, tas verimliligi, dora sayimi ve push/fold esikleri.",
        intro: "Riichi mahjong olasilik ve verimlilik oyunudur. Ustalar uke-ire'yi maksimize eder, han/fu'yu hassas sayar ve rakip riichi beklenen degerinizi astiginda fold eder.",
        quickTips: [
          "5-blok seklini koruyun: bes grup arti bir cift herhangi bir kazanma eline esneklik saglar.",
          "Gec guvenli tas atin: genbutsu ve suji riichi'ye karsi.",
          "Marjinal tenpai'ye itmeden once dora gostergelerini ve uradora'yi sayin.",
          "El kapali, tenpai ve beklenen han 1000 puanlik maliyeti hakli kildiginda riichi yapin."
        ],
        strategy: [
          "Tas verimliligi: shanten azaltma — her atis shanten'i minimize ederken uke-ire'yi maksimize etmeli. Tenpai'ye 4578 yerine 3467 beklemelerini tercih edin.",
          "Riichi zamanlamasi: 3+ han beklenen veya dora gorunurken tenpai'de riichi. Esneklik gerektiginde damaten.",
          "Savunma: riichi'ye karsi beklenen puaniniz rakibin beklenen kazanisinin %25'inden azsa fold. Sadece 2+ han garantili veya mangan potansiyeliyle kovalayin.",
          "Yaku planlama: riichi + pinfu + tanyao'ya yonelin; anlamsiz yakusuz tenpai'den kacin. Sanshoku ve ittsu yuksek degerli hiz yaku'laridir.",
          "Furiten farkindaligi: kazanabileceginiz tasi asla atmayin; furiten tuzaklari icin tum atislari takip edin.",
          "Oyunsonu: tukenme beraberliginde tenpai 3000/1000 oder — bazen tanyao hizi yavas han agir yapilardan ustundur."
        ]
      },
      de: {
        metaDescription: "Mahjong-Expertenrat: Riichi-Verteidigung, Stein-Effizienz, Dora-Zaehlung und Push/Fold-Schwellen.",
        intro: "Riichi-Mahjong ist ein Wahrscheinlichkeits- und Effizienzspiel. Experten maximieren Uke-ire, zaehlen Han/Fu praezise und folden wenn Gegner-Riichi den Erwartungswert uebersteigt.",
        quickTips: [
          "Halte 5-Block-Form: fuenf Gruppen plus ein Paar maximiert Flexibilitaet zu jeder Gewinnhand.",
          "Wirf spaet sichere Steine: Genbutsu und Suji gegen Riichi.",
          "Zaehle Dora-Indikatoren und Uradora vor marginalem Tenpai-Push.",
          "Riichi wenn Hand geschlossen, Tenpai und erwartete Han die 1000-Punkte-Kosten rechtfertigen."
        ],
        strategy: [
          "Stein-Effizienz: Shanten-Reduktion — jeder Abwurf soll Shanten minimieren und Uke-ire maximieren. Bevorzuge 3467-Waits gegenueber 4578 bei Tenpai.",
          "Riichi-Timing: Riichi bei Tenpai mit 3+ erwarteten Han oder sichtbaren Dora. Damaten bei Flexibilitaetsbedarf.",
          "Verteidigung: gegen Riichi folden wenn erwartete Punkte < 25% des Gegner-Gewinns. Nur jagen mit 2+ garantierten Han oder Mangan-Potenzial.",
          "Yaku-Planung: baue auf Riichi + Pinfu + Tanyao; vermeide sinnloses yakuloses Tenpai. Sanshoku und Ittsu sind hochwertige Speed-Yaku.",
          "Furiten-Bewusstsein: wirf nie einen Stein den du gewinnen koenntest; verfolge alle Gegner-Abwuerfe fuer Furiten-Fallen.",
          "Endspiel: bei erschoepfendem Unentschieden zahlt Tenpai 3000/1000 — manchmal schlaegt Tanyao-Speed langsame Han-schwere Builds."
        ]
      }
    }
  },

  scrabble: {
    categoryId: "classic-board-games",
    difficulty: "complicated",
    content: {
      en: {
        metaDescription: "Scrabble expert guide: leave structure, bingo probability, hotspot control, and endgame tile tracking.",
        intro: "Competitive Scrabble is an anagram game with board geometry. Experts balance scoring, rack leave, and opponent access to premium squares.",
        quickTips: [
          "Leave balanced racks: aim for 1-3 vowels, keep RETAINS hooks (RSTLN AEIO).",
          "Open triple-word lines only when you can block or score more than the opponent gains.",
          "Learn top 2-5 letter words and vowel-heavy dumps (AEIOU, EUOUAE).",
          "Track unseen tiles — Q without U changes endgame significantly."
        ],
        strategy: [
          "Leave theory: after each play evaluate vowel-consonant ratio; ideal leave is 3-4 tiles with one each of S, blank, and high-scoring consonants.",
          "Bingo probability: with a balanced rack, ~12% chance of a 7-letter word per turn. Exchange aggressively when rack has 0-1 vowels or 5+ vowels.",
          "Hotspot control: never open a TWS/TLS unless you score 30+ or block. The center star is less valuable than controlling adjacent TLS access.",
          "Parallel plays: hook two words simultaneously for 50+ scores while maintaining leave — the expert's primary weapon.",
          "Endgame: count tiles in bag; play defensively when opponent can bingo out. Stalemate with unplayable Q is a common expert trap.",
          "Challenge discipline: phonies succeed ~15% in expert play — challenge unusual hooks on premium squares."
        ]
      },
      tr: {
        metaDescription: "Scrabble uzman rehberi: rack birakimi, bingo olasiligi, hotspot kontrolu ve oyunsonu tas takibi.",
        intro: "Rekabetci Scrabble tahta geometrili bir anagram oyunudur. Ustalar skor, rack birakimi ve rakibin premium karelere erisimini dengeler.",
        quickTips: [
          "Dengeli rack birakin: 1-3 unluluk hedefleyin, RETAINS kancalarini (RSTLN AEIO) tutun.",
          "Uc kelime katlarini sadece bloklayabiliyorsaniz veya rakibin kazancindan fazla skor aliyorsaniz acin.",
          "En iyi 2-5 harfli kelimeleri ve unlu agir bosaltmalari ogrenin.",
          "Gorulmemis taslari takip edin — U'suz Q oyunsonunu degistirir."
        ],
        strategy: [
          "Birakim teorisi: her hamleden sonra unlu-unsuz oranini degerlendirin; ideal birakim 3-4 tas, S, blank ve yuksek skorlu unsuzlardan biri.",
          "Bingo olasiligi: dengeli rack ile tur basina ~%12 7-harfli kelime sansi. 0-1 unlu veya 5+ unluda agresif degistirin.",
          "Hotspot kontrolu: 30+ skor veya blok olmadan TWS/TLS acmayin. Merkez yildiz komsu TLS erisimini kontrol etmekten daha az degerli.",
          "Paralel hamleler: birakimi koruyarak iki kelimeyi ayni anda kancalayarak 50+ skor — uzmanin ana silahi.",
          "Oyunsonu: cuvaldaki taslari sayin; rakip bingo ile bitirebiliyorsa savunmaci oynayin.",
          "Challenge disiplini: sahte kelimeler uzman oyunda ~%15 basarili — premium karelerde alisilmadik kancalari challenge edin."
        ]
      },
      de: {
        metaDescription: "Scrabble-Expertenrat: Leave-Struktur, Bingo-Wahrscheinlichkeit, Hotspot-Kontrolle und Endspiel-Stein-Tracking.",
        intro: "Wettkampf-Scrabble ist ein Anagramm-Spiel mit Brettgeometrie. Experten balancieren Punkte, Rack-Leave und Gegnerzugang zu Premium-Feldern.",
        quickTips: [
          "Hinterlasse ausgewogene Racks: 1-3 Vokale anstreben, RETAINS-Hooks (RSTLN AEIO) halten.",
          "Oeffne Dreifach-Wort-Linien nur wenn du blockst oder mehr punktest als der Gegner gewinnt.",
          "Lerne Top-2-5-Buchstaben-Woerter und vokalreiche Dumps (AEIOU, EUOUAE).",
          "Verfolge ungesehene Steine — Q ohne U aendert das Endspiel erheblich."
        ],
        strategy: [
          "Leave-Theorie: nach jedem Zug Vokal-Konsonant-Verhaeltnis bewerten; ideales Leave ist 3-4 Steine mit je einem S, Blank und hochwertigem Konsonanten.",
          "Bingo-Wahrscheinlichkeit: mit ausgewogenem Rack ~12% Chance auf 7-Buchstaben-Wort pro Zug. Tausche aggressiv bei 0-1 oder 5+ Vokalen.",
          "Hotspot-Kontrolle: oeffne nie TWS/TLS ohne 30+ Punkte oder Block. Das Zentrum ist weniger wert als TLS-Zugangskontrolle.",
          "Parallele Zuege: zwei Woerter gleichzeitig hooken fuer 50+ Punkte bei Leave-Erhalt — die Hauptwaffe des Experten.",
          "Endspiel: zaehle Steine im Beutel; spiele defensiv wenn Gegner mit Bingo ausgehen kann.",
          "Challenge-Disziplin: Phonies gelingen ~15% im Experten-Spiel — challenge ungewoehnliche Hooks auf Premium-Feldern."
        ]
      }
    }
  },

  risk: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Risk expert guide: continent timing, card trade math, border fortification, and alliance diplomacy.",
        intro: "Risk is won by continent bonuses and card timing, not random battles. Experts fortify borders, trade cards at optimal thresholds, and break alliances at the right moment.",
        quickTips: [
          "Hold Australia or South America early — two-troop borders are easiest to defend.",
          "Never trade cards before the 10-troop threshold unless you can eliminate a player.",
          "Fortify borders, not interiors — one army on a border is worth three inside.",
          "Break alliances when you have 2:1 troop advantage on the contested border."
        ],
        strategy: [
          "Continent timing: Australia (+2) is the highest ROI early; Europe (+5) requires four borders and is a mid-game target. North America (+5) with three borders is the expert's preferred swing continent.",
          "Card trade math: trade at 10, 12, 15, then +5 increments. Hoarding past 15 risks forced trades at worst timing. Eliminating a player steals their cards — plan kills for trade turns.",
          "Border fortification: stack on chokepoints (Kamchatka-Alaska, Brazil-North Africa, Middle East-Southern Europe). Never spread evenly.",
          "Attack math: need 3:2 advantage minimum for favorable odds; 2:1 is break-even. Blitz with 3 dice only when you can afford losses.",
          "Alliance diplomacy: never trust verbal deals past one turn. Position allies to fight each other while you build continent bonuses.",
          "Endgame: when one player leads by 2+ continents, all others must coalition — break this by eliminating the weakest first to steal cards."
        ]
      },
      tr: {
        metaDescription: "Risk uzman rehberi: kita zamanlamasi, kart takas matematigi, sinir guclendirme ve ittifak diplomasisi.",
        intro: "Risk kita bonuslari ve kart zamanlamasiyla kazanilir, rastgele savaslarla degil. Ustalar sinirlari guclendirir, kartlari optimal esiklerde takas eder ve ittifaklari dogru anda bozar.",
        quickTips: [
          "Erken Avustralya veya Guney Amerika'yi tutun — iki birlikli sinirlar savunmasi en kolay.",
          "Bir oyuncuyu eleyemiyorsaniz 10 birlik esiginden once kart takas etmeyin.",
          "Ic bolgeler degil sinirlari guclendirin — sinirdaki bir ordu icten uce deger.",
          "Catisan sinirda 2:1 birlik ustunlugunuz varken ittifaklari bozun."
        ],
        strategy: [
          "Kita zamanlamasi: Avustralya (+2) erken en yuksek ROI; Avrupa (+5) dort sinir gerektirir ve orta oyun hedefidir. Kuzey Amerika (+5) uc sinirla uzmanin tercih ettigi salinim kitasidir.",
          "Kart takas matematigi: 10, 12, 15'te takas, sonra +5 artislar. 15'i gecmek en kotu zamanda zorla takas riski tasir. Oyuncu elemek kartlarini calar — oldurme hamlelerini takas turlarina planlayin.",
          "Sinir guclendirme: bogazlarda istifle (Kamcatka-Alaska, Brezilya-Kuzey Afrika). Esit yaymayin.",
          "Saldir matematigi: olumlu oranlar icin minimum 3:2 ustunluk; 2:1 break-even. Kaybi goze alabiliyorsaniz sadece 3 zarla blitz.",
          "Ittifak diplomasisi: sozlu anlasmalara bir turdan fazla guvenmeyin. Muhtelifleri birbirine savastirirken kita bonusu kurun.",
          "Oyunsonu: bir oyuncu 2+ kita ile ondeyse digerleri koalisyon kurmali — bunu en zayifi eleleyerek kart calarak kirin."
        ]
      },
      de: {
        metaDescription: "Risk-Expertenrat: Kontinent-Timing, Karten-Tausch-Mathematik, Grenzverstaerkung und Allianz-Diplomatie.",
        intro: "Risk gewinnt man durch Kontinent-Boni und Karten-Timing, nicht durch zufaellige Schlachten. Experten verstaerken Grenzen, tauschen Karten bei optimalen Schwellen und brechen Allianzen zum richtigen Moment.",
        quickTips: [
          "Halte frueh Australien oder Suedamerika — Zwei-Truppen-Grenzen sind am leichtesten zu verteidigen.",
          "Tausche Karten nie vor der 10-Truppen-Schwelle ausser du kannst einen Spieler eliminieren.",
          "Verstaerke Grenzen, nicht Innenraeume — eine Armee an der Grenze ist drei innen wert.",
          "Breche Allianzen bei 2:1 Truppenueberlegenheit an der umkaempften Grenze."
        ],
        strategy: [
          "Kontinent-Timing: Australien (+2) hat hoechsten ROI frueh; Europa (+5) braucht vier Grenzen und ist ein Midgame-Ziel. Nordamerika (+5) mit drei Grenzen ist der bevorzugte Swing-Kontinent.",
          "Karten-Tausch-Mathematik: tausche bei 10, 12, 15, dann +5. Horten ueber 15 riskiert Zwangstausch zum schlechtesten Zeitpunkt. Eliminierung stiehlt Karten — plane Kills fuer Tausch-Runden.",
          "Grenzverstaerkung: stapele an Engpaessen (Kamtschatka-Alaska, Brasilien-Nordafrika). Nie gleichmaessig verteilen.",
          "Angriffs-Mathematik: mindestens 3:2 Ueberlegenheit fuer guenstige Odds; 2:1 ist Break-even. Blitz mit 3 Wuerfeln nur wenn du Verluste verkraften kannst.",
          "Allianz-Diplomatie: vertraue muendlichen Deals nicht laenger als eine Runde. Positioniere Alliierte gegeneinander waehrend du Kontinent-Boni aufbaust.",
          "Endspiel: wenn ein Spieler mit 2+ Kontinenten fuehrt muessen alle anderen koalieren — breche dies durch Eliminierung des Schwaechsten zum Kartenklau."
        ]
      }
    }
  },

  clue: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Clue expert guide: information theory, optimal suggestions, card tracking, and deduction trees.",
        intro: "Clue is pure deduction. Experts maximize information per suggestion, track every card shown, and narrow the solution space with Bayesian elimination.",
        quickTips: [
          "Make suggestions that include cards in your hand — you learn what opponents cannot disprove.",
          "Enter rooms you haven't visited to force new suggestions.",
          "Track who showed what — the shower's other cards are still unknown.",
          "Save one unknown card in your final accusation room for the win."
        ],
        strategy: [
          "Information maximization: suggest suspect-weapon-room combos where you hold two cards — the response tells you the third.",
          "Room rotation: visit every room once early to unlock suggestion rights everywhere.",
          "Card tracking matrix: maintain a grid of who has shown which cards; cross-reference to deduce hidden holdings.",
          "Bluff suggestions: include a card you know is in the envelope to force opponents to reveal without learning your hand.",
          "Endgame accusation: accuse only when exactly one suspect, weapon, and room remain — premature accusation loses the game.",
          "Opponent modeling: if a player repeatedly suggests the same suspect, they likely hold that card or the weapon."
        ]
      },
      tr: {
        metaDescription: "Clue uzman rehberi: bilgi teorisi, optimal oneriler, kart takibi ve cikarim agaclari.",
        intro: "Clue saf cikarimdir. Ustalar oneri basina bilgiyi maksimize eder, gosterilen her karti takip eder ve Bayesian eleme ile cozum uzayini daraltir.",
        quickTips: [
          "Elinizdeki kartlari iceren oneriler yapin — rakiplerin neyi curot edemedigini ogrenirsiniz.",
          "Yeni oneriler icin ziyaret etmediginiz odalara girin.",
          "Kimin ne gosterdigini takip edin — gosterenin diger kartlari hala bilinmiyor.",
          "Kazanmak icin son iddiada bir bilinmeyen kart birakin."
        ],
        strategy: [
          "Bilgi maksimizasyonu: iki kartini tuttugunuz supheli-silah-oda kombinasyonlarini onerin — cevap ucuncuyu soyler.",
          "Oda rotasyonu: her odayi erken bir kez ziyaret ederek her yerde oneri hakki acin.",
          "Kart takip matrisi: kimin hangi karti gosterdigini izleyin; capraz referansla gizli kartlari cikarim yapin.",
          "Bluff onerileri: zarfta oldugunu bildiginiz karti dahil ederek rakipleri elinizi ogrenmeden aciga cikmaya zorlayin.",
          "Oyunsonu iddiasi: sadece tek supheli, silah ve oda kaldiginda iddia edin — erken iddia oyunu kaybettirir.",
          "Rakip modelleme: bir oyuncu surekli ayni supheliyi oneriyorsa muhtemelen o karti veya silahi tutuyordur."
        ]
      },
      de: {
        metaDescription: "Clue-Expertenrat: Informationstheorie, optimale Vorschlaege, Karten-Tracking und Deduktionsbaeume.",
        intro: "Clue ist reine Deduktion. Experten maximieren Information pro Vorschlag, verfolgen jede gezeigte Karte und verengen den Loesungsraum mit bayesianischer Elimination.",
        quickTips: [
          "Mache Vorschlaege die Karten in deiner Hand einschliessen — du erfaehrst was Gegner nicht widerlegen koennen.",
          "Betritt Raeume die du nicht besucht hast um neue Vorschlaege zu erzwingen.",
          "Verfolge wer was zeigte — die anderen Karten des Zeigenden sind noch unbekannt.",
          "Hebe eine unbekannte Karte fuer die finale Anklage auf."
        ],
        strategy: [
          "Informationsmaximierung: schlage Verdaechtig-Waffe-Raum-Kombos vor wo du zwei Karten haeltst — die Antwort verraet die dritte.",
          "Raumrotation: besuche frueh jeden Raum einmal um Vorschlagsrechte ueberall freizuschalten.",
          "Karten-Tracking-Matrix: fuehre ein Raster wer welche Karte zeigte; kreuzreferenziere um versteckte Karten abzuleiten.",
          "Bluff-Vorschlaege: schliesse eine Karte ein die du im Umschlag weisst um Gegner zur Enthuellung zu zwingen ohne deine Hand zu verraten.",
          "Endspiel-Anklage: klage nur an wenn genau ein Verdaechtiger, eine Waffe und ein Raum uebrig — vorzeitige Anklage verliert das Spiel.",
          "Gegner-Modellierung: wenn ein Spieler wiederholt denselben Verdaechtigen vorschlaegt haelt er wahrscheinlich diese Karte oder die Waffe."
        ]
      }
    }
  },

  battleship: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Battleship expert guide: hunt-target mode, probability density, parity shooting, and ship placement.",
        intro: "Battleship is a search optimization problem. Experts use probability maps, switch between hunt and target modes, and place ships to maximize ambiguity.",
        quickTips: [
          "Start with parity shooting (checkerboard pattern) — hits on half the squares.",
          "Switch to target mode immediately after a hit — shoot all adjacent squares.",
          "Place ships away from edges and avoid parallel alignment patterns.",
          "Track remaining ship lengths to prune impossible orientations."
        ],
        strategy: [
          "Hunt mode: shoot squares with highest probability density based on remaining ship placements. Center squares have higher hit probability than corners.",
          "Target mode: after a hit, prioritize inline extensions before diagonals. A hit with no adjacent hits means orient and extend both directions.",
          "Parity optimization: checkerboard covers every other cell; once a ship of even length is sunk, adjust parity for odd-length ships.",
          "Ship placement: scatter ships across the board; avoid clustering. Place destroyer (2) in a corner to reduce hunt efficiency.",
          "Probability map: recalculate after each sink — a 3-length ship has fewer valid positions than a 5-length carrier.",
          "Salvo variant: distribute shots across high-probability zones rather than clustering on one hit."
        ]
      },
      tr: {
        metaDescription: "Battleship uzman rehberi: av-hedef modu, olasilik yogunlugu, parite atis ve gemi yerlestirme.",
        intro: "Battleship bir arama optimizasyon problemidir. Ustalar olasilik haritalari kullanir, av ve hedef modlari arasinda gecis yapar ve belirsizligi maksimize edecek sekilde gemi yerlestirir.",
        quickTips: [
          "Parite atisiyla baslayin (damali desen) — karelerin yarisi isabet eder.",
          "Isabet sonrasi hemen hedef moduna gecin — tum komsu karelere ates edin.",
          "Gemileri kenarlardan uzak yerlestirin ve paralel hizalamadan kacin.",
          "Kalan gemi uzunluklarini takip ederek imkansiz yonelimleri eleyin."
        ],
        strategy: [
          "Av modu: kalan gemi yerlestirmelerine gore en yuksek olasilik yogunluguna sahip karelere ates edin. Merkez kareler koselerden daha yuksek isabet olasiligina sahiptir.",
          "Hedef modu: isabette once cizgisel uzantilari onceliklendirin. Komsu isabetsiz isabet yonlendirin ve her iki yone uzatin.",
          "Parite optimizasyonu: damali desen her diger kareyi kapsar; cift uzunlukta gemi battiktan sonra tek uzunluk icin pariteyi ayarlayin.",
          "Gemi yerlestirme: gemileri tahtaya yayin; kumelenmekten kacin. Destroyer'i (2) koseye koyarak av verimliligini azaltin.",
          "Olasilik haritasi: her batmadan sonra yeniden hesaplayin — 3 uzunluklu geminin gecerli pozisyonlari 5 uzunluklu tasiyicidan azdir.",
          "Salvo varyanti: atislari tek isabette kumelenmek yerine yuksek olasilikli bolgelere dagitin."
        ]
      },
      de: {
        metaDescription: "Schiffe versenken-Expertenrat: Jagd-Ziel-Modus, Wahrscheinlichkeitsdichte, Paritaets-Schuesse und Schiffsplatzierung.",
        intro: "Schiffe versenken ist ein Suchoptimierungsproblem. Experten nutzen Wahrscheinlichkeitskarten, wechseln zwischen Jagd- und Zielmodus und platzieren Schiffe fuer maximale Mehrdeutigkeit.",
        quickTips: [
          "Starte mit Paritaets-Schuesse (Schachbrettmuster) — trifft die Haelfte der Felder.",
          "Wechsle nach Treffer sofort in Zielmodus — schiesse alle angrenzenden Felder.",
          "Platziere Schiffe weg von Raendern und vermeide parallele Ausrichtung.",
          "Verfolge verbleibende Schiffslaengen um unmoegliche Orientierungen auszuschliessen."
        ],
        strategy: [
          "Jagdmodus: schiesse auf Felder mit hoechster Wahrscheinlichkeitsdichte basierend auf verbleibenden Platzierungen. Zentralfelder haben hoehere Trefferwahrscheinlichkeit als Ecken.",
          "Zielmodus: nach Treffer priorisiere Inline-Erweiterungen vor Diagonalen. Treffer ohne angrenzende Treffer bedeutet orientieren und beide Richtungen erweitern.",
          "Paritaets-Optimierung: Schachbrett deckt jedes zweite Feld; nach Versenkung eines geraden Schiffs Paritaet fuer ungerade Laengen anpassen.",
          "Schiffsplatzierung: verteile Schiffe uebers Brett; keine Clusterung. Zerstoerer (2) in Ecke fuer reduzierte Jagdeffizienz.",
          "Wahrscheinlichkeitskarte: nach jedem Versenken neu berechnen — ein 3-Laengen-Schiff hat weniger gueltige Positionen als ein 5-Laengen-Traeger.",
          "Salvo-Variante: verteile Schuesse auf Hochwahrscheinlichkeitszonen statt auf einen Treffer zu clustern."
        ]
      }
    }
  },

  stratego: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Stratego expert guide: piece valuation, scout chains, bomb placement, miner lanes, and flag defense.",
        intro: "Stratego is imperfect-information chess. Experts value pieces by exchange equity, probe with scouts, and protect the flag with layered bombs and lakes.",
        quickTips: [
          "Place bombs on the two squares flanking your flag — miners must expose themselves to defuse.",
          "Use scouts in chains of 3+ to map opponent ranks without losing high pieces.",
          "Never trade marshal (10) unless you have confirmed enemy marshal location.",
          "Keep spy (S) adjacent to your marshal path for counter-threat."
        ],
        strategy: [
          "Piece valuation: marshal=10, general=9 down to scout=1; a spy killing marshal is +9 exchange. Bomb trades even with any piece except miner.",
          "Scout chains: advance scouts in connected lines so one loss reveals rank but the chain continues probing.",
          "Bomb placement: ring flag with bombs on diagonal approaches; leave one gap baiting miner commits.",
          "Miner lanes: clear a path for miners on the wing where opponent bombs cluster — never send miner through center.",
          "Bluff high ranks: leave sergeant (6) or lieutenant (5) unmoved in center to absorb attacks.",
          "Endgame: when material is low, march flag-side pieces forward — a revealed flag with one defender loses to any attack."
        ]
      },
      tr: {
        metaDescription: "Stratego uzman rehberi: tas degerlendirmesi, izci zincirleri, bomba yerlestirme, mayinci koridorlari ve bayrak savunmasi.",
        intro: "Stratego eksik bilgili satrancdir. Ustalar taslari degisim esitligine gore degerlendirir, izcilerle kesif yapar ve bayragi katmanli bombalarla korur.",
        quickTips: [
          "Bayraginizin iki yanindaki karelere bomba koyun — mayincilar etkisizlestirmek icin kendini aciga cikarmali.",
          "Yuksek tas kaybetmeden rakip rutbelerini haritalamak icin 3+ izci zincirleri kullanin.",
          "Dusman mareskal konumunu dogrulamadan mareskal (10) takas etmeyin.",
          "Casus'u (S) mareskal yolunuza bitisik tutun."
        ],
        strategy: [
          "Tas degerlendirmesi: mareskal=10, general=9, izci=1'e kadar; casus mareskal oldururse +9 degisim. Bomba mayinci haric her tasa esit.",
          "Izci zincirleri: bir kayip rutbe aciga cikarir ama zincir kesfe devam eder sekilde bagli hatlarda ilerletin.",
          "Bomba yerlestirme: bayragi capraz yaklasimlarda bombalarla cevreleyin; mayinci tuzagi icin bir bosluk birakin.",
          "Mayinci koridorlari: rakip bombalarin kumelendigi kanatta mayinci yolu acin — merkezden gecirmeyin.",
          "Yuksek rutbe bluff: merkezde cavus (6) veya tegmen (5) hareketsiz birakin.",
          "Oyunsonu: malzeme azaldiginda bayrak tarafi taslari ileri surun — aciga cikmis tek savunuculu bayrak her saldiriya kaybeder."
        ]
      },
      de: {
        metaDescription: "Stratego-Expertenrat: Steinebewertung, Spaeher-Ketten, Bombenplatzierung, Pionier-Pfade und Flaggenverteidigung.",
        intro: "Stratego ist Schach mit unvollstaendiger Information. Experten bewerten Steine nach Tausch-Equity, sondieren mit Spaehern und schuetzen die Flagge mit Bombenschichten.",
        quickTips: [
          "Platziere Bomben auf den zwei Feldern neben der Flagge — Pioniere muessen sich enthuellen zum Entschaerfen.",
          "Nutze Spaeher-Ketten von 3+ um Gegnerrang zu kartieren ohne hohe Steine zu verlieren.",
          "Tausche nie den Marschall (10) ohne bestaetigte Gegner-Marschall-Position.",
          "Halte den Spion (S) am Marschall-Pfad fuer Gegendrohung."
        ],
        strategy: [
          "Steinbewertung: Marschall=10, General=9 bis Spaeher=1; Spion toetet Marschall ist +9 Tausch. Bombe tauscht gleich mit jedem Stein ausser Pionier.",
          "Spaeher-Ketten: ruecke Spaeher in verbundenen Linien vor — ein Verlust enthuellt Rang aber die Kette sondiert weiter.",
          "Bombenplatzierung: umringe Flagge mit Bomben auf diagonalen Anflugwegen; lasse eine Luecke als Pionier-Koeder.",
          "Pionier-Pfade: bahne einen Weg fuer Pioniere am Fluegel wo Gegnerbomben clustern — nie durch Zentrum.",
          "Bluff hoher Raenge: lasse Feldwebel (6) oder Leutnant (5) unbewegt in der Mitte.",
          "Endspiel: bei wenig Material ruecke flaggenseitige Steine vor — eine enthuellte Flagge mit einem Verteidiger verliert gegen jeden Angriff."
        ]
      }
    }
  },

  othello: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Othello expert guide: corner control, mobility, frontier discs, parity, and endgame counting.",
        intro: "Othello rewards corners, stable discs, and mobility. Experts sacrifice early discs for position, fight for C-squares, and count parity in the final 10 moves.",
        quickTips: [
          "Corners are permanent — never concede a corner without forcing a catastrophic trade.",
          "Minimize frontier discs (discs adjacent to empty squares) in the midgame.",
          "X-squares (diagonal to corner) are dangerous — avoid giving opponent corner access.",
          "Count empty regions in endgame — odd regions let the last mover flip."
        ],
        strategy: [
          "Corner theory: C-squares (adjacent to corner) are only playable when you can recapture the corner. A-squares (edge next to corner) are safer early.",
          "Mobility: maximize your legal moves while minimizing opponent's. Low mobility forces bad moves.",
          "Frontier management: internal stable discs (no empty neighbors) are immune to flipping — build stable edges toward corners.",
          "Parity: divide the board into regions; the player moving last in an odd-sized region gains flips. Sacrifice discs to force opponent to move first in key regions.",
          "Opening: prefer perpendicular openings (e.g. f5/d6) over parallel — parallel gives opponent more central control.",
          "Endgame: when 10 or fewer empties remain, calculate exact flip counts — one miscount loses 10+ discs."
        ]
      },
      tr: {
        metaDescription: "Othello uzman rehberi: kose kontrolu, hareketlilik, sinir diskleri, parite ve oyunsonu sayimi.",
        intro: "Othello kose, stabil disk ve hareketliligi odullendirir. Ustalar erken diskleri pozisyon icin feda eder, C-kareleri icin savasir ve son 10 hamlede parite sayar.",
        quickTips: [
          "Koseler kalicidir — felaket bir takas zorlamadan kose vermeyin.",
          "Orta oyunda sinir disklerini (bos karelere bitisik) minimize edin.",
          "X-kareleri (koseye capraz) tehlikelidir — rakibe kose erisimi vermekten kacin.",
          "Oyunsonunda bos bolgeleri sayin — tek bolgeler son hamle yapanin cevirmesine izin verir."
        ],
        strategy: [
          "Kose teorisi: C-kareleri sadece koseyi geri alabiliyorsaniz oynanabilir. A-kareleri erken daha guvenli.",
          "Hareketlilik: yasal hamlelerinizi maksimize ederken rakibininkini minimize edin.",
          "Sinir yonetimi: ic stabil diskler (bos komsu yok) cevirmeye karsi bagisiktir — koselere dogru stabil kenarlar kurun.",
          "Parite: tahtayi bolgelere ayirin; tek boyutlu bolgede son hamleyi yapan cevirme kazanir. Rakibi ana bolgelerde once hamle yapmaya zorlamak icin disk feda edin.",
          "Acilis: paralel yerine dik acilislari tercih edin — paralel rakibe daha fazla merkez kontrolu verir.",
          "Oyunsonu: 10 veya daha az bos kare kaldiginda tam cevirme sayimini hesaplayin — bir hata 10+ disk kaybettirir."
        ]
      },
      de: {
        metaDescription: "Othello-Expertenrat: Eckenkontrolle, Mobilitaet, Frontier-Steine, Paritaet und Endspiel-Zaehlung.",
        intro: "Othello belohnt Ecken, stabile Steine und Mobilitaet. Experten opfern fruehe Steine fuer Position, kaempfen um C-Felder und zaehlen Paritaet in den letzten 10 Zuegen.",
        quickTips: [
          "Ecken sind permanent — gib nie eine Ecke ohne katastrophalen Tausch.",
          "Minimiere Frontier-Steine (an leere Felder angrenzend) im Mittelspiel.",
          "X-Felder (diagonal zur Ecke) sind gefaehrlich — vermeide Gegner-Eckenzugang.",
          "Zaehle leere Regionen im Endspiel — ungerade Regionen lassen den letzten Spieler drehen."
        ],
        strategy: [
          "Eckentheorie: C-Felder (an Ecke angrenzend) nur spielbar wenn du die Ecke zurueckerobern kannst. A-Felder sind frueh sicherer.",
          "Mobilitaet: maximiere deine legalen Zuege waehrend du die des Gegners minimierst.",
          "Frontier-Management: interne stabile Steine (keine leeren Nachbarn) sind immun gegen Drehung — baue stabile Kanten zu Ecken.",
          "Paritaet: teile das Brett in Regionen; wer zuletzt in einer ungeraden Region zieht gewinnt Drehungen. Opfere Steine um den Gegner zuerst ziehen zu lassen.",
          "Eroeffnung: bevorzuge senkrechte Eroeffnungen gegenueber parallelen — parallel gibt mehr Zentralkontrolle.",
          "Endspiel: bei 10 oder weniger leeren Feldern berechne exakte Drehzahlen — ein Fehler kostet 10+ Steine."
        ]
      }
    }
  },

  mancala: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Mancala expert guide: extra-turn paths, capture setups, stone counting, and endgame sweeps.",
        intro: "Kalah (6-rack mancala) is solved in endgame with stone counting. Experts chain extra turns, set up captures on empty opponent pits, and sweep remaining stones.",
        quickTips: [
          "Empty your rightmost pit early to enable extra-turn chains down the row.",
          "Never leave opponent's pit 1 (closest to their store) empty and vulnerable.",
          "Count stones in each pit — if a pit has exactly enough to land in your store, play it.",
          "In endgame, sweep all remaining stones with one chain if opponent cannot capture."
        ],
        strategy: [
          "Extra-turn chains: a play that lands your last stone in your store grants another turn. Chain 2-3 extra turns to accumulate store advantage.",
          "Capture setup: land your last stone in an empty pit on your side, opposite an opponent pit with 2+ stones — captures all opposite stones.",
          "Stone counting: track total stones on each side. If you have more on your side at endgame, force opponent to move first into your captures.",
          "Defensive emptying: never create a situation where opponent can capture your entire row in one move.",
          "Pit 6 (rightmost) strategy: keep stones here for endgame sweep — moving from pit 6 often grants extra turns.",
          "Endgame: when opponent has fewer than 12 stones, calculate exact landing positions — one stone misplaced loses the entire row."
        ]
      },
      tr: {
        metaDescription: "Mancala uzman rehberi: ekstra tur yollari, alma kurulumlari, tas sayimi ve oyunsonu supurme.",
        intro: "Kalah (6-goblek mancala) oyunsonunda tas sayimiyla cozulmustur. Ustalar ekstra tur zincirleri kurar, bos rakip gobleklerde alma hazirlar ve kalan taslari supurur.",
        quickTips: [
          "Ekstra tur zincirlerini etkinlestirmek icin en sag golegi erken bosaltin.",
          "Rakibin 1 numarali gobegini (deposuna en yakin) bos ve savunmasiz birakmayin.",
          "Her goblekteki taslari sayin — depoya inmek icin tam yeterli tasi olan gobegi oynayin.",
          "Oyunsonunda rakip alamiyorsa tek zincirle tum taslari supurun."
        ],
        strategy: [
          "Ekstra tur zincirleri: son tasiniz deponuza inerse baska tur kazanirsiniz. 2-3 ekstra tur zincirleyerek depo avantaji biriktirin.",
          "Alma kurulumu: son tasiniz sizin tarafinizda bos golege, karsisinda 2+ tasli rakip goblege insin — tum karsi taslari alir.",
          "Tas sayimi: her taraftaki toplam taslari takip edin. Oyunsonunda sizde fazlaysa rakibi almalariniza ilk hamle yapmaya zorlayin.",
          "Savunmaci bosaltma: rakibin tek hamlede tum siranizi alabilecegi durum yaratmayin.",
          "6 numarali gobek stratejisi: oyunsonu supurme icin taslari burada tutun — 6'dan oynamak genelde ekstra tur verir.",
          "Oyunsonu: rakibin 12'den az tasi varken tam inis pozisyonlarini hesaplayin — bir tas yanlis yerlestirme tum sira kaybettirir."
        ]
      },
      de: {
        metaDescription: "Mancala-Expertenrat: Extra-Zug-Pfade, Schlag-Aufstellungen, Stein-Zaehlung und Endspiel-Sweeps.",
        intro: "Kalah (6-Gruben-Mancala) ist im Endspiel durch Stein-Zaehlung geloest. Experten ketten Extra-Zuege, bereiten Schläge auf leeren Gegnergruben vor und kehren verbleibende Steine.",
        quickTips: [
          "Leere deine rechteste Grube frueh fuer Extra-Zug-Ketten.",
          "Lasse Gegner-Grube 1 (naechste zum Speicher) nie leer und verletzlich.",
          "Zaehle Steine in jeder Grube — wenn eine Grube genau genug hat um im Speicher zu landen, spiele sie.",
          "Im Endspiel kehre alle verbleibenden Steine mit einer Kette wenn Gegner nicht schlagen kann."
        ],
        strategy: [
          "Extra-Zug-Ketten: ein Zug der deinen letzten Stein im Speicher landet gewaehrt einen weiteren Zug. Kette 2-3 Extra-Zuege fuer Speicher-Vorteil.",
          "Schlag-Aufstellung: lande deinen letzten Stein in leerer Grube auf deiner Seite, gegenueber Gegnergrube mit 2+ Steinen — schlaegt alle gegenueberliegenden Steine.",
          "Stein-Zaehlung: verfolge Gesamtsteine pro Seite. Bei mehr auf deiner Seite im Endspiel zwinge Gegner zuerst in deine Schläge zu ziehen.",
          "Defensives Leeren: erschaffe nie eine Situation wo Gegner deine ganze Reihe in einem Zug schlagen kann.",
          "Grube-6-Strategie: halte Steine hier fuer Endspiel-Sweep — von Grube 6 ziehen gewaehrt oft Extra-Zuege.",
          "Endspiel: bei weniger als 12 Gegnersteinen berechne exakte Landepositionen — ein falsch platzierter Stein verliert die ganze Reihe."
        ]
      }
    }
  },

  dominoes: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Dominoes expert guide: pip counting, board control, blocking doubles, and endgame lockouts.",
        intro: "Draw dominoes rewards pip minimization and board control. Experts count opponent pips, play to open ends they control, and lock opponents with strategic passes.",
        quickTips: [
          "Play doubles early to open the board or late to block — never midgame without purpose.",
          "Count remaining pips in opponent hands — play to maximize their unplayable total.",
          "Hold diverse suits (numbers) to maintain play options on both ends.",
          "Force passes by closing ends to numbers you hold exclusively."
        ],
        strategy: [
          "Pip counting: track total pips dealt minus played. When opponent passes, they lack that number — narrow their options.",
          "Board control: prefer playing to ends where you hold the connecting tiles. Control both open ends when possible.",
          "Double strategy: play high doubles (9-9, 8-8) early to dump pips; save low doubles for blocking.",
          "Spinner management: in games with a spinner, branch early to create four ends you can control.",
          "Endgame lockout: when holding 3-4 tiles, play to leave ends matching only your tiles — force pass and win on pip count.",
          "Draw discipline: draw only when necessary; each draw reveals information about your hand size."
        ]
      },
      tr: {
        metaDescription: "Domino uzman rehberi: pip sayimi, tahta kontrolu, cift bloklama ve oyunsonu kilitleme.",
        intro: "Cekme dominosu pip minimizasyonu ve tahta kontrolunu odullendirir. Ustalar rakip pip'lerini sayar, kontrol ettikleri uclari acar ve stratejik paslarla rakibi kilitler.",
        quickTips: [
          "Ciftleri tahtayi acmak icin erken veya bloklamak icin gec oynayin — amacsiz orta oyunda degil.",
          "Rakip ellerindeki kalan pip'leri sayin — oynanamaz toplamlarini maksimize edecek sekilde oynayin.",
          "Her iki ucta da secenek icin cesitli takimlar (sayilar) tutun.",
          "Sadece sizde olan sayilara uclari kapatarak pas zorlayin."
        ],
        strategy: [
          "Pip sayimi: dagitilan eksi oynanan toplam pip'leri takip edin. Rakip pas gectiginde o sayiya sahip degildir — seceneklerini daraltin.",
          "Tahta kontrolu: baglanti taslarini tuttugunuz uclara oynamayi tercih edin. Mumkunse her iki acik ucu kontrol edin.",
          "Cift stratejisi: pip bosaltmak icin yuksek ciftleri (9-9, 8-8) erken oynayin; bloklama icin dusuk ciftleri saklayin.",
          "Spinner yonetimi: spinner olan oyunlarda dort ucu kontrol etmek icin erken dallanin.",
          "Oyunsonu kilitleme: 3-4 tasiniz varken sadece sizin tasinizla eslesen uclar birakin — pas zorlayip pip sayisinda kazanin.",
          "Cekme disiplini: sadece gerektiginde cekin; her cekme el boyutunuz hakkinda bilgi verir."
        ]
      },
      de: {
        metaDescription: "Domino-Expertenrat: Pip-Zaehlung, Brettkontrolle, Doppel-Blockierung und Endspiel-Sperren.",
        intro: "Draw-Domino belohnt Pip-Minimierung und Brettkontrolle. Experten zaehlen Gegner-Pips, spielen auf Enden die sie kontrollieren und sperren Gegner mit strategischen Paessen.",
        quickTips: [
          "Spiele Doppel frueh zum Oeffnen oder spaet zum Blocken — nie mittelspiel ohne Zweck.",
          "Zaehle verbleibende Pips in Gegnerhaenden — spiele um ihre unspielbare Summe zu maximieren.",
          "Halte diverse Farben (Zahlen) fuer Spieloptionen an beiden Enden.",
          "Erzwinge Paesse durch Schliessen von Enden auf Zahlen die nur du hast."
        ],
        strategy: [
          "Pip-Zaehlung: verfolge verteilte minus gespielte Pips. Wenn Gegner passt fehlt ihm diese Zahl — verenge seine Optionen.",
          "Brettkontrolle: bevorzuge Zuege auf Enden wo du Verbindungssteine hast. Kontrolliere beide offenen Enden wenn moeglich.",
          "Doppel-Strategie: spiele hohe Doppel (9-9, 8-8) frueh zum Abwerfen; spare niedrige zum Blocken.",
          "Spinner-Management: bei Spinner-Spielen verzweige frueh fuer vier kontrollierbare Enden.",
          "Endspiel-Sperre: bei 3-4 Steinen spiele Enden die nur deine Steine matchen — erzwinge Pass und gewinne auf Pip-Zaehlung.",
          "Zieh-Disziplin: ziehe nur wenn noetig; jeder Zug verraet Handgroesse."
        ]
      }
    }
  },

  ludo: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Ludo expert guide: safe zones, block formations, entry timing, and home stretch racing.",
        intro: "Ludo is a racing game with capture mechanics. Experts balance piece spread, form blocks on safe squares, and time entries from base to maximize 6s.",
        quickTips: [
          "Never keep all four pieces in base — spread entries to increase capture chances.",
          "Form blocks (two pieces on same square) on safe zones to prevent captures.",
          "Prioritize getting one piece home before spreading others — a finished piece is worth more than three exposed.",
          "Use captures to delay leaders, not to score — racing wins, not captures."
        ],
        strategy: [
          "Entry timing: enter on 6s early to maximize board presence; holding pieces in base wastes 6 rolls.",
          "Block formation: stack two pieces on a safe square (star/colored) to create an impassable block opponents must detour around.",
          "Spread vs cluster: keep pieces 7+ spaces apart to avoid double-capture risk; cluster only on safe squares.",
          "Home stretch: once a piece enters the colored home path, prioritize it — exposed pieces on the main track are vulnerable.",
          "Capture math: capturing sets opponent back 15+ spaces — only capture when it delays a piece closer to home than yours.",
          "Endgame: sacrifice exposed pieces to block opponent home entries if you have a piece in the final stretch."
        ]
      },
      tr: {
        metaDescription: "Ludo uzman rehberi: guvenli bolgeler, blok formasyonlari, cikis zamanlamasi ve eve giris yarisi.",
        intro: "Ludo yakalama mekanikli bir yaris oyunudur. Ustalar tas yayilimini dengeler, guvenli karelerde blok olusturur ve 6'lari maksimize etmek icin cikislari zamanlar.",
        quickTips: [
          "Dort tasi da bazda tutmayin — yakalama sansini artirmak icin cikislari yayin.",
          "Yakalamalari onlemek icin guvenli bolgelerde blok (iki tas ayni karede) olusturun.",
          "Digerlerini yaymadan once bir tasi eve goturmeyi onceliklendirin.",
          "Liderleri geciktirmek icin yakalama kullanin — yaris kazanir, yakalamalar degil."
        ],
        strategy: [
          "Cikis zamanlamasi: tahta varligini maksimize etmek icin 6'larda erken cikin; bazda tutmak 6 atislarini israf eder.",
          "Blok formasyonu: guvenli karede (yildiz/renkli) iki tasi istifleyerek rakiplerin dolanmasi gereken gecilmez blok olusturun.",
          "Yayilim vs kume: cift yakalama riskinden kacinmak icin taslari 7+ bosluk ayirin; sadece guvenli karelerde kumelenin.",
          "Eve giris yolu: renkli eve giris yoluna giren tasi onceliklendirin — ana pistteki acik taslar savunmasiz.",
          "Yakalama matematigi: yakalama rakibi 15+ kare geri atar — sadece sizinkine evden yakin tasi geciktirdiginde yakalayin.",
          "Oyunsonu: son duzlukte tasiniz varsa rakibin eve girisini bloklamak icin acik taslari feda edin."
        ]
      },
      de: {
        metaDescription: "Ludo-Expertenrat: Sicherheitszonen, Blockformationen, Einstiegs-Timing und Zielgerade-Rennen.",
        intro: "Ludo ist ein Rennspiel mit Schlagmechanik. Experten balancieren Steineverteilung, bilden Bloecke auf sicheren Feldern und timen Einstiege fuer maximale 6er.",
        quickTips: [
          "Halte nie alle vier Steine in der Basis — verteile Einstiege fuer mehr Schlagchancen.",
          "Bilde Bloecke (zwei Steine auf einem Feld) auf sicheren Zonen gegen Schläge.",
          "Priorisiere einen Stein nach Hause bevor du andere verteilst.",
          "Nutze Schläge um Fuehrende zu verzoegern — Rennen gewinnt, nicht Schläge."
        ],
        strategy: [
          "Einstiegs-Timing: steige bei 6ern frueh ein fuer maximale Brettpraesenz; in Basis halten verschwendet 6er-Wuerfe.",
          "Blockformation: stapele zwei Steine auf sicherem Feld (Stern/Farbe) fuer unpassierbaren Block.",
          "Verteilung vs Cluster: halte Steine 7+ Felder auseinander; cluster nur auf sicheren Feldern.",
          "Zielgerade: sobald ein Stein den farbigen Heimweg betritt priorisiere ihn — exponierte Steine auf der Hauptbahn sind verwundbar.",
          "Schlag-Mathematik: Schlag setzt Gegner 15+ Felder zurueck — schlage nur wenn es einen naeher am Ziel verzoegert.",
          "Endspiel: opfere exponierte Steine um Gegner-Heimeinstiege zu blockieren wenn du einen in der Zielgerade hast."
        ]
      }
    }
  },

  parcheesi: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Parcheesi expert guide: blockades, safety zones, entry rolls, and home column timing.",
        intro: "Parcheesi combines racing with blockade tactics. Experts form blockades on safe squares, time doublets for extra moves, and race pieces home in pairs.",
        quickTips: [
          "Form blockades with two pieces on the same safe square — opponents cannot pass.",
          "Enter all pieces early; pieces in start waste doublet bonuses.",
          "Use safety zones (colored circles) to shelter pieces from capture.",
          "Race two pieces home together — a lone piece on the home stretch is vulnerable."
        ],
        strategy: [
          "Blockade formation: place two pieces on a safe square to create a wall. Break blockades only when you can advance past opponent blockades.",
          "Doublet exploitation: rolling doubles grants four moves (or entry from start). Use doublets to move one piece far rather than four pieces short.",
          "Capture priority: capture pieces within 7 spaces of your blockade to trap them behind your wall.",
          "Home column: enter home column only when you can reach home in 1-2 rolls — stuck pieces block your own path.",
          "Safe zone cycling: move between safety zones to avoid capture corridors on the main track.",
          "Endgame: when one piece is 5 spaces from home, sacrifice blockade pieces to clear the path."
        ]
      },
      tr: {
        metaDescription: "Parcheesi uzman rehberi: blokajlar, guvenli bolgeler, cikis zarlari ve eve giris zamanlamasi.",
        intro: "Parcheesi yaris ile blokaj taktiklerini birlestirir. Ustalar guvenli karelerde blokaj olusturur, cift zar bonuslarini zamanlar ve taslari ciftler halinde eve goturur.",
        quickTips: [
          "Ayni guvenli karede iki tasla blokaj olusturun — rakipler gecemez.",
          "Tum taslari erken cikarin; starttaki taslar cift bonusu israf eder.",
          "Yakalamalardan korumak icin guvenli bolgeleri (renkli daireler) kullanin.",
          "Iki tasi birlikte eve goturun — eve giris yolunda yalniz tas savunmasizdir."
        ],
        strategy: [
          "Blokaj formasyonu: guvenli karede iki tasla duvar olusturun. Sadece rakip blokajlarini gectiginizde bozun.",
          "Cift zar kullanimi: cift zar dort hamle (veya starttan cikis) verir. Dort kisa yerine bir tasi uzağa hareket ettirin.",
          "Yakalama onceligi: blokajinizin 7 kare icindeki taslari yakalayarak duvarinizin arkasina hapsedin.",
          "Eve giris sutunu: sadece 1-2 atista eve ulasabiliyorsaniz girin — takili taslar kendi yolunuzu bloklar.",
          "Guvenli bolge dongusu: ana pistteki yakalama koridorlarindan kacinmak icin guvenli bolgeler arasinda hareket edin.",
          "Oyunsonu: bir tas evden 5 kare uzaktayken yolu acmak icin blokaj taslarini feda edin."
        ]
      },
      de: {
        metaDescription: "Parcheesi-Expertenrat: Blockaden, Sicherheitszonen, Einstiegswuerfe und Heimsaeulen-Timing.",
        intro: "Parcheesi verbindet Rennen mit Blockadentaktik. Experten bilden Blockaden auf sicheren Feldern, nutzen Pasch-Boni und rennen Steine paarweise nach Hause.",
        quickTips: [
          "Bilde Blockaden mit zwei Steinen auf demselben sicheren Feld — Gegner koennen nicht passieren.",
          "Bringe alle Steine frueh ins Spiel; Steine im Start verschwenden Pasch-Boni.",
          "Nutze Sicherheitszonen (farbige Kreise) als Schutz vor Schlaegen.",
          "Renne zwei Steine zusammen nach Hause — ein einsamer Stein auf der Zielgerade ist verwundbar."
        ],
        strategy: [
          "Blockadenformation: platziere zwei Steine auf sicherem Feld fuer eine Mauer. Breche nur wenn du an Gegnerblockaden vorbeikannst.",
          "Pasch-Ausnutzung: Pasch gewaehrt vier Zuege (oder Einstieg). Bewege einen Stein weit statt vier kurz.",
          "Schlag-Prioritaet: schlage Steine innerhalb 7 Felder deiner Blockade um sie hinter deiner Mauer zu fangen.",
          "Heimsaeule: betritt nur wenn du in 1-2 Wuerfen heim kannst — steckengebliebene Steine blockieren den eigenen Weg.",
          "Sicherheitszonen-Zyklus: bewege zwischen Sicherheitszonen um Schlagkorridore zu vermeiden.",
          "Endspiel: wenn ein Stein 5 Felder vom Ziel ist opfere Blockadensteine um den Weg freizumachen."
        ]
      }
    }
  },

  sorry: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Sorry expert guide: card probability, slide zones, safety points, and Sorry! attack timing.",
        intro: "Sorry! is card-driven racing with attack cards. Experts track discards, exploit slide zones, and time Sorry! plays to knock leaders back to start.",
        quickTips: [
          "Always move a piece out of start on 1 or 2 — board presence beats holding cards.",
          "Use 4 cards backward only to enter safety zones or block opponent slides.",
          "Save Sorry! cards for opponent pieces within 4 spaces of home.",
          "Slide zones (red triangles) can advance you 4+ spaces — position pieces before opponent slides."
        ],
        strategy: [
          "Card probability: 45 cards, 5 of each number 1-12 except one 1 and one 2 removed. Track discards to calculate draw odds.",
          "Slide exploitation: enter slide zones with exact count to ride the full slide. Block slides by occupying the entry square.",
          "Safety points: the 5 safe circles per color protect from Sorry! and slides — camp here when threatened.",
          "Sorry! timing: play on the leading piece, not the closest. Knocking a piece 3 spaces from home to start is worth more than one 10 spaces out.",
          "7 card split: always split 7 to move two pieces when both advance toward home; never waste on one piece unless it reaches home.",
          "Endgame: hold a 1 or 2 for guaranteed home entry rather than risking a 3-6 overshoot."
        ]
      },
      tr: {
        metaDescription: "Sorry uzman rehberi: kart olasiligi, kaydirma bolgeleri, guvenli noktalar ve Sorry! saldiri zamanlamasi.",
        intro: "Sorry! saldiri kartlari olan kart tabanli bir yaris oyunudur. Ustalar atilan kartlari takip eder, kaydirma bolgelerini kullanir ve liderleri starta geri atmak icin Sorry! zamanlar.",
        quickTips: [
          "1 veya 2 ile her zaman starttan bir tasi cikarin — tahta varligi kart tutmaktan ustundur.",
          "4 kartini sadece guvenli bolgelere girmek veya rakip kaydirmalarini bloklamak icin geri kullanin.",
          "Sorry! kartlarini eve 4 kare icindeki rakip taslar icin saklayin.",
          "Kaydirma bolgeleri (kirmizi ucgenler) 4+ kare ilerletebilir — rakip kaydirmadan once konumlanin."
        ],
        strategy: [
          "Kart olasiligi: 45 kart, 1-12'den her birinden 5'er (bir 1 ve bir 2 cikarilmis). Cekme olasiligini hesaplamak icin atilanlari takip edin.",
          "Kaydirma kullanimi: tam sayiyla kaydirma bolgesine girerek tam kaydirmayi kullanin. Giris karesini isgal ederek kaydirmalari bloklayin.",
          "Guvenli noktalar: renk basina 5 guvenli daire Sorry! ve kaydirmalardan korur — tehdit altindayken burada bekleyin.",
          "Sorry! zamanlamasi: en yakin degil lider tasa oynayin. Eve 3 kare uzaktaki tasi starta atmak 10 kare uzaktakinden degerli.",
          "7 kart bolme: her ikisi de eve ilerliyorsa iki tasi hareket ettirmek icin 7'yi bolun.",
          "Oyunsonu: tasmas riski yerine garantili eve giris icin 1 veya 2 tutun."
        ]
      },
      de: {
        metaDescription: "Sorry-Expertenrat: Kartenwahrscheinlichkeit, Rutschen-Zonen, Sicherheitspunkte und Sorry-Angriffs-Timing.",
        intro: "Sorry! ist kartengetriebenes Rennen mit Angriffskarten. Experten verfolgen Abwuerfe, nutzen Rutschen und timen Sorry-Spiele um Fuehrende zum Start zurueckzuschlagen.",
        quickTips: [
          "Bewege immer einen Stein bei 1 oder 2 aus dem Start — Brettpraesenz schlaegt Karten halten.",
          "Nutze 4-Karten rueckwaerts nur fuer Sicherheitszonen oder Rutschen-Blockade.",
          "Spare Sorry-Karten fuer Gegnersteine innerhalb 4 Felder vom Ziel.",
          "Rutschen-Zonen (rote Dreiecke) koennen 4+ Felder bringen — positioniere vor Gegner-Rutschen."
        ],
        strategy: [
          "Kartenwahrscheinlichkeit: 45 Karten, je 5 von 1-12 ausser einer 1 und 2 entfernt. Verfolge Abwuerfe fuer Zieh-Odds.",
          "Rutschen-Ausnutzung: betritt Rutschen-Zonen mit exakter Zahl fuer volle Rutsche. Blockiere Rutschen durch Besetzung des Einstiegsfelds.",
          "Sicherheitspunkte: 5 sichere Kreise pro Farbe schuetzen vor Sorry und Rutschen — campe hier bei Bedrohung.",
          "Sorry-Timing: spiele auf den fuehrenden Stein, nicht den naechsten. Stein 3 Felder vom Ziel zum Start schlagen ist mehr wert.",
          "7-Karten-Split: teile 7 immer fuer zwei Steine Richtung Ziel; verschwende nie auf einen ausser er erreicht Ziel.",
          "Endspiel: halte 1 oder 2 fuer garantierten Heimeinstieg statt Ueberschuss-Risiko mit 3-6."
        ]
      }
    }
  },

  trouble: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Trouble expert guide: Pop-O-Matic probability, peg blocking, finish zone entries, and capture lanes.",
        intro: "Trouble is pure dice racing with capture mechanics. Experts maximize peg spread, block finish entries, and use captures to delay leaders on the shared track.",
        quickTips: [
          "Get all four pegs on the board quickly — more pegs means more capture opportunities.",
          "Block opponent finish zone entries by occupying the square before their peg arrives.",
          "Never leave a peg alone on the shared track near an opponent's peg.",
          "A 6 grants an extra roll — chain 6s by keeping pegs spread across the track."
        ],
        strategy: [
          "Peg spread: distribute pegs across the 28-space track to maximize landing-on-opponent chances.",
          "Finish zone blocking: occupy the entry square to opponent's finish — they must wait or capture you.",
          "Capture lanes: position pegs 6 spaces behind opponents to guarantee capture on your next 6 or exact roll.",
          "6-chain probability: with 4 pegs on board, each roll has ~67% chance of at least one peg moving; prioritize keeping pegs active.",
          "Home stretch: once a peg enters the colored finish path, never move it backward — forward-only racing wins.",
          "Endgame: sacrifice a trailing peg to block the leader's finish entry if your leading peg is 3+ spaces ahead on the finish path."
        ]
      },
      tr: {
        metaDescription: "Trouble uzman rehberi: Pop-O-Matic olasiligi, civata bloklama, bitis bolgesi girisleri ve yakalama koridorlari.",
        intro: "Trouble yakalama mekanikli saf zar yarisidir. Ustalar civata yayilimini maksimize eder, bitis girislerini bloklar ve ortak pistte liderleri geciktirmek icin yakalama kullanir.",
        quickTips: [
          "Dort civatayi hizla tahtaya cikarin — daha fazla civata daha fazla yakalama firsati demek.",
          "Rakip bitis bolgesi girislerini civatalari varmadan once isgal ederek bloklayin.",
          "Ortak pistte bir civatayi rakip civatasina yakin yalniz birakmayin.",
          "6 ekstra atis verir — civatalari pist boyunca yayarak 6 zincirleri kurun."
        ],
        strategy: [
          "Civata yayilimi: rakibe inme sansini maksimize etmek icin 28 karelik pist boyunca dagitin.",
          "Bitis bolgesi bloklama: rakibin bitis giris karesini isgal edin — beklemeli veya sizi yakalamali.",
          "Yakalama koridorlari: bir sonraki 6 veya tam atista yakalamayi garantilemek icin rakiplerin 6 kare gerisine konumlanin.",
          "6 zinciri olasiligi: tahtada 4 civata ile her atista en az birinin hareket etme sansi ~%67.",
          "Eve giris yolu: renkli bitis yoluna giren civatayi asla geri hareket ettirmeyin.",
          "Oyunsonu: bitis yolunda ondeki civataniz 3+ kare ondeyse liderin bitis girisini bloklamak icin gerideki civatayi feda edin."
        ]
      },
      de: {
        metaDescription: "Trouble-Expertenrat: Pop-O-Matic-Wahrscheinlichkeit, Pin-Blockierung, Zielzonen-Einstiege und Schlag-Spuren.",
        intro: "Trouble ist reines Wuerfelrennen mit Schlagmechanik. Experten maximieren Pin-Verteilung, blockieren Zieleinstiege und nutzen Schläge um Fuehrende auf der gemeinsamen Bahn zu verzoegern.",
        quickTips: [
          "Bringe alle vier Pins schnell ins Spiel — mehr Pins bedeuten mehr Schlagchancen.",
          "Blockiere Gegner-Zielzonen-Einstiege durch Besetzung vor Ankunft.",
          "Lasse nie einen Pin allein auf der gemeinsamen Bahn nahe einem Gegner.",
          "Eine 6 gewaehrt Extra-Wurf — kette 6er durch Pin-Verteilung auf der Bahn."
        ],
        strategy: [
          "Pin-Verteilung: verteile Pins auf der 28-Felder-Bahn fuer maximale Lande-auf-Gegner-Chancen.",
          "Zielzonen-Blockierung: besetze Gegner-Zieleinstieg — sie muessen warten oder schlagen.",
          "Schlag-Spuren: positioniere Pins 6 Felder hinter Gegnern fuer garantierten Schlag beim naechsten 6er oder exakten Wurf.",
          "6-Ketten-Wahrscheinlichkeit: mit 4 Pins hat jeder Wurf ~67% Chance dass mindestens einer sich bewegt.",
          "Zielgerade: bewege einen Pin im farbigen Zielweg nie rueckwaerts.",
          "Endspiel: opfere einen nachhinkenden Pin um den Fuehrer-Zieleinstieg zu blockieren wenn dein fuehrender Pin 3+ Felder voraus ist."
        ]
      }
    }
  },

  "connect-four": {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Connect Four expert guide: solved book moves, center column control, threat pairs, and zugzwang.",
        intro: "Connect Four is a solved game — perfect play guarantees a win for the first player. Experts control the center, build threat pairs, and force zugzwang in the endgame.",
        quickTips: [
          "Play column 4 (center) first — it participates in the most winning lines.",
          "Build threat pairs: two connected threats where opponent can block only one.",
          "Never play directly below an opponent's three-in-a-row unless you create your own threat.",
          "Count vertical threats — a column with three of your discs on bottom rows is unstoppable."
        ],
        strategy: [
          "Book opening: 1. d1 (center column) is proven optimal. Respond to opponent's edge plays with center-adjacent columns (3 or 5).",
          "Center column control: column 4 connects to 21 winning lines; columns 3 and 5 connect to 17; edges connect to 11. Dominate center.",
          "Threat pairs: create two simultaneous threats (e.g. horizontal at row 3 and diagonal through row 5) — opponent blocks one, you win with the other.",
          "Vertical traps: stack three discs in a column on rows 1-3, forcing opponent to play above you, then complete four vertically.",
          "Zugzwang: in late game, force opponent to play in a column that gives you the win on the next move.",
          "Odd-even column theory: on a 7-column board, columns 1,3,5,7 have odd height capacity; use parity to predict when a column fills."
        ]
      },
      tr: {
        metaDescription: "Connect Four uzman rehberi: cozulmus kitap hamleleri, merkez sutun kontrolu, tehdit ciftleri ve zugzwang.",
        intro: "Connect Four cozulmus bir oyundur — kusursuz oyun ilk oyuncuya galibiyet garanti eder. Ustalar merkezi kontrol eder, tehdit ciftleri kurar ve oyunsonunda zugzwang zorlar.",
        quickTips: [
          "Ilk hamlede 4. sutunu (merkez) oynayin — en cok kazanma hattina katilir.",
          "Tehdit ciftleri kurun: rakibin sadece birini engelleyebildigi iki bagli tehdit.",
          "Kendi tehdidinizi yaratmiyorsaniz rakibin uc-lu dizisinin altina oynamayin.",
          "Dikey tehditleri sayin — alt satirlarda uc diskiniz olan sutun durdurulamaz."
        ],
        strategy: [
          "Kitap acilisi: 1. d1 (merkez sutun) kanitlanmis optimaldir. Rakibin kenar hamlelerine merkez-yan sutunlarla (3 veya 5) yanit verin.",
          "Merkez sutun kontrolu: 4. sutun 21 kazanma hattina baglanir; 3 ve 5 sutunlari 17'ye; kenarlar 11'e. Merkeze hakim olun.",
          "Tehdit ciftleri: iki eszamanli tehdit olusturun — rakip birini engeller, digeriyle kazanirsiniz.",
          "Dikey tuzaklar: 1-3. satirlarda bir sutunda uc disk istifleyin, rakibi ustunuze oynamaya zorlayin, sonra dikey dort tamamlayin.",
          "Zugzwang: gec oyunda rakibi bir sonraki hamlede kazanmanizi saglayan sutuna oynamaya zorlayin.",
          "Tek-cift sutun teorisi: 7 sutunlu tahtada 1,3,5,7 tek yukseklik kapasiteli; sutunun dolma zamanini tahmin icin parite kullanin."
        ]
      },
      de: {
        metaDescription: "Vier gewinnt-Expertenrat: geloeste Buchzuege, Mittelspalten-Kontrolle, Drohungs-Paare und Zugzwang.",
        intro: "Vier gewinnt ist geloest — perfektes Spiel garantiert dem ersten Spieler Sieg. Experten kontrollieren die Mitte, bauen Drohungs-Paare und erzwingen Zugzwang im Endspiel.",
        quickTips: [
          "Spiele Spalte 4 (Mitte) zuerst — sie beteiligt sich an den meisten Gewinnlinien.",
          "Baue Drohungs-Paare: zwei verbundene Drohungen wo der Gegner nur eine blocken kann.",
          "Spiele nie direkt unter Gegner-Dreier-Reihe ausser du erzeugst eigene Drohung.",
          "Zaehle vertikale Drohungen — eine Spalte mit drei deinen Steinen in unteren Reihen ist unaufhaltsam."
        ],
        strategy: [
          "Buch-Eroeffnung: 1. d1 (Mittelspalte) ist bewiesen optimal. Antworte auf Gegner-Fluegelzuege mit mittel-angrenzenden Spalten (3 oder 5).",
          "Mittelspalten-Kontrolle: Spalte 4 verbindet 21 Gewinnlinien; 3 und 5 verbinden 17; Fluegel 11. Dominiere die Mitte.",
          "Drohungs-Paare: erzeuge zwei gleichzeitige Drohungen — Gegner blockt eine, du gewinnst mit der anderen.",
          "Vertikale Fallen: stapele drei Steine in einer Spalte auf Reihen 1-3, zwinge Gegner ueber dir zu spielen, vervollstaendige vertikal.",
          "Zugzwang: im Spaetspiel zwinge Gegner in eine Spalte zu spielen die dir den Sieg im naechsten Zug gibt.",
          "Gerade-ungerade-Spalten-Theorie: auf 7-Spalten-Brett haben 1,3,5,7 ungerade Hoehenkapazitaet; nutze Paritaet zur Vorhersage."
        ]
      }
    }
  },

  "chinese-checkers": {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Chinese Checkers expert guide: hop chains, star point openings, peg distribution, and blocking lanes.",
        intro: "Chinese Checkers rewards efficient hop chains over single steps. Experts open through the center star, chain 3+ hops per turn, and block opponent star points.",
        quickTips: [
          "Always prefer hop chains over single-step moves — one hop can equal 3-5 steps.",
          "Occupy the center star point early for maximum hop options in all directions.",
          "Spread pegs across your triangle base — clustered pegs limit hop chains.",
          "Block opponent star points to force them into longer routes."
        ],
        strategy: [
          "Hop chain optimization: plan moves that chain 3+ hops by positioning pegs as stepping stones. A single turn can advance a peg 8+ spaces.",
          "Star point control: the six star points around center are the highest-value squares. Occupy yours and contest center.",
          "Opening: move base-row pegs toward center star, not directly forward — diagonal hops are longer than straight advances.",
          "Blocking: place a peg on opponent's target star point to add 4+ moves to their route.",
          "Peg distribution: keep 2-3 pegs in your base as hop anchors while advancing leaders.",
          "Endgame: when one peg is 3 hops from goal, clear a hop lane by moving blockers sideways — never advance blockers forward."
        ]
      },
      tr: {
        metaDescription: "Cin damasi uzman rehberi: ziprama zincirleri, yildiz noktasi acilislari, tas dagilimi ve bloklama koridorlari.",
        intro: "Cin damasi tek adimlardan cok verimli ziprama zincirlerini odullendirir. Ustalar merkez yildizdan acar, tur basina 3+ ziprama zincirler ve rakip yildiz noktalarini bloklar.",
        quickTips: [
          "Tek adim yerine her zaman ziprama zincirlerini tercih edin — bir ziprama 3-5 adima esittir.",
          "Tum yonlerde maksimum ziprama secenegi icin merkez yildiz noktasini erken isgal edin.",
          "Taslari ucgen tabaniniza yayin — kumelenmis taslar ziprama zincirlerini sinirlar.",
          "Rakibi daha uzun rotalara zorlamak icin yildiz noktalarini bloklayin."
        ],
        strategy: [
          "Ziprama zinciri optimizasyonu: taslari basamak olarak konumlandirarak 3+ ziprama zincirleyen hamleler planlayin. Tek turda 8+ kare ilerlenebilir.",
          "Yildiz noktasi kontrolu: merkez etrafindaki alti yildiz noktasi en degerli karelerdir. Kendinizi isgal edin ve merkezi kapin.",
          "Acilis: taban satir taslarini dogrudan ileri degil merkez yildiza dogru hareket ettirin — capraz zipramalar daha uzundur.",
          "Bloklama: rakibin hedef yildiz noktasina tas koyarak rotasina 4+ hamle ekleyin.",
          "Tas dagilimi: liderleri ilerletirken tabanda ziprama capasi olarak 2-3 tas tutun.",
          "Oyunsonu: bir tas hedefe 3 ziprama uzaktayken blokorlari yana hareket ettirerek ziprama koridoru acin."
        ]
      },
      de: {
        metaDescription: "Chinesische Dame-Expertenrat: Sprung-Ketten, Sternpunkt-Eroeffnungen, Stein-Verteilung und Blockier-Spuren.",
        intro: "Chinesische Dame belohnt effiziente Sprung-Ketten ueber Einzelschritte. Experten eroeffnen durch den Mittelstern, ketten 3+ Spruenge pro Zug und blockieren Gegner-Sternpunkte.",
        quickTips: [
          "Bevorzuge immer Sprung-Ketten gegenueber Einzelschritten — ein Sprung kann 3-5 Schritte entsprechen.",
          "Besetze den Mittelsternpunkt frueh fuer maximale Sprungoptionen in alle Richtungen.",
          "Verteile Steine auf deiner Dreiecksbasis — geclusterte Steine begrenzen Sprung-Ketten.",
          "Blockiere Gegner-Sternpunkte um laengere Routen zu erzwingen."
        ],
        strategy: [
          "Sprung-Ketten-Optimierung: plane Zuege die 3+ Spruenge ketten indem Steine als Trittsteine dienen. Ein Zug kann 8+ Felder bringen.",
          "Sternpunkt-Kontrolle: die sechs Sternpunkte um die Mitte sind die wertvollsten Felder. Besetze deinen und kaempfe um die Mitte.",
          "Eroeffnung: bewege Basisreihen-Steine zum Mittelstern, nicht direkt vorwaerts — diagonale Spruenge sind laenger.",
          "Blockierung: platziere einen Stein auf Gegner-Zielsternpunkt um 4+ Zuege zu ihrer Route hinzuzufuegen.",
          "Stein-Verteilung: halte 2-3 Steine in der Basis als Sprung-Anker waehrend Fuehrer vorruecken.",
          "Endspiel: wenn ein Stein 3 Spruenge vom Ziel ist raeume eine Sprung-Spur durch seitliches Bewegen von Blockern."
        ]
      }
    }
  },

  mastermind: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Mastermind expert guide: Knuth algorithm, information entropy, first-guess optimization, and constraint narrowing.",
        intro: "Mastermind is an information theory game. Experts use Knuth's algorithm to minimize worst-case guesses and maximize information per guess.",
        quickTips: [
          "Open with a guess using 2-3 colors (e.g. AABB) to maximize information, not all different colors.",
          "Never repeat a guess that received zero black and zero white pegs.",
          "Track eliminated colors and positions after each response.",
          "Aim to eliminate 50%+ of remaining codes with each guess."
        ],
        strategy: [
          "Knuth's algorithm: after each guess, calculate remaining consistent codes. Choose the next guess that minimizes the maximum remaining set size (minimax).",
          "First guess optimization: AABB (two pairs) is optimal for 6 colors/4 pegs — it partitions the 1296 codes into balanced response groups.",
          "Information entropy: a guess that splits remaining codes into equal-sized groups maximizes expected information. Avoid guesses that leave one large group.",
          "Constraint narrowing: black pegs fix position; white pegs fix color but not position. Cross-reference both constraints before guessing.",
          "Endgame: with fewer than 10 codes remaining, guess a valid code directly rather than a probe — you might win immediately.",
          "Duplicate colors: remember codes can repeat colors (AAAA is valid). Don't eliminate color repetition too early."
        ]
      },
      tr: {
        metaDescription: "Mastermind uzman rehberi: Knuth algoritmasi, bilgi entropisi, ilk tahmin optimizasyonu ve kisit daraltma.",
        intro: "Mastermind bir bilgi teorisi oyunudur. Ustalar en kotu durum tahminlerini minimize etmek ve tahmin basina bilgiyi maksimize etmek icin Knuth algoritmasini kullanir.",
        quickTips: [
          "Bilgiyi maksimize etmek icin 2-3 renk kullanan bir tahminle acin (ornegin AABB).",
          "Sifir siyah ve sifir beyaz peg alan tahmini asla tekrarlamayin.",
          "Her cevaptan sonra elenen renkleri ve pozisyonlari takip edin.",
          "Her tahminle kalan kodlarin %50+'sini elemeyi hedefleyin."
        ],
        strategy: [
          "Knuth algoritmasi: her tahminden sonra kalan tutarli kodlari hesaplayin. Maksimum kalan kume boyutunu minimize eden sonraki tahmini secin (minimax).",
          "Ilk tahmin optimizasyonu: AABB (iki cift) 6 renk/4 civata icin optimaldir — 1296 kodu dengeli gruplara ayirir.",
          "Bilgi entropisi: kalan kodlari esit boyutlu gruplara ayiran tahmin beklenen bilgiyi maksimize eder.",
          "Kisit daraltma: siyah pegler pozisyonu sabitler; beyaz pegler rengi sabitler ama pozisyonu degil. Tahmin etmeden once her iki kisiti capraz kontrol edin.",
          "Oyunsonu: 10'dan az kod kaldiginda dogrudan gecerli bir kodu tahmin edin — hemen kazanabilirsiniz.",
          "Tekrarlayan renkler: kodlar renk tekrarlayabilir (AAAA gecerli). Renk tekrarini cok erken elemeyin."
        ]
      },
      de: {
        metaDescription: "Mastermind-Expertenrat: Knuth-Algorithmus, Informationsentropie, Erstraten-Optimierung und Einschraenkungs-Verengung.",
        intro: "Mastermind ist ein Informationstheorie-Spiel. Experten nutzen Knuths Algorithmus um Worst-Case-Raten zu minimieren und Information pro Rate zu maximieren.",
        quickTips: [
          "Eroeffne mit einer Rate mit 2-3 Farben (z.B. AABB) fuer maximale Information.",
          "Wiederhole nie eine Rate mit null schwarzen und null weissen Stiften.",
          "Verfolge eliminierte Farben und Positionen nach jeder Antwort.",
          "Ziele darauf mit jeder Rate 50%+ der verbleibenden Codes zu eliminieren."
        ],
        strategy: [
          "Knuth-Algorithmus: berechne nach jeder Rate verbleibende konsistente Codes. Waehle die naechste Rate die die maximale verbleibende Mengengroesse minimiert (Minimax).",
          "Erstraten-Optimierung: AABB (zwei Paare) ist optimal fuer 6 Farben/4 Stifte — partitioniert 1296 Codes in ausgewogene Antwortgruppen.",
          "Informationsentropie: eine Rate die verbleibende Codes in gleichgrosse Gruppen teilt maximiert erwartete Information.",
          "Einschraenkungs-Verengung: schwarze Stifte fixieren Position; weisse fixieren Farbe nicht Position. Kreuzreferenziere beide vor dem Raten.",
          "Endspiel: bei weniger als 10 Codes rate direkt einen gueltigen Code — du koenntest sofort gewinnen.",
          "Doppelte Farben: Codes koennen Farben wiederholen (AAAA ist gueltig). Eliminiere Farbwiederholung nicht zu frueh."
        ]
      }
    }
  },

  rummikub: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Rummikub expert guide: initial meld timing, joker management, table manipulation, and rack reduction.",
        intro: "Rummikub is rummy with board manipulation. Experts make the initial 30-point meld efficiently, hoard jokers, and rearrange the table to dump tiles.",
        quickTips: [
          "Make your initial 30-point meld as early as possible with high-value tiles.",
          "Hoard jokers — they are worth 30 points and enable any set or run.",
          "Manipulate the table every turn after your initial meld — never just play from rack.",
          "Keep diverse numbers to maintain manipulation options."
        ],
        strategy: [
          "Initial meld: play runs (3+ consecutive same color) over sets (3-4 same number) — runs are harder for opponents to manipulate around.",
          "Joker management: use jokers only when they complete a meld that lets you dump 4+ tiles. Never leave a joker isolated on the table.",
          "Table manipulation: rearrange existing melds to free your tiles — split a 1-2-3-4 run into 1-2-3 and play your 4 elsewhere.",
          "Rack reduction: prioritize dumping high-value tiles (10, 11, 12, 13) early to minimize penalty if opponent wins.",
          "Blocking: leave melds that use numbers opponents likely hold based on their draws and discards.",
          "Endgame: when opponent has 3 tiles, manipulate to play all tiles in one turn — calling Rummikub with 1 tile left is a 30-point penalty risk."
        ]
      },
      tr: {
        metaDescription: "Rummikub uzman rehberi: ilk acma zamanlamasi, joker yonetimi, masa manipulasyonu ve rack azaltma.",
        intro: "Rummikub masa manipulasyonlu bir rummy oyunudur. Ustalar 30 puanlik ilk acmayi verimli yapar, jokerleri biriktirir ve tas bosaltmak icin masayi yeniden duzenler.",
        quickTips: [
          "30 puanlik ilk acmayi yuksek degerli taslarla mumkun oldugunca erken yapin.",
          "Jokerleri biriktirin — 30 puan degerindedir ve her set veya seriye olanak tanir.",
          "Ilk acmadan sonra her turda masayi manipule edin — sadece rack'ten oynamayin.",
          "Manipulasyon secenekleri icin cesitli sayilar tutun."
        ],
        strategy: [
          "Ilk acma: setler yerine seriler (3+ ardisik ayni renk) oynayin — serileri rakiplerin etrafinda manipule etmesi daha zordur.",
          "Joker yonetimi: jokerleri sadece 4+ tas bosaltmanizi saglayan acmayi tamamladiginda kullanin.",
          "Masa manipulasyonu: taslarinizi serbest birakmak icin mevcut acmalari yeniden duzenleyin.",
          "Rack azaltma: rakip kazanirsa cezayi minimize etmek icin yuksek degerli taslari (10-13) erken bosaltin.",
          "Bloklama: rakiplerin muhtemelen tuttugu sayilari kullanan acmalar birakin.",
          "Oyunsonu: rakibin 3 tasi varken tek turda tum taslari oynamak icin manipule edin."
        ]
      },
      de: {
        metaDescription: "Rummikub-Expertenrat: Erstauslage-Timing, Joker-Management, Tisch-Manipulation und Rack-Reduktion.",
        intro: "Rummikub ist Rummy mit Tisch-Manipulation. Experten legen die 30-Punkte-Erstauslage effizient, horten Joker und ordnen den Tisch um Steine abzuwerfen.",
        quickTips: [
          "Lege die 30-Punkte-Erstauslage so frueh wie moeglich mit hochwertigen Steinen.",
          "Horte Joker — sie sind 30 Punkte wert und ermoeglichen jedes Set oder jede Sequenz.",
          "Manipuliere den Tisch jeden Zug nach der Erstauslage — spiele nie nur vom Rack.",
          "Halte diverse Zahlen fuer Manipulationsoptionen."
        ],
        strategy: [
          "Erstauslage: spiele Sequenzen (3+ aufeinanderfolgende gleiche Farbe) gegenueber Saetzen — Sequenzen sind schwerer zu manipulieren.",
          "Joker-Management: nutze Joker nur wenn sie eine Auslage vervollstaendigen die 4+ Steine abwirft.",
          "Tisch-Manipulation: ordne bestehende Auslagen um deine Steine freizumachen.",
          "Rack-Reduktion: wirf hochwertige Steine (10-13) frueh ab um Strafe bei Gegnersieg zu minimieren.",
          "Blockierung: lasse Auslagen die Zahlen nutzen die Gegner wahrscheinlich halten.",
          "Endspiel: wenn Gegner 3 Steine hat manipuliere um alle in einem Zug zu spielen."
        ]
      }
    }
  },

  "guess-who": {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Guess Who expert guide: binary search questions, feature frequency, expected value questioning, and elimination trees.",
        intro: "Guess Who is binary search with faces. Experts ask questions that eliminate ~50% of remaining characters and track feature correlations.",
        quickTips: [
          "Ask about features shared by roughly half the remaining characters.",
          "Prioritize hair color and accessories — they split the board most evenly.",
          "Track opponent eliminations to infer their remaining pool.",
          "Never ask about a feature you've already eliminated on your board."
        ],
        strategy: [
          "Binary search: each question should eliminate 10-12 of 24 characters. Features with ~50% yes rate are optimal.",
          "Feature frequency: glasses (~8/24), brown hair (~10/24), hats (~6/24). Calculate remaining pool before each question.",
          "Expected value: if 12 characters remain, a 50/50 question is worth 6 eliminations. A 75/25 question is worth only 3 expected eliminations.",
          "Correlation tracking: if opponent asks about glasses early, they likely don't have glasses — narrow their pool accordingly.",
          "Endgame: with 4 or fewer characters, ask compound-feature questions if your edition allows, or guess directly when odds favor you.",
          "First question: 'Does your person have brown hair?' or 'Is your person wearing glasses?' splits most editions near 50/50."
        ]
      },
      tr: {
        metaDescription: "Guess Who uzman rehberi: ikili arama sorulari, ozellik frekansi, beklenen deger sorgulama ve eleme agaclari.",
        intro: "Guess Who yuzlerle ikili aramadir. Ustalar kalan karakterlerin ~%50'sini eleyen sorular sorar ve ozellik korelasyonlarini takip eder.",
        quickTips: [
          "Kalan karakterlerin yaklasik yarisi tarafindan paylasilan ozellikler hakkinda sorun.",
          "Sac rengi ve aksesuarlari onceliklendirin — tahtayi en esit boler.",
          "Rakip elemelerini takip ederek kalan havuzlarini cikarim yapin.",
          "Tahtanizda zaten elemediginiz bir ozellik hakkinda sormayin."
        ],
        strategy: [
          "Ikili arama: her soru 24 karakterden 10-12'sini elemeli. ~%50 evet oranli ozellikler optimaldir.",
          "Ozellik frekansi: gozluk (~8/24), kahverengi sac (~10/24), sapka (~6/24). Her sorudan once kalan havuzu hesaplayin.",
          "Beklenen deger: 12 karakter kaldiginda 50/50 soru 6 eleme degerindedir. 75/25 soru sadece 3 beklenen eleme.",
          "Korelasyon takibi: rakip erken gozluk soruyorsa muhtemelen gozluk takmiyordur — havuzunu buna gore daraltin.",
          "Oyunsonu: 4 veya daha az karakterde baskin oranlar lehinizdeyken dogrudan tahmin edin.",
          "Ilk soru: 'Kisinin kahverengi saci var mi?' veya 'Kisi gozluk takiyor mu?' cogu baskida ~50/50 boler."
        ]
      },
      de: {
        metaDescription: "Guess Who-Expertenrat: Binaersuche-Fragen, Merkmalshaeufigkeit, Erwartungswert-Befragung und Eliminationsbaeume.",
        intro: "Guess Who ist Binaersuche mit Gesichtern. Experten stellen Fragen die ~50% der verbleibenden Charaktere eliminieren und verfolgen Merkmals-Korrelationen.",
        quickTips: [
          "Frage nach Merkmalen die etwa die Haelfte der verbleibenden Charaktere teilen.",
          "Priorisiere Haarfarbe und Accessoires — sie teilen das Brett am gleichmaessigsten.",
          "Verfolge Gegner-Eliminationen um deren verbleibenden Pool abzuleiten.",
          "Frage nie nach einem Merkmal das du auf deinem Brett schon eliminiert hast."
        ],
        strategy: [
          "Binaersuche: jede Frage soll 10-12 von 24 Charakteren eliminieren. Merkmale mit ~50% Ja-Rate sind optimal.",
          "Merkmalshaeufigkeit: Brille (~8/24), braune Haare (~10/24), Hut (~6/24). Berechne verbleibenden Pool vor jeder Frage.",
          "Erwartungswert: bei 12 Charakteren ist eine 50/50-Frage 6 Eliminationen wert. Eine 75/25-Frage nur 3 erwartete.",
          "Korrelations-Tracking: wenn Gegner frueh nach Brille fragt hat er wahrscheinlich keine — verenge Pool entsprechend.",
          "Endspiel: bei 4 oder weniger rate direkt wenn Odds guenstig.",
          "Erste Frage: 'Hat deine Person braune Haare?' oder 'Traegt deine Person eine Brille?' teilt die meisten Editionen nahe 50/50."
        ]
      }
    }
  },

  sequence: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Sequence expert guide: corner control, two-way threats, dead card management, and team coordination.",
        intro: "Sequence is connect-five with cards. Experts control corners (wild spaces), build two-way threats, and coordinate with partners to block and complete sequences.",
        quickTips: [
          "Corners are wild — control all four corners for flexible sequence completion.",
          "Build two-way threats: chips that could complete a sequence in either direction.",
          "Discard dead cards immediately — a card you can't play wastes a draw.",
          "In teams, signal by playing near partner's chips to build shared threats."
        ],
        strategy: [
          "Corner priority: corners count for any team's sequence. Occupy corners before center — they connect to 4 directions.",
          "Two-way threats: place a chip that threatens sequences horizontally and diagonally — opponent can block only one.",
          "Dead card management: if you hold a card whose space is occupied by your own chip, discard and draw. Never hold more than one dead card.",
          "Blocking: place on opponent's 4-in-a-row threat immediately. A 3-in-a-row with open ends is lower priority than a 4-threat.",
          "Team coordination: in 2v2, build sequences through partner's chips — a sequence can use both teams' chips on the same line.",
          "Endgame: with 2 sequences needed, prioritize completing one fully before starting another — partial sequences are vulnerable."
        ]
      },
      tr: {
        metaDescription: "Sequence uzman rehberi: kose kontrolu, iki yonlu tehditler, olu kart yonetimi ve takim koordinasyonu.",
        intro: "Sequence kartli connect-five oyunudur. Ustalar koseleri (joker alanlar) kontrol eder, iki yonlu tehditler kurar ve dizileri tamamlamak icin ortaklariyla koordine olur.",
        quickTips: [
          "Koseler jokerdir — esnek dizi tamamlama icin dort koseyi kontrol edin.",
          "Iki yonlu tehditler kurun: her iki yonde de dizi tamamlayabilecek chip'ler.",
          "Olu kartlari hemen atin — oynayamadiginiz kart bir cekmeyi israf eder.",
          "Takimlarda ortak chip'lerin yakinina oynayarak paylasilan tehditler kurun."
        ],
        strategy: [
          "Kose onceligi: koseler her takimin dizisi icin sayilir. Merkezden once koseleri isgal edin.",
          "Iki yonlu tehditler: yatay ve capraz dizi tehdit eden chip yerlestirin — rakip sadece birini engelleyebilir.",
          "Olu kart yonetimi: alani kendi chip'inizle dolu karti atip cekin. Birden fazla olu kart tutmayin.",
          "Bloklama: rakibin 4'luk dizisini hemen kapatin. Acik uclu 3'luk, 4'luk tehditten daha dusuk oncelikli.",
          "Takim koordinasyonu: 2v2'de ortagin chip'leri uzerinden diziler kurun.",
          "Oyunsonu: 2 dizi gerekiyorsa birini tamamen bitirmeden digerine baslamayin."
        ]
      },
      de: {
        metaDescription: "Sequence-Expertenrat: Eckenkontrolle, Zwei-Wege-Drohungen, tote-Karten-Management und Team-Koordination.",
        intro: "Sequence ist Fuenf-in-Reihe mit Karten. Experten kontrollieren Ecken (Joker-Felder), bauen Zwei-Wege-Drohungen und koordinieren mit Partnern.",
        quickTips: [
          "Ecken sind Joker — kontrolliere alle vier fuer flexible Sequenz-Vervollstaendigung.",
          "Baue Zwei-Wege-Drohungen: Chips die Sequenzen in beide Richtungen drohen.",
          "Wirf tote Karten sofort ab — eine unspielbare Karte verschwendet eine Ziehung.",
          "In Teams signalisiere durch Spielen nahe Partner-Chips fuer gemeinsame Drohungen."
        ],
        strategy: [
          "Ecken-Prioritaet: Ecken zaehlen fuer jede Team-Sequenz. Besetze Ecken vor Zentrum.",
          "Zwei-Wege-Drohungen: platziere einen Chip der horizontal und diagonal Sequenzen droht.",
          "Tote-Karten-Management: wenn du eine Karte haeltst deren Feld von deinem Chip besetzt ist, abwerfen und ziehen.",
          "Blockierung: besetze sofort Gegner-4er-Drohung. Offener 3er hat niedrigere Prioritaet als 4er.",
          "Team-Koordination: im 2v2 baue Sequenzen durch Partner-Chips.",
          "Endspiel: bei 2 benoetigten Sequenzen vervollstaendige eine vollstaendig bevor du die naechste beginnst."
        ]
      }
    }
  },

  blokus: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Blokus expert guide: corner anchoring, piece valuation, territory blocking, and endgame tile conservation.",
        intro: "Blokus is spatial territory control. Experts anchor from corners, play large pieces early, and block opponent corner access in the endgame.",
        quickTips: [
          "Play your largest pieces (pentominoes) in the first 5 turns while space is open.",
          "Always touch diagonally, never edge-to-edge with your own pieces.",
          "Expand toward the center early, then pivot to block opponent corners.",
          "Save the 1x1 monomino for the final turn — it guarantees one more placement."
        ],
        strategy: [
          "Corner anchoring: your first piece must include your corner square. Expand diagonally from corner to maximize territory options.",
          "Piece valuation: play 5-blocks and 4-blocks first (F, P, Y pentominoes). Save flexible 3-blocks (L, T trominoes) for gaps.",
          "Territory blocking: in 4-player, position pieces to cut opponent paths to the center. A blocked opponent plays fewer total pieces.",
          "Diagonal rule exploitation: place pieces so opponents cannot legally touch your territory edge — force them into narrow corridors.",
          "Endgame conservation: count remaining squares. With 3 pieces left, prioritize the monomino (1 square) for last — it's the most flexible.",
          "Scoring: -1 per unplayed square. Sacrifice a large piece to block an opponent's 5+ square territory if it saves you 3+ squares."
        ]
      },
      tr: {
        metaDescription: "Blokus uzman rehberi: kose capalama, parca degerlendirmesi, bolge bloklama ve oyunsonu tas koruma.",
        intro: "Blokus mekansal bolge kontrolu oyunudur. Ustalar koselerden capalar, buyuk parcalari erken oynar ve oyunsonunda rakip kose erisimini bloklar.",
        quickTips: [
          "Alan acikken ilk 5 turda en buyuk parcalarinizi (pentomino) oynayin.",
          "Her zaman capraz dokunun, kendi parcalarinizla kenar-kenara degil.",
          "Erken merkeze genisleyin, sonra rakip koselerini bloklamaya donun.",
          "Son tur icin 1x1 monomino'yu saklayin — bir yerlestirme daha garanti eder."
        ],
        strategy: [
          "Kose capalama: ilk parcaniz kose karenizi icermeli. Bolge seceneklerini maksimize etmek icin koseden capraz genisleyin.",
          "Parca degerlendirmesi: once 5-blok ve 4-bloklari oynayin. Bosluklar icin esnek 3-bloklari saklayin.",
          "Bolge bloklama: 4 oyuncuda rakiplerin merkeze yollarini kesin. Bloklanan rakip daha az parca oynar.",
          "Capraz kural kullanimi: rakiplerin bolge kenariniza yasal dokunamayacagi sekilde yerlestirin.",
          "Oyunsonu koruma: kalan kareleri sayin. 3 parca kaldiginda monomino'yu sona saklayin.",
          "Skorlama: oynanmayan kare basina -1. 3+ kare kurtariyorsa rakibin 5+ karelik bolgesini bloklamak icin buyuk parca feda edin."
        ]
      },
      de: {
        metaDescription: "Blokus-Expertenrat: Ecken-Verankerung, Steinebewertung, Gebiets-Blockierung und Endspiel-Stein-Erhaltung.",
        intro: "Blokus ist raeumliche Gebietskontrolle. Experten verankern von Ecken, spielen grosse Steine frueh und blockieren Gegner-Eckenzugang im Endspiel.",
        quickTips: [
          "Spiele deine groessten Steine (Pentominoes) in den ersten 5 Zuegen solange Platz offen ist.",
          "Beruehre immer diagonal, nie kante-an-kante mit eigenen Steinen.",
          "Expandiere frueh zur Mitte, dann blockiere Gegner-Ecken.",
          "Spare das 1x1-Monomino fuer den letzten Zug — garantiert eine weitere Platzierung."
        ],
        strategy: [
          "Ecken-Verankerung: dein erster Stein muss dein Eckenfeld einschliessen. Expandiere diagonal von der Ecke.",
          "Steinebewertung: spiele 5- und 4-Bloecke zuerst. Spare flexible 3-Bloecke fuer Luecken.",
          "Gebiets-Blockierung: in 4 Spielern positioniere Steine um Gegnerwege zur Mitte zu schneiden.",
          "Diagonal-Regel-Ausnutzung: platziere so dass Gegner dein Gebietsrand nicht legal beruehren koennen.",
          "Endspiel-Erhaltung: zaehle verbleibende Felder. Mit 3 Steinen spare Monomino fuer zuletzt.",
          "Wertung: -1 pro ungespieltem Feld. Opfere grossen Stein um Gegner-5+-Gebiet zu blockieren wenn es 3+ Felder rettet."
        ]
      }
    }
  },

  labyrinth: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Labyrinth expert guide: tile insertion strategy, path pre-calculation, treasure blocking, and spare tile hoarding.",
        intro: "Labyrinth (Ravensburger) is path manipulation racing. Experts pre-calculate insertions 2 moves ahead, block opponent paths, and hoard the spare tile for decisive shifts.",
        quickTips: [
          "Before moving your piece, plan the tile insertion that creates your shortest path.",
          "Insert tiles to disconnect opponent paths, not just advance your own.",
          "Collect treasures on the far side of the board to minimize return trips.",
          "Track which tile type (T, L, I) is the spare — it determines insertion options."
        ],
        strategy: [
          "Insertion priority: push a tile that opens your path AND closes the opponent's shortest route. Dual-purpose insertions win games.",
          "Path pre-calculation: map your route to the next treasure before inserting. Count moves including the insertion shift.",
          "Treasure blocking: if opponent needs treasure 3 spaces away, insert to wall off that corridor — force them a 5+ move detour.",
          "Spare tile hoarding: when you hold the spare tile after insertion, opponents cannot predict the next board state — use this information advantage.",
          "Edge insertion: inserting on edge rows (not center) shifts fewer pieces but gives more predictable path changes.",
          "Endgame: when one treasure remains, insert to place yourself 1 move away while opponent is 3+ moves — even if your path is longer overall."
        ]
      },
      tr: {
        metaDescription: "Labyrinth uzman rehberi: karo ekleme stratejisi, yol on hesaplama, hazine bloklama ve yedek karo biriktirme.",
        intro: "Labyrinth (Ravensburger) yol manipulasyonlu bir yaris oyunudur. Ustalar ekleme hamlelerini 2 hamle onceden hesaplar, rakip yollarini bloklar ve belirleyici kaydirmalar icin yedek karoyu saklar.",
        quickTips: [
          "Tasinizi hareket ettirmeden once en kisa yolunuzu olusturan karo eklemesini planlayin.",
          "Sadece kendi yolunuzu ilerletmek degil, rakip yollarini koparmak icin karo ekleyin.",
          "Geri donusleri minimize etmek icin tahtanin uzak tarafindaki hazineleri toplayin.",
          "Yedek karonin tipini (T, L, I) takip edin — ekleme seceneklerini belirler."
        ],
        strategy: [
          "Ekleme onceligi: hem yolunuzu acan hem rakibin en kisa rotasini kapatan karo itin. Cift amacli eklemeler oyun kazandirir.",
          "Yol on hesaplama: eklemeden once sonraki hazineye rotanizi cizin. Ekleme kaymasini dahil ederek hamleleri sayin.",
          "Hazine bloklama: rakip 3 kare uzaktaki hazineye ihtiyac duyuyorsa o koridoru duvarla kapatmak icin ekleyin.",
          "Yedek karo biriktirme: eklemeden sonra yedek karoyu tuttugunuzda rakipler sonraki tahta durumunu tahmin edemez.",
          "Kenar ekleme: kenar satirlara ekleme daha az parcayi kaydirir ama daha ongorulebilir yol degisiklikleri verir.",
          "Oyunsonu: tek hazine kaldiginda rakip 3+ hamle uzaktayken kendinizi 1 hamle uzaga yerlestirin."
        ]
      },
      de: {
        metaDescription: "Labyrinth-Expertenrat: Kachel-Einfuege-Strategie, Pfad-Vorberechnung, Schatz-Blockierung und Ersatzkachel-Horten.",
        intro: "Labyrinth (Ravensburger) ist Pfad-Manipulations-Rennen. Experten berechnen Einfuegungen 2 Zuege voraus, blockieren Gegnerpfade und horten die Ersatzkachel.",
        quickTips: [
          "Bevor du deine Figur bewegst plane die Kachel-Einfuegung fuer deinen kuerzesten Pfad.",
          "Fuege Kacheln ein um Gegnerpfade zu trennen, nicht nur den eigenen voranzubringen.",
          "Sammle Schaetze auf der fernen Brettseite um Rueckwege zu minimieren.",
          "Verfolge welcher Kacheltyp (T, L, I) die Ersatzkachel ist."
        ],
        strategy: [
          "Einfuege-Prioritaet: schiebe eine Kachel die deinen Pfad oeffnet UND die kuerzeste Gegnerroute schliesst.",
          "Pfad-Vorberechnung: mappe deine Route zum naechsten Schatz vor dem Einfuegen. Zaehle Zuege inklusive Einfuege-Verschiebung.",
          "Schatz-Blockierung: wenn Gegner Schatz 3 Felder entfernt braucht fuege ein um den Korridor zu mauern.",
          "Ersatzkachel-Horten: wenn du die Ersatzkachel haeltst koennen Gegner den naechsten Brettzustand nicht vorhersagen.",
          "Rand-Einfuegung: Einfuegen an Randreihen verschiebt weniger Teile aber gibt vorhersagbarere Pfadaenderungen.",
          "Endspiel: wenn ein Schatz uebrig ist fuege ein um dich 1 Zug entfernt zu platzieren waehrend Gegner 3+ Zuege entfernt ist."
        ]
      }
    }
  },

  "the-game-of-life": {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Game of Life expert guide: college ROI, insurance timing, stock market odds, and salary path optimization.",
        intro: "The Game of Life is expected-value optimization disguised as a family game. Experts take college for long-term salary advantage, buy insurance before Spin to Win, and maximize stock holdings.",
        quickTips: [
          "Always choose college — the salary advantage compounds over 40+ years of play.",
          "Buy insurance before every Spin to Win and lawsuit risk space.",
          "Invest in stock early — each stock pays on every opponent's spin matching your number.",
          "Choose the highest-salary career path even if it costs more upfront."
        ],
        strategy: [
          "College ROI: college costs $100k but unlocks $100k+ salary jobs vs $40k for non-college. Break-even is turn 3-4 — always worth it.",
          "Insurance timing: auto and fire insurance cost $10k each but save $40-100k on disaster spaces. Buy before every risk zone.",
          "Stock market: buy stock when you land on the space — it pays $40k every time any player spins your number. Expected value scales with player count.",
          "Salary optimization: doctor ($130k) > lawyer ($100k) > teacher ($60k). Choose highest even with higher promissory notes.",
          "House strategy: buy the most expensive house you can afford — mansion resale value is highest and life tiles scale with wealth.",
          "Endgame: retire to the richest life tile space. Count total wealth (cash + tiles + stocks) — stocks often decide close games."
        ]
      },
      tr: {
        metaDescription: "Game of Life uzman rehberi: universite ROI, sigorta zamanlamasi, borsa olasiliklari ve maas yolu optimizasyonu.",
        intro: "Game of Life bir aile oyunu kisvesi altinda beklenen deger optimizasyonudur. Ustalar uzun vadeli maas avantaji icin universiteye gider, Spin to Win oncesi sigorta alir ve hisse senetlerini maksimize eder.",
        quickTips: [
          "Her zaman universiteyi secin — maas avantaji 40+ yillik oyunda birikir.",
          "Her Spin to Win ve dava riski karesinden once sigorta alin.",
          "Erken hisse senedi alin — her rakip sizin numaranizi cevirdiginde oder.",
          "On maliyeti yuksek olsa bile en yuksek maasli kariyer yolunu secin."
        ],
        strategy: [
          "Universite ROI: universite 100k$ maliyet ama 100k$+ maasli isler acar vs universitesiz 40k$. Basabas 3-4. tur — her zaman deger.",
          "Sigorta zamanlamasi: oto ve yangin sigortasi 10k$ ama felaket karelerinde 40-100k$ kurtarir.",
          "Borsa: kareye indiginizde hisse alin — herhangi bir oyuncu numaranizi cevirdiginde 40k$ oder.",
          "Maas optimizasyonu: doktor (130k$) > avukat (100k$) > ogretmen (60k$). En yuksegi secin.",
          "Ev stratejisi: alabildiginiz en pahali evi alin — malikane yeniden satis degeri en yuksek.",
          "Oyunsonu: en zengin yasam karesine emekli olun. Toplam serveti sayin — hisseler yakin oyunlari belirler."
        ]
      },
      de: {
        metaDescription: "Game of Life-Expertenrat: College-ROI, Versicherungs-Timing, Aktienmarkt-Odds und Gehaltsweg-Optimierung.",
        intro: "Game of Life ist Erwartungswert-Optimierung als Familienspiel. Experten waehlen College fuer Gehaltsvorteil, kaufen Versicherung vor Spin to Win und maximieren Aktien.",
        quickTips: [
          "Waehle immer College — der Gehaltsvorteil summiert sich ueber 40+ Jahre.",
          "Kaufe Versicherung vor jedem Spin to Win und Klage-Risiko-Feld.",
          "Investiere frueh in Aktien — zahlt bei jedem Gegner-Spin mit deiner Nummer.",
          "Waehle den hoechstbezahlten Karriereweg auch wenn es mehr vorkostet."
        ],
        strategy: [
          "College-ROI: College kostet 100k$ aber ermoeglicht 100k$+ Jobs vs 40k$ ohne. Break-even ist Runde 3-4 — immer lohnenswert.",
          "Versicherungs-Timing: Auto- und Feuerversicherung kosten 10k$ aber sparen 40-100k$ bei Katastrophenfeldern.",
          "Aktienmarkt: kaufe Aktien beim Landen — zahlt 40k$ wenn ein Spieler deine Nummer dreht.",
          "Gehalts-Optimierung: Arzt (130k$) > Anwalt (100k$) > Lehrer (60k$). Waehle hoechstes.",
          "Haus-Strategie: kaufe das teuerste Haus das du dir leisten kannst.",
          "Endspiel: gehe am reichsten Lebensfeld in Rente. Zaehle Gesamtvermoegen — Aktien entscheiden knappe Spiele."
        ]
      }
    }
  },

  "trivial-pursuit": {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Trivial Pursuit expert guide: wedge targeting, category strength mapping, hub control, and final chase strategy.",
        intro: "Trivial Pursuit rewards category specialization and board positioning. Experts target their strongest wedge first, control hub spaces, and optimize final chase routes.",
        quickTips: [
          "Identify your strongest category and aim for that wedge space first.",
          "Land on hub spaces to choose any category — always pick your strongest.",
          "In teams, assign categories by player expertise.",
          "Memorize common question patterns: geography favors capitals, history favors dates."
        ],
        strategy: [
          "Wedge targeting: collect wedges in order of your expertise — don't chase random categories. Geography and Entertainment have highest question repetition.",
          "Category strength mapping: rank all 6 categories by your hit rate. Only pursue hub spaces that offer your top-2 categories.",
          "Hub control: the center hub lets you choose category — always land here when you need a specific wedge. Roll odds favor reaching hub every 3-4 turns.",
          "Blocking: in competitive play, land on opponent's needed wedge space to force them to answer in their weak category.",
          "Final chase: once you have 5 wedges, calculate shortest path to center. Roll probability: need exact count 50% of the time — position 3-4 spaces away for two chances.",
          "Question patterns: Sports asks Olympic years, Science asks periodic table, Literature asks Shakespeare. Pre-study high-frequency subtopics."
        ]
      },
      tr: {
        metaDescription: "Trivial Pursuit uzman rehberi: dilim hedefleme, kategori guclu yon haritalama, merkez kontrolu ve final kovalamaca stratejisi.",
        intro: "Trivial Pursuit kategori uzmanlasmasini ve tahta konumlandirmasini odullendirir. Ustalar en guclu dilimlerini hedefler, merkez alanlarini kontrol eder ve final kovalamaca rotalarini optimize eder.",
        quickTips: [
          "En guclu kategorinizi belirleyin ve ilk dilim alanini ona gore hedefleyin.",
          "Herhangi bir kategori secmek icin merkez alanlarina inin — her zaman en guclunuzu secin.",
          "Takimlarda kategorileri oyuncu uzmanligina gore atayin.",
          "Yaygin soru kaliplarini ezberleyin: cografya baskentleri, tarih tarihleri sorar."
        ],
        strategy: [
          "Dilim hedefleme: uzmanliginiz sirasina gore dilim toplayin. Cografya ve Eglence en yuksek soru tekrarina sahiptir.",
          "Kategori guclu yon haritalama: 6 kategoriyi isabet oranina gore sirala. Sadece en iyi 2 kategorinizi sunan merkez alanlarini hedefleyin.",
          "Merkez kontrolu: merkez hub kategori secmenizi saglar — belirli dilim gerektiginde buraya inin.",
          "Bloklama: rakibin ihtiyac duydugu dilim alanina inerek zayif kategoride cevaplamaya zorlayin.",
          "Final kovalamaca: 5 dilim topladiktan sonra merkeze en kisa yolu hesaplayin.",
          "Soru kaliplari: Spor Olimpiyat yillarini, Bilim periyodik tabloyu, Edebiyat Shakespeare'i sorar."
        ]
      },
      de: {
        metaDescription: "Trivial Pursuit-Expertenrat: Keil-Zielwahl, Kategorie-Staerke-Mapping, Hub-Kontrolle und Final-Chase-Strategie.",
        intro: "Trivial Pursuit belohnt Kategorie-Spezialisierung und Brettpositionierung. Experten zielen auf staerksten Keil, kontrollieren Hub-Felder und optimieren Final-Chase-Routen.",
        quickTips: [
          "Identifiziere deine staerkste Kategorie und ziele zuerst auf diesen Keil.",
          "Lande auf Hub-Feldern um jede Kategorie zu waehlen — waehle immer deine staerkste.",
          "In Teams weise Kategorien nach Spieler-Expertise zu.",
          "Merke haeufige Fragemuster: Geographie bevorzugt Hauptstaedte, Geschichte Daten."
        ],
        strategy: [
          "Keil-Zielwahl: sammle Keile nach Expertise-Reihenfolge. Geographie und Unterhaltung haben hoechste Fragenwiederholung.",
          "Kategorie-Staerke-Mapping: ranke alle 6 Kategorien nach Trefferquote. Verfolge nur Hub-Felder mit Top-2-Kategorien.",
          "Hub-Kontrolle: der Zentrum-Hub laesst Kategorie waehlen — lande hier wenn du einen bestimmten Keil brauchst.",
          "Blockierung: lande auf Gegner-Keil-Feld um sie in schwacher Kategorie antworten zu lassen.",
          "Final-Chase: mit 5 Keilen berechne kuerzesten Weg zum Zentrum.",
          "Fragemuster: Sport fragt Olympische Jahre, Wissenschaft Periodensystem, Literatur Shakespeare."
        ]
      }
    }
  },

  pictionary: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Pictionary expert guide: drawing shortcuts, category signaling, time management, and guesser communication.",
        intro: "Pictionary is communication speed under constraint. Experts use standardized drawing shortcuts, signal category first, and manage the 60-second clock ruthlessly.",
        quickTips: [
          "Signal category first: draw a square for movie, wavy line for song, book shape for title.",
          "Use standardized shortcuts: stick figure + arrow = verb, X = no, checkmark = yes.",
          "Draw the hardest word first, then add context clues.",
          "Guessers should shout partial matches to narrow options."
        ],
        strategy: [
          "Category signaling: first 3 seconds establish medium — film reel for movie, musical note for song, open book for book title. Saves 10+ seconds of guessing.",
          "Drawing shortcuts: draw phonetic components for hard words (draw 'cat' for 'catalog'). Use number of syllables (hold up fingers) before drawing.",
          "Time management: spend 5 seconds planning, 40 seconds drawing, 15 seconds refining. Never erase — cross out and redraw.",
          "Guesser protocol: yell all associations immediately ('sounds like', 'type of', 'rhymes with'). Silence loses games.",
          "All-play strategy: in all-play rounds, draw the most distinctive visual element — avoid abstract concepts.",
          "Difficult words: for proper nouns, draw the most famous association (Eiffel Tower for Paris, not a map of France)."
        ]
      },
      tr: {
        metaDescription: "Pictionary uzman rehberi: cizim kisayollari, kategori sinyalleme, zaman yonetimi ve tahminci iletisimi.",
        intro: "Pictionary kisitlama altinda iletisim hizidir. Ustalar standart cizim kisayollari kullanir, once kategoriyi sinyaller ve 60 saniyelik saati acimasizca yonetir.",
        quickTips: [
          "Once kategoriyi sinyalleyin: film icin kare, sarki icin dalgali cizgi, kitap icin kitap sekli.",
          "Standart kisayollar kullanin: cubuk adam + ok = fiil, X = hayir, onay isareti = evet.",
          "Once en zor kelimeyi cizin, sonra baglam ipuclari ekleyin.",
          "Tahminciler secenekleri daraltmak icin kismi eslesmeleri soylemeli."
        ],
        strategy: [
          "Kategori sinyalleme: ilk 3 saniye ortami belirleyin — film icin makara, sarki icin nota, kitap icin acik kitap.",
          "Cizim kisayollari: zor kelimeler icin fonetik bilesenler cizin. Cizmeden once hece sayisini parmakla gosterin.",
          "Zaman yonetimi: 5 saniye planlama, 40 saniye cizim, 15 saniye iyilestirme. Asla silmeyin — cizip uzerine cizin.",
          "Tahminci protokolu: tum iliskileri hemen bagirin. Sessizlik oyun kaybettirir.",
          "Herkes oynar stratejisi: en ayirt edici gorsel ogeyi cizin — soyut kavramlardan kacin.",
          "Zor kelimeler: ozel isimler icin en unlu iliskiyi cizin (Paris icin Eyfel Kulesi)."
        ]
      },
      de: {
        metaDescription: "Pictionary-Expertenrat: Zeichen-Abkuerzungen, Kategorie-Signalisierung, Zeitmanagement und Rater-Kommunikation.",
        intro: "Pictionary ist Kommunikationsgeschwindigkeit unter Zwang. Experten nutzen standardisierte Zeichen-Abkuerzungen, signalisieren Kategorie zuerst und managen die 60-Sekunden-Uhr gnadenlos.",
        quickTips: [
          "Signalisiere Kategorie zuerst: Quadrat fuer Film, Wellenlinie fuer Song, Buchform fuer Titel.",
          "Nutze Standard-Abkuerzungen: Strichmännchen + Pfeil = Verb, X = nein, Haekchen = ja.",
          "Zeichne das schwerste Wort zuerst, dann Kontext-Hinweise.",
          "Rater sollen Teil-Treffer rufen um Optionen einzugrenzen."
        ],
        strategy: [
          "Kategorie-Signalisierung: erste 3 Sekunden Medium etablieren — Filmrolle, Notenzeichen, offenes Buch.",
          "Zeichen-Abkuerzungen: zeichne phonetische Komponenten fuer schwere Woerter. Zeige Silbenzahl vor dem Zeichnen.",
          "Zeitmanagement: 5 Sekunden planen, 40 zeichnen, 15 verfeinern. Nie radieren — durchstreichen und neu zeichnen.",
          "Rater-Protokoll: rufe alle Assoziationen sofort. Stille verliert Spiele.",
          "Alle-spielen-Strategie: zeichne das markanteste visuelle Element.",
          "Schwere Woerter: fuer Eigennamen zeichne die beruehmteste Assoziation (Eiffelturm fuer Paris)."
        ]
      }
    }
  },

  operation: {
    categoryId: "classic-board-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription: "Operation expert guide: tweezer technique, high-value extraction order, steady-hand positioning, and risk-reward banking.",
        intro: "Operation is fine motor control under pressure. Experts use proper tweezer grip, extract high-value pieces first, and bank points before attempting risky extractions.",
        quickTips: [
          "Use thumb-and-index tweezer grip at the metal band, not the foam handles.",
          "Extract high-value pieces (brain $600, heart $500) before low-value ones.",
          "Brace your elbow on the table for stability.",
          "Bank accumulated money before attempting the most difficult pieces."
        ],
        strategy: [
          "Tweezer technique: grip tweezers at the metal hinge, not the foam. Approach pieces from the side slot, not top-down — side entry minimizes edge contact.",
          "Extraction order: brain ($600) and heart ($500) first while tweezers are cold. Save wishbone ($100) and spare rib ($100) for last when pressure is highest.",
          "Steady-hand positioning: rest your wrist on the table edge, use pinky finger as anchor. Breathe out during extraction, not in.",
          "Edge avoidance: each piece has a safe extraction angle. Heart exits best from the left slot; funny bone from the top-right channel.",
          "Risk-reward banking: after $800+ accumulated, attempt only high-value remaining pieces. A buzz costs your turn but not banked money in most house rules.",
          "Speed vs precision: in timed variants, skip low-value pieces entirely — one brain extraction equals six spare rib attempts."
        ]
      },
      tr: {
        metaDescription: "Operation uzman rehberi: cimbiz teknigi, yuksek degerli cikarma sirasi, sabit el pozisyonu ve risk-odul biriktirme.",
        intro: "Operation baski altinda ince motor kontroludur. Ustalar dogru cimbiz tutusunu kullanir, yuksek degerli parcalari once cikarir ve riskli cikarmalardan once puan biriktirir.",
        quickTips: [
          "Kopuk saplar degil metal bantta bas parmak-isaret parmagi cimbiz tutusu kullanin.",
          "Dusuk degerlilerden once yuksek degerli parcalari (beyin 600$, kalp 500$) cikarin.",
          "Stabilite icin dirseginizi masaya dayayin.",
          "En zor parcalari denemeden once biriktirilmis parayi bankalayin."
        ],
        strategy: [
          "Cimbiz teknigi: kopuk degil metal menteseden tutun. Parcalara yukaridan degil yan yuvadan yaklasin — yan giris kenar temasini minimize eder.",
          "Cikarma sirasi: cimbizler sogukken once beyin (600$) ve kalp (500$). Baski en yuksekken kemik (100$) ve fazla kaburga (100$) sona birakin.",
          "Sabit el pozisyonu: bileginizi masa kenarina dayayin, serce parmagi capa olarak kullanin. Cikarma sirasinda nefes verin.",
          "Kenar kacinma: her parcanin guvenli cikarma acisi vardir. Kalp soldan, komik kemik sag ust kanaldan en iyi cikar.",
          "Risk-odul biriktirme: 800$+ biriktirdikten sonra sadece kalan yuksek degerli parcalari deneyin.",
          "Hiz vs hassasiyet: zamanli varyantlarda dusuk degerli parcalari tamamen atlayin — bir beyin cikarma alti kaburga denemesine esittir."
        ]
      },
      de: {
        metaDescription: "Operation-Expertenrat: Pinzetten-Technik, Hochwert-Extraktions-Reihenfolge, ruhige-Hand-Positionierung und Risiko-Belohnung-Banking.",
        intro: "Operation ist Feinmotorik unter Druck. Experten nutzen korrekten Pinzetten-Griff, extrahieren hochwertige Teile zuerst und banken Punkte vor riskanten Extraktionen.",
        quickTips: [
          "Nutze Daumen-Zeigefinger-Pinzetten-Griff am Metallband, nicht an Schaumstoffgriffen.",
          "Extrahiere hochwertige Teile (Gehirn 600$, Herz 500$) vor niedrigwertigen.",
          "Stuetze den Ellbogen auf dem Tisch fuer Stabilitaet.",
          "Bank angesammeltes Geld bevor du die schwierigsten Teile versuchst."
        ],
        strategy: [
          "Pinzetten-Technik: greife am Metallscharnier, nicht am Schaumstoff. Naehere dich seitlich, nicht von oben.",
          "Extraktions-Reihenfolge: Gehirn (600$) und Herz (500$) zuerst solange Pinzetten kalt. Wunschknochen (100$) und Extra-Rippe (100$) zuletzt.",
          "Ruhige-Hand-Positionierung: lehne Handgelenk an Tischkante, kleiner Finger als Anker. Atme beim Extrahieren aus.",
          "Kanten-Vermeidung: jedes Teil hat einen sicheren Extraktionswinkel. Herz am besten von links; Funny Bone von oben-rechts.",
          "Risiko-Belohnung-Banking: nach 800$+ versuche nur verbleibende hochwertige Teile.",
          "Geschwindigkeit vs Praezision: in Zeitvarianten ueberspringe niedrigwertige Teile — eine Gehirn-Extraktion entspricht sechs Rippen-Versuchen."
        ]
      }
    }
  }
};

