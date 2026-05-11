import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Target, Workflow, LineChart, Users2, Quote, MessagesSquare, Briefcase, GitBranch } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroBoardroom from "@/assets/hero-boardroom.jpg";
import founderPortrait from "@/assets/founder-portrait.jpg";
import workspace from "@/assets/workspace.jpg";
import meeting from "@/assets/meeting.jpg";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ───────────── HERO ───────────── */
export function HomeHero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none float-slow"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none float-slow"
        style={{ background: "var(--gradient-radial-gold)", animationDelay: "2s" }}
      />
      <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative">
        <div className="lg:col-span-6 space-y-8">
          <Reveal as="div"><span className="eyebrow">Institutional Growth Infrastructure</span></Reveal>
          <Reveal delay={1} as="h1" className="text-display text-[44px] sm:text-[56px] lg:text-[68px]">
            Predictable client acquisition for{" "}
            <span className="text-serif italic gold-text font-normal">sophisticated</span> firms.
          </Reveal>
          <Reveal delay={2} as="p" className="max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            We help financial professionals, advisory practices, and institutional businesses build
            strategic growth systems that generate qualified conversations consistently — without
            diluting the brand or stretching senior time.
          </Reveal>
          <Reveal delay={3} as="div" className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-gold">Schedule Your Alignment Call <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/services" className="btn-ghost-ink">View Engagement Models</Link>
          </Reveal>
          <Reveal delay={4} as="div" className="pt-8 border-t border-border max-w-md">
            <p className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground leading-relaxed">
              Trusted by firms operating across wealth management, advisory,<br className="hidden sm:block" /> private equity, and institutional consulting.
            </p>
          </Reveal>
        </div>

        <Reveal delay={2} as="div" className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[var(--shadow-luxe)]">
            <img
              src={heroBoardroom}
              alt="Executive boardroom overlooking financial district"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden md:block bg-background border border-border p-6 max-w-[260px] shadow-[var(--shadow-soft)]">
            <div className="text-[11px] tracking-[0.22em] uppercase gold-text">Engagement</div>
            <div className="mt-2 text-display text-2xl">96% retention</div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Across multi-year strategic infrastructure engagements.
            </p>
          </div>
          <div className="absolute -top-6 -right-6 hidden md:flex items-center gap-2 bg-background border border-border px-4 py-3 shadow-[var(--shadow-soft)]">
            <div className="h-2 w-2 rounded-full gradient-gold-bg" />
            <span className="text-[11px] tracking-[0.22em] uppercase">Now booking Q2</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── TRUST BAR ───────────── */
const partners = [
  "MERIDIAN CAPITAL", "NORTH HARBOR", "ASHFORD WEALTH", "VALMONT PARTNERS",
  "REGENT EQUITY", "BLACKSTONE LANE", "KENWOOD ADVISORY", "STILLWATER GROUP",
];
export function TrustBar() {
  return (
    <section className="py-14 border-y border-border bg-secondary/40">
      <div className="container-luxe">
        <Reveal as="div" className="text-center mb-10">
          <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
            Selected firms we collaborate with
          </span>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-6 items-center">
          {partners.map((p, i) => (
            <Reveal key={p} delay={(i % 4) as 0|1|2|3} as="div" className="text-center">
              <span className="text-[11px] tracking-[0.22em] uppercase text-foreground/60 hover:text-foreground transition-colors">
                {p}
              </span>
            </Reveal>
          ))}
        </div>
        <div className="hairline mt-12" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
          {[
            ["500+", "Strategic conversations generated"],
            ["32", "Markets served globally"],
            ["18yr", "Combined institutional experience"],
            ["96%", "Multi-year retention rate"],
          ].map(([k, v], i) => (
            <Reveal key={k} delay={(i % 4) as 0|1|2|3} as="div">
              <div className="text-display text-3xl lg:text-4xl gold-text">{k}</div>
              <div className="mt-2 text-xs tracking-wide text-muted-foreground">{v}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── WHY GROWTH STALLS ───────────── */
const stallReasons = [
  {
    icon: Users2,
    title: "Inconsistent Referrals",
    body: "Pipeline depends on relationships forged years ago. Senior partners cannot model next quarter, much less next fiscal year.",
  },
  {
    icon: LineChart,
    title: "Weak Pipeline Visibility",
    body: "No structured view of where conversations originate, stall, or convert — strategic decisions become directional rather than data-led.",
  },
  {
    icon: Briefcase,
    title: "Leadership Time Drain",
    body: "Founders and managing partners remain the bottleneck for outreach, follow-up, and meetings — limiting scale and senior leverage.",
  },
];
export function WhyGrowthStalls() {
  return (
    <section className="py-28 lg:py-36">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <Reveal><span className="eyebrow">The Diagnosis</span></Reveal>
            <Reveal delay={1} as="h2" className="text-display text-4xl lg:text-5xl mt-6">
              Why sophisticated firms <span className="text-serif italic gold-text font-normal">stall</span> at the next tier.
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={2} as="p" className="text-muted-foreground text-lg leading-relaxed">
              In our work with wealth firms, advisory practices and institutional service businesses,
              three structural patterns explain almost every plateau. None of them are talent problems.
            </Reveal>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {stallReasons.map((r, i) => (
            <Reveal key={r.title} delay={(i+1) as 1|2|3}>
              <div className="card-luxe p-8 h-full group">
                <div className="h-12 w-12 flex items-center justify-center rounded-sm bg-secondary group-hover:bg-[var(--gold)]/15 transition-colors">
                  <r.icon className="h-5 w-5 gold-text" />
                </div>
                <h3 className="text-display text-xl mt-6">{r.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                <div className="hairline mt-8 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── EXECUTIVE INSIGHT BLOCK ───────────── */
export function ExecutiveInsight() {
  return (
    <section className="py-28 lg:py-36 bg-secondary/40">
      <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal as="div" className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img src={founderPortrait} alt="Founder portrait" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover grayscale" />
          </div>
        </Reveal>
        <div className="lg:col-span-7 space-y-8">
          <Reveal><span className="eyebrow">Executive Perspective</span></Reveal>
          <Reveal delay={1} as="h2" className="text-display text-3xl lg:text-[44px]">
            Most firms don't have a lead problem. They have a{" "}
            <span className="text-serif italic gold-text font-normal">positioning</span> and{" "}
            infrastructure problem.
          </Reveal>
          <Reveal delay={2} as="p" className="text-muted-foreground text-lg leading-relaxed">
            For high-trust businesses serving sophisticated clients, growth is not a function of
            volume — it is a function of clarity, relevance, and operational discipline.
            We design the underlying systems so that every qualified prospect encounters a coherent,
            credible firm at every touchpoint.
          </Reveal>
          <Reveal delay={3}>
            <div className="border-l-2 border-[var(--gold)] pl-6 py-2">
              <Quote className="h-5 w-5 gold-text mb-3" />
              <p className="text-serif italic text-2xl leading-snug">
                "We don't generate leads. We engineer the conditions in which the right
                conversations become inevitable."
              </p>
              <div className="mt-4 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                Marcus Aldwyn — Managing Partner
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────── COUNTER METRICS ───────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(eased * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export function Outcomes() {
  const metrics = [
    { value: 528, suffix: "+", label: "Qualified meetings booked", sub: "Across active client engagements" },
    { value: 312, suffix: "%", label: "Pipeline visibility uplift", sub: "Average across first 90 days" },
    { value: 22, suffix: "h/wk", label: "Senior time recovered", sub: "Per managing partner" },
    { value: 4, suffix: "x", label: "Outreach efficiency gain", sub: "Versus internal benchmarks" },
  ];
  return (
    <section className="py-28 lg:py-36">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 items-end">
          <div className="lg:col-span-7">
            <Reveal><span className="eyebrow">Outcomes</span></Reveal>
            <Reveal delay={1} as="h2" className="text-display text-4xl lg:text-5xl mt-6">
              Measurable results, recorded against{" "}
              <span className="text-serif italic gold-text font-normal">institutional</span> standards.
            </Reveal>
          </div>
          <Reveal delay={2} as="p" className="lg:col-span-4 lg:col-start-9 text-muted-foreground leading-relaxed">
            Every engagement is reported through a private executive dashboard with attribution,
            stage velocity, and qualified pipeline value.
          </Reveal>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={(i % 4) as 0|1|2|3}>
              <div className="border-r border-b lg:border-b-0 border-border p-8 lg:p-10 last:border-r-0 [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r">
                <div className="text-display text-5xl lg:text-6xl gold-text">
                  <Counter to={m.value} suffix={m.suffix} />
                </div>
                <div className="mt-4 text-sm font-medium">{m.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} as="div" className="mt-16 relative aspect-[16/8] overflow-hidden rounded-sm border border-border bg-secondary/40">
          <img src={workspace} alt="Executive workspace" loading="lazy" width={1280} height={1024} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 grid place-items-center sm:place-items-start sm:p-12">
            <div className="max-w-md p-6 sm:p-0">
              <div className="text-[11px] tracking-[0.22em] uppercase gold-text">Reporting</div>
              <h3 className="text-display text-2xl lg:text-3xl mt-3">Private executive dashboards</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Attribution, stage velocity, qualified pipeline value, and partner-level visibility.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── HOW IT WORKS ───────────── */
const steps = [
  { icon: Target, title: "Positioning Analysis", body: "Audit of market position, brand language, perceived authority and competitive frame across primary segments." },
  { icon: Users2, title: "Ideal Client Mapping", body: "Construction of ICP cohorts, buying triggers, and decision-maker archetypes anchored in real engagement data." },
  { icon: MessagesSquare, title: "Messaging Infrastructure", body: "Long-form, short-form and outbound messaging architected around your firm's authority and proof." },
  { icon: GitBranch, title: "Outreach Systems", body: "Multi-channel outbound and inbound systems engineered for relevance, throughput and brand discipline." },
  { icon: Workflow, title: "Pipeline Management", body: "CRM design, stage definitions, automation and ownership protocols that produce institutional clarity." },
  { icon: Sparkles, title: "Qualified Conversations", body: "A consistent, measurable cadence of strategic conversations with right-fit prospects — not noise." },
];
export function HowItWorks() {
  return (
    <section className="py-28 lg:py-36 bg-secondary/40">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Reveal><span className="eyebrow mx-auto">The Process</span></Reveal>
          <Reveal delay={1} as="h2" className="text-display text-4xl lg:text-5xl mt-6">
            A six-stage <span className="text-serif italic gold-text font-normal">infrastructure</span> engagement.
          </Reveal>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/40 to-transparent -translate-x-1/2" />
          <div className="space-y-14 md:space-y-20">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) as 0|1|2|3}>
                <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div className={`${i % 2 ? "md:text-left" : "md:text-right"}`}>
                    <div className={`inline-flex items-center gap-3 ${i % 2 ? "" : "md:flex-row-reverse"}`}>
                      <div className="h-12 w-12 grid place-items-center rounded-sm gradient-gold-bg shadow-[var(--shadow-gold)]">
                        <s.icon className="h-5 w-5 text-[var(--ink)]" />
                      </div>
                      <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                        Stage {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-display text-2xl lg:text-3xl mt-5">{s.title}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed max-w-md md:ml-auto">
                      {s.body}
                    </p>
                  </div>
                  <div className="hidden md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── ENGAGEMENT MODELS ───────────── */
export function EngagementModels() {
  const cards = [
    {
      name: "Revenue Engine",
      tag: "For established firms",
      price: "Quarterly engagement",
      highlight: false,
      features: [
        "Strategic positioning audit",
        "Messaging architecture",
        "LinkedIn executive presence",
        "CRM design & implementation",
        "Outbound system build",
        "Quarterly executive review",
      ],
    },
    {
      name: "Institutional Scaling",
      tag: "For multi-partner firms",
      price: "Annual partnership",
      highlight: true,
      features: [
        "Everything in Revenue Engine",
        "Multi-partner LinkedIn system",
        "Sales enablement architecture",
        "Pipeline analytics dashboards",
        "Dedicated growth strategist",
        "Bi-weekly leadership briefings",
        "Annual strategic offsite",
      ],
    },
  ];
  return (
    <section className="py-28 lg:py-36">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><span className="eyebrow mx-auto">Engagement Models</span></Reveal>
          <Reveal delay={1} as="h2" className="text-display text-4xl lg:text-5xl mt-6">
            Two ways we <span className="text-serif italic gold-text font-normal">partner</span>.
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.name} delay={(i + 1) as 1|2}>
              <div className={`relative p-10 h-full transition-all duration-500 ${
                c.highlight
                  ? "bg-[var(--ink)] text-[var(--cream)] shadow-[var(--shadow-luxe)]"
                  : "card-luxe"
              }`}>
                {c.highlight && (
                  <div className="absolute top-6 right-6 text-[10px] tracking-[0.22em] uppercase gold-text border border-[var(--gold)]/40 px-3 py-1 rounded-sm">
                    Most engaged
                  </div>
                )}
                <div className={`text-[11px] tracking-[0.22em] uppercase ${c.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                  {c.tag}
                </div>
                <h3 className="text-display text-3xl lg:text-4xl mt-3">{c.name}</h3>
                <div className={`mt-2 text-sm ${c.highlight ? "text-white/70" : "text-muted-foreground"}`}>{c.price}</div>
                <div className="hairline my-8" />
                <ul className="space-y-4">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${c.highlight ? "gold-text" : "gold-text"}`} />
                      <span className={c.highlight ? "text-white/85" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link to="/contact" className={c.highlight ? "btn-gold w-full" : "btn-ghost-ink w-full"}>
                    Discuss this engagement <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── CASE STUDY PREVIEW ───────────── */
const caseStudies = [
  {
    industry: "Wealth Management",
    title: "From referral-dependent to systematized growth",
    metric: "+184% qualified pipeline",
    img: heroBoardroom,
  },
  {
    industry: "Private Equity Advisory",
    title: "Re-architected outbound for senior partners",
    metric: "42 strategic meetings / quarter",
    img: meeting,
  },
  {
    industry: "Executive Consulting",
    title: "Institutional positioning rebuild",
    metric: "3.2× average engagement value",
    img: workspace,
  },
];
export function CaseStudyPreview() {
  return (
    <section className="py-28 lg:py-36 bg-secondary/40">
      <div className="container-luxe">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <Reveal><span className="eyebrow">Selected Engagements</span></Reveal>
            <Reveal delay={1} as="h2" className="text-display text-4xl lg:text-5xl mt-6 max-w-xl">
              Work across <span className="text-serif italic gold-text font-normal">institutional</span> categories.
            </Reveal>
          </div>
          <Reveal delay={2}>
            <Link to="/case-studies" className="btn-ghost-ink">All case studies <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((c, i) => (
            <Reveal key={c.title} delay={(i + 1) as 1|2|3}>
              <Link to="/case-studies" className="group block card-luxe overflow-hidden h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-[11px] tracking-[0.22em] uppercase text-white/80">{c.industry}</div>
                </div>
                <div className="p-7">
                  <h3 className="text-display text-xl leading-snug">{c.title}</h3>
                  <div className="mt-4 text-sm gold-text font-medium">{c.metric}</div>
                  <div className="hairline mt-6" />
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Read engagement summary</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── TESTIMONIALS ───────────── */
const testimonials = [
  {
    quote: "Aldwyn & Vance brought operational discipline to a function we'd treated as relational for two decades. Within a quarter our partners were fielding only qualified conversations.",
    name: "Edward Hartwell",
    role: "Managing Partner",
    firm: "Hartwell Private Capital",
  },
  {
    quote: "What we received was not marketing. It was an institutional-grade growth function that integrated cleanly into how the firm already operated.",
    name: "Margaret Chen",
    role: "Chief Executive",
    firm: "North Harbor Advisory",
  },
  {
    quote: "Their work on positioning alone changed how the market perceives us. The infrastructure beneath it compounds quietly every quarter.",
    name: "James Vasquez",
    role: "Founding Partner",
    firm: "Valmont Equity Partners",
  },
];
export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="py-28 lg:py-36">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><span className="eyebrow mx-auto">Voices</span></Reveal>
          <Reveal delay={1} as="h2" className="text-display text-4xl lg:text-5xl mt-6">
            From the <span className="text-serif italic gold-text font-normal">leadership</span> we work with.
          </Reveal>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="card-luxe p-10 lg:p-14 text-center">
            <Quote className="h-8 w-8 gold-text mx-auto" />
            <p className="text-serif italic text-2xl lg:text-3xl leading-snug mt-6">
              {testimonials[i].quote}
            </p>
            <div className="hairline my-8 max-w-xs mx-auto" />
            <div className="text-display text-base">{testimonials[i].name}</div>
            <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground mt-1">
              {testimonials[i].role} · {testimonials[i].firm}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`h-1 transition-all duration-500 ${
                  i === idx ? "w-10 gradient-gold-bg" : "w-4 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── FINAL CTA ───────────── */
export function FinalCTA() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden bg-[var(--ink)] text-[var(--cream)]">
      <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-[var(--gold)] float-slow opacity-60" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 rounded-full bg-[var(--gold)] float-slow opacity-40" style={{ animationDelay: "1s" }}/>
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-[var(--gold)] float-slow opacity-50" style={{ animationDelay: "3s" }}/>
      <div className="container-luxe relative text-center max-w-3xl">
        <Reveal><span className="eyebrow mx-auto">A measured next step</span></Reveal>
        <Reveal delay={1} as="h2" className="text-display text-4xl sm:text-5xl lg:text-6xl mt-6">
          Build a more <span className="text-serif italic gold-text font-normal">predictable</span> growth infrastructure.
        </Reveal>
        <Reveal delay={2} as="p" className="mt-6 text-lg text-white/70 leading-relaxed">
          Move beyond inconsistent referrals and create a system designed for long-term strategic
          growth — engineered around your firm's standard of excellence.
        </Reveal>
        <Reveal delay={3} as="div" className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-gold">Schedule Your Alignment Call <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/services" className="btn-ghost-gold">View Engagement Models</Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── REUSABLE PAGE HEADER ───────────── */
export function PageHeader({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro?: string; children?: ReactNode }) {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="container-luxe relative grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
          <Reveal delay={1} as="h1" className="text-display text-5xl lg:text-7xl">{title}</Reveal>
        </div>
        {intro && (
          <Reveal delay={2} as="div" className="lg:col-span-5 lg:pt-4">
            <p className="text-lg text-muted-foreground leading-relaxed">{intro}</p>
            {children}
          </Reveal>
        )}
      </div>
      <div className="container-luxe mt-16"><div className="hairline" /></div>
    </section>
  );
}
