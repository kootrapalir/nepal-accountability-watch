import { useState } from "react";
import { arrestedPersons, getArrestStats, type ArrestStatus } from "@/data/arrests";
import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader, PrayerFlagDivider, MandalaWatermark } from "@/components/NepaliPatterns";
import { ChevronDown, ChevronUp, Shield, AlertTriangle, Users } from "lucide-react";

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
    <div className="page-container nepal-pattern-bg">
      <SEOHead title="RAW Behind Bars — Arrest Tracker" description="Track every arrest, investigation, and case update for Nepal's old regime figures. KP Oli, Deuba, Prachanda, and more." />
      
      {/* Header with dramatic styling */}
      <div className="relative mb-8">
        <MandalaWatermark className="absolute -right-10 -top-10 w-40 h-40 opacity-[0.03] pointer-events-none" />
        <SectionHeader sub="Tracking every arrest, investigation, and case update. Unfiltered. Real.">
          ⚖️ <span className="text-primary">RAW</span> Behind Bars
        </SectionHeader>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <StatCard label="Total Tracked" value={stats.total} icon={<Users className="w-4 h-4" />} />
        <StatCard label="Arrested" value={stats.arrested} variant="destructive" icon={<Shield className="w-4 h-4" />} />
        <StatCard label="Investigating" value={stats.investigating} variant="warning" icon={<AlertTriangle className="w-4 h-4" />} />
      </div>

      <PrayerFlagDivider className="mb-6 rounded-full overflow-hidden" />

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(['all', 'arrested', 'investigating'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`filter-pill ${statusFilter === s ? 'filter-pill-active' : 'filter-pill-inactive'}`}
          >
            {s === 'all' ? '👥 All' : s === 'arrested' ? '🔒 Arrested' : '🔍 Investigating'}
          </button>
        ))}
        <select
          value={partyFilter}
          onChange={(e) => setPartyFilter(e.target.value)}
          className="filter-pill filter-pill-inactive cursor-pointer"
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
            <div key={person.id} className={`stat-card transition-all ${expanded ? 'ring-1 ring-primary/20' : ''}`}>
              <button
                onClick={() => setExpandedId(expanded ? null : person.id)}
                className="w-full text-left"
              >
                <div className="flex items-start gap-3">
                  {/* Avatar with gradient border */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-sm shrink-0 ${
                    person.status === 'arrested'
                      ? 'bg-destructive/10 text-destructive border border-destructive/20'
                      : 'bg-warning/10 text-warning border border-warning/20'
                  }`}>
                    {person.initials}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <h3 className="font-display font-semibold text-sm">{person.name}</h3>
                      <StatusBadge status={person.status} />
                    </div>
                    <p className="text-xs text-muted-foreground">{person.role}</p>
                    <p className="text-[10px] text-muted-foreground/70 mt-0.5 flex items-center gap-1">
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
                  {[
                    { label: "Charges", items: person.charges, dot: "bg-destructive" },
                    ...(person.arrestDate ? [{ label: "Arrest Date", value: person.arrestDate }] : []),
                    { label: "Arresting Authority", value: person.arrestingAuthority },
                    { label: "Legal Basis", value: person.legalBasis },
                    { label: "Details", value: person.detail, muted: true },
                    { label: "Case Updates", items: person.caseUpdates, dot: "nepal-gradient" },
                  ].map((section, i) => (
                    <div key={i}>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1.5 flex items-center gap-1.5">
                        <span className="w-3 h-0.5 nepal-gradient rounded-full" />
                        {section.label}
                      </p>
                      {'items' in section && section.items ? (
                        <ul className="space-y-1.5 ml-4">
                          {section.items.map((c: string, j: number) => (
                            <li key={j} className="text-xs flex items-start gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full ${section.dot} mt-1.5 shrink-0`} />
                              {c}
                            </li>
                          ))}
                        </ul>
                      ) : 'value' in section ? (
                        <p className={`text-xs ${section.muted ? 'text-muted-foreground' : ''} ml-4 ${section.label === 'Arrest Date' ? 'font-mono' : ''}`}>
                          {section.value}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
