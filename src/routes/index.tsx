import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import {
  HomeHero, TrustBar, WhyGrowthStalls, ExecutiveInsight, Outcomes,
  HowItWorks, EngagementModels, CaseStudyPreview, Testimonials, FinalCTA,
} from "@/components/site/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aldwyn & Vance — Institutional Growth Infrastructure" },
      { name: "description", content: "Predictable client acquisition for sophisticated firms in wealth, advisory, private equity and institutional consulting." },
      { property: "og:title", content: "Aldwyn & Vance — Institutional Growth Infrastructure" },
      { property: "og:description", content: "Strategic growth systems for high-trust firms." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <HomeHero />
      <TrustBar />
      <WhyGrowthStalls />
      <ExecutiveInsight />
      <Outcomes />
      <HowItWorks />
      <EngagementModels />
      <CaseStudyPreview />
      <Testimonials />
      <FinalCTA />
    </SiteShell>
  );
}
