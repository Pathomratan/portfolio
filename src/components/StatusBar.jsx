import { portfolio } from "../data/portfolio.js";

export default function StatusBar() {
  return (
    <header
      className="absolute left-8 right-8 top-11 z-30 hidden justify-between gap-6 text-xs leading-relaxed text-[#f1f2c4] md:flex lg:left-[68px] lg:right-[68px] lg:top-[84px] lg:text-sm"
      aria-label="Portfolio status details"
    >
      <div>
        <p>Longitude - {portfolio.meta.longitude}</p>
        <p>Latitude - {portfolio.meta.latitude}</p>
      </div>
      <div className="text-right">
        <p>{portfolio.meta.browser} - Browser</p>
        <p>{portfolio.meta.os} - OS</p>
      </div>
    </header>
  );
}
