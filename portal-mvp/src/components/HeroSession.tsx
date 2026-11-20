"use client";

import React from "react";
import {
  Calendar,
  Clock,
  Video,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  CalendarPlus,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";
import { UPCOMING_SESSION, COMMUNITY_INFO } from "@/data/community";
import { CountdownTimer } from "./CountdownTimer";

export function HeroSession() {
  const session = UPCOMING_SESSION;

  // Generate Google Calendar Link dynamically
  const dateFormatted = session.date.replace(/-/g, "");
  const is90Min = session.time.includes("15:30");
  const startTimeStr = `${dateFormatted}T070000Z`; // 14:00 WIB in UTC is 07:00 UTC
  const endTimeStr = `${dateFormatted}T${is90Min ? "083000Z" : "080000Z"}`; // 15:00 WIB in UTC is 08:00 UTC
  const gcalTitle = encodeURIComponent(`Jumat.AI: ${session.title}`);
  const dialInInfoStr = session.dialIn
    ? `\nDial-in: ${session.dialIn.phone} PIN: ${session.dialIn.pin}\nMore numbers: ${session.dialIn.moreNumbersUrl || ""}`
    : "";
  const gcalDetails = encodeURIComponent(
    `${session.description}\n\nPenyelenggara: ${COMMUNITY_INFO.organizer}\nLink Meet: ${session.meetUrl || "Google Meet"}${dialInInfoStr}\nWebsite: https://jumat.ai.id`
  );
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${gcalTitle}&dates=${startTimeStr}/${endTimeStr}&details=${gcalDetails}&location=Online%20(Google%20Meet)`;

  return (
    <section id="sesi-terdekat" className="relative pt-12 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-purple-600/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Header / Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-medium mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{COMMUNITY_INFO.tagline}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Belajar & Berbagi AI Setiap{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              Jumat Siang.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            {COMMUNITY_INFO.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-300 font-medium">
            <span className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-lg">
              <Calendar className="w-4 h-4 text-cyan-400" />
              Setiap Jumat Siang
            </span>
            <span className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-lg">
              <Clock className="w-4 h-4 text-cyan-400" />
              14:00 - 15:30 WIB
            </span>
            <span className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-lg">
              <Video className="w-4 h-4 text-emerald-400" />
              Online via Google Meet
            </span>
          </div>
        </div>

        {/* Featured Card: Next Session Spotlight */}
        <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
          {/* Header of the Card */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  {session.category}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  Sesi #{session.sessionNumber}
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Hari Ini
                </span>
                <span className="text-xs text-zinc-400">
                  Jumat, {new Date(session.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                {session.title}
              </h2>
            </div>

            {/* Countdown Box */}
            <div className="flex flex-col items-start lg:items-end gap-1.5">
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                Dimulai Dalam:
              </span>
              <CountdownTimer targetDate={session.date} />
            </div>
          </div>

          {/* Body Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
            {/* Description & Key Takeaways */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Tentang Sesi Ini
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {session.description}
                </p>
              </div>

              {session.keyTakeaways && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                    Apa yang Akan Dipelajari & Dibahas:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {session.keyTakeaways.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 bg-zinc-900/60 border border-zinc-800/80 rounded-lg p-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {session.meetUrl && (
                  <a
                    href={session.meetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-102"
                  >
                    <Video className="w-4 h-4" />
                    Gabung Google Meet
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}

                <a
                  href={gcalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-sm border border-zinc-700 transition"
                >
                  <CalendarPlus className="w-4 h-4 text-cyan-400" />
                  Tambah ke Google Calendar
                </a>
              </div>

              {session.dialIn && (
                <div className="text-xs text-zinc-400 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-zinc-500 font-medium">Opsi Dial-in Telepon:</span>
                  <span className="text-zinc-200 font-mono font-medium">{session.dialIn.phone}</span>
                  <span className="text-zinc-600">•</span>
                  <span>PIN: <strong className="text-cyan-400 font-mono">{session.dialIn.pin}</strong></span>
                  {session.dialIn.moreNumbersUrl && (
                    <>
                      <span className="text-zinc-600">•</span>
                      <a
                        href={session.dialIn.moreNumbersUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 hover:underline"
                      >
                        Nomor telepon lainnya
                      </a>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Speaker Spotlight Card */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 h-full flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4 flex items-center justify-between">
                    <span>Pemateri Sesi Ini</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src={session.speaker.avatarUrl}
                      alt={session.speaker.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/40 p-0.5"
                    />
                    <div>
                      <h4 className="font-bold text-white text-base">
                        {session.speaker.name}
                      </h4>
                      <p className="text-xs text-cyan-400 font-medium mt-0.5">
                        {session.speaker.role}
                      </p>
                      {session.speaker.company && (
                        <p className="text-xs text-zinc-400 mt-0.5">
                          @{session.speaker.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
                    Praktisi dan kontributor aktif yang secara berkala membagikan pengalaman implementasi nyata dalam ekosistem AI.
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-5 border-t border-zinc-800/80 mt-5">
                  {session.speaker.linkedinUrl && (
                    <a
                      href={session.speaker.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                  )}
                  {session.speaker.githubUrl && (
                    <a
                      href={session.speaker.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
