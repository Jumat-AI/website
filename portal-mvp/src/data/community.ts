export interface Speaker {
  name: string;
  role: string;
  company?: string;
  avatarUrl: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface Session {
  id: string;
  sessionNumber: number;
  title: string;
  description: string;
  date: string; // ISO date string YYYY-MM-DD
  time: string; // e.g. "14:00 - 15:30 WIB"
  category: "LLM" | "Agentic AI" | "RAG" | "Generative AI" | "MLOps" | "Productivity" | "MCP & Tools";
  speaker: Speaker;
  meetUrl?: string;
  youtubeUrl?: string;
  slideUrl?: string;
  repoUrl?: string;
  keyTakeaways?: string[];
  isUpcoming?: boolean;
}

export const COMMUNITY_INFO = {
  name: "Jumat.AI.ID",
  tagline: "Komunitas Sharing & Belajar AI Mingguan",
  organizer: "Heru",
  description:
    "Ruang terbuka daring bagi praktisi, pengembang, dan antusias AI di Indonesia untuk saling berbagi pengetahuan, eksplorasi tools, bedah workflow, hingga hands-on setiap Jumat siang.",
  schedule: "Setiap Jumat, 14:00 - 15:30 WIB",
  platform: "Google Meet",
  links: {
    whatsappGroup: "https://chat.whatsapp.com/invite/dummy-jumat-ai",
    telegramGroup: "https://t.me/jumat_ai_id",
    discordServer: "https://discord.gg/dummy-jumat-ai",
    youtubeChannel: "https://www.youtube.com/@jumat-ai-id",
    githubOrg: "https://github.com/jumat-ai-id",
    callForSpeakersForm: "https://forms.gle/dummy-cfs-jumat-ai",
  },
  stats: [
    { label: "Total Pertemuan", value: "19 Sesi" },
    { label: "Rentang Agenda", value: "Jun - Nov 2026" },
    { label: "Peserta Aktif / Sesi", value: "8 - 10+ Org" },
    { label: "Biaya & Akses", value: "100% Gratis" },
  ],
};

// Sesi aktif / terdekat (Sesi #18 - Hari Ini 30 Oktober 2026)
export const UPCOMING_SESSION: Session = {
  id: "session-18",
  sessionNumber: 18,
  title: "Sharing AI #18: Bingung Bareng Comfy UI (lagi)",
  description:
    "Sesi eksplorasi interaktif dan hands-on troubleshooting seputar alur kerja ComfyUI, pemanfaatan custom nodes, instalasi checkpoint/LoRA, dan optimalisasi pipeline generative image lokal.",
  date: "2026-10-30",
  time: "14:00 - 15:30 WIB",
  category: "Generative AI",
  isUpcoming: true,
  speaker: {
    name: "Heru, Ilman Fahmi & Komunitas",
    role: "Community Organizer & AI Practitioner",
    company: "Jumat.AI",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
  },
  meetUrl: "https://meet.google.com/dav-upaa-ivx",
  keyTakeaways: [
    "Eksplorasi lanjutan arsitektur ComfyUI & Node Wiring",
    "Bedah custom nodes populer & trik mengatasi missing nodes error",
    "Tanya jawab dan live troubleshooting kasus anggota",
  ],
};

// Seluruh arsip sesi kronologis yang telah berlangsung
export const ARCHIVED_SESSIONS: Session[] = [
  {
    id: "session-17",
    sessionNumber: 17,
    title: "Sharing AI #17: Hari Gini Pake AI masih di Web?",
    description:
      "Bedah workflow integrasi AI di luar antarmuka web, pemanfaatan CLI tools, integrasi IDE, desktop automation, dan asisten lokal.",
    date: "2026-10-23",
    time: "14:00 - 15:00 WIB",
    category: "Productivity",
    speaker: {
      name: "Heru, Ilman",
      role: "Praktisi",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/ozp-goaj-bso",
    keyTakeaways: ["AI di luar antarmuka web", "Desktop & CLI integrations", "Workflow efisiensi tingkat lanjut"],
  },
  {
    id: "session-16",
    sessionNumber: 16,
    title: "Sharing AI #16: Flexing & Brainstorming Bareng Pejabat",
    description:
      "Showcase pemanfaatan tools AI praktis untuk kebutuhan birokrasi, penyusunan telaah, serta sesi brainstorming bersama pimpinan dan pejabat.",
    date: "2026-10-09",
    time: "14:00 - 15:00 WIB",
    category: "Productivity",
    speaker: {
      name: "Khai, Ingga, dan Komunitas",
      role: "Pejabat",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/gnw-mvvm-kcg",
    keyTakeaways: ["Showcase solusi AI untuk organisasi", "Brainstorming kebutuhan riil", "Strategi adopsi AI di institusi"],
  },
  {
    id: "session-15",
    sessionNumber: 15,
    title: "Sharing AI #15: Flexing Desktop Pet",
    description:
      "Eksplorasi dan demo proyek Desktop Pet interaktif berbasis AI, membedah interaksi suara, visual avatar, dan pemanggilan tool.",
    date: "2026-10-02",
    time: "14:00 - 15:00 WIB",
    category: "Agentic AI",
    speaker: {
      name: "Heru, Septian, Satria",
      role: "Praktisi",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/qpo-ocxn-hix",
    keyTakeaways: ["Arsitektur Desktop Pet AI", "Interaksi multimodal & voice", "Eksplorasi agentic UI"],
  },
  {
    id: "session-14",
    sessionNumber: 14,
    title: "Sharing AI #14: Bingung Bareng JEV",
    description:
      "Mengeksplorasi tools dan utilitas pendukung kerja AI bersama komunitas (Bingung Bareng JEV).",
    date: "2026-09-25",
    time: "14:00 - 15:00 WIB",
    category: "Productivity",
    speaker: {
      name: "Heru",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/kwa-gczv-rmq",
    keyTakeaways: ["Eksplorasi utilitas JEV", "Integrasi workflow kerja", "Hands-on troubleshooting bersama"],
  },
  {
    id: "session-13",
    sessionNumber: 13,
    title: "Sharing AI #13: Fun Flexing Bareng Pejabat",
    description:
      "Sesi sharing interaktif dan presentasi santai ragam use case kecerdasan buatan kepada pimpinan dan pemangku kepentingan.",
    date: "2026-09-11",
    time: "16:00 - 17:00 WIB",
    category: "Productivity",
    speaker: {
      name: "Khai & Ingga",
      role: "Pejabat",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/bei-ppup-fex",
    keyTakeaways: ["Presentasi use case praktis", "Diskusi dampak produktivitas", "Q&A santai seputar AI"],
  },
  {
    id: "session-12",
    sessionNumber: 12,
    title: "Sharing AI #12 A Retrospective: Dari LLM sampai Cara Menggunakannya",
    description:
      "Sesi retrospektif merangkum perjalanan pemahaman Large Language Model dari konsep dasar, prompt engineering, hingga implementasi praktis.",
    date: "2026-09-04",
    time: "14:00 - 15:00 WIB",
    category: "LLM",
    speaker: {
      name: "Heru",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/khp-zxmf-sxz",
    keyTakeaways: ["Rangkuman evolusi LLM", "Peta jalan pemanfaatan AI harian", "Refleksi dan tanya jawab teknis"],
  },
  {
    id: "session-11",
    sessionNumber: 11,
    title: "Sharing AI #11: Bingung Bareng Pi",
    description:
      "Mencoba dan membedah keunikan AI conversational Pi (Inflection AI), karakter EQ, serta potensi pemanfaatannya dalam pendampingan tugas.",
    date: "2026-08-28",
    time: "14:00 - 15:00 WIB",
    category: "Productivity",
    speaker: {
      name: "Septian",
      role: "Praktisi",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/kjd-sueq-imq",
    keyTakeaways: ["Karakteristik model Pi AI", "Perbandingan EQ vs IQ pada LLM", "Studi kasus percakapan natural"],
  },
  {
    id: "session-10",
    sessionNumber: 10,
    title: "Sharing AI #10: Bingung Bareng Obsidian (Lagi)",
    description:
      "Lanjutan eksplorasi Obsidian: pengelolaan Personal Knowledge Management (PKM) terintegrasi dengan plugin asisten AI lokal.",
    date: "2026-08-21",
    time: "14:00 - 15:00 WIB",
    category: "Productivity",
    speaker: {
      name: "Dz & Ingga",
      role: "Praktisi",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/ctd-najc-xte",
    keyTakeaways: ["PKM dengan Obsidian & AI", "Integrasi Smart Connections / Copilot", "Struktur vault optimal"],
  },
  {
    id: "session-9",
    sessionNumber: 9,
    title: "Sharing AI #9: Bingung Bareng Ngisi Kertas Kerja pake AI",
    description:
      "Hands-on otomasi pengisian dan pengujian kertas kerja pengawasan/audit menggunakan bantuan Large Language Model.",
    date: "2026-08-14",
    time: "14:00 - 15:00 WIB",
    category: "Productivity",
    speaker: {
      name: "Ilman & Dana",
      role: "Praktisi",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/rsy-rqwq-tvp",
    keyTakeaways: ["Otomasi telaah kertas kerja", "Prompting data semi-terstruktur", "Validasi dan verifikasi kepatuhan"],
  },
  {
    id: "session-8",
    sessionNumber: 8,
    title: "Sharing AI #8: Bingung Bareng OmniRoute",
    description:
      "Eksplorasi routing gateway API LLM menggunakan OmniRoute: load balancing, failover multi-provider, dan efisiensi biaya kuota.",
    date: "2026-08-07",
    time: "14:00 - 15:00 WIB",
    category: "MLOps",
    speaker: {
      name: "Septian",
      role: "Praktisi",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/nsj-tkee-uey",
    keyTakeaways: ["LLM Router & Gateway", "Multi-provider failover", "Optimasi kuota & latency"],
  },
  {
    id: "session-7",
    sessionNumber: 7,
    title: "Sharing AI #7: Cari Cuan Pake Hermes",
    description:
      "Studi kasus monetisasi dan peluang produk digital/layanan berbasis model Hermes dan agen AI otomatis.",
    date: "2026-07-31",
    time: "14:00 - 15:00 WIB",
    category: "Productivity",
    speaker: {
      name: "SPBE",
      role: "Praktisi",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/xhw-xpud-bmv",
    keyTakeaways: ["Peluang SaaS & produk AI", "Pemanfaatan model open-weights", "Diskusi ide bisnis AI"],
  },
  {
    id: "session-6",
    sessionNumber: 6,
    title: "Sharing AI #6: Bingung Bareng Model Context Protocol (MCP)",
    description:
      "Mendalami Model Context Protocol (MCP) sebagai standar terbuka untuk menghubungkan asisten AI ke database, filesystem, dan API.",
    date: "2026-07-24",
    time: "19:00 - 20:00 WIB",
    category: "MCP & Tools",
    speaker: {
      name: "Heru",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/oxa-vztj-ojo",
    keyTakeaways: ["Konsep dasar MCP Client & Server", "Penyediaan tool ke LLM", "Live demo konfigurasi MCP"],
  },
  {
    id: "session-5",
    sessionNumber: 5,
    title: "Sharing AI #5: Bingung Bareng NotebookLM",
    description:
      "Mengeksplorasi Google NotebookLM: teknik grounding dokumen, analisis lintas berkas, sitasi otomatis, dan fitur Audio Overview.",
    date: "2026-07-17",
    time: "14:00 - 15:00 WIB",
    category: "Productivity",
    speaker: {
      name: "Wildan, Genky",
      role: "Praktisi",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/paa-auds-hzr",
    keyTakeaways: ["Sintesis dokumen tebal", "Grounding tanpa halusinasi", "Eksplorasi fitur Audio Overview"],
  },
  {
    id: "session-4",
    sessionNumber: 4,
    title: "Sharing AI #4: Bingung Bareng Opencode",
    description:
      "Eksplorasi asisten coding open-source Opencode, integrasi dengan model lokal dan API cloud untuk akselerasi pemrograman.",
    date: "2026-07-10",
    time: "08:00 - 09:00 WIB",
    category: "Productivity",
    speaker: {
      name: "Ilman & Ingga",
      role: "Praktisi",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/urw-tiis-gkm",
    keyTakeaways: ["Setup asisten coding Opencode", "Pair programming dengan AI", "Tips prompt pemrograman"],
  },
  {
    id: "session-3",
    sessionNumber: 3,
    title: "Sharing AI #3: Bingung Bareng Obsidian - Hermes",
    description:
      "Kolaborasi antara catatan pengetahuan Obsidian  penalaran dan perangkuman terstruktur.",
    date: "2026-07-03",
    time: "14:00 - 15:00 WIB",
    category: "Productivity",
    speaker: {
      name: "Dzul",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/xgo-ozwn-cop",
    keyTakeaways: ["Koneksi Obsidian ke model Hermes", "Struktur catatan otomatis", "Eksperimen agent sederhana"],
  },
  {
    id: "session-2",
    sessionNumber: 2,
    title: 'Sharing AI #2 - Hands-On : Hermes Agent',
    description:
      "Eksplorasi penggunaan Hermes Agent untuk otomasi dan analisis data bersama komunitas.",
    date: "2026-06-26",
    time: "14:00 - 15:00 WIB",
    category: "Productivity",
    speaker: {
      name: "Heru",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/bvg-avzt-hth",
    keyTakeaways: ["Konsep Data Analytic Teratai", "Otomasi transformasi data", "Studi kasus pengawasan"],
  },
  {
    id: "session-1",
    sessionNumber: 1,
    title: "Sharing AI #1 - Hands-On : Documents to Database dengan AI",
    description:
      "Sesi hands-on perdana membedah konversi dokumen teks/PDF menjadi data terstruktur di database dengan bantuan AI.",
    date: "2026-06-19",
    time: "08:00 - 11:00 WIB",
    category: "RAG",
    speaker: {
      name: "Ingga",
      role: "Pejabat",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/sum-koqn-pcu",
    keyTakeaways: ["Dokumen to Database pipeline", "Ekstraksi data terstruktur", "Hands-on coding bersama"],
  },
  {
    id: "session-0",
    sessionNumber: 0,
    title: "Sharing AI Initial Gmeet",
    description:
      "Pertemuan inisiasi perdana komunitas Sharing AI: perkenalan anggota, visi kegiatan Jumat siang, dan kesepakatan topik.",
    date: "2026-06-14",
    time: "19:00 - 20:00 WIB",
    category: "Productivity",
    speaker: {
      name: "Heru",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    meetUrl: "https://meet.google.com/yms-hwxg-oky",
    keyTakeaways: ["Inisiasi komunitas", "Peta jalan topik mingguan", "Google Meet perdana"],
  },
];

export const CATEGORIES = [
  "Semua",
  "LLM",
  "Generative AI",
  "Agentic AI",
  "RAG",
  "MCP & Tools",
  "MLOps",
  "Productivity",
] as const;

export const FAQS = [
  {
    q: "Apakah sesi Sharing AI berbayar?",
    a: "Tidak, seluruh sesi sharing daring di komunitas ini 100% gratis dan terbuka untuk umum, dari pemula hingga praktisi.",
  },
  {
    q: "Kapan jadwal rutin sesi diadakan?",
    a: "Sesi rutin diadakan setiap hari Jumat siang pukul 14:00 - 15:30 WIB secara online melalui Google Meet.",
  },
  {
    q: "Siapa penyelenggara inisiatif ini?",
    a: "Inisiatif ini diorganisir oleh Heru bersama komunitas pegiat AI yang aktif berbagi setiap pekan.",
  },
  {
    q: "Bagaimana cara ikut bergabung ke sesi Google Meet?",
    a: "Tautan Google Meet terbuka dapat diakses langsung melalui tombol di portal ini atau dibagikan menjelang jam acara di grup komunitas.",
  },
  {
    q: "Saya ingin sharing atau mengajukan topik, bagaimana caranya?",
    a: "Sangat kami sambut! Anda bisa mengisi formulir 'Call for Speakers' yang ada di portal ini. Sesi dirancang santai dalam bentuk sharing pengalaman, live demo, atau eksplorasi bersama.",
  },
];
