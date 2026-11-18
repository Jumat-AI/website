-- ==============================================================================
-- Jumat.AI.ID Initial Seed Data (Sinkron dengan Jadwal Komunitas Real)
-- ==============================================================================

-- 1. Insert Initial Speakers
INSERT INTO public.speakers (id, name, role, company, avatar_url) VALUES
('11111111-1111-1111-1111-111111111111', 'Heru Arief Wijaya', 'Community Organizer & AI Practitioner', 'Jumat.AI', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300');

-- 2. Insert Recent & Upcoming Sessions
INSERT INTO public.sessions (
    session_number,
    title,
    description,
    category,
    event_date,
    start_time,
    end_time,
    speaker_id,
    meet_url,
    key_takeaways,
    is_upcoming,
    is_published
) VALUES
(
    18,
    'Sharing AI #18: Bingung Bareng Comfy UI (lagi)',
    'Sesi eksplorasi interaktif dan hands-on troubleshooting seputar alur kerja ComfyUI, pemanfaatan custom nodes, instalasi checkpoint/LoRA, dan optimalisasi pipeline generative image lokal.',
    'Generative AI',
    '2026-10-30',
    '14:00:00',
    '15:30:00',
    '11111111-1111-1111-1111-111111111111',
    'https://meet.google.com/open-sharing-ai',
    ARRAY['Eksplorasi lanjutan arsitektur ComfyUI & Node Wiring', 'Bedah custom nodes populer & trik mengatasi missing nodes error', 'Tanya jawab dan live troubleshooting kasus anggota'],
    TRUE,
    TRUE
),
(
    17,
    'Sharing AI #17: Diskusi & Studi Kasus AI Lanjutan',
    'Pertemuan sharing interaktif dan bedah implementasi terkini AI di berbagai sektor industri bersama para anggota komunitas.',
    'LLM',
    '2026-10-23',
    '14:00:00',
    '15:30:00',
    '11111111-1111-1111-1111-111111111111',
    NULL,
    ARRAY['Diskusi 10+ peserta aktif', 'Studi kasus implementasi nyata', 'Review tren teknologi AI mingguan'],
    FALSE,
    TRUE
),
(
    16,
    'Sharing AI #16: Optimization & AI Performance',
    'Membahas teknik optimasi latensi dan konsumsi resource pada eksekusi model AI lokal, termasuk kuantisasi (GGUF/AWQ) dan caching inference.',
    'MLOps',
    '2026-10-09',
    '14:00:00',
    '15:30:00',
    '11111111-1111-1111-1111-111111111111',
    NULL,
    ARRAY['Inference acceleration', 'Quantization benchmark', 'Memory management GPU vs CPU'],
    FALSE,
    TRUE
),
(
    15,
    'Sharing AI #15: ComfyUI Custom Nodes Deep Dive',
    'Pengenalan dan pembuatan custom node di ComfyUI untuk mengotomasi pipeline pembuatan visual AI yang kompleks dan modular.',
    'Generative AI',
    '2026-09-25',
    '14:00:00',
    '15:30:00',
    '11111111-1111-1111-1111-111111111111',
    NULL,
    ARRAY['ComfyUI Node structure', 'Custom input/output tensors', 'Sharing workflow via JSON'],
    FALSE,
    TRUE
);
