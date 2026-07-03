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
      className="min-h-screen flex items-center bg-slate-950 text-white pt-24 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 uppercase tracking-[0.25em] font-semibold mb-5">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Seifudin </span>
            <span className="text-cyan-400">Isaack</span>
          </h1>

          <h2 className="mt-8 text-3xl font-semibold text-white">
            Software Developer
          </h2>

          <p className="mt-3 text-cyan-400 text-xl">
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
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              🚀 View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 px-8 py-4 rounded-xl font-semibold transition duration-300"
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

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-20"></div>

            <Image
              src="/profile.jpg"
              alt="Seifudin Isaack"
              width={450}
              height={450}
              priority
              className="relative rounded-full border-4 border-cyan-400 shadow-2xl object-cover w-80 h-80 lg:w-[430px] lg:h-[430px]"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}