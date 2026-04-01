import { NepalFlag } from "./Navigation";
import { PrayerFlagDivider, MountainSilhouette } from "./NepaliPatterns";

export function Footer() {
  return (
    <footer className="relative mt-12 pb-20 md:pb-0">
      <MountainSilhouette className="text-nepal-dark" />
      <div className="nepal-dark-gradient text-primary-foreground">
        <PrayerFlagDivider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <NepalFlag className="w-8 h-10" />
                <div>
                  <span className="font-display font-bold text-lg">SwaChha Nepal</span>
                  <p className="text-[10px] opacity-50 tracking-[0.15em]">सत्य र जवाफदेहिता</p>
                </div>
              </div>
              <p className="text-xs opacity-60 max-w-xs leading-relaxed">
                Citizen-powered government accountability tracker. Open source, non-partisan, community-driven. Built by Nepalis, for Nepal.
              </p>
              <div className="flex gap-3 mt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs opacity-40 hover:opacity-80 transition-opacity underline">GitHub</a>
                <a href="#" className="text-xs opacity-40 hover:opacity-80 transition-opacity underline">Contribute Data</a>
              </div>
            </div>

            {/* Key Facts */}
            <div>
              <h4 className="font-display font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-nepal-gold rounded-full" />
                Nepal at a Glance
              </h4>
              <ul className="space-y-2 text-xs opacity-60">
                <li className="flex items-center gap-2">
                  <span className="text-nepal-gold">🏔️</span> GDP per capita: $1,447 (2024)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-nepal-gold">👥</span> 56% population under 30
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-nepal-gold">📊</span> TI Corruption Index: 107/180
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-nepal-gold">🗳️</span> 182/275 seats — RSP supermajority
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-nepal-gold">⚖️</span> 27 PMs in 34 years of democracy
                </li>
              </ul>
            </div>

            {/* Data Sources */}
            <div>
              <h4 className="font-display font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-nepal-gold rounded-full" />
                Data Sources
              </h4>
              <ul className="space-y-2 text-xs opacity-60">
                <li>Government of Nepal Official Statements</li>
                <li>Karki Commission Report (907 pages)</li>
                <li>Election Commission of Nepal</li>
                <li>The Kathmandu Post, Reuters, Al Jazeera</li>
                <li>Transparency International</li>
              </ul>
            </div>
          </div>

          <div className="glow-line mt-10 mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[10px] opacity-40">
              © 2026 SwaChha Nepal Open Source Collective · CC BY 4.0
            </p>
            <p className="text-[10px] opacity-40">
              Data as of April 1, 2026 · All claims sourced · Not a legal determination
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
