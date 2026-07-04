export const cardsExpert = {
  solitaire: {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Master Klondike solitaire: empty-column king moves, uncover hidden cards first, and balance tableau builds with foundation runs.",
        intro:
          "Klondike solitaire rewards patience and sequencing. The win rate jumps when you treat every empty column as a king landing zone and prioritize flipping face-down cards over rushing aces to the foundation.",
        quickTips: [
          "Create empty columns only when a king can move there immediately.",
          "Flip hidden tableau cards before building long runs on the same pile.",
          "Move aces to foundations early, but delay 2s and 3s if they block reveals.",
          "Work from the highest blocked cards downward to maximize new flips."
        ],
        strategy: [
          "Empty columns are your most valuable resource. Never fill one with a non-king just to tidy the board — a king in an empty column unlocks entire stacks.",
          "Prioritize moves that increase face-up card count. A single flip often beats a neat color-alternating build that buries hidden cards.",
          "Recycle the stock with intent. Track how many passes remain and whether buried cards are still reachable before cycling endlessly.",
          "Build longest runs on the tableau pile with the most hidden cards beneath, so future kings have somewhere to land without breaking progress.",
          "When choosing between two legal moves, pick the one that preserves future king slots and keeps red-black flexibility on partial builds."
        ]
      },
      tr: {
        metaDescription:
          "Klondike solitaire uzmanlığı: boş sütunlara papaz taşımak, gizli kartları açmak ve temel ile tablo yapılarını dengelemek.",
        intro:
          "Klondike solitaire sabır ve sıralama odaklı bir oyundur. Her boş sütunu papaz alanı olarak kullanmak ve asları aceleyle temele göndermek yerine gizli kartları açmak kazanma oranını artırır.",
        quickTips: [
          "Boş sütunları yalnızca hemen papaz taşıyabileceğin zaman aç.",
          "Aynı yığında uzun seriler kurmadan önce gizli tablo kartlarını çevir.",
          "Asları erken temele al ama 2 ve 3'ler açılımları engelliyorsa geciktir.",
          "En çok yeni çevirme için en yüksekteki bloklu kartlardan aşağı çalış."
        ],
        strategy: [
          "Boş sütunlar en değerli kaynağındır. Düzen için papaz olmayan bir kartla doldurma — papaz boş sütuna tüm yığınları açar.",
          "Açık kart sayısını artıran hamleleri önceliklendir. Tek bir çevirme, gizli kartları gömen düzenli seriden üstün gelir.",
          "Desteyi bilinçli çevir. Kaç tur kaldığını ve gömülü kartlara hâlâ ulaşılıp ulaşılamayacağını takip et.",
          "En çok gizli kartı olan tablo yığınında en uzun serileri kur; gelecekteki papazlar ilerlemeyi bozmadan oraya oturabilsin.",
          "İki yasal hamle arasında, gelecekteki papaz alanlarını koruyan ve kırmızı-siyah esnekliğini saklayan seçimi yap."
        ]
      },
      de: {
        metaDescription:
          "Klondike-Solitaire meistern: leere Spalten für Könige, verdeckte Karten aufdecken und Tableau mit Fundamenten ausbalancieren.",
        intro:
          "Klondike belohnt Geduld und Reihenfolge. Die Gewinnquote steigt, wenn leere Spalten als Königslandeplatz gelten und das Aufdecken verdeckter Karten wichtiger ist als frühe Asse aufs Fundament.",
        quickTips: [
          "Leere Spalten nur öffnen, wenn sofort ein König hinein kann.",
          "Verdeckte Tableau-Karten umdrehen, bevor du lange Reihen auf einem Stapel baust.",
          "Asse früh aufs Fundament, aber 2er und 3er verzögern, wenn sie Aufdeckungen blockieren.",
          "Von den höchsten blockierten Karten nach unten arbeiten für maximale neue Aufdeckungen."
        ],
        strategy: [
          "Leere Spalten sind deine wertvollste Ressource. Fülle sie nie mit Nicht-Königen nur zum Aufräumen — ein König in leerer Spalte öffnet ganze Stapel.",
          "Priorisiere Züge, die offene Karten erhöhen. Ein einzelnes Umdrehen schlägt oft einen ordentlichen Farbenwechsel-Bau, der Karten verdeckt.",
          "Stapel mit Absicht durchgehen. Zähle verbleibende Durchläufe und ob vergrabene Karten noch erreichbar sind.",
          "Baue längste Reihen auf dem Tableau-Stapel mit den meisten verdeckten Karten darunter.",
          "Bei zwei legalen Zügen wähle den, der künftige Königsslots erhält und Rot-Schwarz-Flexibilität bewahrt."
        ]
      }
    }
  },

  "spider-solitaire": {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Win Spider Solitaire by building same-suit runs, hoarding empty columns, and sequencing moves to expose every hidden card.",
        intro:
          "Spider punishes messy builds. In four-suit mode, treat empty columns like gold and only complete suited stacks when doing so opens more face-down cards.",
        quickTips: [
          "Keep at least one empty column free whenever possible.",
          "Build in-suit before mixing suits on deep stacks.",
          "Break mixed-suit runs only to flip a hidden card or free a king.",
          "Deal from the stock only when no productive tableau move exists."
        ],
        strategy: [
          "Empty columns multiply mobility. Moving a full king stack into an empty slot often beats incremental same-suit progress that traps kings.",
          "In four-suit Spider, mixed-suit builds are temporary scaffolding. Plan the unmixing path before committing cards to a pile.",
          "Deal timing matters: ten new cards can bury kings. Exhaust high-yield flips and column clears before touching the stock.",
          "Work from the highest incomplete stacks first — buried kings in low piles are the main endgame failure mode.",
          "When two suits compete for the same column, favor the suit with more remaining cards in the deck for completion potential."
        ]
      },
      tr: {
        metaDescription:
          "Spider Solitaire kazanmak için aynı renk serileri kur, boş sütunları sakla ve her gizli kartı açacak sıralamayla oyna.",
        intro:
          "Spider dağınık yapıları cezalandırır. Dört renk modunda boş sütunları altın gibi koru ve tamamlanmış serileri yalnızca daha fazla gizli kart açacaksa kaldır.",
        quickTips: [
          "Mümkün olduğunca en az bir boş sütunu boş tut.",
          "Derin yığınlarda renkleri karıştırmadan önce aynı renkte kur.",
          "Karışık serileri yalnızca gizli kart çevirmek veya papaz açmak için boz.",
          "Stoktan dağıtımı yalnızca verimli tablo hamlesi kalmadığında yap."
        ],
        strategy: [
          "Boş sütunlar hareketliliği katlar. Dolu bir papaz yığınını boş slota taşımak, papazları hapseden kademeli ilerlemeden üstündür.",
          "Dört renkte karışık seriler geçici iskeledir. Kartları yığına vermeden önce ayırma yolunu planla.",
          "Dağıtım zamanlaması önemlidir: on yeni kart papazları gömebilir. Stoka dokunmadan önce yüksek getirili çevirmeleri tüket.",
          "En yüksek tamamlanmamış yığınlardan başla — alttaki gömülü papazlar oyun sonu hatasıdır.",
          "İki renk aynı sütunu istediğinde, tamamlama potansiyeli için destede daha çok kartı kalan rengi tercih et."
        ]
      },
      de: {
        metaDescription:
          "Spider Solitaire gewinnen: gleichfarbige Reihen, leere Spalten horten und Züge sequenzieren, um jede verdeckte Karte aufzudecken.",
        intro:
          "Spider bestraft unordentliche Bauten. Im Vier-Farben-Modus leere Spalten wie Gold behandeln und nur komplette Farbenstapel entfernen, wenn dadurch mehr verdeckte Karten frei werden.",
        quickTips: [
          "Wenn möglich mindestens eine leere Spalte frei halten.",
          "Gleichfarbe bauen, bevor Farben auf tiefen Stapeln gemischt werden.",
          "Gemischte Reihen nur brechen, um verdeckte Karten aufzudecken oder einen König zu befreien.",
          "Nur vom Stapel dealen, wenn kein produktiver Tableau-Zug mehr existiert."
        ],
        strategy: [
          "Leere Spalten vervielfachen Mobilität. Einen vollen Königsstapel in einen leeren Slot zu bewegen schlägt oft inkrementellen Gleichfarben-Fortschritt.",
          "Im Vier-Farben-Spider sind gemischte Bauten temporäres Gerüst. Den Entmischungsweg planen, bevor Karten festgelegt werden.",
          "Deal-Timing zählt: zehn neue Karten können Könige begraben. Erst hochwertige Aufdeckungen und Spaltenräumungen, dann Stapel.",
          "Von den höchsten unvollständigen Stapeln arbeiten — begrabene Könige in tiefen Stapeln sind der Haupt-Endspiel-Fehler.",
          "Wenn zwei Farben um dieselbe Spalte konkurrieren, die Farbe mit mehr verbleibenden Karten im Stapel bevorzugen."
        ]
      }
    }
  },

  freecell: {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "FreeCell expert play: treat free cells as gold, plan multi-move sequences backward, and never strand low cards above kings.",
        intro:
          "Nearly every FreeCell deal is winnable with correct sequencing. Free cells are temporary storage, not parking lots — four occupied cells choke the board.",
        quickTips: [
          "Keep at least two free cells open during midgame.",
          "Plan king moves by working backward from the target column.",
          "Clear a column before moving a deep stack across the board.",
          "Build aces to foundations aggressively when cells are tight."
        ],
        strategy: [
          "Free cells are a budget, not storage. Each occupied cell reduces maximum stack depth you can move by one — treat empty cells as tempo.",
          "Before moving a long sequence, simulate the reverse: which cards must land in cells temporarily, and can you recover them?",
          "Empty columns beat empty cells. A cleared column moves entire king stacks; prioritize column clears over cautious single-card shuffles.",
          "Avoid burying low cards under kings in the tableau. If a 3 sits above a queen stack, solve that inversion before dealing with new builds.",
          "Foundation ascension timing: moving a 5 to foundations may block a needed 4 transfer — count supermove capacity before auto-playing up."
        ]
      },
      tr: {
        metaDescription:
          "FreeCell uzmanı: boş hücreleri altın gibi kullan, çoklu hamleleri geriye doğru planla, düşük kartları papazların üstüne hapsedme.",
        intro:
          "Doğru sıralamayla neredeyse her FreeCell dağıtımı kazanılabilir. Boş hücreler geçici depo değil nefes alanıdır — dört dolu hücre tahtayı boğar.",
        quickTips: [
          "Oyun ortasında en az iki boş hücreyi açık tut.",
          "Papaz taşımak için hedef sütundan geriye doğru çalış.",
          "Derin bir yığını taşımadan önce bir sütunu tamamen boşalt.",
          "Hücreler daraldığında asları temele agresif gönder."
        ],
        strategy: [
          "Boş hücreler bütçedir, depo değil. Her dolu hücre taşıyabileceğin maksimum yığın derinliğini bir azaltır.",
          "Uzun bir seriyi taşımadan önce tersini simüle et: hangi kartlar geçici olarak hücrelere gider ve geri alabilir misin?",
          "Boş sütunlar boş hücrelerden üstündür. Temizlenmiş sütun tüm papaz yığınlarını taşır; tek kart karıştırmaya öncelik ver.",
          "Düşük kartları tabloda papazların altına gömmekten kaçın. Bir 3 kupa yığınının üstündeyse önce o tersliği çöz.",
          "Temel zamanlaması: 5'i temele almak gerekli 4 transferini engelleyebilir — otomatik oynatmadan önce süperhamle kapasitesini say."
        ]
      },
      de: {
        metaDescription:
          "FreeCell-Experten: freie Zellen als Gold, Mehrfachzüge rückwärts planen, nie tiefe Karten über Könige stranden.",
        intro:
          "Fast jedes FreeCell-Blatt ist mit korrekter Sequenzierung lösbar. Freie Zellen sind temporärer Speicher — vier belegte Zellen ersticken das Brett.",
        quickTips: [
          "In der Mittelphase mindestens zwei freie Zellen offen halten.",
          "Königszüge rückwärts vom Ziel aus planen.",
          "Eine Spalte leeren, bevor ein tiefer Stapel quer bewegt wird.",
          "Bei knappen Zellen Asse aggressiv auf Fundamente spielen."
        ],
        strategy: [
          "Freie Zellen sind Budget, kein Parkplatz. Jede belegte Zelle reduziert die maximale Stapelbewegungstiefe um eins.",
          "Vor langen Sequenzen die Umkehrung simulieren: welche Karten temporär in Zellen müssen und sind sie recoverbar?",
          "Leere Spalten schlagen leere Zellen. Eine geräumte Spalte bewegt ganze Königsstapel.",
          "Vermeide tiefe Karten unter Königen im Tableau zu vergraben. Inversionen zuerst lösen.",
          "Fundament-Timing: eine 5 nach oben kann einen nötigen 4er-Transfer blockieren — Supermove-Kapazität zählen."
        ]
      }
    }
  },

  hearts: {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Hearts strategy: pass the 2 of clubs, void clubs early, duck points when opponents shoot the moon, and track the queen of spades.",
        intro:
          "Hearts is a trick-avoidance game with a dramatic swing option. Expert play balances bleeding spades, passing danger cards, and recognizing when shooting the moon is viable.",
        quickTips: [
          "Pass the 2 of clubs to force the lead and control the first trick.",
          "Void clubs early so you cannot win the first trick accidentally.",
          "Hold low spades until the queen has been played or is safe.",
          "Dump point cards on players who are already collecting hearts."
        ],
        strategy: [
          "Opening lead logic: with the 2 of clubs you choose who eats the first trick. Pass it to the player least likely to dump points on you.",
          "Shoot-the-moon detection: if an opponent takes an early heart and keeps winning tricks, feed them low cards instead of points — or take the moon yourself if you can absorb all 26.",
          "Spade management: leading low spades after the queen is out strips opponents of exit cards. Before the queen appears, never lead spades from length.",
          "Passing strategy by hand strength: pass high hearts and the queen on weak hands; pass low clubs and middle spades on strong avoidance hands.",
          "Endgame counting: with 3 hearts and the queen still out, know exactly who must take the last trick and force the queen onto the leader."
        ]
      },
      tr: {
        metaDescription:
          "Hearts stratejisi: sinek 2'sini pasla, sinekleri erken bitir, rakip ay hedeflerken puanları yedir, kupa kızını takip et.",
        intro:
          "Hearts puan kaçınma oyunudur ve ay vurma büyük bir salınım sağlar. Uzman oyun, kupa yönetimi, tehlikeli kart paslama ve ay vurmanın ne zaman mümkün olduğunu dengelemektir.",
        quickTips: [
          "İlk eli kontrol etmek için sinek 2'sini pasla.",
          "İlk eli kazanmamak için sinekleri erken bitir.",
          "Kupa kızı oynanana veya güvenli olana kadar düşük kupalar tut.",
          "Zaten kupa toplayan oyunculara puan kartlarını yedir."
        ],
        strategy: [
          "Açılış mantığı: sinek 2'si ile ilk eli kimin alacağını belirlersin. Puanları sana yedirmeyecek oyuncuya pasla.",
          "Ay vurma tespiti: rakip erken kupa alıp el kazanmaya devam ederse ona düşük kart ver, puan değil — veya 26'nın tamamını alabiliyorsan ayı kendin vur.",
          "Kupa yönetimi: kızı çıkardıktan sonra düşük kupa lead'i rakiplerin çıkış kartlarını tüketir. Kız çıkmadan uzun kupadan lead yapma.",
          "El gücüne göre pas: zayıf elde yüksek kupalar ve kızı pasla; güçlü kaçınma elinde düşük sinek ve orta kupalar.",
          "Oyun sonu sayımı: 3 kupa ve kız dışarıdayken son eli kimin alacağını bil ve kızı liderin üstüne zorla."
        ]
      },
      de: {
        metaDescription:
          "Hearts-Strategie: Kreuz-2 abgeben, Kreuz früh blanken, Punkte ducken wenn Gegner den Mond schießen, Pik-Dame tracken.",
        intro:
          "Hearts ist ein Stichvermeidungsspiel mit dramatischer Mond-Schuss-Option. Experten balancieren Pik-Bluten, gefährliche Karten abgeben und erkennen, wann der Mond-Schuss machbar ist.",
        quickTips: [
          "Kreuz-2 abgeben, um den ersten Stich zu kontrollieren.",
          "Kreuz früh blanken, damit du den ersten Stich nicht versehentlich gewinnst.",
          "Niedrige Pik halten, bis die Dame gespielt oder sicher ist.",
          "Punktkarten an Spieler abwerfen, die bereits Herzen sammeln."
        ],
        strategy: [
          "Eröffnungslogik: mit Kreuz-2 wählst du, wer den ersten Stich frisst. An den Spieler geben, der am wenigsten Punkte auf dich abwirft.",
          "Mond-Schuss-Erkennung: frühes Herz und weiter gewinnende Stiche — niedrige Karten füttern statt Punkte, oder selbst den Mond schießen wenn du alle 26 absorbierst.",
          "Pik-Management: nach der Dame niedrige Pik anführen strippt Exit-Karten. Vor der Dame nie aus Pik-Länge anführen.",
          "Abgabe nach Handstärke: hohe Herzen und Dame bei schwachen Händen; niedrige Kreuz und mittlere Pik bei starken Vermeidungshänden.",
          "Endspiel-Zählen: mit 3 Herzen und Dame draußen genau wissen, wer den letzten Stich nehmen muss."
        ]
      }
    }
  },

  spades: {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Spades bidding and play: count winners honestly, protect nil bids, manage bag penalties, and lead trump to pull opponents' spades.",
        intro:
          "Spades is won at the bid table. Accurate trick counting, nil defense, and bag math separate experts from players who swing 2-3 tricks every hand.",
        quickTips: [
          "Bid one less than your optimistic count when hands are volatile.",
          "Cover partner's nil before chasing your own overtricks.",
          "Track spades played — when they're all out, your side cards become kings.",
          "Avoid bag penalties: sandbag at +9 bags, so bag intentionally only when behind."
        ],
        strategy: [
          "Accurate bidding is 80% of Spades. Count sure tricks first (aces, protected kings, singleton spades), then add conditional tricks only at 50%+ probability.",
          "Nil defense: when opponents bid nil, lead suits they are void in and avoid feeding them safe exits. Your first duty is setting the nil, not making your bid.",
          "Trump pulling: when you have spade length but are short in a side suit, lead spades early to flush opponents before they cash side winners.",
          "Partnership signaling is limited but real: returning partner's lead suit often means they want a ruff or have length. Don't trump partner's winners.",
          "Bag math at 7-8 bags: sometimes taking a deliberate set is correct if it prevents a 100-point bag penalty that would cost more than the hand loss.",
          "Blind nil and double-nil are tournament weapons — only attempt with ace-heavy short suits and confirmed partner cover."
        ]
      },
      tr: {
        metaDescription:
          "Spades ihale ve oyun: kazançları dürüst say, nil ihalelerini koru, torba cezasını yönet, rakip kupalarını çekmek için kupa lead et.",
        intro:
          "Spades ihale masasında kazanılır. Doğru el sayımı, nil savunması ve torba matematiği uzmanları ayırır.",
        quickTips: [
          "Volatil ellerde iyimser sayımdan bir eksik ihale et.",
          "Kendi fazla elini kovalamadan önce partnerin nil'ini koru.",
          "Oynanan kupaları takip et — hepsi çıkınca yan renklerin kral olur.",
          "Torba cezasından kaçın: +9'da ceza gelir, yalnızca gerideyken bilerek torba al."
        ],
        strategy: [
          "Önce kesin elleri say (aslar, korunmuş papazlar, tek kupa), koşullu elleri yalnızca yüzde 50+ olasılıkla ekle.",
          "Nil savunması: rakip nil ihale ettiğinde boş olduğu renklerden lead et, güvenli çıkış verme. İlk görev nil'i düşürmek.",
          "Kupa çekme: kupa uzunluğun varsa erken kupa lead et, rakipler yan renk kazanmadan önce kupalarını tüket.",
          "Partner sinyali sınırlıdır ama gerçektir: partnerin lead ettiği renge dönmek genelde uzunluk veya ruff ister. Partnerin kazancını kupa ile kesme.",
          "7-8 torbada bazen bilerek düşmek, 100 puanlık torba cezasından daha az kaybettirir.",
          "Kör nil ve çift nil turnuva silahıdır — yalnızca as ağırlığı ve partner korumasıyla dene."
        ]
      },
      de: {
        metaDescription:
          "Pik-Bieten und -Spiel: Stiche ehrlich zählen, Nil schützen, Sack-Strafen managen, Trumpf anführen um gegnerische Pik zu ziehen.",
        intro:
          "Pik wird am Biettisch gewonnen. Korrekte Stichzählung, Nil-Verteidigung und Sack-Mathematik trennen Experten.",
        quickTips: [
          "Bei volatilen Händen ein Stich unter der optimistischen Zählung bieten.",
          "Partners Nil decken, bevor eigene Überstiche gejagt werden.",
          "Gespielte Pik mitzählen — wenn alle weg sind, werden Seitenfarben zu Königen.",
          "Sack-Strafen vermeiden: bei +9 Strafe, Sacks nur absichtlich wenn hinten."
        ],
        strategy: [
          "Zuerst sichere Stiche zählen (Asse, geschützte Könige, Pik-Singletons), bedingte nur bei 50%+ Wahrscheinlichkeit.",
          "Nil-Verteidigung: bei Gegner-Nil Farben anführen, in denen sie blank sind. Erste Pflicht: Nil setzen.",
          "Trumpf ziehen: bei Pik-Länge und kurzer Seitenfarbe früh Pik anführen.",
          "Partnerschafts-Signale: Rückgabe der Anspielfarbe bedeutet oft Länge. Partners Gewinner nicht trumpfen.",
          "Sack-Math bei 7-8 Sacks: manchmal absichtlich setzen, wenn 100-Punkte-Strafe teurer wäre.",
          "Blind Nil nur mit As-schweren kurzen Farben und Partner-Deckung."
        ]
      }
    }
  },

  bridge: {
    categoryId: "card-games",
    difficulty: "complicated",
    content: {
      en: {
        metaDescription:
          "Bridge expert guide: five-card majors, Stayman, Blackwood, negative doubles, and opening-lead conventions that win IMPs.",
        intro:
          "Bridge is a partnership bidding language. Experts agree on system (2/1, Standard American, ACOL) and then win on card-reading, percentage safety plays, and disciplined slam investigation.",
        quickTips: [
          "Open five-card majors when system allows — it clarifies fits faster.",
          "Use Stayman after 1NT to find major fits without guessing.",
          "Blackwood 4NT asks for aces; Roman Key Card is the modern upgrade.",
          "Lead partner's bid suit unless a passive lead is clearly safer."
        ],
        strategy: [
          "Bidding system discipline: pick 2/1 Game Forcing or Standard and stick to it. Partnership accidents cost more than clever deviations.",
          "Stayman and transfers after 1NT: 2♣ asks for majors; responder transfers to hide strength. Know your follow-ups to 2NT and invitational ranges.",
          "Negative doubles after overcalls show unbid majors with opening values — they replace the old 'borrow a bid' chaos at the two-level.",
          "Slam bidding: cue-bid controls before Blackwood. Ask for key cards only when you can handle a missing king in a side suit.",
          "Declarer play: count losers before winners. Establish long suits with entries planned backward from the trick you need.",
          "Defense: lead top of sequence vs NT; low from honor vs suit contracts. Signal attitude on partner's lead, count on declarer's."
        ]
      },
      tr: {
        metaDescription:
          "Bridge uzman rehberi: beş kartlı major, Stayman, Blackwood, negatif double ve IMP kazandıran açılış lead konvansiyonları.",
        intro:
          "Bridge bir ortaklık ihale dilidir. Uzmanlar sistemde (2/1, Standard American) anlaşır, sonra kart okuma, yüzde güvenlik oyunları ve disiplinli slam araştırmasıyla kazanır.",
        quickTips: [
          "Sistem izin veriyorsa beş kartlı major aç — fiti daha hızlı netleştirir.",
          "1NT sonrası major fit bulmak için Stayman kullan.",
          "Blackwood 4NT as sorar; Roman Key Card modern yükseltmedir.",
          "Pasif lead açıkça daha güvenliyse partnerin ihale ettiği renkten lead et."
        ],
        strategy: [
          "İhale sistemi disiplini: 2/1 veya Standard seç ve sadık kal. Ortaklık hataları zekice sapmalardan daha pahalıdır.",
          "1NT sonrası Stayman ve transferler: 2♣ major sorar; responder gücü gizlemek için transfer yapar.",
          "Overcall sonrası negatif double, ihale edilmemiş majorları açma değeriyle gösterir.",
          "Slam ihale: Blackwood öncesi kontrol cue-bid'leri. Yan renkte eksik vale varken anahtar kart sorma.",
          "Deklarör oyunu: kazananlardan önce kaybedenleri say. Uzun renkleri, ihtiyacın olan elden geriye doğru planlanmış girişlerle kur.",
          "Savunma: NT'ye seri üstünden lead; renk kontratlarında honor'dan düşük. Partner lead'inde attitude, deklarörde count sinyali."
        ]
      },
      de: {
        metaDescription:
          "Bridge-Expertenführer: Fünf-Karten-Majors, Stayman, Blackwood, negative Doubles und Eröffnungs-Konventionen für IMPs.",
        intro:
          "Bridge ist eine Partnerschafts-Biet-Sprache. Experten einigen sich auf ein System (2/1, Standard American) und gewinnen durch Kartenlesen, Prozent-Sicherheitsplays und disziplinierte Slam-Erkundung.",
        quickTips: [
          "Fünf-Karten-Majors eröffnen wenn das System es erlaubt — Klarheit über Fits.",
          "Stayman nach 1NT nutzen, um Major-Fits zu finden.",
          "Blackwood 4NT fragt nach Assen; Roman Key Card ist das moderne Upgrade.",
          "Partners Farbe anführen, außer ein passiver Lead ist klar sicherer."
        ],
        strategy: [
          "System-Disziplin: 2/1 oder Standard wählen und dabeibleiben. Partnerschaftsunfälle kosten mehr als clevere Abweichungen.",
          "Stayman und Transfers nach 1NT: 2♣ fragt Majors; Responder transferiert um Stärke zu verbergen.",
          "Negative Doubles nach Overcalls zeigen ungebotene Majors mit Eröffnungswerten.",
          "Slam-Bieten: Kontroll-Cue-Bids vor Blackwood. Key Cards nur fragen wenn fehlender König in Seitenfarbe handhabbar ist.",
          "Deklaration: Verlierer vor Gewinnern zählen. Lange Farben mit rückwärts geplanten Einstiegen etablieren.",
          "Verteidigung: Sequenz-Oberseite vs NT; tief von Honor vs Farbkontrakte. Attitude auf Partners Lead, Count auf Deklaranten."
        ]
      }
    }
  },

  poker: {
    categoryId: "card-games",
    difficulty: "complicated",
    content: {
      en: {
        metaDescription:
          "Poker strategy basics: GTO fundamentals, position, pot odds, range construction, and balanced bluff frequencies for Texas Hold'em.",
        intro:
          "Modern poker is solved in spots, not in souls. Experts think in ranges, use position to inflate value and bluff, and size bets so their story matches their line.",
        quickTips: [
          "Play tighter from early position; widen steals from the button.",
          "Calculate pot odds before calling draws — need equity to continue.",
          "Balance value bets with bluffs on scary river cards.",
          "Track bet sizing tells but trust ranges over single hands."
        ],
        strategy: [
          "GTO basics: defend the big blind at correct frequencies vs opens; don't over-fold to c-bets on dry boards where you have range advantage.",
          "Position is leverage. On the button you close the action — open wider, float more flops, and steal blinds when folds are likely.",
          "Pot odds and implied odds: a flush draw needs ~35% equity to call a half-pot bet; add implied odds only when stacks are deep and villain pays off.",
          "Range construction: your preflop open, 3-bet, and call ranges should be coherent. If you 3-bet only premiums, observant players fold everything else.",
          "Bluff frequency on rivers: if you bet pot for value with top pair+, you need enough bluffs so villain can't fold profitably. Blockers matter — ace of spades on a three-spade board is a better bluff.",
          "Bankroll and table selection beat hero calls. Move down when stressed; game quality matters as much as card skill."
        ]
      },
      tr: {
        metaDescription:
          "Poker stratejisi: GTO temelleri, pozisyon, pot oranları, range kurulumu ve Texas Hold'em'de dengeli blöf sıklığı.",
        intro:
          "Modern poker noktalarda çözülür. Uzmanlar range düşünür, pozisyonla değeri şişirir ve hikayesiyle uyumlu bahis boyutu seçer.",
        quickTips: [
          "Erken pozisyondan daha sıkı oyna; butondan geniş çal.",
          "Draw'larda pas vermeden önce pot oranını hesapla.",
          "Korkutucu river kartlarında değer bahislerini blöflerle dengele.",
          "Bahis boyutu tellerini izle ama tek ele değil range'e güven."
        ],
        strategy: [
          "GTO temelleri: büyük blind'i açılışlara doğru sıklıkta savun; kuru tahtalarda range avantajın varken c-bet'e aşırı fold etme.",
          "Pozisyon kaldıraçtır. Butonda aksiyonu kapatırsın — daha geniş aç, daha çok float, fold olasılığı yüksekken blind çal.",
          "Pot ve implied odds: floş draw yarım pot bahiste yaklaşık yüzde 35 equity ister; implied odds yalnızca derin stack ve ödeme varsa eklenir.",
          "Range kurulumu: preflop açış, 3-bet ve call range'lerin tutarlı olsun. Yalnızca premium 3-bet edersen gözlemci rakipler geri çekilir.",
          "River blöf sıklığı: pot değer bahsi top pair+ ile yapıyorsan, rakibin karlı fold edememesi için yeterli blöf gerekir. Blocker önemlidir.",
          "Bankroll ve masa seçimi hero call'dan üstündür. Stresliyken aşağı in; oyun kalitesi kart becerisi kadar önemlidir."
        ]
      },
      de: {
        metaDescription:
          "Poker-Strategie: GTO-Grundlagen, Position, Pot Odds, Range-Konstruktion und ausgewogene Bluff-Frequenzen für Texas Hold'em.",
        intro:
          "Modernes Poker wird in Spots gelöst. Experten denken in Ranges, nutzen Position für Value und Bluffs, und wählen Einsatzgrößen passend zur Story.",
        quickTips: [
          "Aus früher Position tighter spielen; vom Button breiter stehlen.",
          "Pot Odds vor Draw-Calls berechnen — Equity muss reichen.",
          "Value-Bets mit Bluffs auf scary River-Karten balancieren.",
          "Bet-Sizing-Tells tracken, aber Ranges über Einzelhände vertrauen."
        ],
        strategy: [
          "GTO-Grundlagen: Big Blind korrekt gegen Opens verteidigen; nicht over-folden vs C-Bets auf trockenen Boards mit Range-Vorteil.",
          "Position ist Hebel. Am Button schließt du die Action — breiter öffnen, mehr floaten, Blinds stehlen wenn Folds wahrscheinlich.",
          "Pot und Implied Odds: Flush-Draw braucht ~35% Equity vs Halbpot-Call; Implied Odds nur bei tiefen Stacks und Payoff.",
          "Range-Konstruktion: Preflop-Open, 3-Bet und Call-Ranges kohärent halten.",
          "Bluff-Frequenz am River: genug Bluffs für profitable Value-Bets; Blocker zählen.",
          "Bankroll und Table Selection schlagen Hero Calls. Bei Stress runterstufen."
        ]
      }
    }
  },

  blackjack: {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Blackjack basic strategy, when to double and split, why insurance is -EV, and card counting fundamentals for serious players.",
        intro:
          "Blackjack is beatable with perfect basic strategy and optional counting. The house edge shrinks to near zero when you never deviate from the math on hit, stand, double, and split.",
        quickTips: [
          "Memorize basic strategy — never take insurance.",
          "Always split aces and 8s; never split 10s or 5s.",
          "Double on 11 vs dealer 2-10; on 10 vs 2-9.",
          "Assume the hole card is a 10 unless counting says otherwise."
        ],
        strategy: [
          "Basic strategy is a complete decision chart derived from billions of simulated hands. Deviation costs roughly 0.5% edge per common mistake.",
          "Soft hands (ace as 11): double soft 17-18 vs dealer 3-6; stand on soft 19+. Treat them as flexible totals, not fixed numbers.",
          "Pair splitting: split 2s and 3s vs weak dealer upcards; never split 4s (8 total is better for doubling). Split 9s vs 2-9 except 7.",
          "Surrender where offered: hard 16 vs 10 and 15 vs 10 are canonical give-up spots that save long-run money.",
          "Hi-Lo counting basics: +1 low cards, -1 high cards, bet spread with true count. Penetration and table rules matter more than genius.",
          "Bankroll discipline: even with an edge, variance is brutal. 200+ max bets in reserve or don't play seriously."
        ]
      },
      tr: {
        metaDescription:
          "Blackjack temel strateji, double ve split zamanlaması, sigortanın neden -EV olduğu ve kart sayma temelleri.",
        intro:
          "Blackjack mükemmel temel strateji ve isteğe bağlı saymayla yenilebilir. Hit, stand, double ve split'te matematikten sapmadığında kasa avantajı sıfıra yaklaşır.",
        quickTips: [
          "Temel stratejiyi ezberle — asla sigorta alma.",
          "As ve 8'leri her zaman böl; 10 ve 5'leri asla bölme.",
          "11'de krupiye 2-10'a double; 10'da 2-9'a double.",
          "Sayma söylemedikçe kapalı kartın 10 olduğunu varsay."
        ],
        strategy: [
          "Temel strateji milyarlarca simülasyondan türetilmiş tam karar tablosudur. Sapma başına yaklaşık yüzde 0,5 edge kaybettirir.",
          "Yumuşak eller (as 11): krupiye 3-6'ya soft 17-18 double; soft 19+ stand. Esnek toplam olarak düşün.",
          "Çift bölme: zayıf krupiye kartına 2 ve 3 böl; 4 asla (8 toplamı double için daha iyi). 9'ları 7 hariç 2-9'a böl.",
          "Surrender sunulan yerde: sert 16 vs 10 ve 15 vs 10 klasik pes etme noktalarıdır.",
          "Hi-Lo sayma: düşük +1, yüksek -1, true count ile bahis. Penetrasyon ve kurallar dehadan önemlidir.",
          "Bankroll disiplini: edge olsa bile varyans acımasızdır. 200+ max bahis rezervi olmadan ciddi oynama."
        ]
      },
      de: {
        metaDescription:
          "Blackjack Basic Strategy, Double- und Split-Timing, warum Insurance -EV ist, und Kartenzählen-Grundlagen.",
        intro:
          "Blackjack ist mit perfekter Basic Strategy und optionalem Zählen schlagbar. Der Hausvorteil schrumpft auf nahe null bei mathematisch korrekten Entscheidungen.",
        quickTips: [
          "Basic Strategy auswendig — nie Insurance nehmen.",
          "Asse und 8er immer splitten; 10er und 5er nie.",
          "Bei 11 vs Dealer 2-10 verdoppeln; bei 10 vs 2-9.",
          "Hole Card als 10 annehmen, außer Zählen sagt anderes."
        ],
        strategy: [
          "Basic Strategy ist eine vollständige Entscheidungstabelle aus Milliarden simulierter Hände.",
          "Soft Hands: soft 17-18 vs Dealer 3-6 verdoppeln; soft 19+ stehen.",
          "Paare splitten: 2er und 3er vs schwache Dealer; 4er nie splitten.",
          "Surrender: harte 16 vs 10 und 15 vs 10 sind kanonische Aufgabe-Spots.",
          "Hi-Lo-Zählen: niedrig +1, hoch -1, True Count für Einsätze.",
          "Bankroll-Disziplin: selbst mit Edge ist Varianz brutal. 200+ Max-Bets Reserve."
        ]
      }
    }
  },

  rummy: {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Rummy expert tips: minimize deadwood, extend melds before discarding, read opponent pickups, and time your knock or layoff.",
        intro:
          "Rummy rewards players who reduce deadwood while watching the discard pile like a ledger. Every pickup reveals opponent intent; every discard is a gift or a trap.",
        quickTips: [
          "Prioritize melds that use high deadwood cards first.",
          "Watch what opponents pick — it exposes their meld shape.",
          "Hold middle connectors (6-7-8) for flexible meld extension.",
          "Discard cards that cannot help opponents more than you."
        ],
        strategy: [
          "Deadwood minimization beats speed. A hand with two small melds and 15 deadwood loses to a slower build that reaches gin.",
          "Discard pile discipline: picking up signals commitment. Only take if the card completes a meld or unlocks two-card flexibility.",
          "Layoff timing in knock rummy: attach to opponent melds only when it drops your deadwood below the knock threshold without helping them go out next turn.",
          "Block discards: if an opponent needs 7s, your 7 is safer in hand than as a discard — but deadwood pressure may force the risk.",
          "Endgame counting: track which ranks are exhausted. Drawing a dead rank is worse than a high deadwood card you can meld."
        ]
      },
      tr: {
        metaDescription:
          "Rummy uzman ipuçları: ölü kartları minimize et, atmadan önce perleri genişlet, rakip çekimlerini oku, knock zamanlaması.",
        intro:
          "Rummy, ölü kartları azaltırken atık yığınını defter gibi izleyenlere ödül verir. Her çekim rakip niyetini açığa çıkarır.",
        quickTips: [
          "Önce yüksek ölü kartları kullanan perleri önceliklendir.",
          "Rakiplerin ne çektiğini izle — per şeklini gösterir.",
          "Esnek per için orta bağlayıcıları (6-7-8) tut.",
          "Rakiplere senden fazla yardım etmeyecek kartları at."
        ],
        strategy: [
          "Ölü kart minimizasyonu hızdan üstündür. İki küçük per ve 15 ölü kart, gin'e ulaşan yavaş yapıya kaybeder.",
          "Atık yığını disiplini: çekmek taahhüt sinyalidir. Yalnızca per tamamlıyorsa veya iki kartlı esneklik açıyorsa al.",
          "Knock rummy'de layoff: yalnızca ölü kartı eşiğin altına indirirken rakibin sonraki tur çıkmasına yardım etmiyorsa yap.",
          "Blok atış: rakip 7 istiyorsa 7'ni elde tutmak daha güvenli olabilir.",
          "Oyun sonu sayımı: hangi değerler tükendi takip et."
        ]
      },
      de: {
        metaDescription:
          "Rummy-Experten-Tipps: Deadwood minimieren, Melds erweitern, Gegner-Abholverhalten lesen, Klopf-Timing.",
        intro:
          "Rummy belohnt Spieler, die Deadwood reduzieren und den Abwurfstapel wie ein Register lesen. Jede Abnahme verrät Gegnerabsicht.",
        quickTips: [
          "Melds priorisieren, die hohe Deadwood-Karten nutzen.",
          "Beobachten was Gegner abheben — zeigt Meld-Form.",
          "Mittlere Verbinder (6-7-8) für flexible Melds halten.",
          "Karten abwerfen, die Gegnern nicht mehr helfen als dir."
        ],
        strategy: [
          "Deadwood-Minimierung schlägt Tempo. Zwei kleine Melds und 15 Deadwood verlieren gegen langsamen Gin-Aufbau.",
          "Abwurfstapel-Disziplin: Abheben signalisiert Commitment. Nur wenn Meld komplettiert oder Flexibilität entsteht.",
          "Layoff-Timing: nur an Gegner-Melds anlegen wenn Deadwood unter Klopf-Schwelle ohne Gegner-Out nächste Runde.",
          "Block-Abwürfe: wenn Gegner 7er braucht, 7 in Hand kann sicherer sein.",
          "Endspiel-Zählen: welche Ränge erschöpft sind tracken."
        ]
      }
    }
  },

  "gin-rummy": {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Gin Rummy strategy: knock at 8-10 deadwood, avoid undercuts, retain middle cards, and read opponent discards for meld shape.",
        intro:
          "Gin Rummy is a race to minimal deadwood. Experts knock early when ahead on score and play for gin when the discard pile reveals opponent weakness.",
        quickTips: [
          "Knock at 8-10 deadwood when opponent's hand looks strong.",
          "Never break a completed meld to knock — undercut risk spikes.",
          "Keep 5-6-7 connectors over isolated face cards.",
          "Discard high deadwood that cannot fit opponent melds."
        ],
        strategy: [
          "Knock threshold shifts with score: when behind, chase gin; when ahead, knock at 6-7 deadwood to limit opponent gin bonus.",
          "Undercut math: knocking with 9 deadwood risks opponent at 8 or less. Estimate their deadwood from pickups before knocking.",
          "Middle card retention: 4-5-6-7-8 form more meld combinations than 10-J-Q. Face cards are deadwood magnets late.",
          "Discard reading: three consecutive picks in one suit means opponent is committed — deny that suit's key ranks.",
          "Knock vs gin EV: gin pays 25+ bonus; only pursue when deadwood cannot drop below 10 in two draws.",
          "Defensive discards late: when opponent has not knocked through 15+ cards, assume low deadwood and break your own risky extensions."
        ]
      },
      tr: {
        metaDescription:
          "Gin Rummy stratejisi: 8-10 ölü kartla knock, undercut'tan kaçın, orta kartları tut, rakip atışlarından per oku.",
        intro:
          "Gin Rummy minimum ölü karta yarıştır. Uzmanlar skor öndeyken erken knock eder, rakip zayıflığı görünce gin peşinde koşar.",
        quickTips: [
          "Rakip eli güçlü görünüyorsa 8-10 ölü kartla knock et.",
          "Knock için tamamlanmış peri bozma — undercut riski artar.",
          "İzole figür kartları yerine 5-6-7 bağlayıcılarını tut.",
          "Rakip perlerine uymayan yüksek ölü kartları at."
        ],
        strategy: [
          "Knock eşiği skora göre değişir: gerideyken gin kovala; öndeyken 6-7 ölü kartla knock et.",
          "Undercut matematiği: 9 ölü kartla knock, 8 veya altındaki rakibe undercut riski verir.",
          "Orta kart tutma: 4-5-6-7-8 daha fazla per kombinasyonu oluşturur.",
          "Atış okuma: bir renkte üç ardışık çekim taahhüt demektir — o rengin anahtar değerlerini kes.",
          "Knock vs gin EV: gin 25+ bonus verir; iki çekmede 10 altına inemiyorsan gin kovala.",
          "Geç savunma atışları: 15+ kart knock yoksa düşük ölü kart varsay."
        ]
      },
      de: {
        metaDescription:
          "Gin Rummy Strategie: bei 8-10 Deadwood klopfen, Undercuts vermeiden, Mittelkarten halten, Gegner-Abwürfe lesen.",
        intro:
          "Gin Rummy ist ein Rennen zu minimalem Deadwood. Experten klopfen früh bei Führung und jagen Gin wenn der Abwurfstapel Schwäche zeigt.",
        quickTips: [
          "Bei 8-10 Deadwood klopfen wenn Gegnerhand stark wirkt.",
          "Nie komplettes Meld für Klopfen brechen — Undercut-Risiko steigt.",
          "5-6-7 Verbinder über isolierte Bildkarten halten.",
          "Hohes Deadwood abwerfen das nicht in Gegner-Melds passt."
        ],
        strategy: [
          "Klopf-Schwelle verschiebt sich mit Score: hinten Gin jagen; vorne bei 6-7 Deadwood klopfen.",
          "Undercut-Math: bei 9 Deadwood klopfen riskiert Gegner bei 8 oder weniger.",
          "Mittelkarten-Retention: 4-5-6-7-8 bilden mehr Meld-Kombinationen.",
          "Abwurf-Lesen: drei aufeinanderfolgende Abnahmen in einer Farbe = Commitment.",
          "Klopf vs Gin EV: Gin zahlt 25+ Bonus; nur verfolgen wenn Deadwood nicht unter 10 in zwei Zügen.",
          "Defensive Abwürfe spät: nach 15+ Karten ohne Klopf niedriges Deadwood annehmen."
        ]
      }
    }
  },

  canasta: {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Canasta strategy: hit 3000 points via natural canastas, manage wild card ratios, freeze the pile, and time your go-out.",
        intro:
          "Canasta is meld economy. Winning partnerships balance wild-card discipline, pile control, and the 100-point go-out bonus against opponents still holding cards.",
        quickTips: [
          "Keep wild ratio at 2:1 or better in every meld.",
          "Freeze the pile with a wild card when opponents are picking aggressively.",
          "Build natural canastas (no wilds) for 500-point bonuses.",
          "Hold back one meldable card so partner can go out on your discard."
        ],
        strategy: [
          "Opening meld thresholds (50-90-120 by score) dictate tempo. Don't open thin — a failed opening wastes wilds and tempo.",
          "Wild card budget: three wilds in one meld is legal but weakens other melds. Spread wilds to maximize canasta completion count.",
          "Pile freeze is a defensive weapon. A wild on the pile stops opponents from picking up garbage into a 7-card meld.",
          "Black threes block the pile when discarded — use them to kill opponent pickup lines before they complete canastas.",
          "Go-out timing: partner must have at least one meld. Coordinate so one player holds the exit card while the other completes the last canasta.",
          "Defensive discard at end: never discard a card that lets opponent pick up and go out — discard dead cards even if they help their meld shape slightly."
        ]
      },
      tr: {
        metaDescription:
          "Canasta stratejisi: doğal canastalarla 3000 puana ulaş, joker oranını yönet, yığını dondur, çıkış zamanlaması.",
        intro:
          "Canasta per ekonomisidir. Kazanan ortaklıklar joker disiplini, yığın kontrolü ve 100 puanlık çıkış bonusunu dengeler.",
        quickTips: [
          "Her perde joker oranını 2:1 veya daha iyi tut.",
          "Rakip agresif çekiyorsa jokerle yığını dondur.",
          "500 puan bonus için doğal canastalar (jokersiz) kur.",
          "Partnerin atışla çıkabilmesi için bir perli kart sakla."
        ],
        strategy: [
          "Açılış per eşikleri (skora göre 50-90-120) tempoyu belirler. İnce açma — başarısız açılış joker ve tempo kaybettirir.",
          "Joker bütçesi: bir perde üç joker yasal ama diğer perleri zayıflatır.",
          "Yığın dondurma savunma silahıdır. Joker çöp çekip 7'li per tamamlamayı durdurur.",
          "Siyah 3'ler atıldığında yığını kapatır — rakip canasta tamamlamadan önce kullan.",
          "Çıkış zamanlaması: partnerin en az bir peri olmalı.",
          "Son savunma atışı: rakibin çekip çıkmasına izin veren kartı asla atma."
        ]
      },
      de: {
        metaDescription:
          "Canasta-Strategie: natürliche Canastas für 3000 Punkte, Joker-Verhältnis, Stapel einfrieren, Ausspiel-Timing.",
        intro:
          "Canasta ist Meld-Wirtschaft. Gewinnende Partnerschaften balancieren Joker-Disziplin, Stapel-Kontrolle und 100-Punkte-Ausspiel-Bonus.",
        quickTips: [
          "Joker-Verhältnis 2:1 oder besser in jedem Meld.",
          "Stapel mit Joker einfrieren wenn Gegner aggressiv abheben.",
          "Natürliche Canastas (ohne Joker) für 500-Punkte-Boni bauen.",
          "Eine meldbare Karte halten damit Partner auf deinem Abwurf ausgehen kann."
        ],
        strategy: [
          "Eröffnungs-Meld-Schwellen (50-90-120 nach Score) bestimmen Tempo.",
          "Joker-Budget: drei Joker in einem Meld ist legal aber schwächt andere Melds.",
          "Stapel-Freeze ist defensive Waffe gegen 7-Karten-Meld-Pickups.",
          "Schwarze Dreien blockieren den Stapel — vor Gegner-Canastas nutzen.",
          "Ausspiel-Timing: Partner muss mindestens ein Meld haben.",
          "Defensiver Abwurf am Ende: nie Karte die Gegner-Pickup und Ausspiel erlaubt."
        ]
      }
    }
  },

  cribbage: {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Cribbage expert play: maximize crib throws, pegging traps with 15s and pairs, count outs during the pegging phase, and balance offense vs defense.",
        intro:
          "Cribbage splits into hand evaluation and pegging warfare. Experts throw cards to the crib that help them more than dealer, then peg aggressively for 15s, pairs, and runs.",
        quickTips: [
          "Throw 5s and pairs to opponent's crib, not your own.",
          "Lead from a pair in pegging to trap a third card.",
          "Count to 31 and 15 during pegging — don't guess.",
          "Keep connectors (6-7-8) when holding for the pegging phase."
        ],
        strategy: [
          "Crib throw logic: as dealer, throw connected cards (5-6, 7-8) to your crib; as non-dealer, throw disjoint cards and keep 5s away from opponent crib.",
          "Pegging traps: leading a 4 invites 11-for-two (to 15); holding back a 5 after opponent leads 10 sets up 15-2.",
          "Don't break runs in hand for crib unless the run points exceed crib risk. A 6-7-8 run is 3 points pegging insurance.",
          "Position pegging: at 116+, play safe — a go or 31 is worth more than a risky pair.",
          "Muggins: always recount opponent pegging — missed points are free.",
          "Endgame dealer advantage: as dealer you peg second — use last-card advantage to land on 31 or trap opponent at 20."
        ]
      },
      tr: {
        metaDescription:
          "Cribbage uzman oyunu: crib atışlarını optimize et, 15 ve perlerle pegging tuzakları, çıkış sayımı ve denge.",
        intro:
          "Cribbage el değerlendirmesi ve pegging savaşına ayrılır. Uzmanlar crib'e kendine faydalı kart atar, sonra 15 ve perlerle agresif pegging yapar.",
        quickTips: [
          "5'leri ve perleri rakip crib'ine at, kendine değil.",
          "Pegging'de perden lead et, üçüncü kartı tuzağa çek.",
          "Pegging'de 31 ve 15'e kadar say — tahmin etme.",
          "Pegging için bağlayıcıları (6-7-8) elde tut."
        ],
        strategy: [
          "Crib atış mantığı: dağıtıcı olarak bağlı kartları (5-6, 7-8) crib'e at; dağıtıcı değilsen kopuk kart at.",
          "Pegging tuzakları: 4 lead etmek 15 için 11 davet eder; rakip 10 lead ettikten sonra 5 saklamak 15-2 kurar.",
          "Crib için eldeki seriyi bozma, seri puanı crib riskinden üstün değilse.",
          "116+ pegging'de güvenli oyna — go veya 31 riskli perden değerli.",
          "Muggins: rakip pegging'i her zaman yeniden say.",
          "Oyun sonu dağıtıcı avantajı: son kartla 31 veya 20'de tuzak kur."
        ]
      },
      de: {
        metaDescription:
          "Cribbage-Experten: Crib-Abwürfe maximieren, Pegging-Fallen mit 15ern und Paaren, Auszählen, Offense vs Defense.",
        intro:
          "Cribbage teilt sich in Handbewertung und Pegging-Krieg. Experten werfen Karten in die Crib die ihnen mehr helfen als dem Gegner.",
        quickTips: [
          "5er und Paare in Gegner-Crib werfen, nicht eigene.",
          "Aus Paar in Pegging anführen um dritte Karte zu fangen.",
          "In Pegging bis 31 und 15 zählen — nicht raten.",
          "Verbinder (6-7-8) für Pegging-Phase halten."
        ],
        strategy: [
          "Crib-Logik: als Geber verbundene Karten (5-6, 7-8) in eigene Crib; als Nicht-Geber unverbundene Karten.",
          "Pegging-Fallen: 4 anführen lädt zu 11-für-zwei (zu 15) ein.",
          "Runs in Hand nicht für Crib brechen wenn Run-Punkte Crib-Risiko übersteigen.",
          "Bei 116+ sicher peggen — Go oder 31 wertvoller als riskantes Paar.",
          "Muggins: Gegner-Pegging immer nachzählen.",
          "Endspiel Geber-Vorteil: letzte Karte für 31 oder Falle bei 20."
        ]
      }
    }
  },

  euchre: {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Euchre strategy: call trump with two bowers, second-seat aggression, going alone at 3+ point leads, and lead trump to pull opponents.",
        intro:
          "Euchre is a fast trick-taking game where bowers dominate. Seat position drives bidding aggression — second seat calls most, dealer picks up with support.",
        quickTips: [
          "Call with two trump including a bower from any seat.",
          "Second seat should call aggressively — pass only garbage.",
          "Go alone when you hold both bowers and ace of trump.",
          "Lead trump early to pull opponents' trump out."
        ],
        strategy: [
          "Bower hierarchy: right bower is unbeatable; left bower is second trump. Count bowers before calling — one bower plus ace is often enough from second seat.",
          "Second seat aggression: you see one round of passes. Call thin with two trump — waiting lets dealer pick up cheaply.",
          "Going alone: at 8-9 points, alone for 4 is match-winning. Need both bowers or right bower + ace + off-ace.",
          "Trump lead strategy: pull trump when you have length — three or more trump led early empties opponents before you cash aces.",
          "Defensive passing: in first seat, pass marginal hands to let partner call from second with more information.",
          "Stick the dealer: when everyone passes round two, dealer must call — factor this when passing as dealer's left."
        ]
      },
      tr: {
        metaDescription:
          "Euchre stratejisi: iki bower ile koz çağır, ikinci koltuk agresyonu, 3+ puan önde yalnız git, koz lead ile çek.",
        intro:
          "Euchre hızlı koz oyunudur; bower'lar hakimdir. Koltuk pozisyonu ihale agresyonunu belirler — ikinci koltuk en çok çağırır.",
        quickTips: [
          "Her koltuktan bir bower dahil iki kozla çağır.",
          "İkinci koltuk agresif çağırmalı — yalnızca çöp pas geç.",
          "İki bower ve koz ası varken yalnız git.",
          "Rakip kozlarını çekmek için erken koz lead et."
        ],
        strategy: [
          "Bower hiyerarşisi: sağ bower yenilmez; sol bower ikinci kozdur. Çağırmadan önce say — ikinci koltuktan bir bower + as genelde yeter.",
          "İkinci koltuk agresyonu: bir pas turu gördün. İki kozla ince çağır — beklemek dağıtıcının ucuz almasına izin verir.",
          "Yalnız gitme: 8-9 puanda yalnız 4 puan maçı kazanır. İki bower veya sağ bower + as + yan as gerek.",
          "Koz lead: uzunluğun varsa erken koz çek — üç+ koz rakipleri boşaltır.",
          "Savunma pası: birinci koltukta marjinal elleri pas geç, partner ikinciden bilgiyle çağırsın.",
          "Dağıtıcıya zorla: ikinci tur herkes pas geçince dağıtıcı çağırmalı — solundaki pas hesabında bunu düşün."
        ]
      },
      de: {
        metaDescription:
          "Euchre-Strategie: Trumpf mit zwei Bowers melden, zweiter Sitz Aggression, allein gehen bei 3+ Führung, Trumpf anführen.",
        intro:
          "Euchre ist ein schnelles Stichspiel wo Bowers dominieren. Sitzposition treibt Biet-Aggression — zweiter Sitz meldet am meisten.",
        quickTips: [
          "Mit zwei Trumpf inklusive Bower aus jedem Sitz melden.",
          "Zweiter Sitz aggressiv melden — nur Müll passen.",
          "Allein gehen mit beiden Bowers und Trumpf-As.",
          "Früh Trumpf anführen um gegnerischen Trumpf zu ziehen."
        ],
        strategy: [
          "Bower-Hierarchie: rechter Bower unschlagbar; linker Bower zweiter Trumpf.",
          "Zweiter Sitz Aggression: eine Pasrunde gesehen. Dünn mit zwei Trumpf melden.",
          "Allein gehen: bei 8-9 Punkten allein für 4 matchgewinnend.",
          "Trumpf-Lead: bei Länge früh Trumpf ziehen — drei+ Trumpf leert Gegner.",
          "Defensives Passen: erster Sitz marginale Hände passen.",
          "Dealer festnageln: zweite Runde alle passen — Dealer muss melden."
        ]
      }
    }
  },

  uno: {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Uno strategy: hoard Wild and Draw Four cards, time Reverse and Skip chains, track colors, and manage hand size in 4+ player games.",
        intro:
          "Uno looks random but rewards hand-size management and action card timing. Experts count colors, save Wilds for lockouts, and never hold Draw Twos when opponents are at one card.",
        quickTips: [
          "Save Wild Draw Four for opponents with 1-2 cards left.",
          "Match color over number when you have color flexibility.",
          "Play Draw Two before opponents can Uno, not after.",
          "Track which colors opponents cannot match."
        ],
        strategy: [
          "Hand size is the real life total. Two cards beats twelve — prioritize dumping count over point value until someone hits Uno.",
          "Wild card economy: +4 is your finisher. Using it mid-game on a player with 8 cards wastes the lockout potential.",
          "Color tracking: when an opponent picks up after a color change, note what they couldn't play. Lead back to that color when they're vulnerable.",
          "Action card chains: Skip-Skip or Reverse-Reverse in 2-player equals a Skip. In 4-player, Reverse skips one — count seats before playing.",
          "Defensive hold: keep one card of your dominant color as insurance when opponents have Uno — switching color forces pickup.",
          "Partnership house rules: agree whether stacking Draw cards is allowed; if yes, hoard +2s to escalate on a leader."
        ]
      },
      tr: {
        metaDescription:
          "Uno stratejisi: Wild ve +4 kartları sakla, Reverse ve Skip zincirlerini zamanla, renkleri takip et, el boyutunu yönet.",
        intro:
          "Uno rastgele görünür ama el boyutu ve aksiyon kartı zamanlamasına ödül verir. Uzmanlar renk sayar, Wild'ları kilit için saklar.",
        quickTips: [
          "Wild +4'ü 1-2 kartı kalan rakiplere sakla.",
          "Renk esnekliğin varsa sayı yerine renk eşle.",
          "Rakip Uno demeden önce +2 oyna.",
          "Rakiplerin eşleşemediği renkleri takip et."
        ],
        strategy: [
          "El boyutu gerçek can puanıdır. İki kart on ikiden üstündür — biri Uno'ya yaklaşana kadar sayıya değil sayıya öncelik ver.",
          "Wild ekonomisi: +4 bitiricindir. 8 kartlı rakibe orta oyunda kullanmak israf.",
          "Renk takibi: rakip renk değişiminden sonra çektiyse ne oynayamadığını not et.",
          "Aksiyon zincirleri: 2 kişide Reverse-Reverse Skip gibidir. 4 kişide Reverse bir atlar.",
          "Savunma: rakip Uno'dayken baskın renginden bir kart tut — renk değiştirince çekmek zorunda kalır.",
          "Ev kuralları: +2 istiflenebilir mi anlaş; evetse lider üzerine +2 biriktir."
        ]
      },
      de: {
        metaDescription:
          "Uno-Strategie: Wild und +4 horten, Reverse- und Skip-Ketten timen, Farben tracken, Handgröße managen.",
        intro:
          "Uno wirkt zufällig, belohnt aber Handgrößen-Management und Aktionskarten-Timing. Experten zählen Farben und sparen Wilds für Lockouts.",
        quickTips: [
          "Wild +4 für Gegner mit 1-2 Karten sparen.",
          "Farbe über Zahl matchen bei Farbflexibilität.",
          "+2 spielen bevor Gegner Uno sagen kann.",
          "Farben tracken die Gegner nicht matchen können."
        ],
        strategy: [
          "Handgröße ist die echte Lebenspunktzahl. Zwei Karten schlagen zwölf.",
          "Wild-Ökonomie: +4 ist dein Finisher. Mitte-Spiel auf 8-Karten-Gegner verschwendet Lockout.",
          "Farb-Tracking: wenn Gegner nach Farbwechsel zieht, notieren was er nicht spielen konnte.",
          "Aktionsketten: Reverse-Reverse zu zweit wie Skip. Zu viert überspringt Reverse einen.",
          "Defensiv halten: eine Karte der dominanten Farbe als Versicherung bei Gegner-Uno.",
          "Hausregeln: +2-Stapeln vereinbaren; wenn ja, +2s gegen Führenden horten."
        ]
      }
    }
  },

  "phase-10": {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Phase 10 strategy: complete phases early, hoard Skip-Bo cards for leaders, wild timing, and phase order planning across 10 rounds.",
        intro:
          "Phase 10 is a race through ten escalating requirements. Experts front-load hard phases when opponents are scattered and weaponize Skip cards against players about to go out.",
        quickTips: [
          "Complete your phase before laying extra cards — going out matters.",
          "Save Skip cards for the player one phase ahead of you.",
          "Use Wilds on hard phases (7s runs, 9s of one color).",
          "Lay off on opponents' phases to empty hand faster."
        ],
        strategy: [
          "Phase order planning: phases 6-8 (runs of 7, 9 of one color) are hardest. Draw aggressively early when opponents can't Skip you effectively.",
          "Skip card targeting: skip the player who will complete phase and go out this turn — not the leader in total score unless they're also closest to out.",
          "Wild allocation: one wild completes most phases. Never use wild on phase 1-3 unless it lets you go out same turn.",
          "Layoff strategy: attach to opponent completed phases to dump deadwood — going out with 0 cards beats holding for next phase.",
          "Hand retention between phases: if you complete phase 4 but can't go out, keep cards that start phase 5 to avoid dead draws.",
          "Score pressure: when behind on points, take risks to go out first; when ahead, play safe and force opponents to hold cards."
        ]
      },
      tr: {
        metaDescription:
          "Phase 10 stratejisi: fazları erken tamamla, Skip kartlarını liderlere sakla, joker zamanlaması ve 10 tur planlama.",
        intro:
          "Phase 10 on artan gereksinimli yarıştır. Uzmanlar zor fazları rakipler dağınıkken öne alır, Skip kartlarını çıkmak üzere olanlara kullanır.",
        quickTips: [
          "Ekstra kart koymadan önce fazını tamamla — çıkmak önemli.",
          "Skip kartlarını senden bir faz öndeki oyuncuya sakla.",
          "Jokerleri zor fazlarda (7'li seri, 9 aynı renk) kullan.",
          "Eli boşaltmak için rakip fazlarına ekleme yap."
        ],
        strategy: [
          "Faz sırası planlama: 6-8. fazlar en zordur. Rakipler etkili Skip atamıyken agresif çek.",
          "Skip hedefleme: bu tur faz tamamlayıp çıkacak oyuncuyu atla.",
          "Joker dağılımı: bir joker çoğu fazı tamamlar. 1-3. fazda aynı tur çıkmıyorsan joker harcama.",
          "Ekleme stratejisi: tamamlanmış fazlara ekleyerek ölü kart at — 0 kartla çıkmak üstündür.",
          "Fazlar arası el: faz 4 tamam ama çıkamıyorsan faz 5'i başlatan kartları tut.",
          "Skor baskısı: gerideyken risk al; öndeyken güvenli oyna."
        ]
      },
      de: {
        metaDescription:
          "Phase 10 Strategie: Phasen früh abschließen, Skip-Karten horten, Wild-Timing und Phasen-Reihenfolge über 10 Runden.",
        intro:
          "Phase 10 ist ein Rennen durch zehn steigende Anforderungen. Experten front-loaden harte Phasen und weaponizen Skip-Karten.",
        quickTips: [
          "Phase abschließen bevor Extra-Karten gelegt werden.",
          "Skip-Karten für Spieler eine Phase voraus sparen.",
          "Wilds auf harten Phasen (7er-Läufe, 9 einer Farbe) nutzen.",
          "An Gegner-Phasen anlegen um Hand schneller zu leeren."
        ],
        strategy: [
          "Phasen-Reihenfolge planen: Phasen 6-8 sind am härtesten.",
          "Skip-Ziel: Spieler der diese Runde Phase abschließt und ausgeht.",
          "Wild-Allokation: ein Wild schließt meiste Phasen ab.",
          "Layoff-Strategie: an abgeschlossene Gegner-Phasen anlegen.",
          "Hand-Retention zwischen Phasen: Karten für Phase 5 halten wenn Phase 4 fertig.",
          "Score-Druck: hinten Risiko; vorne sicher spielen."
        ]
      }
    }
  },

  "magic-the-gathering": {
    categoryId: "card-games",
    difficulty: "complicated",
    content: {
      en: {
        metaDescription:
          "MTG competitive basics: mana curve, card advantage, stack priority, mulligan discipline, and combat math for Constructed and Limited.",
        intro:
          "Magic is a resource engine disguised as combat. Experts curve out, trade up on card advantage, hold interaction for lethal threats, and mulligan aggressively for functional hands.",
        quickTips: [
          "Build a mana curve with most spells at 2-4 mana.",
          "Two-for-one trades (removal + draw) win long games.",
          "Hold instant-speed interaction until it changes the game.",
          "Mulligan hands with no 2-3 drop or wrong color sources."
        ],
        strategy: [
          "Mana curve theory: aggro peaks at 2 CMC, midrange at 3-4, control at 4+. A missed land drop is often worse than a weak spell.",
          "Card advantage: any draw-two, recursive creature, or planeswalker that sticks generates incremental wins. Don't trade one-for-one when you're ahead on board.",
          "Stack priority: respond at the last moment before resolution. Holding up mana signals countermagic — use that bluff even without the card.",
          "Combat math: double-blocking assigns first strike and trample correctly. Calculate lethal before attacking — don't give free two-for-ones.",
          "Mulligan to 5 in Limited with no plays; to 6 in Constructed with functional curve. London mulligan bottoming requires land-spell balance.",
          "Sideboard planning: bring in hate pieces vs their plan, not random good cards. Cut marginal matchups, not core engine pieces."
        ]
      },
      tr: {
        metaDescription:
          "MTG rekabetçi temeller: mana eğrisi, kart avantajı, stack önceliği, mulligan disiplini ve Constructed/Limited savaş matematiği.",
        intro:
          "Magic savaş kılığına girmiş kaynak motorudur. Uzmanlar eğriyle oynar, kart avantajıyla takas yapar, öldürücü tehditlere interaction saklar.",
        quickTips: [
          "Çoğu büyü 2-4 mana olan eğri kur.",
          "İki-üçlü takaslar (removal + çekme) uzun oyunları kazanır.",
          "Oyunu değiştirecek an'a kadar instant hızında interaction tut.",
          "2-3 drop veya doğru renk kaynağı olmayan elleri mulligan et."
        ],
        strategy: [
          "Mana eğrisi: aggro 2 CMC'de zirve, midrange 3-4, control 4+. Kaçırılan land drop zayıf büyüden kötü olabilir.",
          "Kart avantajı: draw-two, recursive yaratık veya planeswalker artımlı kazanç üretir.",
          "Stack önceliği: çözülmeden son ana kadar yanıt ver. Mana açık tutmak counter sinyalidir.",
          "Savaş matematiği: çift blok first strike ve trample'ı doğru atar. Saldırmadan önce lethal hesapla.",
          "Limited'de oyunu olmayan ele 5'e mulligan; Constructed'da işlevsel eğriye.",
          "Sideboard: planlarına karşı hate getir, rastgele iyi kart değil."
        ]
      },
      de: {
        metaDescription:
          "MTG-Wettbewerbsgrundlagen: Manakurve, Card Advantage, Stack-Priorität, Mulligan-Disziplin und Kampf-Math.",
        intro:
          "Magic ist eine Ressourcen-Engine im Kampf-Gewand. Experten curven aus, traden Card Advantage, halten Interaction für Lethal-Threats.",
        quickTips: [
          "Manakurve mit meisten Sprüchen bei 2-4 Mana.",
          "Zwei-für-eins-Trades (Removal + Draw) gewinnen lange Spiele.",
          "Instant-Interaction halten bis es das Spiel ändert.",
          "Mulligan ohne 2-3-Drop oder falsche Farbquellen."
        ],
        strategy: [
          "Manakurven-Theorie: Aggro bei 2 CMC, Midrange 3-4, Control 4+.",
          "Card Advantage: Draw-Two, rekursive Kreaturen, Planeswalker die bleiben.",
          "Stack-Priorität: am letzten Moment vor Resolution reagieren.",
          "Kampf-Math: Doppelblock mit First Strike und Trample korrekt.",
          "Mulligan zu 5 in Limited ohne Plays; zu 6 in Constructed mit Kurve.",
          "Sideboard: Hate gegen ihren Plan, nicht zufällige gute Karten."
        ]
      }
    }
  },

  "yu-gi-oh": {
    categoryId: "card-games",
    difficulty: "complicated",
    content: {
      en: {
        metaDescription:
          "Yu-Gi-Oh expert play: hand trap timing, combo line efficiency, graveyard as resource, board wipe recovery, and going first vs second.",
        intro:
          "Modern Yu-Gi-Oh is a combo game with interaction layers. Experts know their one-card starters, when to Ash Blossom, and how to extend through Nibiru and board breaks.",
        quickTips: [
          "Memorize your one-card combo lines to maximum board.",
          "Ash Blossom on search effects, not on random draws.",
          "Extend plays through graveyard effects before committing normal summon.",
          "Keep a breaker in hand when going second."
        ],
        strategy: [
          "Hand trap timing: Ash Blossom stops searches; Infinite Impermanence on key combo starters; Nibiru after 5 summons. Don't waste traps on low-value steps.",
          "Combo efficiency: every card in the line should advance board or extend. Cut dead draws that only work if you already have two names.",
          "Graveyard as resource: many archetypes revive from GY. Know what's live after Called by the Grave and banish interaction.",
          "Going first: aim for omni-negate + disruption + follow-up. Going second: calculate if your board clears theirs plus OTK — if not, play for grind.",
          "Board wipe recovery: Super Polymerization, Kaijus, and follow-up extenders let you play through Dark Ruler No More.",
          "Side deck: Droll vs search decks, board breakers vs combo, hand traps vs going second. Don't side out your engine."
        ]
      },
      tr: {
        metaDescription:
          "Yu-Gi-Oh uzman oyunu: hand trap zamanlaması, combo verimliliği, mezarlık kaynağı, board wipe kurtarma ve ilk/ikinci el.",
        intro:
          "Modern Yu-Gi-Oh etkileşim katmanlı combo oyunudur. Uzmanlar tek kart starter'larını, Ash Blossom anını ve Nibiru'dan uzatmayı bilir.",
        quickTips: [
          "Tek kart combo hatlarını maksimum board'a ezberle.",
          "Ash Blossom'ı arama efektlerine, rastgele çekime değil kullan.",
          "Normal summon öncesi mezarlık efektleriyle uzat.",
          "İkinci el giderken elde breaker tut."
        ],
        strategy: [
          "Hand trap zamanlaması: Ash aramayı durdurur; Impermanence combo starter'a; Nibiru 5 summon sonrası.",
          "Combo verimliliği: hattaki her kart board ilerletmeli veya uzatmalı.",
          "Mezarlık kaynağı: birçok archetype GY'den dirilir. Called by the Grave sonrası ne canlı bil.",
          "İlk el: omni-negate + disruption + follow-up. İkinci el: board temizleyip OTK hesapla.",
          "Board wipe kurtarma: Super Poly, Kaiju ve extender'lar Dark Ruler'a karşı oynatır.",
          "Side deck: Droll arama destelerine, board breaker combo'ya."
        ]
      },
      de: {
        metaDescription:
          "Yu-Gi-Oh Experten: Hand Trap Timing, Combo-Effizienz, Friedhof als Ressource, Board Wipe Recovery, First vs Second.",
        intro:
          "Modernes Yu-Gi-Oh ist ein Combo-Spiel mit Interaktionsschichten. Experten kennen One-Card-Starter, Ash Blossom-Timing und Extension durch Nibiru.",
        quickTips: [
          "One-Card-Combo-Lines zu maximalem Board auswendig.",
          "Ash Blossom auf Sucheffekte, nicht auf Zufallsdraws.",
          "Plays durch Friedhofseffekte erweitern vor Normal Summon.",
          "Breaker in Hand halten wenn Second geht."
        ],
        strategy: [
          "Hand Trap Timing: Ash stoppt Suche; Impermanence auf Combo-Starter; Nibiru nach 5 Summons.",
          "Combo-Effizienz: jede Karte in der Line muss Board voranbringen.",
          "Friedhof als Ressource: viele Archetypen reviven aus GY.",
          "First: Omni-Negate + Disruption + Follow-up. Second: OTK oder Grind berechnen.",
          "Board Wipe Recovery: Super Poly, Kaijus, Extender durch Dark Ruler.",
          "Side Deck: Droll vs Suche, Board Breaker vs Combo."
        ]
      }
    }
  },

  "pokemon-tcg": {
    categoryId: "card-games",
    difficulty: "complicated",
    content: {
      en: {
        metaDescription:
          "Pokemon TCG strategy: prize card math, energy acceleration, bench management, gust effects, and knockout sequencing for competitive play.",
        intro:
          "Pokemon TCG is prize racing with resource acceleration. Experts count prizes, manage bench slots, gust weak targets, and sequence knockouts to avoid giving up two prizes.",
        quickTips: [
          "Count prizes remaining every turn — plan two-KO turns.",
          "Never bench more than you can protect from gust.",
          "Attach energy every turn; acceleration wins races.",
          "Gust (Boss's Orders) weak targets before they evolve."
        ],
        strategy: [
          "Prize math: standard games are 6 prizes. Plan your knockout route — two triple-KO turns beat steady one-prizers when timed with energy acceleration.",
          "Bench management: five slots fill fast. Basic Pokemon on bench are liabilities if opponent gusts. Evolve or retreat before benching extras.",
          "Energy acceleration: cards like Arceus VSTAR, Koraidon, or Miraidon define meta speed. Attach from deck, discard, or abilities — never rely on one attach per turn.",
          "Gust effects: Boss's Orders and Prime Catcher snipe bench Pokemon. Gust before they evolve into threats or set up energy.",
          "Knockout sequencing: don't KO a one-prize attacker if it lets opponent bring up a two-prize threat for free. Consider passive turns.",
          "Hand disruption vs setup: Mew, Lugia, and Lost Box reward knowing when to Iono at 1-2 prizes vs when to let them whiff."
        ]
      },
      tr: {
        metaDescription:
          "Pokemon TCG stratejisi: ödül kartı matematiği, enerji hızlandırma, bench yönetimi, gust efektleri ve knockout sıralaması.",
        intro:
          "Pokemon TCG ödül yarışı ve kaynak hızlandırmadır. Uzmanlar ödülleri sayar, bench slotlarını yönetir, zayıf hedefleri gust'lar.",
        quickTips: [
          "Her tur kalan ödülleri say — iki KO turu planla.",
          "Gust'tan koruyamayacağından fazla bench'leme.",
          "Her tur enerji tak; hızlandırma yarışları kazanır.",
          "Evrimleşmeden önce zayıf hedefleri gust'la (Boss's Orders)."
        ],
        strategy: [
          "Ödül matematiği: standart 6 ödül. İki üçlü KO turu, enerji hızlandırmayla zamanlanınca istikrarlı tek ödüllüyü yener.",
          "Bench yönetimi: beş slot hızla dolar. Gust riski olan basic Pokemon yükümlülüktür.",
          "Enerji hızlandırma: Arceus VSTAR, Koraidon veya Miraidon meta hızını belirler.",
          "Gust efektleri: Boss's Orders bench Pokemon'u hedefler. Evrim öncesi gust.",
          "Knockout sıralaması: tek ödüllüyü KO etmek iki ödüllü tehdidi bedava getiriyorsa yapma.",
          "El disruption vs kurulum: Iono'yu 1-2 ödülde ne zaman kullanacağını bil."
        ]
      },
      de: {
        metaDescription:
          "Pokemon TCG Strategie: Preis-Karten-Math, Energy-Beschleunigung, Bench-Management, Gust-Effekte, Knockout-Sequenzierung.",
        intro:
          "Pokemon TCG ist Preis-Rennen mit Ressourcen-Beschleunigung. Experten zählen Preise, managen Bench-Slots und gusten schwache Ziele.",
        quickTips: [
          "Jede Runde verbleibende Preise zählen — Zwei-KO-Runden planen.",
          "Nie mehr auf Bench als du vor Gust schützen kannst.",
          "Jede Runde Energy anlegen; Beschleunigung gewinnt Rennen.",
          "Schwache Ziele gusten (Boss's Orders) bevor sie evolven."
        ],
        strategy: [
          "Preis-Math: Standard 6 Preise. Knockout-Route planen.",
          "Bench-Management: fünf Slots füllen schnell. Basic Pokemon auf Bench sind Gust-Risiko.",
          "Energy-Beschleunigung: Arceus VSTAR, Koraidon, Miraidon definieren Meta-Speed.",
          "Gust-Effekte: Boss's Orders snipen Bench-Pokemon vor Evolution.",
          "Knockout-Sequenzierung: kein Ein-Preis-KO wenn Zwei-Preis-Bedrohung gratis kommt.",
          "Hand Disruption vs Setup: Iono bei 1-2 Preisen timen."
        ]
      }
    }
  },

  "exploding-kittens": {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Exploding Kittens strategy: hoard Defuse cards, Nope timing, Skip and Attack chains, and deck probability tracking.",
        intro:
          "Exploding Kittens is probability management with take-that chaos. Experts count cards, save Defuses for late game, and use Nope to steal tempo on See the Future and Shuffle.",
        quickTips: [
          "Never waste Defuse early unless you have a backup.",
          "Nope opponent's See the Future — information is power.",
          "Skip and Attack to force opponents to draw more.",
          "Track how many Exploding Kittens remain in the deck."
        ],
        strategy: [
          "Defuse economy: early Defuse use is acceptable only with two in hand. Late game with one Defuse and thin deck is death.",
          "Nope priority: counter See the Future first, then Favor, then Shuffle. Let minor cards resolve to conserve Nopes.",
          "Skip-Attack chains: Attack forces next player to draw twice; combine with Skip to push draws onto the leader.",
          "Deck counting: with 5 players and 4 kittens left, each draw is ~20% death. Adjust aggression to remaining kittens vs cards.",
          "Streaking and Hairy Potato Cat: use low-value cards to bait Nopes before your real combo.",
          "Endgame positioning: when deck is under 10 cards, hoard Skip and Defuse; force rivals to draw with Attack."
        ]
      },
      tr: {
        metaDescription:
          "Exploding Kittens stratejisi: Defuse biriktir, Nope zamanlaması, Skip ve Attack zincirleri, deste olasılığı takibi.",
        intro:
          "Exploding Kittens olasılık yönetimi ve kaos oyunudur. Uzmanlar kart sayar, Defuse'u sona saklar, See the Future'a Nope atar.",
        quickTips: [
          "Yedek yoksa erken Defuse harcama.",
          "Rakibin See the Future'ına Nope — bilgi güçtür.",
          "Rakiplerin daha çok çekmesi için Skip ve Attack kullan.",
          "Destede kaç Exploding Kitten kaldığını takip et."
        ],
        strategy: [
          "Defuse ekonomisi: iki Defuse varken erken kullanım kabul edilebilir. Tek Defuse ve ince deste ölümdür.",
          "Nope önceliği: önce See the Future, sonra Favor, sonra Shuffle.",
          "Skip-Attack zincirleri: Attack sonraki oyuncuya çift çekim zorlar.",
          "Deste sayımı: 5 oyuncu 4 kitten ile her çekim yaklaşık yüzde 20 ölüm.",
          "Düşük değerli kartlarla Nope yemle, sonra asıl komboyu oyna.",
          "Oyun sonu: deste 10 altındayken Skip ve Defuse biriktir."
        ]
      },
      de: {
        metaDescription:
          "Exploding Kittens Strategie: Defuse horten, Nope-Timing, Skip- und Attack-Ketten, Deck-Wahrscheinlichkeit.",
        intro:
          "Exploding Kittens ist Wahrscheinlichkeits-Management mit Chaos. Experten zählen Karten und sparen Defuses für Endgame.",
        quickTips: [
          "Defuse früh nicht verschwenden ohne Backup.",
          "Gegners See the Future noppen — Information ist Macht.",
          "Skip und Attack damit Gegner mehr ziehen.",
          "Verbleibende Exploding Kittens im Deck tracken."
        ],
        strategy: [
          "Defuse-Ökonomie: früher Einsatz nur mit zwei Defuses akzeptabel.",
          "Nope-Priorität: See the Future zuerst, dann Favor, dann Shuffle.",
          "Skip-Attack-Ketten: Attack zwingt nächsten Spieler doppelt zu ziehen.",
          "Deck-Zählen: bei 5 Spielern und 4 Kittens ist jeder Zug ~20% Tod.",
          "Niedrigwertige Karten als Nope-Köder vor echtem Combo.",
          "Endgame: unter 10 Karten Skip und Defuse horten."
        ]
      }
    }
  },

  "love-letter": {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Love Letter deduction: count remaining ranks, Guard probabilities, Princess discard traps, and endgame card elimination.",
        intro:
          "Love Letter is pure deduction in 16 cards. Experts track every played card, calculate Guard odds, and engineer Princess discards when opponents hold Countess.",
        quickTips: [
          "Track all played cards — the deck is only 16 cards.",
          "Use Guard on players who haven't been targeted yet.",
          "Hold Princess until you can win or force a discard.",
          "Priest reveals — use before Guard when hands are unknown."
        ],
        strategy: [
          "Card counting: with 16 cards and 2-4 players, knowing 8 played cards makes Guard ~33% per guess. Eliminate impossible targets first.",
          "Guard targeting: aim at players who haven't been guessed — they're more likely to hold high cards opponents avoided checking.",
          "Princess trap: when you hold King or Prince, targeting a player with unknown high card can force Princess discard via Prince.",
          "Countess deduction: if Baron was played and no one died, Countess is in someone's hand paired with King — Priest confirms.",
          "Endgame with 2 players: if 5+ cards are visible, calculate exact remaining distribution before Guard guessing.",
          "Round EV: one token lead means play safe with Handmaid and Priest; when behind, Prince gambles for eliminations."
        ]
      },
      tr: {
        metaDescription:
          "Love Letter çıkarımı: kalan değerleri say, Guard olasılıkları, Princess atış tuzakları ve oyun sonu eleme.",
        intro:
          "Love Letter 16 kartlı saf çıkarımdır. Uzmanlar oynanan her kartı takip eder, Guard oranını hesaplar.",
        quickTips: [
          "Oynanan tüm kartları takip et — deste yalnızca 16 kart.",
          "Henüz hedef alınmamış oyunculara Guard kullan.",
          "Princess'i kazanana veya atışa zorlayana kadar tut.",
          "Eller bilinmiyorsa Guard öncesi Priest ile göster."
        ],
        strategy: [
          "Kart sayımı: 8 kart oynandıysa Guard tahmini yaklaşık yüzde 33.",
          "Guard hedefleme: henüz tahmin edilmemiş oyuncular yüksek kart tutma olasılığı yüksek.",
          "Princess tuzağı: King veya Prince ile bilinmeyen yüksek kartlı oyuncuyu Prince ile Princess attır.",
          "Countess çıkarımı: Baron oynandı ve kimse ölmediyse Countess bir elde King ile.",
          "2 oyuncu oyun sonu: 5+ kart görünürse Guard öncesi dağılımı hesapla.",
          "Bir jeton önde güvenli oyna; geride Prince ile kumar."
        ]
      },
      de: {
        metaDescription:
          "Love Letter Deduktion: verbleibende Ränge zählen, Guard-Wahrscheinlichkeiten, Princess-Abwurf-Fallen.",
        intro:
          "Love Letter ist reine Deduktion in 16 Karten. Experten tracken jede gespielte Karte und berechnen Guard-Odds.",
        quickTips: [
          "Alle gespielten Karten tracken — Deck nur 16 Karten.",
          "Guard auf noch nicht anvisierte Spieler.",
          "Princess halten bis Sieg oder erzwungener Abwurf.",
          "Priest vor Guard wenn Hände unbekannt."
        ],
        strategy: [
          "Kartenzählen: bei 8 gespielten Karten ~33% Guard-Treffer.",
          "Guard-Ziel: Spieler die noch nicht geraten wurden.",
          "Princess-Falle: King oder Prince zwingt Princess-Abwurf via Prince.",
          "Countess-Deduktion: Baron gespielt ohne Tod = Countess mit King.",
          "Endgame zu zweit: bei 5+ sichtbaren Karten exakte Verteilung berechnen.",
          "Ein Token Führung = sicher mit Handmaid; hinten Prince-Gambles."
        ]
      }
    }
  },

  "sushi-go": {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Sushi Go draft strategy: deny opponent pudding, wasabi-nigiri pairing, maki majority fights, and draft tempo across three rounds.",
        intro:
          "Sushi Go is simultaneous draft with visible denial. Experts pair Wasabi with Nigiri, fight for pudding majority late, and hate-draft opponent sets.",
        quickTips: [
          "Take Wasabi only when Nigiri is likely next pick.",
          "Fight for pudding in round 3 — it swings 6+ points.",
          "Hate-draft opponent's almost-complete maki or tempura sets.",
          "Dumplings scale — a third dumpling is worth more than the first."
        ],
        strategy: [
          "Wasabi-Nigiri pairing: Wasabi alone is 0 points. Draft Wasabi only when two or more Nigiri remain in the pack you're passing.",
          "Pudding endgame: pudding is scored last and swings ±6. In round 3, take pudding over a 3-point card if opponent leads pudding count.",
          "Maki majority: one maki is worthless; three maki fights for 6/3. Count opponent maki before committing — split points if you can't win majority.",
          "Tempura and Sashimi sets: complete pairs only. Half a set is negative EV — pass incomplete pieces unless blocking opponent completion.",
          "Draft denial: if opponent needs one squid for sashimi and you see it, take it even for 0 points when the swing is 10.",
          "Chopsticks timing: save for a double-pick round when two high cards appear — pudding + nigiri or wasabi + nigiri combos."
        ]
      },
      tr: {
        metaDescription:
          "Sushi Go draft stratejisi: rakip pudding'ini engelle, wasabi-nigiri eşleştirme, maki çoğunluk savaşları ve üç tur tempo.",
        intro:
          "Sushi Go eşzamanlı draft ve görünür engellemedir. Uzmanlar Wasabi-Nigiri eşleştirir, 3. turda pudding için savaşır.",
        quickTips: [
          "Wasabi'yı yalnızca sonraki seçimde Nigiri muhtemelse al.",
          "3. turda pudding için savaş — 6+ puan salınım yapar.",
          "Rakibin neredeyse tam maki veya tempura setini engelle.",
          "Dumpling ölçeklenir — üçüncü dumpling ilkinden değerlidir."
        ],
        strategy: [
          "Wasabi-Nigiri: tek Wasabi 0 puan. Pakette iki+ Nigiri varken Wasabi al.",
          "Pudding oyun sonu: ±6 salınım. 3. turda rakip pudding'de öndeyse 3 puanlık kart yerine pudding al.",
          "Maki çoğunluk: bir maki değersiz; üç maki 6/3 için savaşır.",
          "Tempura ve Sashimi: yalnızca tam set. Yarım set negatif EV.",
          "Draft engelleme: rakip sashimi için bir squid istiyorsa 0 puan olsa da al.",
          "Chopsticks: iki yüksek kart göründüğünde çift seçim için sakla."
        ]
      },
      de: {
        metaDescription:
          "Sushi Go Draft-Strategie: Pudding verweigern, Wasabi-Nigiri-Pairing, Maki-Mehrheit-Kämpfe, Draft-Tempo.",
        intro:
          "Sushi Go ist simultaner Draft mit sichtbarer Verweigerung. Experten paaren Wasabi-Nigiri und kämpfen in Runde 3 um Pudding.",
        quickTips: [
          "Wasabi nur wenn Nigiri nächster Pick wahrscheinlich.",
          "Runde 3 um Pudding kämpfen — schwingt 6+ Punkte.",
          "Gegners fast fertige Maki- oder Tempura-Sets hate-draften.",
          "Dumplings skalieren — dritter Dumpling wertvoller als erster."
        ],
        strategy: [
          "Wasabi-Nigiri: Wasabi allein 0 Punkte. Nur wenn zwei+ Nigiri im Pack.",
          "Pudding-Endgame: ±6 Schwung. Runde 3 Pudding über 3-Punkte-Karte.",
          "Maki-Mehrheit: ein Maki wertlos; drei Maki kämpfen um 6/3.",
          "Tempura und Sashimi: nur komplette Sets.",
          "Draft-Verweigerung: Gegners Squid für Sashimi nehmen auch für 0.",
          "Chopsticks: für Doppel-Pick wenn zwei hohe Karten erscheinen."
        ]
      }
    }
  },

  "the-mind": {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "The Mind telepathy: card spacing signals, opening hand reads, synchronized pauses, and level-by-level rhythm calibration.",
        intro:
          "The Mind is silent coordination. Experts develop micro-timing tells — how long to wait between 23 and 31 signals your hand density without breaking the no-communication rule.",
        quickTips: [
          "Short pause after low cards; longer pause before big jumps.",
          "On level 1, play instantly on 1 and hesitate before 2-3.",
          "Track which numbers have been played — never duplicate.",
          "When stuck, the longest pause holder usually has the next card."
        ],
        strategy: [
          "Spacing conventions: develop team rhythm — 0.5s per number gap is a common baseline. A hand with 12-13-14 plays in rapid succession; 12-45-78 needs long gaps.",
          "Opening reads: lowest card often plays first with minimal pause. If you hold 3, play quickly; if you hold 67, wait for mid-sequence pauses.",
          "Level scaling: higher levels add cards and lives. Recalibrate timing each level — what worked at level 4 fails at level 8 with denser hands.",
          "Stuck state resolution: when three players pause, the one with the lowest unplayed card in range should break silence. Count played cards to estimate range.",
          "Throwing star use: only on confirmed stuck states, not early frustration. Save for levels 9-12 where density causes deadlock.",
          "Life economics: one mistake costs a life. Conservative play on borderline timing beats aggressive speed that loses life 1."
        ]
      },
      tr: {
        metaDescription:
          "The Mind telepati: kart aralığı sinyalleri, açılış eli okuma, senkron duraklamalar ve seviye ritmi kalibrasyonu.",
        intro:
          "The Mind sessiz koordinasyondur. Uzmanlar mikro zamanlama ipuçları geliştirir — 23 ile 31 arası bekleme el yoğunluğunu sinyaller.",
        quickTips: [
          "Düşük kartlardan sonra kısa duraklama; büyük sıçramadan önce uzun.",
          "Seviye 1'de 1'i anında oyna, 2-3 öncesi tereddüt et.",
          "Oynanan numaraları takip et — asla tekrarlama.",
          "Tıkanınca en uzun duraklayan genelde sonraki karta sahiptir."
        ],
        strategy: [
          "Aralık konvansiyonları: takım ritmi geliştir — numara başına 0,5 sn yaygın tabandır.",
          "Açılış okumaları: en düşük kart genelde minimal duraklamayla önce oynanır.",
          "Seviye ölçekleme: her seviyede zamanlamayı yeniden kalibre et.",
          "Tıkanma çözümü: üç oyuncu duraklayınca aralıktaki en düşük kartı oynasın.",
          "Yıldız kullanımı: yalnızca doğrulanmış tıkanmada, erken hayal kırıklığında değil.",
          "Can ekonomisi: sınırda muhafazakar oyun agresif hızdan üstündür."
        ]
      },
      de: {
        metaDescription:
          "The Mind Telepathie: Kartenabstands-Signale, Eröffnungs-Reads, synchronisierte Pausen, Level-Rhythmus.",
        intro:
          "The Mind ist stille Koordination. Experten entwickeln Mikro-Timing-Tells — Pausen zwischen 23 und 31 signalisieren Handdichte.",
        quickTips: [
          "Kurze Pause nach tiefen Karten; lange vor großen Sprüngen.",
          "Level 1: sofort auf 1 spielen, zögern vor 2-3.",
          "Gespielte Zahlen tracken — nie duplizieren.",
          "Bei Stock: längste Pause hat meist nächste Karte."
        ],
        strategy: [
          "Abstands-Konventionen: Team-Rhythmus — 0,5s pro Zahlenlücke als Basis.",
          "Eröffnungs-Reads: tiefste Karte spielt oft zuerst mit minimaler Pause.",
          "Level-Skalierung: Timing jedes Level neu kalibrieren.",
          "Stock-Zustand: bei drei Pausen tiefste Karte im Bereich spielen.",
          "Stern-Einsatz: nur bei bestätigtem Stock, nicht früher Frustration.",
          "Leben-Ökonomie: konservatives Timing schlägt aggressive Geschwindigkeit."
        ]
      }
    }
  },

  hanabi: {
    categoryId: "card-games",
    difficulty: "complicated",
    content: {
      en: {
        metaDescription:
          "Hanabi conventions: play clues vs color clues, chop signals, finesses, blind plays, and clue efficiency for perfect scores.",
        intro:
          "Hanabi is a cooperative clue economy. Experts use conventional signals — play clues, chop, finesses — to extract maximum information from every precious clue token.",
        quickTips: [
          "Give play clues on the newest card when possible.",
          "Chop clue (clue the discardable card) saves future clues.",
          "Never clue a card that is already known-playable.",
          "Blind play only when convention guarantees safety."
        ],
        strategy: [
          "Play clue convention: a number clue on one card means 'play your newest card of that number.' A color clue on one card means 'play your newest of that color.'",
          "Chop signal: cluing the oldest unclued card in hand tells partner the other cards are safe to discard. Saves clues long-term.",
          "Finesse: clue a color on player to your left when the card is actually playable from your hand — they pause, you play underneath.",
          "Clue efficiency: each clue should identify 2+ cards or enable a play. Cluing one playable card when you could clue three is waste.",
          "Discard timing: rightmost card is chop unless clued. Never discard without checking if partner's clue made a card known-safe.",
          "Endgame: at 0 clues, every discard must be chop-safe. Track which 5s are played — missing 5s block suits from completion."
        ]
      },
      tr: {
        metaDescription:
          "Hanabi konvansiyonları: oynat ipuçları, chop sinyalleri, finesse, kör oynama ve ipucu verimliliği.",
        intro:
          "Hanabi işbirlikçi ipucu ekonomisidir. Uzmanlar play clue, chop ve finesse konvansiyonlarıyla her ipucudan maksimum bilgi çıkarır.",
        quickTips: [
          "Mümkünse en yeni karta oynat ipucu ver.",
          "Chop ipucu (atılabilir karta ipucu) gelecek ipuçlarını korur.",
          "Zaten bilinen oynanabilir karta ipucu verme.",
          "Kör oynama yalnızca konvansiyon güvenliği garanti ediyorsa."
        ],
        strategy: [
          "Oynat ipucu konvansiyonu: tek karta sayı ipucu 'o sayıdaki en yeni kartını oyna' demektir.",
          "Chop sinyali: eldeki en eski ipucsuz karta ipucu, diğerlerinin güvenle atılabileceğini söyler.",
          "Finesse: soldaki oyuncuya renk ipucu ver ama kart aslında senin elinden oynanabilir — onlar duraklar, sen altından oynarsın.",
          "İpucu verimliliği: her ipucu 2+ kart tanımlamalı veya oynatmayı sağlamalı.",
          "Atış zamanlaması: en sağdaki kart chop'tur. Partner ipucu güvenli yaptıysa kontrol et.",
          "Oyun sonu: 0 ipucuda her atış chop-güvenli olmalı. Hangi 5'ler oynandı takip et."
        ]
      },
      de: {
        metaDescription:
          "Hanabi-Konventionen: Play-Clues, Chop-Signale, Finessen, Blind Plays und Hinweis-Effizienz.",
        intro:
          "Hanabi ist kooperative Hinweis-Ökonomie. Experten nutzen Play-Clues, Chop und Finessen für maximale Information pro Hinweis.",
        quickTips: [
          "Play-Clues auf neueste Karte wenn möglich.",
          "Chop-Clue (Hinweis auf abwerfbare Karte) spart Hinweise.",
          "Nie Hinweis auf bereits bekannte spielbare Karte.",
          "Blind Play nur wenn Konvention Sicherheit garantiert."
        ],
        strategy: [
          "Play-Clue-Konvention: Zahl-Hinweis auf eine Karte = 'spiele neueste dieser Zahl.'",
          "Chop-Signal: Hinweis auf älteste ungehinweiste Karte = andere sicher abwerfbar.",
          "Finesse: Farb-Hinweis links wenn Karte eigentlich aus deiner Hand spielbar.",
          "Hinweis-Effizienz: jeder Hinweis soll 2+ Karten identifizieren.",
          "Abwurf-Timing: rechteste Karte ist Chop. Partner-Hinweis auf Sicherheit prüfen.",
          "Endgame: bei 0 Hinweisen jeder Abwurf Chop-sicher. Welche 5er gespielt tracken."
        ]
      }
    }
  },

  "star-realms": {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Star Realms deckbuilding: trade vs combat balance, ally factions, base protection, and authority race tempo.",
        intro:
          "Star Realms is a lean deckbuilder race to zero authority. Experts balance trade for early economy, pivot to combat when opponent's authority stalls, and exploit faction ally chains.",
        quickTips: [
          "Buy trade early; shift to combat when deck cycles fast.",
          "Prioritize bases with defense — they stick and generate every turn.",
          "Ally abilities trigger on same-faction cards in one turn.",
          "Scrap weak cards whenever scrap abilities appear."
        ],
        strategy: [
          "Trade-combat pivot: turns 1-4 favor trade (Scout, Explorer, trade bases). By turn 5-6, combat cards should dominate if opponent authority is below 40.",
          "Faction synergy: Blob and Star Empire reward combat chains; Trade Federation and Machine Cult reward economy and scrapping. Don't mix factions without ally payoffs.",
          "Base protection: outposts must be destroyed before authority damage. A turn buying only combat into an outpost wall wastes damage.",
          "Deck thinning: scrap Explorers and weak Scouts mid-game. A 12-card deck with 6 combat cards cycles twice per turn.",
          "Authority math: 6 damage per turn from turn 7 wins in 3 turns. Calculate if you can close before opponent's next big buy.",
          "Scout rush counter: if opponent buys 4+ Scouts, race authority with bases — they lack damage tempo late."
        ]
      },
      tr: {
        metaDescription:
          "Star Realms deste kurma: ticaret vs savaş dengesi, müttefik fraksiyonlar, üs koruması ve otorite yarışı.",
        intro:
          "Star Realms sıfır otoriteye yarışan yalın deste kurma oyunudur. Uzmanlar erken ekonomi için ticaret, rakip durunca savaşa geçer.",
        quickTips: [
          "Erken ticaret al; deste hızlı döndüğünde savaşa kay.",
          "Savunmalı üsleri önceliklendir — kalır ve her tur üretir.",
          "Müttefik yetenekleri aynı tur aynı fraksiyonda tetiklenir.",
          "Scrap yeteneği görünce zayıf kartları temizle."
        ],
        strategy: [
          "Ticaret-savaş geçişi: 1-4. turlar ticaret; 5-6'da savaş kartları hakim olmalı.",
          "Fraksiyon sinerjisi: Blob ve Star Empire savaş zinciri; Trade Federation ekonomi.",
          "Üs koruması: outpost'lar otorite hasarından önce yok edilmeli.",
          "Deste inceltme: Explorer ve zayıf Scout'ları orta oyunda scrap et.",
          "Otorite matematiği: 7. turdan itibaren tur başı 6 hasar 3 turda kazanır.",
          "Scout rush karşısı: rakip 4+ Scout alırsa üslerle otorite yarış."
        ]
      },
      de: {
        metaDescription:
          "Star Realms Deckbuilding: Trade vs Combat, Ally-Fraktionen, Basis-Schutz, Authority-Rennen.",
        intro:
          "Star Realms ist schlankes Deckbuilding-Rennen zu null Authority. Experten balancieren Trade früh, pivoten zu Combat.",
        quickTips: [
          "Früh Trade kaufen; zu Combat wechseln wenn Deck schnell zyklert.",
          "Basen mit Defense priorisieren.",
          "Ally-Fähigkeiten bei gleicher Fraktion in einer Runde.",
          "Schwache Karten scrapen wenn Scrap-Fähigkeiten erscheinen."
        ],
        strategy: [
          "Trade-Combat-Pivot: Runden 1-4 Trade; ab 5-6 Combat dominieren.",
          "Fraktions-Synergie: Blob und Star Empire Combat-Ketten.",
          "Basis-Schutz: Outposts vor Authority-Schaden zerstören.",
          "Deck-Dünning: Explorer und schwache Scouts mittel-Spiel scrapen.",
          "Authority-Math: 6 Schaden pro Runde ab Runde 7 gewinnt in 3 Runden.",
          "Scout-Rush-Gegen: bei 4+ Gegner-Scouts mit Basen Authority rasen."
        ]
      }
    }
  },

  "hero-realms": {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Hero Realms strategy: champion timing, gold curve, faction focus, and health race management in competitive play.",
        intro:
          "Hero Realms adds champion combat to deckbuilding. Experts curve gold into champions, focus one or two factions, and time combat for lethal before opponent stabilizes.",
        quickTips: [
          "Buy gold-producing cards turns 1-3 before expensive champions.",
          "Champions attack immediately — time them for lethal pressure.",
          "Focus one faction for consistent ally triggers.",
          "Heal only when it buys a full extra turn of survival."
        ],
        strategy: [
          "Gold curve: aim for 4-5 gold by turn 4 to buy champions on curve. A turn with 2 gold buys nothing useful — prioritize gold cards early.",
          "Champion timing: champions attack the turn they're played. Hold a champion in hand if opponent has no guard until you can pair with action cards for lethal.",
          "Faction focus: mixing all five factions dilutes ally bonuses. Pick two complementary factions (e.g., Cleric + Fighter for heal and damage).",
          "Health race: at 15 health with opponent at 25, you must be the aggressor. Defensive buys lose the race even if they feel safe.",
          "Guard and stun: opponent champions with guard block your champions. Buy stun or direct damage to clear guards before champion attacks.",
          "Deck cycling: thin starter cards with scrap abilities. A 10-card deck sees your champion every turn."
        ]
      },
      tr: {
        metaDescription:
          "Hero Realms stratejisi: şampiyon zamanlaması, altın eğrisi, fraksiyon odağı ve can yarışı yönetimi.",
        intro:
          "Hero Realms deste kurmaya şampiyon savaşı ekler. Uzmanlar altını şampiyonlara eğrir, bir-iki fraksiyona odaklanır.",
        quickTips: [
          "Pahalı şampiyonlardan önce 1-3. turlarda altın üreten kart al.",
          "Şampiyonlar hemen saldırır — öldürücü baskı için zamanla.",
          "Tutarlı müttefik tetikleri için bir fraksiyona odaklan.",
          "Yalnızca tam ekstra tur satın alıyorsa iyileş."
        ],
        strategy: [
          "Altın eğrisi: 4. tura 4-5 altın hedefle. 2 altınlık tur işe yaramaz kart alır.",
          "Şampiyon zamanlaması: oynandığı tur saldırır. Rakipte guard yokken action ile lethal için sakla.",
          "Fraksiyon odağı: beş fraksiyon karıştırmak müttefik bonusunu sulandırır.",
          "Can yarışı: 15 can vs 25 agresör olmalısın.",
          "Guard ve stun: guard'lı şampiyonları temizlemeden saldırı yapma.",
          "Deste döngüsü: starter kartları scrap ile incelt."
        ]
      },
      de: {
        metaDescription:
          "Hero Realms Strategie: Champion-Timing, Gold-Kurve, Fraktions-Fokus, Health-Rennen.",
        intro:
          "Hero Realms fügt Champion-Kampf zum Deckbuilding hinzu. Experten curven Gold in Champions und fokussieren Fraktionen.",
        quickTips: [
          "Gold-produzierende Karten Runden 1-3 vor teuren Champions.",
          "Champions greifen sofort an — für Lethal-Druck timen.",
          "Eine Fraktion für konsistente Ally-Triggers.",
          "Heilen nur wenn es eine volle Extra-Runde kauft."
        ],
        strategy: [
          "Gold-Kurve: 4-5 Gold bis Runde 4 für Champions on curve.",
          "Champion-Timing: Champions greifen in der Runde an in der sie gespielt werden.",
          "Fraktions-Fokus: alle fünf Fraktionen verwässert Ally-Boni.",
          "Health-Rennen: bei 15 vs 25 Health musst du Aggressor sein.",
          "Guard und Stun: Gegner-Champions mit Guard blocken — erst clearen.",
          "Deck-Zyklus: Starter-Karten mit Scrap dünner machen."
        ]
      }
    }
  },

  clank: {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Clank deckbuilding: noise management, dragon attack timing, market purchases, and dungeon depth risk/reward.",
        intro:
          "Clank is push-your-luck dungeon diving. Experts buy movement and skill early, manage clank noise, and time artifact retrieval before the dragon wakes.",
        quickTips: [
          "Buy movement and skill before heavy clank cards.",
          "Retrieve artifacts before dragon attacks escalate.",
          "Remove clank cubes when market offers boots or skill.",
          "Depth rewards points but increases dragon damage risk."
        ],
        strategy: [
          "Clank noise budget: every clank card adds dragon damage potential. Keep clank below 8 cubes until you're ready to exit with an artifact.",
          "Dragon attack timing: attacks happen on dragon card reveals. Track clank in the bag — more clank means higher hit probability on your color.",
          "Market efficiency: boots and skill are tempo; swords and gold are situational. Buy movement to reach artifacts before opponents.",
          "Depth risk: level 3 artifacts score more but require deeper clank investment. Go deep only with teleport or heavy movement.",
          "Exit timing: retrieve artifact and head to surface before second major dragon attack. Surface scoring requires surviving the final attack.",
          "Monkey idol and minor artifacts: sometimes a fast minor artifact outscores a slow major when dragon is aggressive."
        ]
      },
      tr: {
        metaDescription:
          "Clank deste kurma: gürültü yönetimi, ejderha saldırı zamanlaması, market alımları ve zindan derinliği riski.",
        intro:
          "Clank şans zorlamalı zindan dalışıdır. Uzmanlar erken hareket ve beceri alır, clank gürültüsünü yönetir.",
        quickTips: [
          "Ağır clank kartlarından önce hareket ve beceri al.",
          "Ejderha saldırıları artmadan eserleri al.",
          "Market bot veya beceri sununca clank küplerini çıkar.",
          "Derinlik puan verir ama ejderha hasarı riskini artırır."
        ],
        strategy: [
          "Clank gürültü bütçesi: her clank kartı ejderha hasar potansiyeli ekler. Eserle çıkana kadar 8 küp altında kal.",
          "Ejderha saldırı zamanlaması: çantadaki clank vurma olasılığını artırır.",
          "Market verimliliği: bot ve beceri tempo; kılıç ve altın durumsal.",
          "Derinlik riski: seviye 3 eserler daha fazla puan ama daha derin clank ister.",
          "Çıkış zamanlaması: büyük ikinci saldırıdan önce yüzeye çık.",
          "Küçük eserler bazen agresif ejderhada büyük eserden hızlı puan verir."
        ]
      },
      de: {
        metaDescription:
          "Clank Deckbuilding: Lärm-Management, Drachen-Angriff-Timing, Markt-Käufe, Dungeon-Tiefe Risiko.",
        intro:
          "Clank ist Gluecksreiz-Dungeon-Diving. Experten kaufen Bewegung und Skill früh und managen Clank-Lärm.",
        quickTips: [
          "Bewegung und Skill vor schweren Clank-Karten.",
          "Artefakte holen bevor Drachen-Angriffe eskalieren.",
          "Clank-Würfel entfernen wenn Markt Boots oder Skill bietet.",
          "Tiefe belohnt Punkte aber erhöht Drachen-Schaden-Risiko."
        ],
        strategy: [
          "Clank-Lärm-Budget: unter 8 Würfel bis Artefakt-Exit bereit.",
          "Drachen-Angriff-Timing: mehr Clank = höhere Trefferwahrscheinlichkeit.",
          "Markt-Effizienz: Boots und Skill sind Tempo.",
          "Tiefen-Risiko: Level-3-Artefakte brauchen tieferen Clank-Investment.",
          "Exit-Timing: vor zweitem großen Angriff an Oberfläche.",
          "Kleine Artefakte manchmal schneller als große bei aggressivem Drachen."
        ]
      }
    }
  },

  "skip-bo": {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Skip-Bo strategy: stock pile priority, build pile sequencing, discard pile management, and Skip-Bo wild timing.",
        intro:
          "Skip-Bo is a solitaire-style race. Experts empty their stock pile first, use Skip-Bo wilds to bridge gaps, and organize discard piles for multi-card turns.",
        quickTips: [
          "Always prioritize playing from your stock pile.",
          "Use Skip-Bo cards to fill sequence gaps on build piles.",
          "Organize discard piles so you can chain multiple plays.",
          "Block opponents by building to 12 when they need low numbers."
        ],
        strategy: [
          "Stock pile priority: every card from stock advances win condition. Discard pile plays are setup — never play from discard when stock has a legal play.",
          "Skip-Bo wild timing: use wilds to complete a build pile to 12 and clear it, or to unblock stock when the next stock card is unreachable.",
          "Discard organization: keep discard piles in ascending usable order. Three organized piles enable 5+ card turns.",
          "Build pile awareness: four build piles mean four sequences. Fill gaps opponents need — if their stock is likely 7 and build is at 6, play 7 elsewhere if legal.",
          "Hand management: draw to 5 every turn. Empty hand before ending turn when possible for maximum options next draw.",
          "Endgame race: when stock is under 5, play aggressively from hand even if discard setup suffers — speed beats optimization."
        ]
      },
      tr: {
        metaDescription:
          "Skip-Bo stratejisi: stok yığını önceliği, build sıralaması, atık yığını yönetimi ve Skip-Bo joker zamanlaması.",
        intro:
          "Skip-Bo solitaire tarzı yarıştır. Uzmanlar önce stok yığınını boşaltır, Skip-Bo jokerleri boşlukları doldurmak için kullanır.",
        quickTips: [
          "Her zaman stok yığından oynamayı önceliklendir.",
          "Skip-Bo kartlarını build yığınlarındaki boşlukları doldurmak için kullan.",
          "Çoklu hamle için atık yığınlarını düzenle.",
          "Rakipler düşük sayı istediğinde 12'ye çıkarak engelle."
        ],
        strategy: [
          "Stok önceliği: stoktan her kart kazanma koşulunu ilerletir.",
          "Skip-Bo joker zamanlaması: 12'ye tamamlamak veya stoku açmak için kullan.",
          "Atık düzeni: artan kullanılabilir sırada tut. Üç düzenli yığın 5+ kartlık tur sağlar.",
          "Build farkındalığı: dört build dört seri demektir. Rakibin ihtiyacı olan boşlukları doldur.",
          "El yönetimi: her tur 5'e çek. Mümkünse turu boş elle bitir.",
          "Oyun sonu: stok 5 altındayken agresif oyna — hız optimizasyondan üstün."
        ]
      },
      de: {
        metaDescription:
          "Skip-Bo Strategie: Stock-Stapel-Priorität, Build-Stapel-Sequenz, Abwurf-Stapel-Management, Skip-Bo-Wild-Timing.",
        intro:
          "Skip-Bo ist Solitaire-artiges Rennen. Experten leeren zuerst den Stock-Stapel und nutzen Skip-Bo-Wilds für Lücken.",
        quickTips: [
          "Immer vom Stock-Stapel spielen priorisieren.",
          "Skip-Bo-Karten für Sequenzlücken auf Build-Stapeln.",
          "Abwurf-Stapel für Mehrfach-Züge organisieren.",
          "Gegner blocken durch Bau auf 12 wenn sie tiefe Zahlen brauchen."
        ],
        strategy: [
          "Stock-Priorität: jede Stock-Karte bringt Sieg näher.",
          "Skip-Bo-Wild-Timing: für 12-Vervollständigung oder Stock-Entblockung.",
          "Abwurf-Organisation: aufsteigend nutzbar halten.",
          "Build-Bewusstsein: vier Build-Stapel = vier Sequenzen.",
          "Hand-Management: auf 5 ziehen. Hand leeren wenn möglich.",
          "Endgame: unter 5 Stock aggressiv spielen."
        ]
      }
    }
  },

  "dutch-blitz": {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Dutch Blitz speed strategy: blitz pile priority, post pile management, three-card hand cycling, and call discipline.",
        intro:
          "Dutch Blitz is speed solitaire racing. Experts clear their blitz pile first, cycle the three-card hand efficiently, and only call Blitz when the pile is truly empty.",
        quickTips: [
          "Play from blitz pile before post piles or hand.",
          "Cycle three cards from hand — never hold waiting for perfect.",
          "Play any legal card immediately — speed beats planning.",
          "Call Blitz only when blitz pile is completely empty."
        ],
        strategy: [
          "Blitz pile priority: every blitz card played is -1 toward victory. Post piles are staging — play blitz whenever legal even if post setup is prettier.",
          "Hand cycling: draw three, play any legal, repeat. Don't save a 7 in hand hoping for 8 on blitz when a post pile needs it now.",
          "Post pile management: four post piles give flexibility. Start new piles with low cards; build up to free stuck blitz cards.",
          "Shared Dutch piles: anyone can play 1-10 in center. Watch opponents' speed — if they're stuck, your blitz 9 might sit while you help them by playing 8 on Dutch.",
          "Call discipline: premature Blitz call costs -2. Verify blitz pile is empty and no legal play exists before calling.",
          "Physical technique: one-hand play, card positioning, and minimal reach distance matter at competitive speed."
        ]
      },
      tr: {
        metaDescription:
          "Dutch Blitz hız stratejisi: blitz yığını önceliği, post yığını yönetimi, üç kartlı el döngüsü ve çağrı disiplini.",
        intro:
          "Dutch Blitz hızlı solitaire yarışıdır. Uzmanlar önce blitz yığınını temizler, üç kartlı eli verimli döndürür.",
        quickTips: [
          "Post yığınları ve elden önce blitz yığınından oyna.",
          "Üç kartlı eli döndür — mükemmel bekleyerek tutma.",
          "Yasal her kartı hemen oyna — hız planlamadan üstün.",
          "Blitz'i yalnızca blitz yığını tamamen boşken çağır."
        ],
        strategy: [
          "Blitz önceliği: her blitz kartı zağa -1. Post yığınları hazırlıktır.",
          "El döngüsü: üç çek, yasal oyna, tekrarla.",
          "Post yönetimi: dört post esneklik verir. Düşük kartlarla yeni post başlat.",
          "Ortak Dutch yığınları: herkes 1-10 oynayabilir. Rakip takıldıysa blitz 9'un bekleyebilir.",
          "Çağrı disiplini: erken Blitz çağrısı -2. Blitz boş ve yasal hamle yokken çağır.",
          "Fiziksel teknik: tek el oynama ve kart konumu rekabetçi hızda önemlidir."
        ]
      },
      de: {
        metaDescription:
          "Dutch Blitz Speed-Strategie: Blitz-Stapel-Priorität, Post-Stapel-Management, Drei-Karten-Hand-Zyklus.",
        intro:
          "Dutch Blitz ist Speed-Solitaire-Rennen. Experten leeren zuerst den Blitz-Stapel und zyklern die Drei-Karten-Hand.",
        quickTips: [
          "Vom Blitz-Stapel vor Post-Stapeln und Hand spielen.",
          "Drei Karten zyklern — nie auf perfekt warten.",
          "Jede legale Karte sofort spielen.",
          "Blitz nur rufen wenn Blitz-Stapel komplett leer."
        ],
        strategy: [
          "Blitz-Priorität: jede Blitz-Karte ist -1 zum Sieg.",
          "Hand-Zyklus: drei ziehen, legal spielen, wiederholen.",
          "Post-Management: vier Post-Stapel geben Flexibilität.",
          "Gemeinsame Dutch-Stapel: alle spielen 1-10 in die Mitte.",
          "Ruf-Disziplin: vorzeitiger Blitz-Ruf kostet -2.",
          "Physische Technik: Einhand-Spiel und Kartenposition bei Speed."
        ]
      }
    }
  },

  coup: {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "Coup bluffing strategy: challenge timing, action credibility, exchange value, and endgame influence counting.",
        intro:
          "Coup is social deduction with bluffing. Experts vary their tells, challenge when odds favor it, and count remaining influence to know when a coup wins.",
        quickTips: [
          "Bluff ambassador and assassin early — they're hard to disprove.",
          "Challenge when someone claims a third duke in a 3-player game.",
          "Exchange with ambassador when deck composition is unknown.",
          "Coup when opponent is at 1 influence — don't give them time."
        ],
        strategy: [
          "Challenge EV: challenge when probability opponent lacks the role exceeds 50%. Three players, two dukes claimed — third duke claim is likely bluff.",
          "Bluff credibility: if you challenged last turn and were wrong, bluff again — opponents hesitate to double-challenge.",
          "Action priority: foreign aid is safe but slow. Assassinate removes influence; steal shifts tempo. Mix actions so your pattern isn't readable.",
          "Exchange value: ambassador exchange is strongest early when deck is full. Late game, exchange risks drawing revealed cards.",
          "Endgame counting: with 4 influence left in game (2 players at 2), coup is lethal. Force blocks that waste actions.",
          "Contessa defense: claiming contessa against assassinate is pure bluff or truth — track assassin eliminations to know if contessa remains."
        ]
      },
      tr: {
        metaDescription:
          "Coup blöf stratejisi: challenge zamanlaması, aksiyon güvenilirliği, exchange değeri ve oyun sonu etki sayımı.",
        intro:
          "Coup blöflü sosyal çıkarımdır. Uzmanlar tellerini değiştirir, olasılık lehineyken challenge eder.",
        quickTips: [
          "Erken ambassador ve assassin blöfle — çürütmesi zor.",
          "3 kişilik oyunda üçüncü duke iddiasına challenge et.",
          "Deste bilinmiyorsa ambassador ile exchange yap.",
          "Rakip 1 etkideyken coup — zaman verme."
        ],
        strategy: [
          "Challenge EV: rakibin rolü olmama olasılığı yüzde 50+ ise challenge.",
          "Blöf güvenilirliği: geçen tur yanlış challenge ettiysen tekrar blöfle.",
          "Aksiyon önceliği: foreign aid güvenli ama yavaş. Assassinate etki siler.",
          "Exchange değeri: erken oyun en güçlü; geç oyun açılmış kart riski.",
          "Oyun sonu: 4 etki kaldıysa coup öldürücüdür.",
          "Contessa savunması: assassin eliminasyonlarını takip et."
        ]
      },
      de: {
        metaDescription:
          "Coup Bluff-Strategie: Challenge-Timing, Action-Glaubwürdigkeit, Exchange-Wert, Endgame-Einfluss-Zählen.",
        intro:
          "Coup ist soziale Deduktion mit Bluffen. Experten variieren Tells und challengen wenn Odds günstig.",
        quickTips: [
          "Früh Ambassador und Assassine bluffen.",
          "Bei drittem Duke-Claim in 3-Spieler-Spiel challengen.",
          "Ambassador-Exchange wenn Deck unbekannt.",
          "Coup wenn Gegner bei 1 Einfluss."
        ],
        strategy: [
          "Challenge-EV: challengen wenn Wahrscheinlichkeit ohne Rolle über 50%.",
          "Bluff-Glaubwürdigkeit: nach falschem Challenge erneut bluffen.",
          "Action-Priorität: Foreign Aid sicher aber langsam.",
          "Exchange-Wert: früh am stärksten.",
          "Endgame: bei 4 Einfluss übrig ist Coup tödlich.",
          "Contessa-Verteidigung: Assassinen-Eliminierungen tracken."
        ]
      }
    }
  },

  "the-crew": {
    categoryId: "card-games",
    difficulty: "simple",
    content: {
      en: {
        metaDescription:
          "The Crew mission strategy: limited communication, task leader logic, trump management, and suit-following to win or lose tricks on purpose.",
        intro:
          "The Crew is cooperative trick-taking with minimal communication. Experts use the limited signal wisely, let task leaders control tricks, and sometimes lose tricks deliberately to set up mission wins.",
        quickTips: [
          "Use your one communication on the most ambiguous card.",
          "Task leader should win their task trick — support with high cards.",
          "Lose tricks deliberately when your task is to avoid winning.",
          "Track trump count — when trump is exhausted, side suits are safe."
        ],
        strategy: [
          "Communication efficiency: signal highest card of a suit you need help with, or lowest if you want partner to take the trick. Never waste signal on obvious plays.",
          "Task leader priority: the mission fails if task leader doesn't complete their task. Other players sacrifice their tasks to enable the leader.",
          "Intentional trick loss: some tasks require not winning specific tricks. Duck with low cards even if you could trump.",
          "Trump management: rocket (trump) cards are scarce. Lead side suits to drain trump before task tricks in that suit.",
          "Card counting: with 40 cards and 4 players, tracking one suit's distribution enables precise ducking and forcing.",
          "Mission 50+ conventions: advanced players develop lead conventions per mission number — agree before attempting high missions."
        ]
      },
      tr: {
        metaDescription:
          "The Crew görev stratejisi: sınırlı iletişim, görev lideri mantığı, koz yönetimi ve bilerek el kaybetme.",
        intro:
          "The Crew minimal iletişimli işbirlikçi koz oyunudur. Uzmanlar tek sinyali akıllıca kullanır, bazen bilerek el kaybeder.",
        quickTips: [
          "Tek iletişimini en belirsiz karta kullan.",
          "Görev lideri görev elini kazanmalı — yüksek kartlarla destekle.",
          "Görevin kazanmamaksa bilerek el kaybet.",
          "Koz sayısını takip et — koz bitince yan renkler güvenli."
        ],
        strategy: [
          "İletişim verimliliği: yardım istediğin rengin en yükseğini veya eli almasını istediğin en düşüğünü göster.",
          "Görev lideri önceliği: lider görevini tamamlamazsa görev başarısız.",
          "Bilerek kaybetme: bazı görevler belirli elleri kazanmamayı gerektirir.",
          "Koz yönetimi: roket kartları kıt. Görev elinden önce yan renklerle koz tüket.",
          "Kart sayımı: 40 kart 4 oyuncuda bir rengin dağılımını takip etmeyi sağlar.",
          "Görev 50+ konvansiyonları: zor görevler öncesi lead anlaşması yap."
        ]
      },
      de: {
        metaDescription:
          "The Crew Missions-Strategie: begrenzte Kommunikation, Task-Leader-Logik, Trumpf-Management, absichtliches Stich-Verlieren.",
        intro:
          "The Crew ist kooperatives Stichspiel mit minimaler Kommunikation. Experten nutzen das eine Signal weise und verlieren manchmal absichtlich Stiche.",
        quickTips: [
          "Einzige Kommunikation auf die mehrdeutigste Karte.",
          "Task-Leader soll Task-Stich gewinnen — mit hohen Karten unterstützen.",
          "Absichtlich Stiche verlieren wenn Task vermeiden verlangt.",
          "Trumpf zählen — wenn Trumpf weg, Seitenfarben sicher."
        ],
        strategy: [
          "Kommunikations-Effizienz: höchste Karte der Farbe signalisieren die Hilfe braucht.",
          "Task-Leader-Priorität: Mission scheitert wenn Leader Task nicht schafft.",
          "Absichtlicher Stichverlust: manche Tasks erfordern bestimmte Stiche nicht zu gewinnen.",
          "Trumpf-Management: Raketen-Karten knapp. Seitenfarben führen um Trumpf zu drainen.",
          "Kartenzählen: bei 40 Karten und 4 Spielern Präzisions-Ducking ermöglichen.",
          "Mission 50+ Konventionen: Lead-Konventionen vor schweren Missionen vereinbaren."
        ]
      }
    }
  }
};
