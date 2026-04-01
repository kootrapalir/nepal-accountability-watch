import { governmentStructure, electionResults } from "@/data/government";
import { Building2, Users, Scale, Layers, Shield } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const icons = [Building2, Users, Scale, Layers, Shield];

export default function GovernmentPage() {
  return (
    <div className="page-container">
      <SEOHead title="Government Structure — Nepal 101" description="How Nepal's government works under the 2015 Constitution. Executive, legislature, judiciary, federal structure, and oversight bodies." />
      <h1 className="section-title mb-2">Government Structure — Nepal 101</h1>
      <p className="text-sm text-muted-foreground mb-8">
        How Nepal's government is structured under the 2015 Constitution. Non-partisan, factual, educational.
      </p>

      {/* Election Results */}
      <section className="mb-8">
        <h2 className="font-display font-bold text-lg mb-4">2026 Election Results</h2>
        <div className="stat-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-2 pr-4 text-xs text-muted-foreground font-medium">Party</th>
                <th className="pb-2 pr-4 text-xs text-muted-foreground font-medium">Leader</th>
                <th className="pb-2 pr-4 text-xs text-muted-foreground font-medium text-right">Seats</th>
                <th className="pb-2 pr-4 text-xs text-muted-foreground font-medium text-right">Change</th>
                <th className="pb-2 text-xs text-muted-foreground font-medium text-right">FPTP %</th>
              </tr>
            </thead>
            <tbody>
              {electionResults.parties.map((p, i) => (
                <tr key={p.name} className={i === 0 ? 'font-semibold' : ''}>
                  <td className="py-2 pr-4 text-xs">{p.name}</td>
                  <td className="py-2 pr-4 text-xs text-muted-foreground">{p.leader}</td>
                  <td className="py-2 pr-4 text-xs text-right font-mono">{p.seats}</td>
                  <td className={`py-2 pr-4 text-xs text-right font-mono ${
                    p.change.startsWith('+') ? 'text-success' : 'text-destructive'
                  }`}>{p.change}</td>
                  <td className="py-2 text-xs text-right font-mono">{p.fptpShare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Seat visualization */}
        <div className="mt-4">
          <div className="flex items-center gap-1 mb-2 text-xs text-muted-foreground">
            <span>Seat Distribution</span>
            <span className="font-mono ml-auto">{electionResults.totalSeats} total</span>
          </div>
          <div className="h-6 rounded-full overflow-hidden flex">
            {electionResults.parties.map((p, i) => {
              const pct = (p.seats / electionResults.totalSeats) * 100;
              const colors = [
                'bg-primary', 'bg-info', 'bg-warning', 'bg-destructive/70', 'bg-success', 'bg-muted-foreground'
              ];
              return (
                <div
                  key={p.name}
                  className={`${colors[i]} transition-all`}
                  style={{ width: `${pct}%` }}
                  title={`${p.name}: ${p.seats} seats`}
                />
              );
            })}
          </div>
          <div className="flex flex-wrap gap-3 mt-2">
            {electionResults.parties.map((p, i) => {
              const colors = ['bg-primary', 'bg-info', 'bg-warning', 'bg-destructive/70', 'bg-success', 'bg-muted-foreground'];
              return (
                <div key={p.name} className="flex items-center gap-1.5">
                  <div className={`w-2.5 h-2.5 rounded-sm ${colors[i]}`} />
                  <span className="text-[10px] text-muted-foreground">{p.name} ({p.seats})</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Government Branches */}
      <div className="space-y-4">
        {governmentStructure.map((branch, bi) => {
          const Icon = icons[bi] || Building2;
          return (
            <section key={branch.title} className="stat-card">
              <div className="flex items-start gap-3 mb-3">
                <div className="nepal-gradient p-2 rounded-lg text-primary-foreground shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-base">{branch.title}</h2>
                  <p className="text-xs text-muted-foreground">{branch.description}</p>
                </div>
              </div>
              <div className="grid gap-2">
                {branch.members.map((m, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="text-sm font-medium">{m.name}</p>
                      <p className="text-xs text-muted-foreground">{m.role}</p>
                    </div>
                    {m.status && (
                      <span className="text-[10px] bg-success/10 text-success px-2 py-0.5 rounded-full">{m.status}</span>
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
