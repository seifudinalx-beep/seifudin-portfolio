"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A modern portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion to showcase my skills, projects, and professional journey.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/seifudinalx-beep/seifudin-portfolio",
    demo: "https://seifudin-portfolio.vercel.app",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "AI Productivity Projects",
    description:
      "Projects completed during the ALX AI Career Essentials program using AI for research, automation, prompt engineering, and workflow optimization.",
    tech: ["ChatGPT", "GitHub Copilot", "Gemini", "Prompt Engineering"],
    github: "#",
    demo: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Customer Support Experience",
    description:
      "Experience providing professional customer support, virtual assistance, communication, troubleshooting, and administrative support.",
    tech: [
      "Customer Support",
      "Virtual Assistance",
      "Communication",
    ],
    github: "#",
    demo: "#",
    color: "from-emerald-500 to-green-600",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold uppercase tracking-widest">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Here are some of the projects that demonstrate my software
            development, AI, and problem-solving skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl"
            >

              <div
                className={`h-44 bg-gradient-to-r ${project.color} flex items-center justify-center`}
              >
                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>
              </div>

              <div className="p-6">

                <p className="text-slate-400 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="bg-slate-800 text-cyan-400 px-3 py-1 rounded-full text-sm"
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
                    Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}