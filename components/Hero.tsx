import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?auto=format&fit=crop&w=2000&q=80"
        alt="A horse galloping across an open field at golden hour"
        fill
        priority
        sizes="100vw"
        className="animate-slow-zoom object-cover"
      />
      {/* Warm gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-bark-900/60 via-bark-900/30 to-bark-900/70" />
      <div className="absolute inset-0 bg-gradient-to-tr from-clay-700/30 to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-5 animate-[fade-up_0.9s_ease-out_both] text-xs font-semibold uppercase tracking-[0.35em] text-gold-400 sm:text-sm">
          Est. 1986 · Rolling Hills Estate
        </p>
        <h1 className="max-w-4xl animate-[fade-up_0.9s_0.1s_ease-out_both] font-serif text-5xl font-medium leading-[1.05] text-cream-50 drop-shadow-sm sm:text-6xl md:text-7xl lg:text-8xl">
          Where Horses
          <span className="block italic text-sand-200">&amp; People Thrive</span>
        </h1>
        <p className="mt-6 max-w-xl animate-[fade-up_0.9s_0.2s_ease-out_both] text-base leading-relaxed text-cream-100/90 sm:text-lg">
          A family-run equestrian estate devoted to the craft of horsemanship —
          where every gallop, lesson, and quiet moment in the barn is made to last.
        </p>
        <div className="mt-10 flex animate-[fade-up_0.9s_0.3s_ease-out_both] flex-col items-center gap-4 sm:flex-row">
          <a
            href="#horses"
            className="group rounded-full bg-cream-50 px-8 py-4 text-sm font-semibold tracking-wide text-bark-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl"
          >
            Meet the Horses
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#about"
            className="rounded-full border border-cream-50/40 px-8 py-4 text-sm font-semibold tracking-wide text-cream-50 backdrop-blur-sm transition-all duration-300 hover:bg-cream-50/10"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#faf6ee" strokeWidth="1.5">
          <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
