"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const sections = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");

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
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 py-4 px-8">
      <div className="container mx-auto flex justify-end items-center">

        <div className="flex space-x-6">
          {sections.map((sec) => (
            <Link
              key={sec}
              href={`/#${sec}`}
              className={`relative pb-1 transition ${
                active === sec ? "text-white" : "text-gray-400"
              }`}
            >
              {sec}

              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
                  active === sec ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}