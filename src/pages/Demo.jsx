import { useParams } from "react-router-dom";
import { portfolio } from "../data/portfolio.js";

export default function Demo() {
  const { slug } = useParams();
  const project = portfolio.projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="grid min-h-svh place-items-center bg-[#111111] p-6 text-center text-white">
        <div>
          <h1 className="text-5xl font-black">Demo Not Found</h1>
          <p className="mt-4 text-[#f1f2c4]">This project demo does not exist.</p>
        </div>
      </main>
    );
  }

  const isVideo = project.demo.includes(".mp4");

  return (
    <main className="grid min-h-svh place-items-center bg-[#111111] p-6 text-white">
      <section className="w-full max-w-[900px] text-center">
        <h1 className="mb-6 text-3xl font-black text-white sm:text-4xl">
          {project.name}
        </h1>
        <div className="mx-auto grid h-[600px] w-[800px] max-w-full place-items-center overflow-hidden rounded-2xl border border-[#f1f2c4]/40 bg-[#1b1c2b] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          {isVideo ? (
            <video
              className="h-full w-full object-contain"
              controls
              src={project.demo}
            >
              <track kind="captions" />
            </video>
          ) : (
            <iframe
              className="h-full w-full"
              src={project.demo}
              title={`${project.name} live demo`}
            />
          )}
        </div>
      </section>
    </main>
  );
}
