"use client";

import React, { useState } from "react";
import { Sparkles, Menu, X, ArrowUpRight, Calendar } from "lucide-react";
import { COMMUNITY_INFO } from "@/data/community";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-bold text-lg tracking-tight text-white flex items-center">
                jumat<span className="text-cyan-400">.ai</span>
                <span className="text-zinc-500">.id</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1.5 ml-4 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Sesi Rutin Tiap Jumat 14:00 WIB
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#sesi-terdekat"
              className="text-sm text-zinc-300 hover:text-white transition-colors"
            >
              Sesi Terdekat
            </a>
            <a
              href="#arsip"
              className="text-sm text-zinc-300 hover:text-white transition-colors"
            >
              Arsip Materi
            </a>
            <a
              href="#call-for-speakers"
              className="text-sm text-zinc-300 hover:text-white transition-colors"
            >
              Ajukan Topik
            </a>
            <a
              href="#komunitas"
              className="text-sm text-zinc-300 hover:text-white transition-colors"
            >
              Komunitas
            </a>
            <a
              href="#faq"
              className="text-sm text-zinc-300 hover:text-white transition-colors"
            >
              FAQ
            </a>

            <a
              href={COMMUNITY_INFO.links.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all hover:scale-102"
            >
              Gabung Komunitas
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 px-4 pt-2 pb-5 space-y-3">
          <div className="flex items-center gap-1.5 py-1 px-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium">
            <Calendar className="w-3.5 h-3.5" />
            Sesi Rutin Tiap Jumat 14:00 WIB
          </div>
          <a
            href="#sesi-terdekat"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-zinc-300 hover:text-white py-1"
          >
            Sesi Terdekat
          </a>
          <a
            href="#arsip"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-zinc-300 hover:text-white py-1"
          >
            Arsip Materi
          </a>
          <a
            href="#call-for-speakers"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-zinc-300 hover:text-white py-1"
          >
            Ajukan Topik (Call for Speaker)
          </a>
          <a
            href="#komunitas"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-zinc-300 hover:text-white py-1"
          >
            Komunitas & Saluran
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-zinc-300 hover:text-white py-1"
          >
            Pertanyaan Umum (FAQ)
          </a>

          <div className="pt-2">
            <a
              href={COMMUNITY_INFO.links.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition"
            >
              Gabung Komunitas Sekarang
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
