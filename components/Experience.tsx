"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024 — Present",
    title: "Exploring AI-Powered Development",
    org: "Personal / Open Source",
    desc: "Building AI-driven applications, including a conversational chat app powered by LLM APIs, deepening skills in prompt engineering and AI integration into modern frontend stacks.",
  },
  {
    year: "2022 — Present",
    title: "Frontend Developer",
    org: "React · Next.js · TypeScript",
    desc: "Developing scalable, accessible, and high-performance web applications with a strong focus on component architecture, clean UI and smooth user experience.",
  },
  {
    year: "2021 — 2022",
    title: "Started Frontend Journey",
    org: "React · JavaScript · Tailwind CSS",
    desc: "Built a strong foundation in modern frontend development, learning component-driven design, responsive layouts and API-driven applications.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-purple-400 text-sm tracking-widest uppercase mb-2">
          My Journey
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
      </motion.div>

      <div className="relative border-l border-white/10 pl-8 flex flex-col gap-12">
        {timeline.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="relative"
          >
            <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 ring-4 ring-black" />
            <p className="text-xs tracking-wide text-purple-300 mb-1">
              {item.year}
            </p>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{item.org}</p>
            <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
