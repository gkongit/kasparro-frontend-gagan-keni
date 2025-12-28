export type Brand = {
  id: string;
  name: string;
  domain: string;
  logoUrl?: string; // Mocked or placeholder
  lastAuditDate: string; // ISO string
  ovScore: number; // Overall Visibility Score (0-100)
  eeatScore: number; // Trust / EEAT Score (0-100)
  keywordCoverage: number; // % of coverage
};

export type AuditModuleId =
  | "brand-consistency"
  | "sentiment-analysis"
  | "competitor-overlap"
  | "answer-engine-optim" // AEO
  | "technical-foundations"
  | "content-depth"
  | "user-intent-alignment";

export interface AuditIssue {
  id: string;
  severity: "critical" | "warning" | "info";
  title: string;
  description: string;
}

export interface AuditModuleData {
  id: AuditModuleId;
  name: string;
  description: string;
  score: number; // 0-100
  status: "healthy" | "warning" | "critical";
  insights: string[]; // Key insights list
  issues: AuditIssue[];
  recommendations: string[];
  lastRun: string;
}

export interface AuditReport {
  brandId: string;
  timestamp: string;
  modules: Record<AuditModuleId, AuditModuleData>;
}
