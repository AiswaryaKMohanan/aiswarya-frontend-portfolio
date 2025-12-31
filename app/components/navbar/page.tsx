import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 fixed w-full z-10">
      <div className="container mx-auto flex  items-center">
        <h1 className="text-xl font-bold">MyPortfolio</h1>
        <div className="space-x-4 px-4">
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
