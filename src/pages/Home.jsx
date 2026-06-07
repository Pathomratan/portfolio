import SkillPills from "../components/SkillPills.jsx";
import Shell from "../components/Shell.jsx";
import { portfolio } from "../data/portfolio.js";

export default function Home() {
  return (
    <Shell>
      <section className="mx-auto flex w-full max-w-sm flex-col items-center text-center sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
        <div className="mb-8 flex w-full flex-wrap justify-center gap-2 md:absolute md:right-10 md:top-33.5 md:z-30 md:mb-0 md:w-auto md:justify-end lg:right-16 lg:top-35.5">
          <a className="action-link bg-[#1b1c2b]/70 text-xs backdrop-blur sm:text-sm" href={portfolio.cv}>
            CV
          </a>
          <a className="action-link bg-[#1b1c2b]/70 text-xs backdrop-blur sm:text-sm" href={portfolio.github}>
            GitHub
          </a>
          <a className="action-link bg-[#1b1c2b]/70 text-xs backdrop-blur sm:text-sm" href={portfolio.linkedin}>
            LinkedIn
          </a>
        </div>
        <p className="mb-4 text-3xl sm:mb-5 sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I am
        </p>
        <h1 className="mx-auto mb-5 max-w-full text-center text-5xl font-black leading-none text-white wrap-anywhere sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
          {portfolio.name}
        </h1>
        <p className="mb-6 text-base uppercase text-[#f1f2c4] sm:text-lg md:text-xl lg:text-2xl">
          {portfolio.role}
        </p>
        <SkillPills skills={portfolio.highlightSkills} />
      </section>
    </Shell>
  );
}
