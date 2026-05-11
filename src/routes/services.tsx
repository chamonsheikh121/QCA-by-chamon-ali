import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader, EngagementModels, FinalCTA } from "@/components/site/HomeSections";
import { Reveal } from "@/components/Reveal";
import { LineChart, Linkedin, MessagesSquare, Database, Workflow, Crown, Send, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aldwyn & Vance" },
      { name: "description", content: "Revenue infrastructure, executive positioning, CRM architecture and strategic outreach for institutional firms." },
      { property: "og:title", content: "Services — Aldwyn & Vance" },
      { property: "og:description", content: "Institutional-grade growth infrastructure services." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: LineChart, title: "Revenue Infrastructure", body: "End-to-end design of the firm's commercial engine — positioning, messaging, outreach, and measurement under one architecture." },
  { icon: Linkedin, title: "LinkedIn Positioning", body: "Executive-level presence for partners, principals and rainmakers — built to compound institutional authority over time." },
  { icon: MessagesSquare, title: "Messaging Systems", body: "Long-form, short-form and outbound messaging architected around your firm's authority, proof and segment relevance." },
  { icon: Database, title: "CRM Architecture", body: "Stage definitions, ownership, automation and reporting layers — implemented in HubSpot, Salesforce or institutional alternatives." },
  { icon: Workflow, title: "Automation Systems", body: "Workflow design that removes administrative drag from senior partners and creates leverage across the firm." },
  { icon: Crown, title: "Executive Branding", body: "Personal brand systems for managing partners — by invitation, integrated with the firm's broader positioning." },
  { icon: Send, title: "Strategic Outreach", body: "Multi-channel outbound engineered for relevance and brand discipline — never spray-and-pray volume tactics." },
  { icon: BarChart3, title: "Reporting Dashboards", body: "Private executive dashboards covering attribution, stage velocity and qualified pipeline value." },
];

function Services() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Services"
        title={<>The <span className="text-serif italic gold-text font-normal">infrastructure</span> beneath sophisticated growth.</>}
        intro="Each service is delivered as part of a coherent architecture — never as standalone tactics. Our role is to design and operate the systems your firm needs to grow with intention."
      />

      <section className="pb-24">
        <div className="container-luxe">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) as 0|1|2|3}>
                <div className="card-luxe p-8 lg:p-10 h-full group">
                  <div className="flex items-start gap-6">
                    <div className="h-14 w-14 grid place-items-center rounded-sm bg-secondary group-hover:bg-[var(--gold)]/15 transition-colors">
                      <s.icon className="h-6 w-6 gold-text" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">Service {String(i+1).padStart(2,"0")}</div>
                      <h3 className="text-display text-2xl mt-2">{s.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EngagementModels />
      <FinalCTA />
    </SiteShell>
  );
}
