import ContactForm from "../components/ContactForm.jsx";
import Shell from "../components/Shell.jsx";
import profileImage from "../assets/images/profilepicture.JPEG";
import { portfolio } from "../data/portfolio.js";

export default function Contact() {
  return (
    <Shell>
      <section className="grid w-full max-w-sm -translate-y-16 scale-80 items-center gap-7 sm:max-w-2xl md:max-w-4xl md:-translate-y-20 md:grid-cols-[1fr_1fr] md:gap-8 lg:max-w-5xl lg:-translate-y-28.5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <h1 className="mb-5 text-4xl font-black leading-none text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Let's Make Something Amazing!
          </h1>
          <div className="flex origin-left scale-110 flex-col gap-6 md:flex-row md:items-center">
            <img
              className="size-40 shrink-0 rounded-full border-10 border-[#f1f2c4] bg-white object-cover sm:size-44 sm:border-12"
              src={profileImage}
              alt={`${portfolio.name} profile`}
            />
            <div>
              <h2 className="mb-2 text-xl font-extrabold text-white sm:text-2xl">
                {portfolio.name}
              </h2>
              <a
                className="block wrap-break-word text-sm text-[#f1f2c4] underline-offset-4 transition hover:text-white hover:underline sm:text-base"
                href={`mailto:${portfolio.email}`}
              >
                {portfolio.email}
              </a>
              <p className="text-sm text-[#f1f2c4] sm:text-base">
                {portfolio.location}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a className="action-link" href={portfolio.cv}>
                  CV
                </a>
                <a className="action-link" href={portfolio.github}>
                  GitHub
                </a>
                <a className="action-link" href={portfolio.linkedin}>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
    </Shell>
  );
}
