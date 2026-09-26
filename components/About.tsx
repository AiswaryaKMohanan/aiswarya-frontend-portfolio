"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years of Experience", value: "5+" },
  { label: "Projects Shipped", value: "5+" },
  { label: "Technologies", value: "10+" },
  { label: "AI Projects", value: "2+" },
];

const highlights = [
  {
    title: "Frontend Engineering",
    desc: "Building responsive, accessible interfaces with React, Next.js and TypeScript, focused on performance and clean architecture.",
    icon: "🧩",
  },
  {
    title: "AI-Powered Products",
    desc: "Integrating LLM APIs and conversational AI into real applications — from chat interfaces to intelligent automation.",
    icon: "🤖",
  },
  {
    title: "Design-Minded",
    desc: "Translating designs into pixel-perfect, animated UI with smooth micro-interactions using Framer Motion and Tailwind CSS.",
    icon: "🎨",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-purple-400 text-sm tracking-widest uppercase mb-2">
            Get to know me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I&apos;m a passionate Frontend Developer skilled in React,
            Next.js, and TypeScript, building responsive and user-focused web
            applications. Lately, I&apos;ve been expanding into AI-powered
            development — building tools and products that combine solid
            frontend engineering with LLM integrations. I care deeply about
            clean UI, performance, and accessibility, and I&apos;m excited to
            bring that focus to Dubai&apos;s tech industry.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl py-6 px-3 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6"
            >
              <div className="text-3xl mb-3">{h.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
