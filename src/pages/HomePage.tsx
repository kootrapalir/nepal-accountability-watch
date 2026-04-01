import { Link } from "react-router-dom";
import { StatCard } from "@/components/StatCard";
import { SEOHead } from "@/components/SEOHead";
import { getPlanStats } from "@/data/planItems";
import { getArrestStats } from "@/data/arrests";
import { getNewsSentimentStats } from "@/data/news";
import { timelineEvents } from "@/data/timeline";
import { StatusBadge } from "@/components/StatusBadge";
import { ArrowRight, BarChart3, Users, Clock, Newspaper, Building2, Eye, TrendingUp, Scale } from "lucide-react";
import heroImg from "@/assets/hero-mountains.jpg";

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

export default function HomePage() {
  const plan = getPlanStats();
  const arrests = getArrestStats();
  const news = getNewsSentimentStats();
  const daysInPower = getDaysInPower();
  const latestEvents = timelineEvents.slice(-5).reverse();

  return (
    <div>
      <SEOHead
        title="SwaChha Nepal — Government Accountability Tracker"
        description="Citizen-powered platform tracking Nepal's RSP government: 100-day plan progress, corruption arrests, news sentiment, and government structure."
      />

      {/* Hero with image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Himalayan mountains at sunrise representing Nepal's new dawn"
            className="w-full h-full object-cover"
            width={1920}
            height={640}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nepal-dark/90 via-nepal-dark/70 to-nepal-dark/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-slow" />
              Day {daysInPower} in power
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-primary-foreground">
              SwaChha Nepal
            </h1>
            <p className="mt-3 text-sm md:text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
              Citizen-powered government accountability tracker. Holding Nepal's new RSP government to its promises — in real time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/plan"
                className="inline-flex items-center gap-2 nepal-gradient text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <BarChart3 className="w-4 h-4" />
                Track the 100-Day Plan
              </Link>
              <Link
                to="/rbb"
                className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/20 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-foreground/20 transition-colors"
              >
                <Users className="w-4 h-4" />
                RAW Behind Bars
              </Link>
            </div>
            <p className="mt-6 font-mono text-xs text-primary-foreground/50">
              सत्य र जवाफदेहिता — Truth & Accountability
            </p>
          </div>
        </div>
      </section>

      <div className="page-container">
        {/* KPI Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 -mt-6 relative z-10 mb-8">
          <StatCard label="Days in Power" value={daysInPower} variant="primary" />
          <StatCard label="Plan Progress" value={`${plan.avgProgress}%`} sub={`${plan.done}/${plan.total} completed`} variant="success" />
          <StatCard label="Arrested" value={arrests.arrested} sub={`${arrests.investigating} under investigation`} variant="destructive" />
          <StatCard label="News Tracked" value={news.positive + news.negative + news.neutral + news.cautious} sub={`${news.positive} positive · ${news.negative} negative`} />
        </section>

        {/* Navigation Cards */}
        <section className="mb-10">
          <h2 className="section-title text-xl mb-4">Explore Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              { to: "/plan", icon: BarChart3, label: "100-Day Plan", desc: `${plan.done} completed, ${plan.inProgress} in progress`, color: "nepal-gradient" },
              { to: "/rbb", icon: Users, label: "RAW Behind Bars", desc: `${arrests.arrested} arrested, ${arrests.investigating} under probe`, color: "bg-destructive" },
              { to: "/timeline", icon: Clock, label: "Action Timeline", desc: `${timelineEvents.length} events since March 27`, color: "bg-info" },
              { to: "/news", icon: Newspaper, label: "News & Sentiment", desc: "National & international coverage", color: "bg-nepal-gold" },
              { to: "/government", icon: Building2, label: "Nepal 101", desc: "Government structure & election results", color: "bg-nepal-blue" },
              { to: "/old-guard", icon: Eye, label: "Old Guard Watchlist", desc: "9 tracked figures, 8 corruption cases", color: "bg-nepal-dark" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="stat-card group flex items-start gap-3 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className={`${item.color} p-2.5 rounded-xl text-primary-foreground shrink-0`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-bold text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="mb-10">
          <div className="bg-nepal-dark rounded-2xl p-6 md:p-8 text-primary-foreground">
            <Scale className="w-6 h-6 text-nepal-gold mb-3" />
            <blockquote className="text-sm md:text-base italic leading-relaxed opacity-90">
              "{quotes[0].text}"
            </blockquote>
            <div className="mt-3 flex items-center gap-2">
              <div className="w-px h-4 bg-nepal-gold" />
              <p className="text-xs text-primary-foreground/60">
                {quotes[0].author} · {quotes[0].date}
              </p>
            </div>
          </div>
        </section>

        {/* Latest Events */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="section-title text-xl">Latest Events</h2>
            <Link to="/timeline" className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="space-y-2">
            {latestEvents.map((e, i) => (
              <div key={e.id} className="stat-card flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    e.significance === 'Historic' ? 'nepal-gradient text-primary-foreground' :
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
                <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 font-medium ${
                  e.significance === 'Historic' ? 'bg-primary/10 text-primary' :
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
        <section className="mb-4">
          <h2 className="section-title text-xl mb-4">Nepal in Context</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="stat-card text-center">
              <p className="text-2xl font-display font-bold">77</p>
              <p className="text-xs text-muted-foreground mt-1">Lives lost in Sept 2025</p>
            </div>
            <div className="stat-card text-center">
              <p className="text-2xl font-display font-bold">182</p>
              <p className="text-xs text-muted-foreground mt-1">RSP seats (of 275)</p>
            </div>
            <div className="stat-card text-center">
              <p className="text-2xl font-display font-bold">35</p>
              <p className="text-xs text-muted-foreground mt-1">PM Balen Shah's age</p>
            </div>
            <div className="stat-card text-center">
              <p className="text-2xl font-display font-bold">27</p>
              <p className="text-xs text-muted-foreground mt-1">PMs in 34 years</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
