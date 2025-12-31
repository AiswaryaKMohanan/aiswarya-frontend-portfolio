import About from "../about/page";
import Contact from "../contact/page";
import Navbar from "../navbar/page";
import Profile from "../profile/page";
import Projects from "../projects/page";
import Skills from "../skills/page";


export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
