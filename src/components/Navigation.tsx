import { Link, useLocation } from "react-router-dom";
import { BarChart3, Clock, Users, Newspaper, Building2, Eye, Home, Menu, X } from "lucide-react";
import { PrayerFlagLine } from "./NepaliPatterns";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/plan", label: "100-Day Plan", icon: BarChart3 },
  { path: "/timeline", label: "Timeline", icon: Clock },
  { path: "/rbb", label: "RBB", icon: Users },
  { path: "/news", label: "News", icon: Newspaper },
  { path: "/government", label: "Gov", icon: Building2 },
  { path: "/old-guard", label: "Old Guard", icon: Eye },
];

/** More detailed Nepal flag SVG with moon & sun */
export function NepalFlag({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={className} aria-label="Nepal Flag">
      {/* Outer border */}
      <polygon points="0,0 100,40 0,80" fill="hsl(220, 65%, 35%)" />
      <polygon points="0,40 100,80 0,120" fill="hsl(220, 65%, 35%)" />
      {/* Inner crimson */}
      <polygon points="5,5 92,38 5,75" fill="hsl(4, 70%, 46%)" />
      <polygon points="5,45 92,75 5,115" fill="hsl(4, 70%, 46%)" />
      {/* Moon crescent */}
      <circle cx="32" cy="28" r="10" fill="white" />
      <circle cx="36" cy="25" r="8" fill="hsl(4, 70%, 46%)" />
      {/* Sun */}
      <circle cx="32" cy="68" r="9" fill="white" />
      {/* Sun rays */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={32 + 9 * Math.cos(angle)}
            y1={68 + 9 * Math.sin(angle)}
            x2={32 + 14 * Math.cos(angle)}
            y2={68 + 14 * Math.sin(angle)}
            stroke="white"
            strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
}

export function TopNav() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <PrayerFlagLine />
      <div className="bg-card/90 backdrop-blur-xl border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link to="/" className="flex items-center gap-2.5 group">
              <NepalFlag className="w-7 h-9 group-hover:scale-105 transition-transform" />
              <div>
                <span className="font-display font-bold text-base md:text-lg tracking-tight">
                  SwaChha <span className="text-primary">Nepal</span>
                </span>
                <span className="hidden sm:block text-[9px] text-muted-foreground tracking-[0.2em] uppercase">
                  सत्य र जवाफदेहिता
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "nepal-gradient text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-card/95 backdrop-blur-xl">
            <nav className="px-4 py-3 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "nepal-gradient text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t safe-area-pb">
      <div className="flex items-center justify-around py-1 px-1">
        {navItems.slice(0, 5).map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg min-w-[52px] transition-all ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground active:scale-95"
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'drop-shadow-sm' : ''}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && <div className="w-1 h-1 rounded-full nepal-gradient" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
