"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight"
        >
          <span className="text-white">Seifudin</span>{" "}
          <span className="text-cyan-400">Isaack</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">

            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-slate-300 transition hover:text-cyan-400"
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <ul className="flex flex-col px-6 py-4">

            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-slate-300 hover:text-cyan-400"
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>
        </div>
      )}
    </header>
  );
}