"use client";

import { motion } from "framer-motion";

export default function Profile() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-bold"
      >
        Aiswarya
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-gray-400 text-lg max-w-xl"
      >
        Frontend Engineer crafting clean and performant web experiences.
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        className="mt-8 px-6 py-3 bg-white text-black rounded-xl"
      >
        View Work
      </motion.a>
    </section>
  );
}
