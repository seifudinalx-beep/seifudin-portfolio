"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-center text-white">
          Contact Me
        </h2>

        <p className="text-center text-slate-400 mt-4 max-w-2xl mx-auto">
          I'm always open to new opportunities, freelance work,
          internships and collaborations. Feel free to reach out!
        </p>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">

          {/* Left Side */}
          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <div className="bg-cyan-500 p-4 rounded-xl text-white text-xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Email
                </h3>

                <a
                  href="mailto:seifudinalx@gmail.com"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  seifudinalx@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-cyan-500 p-4 rounded-xl text-white text-xl">
                <FaPhone />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Phone
                </h3>

                <p className="text-slate-400">
                  +254 XXX XXX XXX
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-cyan-500 p-4 rounded-xl text-white text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Location
                </h3>

                <p className="text-slate-400">
                  Nairobi, Kenya
                </p>
              </div>
            </div>

            <div className="flex gap-6 text-3xl pt-4">

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

          </div>

          {/* Right Side */}

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
            />

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </motion.div>
    </section>
  );
}