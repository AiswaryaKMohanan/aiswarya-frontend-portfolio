"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Profile() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Aiswarya Kotharambath
          </h1>

          <p className="text-gray-400 mb-4">
            Frontend Engineer | React • TypeScript • NextJS
          </p>

          <p className="text-gray-300">
            Building scalable, high-performance web applications with a focus on
            clean UI, accessibility, and user experience.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="p-1 rounded-full">
            <Image
              src="/tech/profile.jpg"
              alt="Aiswarya profile"
              width={256}
              height={200}
              priority
              className="object-cover border-4 border-gray-900 shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:scale-105 transition duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
