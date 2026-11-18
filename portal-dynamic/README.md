# Jumat.AI.ID — Dynamic Portal Architecture (Jangka Panjang)

Direktori ini dirancang sebagai **fondasi arsitektur jangka panjang (Pilihan 2)** untuk portal `jumat.ai.id`, menggunakan arsitektur full-stack berbasis database terkelola (PostgreSQL / Supabase).

---

## 🏗️ Mengapa Berpindah dari MVP ke Portal Dinamis?

| Aspek | `portal-mvp` (Saat ini) | `portal-dynamic` (Jangka Panjang) |
| :--- | :--- | :--- |
| **Penyimpanan Data** | File statis TypeScript (`src/data/community.ts`) | Relational Database (PostgreSQL / Supabase) |
| **Pembaruan Konten** | Butuh git commit & redeploy | Melalui Dashboard Admin / CMS instan |
| **Call for Speakers** | Simulasi / integrasi link Google Forms | Tersimpan langsung ke database & ada review workflow |
| **Interaksi Komunitas** | Tautan pasif | Voting topik mingguan, RSVP sesi, showcase proyek member |
| **Pencarian AI (RAG)** | Kata kunci teks statis | Vector Search (pgvector) untuk Tanya Jawab seputar materi |

---

## 📁 Struktur Direktori

```text
portal-dynamic/
├── supabase/
│   ├── migrations/
│   │   └── 20261030000000_init_portal_schema.sql  # Skema tabel lengkap & RLS
│   └── seed.sql                                   # Data awal sesi & speaker
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── sessions/route.ts                  # Endpoint CRUD sesi
│   │   │   ├── cfs/route.ts                       # Endpoint pendaftaran speaker
│   │   │   └── votes/route.ts                     # Endpoint voting ide topik
│   │   ├── admin/                                 # Dashboard admin (kurasi sesi & speaker)
│   │   └── ...
│   ├── lib/
│   │   └── supabase/
│   │       ├── client.ts                          # Browser Supabase client
│   │       └── server.ts                          # Server & API Supabase client
│   └── types/
│       └── database.types.ts                      # Generated TypeScript schema
├── .env.example
├── package.json
└── README.md
```

---

## 🚀 Panduan Setup & Migrasi

### 1. Buat Proyek Supabase
1. Kunjungi [supabase.com](https://supabase.com) dan buat proyek baru gratis.
2. Buka tab **SQL Editor** pada dashboard Supabase Anda.
3. Jalankan isi file `supabase/migrations/20261030000000_init_portal_schema.sql` untuk membuat tabel dan security rules.
4. (Opsional) Jalankan isi file `supabase/seed.sql` untuk mengisi data awal.

### 2. Konfigurasi Environment Variables
Salin `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```
Lengkapi nilai:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-for-admin
```

### 3. Install Dependensi & Jalankan
```bash
npm install
npm run dev
```
