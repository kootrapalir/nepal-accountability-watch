interface StatCardProps {
  label: string;
  value: string | number;
  sub?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive';
  icon?: React.ReactNode;
}

const accentColors = {
  default: 'from-muted-foreground/20 to-muted-foreground/5',
  primary: 'from-primary/30 to-primary/5',
  success: 'from-success/30 to-success/5',
  warning: 'from-warning/30 to-warning/5',
  destructive: 'from-destructive/30 to-destructive/5',
};

const valueColors = {
  default: 'text-foreground',
  primary: 'text-primary',
  success: 'text-success',
  warning: 'text-warning',
  destructive: 'text-destructive',
};

export function StatCard({ label, value, sub, variant = 'default', icon }: StatCardProps) {
  return (
    <div className="stat-card group">
      {/* Subtle gradient accent at top */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColors[variant]} rounded-t-xl`} />
      
      <div className="flex items-start justify-between">
        <p className="text-[10px] sm:text-xs text-muted-foreground font-medium uppercase tracking-wider">{label}</p>
        {icon && <div className="text-muted-foreground/50">{icon}</div>}
      </div>
      <p className={`text-2xl sm:text-3xl font-display font-bold mt-1.5 animate-count-up tabular-nums ${valueColors[variant]}`}>
        {value}
      </p>
      {sub && <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">{sub}</p>}
    </div>
  );
}
