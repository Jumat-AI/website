"use client";

import React from "react";
import { Sparkles, Heart } from "lucide-react";
import { COMMUNITY_INFO } from "@/data/community";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-zinc-800 bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-0.5">
              <div className="w-full h-full bg-zinc-950 rounded-[7px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-bold text-base tracking-tight text-white">
                jumat<span className="text-cyan-400">.ai</span>
                <span className="text-zinc-500">.id</span>
              </span>
              <p className="text-xs text-zinc-500">
                Inisiatif Komunitas Berbagi Pengetahuan Kecerdasan Buatan Indonesia
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <a href="#sesi-terdekat" className="hover:text-white transition">
              Sesi Terdekat
            </a>
            <a href="#arsip" className="hover:text-white transition">
              Arsip Materi
            </a>
            <a href="#call-for-speakers" className="hover:text-white transition">
              Call for Speakers
            </a>
            <a href="#komunitas" className="hover:text-white transition">
              Kanal Komunitas
            </a>
            <a href="#faq" className="hover:text-white transition">
              FAQ
            </a>
            <a
              href={COMMUNITY_INFO.links.githubOrg}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} {COMMUNITY_INFO.name}. Seluruh materi didistribusikan untuk edukasi publik.</p>
          <p className="flex items-center gap-1">
            Dikelola dengan <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> oleh komunitas penggiat AI Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}
