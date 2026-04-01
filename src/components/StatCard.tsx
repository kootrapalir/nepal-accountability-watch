interface StatCardProps {
  label: string;
  value: string | number;
  sub?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive';
}

const variantStyles = {
  default: 'stat-card',
  primary: 'stat-card border-primary/20',
  success: 'stat-card border-success/20',
  warning: 'stat-card border-warning/20',
  destructive: 'stat-card border-destructive/20',
};

export function StatCard({ label, value, sub, variant = 'default' }: StatCardProps) {
  return (
    <div className={variantStyles[variant]}>
      <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">{label}</p>
      <p className="text-2xl sm:text-3xl font-display font-bold mt-1 animate-count-up">{value}</p>
      {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
    </div>
  );
}
