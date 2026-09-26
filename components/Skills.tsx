"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "React", img: "/tech/react.png", level: 90 },
      { name: "Next.js", img: "/tech/nextjs.png", level: 90 },
      { name: "TypeScript", img: "/tech/typescript.png", level: 85 },
      { name: "Tailwind CSS", img: "/tech/tailwind.png", level: 90 },
      { name: "Angular", img: "/tech/angular.png", level: 65 },
    ],
  },
  {
    title: "AI & Backend",
    items: [
      { name: "LLM APIs", emoji: "🤖", level: 70 },
      { name: "Node.js", emoji: "🟢", level: 65 },
      { name: "REST APIs", emoji: "🔌", level: 85 },
    ],
  },
  {
    title: "Tools & Cloud",
    items: [
      { name: "Git", img: "/tech/git.png", level: 90 },
      { name: "AWS", img: "/tech/aws.png", level: 60 },
      { name: "Vercel", emoji: "▲", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-purple-400 text-sm tracking-widest uppercase mb-2">
          What I work with
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold">Tech Stack</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.15, duration: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-semibold text-lg mb-5 text-purple-300">
              {cat.title}
            </h3>
            <div className="flex flex-col gap-5">
              {cat.items.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {"img" in t && t.img ? (
                      <Image
                        src={t.img}
                        alt={t.name}
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-lg leading-none">
                        {"emoji" in t ? t.emoji : ""}
                      </span>
                    )}
                    <span className="text-sm text-gray-200">{t.name}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${t.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.08 }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
