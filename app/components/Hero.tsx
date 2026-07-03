"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 py-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            <span className="text-white">Seifudin </span>
            <span className="text-cyan-400">Isaack</span>
          </h1>

          <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-300">
            Software Developer
          </h2>

          <p className="mt-2 text-cyan-400 text-lg">
            AI Enthusiast • Virtual Assistant • Problem Solver
          </p>

          <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">
            I build modern, responsive web applications using React,
            Next.js and TypeScript while leveraging AI tools to improve
            productivity, automate workflows, and solve real-world
            business problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold shadow-lg transition hover:bg-cyan-400"
            >
              🚀 View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-xl border border-cyan-500 px-7 py-3 font-semibold transition hover:bg-cyan-500"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-3xl">

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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">20+</h3>
              <p className="text-slate-400">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
              <p className="text-slate-400">Skills</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">AI</h3>
              <p className="text-slate-400">Certified</p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-[120px] opacity-30"></div>

            <Image
              src="/profile.jpg"
              alt="Seifudin Isaack"
              width={430}
              height={430}
              priority
              className="relative rounded-full border-4 border-cyan-400 shadow-[0_0_50px_rgba(6,182,212,.35)] object-cover w-80 h-80 lg:w-[430px] lg:h-[430px]"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}