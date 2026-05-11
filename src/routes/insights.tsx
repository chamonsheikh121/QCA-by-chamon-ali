import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader, FinalCTA } from "@/components/site/HomeSections";
import { Reveal } from "@/components/Reveal";
import board from "@/assets/hero-boardroom.jpg";
import meeting from "@/assets/meeting.jpg";
import workspace from "@/assets/workspace.jpg";
import skyline from "@/assets/skyline.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Aldwyn & Vance" },
      { name: "description", content: "Editorial briefings on client acquisition, institutional positioning and pipeline strategy for sophisticated firms." },
      { property: "og:title", content: "Insights — Aldwyn & Vance" },
      { property: "og:description", content: "Strategic perspective for institutional firms." },
    ],
  }),
  component: Insights,
});

const categories = ["All", "Client Acquisition", "Institutional Growth", "Wealth Advisory", "Executive Positioning", "Pipeline Strategy", "Strategic Outreach"];

const articles = [
  { cat: "Institutional Growth", title: "The end of the rainmaker era: why solo-driven pipelines no longer scale", read: "9 min", img: board },
  { cat: "Pipeline Strategy", title: "Stage velocity: the metric most wealth firms still ignore", read: "7 min", img: workspace },
  { cat: "Executive Positioning", title: "Authority is architecture: building credibility into every touchpoint", read: "11 min", img: meeting },
  { cat: "Client Acquisition", title: "Why your best clients won't refer (and what to build instead)", read: "8 min", img: skyline },
  { cat: "Strategic Outreach", title: "Outbound for institutional firms: precision over volume", read: "10 min", img: workspace },
  { cat: "Wealth Advisory", title: "Generational transitions and the silent risk to firm pipeline", read: "12 min", img: board },
];

function Insights() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Insights"
        title={<>Editorial briefings for <span className="text-serif italic gold-text font-normal">sophisticated</span> firms.</>}
        intro="Long-form perspective on positioning, infrastructure and the institutional discipline of client acquisition."
      />

      {/* Featured */}
      <section className="pb-12">
        <div className="container-luxe">
          <Reveal>
            <Link to="/insights" className="group block">
              <div className="grid lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-7 aspect-[16/10] overflow-hidden rounded-sm">
                  <img src={articles[0].img} alt={articles[0].title} loading="lazy" width={1280} height={800} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                </div>
                <div className="lg:col-span-5 space-y-5">
                  <div className="text-[11px] tracking-[0.22em] uppercase gold-text">Featured · {articles[0].cat}</div>
                  <h2 className="text-display text-3xl lg:text-5xl leading-tight">{articles[0].title}</h2>
                  <div className="hairline" />
                  <p className="text-muted-foreground leading-relaxed">
                    A structural look at why sophisticated firms can no longer rely on a small handful
                    of senior partners to drive pipeline — and what to build in their place.
                  </p>
                  <div className="text-xs text-muted-foreground tracking-wide">{articles[0].read} read · Marcus Aldwyn</div>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-y border-border">
        <div className="container-luxe flex gap-2 overflow-x-auto">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`px-4 py-2 text-xs tracking-[0.18em] uppercase whitespace-nowrap transition-colors ${
                i === 0 ? "bg-[var(--ink)] text-[var(--cream)]" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Article grid */}
      <section className="py-20">
        <div className="container-luxe grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((a, i) => (
            <Reveal key={a.title} delay={(i % 4) as 0|1|2|3}>
              <Link to="/insights" className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-sm mb-5">
                  <img src={a.img} alt={a.title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="text-[11px] tracking-[0.22em] uppercase gold-text">{a.cat}</div>
                <h3 className="text-display text-xl mt-3 leading-snug group-hover:text-foreground/70 transition-colors">{a.title}</h3>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{a.read} read</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </SiteShell>
  );
}
