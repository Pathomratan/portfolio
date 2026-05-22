import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];

export default function Navigation() {
  return (
    <nav
      className="absolute left-1/2 top-2 z-40 grid h-14 w-[calc(100%-32px)] max-w-md -translate-x-1/2 grid-cols-4 items-center rounded-full bg-linear-to-b from-[#34343c] to-[#24242a] text-xs font-extrabold shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:top-3 sm:text-sm md:h-15 md:max-w-lg lg:top-0 lg:max-w-143.5 lg:text-base"
      aria-label="Main navigation"
    >
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `grid h-full place-items-center transition duration-200 hover:-translate-y-0.5 hover:text-[#f2f5bd] ${
              isActive ? "text-[#f2f5bd]" : "text-[#f8f8ff]"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
