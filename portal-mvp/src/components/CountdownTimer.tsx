"use client";

import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string; // e.g. "2026-10-30" or "2026-11-06"
  targetTime?: string; // e.g. "14:00:00"
}

export function CountdownTimer({ targetDate, targetTime = "14:00:00" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    function calculate() {
      // Parse target time in WIB (+07:00)
      const target = new Date(`${targetDate}T${targetTime}+07:00`).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
    }

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetDate, targetTime]);

  if (timeLeft.isPassed) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        Sesi sedang berlangsung / materi akan segera diarsip
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-2.5 sm:p-3 min-w-[60px] sm:min-w-[72px]">
        <span className="text-xl sm:text-2xl font-bold text-white font-mono block">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider">Hari</span>
      </div>
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-2.5 sm:p-3 min-w-[60px] sm:min-w-[72px]">
        <span className="text-xl sm:text-2xl font-bold text-white font-mono block">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider">Jam</span>
      </div>
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-2.5 sm:p-3 min-w-[60px] sm:min-w-[72px]">
        <span className="text-xl sm:text-2xl font-bold text-white font-mono block">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider">Menit</span>
      </div>
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-2.5 sm:p-3 min-w-[60px] sm:min-w-[72px]">
        <span className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono block">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider">Detik</span>
      </div>
    </div>
  );
}
