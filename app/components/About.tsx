"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-8">
          I'm <span className="text-cyan-400 font-semibold">Seifudin Isaack</span>,
          a Software Developer, AI enthusiast, and Virtual Assistant from Kenya.
          I enjoy building modern web applications that are fast, responsive,
          and user-friendly.
        </p>

        <p className="text-gray-300 text-lg leading-8 mt-6">
          I recently completed the ALX AI Career Essentials program, where I
          learned how to use AI tools for productivity, prompt engineering,
          automation, research, and problem-solving. I enjoy combining software
          development with AI to build smarter digital solutions.
        </p>

        <p className="text-gray-300 text-lg leading-8 mt-6">
          Besides coding, I have experience in customer support and virtual
          assistance, helping businesses communicate effectively and deliver
          excellent customer experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-cyan-400 text-3xl font-bold">20+</h3>
            <p className="text-gray-400 mt-2">Projects & Practice Apps</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-cyan-400 text-3xl font-bold">10+</h3>
            <p className="text-gray-400 mt-2">Technical Skills</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-cyan-400 text-3xl font-bold">100%</h3>
            <p className="text-gray-400 mt-2">Committed to Learning</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}