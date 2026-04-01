import { Link } from "react-router-dom";
import { StatCard } from "@/components/StatCard";
import { getPlanStats } from "@/data/planItems";
import { getArrestStats } from "@/data/arrests";
import { getNewsSentimentStats } from "@/data/news";
import { timelineEvents } from "@/data/timeline";
import { StatusBadge } from "@/components/StatusBadge";
import { ArrowRight, BarChart3, Users, Clock, Newspaper } from "lucide-react";

const SWEARING_IN = new Date("2026-03-27");

function getDaysInPower() {
  const now = new Date();
  return Math.floor((now.getTime() - SWEARING_IN.getTime()) / (1000 * 60 * 60 * 24));
}

export default function HomePage() {
  const plan = getPlanStats();
  const arrests = getArrestStats();
  const news = getNewsSentimentStats();
  const daysInPower = getDaysInPower();
  const latestEvents = timelineEvents.slice(-4).reverse();

  return (
    <div className="page-container">
      {/* Hero */}
      <section className="mb-8 md:mb-12">
        <div className="nepal-gradient rounded-2xl p-6 md:p-10 text-primary-foreground">
          <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            SwaChha Nepal
          </h1>
          <p className="mt-2 text-sm md:text-base opacity-90 max-w-2xl">
            Citizen-powered government accountability tracker. Holding Nepal's new government to its promises — in real time.
          </p>
          <p className="mt-4 font-mono text-xs opacity-75">
            सत्य र जवाफदेहिता — Truth & Accountability
          </p>
        </div>
      </section>

      {/* KPI Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
        <StatCard label="Days in Power" value={daysInPower} variant="primary" />
        <StatCard label="Plan Completion" value={`${plan.avgProgress}%`} sub={`${plan.done}/${plan.total} done`} variant="success" />
        <StatCard label="Arrested" value={arrests.arrested} sub={`${arrests.investigating} investigating`} variant="destructive" />
        <StatCard label="News Tracked" value={news.positive + news.negative + news.neutral + news.cautious} sub={`${news.positive} positive, ${news.negative} negative`} />
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
        {[
          { to: "/plan", icon: BarChart3, label: "100-Day Plan", desc: `${plan.done} completed, ${plan.inProgress} in progress` },
          { to: "/rbb", icon: Users, label: "RAW Behind Bars", desc: `${arrests.arrested} arrested, ${arrests.investigating} under probe` },
          { to: "/timeline", icon: Clock, label: "Action Timeline", desc: `${timelineEvents.length} events tracked` },
          { to: "/news", icon: Newspaper, label: "News & Sentiment", desc: "National & international coverage" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="stat-card group flex items-start gap-3 hover:border-primary/30"
          >
            <div className="nepal-gradient p-2 rounded-lg text-primary-foreground shrink-0">
              <item.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-semibold text-sm">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
          </Link>
        ))}
      </section>

      {/* Latest Events */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="section-title text-xl">Latest Events</h2>
          <Link to="/timeline" className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="space-y-3">
          {latestEvents.map((e) => (
            <div key={e.id} className="stat-card flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-mono text-xs text-muted-foreground shrink-0">{e.date}</span>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm">{e.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{e.body}</p>
              </div>
              <StatusBadge status={e.significance === 'Historic' ? 'done' : e.significance === 'Major' ? 'in_progress' : 'not_started'} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
