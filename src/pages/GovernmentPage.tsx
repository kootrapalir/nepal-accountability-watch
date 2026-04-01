import { governmentStructure, electionResults } from "@/data/government";
import { Building2, Users, Scale, Layers, Shield } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader, PrayerFlagDivider, MandalaWatermark } from "@/components/NepaliPatterns";

const icons = [Building2, Users, Scale, Layers, Shield];
const branchEmojis = ["🏛️", "👥", "⚖️", "🏗️", "🛡️"];

export default function GovernmentPage() {
  return (
    <div className="page-container nepal-pattern-bg">
      <SEOHead title="Government Structure — Nepal 101" description="How Nepal's government works under the 2015 Constitution. Executive, legislature, judiciary, federal structure, and oversight bodies." />
      
      <SectionHeader sub="How Nepal's government is structured under the 2015 Constitution. Non-partisan, factual.">
        🏛️ Government Structure — Nepal 101
      </SectionHeader>

      {/* Election Results */}
      <section className="mb-10">
        <h2 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
          <span className="w-6 h-0.5 nepal-gradient rounded-full" />
          2026 Election Results
        </h2>
        <div className="stat-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 pr-4 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Party</th>
                <th className="pb-3 pr-4 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Leader</th>
                <th className="pb-3 pr-4 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider text-right">Seats</th>
                <th className="pb-3 pr-4 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider text-right">Change</th>
                <th className="pb-3 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider text-right">FPTP %</th>
              </tr>
            </thead>
            <tbody>
              {electionResults.parties.map((p, i) => (
                <tr key={p.name} className={`border-b last:border-0 ${i === 0 ? 'font-semibold bg-primary/5' : 'hover:bg-muted/50 transition-colors'}`}>
                  <td className="py-2.5 pr-4 text-xs">{p.name}</td>
                  <td className="py-2.5 pr-4 text-xs text-muted-foreground">{p.leader}</td>
                  <td className="py-2.5 pr-4 text-xs text-right font-mono">{p.seats}</td>
                  <td className={`py-2.5 pr-4 text-xs text-right font-mono font-bold ${
                    p.change.startsWith('+') ? 'text-success' : 'text-destructive'
                  }`}>{p.change}</td>
                  <td className="py-2.5 text-xs text-right font-mono">{p.fptpShare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Seat visualization */}
        <div className="mt-4 stat-card">
          <div className="flex items-center gap-1 mb-2 text-xs text-muted-foreground">
            <span className="font-medium">Seat Distribution</span>
            <span className="font-mono ml-auto font-bold">{electionResults.totalSeats} total</span>
          </div>
          <div className="h-7 rounded-xl overflow-hidden flex shadow-inner">
            {electionResults.parties.map((p, i) => {
              const pct = (p.seats / electionResults.totalSeats) * 100;
              const colors = [
                'nepal-gradient', 'bg-info', 'bg-warning', 'bg-destructive/70', 'bg-success', 'bg-muted-foreground'
              ];
              return (
                <div
                  key={p.name}
                  className={`${colors[i]} transition-all relative group`}
                  style={{ width: `${pct}%` }}
                  title={`${p.name}: ${p.seats} seats`}
                >
                  {pct > 15 && (
                    <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white/90">
                      {p.seats}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-3 mt-3">
            {electionResults.parties.map((p, i) => {
              const dotColors = ['nepal-gradient', 'bg-info', 'bg-warning', 'bg-destructive/70', 'bg-success', 'bg-muted-foreground'];
              return (
                <div key={p.name} className="flex items-center gap-1.5">
                  <div className={`w-2.5 h-2.5 rounded-sm ${dotColors[i]}`} />
                  <span className="text-[10px] text-muted-foreground">{p.name} ({p.seats})</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PrayerFlagDivider className="mb-8 rounded-full overflow-hidden" />

      {/* Government Branches */}
      <div className="space-y-4 relative">
        <MandalaWatermark className="absolute -right-20 top-20 w-60 h-60 opacity-[0.02] pointer-events-none" />
        {governmentStructure.map((branch, bi) => {
          const Icon = icons[bi] || Building2;
          return (
            <section key={branch.title} className="stat-card">
              <div className="flex items-start gap-3 mb-4">
                <div className="nepal-gradient p-2.5 rounded-xl text-white shrink-0 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-base flex items-center gap-2">
                    {branchEmojis[bi]} {branch.title}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{branch.description}</p>
                </div>
              </div>
              <div className="grid gap-2">
                {branch.members.map((m, i) => (
                  <div key={i} className="flex items-center justify-between py-2 px-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div>
                      <p className="text-sm font-medium">{m.name}</p>
                      <p className="text-[10px] text-muted-foreground">{m.role}</p>
                    </div>
                    {m.status && (
                      <span className="text-[10px] bg-success/10 text-success px-2 py-0.5 rounded-full font-medium">{m.status}</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
