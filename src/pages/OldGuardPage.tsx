import { useState } from "react";
import { oldGuardList, corruptionCases } from "@/data/oldGuard";
import { StatusBadge } from "@/components/StatusBadge";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader, PrayerFlagDivider, MandalaWatermark } from "@/components/NepaliPatterns";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function OldGuardPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const statuses = [...new Set(oldGuardList.map(p => p.status))];

  const filtered = statusFilter === 'all'
    ? oldGuardList
    : oldGuardList.filter(p => p.status === statusFilter);

  return (
    <div className="page-container nepal-pattern-bg">
      <SEOHead title="Old Guard Watchlist" description="Track Nepal's old political establishment — where they are, allegations, investigations, and corruption cases under review." />
      
      <div className="relative">
        <MandalaWatermark className="absolute -right-16 -top-10 w-48 h-48 opacity-[0.03] pointer-events-none" />
        <SectionHeader sub="Tracking all major figures from Nepal's political establishment (pre-2026)">
          👁️ Old Guard Watchlist
        </SectionHeader>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setStatusFilter('all')}
          className={`filter-pill ${statusFilter === 'all' ? 'filter-pill-active' : 'filter-pill-inactive'}`}
        >
          All ({oldGuardList.length})
        </button>
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`filter-pill ${statusFilter === s ? 'filter-pill-active' : 'filter-pill-inactive'}`}
          >
            {s === 'ARRESTED' ? '🔒' : s === 'Free' ? '🟢' : '🔍'} {s}
          </button>
        ))}
      </div>

      <PrayerFlagDivider className="mb-6 rounded-full overflow-hidden" />

      {/* Person Cards */}
      <div className="space-y-3 mb-12">
        {filtered.map((person) => {
          const expanded = expandedId === person.id;
          return (
            <div key={person.id} className={`stat-card transition-all ${expanded ? 'ring-1 ring-primary/20' : ''}`}>
              <button
                onClick={() => setExpandedId(expanded ? null : person.id)}
                className="w-full text-left"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-sm shrink-0 ${
                    person.status === 'ARRESTED'
                      ? 'bg-destructive/10 text-destructive border border-destructive/20'
                      : person.status === 'Free'
                      ? 'bg-muted text-muted-foreground border border-border'
                      : 'bg-warning/10 text-warning border border-warning/20'
                  }`}>
                    {person.initials}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <h3 className="font-display font-semibold text-sm">{person.name}</h3>
                      <StatusBadge status={person.status} />
                    </div>
                    <p className="text-xs text-muted-foreground">{person.peakRole}</p>
                    <p className="text-[10px] text-muted-foreground/70 flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                      {person.party}
                    </p>
                  </div>

                  <div className="shrink-0 mt-1 p-1 rounded-lg hover:bg-muted transition-colors">
                    {expanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                  </div>
                </div>
              </button>

              {expanded && (
                <div className="mt-4 pt-4 border-t space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1.5 flex items-center gap-1.5">
                      <span className="w-3 h-0.5 nepal-gradient rounded-full" />
                      Allegations
                    </p>
                    <ul className="space-y-1.5 ml-4">
                      {person.allegations.map((a, i) => (
                        <li key={i} className="text-xs flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1.5 flex items-center gap-1.5">
                      <span className="w-3 h-0.5 nepal-gradient rounded-full" />
                      Details
                    </p>
                    <p className="text-xs text-muted-foreground ml-4 leading-relaxed">{person.detail}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Corruption Cases */}
      <section>
        <h2 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
          <span className="w-6 h-0.5 nepal-gradient rounded-full" />
          📜 Historic Corruption Cases Under Review
        </h2>
        <div className="stat-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 pr-4 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Case</th>
                <th className="pb-3 pr-4 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Amount</th>
                <th className="pb-3 pr-4 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Period</th>
                <th className="pb-3 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {corruptionCases.map((c, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="py-3 pr-4 text-xs font-medium">{c.name}</td>
                  <td className="py-3 pr-4 text-xs font-mono text-destructive font-semibold">{c.amount}</td>
                  <td className="py-3 pr-4 text-xs text-muted-foreground">{c.period}</td>
                  <td className="py-3 text-xs">
                    <span className="bg-warning/10 text-warning px-2.5 py-1 rounded-full text-[10px] font-semibold">{c.status}</span>
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
