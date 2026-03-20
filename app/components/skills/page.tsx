"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Skills() {

  const tech = [
  { name: "React", img: "/tech/react.png" },
  { name: "Next.js", img: "/tech/nextjs.png" },
  { name: "TypeScript", img: "/tech/typescript.png" },
  { name: "Tailwind", img: "/tech/tailwind.png" },
  { name: "Git", img: "/tech/git.png" },
  { name: "aws", img: "/tech/aws.png" },
];

  return (
    <section className="py-28 px-6 max-w-10xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold mb-12"
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {tech.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.08 }}
            className="p-6 border border-gray-700 rounded-xl flex flex-col items-center justify-center gap-4 bg-black/40 backdrop-blur"
          >
            <Image
              src={t.img}
              alt={t.name}
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="text-sm text-gray-300">{t.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
