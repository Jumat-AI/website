"use client";

import React, { useState } from "react";
import { Mic, Send, CheckCircle2, ArrowRight, BookOpen, Users2, Trophy } from "lucide-react";
import { COMMUNITY_INFO } from "@/data/community";

export function CallForSpeakerSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    category: "LLM",
    summary: "",
    linkedin: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission for MVP
    setSubmitted(true);
  };

  return (
    <section id="call-for-speakers" className="py-20 relative bg-zinc-950/80 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
              <Mic className="w-3.5 h-3.5" />
              Call for Speakers
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Punya Pengalaman atau Proyek AI?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Mari Berbagi di Jumat Depan!
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Jumat.AI adalah wadah terbuka bagi siapa pun—baik engineer berpengalaman, peneliti, founder startup, hingga mahasiswa yang baru mengeksplorasi AI—untuk bertukar ide dalam suasana yang hangat dan kasual.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Format Santai & Terbuka</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    30-45 menit pemaparan materi/live coding + 20-30 menit sesi tanya jawab dan diskusi dua arah.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Users2 className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Audiens Praktisi & Antusias</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Jangkau lebih dari 1.500+ anggota komunitas AI aktif dari berbagai penjuru tanah air.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Trophy className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Jejak Karya & Rekaman Terarsip</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Materi dan rekaman akan diabadikan di portal jumat.ai.id dan YouTube dengan atribusi penuh.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMMUNITY_INFO.links.callForSpeakersForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition"
              >
                Atau buka formulir langsung via Google Forms
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Usulan Berhasil Dikirim!</h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Terima kasih telah bersedia berbagi, <strong>{formData.name}</strong>! Tim kurator Jumat.AI akan segera menghubungi Anda melalui email <strong>{formData.email}</strong> untuk penyesuaian jadwal.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        topic: "",
                        category: "LLM",
                        summary: "",
                        linkedin: "",
                      });
                    }}
                    className="mt-6 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition"
                  >
                    Kirim Usulan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-zinc-800 pb-4 mb-4">
                    <h3 className="text-lg font-bold text-white">Formulir Pengajuan Pemateri</h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Isi data singkat berikut. Tim kami akan merespons dalam 1-2 hari kerja.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Rian Pratama"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Email Kontak *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rian@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Kategori Topik
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                      >
                        <option value="LLM">LLM & Prompting</option>
                        <option value="Agentic AI">Agentic AI & Workflow</option>
                        <option value="RAG">RAG & Vector Database</option>
                        <option value="Computer Vision">Computer Vision</option>
                        <option value="MLOps">MLOps & Deployment</option>
                        <option value="Research">Research & Papers</option>
                        <option value="Generative AI">Generative Media & Design</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Tautan LinkedIn / GitHub (Opsional)
                      </label>
                      <input
                        type="url"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Rencana Judul Topik *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      placeholder="Misal: Membangun Voice Agent Realtime Menggunakan WebRTC"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Ringkasan Singkat Paparan *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.summary}
                      onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                      placeholder="Jelaskan secara ringkas apa saja poin yang akan dipelajari oleh audiens..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/20 transition-all hover:scale-102"
                    >
                      <Send className="w-4 h-4" />
                      Kirimkan Usulan Topik
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
