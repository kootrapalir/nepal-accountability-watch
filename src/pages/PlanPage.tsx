import { useState } from "react";
import { planItems, planCategories, getPlanStats, type PlanStatus } from "@/data/planItems";
import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader, PrayerFlagDivider } from "@/components/NepaliPatterns";
import { TrendingUp, CheckCircle, Clock, AlertCircle } from "lucide-react";

export default function PlanPage() {
  const [filter, setFilter] = useState<PlanStatus | 'all'>('all');
  const [catFilter, setCatFilter] = useState<string>('all');
  const stats = getPlanStats();

  const filtered = planItems.filter((item) => {
    if (filter !== 'all' && item.status !== filter) return false;
    if (catFilter !== 'all' && item.category !== catFilter) return false;
    return true;
  });

  return (
    <div className="page-container nepal-pattern-bg">
      <SEOHead title="100-Day Plan Tracker" description="Track the RSP government's 100-point work plan progress — deadlines, completion status, and category breakdowns." />
      
      <SectionHeader sub="Tracking the RSP government's formal 100-point work plan, approved March 27, 2026">
        📋 100-Day Plan Tracker
      </SectionHeader>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <StatCard label="Overall Progress" value={`${stats.avgProgress}%`} variant="primary" icon={<TrendingUp className="w-4 h-4" />} />
        <StatCard label="Completed" value={stats.done} variant="success" icon={<CheckCircle className="w-4 h-4" />} />
        <StatCard label="In Progress" value={stats.inProgress} variant="warning" icon={<Clock className="w-4 h-4" />} />
        <StatCard label="Not Started" value={stats.notStarted} icon={<AlertCircle className="w-4 h-4" />} />
      </div>

      {/* Overall progress bar */}
      <div className="mb-8 stat-card">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span className="font-medium">Overall Completion</span>
          <span className="font-mono font-bold text-primary">{stats.avgProgress}%</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full nepal-gradient rounded-full transition-all duration-700 relative"
            style={{ width: `${stats.avgProgress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse-slow" />
          </div>
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
          <span>Day 1 — March 27</span>
          <span>Day 100 — July 5</span>
        </div>
      </div>

      <PrayerFlagDivider className="mb-6 rounded-full overflow-hidden" />

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {([
          { val: 'all' as const, label: 'All', count: planItems.length },
          { val: 'done' as const, label: '✅ Done', count: stats.done },
          { val: 'in_progress' as const, label: '🔄 In Progress', count: stats.inProgress },
          { val: 'not_started' as const, label: '⏳ Not Started', count: stats.notStarted },
        ]).map((s) => (
          <button
            key={s.val}
            onClick={() => setFilter(s.val)}
            className={`filter-pill ${filter === s.val ? 'filter-pill-active' : 'filter-pill-inactive'}`}
          >
            {s.label} ({s.count})
          </button>
        ))}
        <select
          value={catFilter}
          onChange={(e) => setCatFilter(e.target.value)}
          className="filter-pill filter-pill-inactive cursor-pointer"
        >
          <option value="all">All Categories</option>
          {planCategories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Plan Items */}
      <div className="space-y-3">
        {filtered.map((item) => (
          <div key={item.id} className="stat-card">
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
              <span className="font-mono text-xs text-primary/60 font-bold shrink-0 mt-0.5">#{item.id}</span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <StatusBadge status={item.status} />
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">{item.category}</span>
                  <span className="text-[10px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{item.deadlineDays}d</span>
                </div>
                <p className="font-medium text-sm">{item.title}</p>
                {item.detail && <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.detail}</p>}
                <div className="mt-3">
                  <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                    <span>Progress</span>
                    <span className="font-mono font-medium">{item.progressPct}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${item.progressPct}%`,
                        background: item.progressPct === 100
                          ? 'hsl(var(--success))'
                          : item.progressPct > 0
                          ? 'linear-gradient(90deg, hsl(var(--info)), hsl(var(--primary)))'
                          : 'hsl(var(--muted-foreground))',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <span className="text-4xl mb-3 block">🔍</span>
          <p className="text-muted-foreground text-sm">No items match the current filters.</p>
        </div>
      )}
    </div>
  );
}
