import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
        <p>© {year} Aiswarya Kotharambath. Built with Next.js &amp; Tailwind CSS.</p>
        <Link href="/#hero" className="hover:text-white transition">
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
