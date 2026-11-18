import React from "react";
import { MessageSquare, Send, ArrowUpRight } from "lucide-react";
import { COMMUNITY_INFO } from "@/data/community";
import { YoutubeIcon, GithubIcon, DiscordIcon } from "./SocialIcons";

export function CommunitySection() {
  const channels = [
    {
      title: "Grup WhatsApp",
      description: "Diskusi harian santai, tanya jawab seputar AI, dan pengingat link sesi mingguan.",
      icon: MessageSquare,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      url: COMMUNITY_INFO.links.whatsappGroup,
      badge: "Paling Aktif",
    },
    {
      title: "Kanal Telegram",
      description: "Broadcast pengumuman jadwal, materi PDF, dan rekaman sesi tanpa kompresi.",
      icon: Send,
      color: "text-sky-400",
      bgColor: "bg-sky-500/10",
      borderColor: "border-sky-500/20",
      url: COMMUNITY_INFO.links.telegramGroup,
      badge: "Pengumuman",
    },
    {
      title: "Discord Server",
      description: "Ruang berbagi kode, voice chat santai, channel khusus riset, dan hackathon.",
      icon: DiscordIcon,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      url: COMMUNITY_INFO.links.discordServer,
      badge: "Tech Chat",
    },
    {
      title: "YouTube Channel",
      description: "Arsip seluruh rekaman sesi webinar Jumat.AI yang dapat ditonton ulang kapan saja.",
      icon: YoutubeIcon,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
      url: COMMUNITY_INFO.links.youtubeChannel,
      badge: "Rekaman Video",
    },
    {
      title: "GitHub Organization",
      description: "Repositori kode demo sesi, materi open-source, dan source code portal ini.",
      icon: GithubIcon,
      color: "text-zinc-200",
      bgColor: "bg-zinc-800",
      borderColor: "border-zinc-700",
      url: COMMUNITY_INFO.links.githubOrg,
      badge: "Open Source",
    },
  ];

  return (
    <section id="komunitas" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Ekosistem Komunitas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Terhubung Bersama Ratusan Penggiat AI
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Pilih kanal interaksi yang paling nyaman bagi Anda untuk berdiskusi, bertanya, atau sekadar networking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <a
                key={i}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${channel.bgColor} border ${channel.borderColor} flex items-center justify-center`}
                    >
                      <Icon className={`w-5 h-5 ${channel.color}`} />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300">
                      {channel.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-zinc-800/80 flex items-center justify-between text-xs font-medium text-cyan-400 group-hover:text-cyan-300 transition">
                  <span>Bergabung Sekarang</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Active Members & Participants Showcase */}
        {COMMUNITY_INFO.activeMembers && (
          <div className="mt-12 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-8">
            <div className="text-center sm:text-left mb-5">
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                <span>Peserta Aktif & Kontributor Diskusi</span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-normal">
                  Google Meet Log
                </span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Apresiasi kepada rekan-rekan yang secara konsisten hadir berdiskusi dan berbagi ide di setiap sesi mingguan:
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              {COMMUNITY_INFO.activeMembers.map((member, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-300 hover:border-zinc-700 hover:text-white transition"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
