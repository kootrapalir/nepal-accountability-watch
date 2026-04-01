export type PlanStatus = 'done' | 'in_progress' | 'not_started' | 'delayed';

export interface PlanItem {
  id: number;
  title: string;
  category: string;
  deadlineDays: number;
  status: PlanStatus;
  progressPct: number;
  detail?: string;
}

export const planItems: PlanItem[] = [
  { id: 1, title: "Form high-powered committee to investigate assets of political office-holders post-2006", category: "Anti-corruption", deadlineDays: 15, status: "in_progress", progressPct: 60 },
  { id: 2, title: "Form committee to investigate assets of office-holders 1991–2006", category: "Anti-corruption", deadlineDays: 30, status: "not_started", progressPct: 0 },
  { id: 3, title: "Implement Karki Commission report on Sept 8–9 incidents", category: "Justice", deadlineDays: 1, status: "done", progressPct: 100, detail: "Oli arrested March 28" },
  { id: 4, title: "Form high-level committee to investigate Sept 9 Gen-Z incidents", category: "Justice", deadlineDays: 7, status: "done", progressPct: 100 },
  { id: 5, title: "Prepare constitution amendment discussion paper", category: "Legislation", deadlineDays: 7, status: "done", progressPct: 100 },
  { id: 6, title: "Reduce federal ministries from ~22 to 17 or fewer", category: "Admin reform", deadlineDays: 30, status: "in_progress", progressPct: 30 },
  { id: 7, title: "Implement past inquiry report recommendations", category: "Governance", deadlineDays: 30, status: "in_progress", progressPct: 25 },
  { id: 8, title: "Launch 'Blue Bus' free transport for women across 7 provinces (min. 25 buses)", category: "Public services", deadlineDays: 100, status: "not_started", progressPct: 0 },
  { id: 9, title: "Modernize postal services — doorstep delivery of passports, citizenship, licences", category: "Service delivery", deadlineDays: 100, status: "not_started", progressPct: 0 },
  { id: 10, title: "Delivery-based governance framework with KPIs per ministry", category: "Governance", deadlineDays: 1, status: "done", progressPct: 100 },
  { id: 11, title: "Prepare 'National Commitment' synthesizing pledges from all parties", category: "Governance", deadlineDays: 15, status: "in_progress", progressPct: 40 },
  { id: 12, title: "Ban party-affiliated trade and student unions from government offices", category: "Anti-politicization", deadlineDays: 1, status: "done", progressPct: 100 },
  { id: 13, title: "Martyr/victim families of Sept 2025 to receive employment and support", category: "Social justice", deadlineDays: 30, status: "in_progress", progressPct: 20 },
  { id: 14, title: "Establish PMO-based structure for implementation accountability", category: "Governance", deadlineDays: 1, status: "done", progressPct: 100 },
  { id: 15, title: "Full digitization — faceless, time-bound government services", category: "Digital govt", deadlineDays: 100, status: "in_progress", progressPct: 10 },
  { id: 16, title: "Depoliticize bureaucracy — merit-based civil service", category: "Admin reform", deadlineDays: 45, status: "in_progress", progressPct: 15 },
  { id: 17, title: "Landless/squatter settlements commission", category: "Social policy", deadlineDays: 100, status: "in_progress", progressPct: 5 },
  { id: 18, title: "Youth employment portal", category: "Employment", deadlineDays: 45, status: "in_progress", progressPct: 20 },
  { id: 19, title: "Anti-corruption prosecution — Karki Commission Phase 2", category: "Justice", deadlineDays: 45, status: "in_progress", progressPct: 35 },
  { id: 20, title: "International travel ban for suspects in ongoing corruption cases", category: "Anti-corruption", deadlineDays: 15, status: "in_progress", progressPct: 50 },
];

export const planCategories = [...new Set(planItems.map(i => i.category))];

export function getPlanStats() {
  const total = planItems.length;
  const done = planItems.filter(i => i.status === 'done').length;
  const inProgress = planItems.filter(i => i.status === 'in_progress').length;
  const notStarted = planItems.filter(i => i.status === 'not_started').length;
  const avgProgress = Math.round(planItems.reduce((s, i) => s + i.progressPct, 0) / total);
  return { total, done, inProgress, notStarted, avgProgress };
}
