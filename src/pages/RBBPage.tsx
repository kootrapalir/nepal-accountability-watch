import { useState } from "react";
import { arrestedPersons, getArrestStats, type ArrestStatus } from "@/data/arrests";
import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

export default function RBBPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<ArrestStatus | 'all'>('all');
  const [partyFilter, setPartyFilter] = useState<string>('all');
  const stats = getArrestStats();

  const parties = [...new Set(arrestedPersons.map(p => p.party))];

  const filtered = arrestedPersons.filter((p) => {
    if (statusFilter !== 'all' && p.status !== statusFilter) return false;
    if (partyFilter !== 'all' && p.party !== partyFilter) return false;
    return true;
  });

  return (
    <div className="page-container">
      <div className="mb-6">
        <h1 className="section-title">
          <span className="text-primary">RAW</span> Behind Bars
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Tracking every arrest, investigation, and case update for figures from the old regime. Unfiltered. Real.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <StatCard label="Total Tracked" value={stats.total} />
        <StatCard label="Arrested" value={stats.arrested} variant="destructive" />
        <StatCard label="Investigating" value={stats.investigating} variant="warning" />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(['all', 'arrested', 'investigating'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              statusFilter === s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}
          >
            {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
        <select
          value={partyFilter}
          onChange={(e) => setPartyFilter(e.target.value)}
          className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-muted-foreground border-0 outline-none"
        >
          <option value="all">All Parties</option>
          {parties.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* Person Cards */}
      <div className="space-y-3">
        {filtered.map((person) => {
          const expanded = expandedId === person.id;
          return (
            <div key={person.id} className="stat-card">
              <button
                onClick={() => setExpandedId(expanded ? null : person.id)}
                className="w-full text-left"
              >
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0 ${
                    person.status === 'arrested'
                      ? 'bg-destructive/10 text-destructive'
                      : 'bg-warning/10 text-warning'
                  }`}>
                    {person.initials}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <h3 className="font-display font-semibold text-sm">{person.name}</h3>
                      <StatusBadge status={person.status} />
                    </div>
                    <p className="text-xs text-muted-foreground">{person.role}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{person.party}</p>
                  </div>

                  <div className="shrink-0 mt-1">
                    {expanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                  </div>
                </div>
              </button>

              {expanded && (
                <div className="mt-4 pt-4 border-t space-y-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1">Charges</p>
                    <ul className="space-y-1">
                      {person.charges.map((c, i) => (
                        <li key={i} className="text-xs flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-destructive mt-1.5 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {person.arrestDate && (
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1">Arrest Date</p>
                      <p className="text-xs font-mono">{person.arrestDate}</p>
                    </div>
                  )}

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1">Arresting Authority</p>
                    <p className="text-xs">{person.arrestingAuthority}</p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1">Legal Basis</p>
                    <p className="text-xs">{person.legalBasis}</p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1">Details</p>
                    <p className="text-xs text-muted-foreground">{person.detail}</p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1">Case Updates</p>
                    <ul className="space-y-1">
                      {person.caseUpdates.map((u, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
