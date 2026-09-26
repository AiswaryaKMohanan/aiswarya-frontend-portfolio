"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
  "Senior Frontend Developer",
  "React & Next.js Engineer",
  "AI-Powered App Builder",
  "TypeScript Enthusiast",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Profile() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block mb-4 px-4 py-1 rounded-full text-xs tracking-wide border border-purple-500/30 text-purple-300 bg-purple-500/10"
          >
            Available for opportunities · Dubai &amp; Remote
          </motion.span>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-gradient">Aiswarya Kotharambath</span>
          </h1>

          <div className="h-7 sm:h-8 mb-6 text-base sm:text-xl text-purple-300 font-medium">
            {typed}
            <span className="animate-blink">|</span>
          </div>

          <p className="text-gray-300 max-w-lg mb-8">
            I build scalable, high-performance web applications and AI-driven
            products — blending clean UI, accessibility, and real-time
            intelligence into experiences people enjoy using.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="/#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-medium hover:opacity-90 hover:scale-105 transition"
            >
              View Projects
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition"
            >
              Get In Touch
            </Link>
          </div>

          <div className="flex gap-5 text-gray-400">
            <a
              href="https://github.com/AiswaryaKMohanan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition hover:-translate-y-1 inline-block"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.93c.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.76 2.71 1.25 3.38.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.6.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
              </svg>
            </a>
            <a
              href="mailto:aiswaryak227@gmail.com"
              aria-label="Email"
              className="hover:text-white transition hover:-translate-y-1 inline-block"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m3 6 9 7 9-7" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="p-1.5 rounded-full bg-white/10 border border-white/15">
            <Image
              src="/tech/profile.jpg"
              alt="Aiswarya profile"
              width={288}
              height={288}
              priority
              className="rounded-full object-cover w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 border-4 border-black"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
