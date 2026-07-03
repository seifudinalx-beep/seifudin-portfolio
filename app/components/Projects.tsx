"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Personal Portfolio",
    image: "/projects/portfolio.png",
    description:
      "A modern developer portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion showcasing my projects, certifications and technical skills.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/seifudinalx-beep/seifudin-portfolio",
    demo: "https://seifudin-portfolio.vercel.app",
  },
  {
    title: "ALX AI Career Essentials",
    image: "/projects/ai.png",
    description:
      "Projects completed during the ALX AI Career Essentials programme covering prompt engineering, AI productivity, automation and problem solving.",
    tech: ["ChatGPT", "Gemini", "GitHub Copilot", "AI"],
    github: "#",
    demo: "#",
  },
  {
    title: "ALX Virtual Assistant",
    image: "/projects/va.png",
    description:
      "Virtual assistant projects demonstrating customer support, scheduling, communication, internet research and administrative skills.",
    tech: [
      "Customer Support",
      "Research",
      "Google Workspace",
      "CRM",
    ],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 pt-32 pb-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-center text-white">
          Featured Projects
        </h2>

        <p className="text-center text-slate-400 mt-5 max-w-3xl mx-auto text-lg leading-8">
          A collection of projects showcasing my experience in modern web
          development, artificial intelligence and virtual assistance.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-400 shadow-xl"
            >
              <div className="bg-slate-800 p-3">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={400}
                  className="w-full h-56 object-contain rounded-lg"
                />
              </div>

              <div className="p-7">
                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-5 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 px-5 py-3 rounded-lg font-semibold transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 px-5 py-3 rounded-lg transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}