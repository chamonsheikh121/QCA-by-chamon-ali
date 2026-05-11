import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader, FinalCTA } from "@/components/site/HomeSections";
import { Reveal } from "@/components/Reveal";
import board from "@/assets/hero-boardroom.jpg";
import meeting from "@/assets/meeting.jpg";
import workspace from "@/assets/workspace.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Aldwyn & Vance" },
      { name: "description", content: "Selected engagements with wealth firms, advisory practices and institutional consulting businesses." },
      { property: "og:title", content: "Case Studies — Aldwyn & Vance" },
      { property: "og:description", content: "Institutional engagements, results and infrastructure." },
    ],
  }),
  component: CaseStudies,
});

const cases = [
  {
    industry: "Wealth Management", img: board,
    title: "Hartwell Private Capital — From referral-dependent to systematized growth",
    overview: "A 14-person wealth firm with $1.8B AUM facing a generational transition. New partners were not building books at the rate the founder had.",
    problem: "Pipeline depended entirely on the founder's relationships. No structured outbound. CRM was a contact list.",
    strategy: "Six-stage infrastructure rollout, beginning with positioning and ICP architecture, then messaging and outbound systems for each junior partner.",
    metrics: [["+184%", "Qualified pipeline"], ["41", "Strategic meetings / quarter"], ["7", "Partners on the system"]],
  },
  {
    industry: "Private Equity Advisory", img: meeting,
    title: "Valmont Equity Partners — Re-architected outbound for senior partners",
    overview: "Mid-market PE advisory needing a more institutional approach to senior outreach without diluting the brand.",
    problem: "Senior partners were either too busy or unwilling to do outreach. Internal BD function lacked credibility with target buyers.",
    strategy: "LinkedIn positioning system, executive-grade messaging architecture, and a dedicated outbound program operated under partner names.",
    metrics: [["3.2×", "Avg engagement value"], ["62", "C-suite conversations / quarter"], ["96%", "Partner satisfaction"]],
  },
  {
    industry: "Executive Consulting", img: workspace,
    title: "North Harbor Advisory — Institutional positioning rebuild",
    overview: "Boutique executive consultancy serving Fortune 500 leadership. Strong work, modest perception.",
    problem: "Pricing pressure due to perceived parity with smaller firms. Inbound leads were under-qualified.",
    strategy: "Full positioning rebuild, messaging architecture, and a quarterly insights program targeting senior corporate buyers.",
    metrics: [["+72%", "Average engagement size"], ["4.8×", "Inbound qualification rate"], ["18mo", "Avg client tenure"]],
  },
];

function CaseStudies() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Selected Engagements"
        title={<>Institutional work, <span className="text-serif italic gold-text font-normal">measured</span> outcomes.</>}
        intro="A selection of engagements presented in editorial form. Names, segments and metrics are published with client permission."
      />

      <section className="pb-24 space-y-24 lg:space-y-32">
        {cases.map((c, idx) => (
          <Reveal key={c.title} as="article">
            <div className="container-luxe">
              <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-start ${idx % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-6">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm">
                    <img src={c.img} alt={c.title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-6">
                  <div className="text-[11px] tracking-[0.22em] uppercase gold-text">{c.industry} · Case 0{idx+1}</div>
                  <h2 className="text-display text-3xl lg:text-4xl leading-tight">{c.title}</h2>
                  <div className="hairline" />
                  <Field label="Overview" body={c.overview} />
                  <Field label="Problem" body={c.problem} />
                  <Field label="Strategy" body={c.strategy} />
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {c.metrics.map(([k, v]) => (
                      <div key={k} className="border-t border-border pt-4">
                        <div className="text-display text-2xl gold-text">{k}</div>
                        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground mt-1">{v}</div>
                      </div>
                    ))}
                  </div>
                  <button className="text-sm flex items-center gap-2 gold-text hover:underline mt-4">
                    Request executive summary <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <FinalCTA />
    </SiteShell>
  );
}

function Field({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{label}</div>
      <p className="mt-2 text-foreground/85 leading-relaxed">{body}</p>
    </div>
  );
}
