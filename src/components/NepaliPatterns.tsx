/**
 * Reusable Nepali cultural SVG patterns & decorative elements.
 * Mandala borders, prayer flag dividers, mountain silhouettes, pagoda icons.
 */

/** Prayer flag banner — 5 colored flags */
export function PrayerFlagDivider({ className = "" }: { className?: string }) {
  const colors = ["#2563EB", "#F9FAFB", "#DC2626", "#16A34A", "#EAB308"];
  return (
    <div className={`flex w-full overflow-hidden ${className}`} aria-hidden="true">
      {colors.map((color, i) => (
        <div
          key={i}
          className="flex-1 h-1.5"
          style={{ background: color, opacity: 0.85 }}
        />
      ))}
    </div>
  );
}

/** Thin prayer flag line — subtle variant */
export function PrayerFlagLine({ className = "" }: { className?: string }) {
  const colors = ["#2563EB", "#F9FAFB", "#DC2626", "#16A34A", "#EAB308"];
  return (
    <div className={`flex w-full ${className}`} aria-hidden="true">
      {colors.map((color, i) => (
        <div key={i} className="flex-1 h-0.5" style={{ background: color, opacity: 0.6 }} />
      ))}
    </div>
  );
}

/** Mountain silhouette — decorative footer/section divider */
export function MountainSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      className={`w-full ${className}`}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,120 L0,90 Q60,40 120,70 Q200,20 280,55 Q340,10 420,45 Q480,5 560,40 Q620,15 720,50 Q800,8 880,35 Q940,5 1020,30 Q1100,0 1180,25 Q1260,10 1340,40 Q1400,20 1440,35 L1440,120 Z"
        fill="currentColor"
        opacity="0.08"
      />
      <path
        d="M0,120 L0,95 Q80,55 160,80 Q240,35 340,65 Q420,25 520,55 Q600,20 700,50 Q780,15 880,45 Q960,10 1060,35 Q1140,8 1240,30 Q1320,15 1440,45 L1440,120 Z"
        fill="currentColor"
        opacity="0.05"
      />
    </svg>
  );
}

/** Mandala decorative corner — used as ornamental accent */
export function MandalaCorner({ className = "w-16 h-16", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} text-primary ${flip ? 'scale-x-[-1]' : ''}`}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <circle cx="10" cy="10" r="16" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <circle cx="10" cy="10" r="24" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      <circle cx="10" cy="10" r="32" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
      <circle cx="10" cy="10" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.07" />
      {/* Petal accents */}
      {[0, 45, 90].map((angle) => (
        <line
          key={angle}
          x1="10"
          y1="10"
          x2={10 + 45 * Math.cos((angle * Math.PI) / 180)}
          y2={10 + 45 * Math.sin((angle * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="0.3"
          opacity="0.12"
        />
      ))}
    </svg>
  );
}

/** Full mandala — used as background watermark */
export function MandalaWatermark({ className = "w-64 h-64" }: { className?: string }) {
  const petals = 12;
  return (
    <svg viewBox="0 0 200 200" className={`${className} text-primary`} fill="none" aria-hidden="true">
      {[30, 50, 70, 90].map((r) => (
        <circle key={r} cx="100" cy="100" r={r} stroke="currentColor" strokeWidth="0.4" opacity={0.08} />
      ))}
      {Array.from({ length: petals }).map((_, i) => {
        const angle = (i * 360) / petals;
        const rad = (angle * Math.PI) / 180;
        return (
          <g key={i}>
            <line
              x1="100"
              y1="100"
              x2={100 + 90 * Math.cos(rad)}
              y2={100 + 90 * Math.sin(rad)}
              stroke="currentColor"
              strokeWidth="0.3"
              opacity="0.06"
            />
            <circle
              cx={100 + 50 * Math.cos(rad)}
              cy={100 + 50 * Math.sin(rad)}
              r="3"
              stroke="currentColor"
              strokeWidth="0.3"
              opacity="0.08"
            />
          </g>
        );
      })}
    </svg>
  );
}

/** Pagoda temple icon — used in nav or section headers */
export function PagodaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 1L8 5h8l-4-4z" opacity="0.9" />
      <path d="M6 5l-2 3h16l-2-3H6z" opacity="0.7" />
      <path d="M4 8l-2 3h20l-2-3H4z" opacity="0.5" />
      <rect x="10" y="11" width="4" height="10" rx="0.5" opacity="0.8" />
      <rect x="7" y="21" width="10" height="2" rx="0.5" opacity="0.6" />
    </svg>
  );
}

/** Dharma wheel / Ashoka chakra inspired */
export function DharmaWheel({ className = "w-8 h-8" }: { className?: string }) {
  const spokes = 8;
  return (
    <svg viewBox="0 0 40 40" className={`${className} text-nepal-gold`} fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.5" />
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * 360) / spokes;
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={20 + 4 * Math.cos(rad)}
            y1={20 + 4 * Math.sin(rad)}
            x2={20 + 16 * Math.cos(rad)}
            y2={20 + 16 * Math.sin(rad)}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
        );
      })}
    </svg>
  );
}

/** Section header with mandala ornament */
export function SectionHeader({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="relative mb-6">
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 nepal-gradient rounded-full" />
        <div>
          <h2 className="section-title text-xl md:text-2xl">{children}</h2>
          {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
        </div>
      </div>
    </div>
  );
}

/** Nepali number formatter */
export function NepaliNumber({ value }: { value: number | string }) {
  return <span className="font-display font-bold tabular-nums">{value}</span>;
}
