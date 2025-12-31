export default function Projects() {
  const projects = [
    { title: "Project One", description: "A modern web app built with Next.js", link: "#" },
    { title: "Project Two", description: "Responsive e-commerce site with Tailwind CSS", link: "#" },
  ];

  return (
    <section id="projects" className="py-20 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {projects.map(project => (
            <div key={project.title} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
