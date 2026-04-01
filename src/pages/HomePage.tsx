import { Link } from "react-router-dom";
import { StatCard } from "@/components/StatCard";
import { SEOHead } from "@/components/SEOHead";
import { getPlanStats } from "@/data/planItems";
import { getArrestStats } from "@/data/arrests";
import { getNewsSentimentStats } from "@/data/news";
import { timelineEvents } from "@/data/timeline";
import { MandalaWatermark, PrayerFlagDivider, SectionHeader, DharmaWheel, MountainSilhouette } from "@/components/NepaliPatterns";
import { ArrowRight, BarChart3, Users, Clock, Newspaper, Building2, Eye, Scale, TrendingUp, Shield } from "lucide-react";
import heroImg from "@/assets/hero-nepal.jpg";

const SWEARING_IN = new Date("2026-03-27");

function getDaysInPower() {
  const now = new Date();
  return Math.floor((now.getTime() - SWEARING_IN.getTime()) / (1000 * 60 * 60 * 24));
}

const quotes = [
  { text: "No one is above the law. This is not revenge — it is just the beginning of justice.", author: "Home Minister Sudan Gurung", date: "March 28, 2026" },
  { text: "Every generation before has overthrown a government. None has sustained lasting change.", author: "Amish Raj Mulmi, Carnegie Endowment", date: "September 2025" },
  { text: "People have a lot of hope from this party. If they don't work, we'll face what we did last year.", author: "Roman Thapa, taxi driver, Kathmandu", date: "March 2026" },
];

const moduleCards = [
  { to: "/plan", icon: BarChart3, label: "100-Day Plan", emoji: "📋", desc: "Track every promise" },
  { to: "/rbb", icon: Users, label: "RAW Behind Bars", emoji: "⚖️", desc: "Arrest & investigation tracker" },
  { to: "/timeline", icon: Clock, label: "Action Timeline", emoji: "🕐", desc: "Day-by-day actions" },
  { to: "/news", icon: Newspaper, label: "News & Sentiment", emoji: "📰", desc: "Media coverage analysis" },
  { to: "/government", icon: Building2, label: "Nepal 101", emoji: "🏛️", desc: "Government structure" },
  { to: "/old-guard", icon: Eye, label: "Old Guard Watch", emoji: "👁️", desc: "Former regime tracker" },
];

export default function HomePage() {
  const plan = getPlanStats();
  const arrests = getArrestStats();
  const news = getNewsSentimentStats();
  const daysInPower = getDaysInPower();
  const latestEvents = timelineEvents.slice(-5).reverse();

  return (
    <div className="nepal-pattern-bg">
      <SEOHead
        title="SwaChha Nepal — Government Accountability Tracker"
        description="Citizen-powered platform tracking Nepal's RSP government: 100-day plan progress, corruption arrests, news sentiment, and government structure."
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Himalayan mountains with prayer flags at sunrise — Nepal's new dawn"
            className="w-full h-full object-cover"
            width={1920}
            height={640}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nepal-dark/95 via-nepal-dark/80 to-nepal-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-nepal-dark/60 to-transparent" />
        </div>

        {/* Mandala watermark */}
        <MandalaWatermark className="absolute -right-20 -top-20 w-80 h-80 opacity-[0.06] text-white pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24">
          <div className="max-w-2xl">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-medium mb-5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-slow" />
              <span className="font-mono">Day {daysInPower}</span>
              <span className="w-px h-3 bg-white/20" />
              <span>Live Tracking</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
              SwaChha{" "}
              <span className="bg-gradient-to-r from-nepal-gold to-nepal-light-gold bg-clip-text text-transparent">
                Nepal
              </span>
            </h1>

            <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed max-w-lg">
              Citizen-powered accountability tracker. Holding Nepal's new RSP government to every promise — transparently, in real time.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/plan"
                className="inline-flex items-center gap-2 nepal-gradient text-white px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                <BarChart3 className="w-4 h-4" />
                Track the 100-Day Plan
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/rbb"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/20 transition-colors"
              >
                <Shield className="w-4 h-4" />
                RAW Behind Bars
              </Link>
            </div>

            <p className="mt-8 text-xs text-white/30 font-mono tracking-wide">
              सत्य र जवाफदेहिता — Truth & Accountability
            </p>
          </div>
        </div>

        {/* Mountain silhouette transition */}
        <MountainSilhouette className="absolute bottom-0 left-0 right-0 text-background" />
      </section>

      <div className="page-container">
        {/* KPI Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 -mt-2 relative z-10 mb-10">
          <StatCard label="Days in Power" value={daysInPower} variant="primary" icon={<Clock className="w-4 h-4" />} />
          <StatCard label="Plan Progress" value={`${plan.avgProgress}%`} sub={`${plan.done}/${plan.total} completed`} variant="success" icon={<TrendingUp className="w-4 h-4" />} />
          <StatCard label="Arrested" value={arrests.arrested} sub={`${arrests.investigating} under investigation`} variant="destructive" icon={<Shield className="w-4 h-4" />} />
          <StatCard label="News Tracked" value={news.positive + news.negative + news.neutral + news.cautious} sub={`${news.positive} positive · ${news.negative} critical`} icon={<Newspaper className="w-4 h-4" />} />
        </section>

        {/* Modules */}
        <section className="mb-12">
          <SectionHeader sub="Navigate the accountability tracker">Explore Modules</SectionHeader>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {moduleCards.map((item) => (
              <Link key={item.to} to={item.to} className="module-card">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-sm group-hover:text-primary transition-colors">{item.label}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="mb-12">
          <div className="relative nepal-dark-gradient rounded-2xl p-6 md:p-8 text-white overflow-hidden">
            <MandalaWatermark className="absolute -right-16 -bottom-16 w-48 h-48 opacity-[0.04] text-white pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <DharmaWheel className="w-6 h-6" />
                <Scale className="w-5 h-5 text-nepal-gold/60" />
              </div>
              <blockquote className="text-sm md:text-base italic leading-relaxed opacity-90 max-w-2xl">
                "{quotes[0].text}"
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-0.5 bg-nepal-gold/50 rounded-full" />
                <p className="text-xs opacity-50">
                  {quotes[0].author} · {quotes[0].date}
                </p>
              </div>
            </div>
          </div>
        </section>

        <PrayerFlagDivider className="mb-10 rounded-full overflow-hidden" />

        {/* Latest Events */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <SectionHeader sub={`${timelineEvents.length} events tracked since March 27`}>Latest Events</SectionHeader>
            <Link to="/timeline" className="text-xs text-primary font-medium flex items-center gap-1 hover:underline">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="space-y-2">
            {latestEvents.map((e, i) => (
              <div key={e.id} className="stat-card flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                    e.significance === 'Historic' ? 'nepal-gradient text-white' :
                    e.significance === 'Major' ? 'bg-info/10 text-info' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {i + 1}
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground shrink-0">{e.date}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{e.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{e.body}</p>
                </div>
                <span className={`text-[10px] px-2.5 py-1 rounded-full shrink-0 font-semibold tracking-wider uppercase ${
                  e.significance === 'Historic' ? 'nepal-gradient text-white' :
                  e.significance === 'Major' ? 'bg-info/10 text-info' :
                  e.significance === 'Policy' ? 'bg-warning/10 text-warning' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {e.significance}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Context Stats */}
        <section className="mb-6">
          <SectionHeader sub="Understanding the scale of change">Nepal in Context</SectionHeader>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { val: "77", label: "Lives lost in Sept 2025", emoji: "🕯️" },
              { val: "182", label: "RSP seats (of 275)", emoji: "🗳️" },
              { val: "35", label: "PM Balen Shah's age", emoji: "🇳🇵" },
              { val: "27", label: "PMs in 34 years", emoji: "📜" },
            ].map((s) => (
              <div key={s.label} className="stat-card text-center group">
                <span className="text-lg mb-1 block">{s.emoji}</span>
                <p className="text-2xl font-display font-bold tabular-nums group-hover:text-primary transition-colors">{s.val}</p>
                <p className="text-[10px] text-muted-foreground mt-1.5 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
