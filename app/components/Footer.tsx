"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-white">Seifudin</span>{" "}
              <span className="text-cyan-400">Isaack</span>
            </h2>

            <p className="text-slate-400 mt-5 leading-8">
              Software Developer passionate about building modern
              web applications, AI-powered solutions, and creating
              great digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#home" className="text-slate-400 hover:text-cyan-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="text-slate-400 hover:text-cyan-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-white">
              Connect
            </h3>

            <div className="flex gap-5 text-3xl">

              <a
                href="https://github.com/seifudinalx-beep"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/seifudin-isaack-22604041a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:seifudinalx@gmail.com"
                className="hover:text-cyan-400 transition"
              >
                <FaEnvelope />
              </a>

            </div>

            <p className="text-slate-400 mt-6">
              seifudinalx@gmail.com
            </p>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">

          <p className="flex items-center justify-center gap-2">
            Built with Next.js, TypeScript & Tailwind CSS
            <FaHeart className="text-cyan-400" />
          </p>

          <p className="mt-3">
            © 2026 Seifudin Isaack. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}