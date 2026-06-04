"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const details = [
  {
    label: "Visit",
    value: "1420 Willowbrook Lane\nGreenfield Valley, VT 05753",
    icon: (
      <path d="M12 21s-6-4.35-6-9a6 6 0 0112 0c0 4.65-6 9-6 9zM12 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    ),
  },
  {
    label: "Call",
    value: "(802) 555-0147\nMon–Sat · 8am–6pm",
    icon: (
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 14l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z" />
    ),
  },
  {
    label: "Email",
    value: "hello@willowbrookstables.com",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage-500">
            Get in Touch
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-tight text-bark-900 sm:text-5xl">
            Come walk the willows
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-clay-600">
            Schedule a tour, ask about lessons, or just say hello. We&apos;d love
            to introduce you to the herd and show you around the estate.
          </p>

          <ul className="mt-10 space-y-6">
            {details.map((d) => (
              <li key={d.label} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-clay-600/10 text-clay-600">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {d.icon}
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sage-600">
                    {d.label}
                  </p>
                  <p className="whitespace-pre-line text-base text-bark-800">
                    {d.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-sand-200 bg-cream-50 p-8 shadow-sm sm:p-10"
          >
            <div className="space-y-5">
              <Field id="name" label="Name" type="text" placeholder="Jane Rider" />
              <Field
                id="email"
                label="Email"
                type="email"
                placeholder="jane@example.com"
              />
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-bark-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us how we can help…"
                  className="w-full resize-none rounded-xl border border-sand-200 bg-cream-100 px-4 py-3 text-sm text-bark-900 outline-none transition focus:border-clay-500 focus:ring-2 focus:ring-clay-500/20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-clay-600 py-3.5 text-sm font-semibold tracking-wide text-cream-50 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-700 hover:shadow-md"
            >
              {sent ? "Thank you — we'll be in touch ✓" : "Send Message"}
            </button>
            {sent && (
              <p className="mt-3 text-center text-sm text-sage-600">
                Your message has been received.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-bark-800"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-sand-200 bg-cream-100 px-4 py-3 text-sm text-bark-900 outline-none transition focus:border-clay-500 focus:ring-2 focus:ring-clay-500/20"
      />
    </div>
  );
}
