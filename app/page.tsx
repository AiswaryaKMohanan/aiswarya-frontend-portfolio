import About from "./components/about/page";
import Contact from "./components/contact/page";
import Navbar from "./components/navbar/page";
import Profile from "./components/profile/page";
import Projects from "./components/projects/page";
import Skills from "./components/skills/page";

export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center font-sans  dark:bg-black fixed w-full bg-black text-white">
      <main className="flex min-h-screen items-center  dark:bg-black sm:items-start bg-black text-white">
       
         <div>
              <Navbar />
              <Profile />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </div>
      </main>
    // </div>
  );
}