import { NepalFlag } from "./Navigation";

export function Footer() {
  return (
    <footer className="border-t bg-card mt-12 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <NepalFlag className="w-6 h-7" />
              <span className="font-display font-bold text-lg">SwaChha Nepal</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-xs">
              Citizen-powered government accountability tracker. Open source, non-partisan, community-driven.
            </p>
            <p className="text-xs text-muted-foreground mt-2 font-mono">
              सत्य र जवाफदेहिता
            </p>
          </div>

          {/* Key Facts */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Nepal at a Glance</h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>🏔️ GDP per capita: $1,447 (2024)</li>
              <li>👥 56% population under 30</li>
              <li>📊 TI Corruption Index: 107/180</li>
              <li>🗳️ 182/275 seats — RSP supermajority</li>
              <li>⚖️ 27 PMs in 34 years of democracy</li>
            </ul>
          </div>

          {/* Data Sources */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Data Sources</h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>Government of Nepal Official Statements</li>
              <li>Karki Commission Report (907 pages)</li>
              <li>Election Commission of Nepal</li>
              <li>The Kathmandu Post, Reuters, Al Jazeera</li>
              <li>Transparency International</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground">
            © 2026 SwaChha Nepal Open Source Collective · CC BY 4.0
          </p>
          <p className="text-[10px] text-muted-foreground">
            Data as of April 1, 2026 · All claims sourced · Not a legal determination
          </p>
        </div>
      </div>
    </footer>
  );
}
