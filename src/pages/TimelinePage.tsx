import { useState } from "react";
import { timelineEvents, timelineCategories } from "@/data/timeline";
import { StatusBadge } from "@/components/StatusBadge";

const sigColors: Record<string, string> = {
  Historic: 'border-l-primary',
  Major: 'border-l-info',
  Policy: 'border-l-warning',
  Developing: 'border-l-muted-foreground',
};

export default function TimelinePage() {
  const [catFilter, setCatFilter] = useState<string>('all');

  const filtered = catFilter === 'all'
    ? timelineEvents
    : timelineEvents.filter(e => e.category === catFilter);

  return (
    <div className="page-container">
      <h1 className="section-title mb-2">Government Action Timeline</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Chronological log of every significant action since March 27, 2026.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setCatFilter('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            catFilter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
          }`}
        >
          All
        </button>
        {timelineCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCatFilter(c)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              catFilter === c ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-4">
          {filtered.map((event) => (
            <div key={event.id} className={`relative pl-10 md:pl-14`}>
              <div className="absolute left-2.5 md:left-4.5 top-4 w-3 h-3 rounded-full border-2 border-card bg-primary" />
              <div className={`stat-card border-l-4 ${sigColors[event.significance] || 'border-l-border'}`}>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-muted-foreground">{event.date}</span>
                  <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full uppercase tracking-wider">{event.category}</span>
                  <StatusBadge status={event.significance === 'Historic' ? 'done' : event.significance === 'Major' ? 'in_progress' : 'not_started'} />
                </div>
                <h3 className="font-display font-semibold text-sm">{event.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{event.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
