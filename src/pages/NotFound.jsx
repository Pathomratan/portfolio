import { NavLink } from "react-router-dom";
import Shell from "../components/Shell.jsx";

export default function NotFound() {
  return (
    <Shell>
      <section className="w-full max-w-sm text-center sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
        <h1 className="mb-6 text-8xl font-black leading-none text-[#f1f2c4] sm:text-9xl md:text-[12rem] lg:text-[14rem]">
          404
        </h1>
        <p className="mb-6 text-2xl text-[#f1f2c4]">Page Not Found</p>
        <NavLink className="action-link inline-block" to="/">
          Back Home
        </NavLink>
      </section>
    </Shell>
  );
}
