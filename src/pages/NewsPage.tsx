import { useState } from "react";
import { newsArticles, getNewsSentimentStats, type Sentiment } from "@/data/news";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader, PrayerFlagDivider } from "@/components/NepaliPatterns";

const sentimentConfig: Record<Sentiment, { border: string; dot: string; emoji: string; label: string }> = {
  positive: { border: 'border-l-success', dot: 'bg-success', emoji: '🟢', label: 'Positive' },
  negative: { border: 'border-l-destructive', dot: 'bg-destructive', emoji: '🔴', label: 'Critical' },
  neutral: { border: 'border-l-muted-foreground/30', dot: 'bg-muted-foreground', emoji: '⚪', label: 'Neutral' },
  cautious: { border: 'border-l-warning', dot: 'bg-warning', emoji: '🟡', label: 'Cautious' },
};

export default function NewsPage() {
  const [sentimentFilter, setSentimentFilter] = useState<Sentiment | 'all'>('all');
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const stats = getNewsSentimentStats();

  const sourceTypes = ['all', 'national', 'international', 'regional'];
  const filtered = newsArticles.filter((a) => {
    if (sentimentFilter !== 'all' && a.sentiment !== sentimentFilter) return false;
    if (sourceFilter !== 'all' && a.sourceType !== sourceFilter) return false;
    return true;
  });

  return (
    <div className="page-container nepal-pattern-bg">
      <SEOHead title="News & Sentiment Analysis" description="Aggregated news coverage of Nepal's government from national and international media, categorized by sentiment." />
      
      <SectionHeader sub="Aggregated coverage from national & international media, categorized by sentiment">
        📰 News & Sentiment
      </SectionHeader>

      {/* Sentiment Overview */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-6">
        {(['positive', 'negative', 'neutral', 'cautious'] as Sentiment[]).map((s) => {
          const cfg = sentimentConfig[s];
          const isActive = sentimentFilter === s;
          return (
            <button
              key={s}
              onClick={() => setSentimentFilter(sentimentFilter === s ? 'all' : s)}
              className={`stat-card text-center cursor-pointer transition-all ${isActive ? 'ring-2 ring-primary shadow-md' : ''}`}
            >
              <span className="text-lg block mb-1">{cfg.emoji}</span>
              <p className="text-xl sm:text-2xl font-display font-bold tabular-nums">{stats[s]}</p>
              <p className="text-[10px] text-muted-foreground font-medium mt-0.5">{cfg.label}</p>
            </button>
          );
        })}
      </div>

      {/* Source filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {sourceTypes.map((s) => (
          <button
            key={s}
            onClick={() => setSourceFilter(s)}
            className={`filter-pill ${sourceFilter === s ? 'filter-pill-active' : 'filter-pill-inactive'}`}
          >
            {s === 'all' ? '🌐 All Sources' : s === 'national' ? '🇳🇵 National' : s === 'international' ? '🌍 International' : '📍 Regional'}
          </button>
        ))}
      </div>

      <PrayerFlagDivider className="mb-6 rounded-full overflow-hidden" />

      {/* Articles */}
      <div className="space-y-3">
        {filtered.map((article) => {
          const cfg = sentimentConfig[article.sentiment];
          return (
            <div key={article.id} className={`stat-card border-l-4 ${cfg.border}`}>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="font-display font-semibold text-sm">{article.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">{article.source}</span>
                    <span className="text-[10px] text-muted-foreground font-mono">{article.date}</span>
                    <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded-full capitalize font-medium">{article.sourceType}</span>
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full shrink-0 mt-1 ${cfg.dot}`} />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{article.summary}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {article.themes.map((t) => (
                  <span key={t} className="text-[10px] bg-muted/80 px-2 py-0.5 rounded-full text-muted-foreground font-medium">{t}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <span className="text-4xl mb-3 block">📰</span>
          <p className="text-muted-foreground text-sm">No articles match the current filters.</p>
        </div>
      )}
    </div>
  );
}
