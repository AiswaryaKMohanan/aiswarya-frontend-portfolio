import ProjectCard from "./projectCard/page";

export default function Projects() {
  const projects = [
    { title: "Project One", description: "A modern web app built with Next.js", link: "#" },
    { title: "Project Two", description: "Responsive e-commerce site with Tailwind CSS", link: "#" },
  ];

  return (
    <section id="projects">
      <div className="text-4xl py-28">Projects</div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-28 px-10">
  <ProjectCard
    title="Portfolio Website"
    description="Personal portfolio with animations and responsive UI."
    image="/portfolio.png"
    techStack={["Next.js", "Tailwind"]}
    liveLink="https://crypto-dashboard-bkyq.vercel.app/"
    githubLink="#"
  />

  <ProjectCard
    title="Task Manager"
    description="CRUD app with state management and API integration."
    image="/task.png"
    techStack={["React", "Redux"]}
    liveLink="#"
    githubLink="#"
  />
</div>
</section>
  );
}
