"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard/ProjectCard";

const projects = [
  {
    title: "AI Chat App",
    description:
      "A conversational AI chat application built with Next.js and TypeScript, integrating LLM APIs to deliver real-time, intelligent responses through a clean, streaming chat interface.",
    emoji: "🤖",
    gradient: "from-indigo-600 via-purple-600 to-fuchsia-600",
    techStack: ["Next.js", "TypeScript", "AI / LLM API"],
    githubLink: "https://github.com/AiswaryaKMohanan/ai-chat-app",
    featured: true,
  },
  {
    title: "Crypto Dashboard",
    description:
      "A real-time cryptocurrency dashboard with live price tracking, charts and a responsive, animated UI built with Next.js and Tailwind CSS.",
    emoji: "📊",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    techStack: ["Next.js", "Tailwind CSS", "REST API"],
    liveLink: "https://crypto-dashboard-bkyq.vercel.app/",
  },
  {
    title: "Task Manager",
    description:
      "A CRUD task management app with drag-and-drop boards, state management and full API integration for creating, updating and tracking tasks.",
    emoji: "✅",
    gradient: "from-orange-500 via-rose-500 to-pink-600",
    techStack: ["React", "Redux", "REST API"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-purple-400 text-sm tracking-widest uppercase mb-2">
          My Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          A mix of frontend engineering and AI-powered builds — from
          intelligent chat interfaces to data-driven dashboards.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} index={i} {...p} />
        ))}
      </div>
    </section>
  );
}
