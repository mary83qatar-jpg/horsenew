"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#horses", label: "Horses" },
  { href: "#about", label: "About" },
  { href: "#offerings", label: "Offerings" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-50/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-cream-50/70"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#top"
          className={`font-serif text-xl tracking-tight transition-colors ${
            scrolled ? "text-bark-900" : "text-cream-50"
          }`}
        >
          Willowbrook
          <span className={scrolled ? "text-clay-500" : "text-gold-400"}>
            {" "}
            Stables
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${
                scrolled ? "text-bark-800" : "text-cream-100"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-clay-600 px-5 py-2 text-sm font-semibold text-cream-50 shadow-sm transition-all hover:bg-clay-700 hover:shadow-md"
          >
            Book a Visit
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${scrolled ? "text-bark-900" : "text-cream-50"}`}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" strokeLinecap="round" />
                <path d="M4 12h16" strokeLinecap="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-sand-200 bg-cream-50 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-bark-800"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-clay-600 px-5 py-2 text-center text-sm font-semibold text-cream-50"
            >
              Book a Visit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
