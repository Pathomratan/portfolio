import ProjectCard from "../components/ProjectCard.jsx";
import Shell from "../components/Shell.jsx";
import { portfolio } from "../data/portfolio.js";

export default function Projects() {
  return (
    <Shell>
      <section className="scrollbar-hidden max-h-[calc(100svh-210px)] w-full max-w-sm overflow-y-auto pr-2 sm:max-w-2xl md:max-h-[calc(100svh-260px)] md:max-w-4xl lg:max-h-140 lg:max-w-5xl">
        <h1 className="mb-6 text-center text-3xl font-black leading-none text-white sm:text-5xl md:mb-8 md:text-6xl lg:text-6xl xl:text-7xl">
          Projects Showcase
        </h1>
        <div className="grid gap-5 md:grid-cols-2 md:gap-7">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </Shell>
  );
}
