import SkillPills from "./SkillPills.jsx";

export default function ProjectCard({ project }) {
  return (
    <article className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 md:bg-transparent md:p-0 md:border-0">
      <img
        className="aspect-[16/10] w-full rounded-2xl object-cover md:aspect-[4/3]"
        src={project.image}
        alt={`${project.name} screenshot`}
      />
      <div className="pt-4 sm:pt-5">
        <h2 className="mb-2 text-xl font-extrabold text-white sm:text-2xl">
          {project.name}
        </h2>
        <p className="min-h-0 text-sm leading-6 text-[#f1f2c4] sm:text-base sm:leading-7 lg:min-h-[72px]">
          {project.description}
        </p>
        <div className="mt-6">
          <SkillPills align="start" skills={project.techStack} />
        </div>
        <div className="mt-6 flex flex-wrap justify-start gap-3">
          <a
            className="action-link"
            href={project.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="action-link"
            href={`/projects/${project.slug}/demo`}
            rel="noreferrer"
            target="_blank"
          >
            Live Demo
          </a>
          {project.vercel && (
            <a
              className="action-link"
              href={project.vercel}
              rel="noreferrer"
              target="_blank"
            >
              Vercel
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
