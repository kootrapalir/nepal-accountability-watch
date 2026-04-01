import { useState } from "react";
import { oldGuardList, corruptionCases } from "@/data/oldGuard";
import { StatusBadge } from "@/components/StatusBadge";
import { SEOHead } from "@/components/SEOHead";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function OldGuardPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const statuses = [...new Set(oldGuardList.map(p => p.status))];

  const filtered = statusFilter === 'all'
    ? oldGuardList
    : oldGuardList.filter(p => p.status === statusFilter);

  return (
    <div className="page-container">
      <SEOHead title="Old Guard Watchlist" description="Track Nepal's old political establishment — where they are, allegations, investigations, and corruption cases under review." />
      <h1 className="section-title mb-2">Old Guard Watchlist</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Tracking all major figures from Nepal's political establishment (pre-2026) — where they are, what they're accused of, and what's happening.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setStatusFilter('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            statusFilter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
          }`}
        >
          All ({oldGuardList.length})
        </button>
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              statusFilter === s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Person Cards */}
      <div className="space-y-3 mb-10">
        {filtered.map((person) => {
          const expanded = expandedId === person.id;
          return (
            <div key={person.id} className="stat-card">
              <button
                onClick={() => setExpandedId(expanded ? null : person.id)}
                className="w-full text-left"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0 ${
                    person.status === 'ARRESTED'
                      ? 'bg-destructive/10 text-destructive'
                      : person.status === 'Free'
                      ? 'bg-muted text-muted-foreground'
                      : 'bg-warning/10 text-warning'
                  }`}>
                    {person.initials}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <h3 className="font-display font-semibold text-sm">{person.name}</h3>
                      <StatusBadge status={person.status} />
                    </div>
                    <p className="text-xs text-muted-foreground">{person.peakRole}</p>
                    <p className="text-[10px] text-muted-foreground">{person.party}</p>
                  </div>

                  <div className="shrink-0 mt-1">
                    {expanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                  </div>
                </div>
              </button>

              {expanded && (
                <div className="mt-4 pt-4 border-t space-y-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1">Allegations</p>
                    <ul className="space-y-1">
                      {person.allegations.map((a, i) => (
                        <li key={i} className="text-xs flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-destructive mt-1.5 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1">Details</p>
                    <p className="text-xs text-muted-foreground">{person.detail}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Corruption Cases */}
      <section>
        <h2 className="font-display font-bold text-lg mb-4">Historic Corruption Cases Under Review</h2>
        <div className="stat-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-2 pr-4 text-xs text-muted-foreground font-medium">Case</th>
                <th className="pb-2 pr-4 text-xs text-muted-foreground font-medium">Amount</th>
                <th className="pb-2 pr-4 text-xs text-muted-foreground font-medium">Period</th>
                <th className="pb-2 text-xs text-muted-foreground font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {corruptionCases.map((c, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-2.5 pr-4 text-xs font-medium">{c.name}</td>
                  <td className="py-2.5 pr-4 text-xs font-mono text-muted-foreground">{c.amount}</td>
                  <td className="py-2.5 pr-4 text-xs text-muted-foreground">{c.period}</td>
                  <td className="py-2.5 text-xs">
                    <span className="bg-warning/10 text-warning px-2 py-0.5 rounded-full text-[10px]">{c.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
