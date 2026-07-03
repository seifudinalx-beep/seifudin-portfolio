"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    title: "ALX AI Career Essentials",
    image: "/projects/ai.png",
  },
  {
    title: "ALX Virtual Assistant",
    image: "/projects/va.png",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-center text-white">
          Certifications
        </h2>

        <p className="text-center text-slate-400 mt-4 max-w-2xl mx-auto">
          Professional certifications that demonstrate my commitment to
          continuous learning in technology, AI and virtual assistance.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {certificates.map((certificate) => (
            <motion.a
              key={certificate.title}
              href={certificate.image}
              target="_blank"
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400 transition shadow-xl"
            >
              <Image
                src={certificate.image}
                alt={certificate.title}
                width={900}
                height={600}
                className="w-full h-72 object-contain bg-slate-800 p-4"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <FaCertificate className="text-cyan-400" />
                  {certificate.title}
                </h3>

                <p className="text-cyan-400 mt-4 font-medium">
                  Click to view full certificate →
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}