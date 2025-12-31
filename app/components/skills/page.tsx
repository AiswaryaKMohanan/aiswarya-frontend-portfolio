export default function Skills() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "Responsive Design"];

  return (
    <section id="skills" className="py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {skills.map(skill => (
            <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
