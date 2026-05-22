import Shell from "../components/Shell.jsx";
import { portfolio } from "../data/portfolio.js";

export default function About() {
  return (
    <Shell>
      <section className="scrollbar-hidden max-h-[calc(100svh-210px)] w-full max-w-sm overflow-y-auto pr-2 text-center sm:max-w-2xl md:max-h-[calc(100svh-260px)] md:max-w-3xl lg:max-h-[430px] lg:max-w-4xl">
        <h1 className="mb-5 text-5xl font-black leading-none text-white sm:text-6xl md:text-7xl lg:text-7xl">
          About
        </h1>
        <div className="mx-auto max-w-3xl space-y-4 text-left text-base leading-7 text-[#f1f2c4] sm:text-lg md:leading-8 lg:text-xl">
          {portfolio.about.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-7 grid gap-4 text-left md:mt-9 md:grid-cols-2 md:gap-6">
          <article className="rounded-2xl border border-[#f1f2c4]/30 p-4 sm:p-6">
            <h2 className="mb-3 text-xl font-extrabold text-white sm:text-2xl">
              Experience
            </h2>
            <ul className="space-y-3 text-sm leading-6 text-[#f1f2c4] sm:text-base sm:leading-7">
              {portfolio.experience.map((experience) => (
                <li className="flex gap-3" key={experience}>
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#f1f2c4]" />
                  <span>{experience}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-[#f1f2c4]/30 p-4 sm:p-6">
            <h2 className="mb-3 text-xl font-extrabold text-white sm:text-2xl">
              Education
            </h2>
            <ul className="space-y-3 text-sm leading-6 text-[#f1f2c4] sm:text-base sm:leading-7">
              {portfolio.education.map((education) => (
                <li className="flex gap-3" key={education}>
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#f1f2c4]" />
                  <span>{education}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </Shell>
  );
}
