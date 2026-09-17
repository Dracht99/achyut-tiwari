// src/sections/Navbar.tsx

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export type SectionId = string;

interface NavbarProps {
  items: readonly SectionId[];
  active: SectionId;
  onNavigate: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ items, active, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (id: SectionId) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#071b2b]/95 text-white shadow-lg backdrop-blur-md">
      <div className="mx-auto flex min-h-20 w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <button onClick={() => handleClick("Home")} className="flex items-center gap-3 text-left" aria-label="Go to home">
          <img
            src={`${import.meta.env.BASE_URL}profile_picture.png`}
            alt="Achyut Tiwari"
            className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-cyan-300/70 sm:h-12 sm:w-12"
          />
          <span>
            <span className="block text-base font-bold tracking-tight sm:text-lg">Achyut Tiwari</span>
            <span className="block text-xs text-cyan-300">Experimental physicist</span>
          </span>
        </button>
        <div className="hidden rounded-full border border-white/10 bg-white/5 p-1 md:block">
        <ul className="flex gap-1 text-sm font-medium">
          {items.map((id) => (
            <li key={id}>
              <button onClick={() => handleClick(id)} className={`rounded-full px-4 py-2 transition-colors ${active === id ? "bg-cyan-400 font-semibold text-[#071b2b]" : "text-slate-300 hover:bg-white/10 hover:text-white"}`} aria-current={active === id ? "page" : undefined}>
                {id}
              </button>
            </li>
          ))}
        </ul>
        </div>
        <button
          className="rounded-lg border border-white/15 p-2 text-slate-200 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0b2836] md:hidden">
          <ul className="grid grid-cols-2 gap-2 p-4">
            {items.map((id) => (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className={`w-full rounded-lg px-3 py-3 text-left transition-colors ${
                    active === id
                      ? "bg-cyan-400 font-semibold text-[#071b2b]"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                  aria-current={active === id ? "page" : undefined}
                >
                  {id}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;