import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
      <div className="pointer-events-none absolute -left-20 top-20 size-96 rounded-full bg-cyan-200/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="text-center lg:text-left">
          <h1 className="mt-5 text-4xl font-black leading-[1.18] tracking-tight sm:mt-6 sm:text-5xl md:text-6xl">
            Team communication built for the{" "}
            <span className="text-blue-600">modern workplace.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
            Talkino combines lightning-fast messaging, crystal-clear video, and
            deep AI insights in one cohesive workspace—built for teams that
            value speed and focus.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row lg:justify-start">
            <a
              className="rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1"
              href="#cta"
            >
              Start for free →
            </a>
            <a
              className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold transition hover:bg-slate-50"
              href="#"
            >
              Book a demo
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-2xl lg:pl-8">
          <div className="absolute inset-8 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="relative rotate-1 rounded-2xl border border-white bg-white p-2 shadow-[0_30px_70px_rgba(15,23,42,.18)] transition duration-500 hover:rotate-0 sm:p-3 lg:rotate-2">
            <Image
              src="/images/hero.png"
              alt="Talkino workspace dashboard"
              width={1024}
              height={768}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
