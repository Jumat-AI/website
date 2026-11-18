import React from "react";
import { COMMUNITY_INFO } from "@/data/community";
import { Users, Presentation, Sparkles, ShieldCheck } from "lucide-react";

export function StatsSection() {
  const icons = [Presentation, Users, Sparkles, ShieldCheck];

  return (
    <section className="border-y border-zinc-800/80 bg-zinc-950/50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {COMMUNITY_INFO.stats.map((stat, idx) => {
            const Icon = icons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="flex flex-col items-center sm:items-start text-center sm:text-left bg-zinc-900/40 p-4 rounded-xl border border-zinc-800/50"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
