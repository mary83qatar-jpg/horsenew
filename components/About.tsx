import Image from "next/image";
import Reveal from "./Reveal";

const stats = [
  { value: "38", label: "Years of stewardship" },
  { value: "45", label: "Acres of pasture" },
  { value: "120+", label: "Horses trained" },
];

export default function About() {
  return (
    <section id="about" className="bg-sand-100 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage-500">
            About Us
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-tight text-bark-900 sm:text-5xl">
            A stable built on
            <span className="italic text-clay-600"> patience &amp; trust</span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-bark-800/80">
            <p>
              Willowbrook began in 1986 with a single mare, a weathered barn, and a
              belief that horses teach us as much as we teach them. Three decades
              later, our family still rises before dawn to the same rhythm — hooves
              on gravel, the creak of a stall door, mist lifting off the paddocks.
            </p>
            <p>
              We are a working estate, not a showroom. Every horse here is cared for
              as an individual, every rider met where they stand. Whether you are
              chasing a championship or simply the quiet joy of the saddle, you will
              find a home among the willows.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-3xl text-clay-600 sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-bark-800/70">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1598974357801-cbca100e65d3?auto=format&fit=crop&w=1100&q=80"
                alt="A rider gently bonding with a horse at the stable"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-cream-50 px-6 py-5 shadow-lg sm:block">
              <p className="font-serif text-2xl text-bark-900">The Hartley Family</p>
              <p className="text-sm text-clay-600">Owners &amp; Head Trainers</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
