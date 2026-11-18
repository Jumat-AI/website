# Jumat.AI.ID — Portal Komunitas Sharing AI Mingguan

Repositori ini berisi kode sumber portal resmi **[jumat.ai.id](https://jumat.ai.id)**, wadah berkumpul dan belajar Artificial Intelligence daring setiap hari Jumat malam di Indonesia.

---

## 🗂️ Struktur Direktori Proyek

Proyek ini dipisahkan menjadi dua direktori terpisah sesuai dengan tahapan adopsi:

```text
jumat.ai.id/
│
├── 📁 portal-mvp/          <-- [AKTIF SAAT INI] Next.js + Tailwind CSS + File Data Statis
│   ├── src/data/community.ts   # Sumber data sesi, speaker, link grup, & FAQ
│   ├── src/components/         # Komponen UI modern (Hero, Countdown, Arsip, CFS, FAQ)
│   └── ...
│
└── 📁 portal-dynamic/      <-- [FONDASI JANGKA PANJANG] Full-stack + Supabase / PostgreSQL
    ├── supabase/
    │   ├── migrations/         # Skema database relasional (sessions, cfs, votes)
    │   └── seed.sql            # Data awal PostgreSQL
    ├── src/lib/supabase/       # Client & Server Supabase helpers
    ├── src/app/api/            # REST API handlers (sessions, cfs, votes)
    └── README.md               # Panduan setup & migrasi
```

---

## 🚀 Menjalankan `portal-mvp` (Pilihan 1 - Siap Pakai Sekarang)

Direktori `portal-mvp` sudah selesai diimplementasikan, siap diuji secara lokal, dan siap di-*deploy* ke Vercel atau Cloudflare Pages.

```bash
# 1. Pindah ke direktori portal-mvp
cd portal-mvp

# 2. Jalankan development server
npm run dev
```

Buka peramban di [http://localhost:3000](http://localhost:3000).

### Cara Menambah / Mengubah Data Sesi di MVP
Cukup edit file [`portal-mvp/src/data/community.ts`](file:///D:/AI/jumat.ai.id/portal-mvp/src/data/community.ts):
- Ubah objek `UPCOMING_SESSION` untuk menentukan sesi Jumat berikutnya (judul, jam, pembicara, link Google Meet).
- Tambahkan sesi baru ke array `ARCHIVED_SESSIONS` setelah sesi selesai (beserta link YouTube, Slide, atau GitHub).

---

## 🔮 Arsitektur `portal-dynamic` (Pilihan 2 - Jangka Panjang)

Bila komunitas sudah semakin besar dan Anda ingin:
1. Tidak perlu edit kode/git commit untuk menambah sesi (menggunakan Dashboard Admin / Database).
2. Menerima formulir pengajuan pemateri (Call for Speakers) langsung tersimpan di database.
3. Menyediakan voting ide topik mingguan bagi anggota.
4. Menambahkan fitur RAG AI Chatbot untuk menjawab pertanyaan arsip.

Silakan pelajari panduan migrasi di [`portal-dynamic/README.md`](file:///D:/AI/jumat.ai.id/portal-dynamic/README.md).
