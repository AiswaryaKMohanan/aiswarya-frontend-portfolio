"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const sections = ["about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      let current = "about";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= window.innerHeight / 2) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div id="scroll-progress" style={{ scaleX }} />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/5 py-4 px-6 sm:px-10"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/#about"
            className="font-[var(--font-space-grotesk)] text-lg font-bold tracking-tight text-gradient"
          >
            AK.dev
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {sections.map((sec) => (
              <Link
                key={sec}
                href={`/#${sec}`}
                className={`relative pb-1 capitalize text-sm tracking-wide transition ${
                  active === sec ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {sec}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                    active === sec ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
            <a
              href="/Aiswarya-Kotharambath-CV.pdf"
              download
              className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col gap-[5px] p-2"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white block"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-white block"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white block"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-6 pb-2">
                {sections.map((sec) => (
                  <Link
                    key={sec}
                    href={`/#${sec}`}
                    onClick={() => setMenuOpen(false)}
                    className={`capitalize text-sm ${
                      active === sec ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {sec}
                  </Link>
                ))}
                <a
                  href="/Aiswarya-Kotharambath-CV.pdf"
                  download
                  className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium w-fit"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
