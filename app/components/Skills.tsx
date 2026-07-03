"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git & GitHub",
  "Node.js",
  "AI Prompt Engineering",
  "ChatGPT",
  "GitHub Copilot",
  "Customer Support",
  "Virtual Assistance",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 rounded-xl p-6 text-center border border-slate-800 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg">{skill}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}