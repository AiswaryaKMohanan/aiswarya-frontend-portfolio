"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-purple-600 opacity-20 rounded-full blur-[140px]"
      />

      {/* Pink Glow */}
      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-pink-500 opacity-20 rounded-full blur-[140px]"
      />

      {/* Center Soft Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-indigo-500 opacity-10 rounded-full blur-[120px]"
      />

      {/* Subtle Noise Grid (texture) */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
    </div>
  );
}