import Reveal from "./Reveal";

type Offering = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const offerings: Offering[] = [
  {
    title: "Boarding",
    description:
      "Full-care stabling with spacious stalls, daily turnout, and lush, rotated pastures.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Training",
    description:
      "Progressive programs from groundwork to competition, tailored to horse and goal.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M4 20l5-5" />
        <circle cx="17" cy="7" r="3" />
        <path d="M14 9l-3 3 2 2 3-3" />
        <path d="M9 15l-2-2" />
      </svg>
    ),
  },
  {
    title: "Riding Lessons",
    description:
      "Patient instruction for every age and level — English, Western, and seat work.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="5" r="2.5" />
        <path d="M7 21c1-4 3-6 5-6s4 2 5 6" />
        <path d="M9 13l-3 2M15 13l3 2" />
      </svg>
    ),
  },
  {
    title: "Breeding",
    description:
      "Thoughtful, pedigree-focused breeding pairing sound conformation with kind minds.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 21s-6-4.35-6-9a6 6 0 0112 0c0 4.65-6 9-6 9z" />
        <path d="M12 12v3" />
        <circle cx="12" cy="9" r="1.2" />
      </svg>
    ),
  },
];

export default function Offerings() {
  return (
    <section id="offerings" className="relative bg-bark-900 py-24 text-cream-50 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
            What We Offer
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">
            Everything your horse needs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream-100/70">
            From the first lead-line lesson to the winner&apos;s circle, our team
            supports you at every stride.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 100}>
              <div className="group h-full rounded-2xl border border-cream-50/10 bg-cream-50/5 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:bg-cream-50/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/15 text-gold-400 transition-colors duration-500 group-hover:bg-gold-400 group-hover:text-bark-900">
                  <span className="block h-7 w-7 [&>svg]:h-full [&>svg]:w-full">
                    {item.icon}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/70">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
