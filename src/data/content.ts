export const APPLE_APP_ID = "6778191746";
export const APP_STORE_URL = `https://apps.apple.com/app/id${APPLE_APP_ID}`;
export const CONTACT_EMAIL = "sromani@gmail.com";
export const APP_LOGO_SRC = "/app-icon.png";

export const APP_TAGLINE = "Scan any chess position and analyze it instantly.";

export const LEGAL = {
  appName: "Capture Chess",
  websiteUrl: "https://diensa.com/",
  privacyUrl: "https://diensa.com/privacy",
  effectiveDate: "June 10, 2026",
  lastUpdated: "June 10, 2026",
} as const;

export const NAV_LINKS = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Screenshots" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const STEPS = [
  {
    number: "01",
    title: "Capture the position",
    description:
      "Take a photo of a real board, upload an image, start from an empty board, or import a game from Chess.com.",
    icon: "camera",
  },
  {
    number: "02",
    title: "Detect & edit",
    description:
      "On-device vision builds a legal FEN. Adjust pieces, turn, castling, or enter a FEN manually if needed.",
    icon: "scan",
  },
  {
    number: "03",
    title: "Analyze & review",
    description:
      "Stockfish evaluates the position with eval bar and arrows. Run Game Review for Chess.com-style move grades and accuracy.",
    icon: "engine",
  },
] as const;

export const FEATURES = [
  {
    title: "Board scan & recognition",
    description:
      "Camera or gallery upload with on-device vision — board detection, piece reading, and FEN validation without cloud upload.",
    icon: "board",
  },
  {
    title: "Stockfish engine analysis",
    description:
      "Local Stockfish with evaluation bar, best-move arrows, MultiPV lines, mate detection, and an editable interactive board.",
    icon: "engine",
  },
  {
    title: "Game Review",
    description:
      "Chess.com-style post-game review: move classifications (Brilliant, Great, Blunder…), accuracy scores, eval chart, and step-by-step replay.",
    icon: "review",
  },
  {
    title: "Opening explorer",
    description:
      "Browse the opening catalog with ECO codes, guided learning, and practice mode for classic lines.",
    icon: "openings",
  },
  {
    title: "Chess.com import & My games",
    description:
      "Import games from Chess.com, save positions locally, and reopen them anytime for analysis or Game Review.",
    icon: "import",
  },
  {
    title: "Offline-first",
    description:
      "Scan, analyze, study openings, and review games on your device — no server required for core features.",
    icon: "offline",
  },
] as const;

export const SCREENSHOTS = [
  {
    src: "/screenshots/mobile-home.png",
    alt: "Capture Chess home screen with Take Photo and Upload Image actions",
    title: "Home",
    caption: "Scan, upload, or open saved games",
  },
  {
    src: "/screenshots/scan-result.png",
    alt: "Scanned chess position with engine mate detection",
    title: "Scan Result",
    caption: "Instant FEN from a real board photo",
  },
  {
    src: "/screenshots/board-analysis.png",
    alt: "Interactive board with Stockfish evaluation and best-move arrows",
    title: "Analysis",
    caption: "Eval bar, engine lines, and edit board",
  },
  {
    src: "/screenshots/openings.png",
    alt: "Opening catalog with guided learning and practice",
    title: "Openings",
    caption: "Guided learning and practice mode",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How does Capture Chess detect a board from a photo?",
    answer:
      "Capture Chess uses on-device computer vision — board localization, piece detection, and FEN validation — to read any real chess board from a camera photo or gallery image. Processing stays on your phone.",
  },
  {
    question: "What is Game Review?",
    answer:
      "Game Review analyzes your completed games move by move with Chess.com-style classifications (Best, Great, Brilliant, Blunder, and more), accuracy scores, an evaluation chart, and a replay mode with coach tips. Choose Fast, Standard, or Deep analysis profiles.",
  },
  {
    question: "Can I import games from Chess.com?",
    answer:
      "Yes. Import your Chess.com games directly in the app, save them to My games, and run Stockfish analysis or full Game Review on any imported game.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Yes. After the initial model download, board scanning, Stockfish analysis, opening study, and Game Review run entirely on your device.",
  },
  {
    question: "What chess engine powers the analysis?",
    answer:
      "Stockfish runs locally on your device, providing deep evaluation, best-move suggestions, MultiPV engine arrows, and the analysis behind Game Review.",
  },
  {
    question: "Can I correct a misdetected position?",
    answer:
      "Absolutely. After scanning, you can adjust piece placement, set turn and castling rights, or enter a FEN manually before running analysis.",
  },
  {
    question: "Is Capture Chess available on Android?",
    answer:
      "Capture Chess is available on iOS. Android support is on the roadmap — contact us if you'd like to be notified.",
  },
  {
    question: "Does the app store my photos?",
    answer:
      "Photos are processed on-device for board detection. Capture Chess does not upload your images to external servers for analysis.",
  },
] as const;
