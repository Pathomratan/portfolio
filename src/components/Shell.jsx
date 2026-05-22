import Navigation from "./Navigation.jsx";
import StatusBar from "./StatusBar.jsx";

export default function Shell({ children }) {
  return (
    <main className="grid min-h-svh place-items-center bg-[#111111] bg-[radial-gradient(circle_at_center,rgba(245,245,204,0.10),transparent_34%)] p-4 text-white sm:p-6 md:p-8 lg:p-8 xl:p-[50px]">
      <section className="relative grid min-h-[calc(100svh-32px)] w-full place-items-center overflow-hidden rounded-3xl bg-[#1b1c2b] bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px),radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_32%)] bg-[length:12px_12px,12px_12px,auto] px-4 pb-16 pt-28 shadow-[inset_0_0_70px_rgba(255,255,255,0.04)] sm:min-h-[calc(100svh-48px)] sm:px-6 sm:pt-32 md:min-h-[calc(100svh-64px)] md:rounded-[2rem] md:px-10 md:pb-20 md:pt-36 lg:h-[min(778px,calc(100svh-64px))] lg:min-h-0 lg:w-[min(1534px,calc(100vw-64px))] lg:rounded-[3rem] lg:px-16 lg:pb-20 lg:pt-36 xl:h-[min(778px,calc(100svh-100px))] xl:w-[min(1534px,calc(100vw-100px))]">
        <StatusBar />
        {children}
        <Navigation />
      </section>
    </main>
  );
}
