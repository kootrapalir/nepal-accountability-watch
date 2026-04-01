import { useState } from "react";
import { newsArticles, getNewsSentimentStats, type Sentiment } from "@/data/news";

const sentimentColors: Record<Sentiment, string> = {
  positive: 'bg-success/10 text-success border-success/20',
  negative: 'bg-destructive/10 text-destructive border-destructive/20',
  neutral: 'bg-muted text-muted-foreground border-border',
  cautious: 'bg-warning/10 text-warning border-warning/20',
};

const sentimentDots: Record<Sentiment, string> = {
  positive: 'bg-success',
  negative: 'bg-destructive',
  neutral: 'bg-muted-foreground',
  cautious: 'bg-warning',
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
    <div className="page-container">
      <h1 className="section-title mb-2">News & Sentiment</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Aggregated coverage from national and international media, categorized by sentiment.
      </p>

      {/* Sentiment Overview */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {(['positive', 'negative', 'neutral', 'cautious'] as Sentiment[]).map((s) => (
          <button
            key={s}
            onClick={() => setSentimentFilter(sentimentFilter === s ? 'all' : s)}
            className={`stat-card text-center cursor-pointer transition-all ${
              sentimentFilter === s ? 'ring-2 ring-primary' : ''
            }`}
          >
            <div className={`w-3 h-3 rounded-full mx-auto mb-1 ${sentimentDots[s]}`} />
            <p className="text-lg font-display font-bold">{stats[s]}</p>
            <p className="text-[10px] text-muted-foreground capitalize">{s}</p>
          </button>
        ))}
      </div>

      {/* Source filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {sourceTypes.map((s) => (
          <button
            key={s}
            onClick={() => setSourceFilter(s)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              sourceFilter === s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}
          >
            {s === 'all' ? 'All Sources' : s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="space-y-3">
        {filtered.map((article) => (
          <div key={article.id} className={`stat-card border ${sentimentColors[article.sentiment]}`}>
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <h3 className="font-display font-semibold text-sm">{article.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-[10px] font-medium uppercase tracking-wider">{article.source}</span>
                  <span className="text-[10px] text-muted-foreground font-mono">{article.date}</span>
                  <span className="text-[10px] bg-muted/50 px-1.5 py-0.5 rounded capitalize">{article.sourceType}</span>
                </div>
              </div>
              <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 ${sentimentDots[article.sentiment]}`} />
            </div>
            <p className="text-xs text-muted-foreground">{article.summary}</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {article.themes.map((t) => (
                <span key={t} className="text-[10px] bg-muted px-2 py-0.5 rounded-full text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
