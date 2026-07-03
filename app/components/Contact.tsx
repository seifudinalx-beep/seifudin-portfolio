"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24 text-center">
      <motion.div
        initial={{ opacity:0,y:40 }}
        whileInView={{ opacity:1,y:0 }}
        transition={{ duration:.6 }}
        viewport={{ once:true }}
      >
        <h2 className="text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <p className="text-gray-400 text-lg mb-8">
          Interested in working together? Let's connect.
        </p>

        <div className="space-y-4 text-xl">
          <p>📧 seifudinalx@gmail.com</p>
          <p>📍 Nairobi, Kenya</p>
          <p>💻 GitHub: seifudinalx-beep</p>
        </div>
      </motion.div>
    </section>
  );
}