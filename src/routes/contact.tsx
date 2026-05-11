import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/site/HomeSections";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { Calendar, Mail, MapPin, Phone, ChevronDown, ArrowRight } from "lucide-react";
import boardroom from "@/assets/hero-boardroom.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aldwyn & Vance" },
      { name: "description", content: "Schedule an alignment call with Aldwyn & Vance — institutional growth infrastructure for sophisticated firms." },
      { property: "og:title", content: "Contact Aldwyn & Vance" },
      { property: "og:description", content: "Schedule a private alignment call." },
    ],
  }),
  component: Contact,
});

const faqs = [
  { q: "Who do you typically work with?", a: "Wealth firms, RIAs, financial advisors, private equity advisory practices, executive consultants, and institutional service businesses operating in high-trust segments." },
  { q: "What does an engagement look like?", a: "We work in quarterly or annual partnerships. Engagements begin with a positioning audit and roll forward into infrastructure design, build, and ongoing operation." },
  { q: "Are you a marketing agency?", a: "No. We build and operate the underlying growth function — closer to a fractional revenue and infrastructure team than a traditional agency." },
  { q: "Is there a typical investment range?", a: "Engagements are calibrated to firm size and scope. We share specifics during the alignment call once mutual fit is established." },
  { q: "How quickly can we start?", a: "We onboard a small number of new firms each quarter. Current capacity is shared during the alignment call." },
];

function Contact() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Begin a conversation"
        title={<>Schedule a private <span className="text-serif italic gold-text font-normal">alignment</span> call.</>}
        intro="A 30-minute conversation with a partner. No pitch. We use the time to understand your firm and determine whether a deeper conversation is warranted."
      />

      <section className="pb-24">
        <div className="container-luxe grid lg:grid-cols-12 gap-12">
          {/* Form */}
          <Reveal as="div" className="lg:col-span-7">
            <form className="card-luxe p-8 lg:p-10 space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thank you — a partner will be in touch within one business day."); }}>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 gold-text" />
                <h2 className="text-display text-2xl">Request your alignment call</h2>
              </div>
              <div className="hairline" />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="First name" name="firstName" />
                <Field label="Last name" name="lastName" />
                <Field label="Firm" name="firm" />
                <Field label="Role" name="role" />
                <Field label="Work email" type="email" name="email" />
                <Field label="Phone" name="phone" />
              </div>
              <div>
                <Label>Segment</Label>
                <select className="mt-2 w-full bg-transparent border border-border h-12 px-4 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors">
                  <option>Wealth Management</option>
                  <option>RIA / Financial Advisory</option>
                  <option>Private Equity Advisory</option>
                  <option>Executive Consulting</option>
                  <option>Institutional Services</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <Label>What would you like to discuss?</Label>
                <textarea rows={5} className="mt-2 w-full bg-transparent border border-border p-4 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors resize-none" placeholder="A few sentences on the firm and your current focus." />
              </div>
              <button type="submit" className="btn-gold w-full sm:w-auto">Request alignment call <ArrowRight className="h-4 w-4" /></button>
              <p className="text-xs text-muted-foreground">Submissions are reviewed by a partner. We respond within one business day.</p>
            </form>
          </Reveal>

          {/* Side */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img src={boardroom} alt="Boardroom" loading="lazy" width={1536} height={1024} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-[11px] tracking-[0.22em] uppercase gold-text">Headquarters</div>
                  <div className="text-display text-xl mt-1">200 Park Avenue, New York</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="card-luxe p-7 space-y-5">
                <ContactLine icon={Mail} label="Direct" value="partners@aldwynvance.com" />
                <ContactLine icon={Phone} label="By appointment" value="+1 (212) 555 0188" />
                <ContactLine icon={MapPin} label="Offices" value="New York · London · Singapore" />
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="card-luxe p-7">
                <h3 className="text-display text-xl mb-4">Frequently asked</h3>
                <div className="divide-y divide-border">
                  {faqs.map((f, i) => (
                    <button
                      key={f.q}
                      type="button"
                      onClick={() => setOpen(open === i ? null : i)}
                      className="w-full text-left py-4 group"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-medium">{f.q}</span>
                        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
                      </div>
                      {open === i && (
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{children}</label>;
}
function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input type={type} name={name} className="mt-2 w-full bg-transparent border border-border h-12 px-4 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors" />
    </div>
  );
}
function ContactLine({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 grid place-items-center rounded-sm bg-secondary">
        <Icon className="h-4 w-4 gold-text" />
      </div>
      <div>
        <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{label}</div>
        <div className="text-sm mt-1">{value}</div>
      </div>
    </div>
  );
}
