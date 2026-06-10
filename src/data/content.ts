export const APP_STORE_URL = "#app-store";
export const CONTACT_EMAIL = "sromani@gmail.com";
export const APP_LOGO_SRC = "/og-image.png";

export const LEGAL = {
  appName: "Capture Chess",
  websiteUrl: "https://capturechess.com/",
  privacyUrl: "https://capturechess.com/privacy",
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
    title: "Take a photo",
    description:
      "Point your camera at any real chess board or pick an image from your gallery.",
    icon: "camera",
  },
  {
    number: "02",
    title: "Detect the position",
    description:
      "On-device vision locates the board, reads the pieces, and builds a legal FEN.",
    icon: "scan",
  },
  {
    number: "03",
    title: "Analyze instantly",
    description:
      "Stockfish evaluates the position, suggests best moves, and explores openings.",
    icon: "engine",
  },
] as const;

export const FEATURES = [
  {
    title: "Chess board recognition",
    description:
      "Local YOLO and geometry models detect boards from any angle — no cloud upload.",
    icon: "board",
  },
  {
    title: "Engine analysis",
    description:
      "Stockfish WASM with evaluation bar, MultiPV arrows, and move history.",
    icon: "engine",
  },
  {
    title: "Opening explorer",
    description:
      "Browse and study opening lines with interactive board playback.",
    icon: "openings",
  },
  {
    title: "Guided learning",
    description:
      "Structured lessons, quizzes, and mastery tracking to improve faster.",
    icon: "learn",
  },
  {
    title: "Offline support",
    description:
      "Scan, analyze, and learn without an internet connection on your device.",
    icon: "offline",
  },
] as const;

export const SCREENSHOTS = [
  {
    src: "/screenshots/mobile-home.svg",
    alt: "Capture Chess home screen with capture actions",
    title: "Home",
    caption: "Scan or analyze from one screen",
  },
  {
    src: "/screenshots/scan-result.svg",
    alt: "Detected chess position with board overlay",
    title: "Scan Result",
    caption: "Vision overlay confirms every square",
  },
  {
    src: "/screenshots/board-analysis.svg",
    alt: "Interactive board with engine evaluation",
    title: "Analysis",
    caption: "Stockfish eval bar and best-move arrows",
  },
  {
    src: "/screenshots/openings.svg",
    alt: "Opening explorer with guided lessons",
    title: "Openings",
    caption: "Study lines with guided learning",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How does Capture Chess detect a board from a photo?",
    answer:
      "Capture Chess uses on-device computer vision — board localization, piece detection, and FEN validation — to read any real chess board from a camera photo or gallery image. Processing stays on your phone.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Yes. After the initial model download, board scanning and Stockfish analysis run entirely offline. No server is required for core features.",
  },
  {
    question: "What chess engine powers the analysis?",
    answer:
      "Stockfish WASM runs locally on your device, providing deep evaluation, best-move suggestions, and MultiPV engine arrows on the interactive board.",
  },
  {
    question: "Can I correct a misdetected position?",
    answer:
      "Absolutely. After scanning, you can adjust piece placement, set turn and castling rights, or enter a FEN manually before running analysis.",
  },
  {
    question: "Is Capture Chess available on Android?",
    answer:
      "Capture Chess is launching on iOS first. Android support is on the roadmap — join the waitlist via our contact form to get notified.",
  },
  {
    question: "Does the app store my photos?",
    answer:
      "Photos are processed on-device for board detection. Capture Chess does not upload your images to external servers for analysis.",
  },
] as const;
