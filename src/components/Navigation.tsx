import { Link, useLocation } from "react-router-dom";
import { BarChart3, Clock, Users, Newspaper, Building2, Eye, Home } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/plan", label: "100-Day Plan", icon: BarChart3 },
  { path: "/timeline", label: "Timeline", icon: Clock },
  { path: "/rbb", label: "RBB", icon: Users },
  { path: "/news", label: "News", icon: Newspaper },
  { path: "/government", label: "Gov", icon: Building2 },
  { path: "/old-guard", label: "Old Guard", icon: Eye },
];

export function NepalFlag({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={className} fill="none">
      <polygon points="0,0 100,40 0,80" fill="hsl(4, 70%, 46%)" stroke="hsl(220, 65%, 40%)" strokeWidth="3" />
      <polygon points="0,40 100,80 0,120" fill="hsl(4, 70%, 46%)" stroke="hsl(220, 65%, 40%)" strokeWidth="3" />
      <circle cx="35" cy="30" r="10" fill="hsl(0, 0%, 100%)" />
      <circle cx="35" cy="65" r="12" fill="hsl(0, 0%, 100%)" />
    </svg>
  );
}

export function TopNav() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <NepalFlag className="w-7 h-8" />
            <div>
              <span className="font-display font-bold text-lg tracking-tight">SwaChha Nepal</span>
              <span className="hidden sm:block text-[10px] text-muted-foreground tracking-widest uppercase">Truth & Accountability</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t safe-area-pb">
      <div className="flex items-center justify-around py-1.5 px-1">
        {navItems.slice(0, 5).map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg min-w-[52px] transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
