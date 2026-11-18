"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  FileText,
  Calendar,
  Sparkles,
} from "lucide-react";
import { YoutubeIcon, GithubIcon } from "./SocialIcons";
import { ARCHIVED_SESSIONS, CATEGORIES, type Session } from "@/data/community";

export function ArchiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const filteredSessions = useMemo(() => {
    return ARCHIVED_SESSIONS.filter((session) => {
      const matchesCategory =
        selectedCategory === "Semua" || session.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        session.title.toLowerCase().includes(q) ||
        session.description.toLowerCase().includes(q) ||
        session.speaker.name.toLowerCase().includes(q) ||
        session.category.toLowerCase().includes(q) ||
        (session.keyTakeaways &&
          session.keyTakeaways.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="arsip" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Repositori Pengetahuan
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Arsip & Materi Sesi Sebelumnya
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl">
              Akses kembali rekaman video, presentasi slide, dan kode sumber dari setiap sesi sharing mingguan Jumat.AI.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari topik, speaker, atau keyword..."
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${selectedCategory === cat
                  ? "bg-cyan-500 text-zinc-950 font-semibold shadow-md shadow-cyan-500/20"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sessions Grid */}
        {filteredSessions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8">
            <Search className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-white">Tidak ada sesi yang cocok</h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto">
              Coba gunakan kata kunci pencarian yang berbeda atau pilih kategori &ldquo;Semua&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Semua");
              }}
              className="mt-4 px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function SessionCard({ session }: { session: Session }) {
  const formattedDate = new Date(session.date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="group rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-800 text-zinc-300 border border-zinc-700">
              #{session.sessionNumber}
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              {session.category}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {session.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed">
          {session.description}
        </p>

        {/* Key Takeaways Chips */}
        {session.keyTakeaways && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {session.keyTakeaways.map((takeaway: string, i: number) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded text-[10px] bg-zinc-800/60 text-zinc-400 border border-zinc-800"
              >
                #{takeaway}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer Info: Speaker & Actions */}
      <div className="pt-6 mt-6 border-t border-zinc-800/80 flex flex-col gap-4">
        {/* Speaker Profile */}
        <div className="flex items-center gap-3">
          <img
            src={session.speaker.avatarUrl}
            alt={session.speaker.name}
            className="w-9 h-9 rounded-full object-cover border border-zinc-700"
          />
          <div className="min-w-0 flex-1">
            <h4 className="text-xs font-semibold text-white truncate">
              {session.speaker.name}
            </h4>
            <p className="text-[11px] text-zinc-400 truncate">
              {session.speaker.role} {session.speaker.company ? `@${session.speaker.company}` : ""}
            </p>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-2 pt-1">
          {session.youtubeUrl && (
            <a
              href={session.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-red-600/10 hover:bg-red-600/20 border border-red-500/20 text-red-400 text-xs font-medium transition"
              title="Tonton Rekaman YouTube"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
              <span>Rekaman</span>
            </a>
          )}
          {session.slideUrl && (
            <a
              href={session.slideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 text-xs font-medium transition"
              title="Buka Slide Presentasi"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Slide</span>
            </a>
          )}
          {session.repoUrl && (
            <a
              href={session.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 transition"
              title="Buka Repositori GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
