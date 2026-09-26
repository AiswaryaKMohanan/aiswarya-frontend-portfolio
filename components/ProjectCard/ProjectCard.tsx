"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  emoji?: string;
  gradient?: string;
  techStack?: string[];
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  emoji = "🚀",
  gradient = "from-purple-600 via-fuchsia-600 to-indigo-600",
  techStack = [],
  liveLink,
  githubLink = "",
  featured = false,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg transition-shadow duration-300
      ${featured ? "sm:col-span-2 lg:col-span-1 shadow-xl ring-1 ring-purple-500/30" : ""}
      hover:shadow-2xl hover:shadow-purple-500/10`}
    >
      {/* Media */}
      <div className={`w-full h-48 overflow-hidden relative bg-linear-to-br ${gradient}`}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            {emoji}
          </div>
        )}
        {featured && (
          <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-black/50 backdrop-blur text-white border border-white/20">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-black text-sm rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Live Demo
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white/20 text-white text-sm rounded-lg hover:bg-white/10 transition"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
