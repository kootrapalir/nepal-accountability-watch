import { useState } from "react";
import { timelineEvents, timelineCategories } from "@/data/timeline";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader, PrayerFlagDivider } from "@/components/NepaliPatterns";

const sigStyles: Record<string, { border: string; badge: string; dot: string }> = {
  Historic: { border: 'border-l-primary', badge: 'nepal-gradient text-white', dot: 'nepal-gradient' },
  Major: { border: 'border-l-info', badge: 'bg-info/10 text-info', dot: 'bg-info' },
  Policy: { border: 'border-l-warning', badge: 'bg-warning/10 text-warning', dot: 'bg-warning' },
  Developing: { border: 'border-l-muted-foreground/30', badge: 'bg-muted text-muted-foreground', dot: 'bg-muted-foreground' },
};

export default function TimelinePage() {
  const [catFilter, setCatFilter] = useState<string>('all');

  const filtered = catFilter === 'all'
    ? timelineEvents
    : timelineEvents.filter(e => e.category === catFilter);

  return (
    <div className="page-container nepal-pattern-bg">
      <SEOHead title="Government Action Timeline" description="Chronological log of every significant action by Nepal's new RSP government since March 27, 2026." />
      
      <SectionHeader sub={`${timelineEvents.length} events chronologically logged since March 27, 2026`}>
        🕐 Government Action Timeline
      </SectionHeader>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setCatFilter('all')}
          className={`filter-pill ${catFilter === 'all' ? 'filter-pill-active' : 'filter-pill-inactive'}`}
        >
          All ({timelineEvents.length})
        </button>
        {timelineCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCatFilter(c)}
            className={`filter-pill ${catFilter === c ? 'filter-pill-active' : 'filter-pill-inactive'}`}
          >
            {c}
          </button>
        ))}
      </div>

      <PrayerFlagDivider className="mb-8 rounded-full overflow-hidden" />

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 md:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-border to-border" />

        <div className="space-y-4">
          {filtered.map((event) => {
            const style = sigStyles[event.significance] || sigStyles.Developing;
            return (
              <div key={event.id} className="relative pl-12 md:pl-16">
                {/* Dot on timeline */}
                <div className={`absolute left-3.5 md:left-5.5 top-5 w-3 h-3 rounded-full border-2 border-card ${style.dot}`} />
                
                <div className={`stat-card border-l-4 ${style.border}`}>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-mono text-xs text-primary/60 font-bold">{event.date}</span>
                    <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full uppercase tracking-wider font-medium">{event.category}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wider uppercase ${style.badge}`}>
                      {event.significance}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-sm">{event.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{event.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
