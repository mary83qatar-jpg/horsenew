const nav = [
  { href: "#horses", label: "Horses" },
  { href: "#about", label: "About" },
  { href: "#offerings", label: "Offerings" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: <path d="M14 8h2V5h-2a3 3 0 00-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8a1 1 0 011-1z" />,
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="3" />
        <path d="M11 9l4 3-4 3V9z" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-bark-900 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <p className="font-serif text-2xl text-cream-50">
              Willowbrook <span className="text-gold-400">Stables</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream-100/60">
              A family-run equestrian estate in Greenfield Valley, devoted to the
              lifelong partnership between horse and rider.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Explore
            </p>
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-cream-100/70 transition-colors hover:text-cream-50"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Follow
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/15 text-cream-100/70 transition-all hover:border-gold-400/50 hover:text-gold-400"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 pt-8 text-xs text-cream-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Willowbrook Stables. All rights reserved.</p>
          <p>Crafted with care in the Green Mountains.</p>
        </div>
      </div>
    </footer>
  );
}
