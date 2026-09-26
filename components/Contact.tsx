"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center glass rounded-3xl px-8 py-14"
      >
        <p className="text-purple-400 text-sm tracking-widest uppercase mb-2">
          Let&apos;s connect
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Let&apos;s Build Something Great
        </h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          I&apos;m currently looking for opportunities in Dubai and Europe —
          in frontend engineering and AI-powered product development.
          Let&apos;s talk.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:aiswaryak227@gmail.com"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 hover:scale-105 transition"
          >
            Email Me
          </a>
          <a
            href="https://github.com/AiswaryaKMohanan"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href="/Aiswarya-Kotharambath-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition underline underline-offset-4"
          >
            View CV
          </a>
          <span className="text-gray-600">·</span>
          <a
            href="/Aiswaya Kotharambath-Front_end_developer_CV.pdf"
            download
            className="text-gray-400 hover:text-white transition underline underline-offset-4"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
