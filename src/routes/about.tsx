import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader, FinalCTA } from "@/components/site/HomeSections";
import { Reveal } from "@/components/Reveal";
import founder from "@/assets/founder-portrait.jpg";
import workspace from "@/assets/workspace.jpg";
import meeting from "@/assets/meeting.jpg";
import skyline from "@/assets/skyline.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aldwyn & Vance" },
      { name: "description", content: "Multi-generation institutional perspective on client acquisition, positioning and growth infrastructure." },
      { property: "og:title", content: "About Aldwyn & Vance" },
      { property: "og:description", content: "Institutional perspective. Strategic discipline. Quiet excellence." },
    ],
  }),
  component: About,
});

const milestones = [
  { year: "2009", title: "Founded in New York", body: "Established as a private advisory to wealth firms emerging from the financial crisis." },
  { year: "2014", title: "Institutional methodology", body: "Codified the six-stage growth infrastructure framework still in use today." },
  { year: "2018", title: "London office", body: "Opened to serve European wealth management and private equity advisory." },
  { year: "2022", title: "Singapore presence", body: "Expansion into APAC family office and institutional advisory markets." },
  { year: "2025", title: "32 markets served", body: "Firms across four continents operating on Aldwyn & Vance infrastructure." },
];

const team = [
  { name: "Marcus Aldwyn", role: "Managing Partner", bio: "Twenty-two years across wealth management and institutional advisory.", img: founder },
  { name: "Eleanor Vance", role: "Partner, Strategy", bio: "Former director at a global consultancy serving private equity clients.", img: meeting },
  { name: "Henrik Brandt", role: "Partner, Infrastructure", bio: "CRM, automation and reporting architecture for institutional firms.", img: workspace },
];

function About() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="About the firm"
        title={<>A discreet practice serving <span className="text-serif italic gold-text font-normal">institutional</span> firms.</>}
        intro="Aldwyn & Vance is a private growth infrastructure firm working exclusively with wealth, advisory, private equity and institutional consulting businesses. Our work is referral-led and our roster is intentionally small."
      />

      {/* Founder story */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 items-center">
          <Reveal as="div" className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src={founder} alt="Founder" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover grayscale" />
            </div>
          </Reveal>
          <div className="lg:col-span-7 space-y-6">
            <Reveal><span className="eyebrow">Founder Story</span></Reveal>
            <Reveal delay={1} as="h2" className="text-display text-3xl lg:text-5xl">
              Built from inside the industry it serves.
            </Reveal>
            <Reveal delay={2} as="p" className="text-muted-foreground text-lg leading-relaxed">
              The firm was founded by Marcus Aldwyn after fifteen years inside a private wealth
              practice, where the mismatch between sophisticated client work and unsophisticated
              business development became impossible to ignore. Aldwyn & Vance exists to close that gap.
            </Reveal>
            <Reveal delay={3} as="p" className="text-muted-foreground leading-relaxed">
              We bring an operator's instincts, a strategist's discipline, and an insider's respect
              for how high-trust firms actually grow.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <div className="container-luxe grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal><span className="eyebrow">Institutional Philosophy</span></Reveal>
            <Reveal delay={1} as="h2" className="text-display text-3xl lg:text-4xl mt-6">Three principles guide every engagement.</Reveal>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
            {[
              ["Restraint", "We build less, more deliberately. Every system earns its place in the firm."],
              ["Authority", "We architect work that compounds the firm's perceived expertise over years, not quarters."],
              ["Discipline", "Operational rigor is the multiplier. Nothing is left to chance, instinct or memory."],
            ].map(([t, b], i) => (
              <Reveal key={t} delay={(i+1) as 1|2|3}>
                <div className="card-luxe p-7 h-full">
                  <div className="text-display text-2xl gold-text">{String(i+1).padStart(2,"0")}</div>
                  <h3 className="text-display text-xl mt-4">{t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <Reveal><span className="eyebrow">Trajectory</span></Reveal>
            <Reveal delay={1} as="h2" className="text-display text-4xl lg:text-5xl mt-6">Sixteen years of considered growth.</Reveal>
          </div>
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={(i % 4) as 0|1|2|3}>
                <div className="grid md:grid-cols-12 gap-6 py-8 border-t border-border">
                  <div className="md:col-span-2 text-display text-3xl gold-text">{m.year}</div>
                  <h3 className="md:col-span-4 text-display text-xl">{m.title}</h3>
                  <p className="md:col-span-6 text-muted-foreground leading-relaxed">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <div className="container-luxe">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Reveal><span className="eyebrow mx-auto">Leadership</span></Reveal>
            <Reveal delay={1} as="h2" className="text-display text-4xl lg:text-5xl mt-6">A small, senior team.</Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={(i+1) as 1|2|3}>
                <div className="card-luxe overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={t.img} alt={t.name} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover grayscale" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-display text-xl">{t.name}</h3>
                    <div className="text-[11px] tracking-[0.22em] uppercase gold-text mt-1">{t.role}</div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30"><img src={skyline} alt="" loading="lazy" width={1920} height={1024} className="h-full w-full object-cover" /></div>
        <div className="absolute inset-0 bg-background/85" />
        <div className="container-luxe relative grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <Reveal><span className="eyebrow">Why sophisticated firms work with us</span></Reveal>
            <Reveal delay={1} as="h2" className="text-display text-3xl lg:text-5xl mt-6">
              Because the standard <span className="text-serif italic gold-text font-normal">matters</span>.
            </Reveal>
          </div>
          <Reveal delay={2} as="div" className="lg:col-span-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>Our clients do not need volume. They need precision. They need a growth function that mirrors the seriousness of the client work itself.</p>
            <p>We work with a deliberately small number of firms each year, and we measure ourselves on multi-year retention rather than initial fees.</p>
            <Link to="/contact" className="btn-ghost-ink mt-6">Begin a private conversation</Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </SiteShell>
  );
}
