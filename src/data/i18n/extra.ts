import type { Lang } from "../langs";

type UiStrings = {
  siteName: string;
  tagline: string;
  searchPlaceholder: string;
  featured: string;
  allGames: string;
  readGuide: string;
  sponsorTitle: string;
  sponsorText: string;
  sponsorCta: string;
  languages: string;
  noResults: string;
  home: string;
  pageDescription: string;
  lastUpdated: string;
  quickTips: string;
  strategy: string;
  resources: string;
  related: string;
  contributeLink: string;
  aboutLink: string;
  showAllGames: string;
  showFewerGames: string;
};

type AboutStrings = {
  title: string;
  metaDescription: string;
  intro: string;
  missionTitle: string;
  mission: string;
  contributeTitle: string;
  contribute: string;
  contributeCta: string;
};

type CategoryStrings = {
  name: string;
  description: string;
  cardSubtitle: string;
};

export const uiExtra: Record<Exclude<Lang, "en" | "tr" | "de">, UiStrings> = {
  es: {
    siteName: "Win Board Games",
    tagline: "Estrategias expertas y practicas para ganar juegos de mesa clasicos, familiares y modernos.",
    searchPlaceholder: "Buscar juegos de mesa",
    featured: "Guias destacadas",
    allGames: "Estrategias de juegos de mesa",
    readGuide: "Leer estrategia",
    sponsorTitle: "Mejor alternativa online a Catan",
    sponsorText: "Juega partidas tipo Catan online con amigos en Colonist.io.",
    sponsorCta: "Jugar en Colonist.io",
    languages: "Idiomas",
    noResults: "Ningun juego coincide con tu busqueda.",
    home: "Inicio",
    pageDescription:
      "Explora guias de estrategia por categoria y aprende tacticas de nivel experto para cientos de juegos de mesa.",
    lastUpdated: "Ultima actualizacion",
    quickTips: "Principios clave para ganar",
    strategy: "Estrategia experta",
    resources: "Recursos recomendados",
    related: "Juegos relacionados",
    contributeLink: "Contribuir en GitHub",
    aboutLink: "Sobre este sitio",
    showAllGames: "Ver todos",
    showFewerGames: "Ver menos"
  },
  fr: {
    siteName: "Win Board Games",
    tagline: "Strategies expertes et pratiques pour gagner aux jeux de societe classiques, familiaux et modernes.",
    searchPlaceholder: "Rechercher un jeu de societe",
    featured: "Guides a la une",
    allGames: "Strategies jeux de societe",
    readGuide: "Lire la strategie",
    sponsorTitle: "Meilleure alternative en ligne a Catan",
    sponsorText: "Jouez a des parties type Catan en ligne avec vos amis sur Colonist.io.",
    sponsorCta: "Jouer sur Colonist.io",
    languages: "Langues",
    noResults: "Aucun jeu ne correspond a votre recherche.",
    home: "Accueil",
    pageDescription:
      "Parcourez les guides de strategie par categorie et apprenez des tactiques de niveau expert pour des centaines de jeux.",
    lastUpdated: "Derniere mise a jour",
    quickTips: "Principes cles pour gagner",
    strategy: "Strategie experte",
    resources: "Ressources recommandees",
    related: "Jeux similaires",
    contributeLink: "Contribuer sur GitHub",
    aboutLink: "A propos du site",
    showAllGames: "Tout afficher",
    showFewerGames: "Afficher moins"
  },
  ja: {
    siteName: "Win Board Games",
    tagline: "クラシック、ファミリー、最新ボードゲームを勝ち抜くための実践的な上級者向け戦略。",
    searchPlaceholder: "ボードゲームを検索",
    featured: "注目の攻略ガイド",
    allGames: "ボードゲーム攻略",
    readGuide: "攻略を読む",
    sponsorTitle: "最高のオンラインCatan代替",
    sponsorText: "Colonist.ioで友達とCatan風ゲームをオンラインでプレイ。",
    sponsorCta: "Colonist.ioでプレイ",
    languages: "言語",
    noResults: "検索に一致するゲームがありません。",
    home: "ホーム",
    pageDescription: "カテゴリ別の攻略ガイドを閲覧し、数百のボードゲームの上級者向け戦術を学びましょう。",
    lastUpdated: "最終更新",
    quickTips: "勝つための要点",
    strategy: "上級者向け戦略",
    resources: "おすすめリソース",
    related: "関連ゲーム",
    contributeLink: "GitHubで貢献",
    aboutLink: "このサイトについて",
    showAllGames: "すべて表示",
    showFewerGames: "折りたたむ"
  },
  pt: {
    siteName: "Win Board Games",
    tagline: "Estrategias expertas e praticas para vencer jogos de tabuleiro classicos, familiares e modernos.",
    searchPlaceholder: "Buscar jogos de tabuleiro",
    featured: "Guias em destaque",
    allGames: "Estrategias de jogos de tabuleiro",
    readGuide: "Ler estrategia",
    sponsorTitle: "Melhor alternativa online ao Catan",
    sponsorText: "Jogue partidas estilo Catan online com amigos no Colonist.io.",
    sponsorCta: "Jogar no Colonist.io",
    languages: "Idiomas",
    noResults: "Nenhum jogo corresponde a sua busca.",
    home: "Inicio",
    pageDescription:
      "Explore guias de estrategia por categoria e aprenda taticas de nivel expert para centenas de jogos de tabuleiro.",
    lastUpdated: "Ultima atualizacao",
    quickTips: "Principios essenciais para vencer",
    strategy: "Estrategia expert",
    resources: "Recursos recomendados",
    related: "Jogos relacionados",
    contributeLink: "Contribuir no GitHub",
    aboutLink: "Sobre este site",
    showAllGames: "Ver todos",
    showFewerGames: "Ver menos"
  },
  zh: {
    siteName: "Win Board Games",
    tagline: "经典、家庭与现代桌游的实用专家级获胜策略。",
    searchPlaceholder: "搜索桌游",
    featured: "精选攻略",
    allGames: "桌游攻略",
    readGuide: "阅读攻略",
    sponsorTitle: "最佳在线卡坦替代品",
    sponsorText: "在 Colonist.io 与好友在线玩卡坦类桌游。",
    sponsorCta: "在 Colonist.io 游玩",
    languages: "语言",
    noResults: "没有匹配的游戏。",
    home: "首页",
    pageDescription: "按类别浏览攻略指南，学习数百款桌游的专家级战术。",
    lastUpdated: "最后更新",
    quickTips: "获胜要点",
    strategy: "专家策略",
    resources: "推荐资源",
    related: "相关游戏",
    contributeLink: "在 GitHub 贡献",
    aboutLink: "关于本站",
    showAllGames: "显示全部",
    showFewerGames: "收起"
  },
  ru: {
    siteName: "Win Board Games",
    tagline: "Ekspertnye prakticheskie strategii dlya pobe dy v klassicheskikh, semejnykh i sovremennykh nastolnykh igrakh.",
    searchPlaceholder: "Poisk nastolnykh igr",
    featured: "Izbrannye rukovodstva",
    allGames: "Strategii nastolnykh igr",
    readGuide: "Chitat strategiyu",
    sponsorTitle: "Luchshaya onlajn-alternativa Katana",
    sponsorText: "Igrajte v igry v stile Katana onlajn s druzyami na Colonist.io.",
    sponsorCta: "Igrat na Colonist.io",
    languages: "Yazyki",
    noResults: "Net igr, sootvetstvuyushchikh poisku.",
    home: "Glavnaya",
    pageDescription:
      "Prosmatrivajte rukovodstva po kategoriyam i izuchajte ekspertnye taktiki dlya soten nastolnykh igr.",
    lastUpdated: "Poslednee obnovlenie",
    quickTips: "Klyuchevye printsipy pobedy",
    strategy: "Ekspertnaya strategiya",
    resources: "Rekomenduemye resursy",
    related: "Pokhozhie igry",
    contributeLink: "Vnesti izmeneniya na GitHub",
    aboutLink: "O saite",
    showAllGames: "Pokazat vse",
    showFewerGames: "Pokazat menshe"
  },
  it: {
    siteName: "Win Board Games",
    tagline: "Strategie esperte e pratiche per vincere giochi da tavolo classici, familiari e moderni.",
    searchPlaceholder: "Cerca giochi da tavolo",
    featured: "Guide in evidenza",
    allGames: "Strategie giochi da tavolo",
    readGuide: "Leggi la strategia",
    sponsorTitle: "Migliore alternativa online a Catan",
    sponsorText: "Gioca partite stile Catan online con gli amici su Colonist.io.",
    sponsorCta: "Gioca su Colonist.io",
    languages: "Lingue",
    noResults: "Nessun gioco corrisponde alla ricerca.",
    home: "Home",
    pageDescription:
      "Sfoglia guide strategiche per categoria e impara tattiche da esperto per centinaia di giochi da tavolo.",
    lastUpdated: "Ultimo aggiornamento",
    quickTips: "Principi chiave per vincere",
    strategy: "Strategia esperta",
    resources: "Risorse consigliate",
    related: "Giochi correlati",
    contributeLink: "Contribuisci su GitHub",
    aboutLink: "Informazioni sul sito",
    showAllGames: "Mostra tutti",
    showFewerGames: "Mostra meno"
  }
};

export const aboutExtra: Record<Exclude<Lang, "en" | "tr" | "de">, AboutStrings> = {
  es: {
    title: "Sobre Win Board Games",
    metaDescription:
      "Win Board Games es una biblioteca gratuita de guias de estrategia experta para juegos de mesa. Descubre que cubre el sitio y como contribuir en GitHub.",
    intro:
      "Win Board Games es una referencia gratuita para jugadores que quieren ganar mas a menudo — no tras leer un libro, sino con una guia corta y enfocada para la proxima partida.",
    missionTitle: "Que publicamos",
    mission:
      "Cubrimos cientos de juegos de mesa: clasicos, euros, cartas, dados, palabras, fiesta, cooperativos y estrategia. Cada guia incluye principios clave, estrategia experta paso a paso y recursos para profundizar.",
    contributeTitle: "Contribuir en GitHub",
    contribute:
      "Este sitio es de codigo abierto. Si una estrategia es incorrecta, esta desactualizada o falta, puedes corregirla en GitHub: haz fork, edita los datos y abre un pull request. Cada pagina enlaza al repositorio en el pie.",
    contributeCta: "Abrir el repositorio de GitHub"
  },
  fr: {
    title: "A propos de Win Board Games",
    metaDescription:
      "Win Board Games est une bibliotheque gratuite de guides de strategie expert pour jeux de societe. Decouvrez le contenu du site et comment contribuer sur GitHub.",
    intro:
      "Win Board Games est une reference gratuite pour les joueurs qui veulent gagner plus souvent — pas apres un roman, mais avec un guide court et concentre pour la prochaine partie.",
    missionTitle: "Ce que nous publions",
    mission:
      "Nous couvrons des centaines de jeux : classiques, euros, cartes, des, mots, fete, cooperatifs et strategie. Chaque guide inclut des principes cles, une strategie experte et des ressources pour approfondir.",
    contributeTitle: "Contribuer sur GitHub",
    contribute:
      "Ce site est open source. Si une strategie est fausse, obsolete ou manquante, corrigez-la sur GitHub : forkez, editez les donnees et ouvrez une pull request. Chaque page lie le depot en pied de page.",
    contributeCta: "Ouvrir le depot GitHub"
  },
  ja: {
    title: "Win Board Games について",
    metaDescription:
      "Win Board Gamesはボードゲームの上級者向け攻略ガイドを無料で提供するサイトです。内容とGitHubでの貢献方法をご覧ください。",
    intro:
      "Win Board Gamesは、もっと勝ちたいプレイヤーのための無料リファレンスです。長文ではなく、次の対局ですぐ使える短く集中したガイドを提供します。",
    missionTitle: "掲載内容",
    mission:
      "クラシック、ユーロ、カード、ダイス、ワード、パーティ、協力、戦略ゲームなど数百タイトルをカバー。各ガイドには要点、上級者向け戦略、深掘り用リソースがあります。",
    contributeTitle: "GitHubで貢献",
    contribute:
      "このサイトはオープンソースです。攻略の誤りや不足があればGitHubで修正できます。リポジトリをフォークし、データを編集してプルリクエストを開いてください。各ページのフッターにリンクがあります。",
    contributeCta: "GitHubリポジトリを開く"
  },
  pt: {
    title: "Sobre o Win Board Games",
    metaDescription:
      "Win Board Games e uma biblioteca gratuita de guias de estrategia expert para jogos de tabuleiro. Saiba o que o site cobre e como contribuir no GitHub.",
    intro:
      "Win Board Games e uma referencia gratuita para jogadores que querem vencer com mais frequencia — nao apos um livro, mas com um guia curto e focado para a proxima partida.",
    missionTitle: "O que publicamos",
    mission:
      "Cobrimos centenas de jogos: classicos, euros, cartas, dados, palavras, festa, cooperativos e estrategia. Cada guia inclui principios-chave, estrategia expert e recursos para aprofundar.",
    contributeTitle: "Contribuir no GitHub",
    contribute:
      "Este site e open source. Se uma estrategia estiver errada, desatualizada ou faltando, corrija no GitHub: faca fork, edite os dados e abra um pull request. Cada pagina linka o repositorio no rodape.",
    contributeCta: "Abrir repositorio no GitHub"
  },
  zh: {
    title: "关于 Win Board Games",
    metaDescription:
      "Win Board Games 是免费的桌游专家攻略库。了解网站内容以及如何在 GitHub 上贡献。",
    intro:
      "Win Board Games 为想提高胜率的玩家提供免费参考——不是长篇大论，而是下一场对局就能用的简短攻略。",
    missionTitle: "我们发布的内容",
    mission:
      "涵盖经典、欧式、卡牌、骰子、文字、派对、合作与战略类数百款游戏。每篇攻略包含要点、专家级策略步骤和深入学习资源。",
    contributeTitle: "在 GitHub 贡献",
    contribute:
      "本站开源。若攻略有误、过时或缺失，可在 GitHub 直接修正：Fork 仓库、编辑数据并提交 Pull Request。每页页脚都有仓库链接。",
    contributeCta: "打开 GitHub 仓库"
  },
  ru: {
    title: "O Win Board Games",
    metaDescription:
      "Win Board Games — besplatnaya biblioteka ekspertnykh rukovodstv po nastolnykh igram. Uznaite, chto est na saite i kak pomoch na GitHub.",
    intro:
      "Win Board Games — besplatnyj spravochnik dlya igrokov, kotorye khotyat pobehdat chashche — ne posle knigi, a s korotkim sfokusirovannym rukovodstvom na sleduyushchuyu partiyu.",
    missionTitle: "Chto my publikuem",
    mission:
      "My pokryvaem sotni igr: klassicheskie, evro, karty, kosti, slova, vecherinki, kooperativnye i strategicheskie. Kazhdoe rukovodstvo soderzhit klyuchevye printsipy, ekspertnuyu strategiyu i resursy dlya uglubleniya.",
    contributeTitle: "Pomoch na GitHub",
    contribute:
      "Etot sait — open source. Esli strategiya neverna, ustarela ili otsutstvuet, ispravte na GitHub: fork, redaktirovanie dannykh i pull request. Na kazhdoj stranice est ssylka v podvale.",
    contributeCta: "Otkryt repozitorij GitHub"
  },
  it: {
    title: "Informazioni su Win Board Games",
    metaDescription:
      "Win Board Games e una biblioteca gratuita di guide strategiche esperte per giochi da tavolo. Scopri i contenuti del sito e come contribuire su GitHub.",
    intro:
      "Win Board Games e un riferimento gratuito per giocatori che vogliono vincere piu spesso — non dopo un romanzo, ma con una guida breve e mirata per la prossima partita.",
    missionTitle: "Cosa pubblichiamo",
    mission:
      "Copriamo centinaia di giochi: classici, euro, carte, dadi, parole, party, cooperativi e strategia. Ogni guida include principi chiave, strategia esperta e risorse per approfondire.",
    contributeTitle: "Contribuire su GitHub",
    contribute:
      "Questo sito e open source. Se una strategia e errata, obsoleta o mancante, correggila su GitHub: fork, modifica i dati e apri una pull request. Ogni pagina linka il repository nel footer.",
    contributeCta: "Apri il repository GitHub"
  }
};

export const categoryExtra: Record<string, Record<Exclude<Lang, "en" | "tr" | "de">, CategoryStrings>> = {
  "classic-board-games": {
    es: { name: "Juegos de mesa clasicos", description: "Juegos eternos con reglas simples y gran demanda de busqueda.", cardSubtitle: "Tacticas atemporales para ganar" },
    fr: { name: "Jeux de societe classiques", description: "Jeux intemporels aux regles simples et a forte demande.", cardSubtitle: "Tactiques intemporelles pour gagner" },
    ja: { name: "クラシックボードゲーム", description: "シンプルなルールで人気の定番ゲーム。", cardSubtitle: "不変の勝利戦術" },
    pt: { name: "Jogos de tabuleiro classicos", description: "Jogos atemporais com regras simples e alta demanda.", cardSubtitle: "Taticas atemporais para vencer" },
    zh: { name: "经典桌游", description: "规则简单、搜索量高的常青游戏。", cardSubtitle: "永恒的获胜战术" },
    ru: { name: "Klassicheskie nastolnye igry", description: "Vechnye igry s prostymi pravilami i vysokim sprosom.", cardSubtitle: "Vechnye taktiki pobedy" },
    it: { name: "Giochi da tavolo classici", description: "Giochi senza tempo con regole semplici e alta domanda.", cardSubtitle: "Tattiche senza tempo per vincere" }
  },
  "euro-board-games": {
    es: { name: "Eurogames", description: "Recursos, motores, colocacion de losetas y estrategia moderna.", cardSubtitle: "Motores y ventajas de puntuacion" },
    fr: { name: "Eurogames", description: "Ressources, moteurs, pose de tuiles et strategie moderne.", cardSubtitle: "Moteurs et avantages de score" },
    ja: { name: "ユーロゲーム", description: "リソース、エンジン構築、タイル配置の現代戦略ゲーム。", cardSubtitle: "エンジン構築と得点优势" },
    pt: { name: "Eurogames", description: "Recursos, motores, colocacao de pecas e estrategia moderna.", cardSubtitle: "Motores e vantagens de pontuacao" },
    zh: { name: "欧式桌游", description: "资源、引擎构建、板块放置与现代策略。", cardSubtitle: "引擎与得分优势" },
    ru: { name: "Evro-igry", description: "Resursy, dvizhki, ukladyvanie plitok i sovremennaya strategiya.", cardSubtitle: "Dvijhki i ochkovye preimushchestva" },
    it: { name: "Eurogames", description: "Risorse, motori, posizionamento tessere e strategia moderna.", cardSubtitle: "Motori e vantaggi di punteggio" }
  },
  "card-games": {
    es: { name: "Juegos de cartas", description: "Solitarios, bazas, fiesta y juegos de cartas coleccionables.", cardSubtitle: "Probabilidad, farol y jugadas ganadoras" },
    fr: { name: "Jeux de cartes", description: "Solitaires, atouts, fete et jeux de cartes a collectionner.", cardSubtitle: "Probabilites, bluffs et coups gagnants" },
    ja: { name: "カードゲーム", description: "ソリティア、トリックテイキング、パーティ、TCG。", cardSubtitle: "確率、ブラフ、勝ち筋" },
    pt: { name: "Jogos de cartas", description: "Solitarios, truques, festa e TCG.", cardSubtitle: "Probabilidade, blefe e jogadas vencedoras" },
    zh: { name: "卡牌游戏", description: "单人、吃墩、派对与集换式卡牌。", cardSubtitle: "概率、诈唬与致胜打法" },
    ru: { name: "Kartochные igry", description: "Pasyansy, vzyatki, vecherinki i kollektsionnye karty.", cardSubtitle: "Shansy, blef i vyigryshnye hody" },
    it: { name: "Giochi di carte", description: "Solitari, prese, party e giochi di carte collezionabili.", cardSubtitle: "Probabilita, bluff e mosse vincenti" }
  },
  "dice-games": {
    es: { name: "Juegos de dados", description: "Push-your-luck y probabilidad donde el timing importa.", cardSubtitle: "Domina riesgo y probabilidad" },
    fr: { name: "Jeux de des", description: "Prise de risque et probabilites ou le timing compte.", cardSubtitle: "Maitriser risque et probabilite" },
    ja: { name: "ダイスゲーム", description: "プッシュ・ユア・ラックと確率、タイミングが鍵。", cardSubtitle: "リスクと確率を制する" },
    pt: { name: "Jogos de dados", description: "Push-your-luck e probabilidade onde o timing importa.", cardSubtitle: "Domine risco e probabilidade" },
    zh: { name: "骰子游戏", description: "搏运气与概率，时机决定胜负。", cardSubtitle: "掌控风险与概率" },
    ru: { name: "Igrы s kostyami", description: "Risk i veroyatnost, gde vazhen timing.", cardSubtitle: "Risk i veroyatnost pod kontrolem" },
    it: { name: "Giochi di dadi", description: "Push-your-luck e probabilita dove conta il timing.", cardSubtitle: "Padroneggia rischio e probabilita" }
  },
  "word-games": {
    es: { name: "Juegos de palabras", description: "Vocabulario, pistas, ortografia y deduccion.", cardSubtitle: "Supera con palabras y pistas" },
    fr: { name: "Jeux de mots", description: "Vocabulaire, indices, orthographe et deduction.", cardSubtitle: "Gagner avec mots et indices" },
    ja: { name: "ワードゲーム", description: "語彙、ヒント、スペル、推理。", cardSubtitle: "言葉とヒントで勝つ" },
    pt: { name: "Jogos de palavras", description: "Vocabulario, pistas, ortografia e deducao.", cardSubtitle: "Venca com palavras e pistas" },
    zh: { name: "文字游戏", description: "词汇、提示、拼写与推理。", cardSubtitle: "用文字与线索取胜" },
    ru: { name: "Slovnye igry", description: "Slovar, podskazki, pravopisanie i deduktsiya.", cardSubtitle: "Pobeda slovami i podskazkami" },
    it: { name: "Giochi di parole", description: "Vocabolario, indizi, ortografia e deduzione.", cardSubtitle: "Vinci con parole e indizi" }
  },
  "party-family-games": {
    es: { name: "Fiesta y familia", description: "Juegos rapidos, sociales y faciles de ensenar.", cardSubtitle: "Lee la mesa y gana" },
    fr: { name: "Fete et famille", description: "Jeux rapides, sociaux et faciles a expliquer.", cardSubtitle: "Lire la table et gagner" },
    ja: { name: "パーティ＆ファミリー", description: "速くて社交的、教えやすいゲーム。", cardSubtitle: "テーブルを読んで勝つ" },
    pt: { name: "Festa e familia", description: "Jogos rapidos, sociais e faceis de ensinar.", cardSubtitle: "Leia a mesa e vença" },
    zh: { name: "派对与家庭", description: "快速、社交、易教的混合群组游戏。", cardSubtitle: "读懂牌桌领先一步" },
    ru: { name: "Vecherinki i semya", description: "Bystrye, sotsialnye i legko obuchaemye igry.", cardSubtitle: "Chitaj stol i pobehdaj" },
    it: { name: "Party e famiglia", description: "Giochi veloci, sociali e facili da spiegare.", cardSubtitle: "Leggi il tavolo e vinci" }
  },
  "cooperative-games": {
    es: { name: "Juegos cooperativos", description: "Planificacion en equipo, roles e informacion compartida.", cardSubtitle: "Vence al juego en equipo" },
    fr: { name: "Jeux cooperatifs", description: "Planification d'equipe, roles et information partagee.", cardSubtitle: "Battre le jeu en equipe" },
    ja: { name: "協力ゲーム", description: "チーム計画、役割分担、情報共有で勝つ。", cardSubtitle: "チームでゲームに勝つ" },
    pt: { name: "Jogos cooperativos", description: "Planejamento em equipe, papeis e informacao compartilhada.", cardSubtitle: "Venca o jogo em equipe" },
    zh: { name: "合作游戏", description: "团队规划、角色分工与信息共享。", cardSubtitle: "协力击败游戏" },
    ru: { name: "Kooperativnye igry", description: "Komandnoe planirovanie, roli i obshchaya informatsiya.", cardSubtitle: "Pobedit igru komandoj" },
    it: { name: "Giochi cooperativi", description: "Pianificazione di squadra, ruoli e informazioni condivise.", cardSubtitle: "Batti il gioco in squadra" }
  },
  "strategy-war-games": {
    es: { name: "Estrategia y guerra", description: "Conflicto, negociacion, control de area y abstractos.", cardSubtitle: "Supera y domina" },
    fr: { name: "Strategie et guerre", description: "Conflit, negociation, controle de zone et abstract.", cardSubtitle: "Manoeuvrer et dominer" },
    ja: { name: "戦略・戦争ゲーム", description: "紛争、交渉、エリア制圧、抽象戦略。", cardSubtitle: "出し抜いて支配する" },
    pt: { name: "Estrategia e guerra", description: "Conflito, negociacao, controle de area e abstractos.", cardSubtitle: "Superar e dominar" },
    zh: { name: "战略与战争", description: "冲突、谈判、区域控制与抽象战略。", cardSubtitle: "运筹帷幄，主宰全局" },
    ru: { name: "Strategiya i voina", description: "Konflikt, peregovory, kontrol territorij i abstrakty.", cardSubtitle: "Obojdi i dominiruj" },
    it: { name: "Strategia e guerra", description: "Conflitto, negoziazione, controllo area e astratti.", cardSubtitle: "Supera e domina" }
  }
};

export type { UiStrings, AboutStrings, CategoryStrings };
