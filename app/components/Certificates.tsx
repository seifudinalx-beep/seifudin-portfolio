"use client";

import { motion } from "framer-motion";

const certificates = [
  "Microsoft AI Career Essentials",
  "ALX AI Career Essentials",
  "ALX Professional Foundations",
  "ALX Software Engineering (In Progress)",
];

export default function Certificates() {
  return (
    <section id="certificates" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((certificate) => (
            <div
              key={certificate}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold">
                🏆 {certificate}
              </h3>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}