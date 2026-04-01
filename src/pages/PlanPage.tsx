import { useState } from "react";
import { planItems, planCategories, getPlanStats, type PlanStatus } from "@/data/planItems";
import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { SEOHead } from "@/components/SEOHead";

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
    <div className="page-container">
      <h1 className="section-title mb-2">100-Day Plan Tracker</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Tracking the RSP government's formal 100-point work plan, approved March 27, 2026.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <StatCard label="Overall Progress" value={`${stats.avgProgress}%`} variant="primary" />
        <StatCard label="Completed" value={stats.done} variant="success" />
        <StatCard label="In Progress" value={stats.inProgress} variant="warning" />
        <StatCard label="Not Started" value={stats.notStarted} />
      </div>

      {/* Overall progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
          <span>Overall Completion</span>
          <span className="font-mono">{stats.avgProgress}%</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full nepal-gradient rounded-full transition-all duration-700"
            style={{ width: `${stats.avgProgress}%` }}
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(['all', 'done', 'in_progress', 'not_started'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              filter === s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {s === 'all' ? 'All' : s === 'done' ? 'Done' : s === 'in_progress' ? 'In Progress' : 'Not Started'}
          </button>
        ))}
        <select
          value={catFilter}
          onChange={(e) => setCatFilter(e.target.value)}
          className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-muted-foreground border-0 outline-none"
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
              <span className="font-mono text-xs text-muted-foreground shrink-0 mt-0.5">#{item.id}</span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <StatusBadge status={item.status} />
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.category}</span>
                  <span className="text-[10px] font-mono text-muted-foreground">{item.deadlineDays}d deadline</span>
                </div>
                <p className="font-medium text-sm">{item.title}</p>
                {item.detail && <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>}
                <div className="mt-2">
                  <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                    <span>Progress</span>
                    <span className="font-mono">{item.progressPct}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${item.progressPct}%`,
                        background: item.progressPct === 100
                          ? 'hsl(var(--success))'
                          : item.progressPct > 0
                          ? 'hsl(var(--info))'
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
        <p className="text-center text-muted-foreground text-sm py-12">No items match the current filters.</p>
      )}
    </div>
  );
}
