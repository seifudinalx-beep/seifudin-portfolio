"use client";

import { motion } from "framer-motion";

const aiSkills = [
  "Prompt Engineering",
  "ChatGPT",
  "GitHub Copilot",
  "Google Gemini",
  "Microsoft Copilot",
  "AI Research",
  "Workflow Automation",
  "Content Generation",
];

export default function AI() {
  return (
    <section
      id="ai"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">
          AI Skills
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
          I recently completed the ALX AI Career Essentials program, where I
          learned how to leverage Artificial Intelligence to improve
          productivity, automate repetitive tasks, perform research, and solve
          real-world business problems.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {aiSkills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 rounded-xl p-6 text-center border border-slate-800 hover:border-cyan-400 hover:scale-105 transition-all"
            >
              <h3 className="font-semibold">{skill}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-900 rounded-2xl p-8 border border-slate-800">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">
            What I can do with AI
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>✅ Build smarter workflows using AI tools</li>
            <li>✅ Write better prompts for AI assistants</li>
            <li>✅ Automate repetitive business tasks</li>
            <li>✅ Generate documentation and reports</li>
            <li>✅ Research and summarize information quickly</li>
            <li>✅ Improve customer support with AI assistance</li>
            <li>✅ Increase productivity for businesses</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}