import { AuditModuleId, AuditReport, Brand } from "@/lib/types";

export const MOCK_BRANDS: Brand[] = [
  {
    id: "brand_1",
    name: "TechFlow AI",
    domain: "techflow.ai",
    lastAuditDate: "2024-12-26T14:30:00Z",
    ovScore: 78,
    eeatScore: 65,
    keywordCoverage: 42,
  },
  {
    id: "brand_2",
    name: "Lumina Health",
    domain: "lumina.health",
    lastAuditDate: "2024-12-25T09:15:00Z",
    ovScore: 88,
    eeatScore: 92,
    keywordCoverage: 85,
  },
  {
    id: "brand_3",
    name: "Nexus Finance",
    domain: "nexus.fi",
    lastAuditDate: "2024-12-20T11:45:00Z",
    ovScore: 54,
    eeatScore: 48,
    keywordCoverage: 22,
  },
];

const BASE_MODULES_TEMPLATE: Record<
  AuditModuleId,
  { name: string; description: string }
> = {
  "brand-consistency": {
    name: "Brand Consistency",
    description: "Evaluates uniformity of brand voice across AI responses.",
  },
  "sentiment-analysis": {
    name: "Sentiment Analysis",
    description: "Analyzes the emotional tone associated with your brand.",
  },
  "competitor-overlap": {
    name: "Competitor Overlap",
    description: "Identifies where competitors are ranking for your keywords.",
  },
  "answer-engine-optim": {
    name: "AEO Optimization",
    description: "Readiness for direct answer engines like Perplexity.",
  },
  "technical-foundations": {
    name: "Technical Foundations",
    description: "Site speed, schema markup, and crawlability for bots.",
  },
  "content-depth": {
    name: "Content Depth",
    description: "Comprehensive coverage of topics vs simple keywords.",
  },
  "user-intent-alignment": {
    name: "User Intent Alignment",
    description: "Matching content to the actual user search intent.",
  },
};

// Helper to generate a report
const generateReport = (brandId: string): AuditReport => {
  const isHealthy = brandId === "brand_1"; // TechFlow (Healthy)
  const isWarning = brandId === "brand_2"; // Lumina (Mixed)
  const isCritical = brandId === "brand_3"; // Nexus (Bad)

  return {
    brandId,
    timestamp: new Date().toISOString(),
    modules: {
      "brand-consistency": {
        id: "brand-consistency",
        ...BASE_MODULES_TEMPLATE["brand-consistency"],
        score: isHealthy ? 95 : isWarning ? 78 : 45,
        status: isHealthy ? "healthy" : isWarning ? "warning" : "critical",
        insights: isHealthy
          ? ["Consistent tone across 98% of indexed pages."]
          : isWarning
          ? ["Tone varies significantly between blog and landing pages."]
          : ["Severe hallucination of brand values in GPT-4."],
        issues: isCritical
          ? [
              {
                id: "issue_bc_1",
                severity: "critical",
                title: "Brand Hallucination",
                description: "AI models invent features you don't have.",
              },
            ]
          : [],
        recommendations: isHealthy
          ? ["Maintain current guidelines."]
          : ["Update 'About Us' page schema."],
        lastRun: new Date().toISOString(),
      },
      "sentiment-analysis": {
        id: "sentiment-analysis",
        ...BASE_MODULES_TEMPLATE["sentiment-analysis"],
        score: isHealthy ? 92 : isWarning ? 65 : 30,
        status: isHealthy ? "healthy" : isWarning ? "warning" : "critical",
        insights: isHealthy
          ? ["Positive sentiment in 95% of mentions."]
          : ["Mixed sentiment in recent Reddit threads."],
        issues: [],
        recommendations: ["Monitor Reddit for brand mentions."],
        lastRun: new Date().toISOString(),
      },
      "competitor-overlap": {
        id: "competitor-overlap",
        ...BASE_MODULES_TEMPLATE["competitor-overlap"],
        score: isHealthy ? 88 : isWarning ? 60 : 55,
        status: isHealthy ? "healthy" : "warning",
        insights: ["Low overlap with competitors."],
        issues: isWarning
          ? [
              {
                id: "issue_co_1",
                severity: "warning",
                title: "Keyword Cannibalization",
                description: "CompetitorX ranks higher for 'AI Analytics'.",
              },
            ]
          : [],
        recommendations: ["Focus on long-tail keywords."],
        lastRun: new Date().toISOString(),
      },
      "answer-engine-optim": {
        id: "answer-engine-optim",
        ...BASE_MODULES_TEMPLATE["answer-engine-optim"],
        score: isHealthy ? 85 : isCritical ? 20 : 45,
        status: isHealthy ? "healthy" : "critical",
        insights: isHealthy
          ? ["Perplexity cites your docs frequently."]
          : ["Perplexity often cites outdated pricing page."],
        issues:
          isWarning || isCritical
            ? [
                {
                  id: "issue_aeo_1",
                  severity: "critical",
                  title: "Missing Structured Data",
                  description: "Pricing table not readable by LLMs.",
                },
              ]
            : [],
        recommendations: ["Implement JSON-LD for Pricing."],
        lastRun: new Date().toISOString(),
      },
      "technical-foundations": {
        id: "technical-foundations",
        ...BASE_MODULES_TEMPLATE["technical-foundations"],
        score: isCritical ? 40 : 88,
        status: isCritical ? "warning" : "healthy",
        insights: ["Core Web Vitals are green."],
        issues: isCritical
          ? [
              {
                id: "issue_tf_1",
                severity: "warning",
                title: "Slow LCP",
                description: "Home page takes 3s to load.",
              },
            ]
          : [],
        recommendations: ["Optimize images."],
        lastRun: new Date().toISOString(),
      },
      "content-depth": {
        id: "content-depth",
        ...BASE_MODULES_TEMPLATE["content-depth"],
        score: isHealthy ? 90 : 72,
        status: isHealthy ? "healthy" : "warning",
        insights: ["Good breadth of topics."],
        issues: [],
        recommendations: ["Expand API documentation examples."],
        lastRun: new Date().toISOString(),
      },
      "user-intent-alignment": {
        id: "user-intent-alignment",
        ...BASE_MODULES_TEMPLATE["user-intent-alignment"],
        score: 78,
        status: "healthy",
        insights: ["Matches informational intent well."],
        issues: [],
        recommendations: [],
        lastRun: new Date().toISOString(),
      },
    },
  };
};

export const MOCK_REPORTS: Record<string, AuditReport> = {
  brand_1: generateReport("brand_1"),
  brand_2: generateReport("brand_2"),
  brand_3: generateReport("brand_3"),
};
