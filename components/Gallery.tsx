import Image from "next/image";
import { horses } from "@/lib/horses";
import Reveal from "./Reveal";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <dt className="text-[0.65rem] font-semibold uppercase tracking-wider text-clay-500">
        {label}
      </dt>
      <dd className="text-sm font-medium text-bark-800">{value}</dd>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="horses" className="bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage-500">
            Our Herd
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-bark-900 sm:text-5xl">
            Featured Horses
          </h2>
          <p className="mt-4 text-base leading-relaxed text-clay-600">
            Each of our horses is selected for soundness, temperament, and talent.
            Get to know the partners who make Willowbrook home.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {horses.map((horse, i) => (
            <Reveal key={horse.id} delay={(i % 3) * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sand-200 bg-cream-100 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={horse.image}
                    alt={`${horse.name}, a ${horse.breed}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-xs font-semibold text-clay-600 backdrop-blur">
                    {horse.discipline}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl text-bark-900">
                      {horse.name}
                    </h3>
                    <span className="text-sm text-sage-600">{horse.breed}</span>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-clay-600">
                    {horse.blurb}
                  </p>

                  <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-sand-200 pt-5">
                    <Stat label="Age" value={`${horse.age} yrs`} />
                    <Stat label="Breed" value={horse.breed} />
                    <Stat label="Focus" value={horse.discipline} />
                  </dl>

                  <button className="mt-6 w-full rounded-full border border-clay-500 py-2.5 text-sm font-semibold text-clay-600 transition-all duration-300 hover:bg-clay-600 hover:text-cream-50">
                    View Profile
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
