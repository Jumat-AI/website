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
  organizer: "Heru Arief Wijaya",
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
  activeMembers: [
    "Heru Arief Wijaya (Organizer)",
    "Muhamad Rizky Ramadhan",
    "Agustian Permadi",
    "Nevita Ary Sukarna",
    "Taufiq Ramadhan",
    "Bobi Setiawan",
    "Ilman Fahmi",
    "Timotheus Ingga Pranata",
    "Mas Dzulfikar",
    "Andi Irawan",
    "Muhammad Khairizki Budiman",
    "Reky Subagja",
    "Roby Pria Atmaja",
    "Rakhmat",
    "Septian Adi Nugraha",
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
    name: "Heru Arief Wijaya & Komunitas",
    role: "Community Organizer & AI Practitioner",
    company: "Jumat.AI",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
  },
  meetUrl: "https://meet.google.com/open-sharing-ai",
  keyTakeaways: [
    "Eksplorasi lanjutan arsitektur ComfyUI & Node Wiring",
    "Bedah custom nodes populer & trik mengatasi missing nodes error",
    "Tanya jawab dan live troubleshooting kasus anggota",
    "Persiapan agenda evaluasi untuk Sesi #19 mendatang",
  ],
};

// Seluruh arsip sesi kronologis yang telah berlangsung
export const ARCHIVED_SESSIONS: Session[] = [
  {
    id: "session-17",
    sessionNumber: 17,
    title: "Sharing AI #17: Diskusi & Studi Kasus AI Lanjutan",
    description:
      "Pertemuan sharing interaktif dan bedah implementasi terkini AI di berbagai sektor industri bersama para anggota komunitas.",
    date: "2026-10-23",
    time: "14:00 - 15:30 WIB",
    category: "LLM",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["Diskusi 10+ peserta aktif", "Studi kasus implementasi nyata", "Review tren teknologi AI mingguan"],
  },
  {
    id: "session-16",
    sessionNumber: 16,
    title: "Sharing AI #16: Optimization & AI Performance",
    description:
      "Membahas teknik optimasi latensi dan konsumsi resource pada eksekusi model AI lokal, termasuk kuantisasi (GGUF/AWQ) dan caching inference.",
    date: "2026-10-09",
    time: "14:00 - 15:30 WIB",
    category: "MLOps",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["Inference acceleration", "Quantization benchmark", "Memory management GPU vs CPU"],
  },
  {
    id: "session-15",
    sessionNumber: 15,
    title: "Sharing AI #15: ComfyUI Custom Nodes Deep Dive",
    description:
      "Pengenalan dan pembuatan custom node di ComfyUI untuk mengotomasi pipeline pembuatan visual AI yang kompleks dan modular.",
    date: "2026-09-25",
    time: "14:00 - 15:30 WIB",
    category: "Generative AI",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["ComfyUI Node structure", "Custom input/output tensors", "Sharing workflow via JSON"],
  },
  {
    id: "session-14",
    sessionNumber: 14,
    title: "Sharing AI #14: AI Agents & Multi-Agent Framework",
    description:
      "Membangun agen AI otonom yang mampu berkolaborasi, membagi tugas, dan memanggil tools eksternal untuk menyelesaikan masalah komposit.",
    date: "2026-09-18",
    time: "14:00 - 15:30 WIB",
    category: "Agentic AI",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["Agent loops & memory", "Multi-agent coordination", "Safety & execution constraints"],
  },
  {
    id: "session-13",
    sessionNumber: 13,
    title: "Sharing AI #13: Advanced Vector DB & Semantic Search",
    description:
      "Perbandingan praktis berbagai Vector Database (Chroma, Qdrant, Pinecone, pgvector) dan teknik indexing embedding untuk akurasi pencarian optimal.",
    date: "2026-09-11",
    time: "14:00 - 15:30 WIB",
    category: "RAG",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["Vector similarity metrics", "HNSW vs IVF indexing", "Metadata filtering"],
  },
  {
    id: "session-12",
    sessionNumber: 12,
    title: "Sharing AI #12: Diskusi Praktis & Log Implementasi",
    description:
      "Sesi sharing interaktif dan bedah kendala teknis bersama 9+ peserta aktif mengenai deployment AI pada skenario harian.",
    date: "2026-09-04",
    time: "14:00 - 15:30 WIB",
    category: "Productivity",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["Q&A teknis interaktif", "Studi kasus live", "Rencana roadmap sesi berikutnya"],
  },
  {
    id: "session-11",
    sessionNumber: 11,
    title: "Sharing AI #11: RAG (Retrieval-Augmented Generation)",
    description:
      "Mengintegrasikan basis data dokumen pribadi/perusahaan dengan LLM agar menghasilkan jawaban yang tepat dan minim halusinasi.",
    date: "2026-08-23",
    time: "14:00 - 15:30 WIB",
    category: "RAG",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["Arsitektur RAG end-to-end", "Chunking document strategy", "Context injection"],
  },
  {
    id: "session-10",
    sessionNumber: 10,
    title: "Sharing AI #10: Local LLM & Privasi Data",
    description:
      "Menjalankan model bahasa besar langsung di mesin lokal tanpa koneksi internet (Ollama, LM Studio) demi keamanan privasi data sensitif.",
    date: "2026-08-16",
    time: "14:00 - 15:30 WIB",
    category: "LLM",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["Setup Ollama & UI web", "Hardware requirement", "Zero data leakage setup"],
  },
  {
    id: "session-9",
    sessionNumber: 9,
    title: "Sharing AI #9: Arsitektur LLM & Model Tuning",
    description:
      "Memahami mekanisme dasar Transformer, Attention Mechanism, serta prinsip parameter tuning (LoRA, QLoRA) pada model bahasa modern.",
    date: "2026-08-09",
    time: "14:00 - 15:30 WIB",
    category: "LLM",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["Transformer architecture basics", "Fine-tuning vs In-Context Learning", "Evaluasi model"],
  },
  {
    id: "session-8",
    sessionNumber: 8,
    title: "Sharing AI #8: AI Automation & Scripting",
    description:
      "Menghubungkan API kecerdasan buatan dengan script Python dan webhook untuk mengotomasi tugas-tugas administratif rutin harian.",
    date: "2026-08-02",
    time: "14:00 - 15:30 WIB",
    category: "Productivity",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["API SDK integration", "Automated batch processing", "Error handling & retries"],
  },
  {
    id: "session-7",
    sessionNumber: 7,
    title: "Sharing AI #7: Model Context Protocol (MCP)",
    description:
      "Mendalami protokol standar terbuka MCP untuk menghubungkan model AI secara aman dengan sumber data lokal, tools, dan lingkungan eksekusi.",
    date: "2026-07-24",
    time: "14:00 - 15:30 WIB",
    category: "MCP & Tools",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["Arsitektur MCP Client-Server", "Tool schema exposure", "Integrasi workspace nyata"],
  },
  {
    id: "session-6",
    sessionNumber: 6,
    title: "Sharing AI #6: Integrasi AI dalam Workflow Kerja Harian",
    description:
      "Praktik terbaik mengintegrasikan asisten AI ke dalam IDE coding, penulisan laporan teknis, dan manajemen dokumentasi kerja tim.",
    date: "2026-07-19",
    time: "14:00 - 15:30 WIB",
    category: "Productivity",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["IDE copilots & shortcuts", "Automating summary & reports", "Etika & validasi hasil"],
  },
  {
    id: "session-5",
    sessionNumber: 5,
    title: "Sharing AI #5: AI untuk Analisis Data & Dokumen",
    description:
      "Pemanfaatan model AI multimodal dan code interpreter untuk ekstraksi tabel, visualisasi data, dan pembedahan berkas PDF tebal.",
    date: "2026-07-12",
    time: "14:00 - 15:30 WIB",
    category: "Productivity",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["Document parsing OCR + LLM", "Data analysis automation", "Insight extraction"],
  },
  {
    id: "session-4",
    sessionNumber: 4,
    title: "Sharing AI #4: Generative Image AI Fundamentals",
    description:
      "Mengenal dunia generasi gambar AI (Stable Diffusion, Midjourney, FLUX) serta parameter kunci seperti sampler, steps, CFG scale, dan prompt formatting.",
    date: "2026-07-05",
    time: "14:00 - 15:30 WIB",
    category: "Generative AI",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["Diffusion models concept", "Negative prompt & seed control", "Model checkpoint comparison"],
  },
  {
    id: "session-3",
    sessionNumber: 3,
    title: "Sharing AI #3: Tools & AI Productivity Ecosystem",
    description:
      "Eksplorasi ragam tools AI modern untuk mempercepat produktivitas riset, penulisan kode, dan pembuatan slide presentasi.",
    date: "2026-06-28",
    time: "14:00 - 15:30 WIB",
    category: "Productivity",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["Productivity stack review", "Browser extensions for AI", "Effective note-taking with AI"],
  },
  {
    id: "session-2",
    sessionNumber: 2,
    title: "Sharing AI #2: Prompt Engineering Fundamentals",
    description:
      "Seni dan teknik berkomunikasi dengan LLM: Few-shot prompting, Chain of Thought (CoT), System prompt structuring, dan pencegahan halusinasi.",
    date: "2026-06-21",
    time: "14:00 - 15:30 WIB",
    category: "LLM",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["Few-shot vs Zero-shot", "Chain of Thought prompting", "System role engineering"],
  },
  {
    id: "session-1",
    sessionNumber: 1,
    title: "Sharing AI #1: Kickoff & Pengenalan Ekosistem AI & LLM",
    description:
      "Pertemuan perdana komunitas Sharing AI: perkenalan anggota, pembahasan peta jalan ekosistem AI terkini, dan visi agenda mingguan.",
    date: "2026-06-14",
    time: "14:00 - 15:30 WIB",
    category: "LLM",
    speaker: {
      name: "Heru Arief Wijaya",
      role: "Organizer",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    keyTakeaways: ["Kickoff komunitas", "Lansekap AI global & nasional", "Diskusi topik-topik mendatang"],
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
    a: "Inisiatif ini diorganisir oleh Heru Arief Wijaya bersama komunitas pegiat AI yang aktif berbagi setiap pekan.",
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
