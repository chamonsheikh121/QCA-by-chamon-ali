import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative bg-[oklch(0.13_0.005_250)] text-[oklch(0.85_0.005_90)] mt-32">
      <div className="hairline" />
      <div className="container-luxe py-20 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2">
            <span className="inline-block h-7 w-7 rounded-sm gradient-gold-bg" />
            <span className="text-display text-[15px] tracking-[0.2em] uppercase text-white">
              Aldwyn <span className="gold-text">&amp;</span> Vance
            </span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
            Institutional growth infrastructure for wealth firms, advisory practices,
            private equity professionals and high-trust consulting businesses.
          </p>
          <div className="mt-8 text-xs tracking-[0.2em] uppercase text-white/40">
            New York · London · Singapore
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <FooterCol title="Firm" items={[
            { label: "About", to: "/about" },
            { label: "Services", to: "/services" },
            { label: "Case Studies", to: "/case-studies" },
          ]} />
          <FooterCol title="Insights" items={[
            { label: "Articles", to: "/insights" },
            { label: "Research", to: "/insights" },
            { label: "Briefings", to: "/insights" },
          ]} />
          <FooterCol title="Engage" items={[
            { label: "Contact", to: "/contact" },
            { label: "Alignment Call", to: "/contact" },
            { label: "Engagement Models", to: "/services" },
          ]} />
          <FooterCol title="Legal" items={[
            { label: "Privacy", to: "/" },
            { label: "Terms", to: "/" },
            { label: "Disclosures", to: "/" },
          ]} />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-luxe py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] tracking-[0.18em] uppercase text-white/40">
          <span>© {new Date().getFullYear()} Aldwyn &amp; Vance Partners</span>
          <span>Institutional Growth Infrastructure</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.22em] uppercase gold-text">{title}</div>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="text-white/70 hover:text-white transition-colors">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
