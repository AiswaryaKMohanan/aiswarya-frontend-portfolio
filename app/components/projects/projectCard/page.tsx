import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack?: string[];
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  techStack = [],
  liveLink,
  githubLink = '',
  featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`w-full rounded-2xl overflow-hidden border border-gray-700 bg-white/5 backdrop-blur-lg transition duration-300 
      ${featured ? "max-w-6xl mx-auto shadow-xl" : "max-w-md"}
      hover:shadow-2xl hover:scale-[1.02]`}
    >
      {/* Image */}
      <div className="w-full h-56 overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {featured && "🚀 "}
          {title}
        </h3>

        <p className="text-gray-300 mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Live
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              className="px-4 py-2 border border-gray-500 text-white rounded-lg hover:bg-gray-800 transition"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}