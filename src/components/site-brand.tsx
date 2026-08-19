import { cn } from "@/lib/utils";

interface SiteBrandProps {
  className?: string;
  inverse?: boolean;
}

/** A compact pipe-and-flow lockup drawn in CSS/SVG; no external brand asset. */
export function SiteBrand({ className, inverse = false }: SiteBrandProps) {
  return (
    <span
      className={cn("site-brand", inverse && "site-brand--inverse", className)}
      role="img"
      aria-label="sanitaerjobs.ch"
    >
      <svg
        className="site-brand__mark"
        viewBox="0 0 42 42"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M8 7v12a6 6 0 0 0 6 6h14a6 6 0 0 1 6 6v4" />
        <path d="M8 13h7M27 29h7" />
        <circle cx="8" cy="7" r="3" />
        <circle cx="34" cy="35" r="3" />
      </svg>
      <span className="site-brand__type">
        <strong>sanitär</strong>
        <span>jobs.ch</span>
      </span>
    </span>
  );
}
