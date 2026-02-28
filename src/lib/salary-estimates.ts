/**
 * Approximate annual CHF salary ranges for Swiss electrical trade roles.
 * Used when no salary data is available from the job source.
 */

export interface SalaryRange {
  min: number;
  max: number;
}

/**
 * Pattern → salary range mapping.
 * Checked top-to-bottom; first match wins, so put specific roles before generic ones.
 */
const ROLE_SALARY_MAP: { patterns: string[]; range: SalaryRange }[] = [
  // Leadership / senior roles
  {
    patterns: ["bauleiter"],
    range: { min: 90_000, max: 120_000 },
  },
  {
    patterns: ["projektleiter"],
    range: { min: 85_000, max: 110_000 },
  },
  // Planning / design
  {
    patterns: ["elektroplaner", "planer elektro"],
    range: { min: 80_000, max: 100_000 },
  },
  // Core trades
  {
    patterns: ["elektroinstallateur"],
    range: { min: 75_000, max: 95_000 },
  },
  {
    patterns: ["automatiker", "automatikmonteur"],
    range: { min: 75_000, max: 95_000 },
  },
  {
    patterns: ["servicetechniker", "kundendiensttechniker"],
    range: { min: 75_000, max: 90_000 },
  },
  {
    patterns: ["betriebselektriker"],
    range: { min: 75_000, max: 90_000 },
  },
  {
    patterns: ["montage-elektriker", "montageelektriker"],
    range: { min: 75_000, max: 80_000 },
  },
  {
    patterns: ["netzelektriker"],
    range: { min: 70_000, max: 85_000 },
  },
  {
    patterns: ["elektromonteur"],
    range: { min: 70_000, max: 85_000 },
  },
  {
    patterns: ["schaltanlagen", "schaltschrank"],
    range: { min: 72_000, max: 88_000 },
  },
  {
    patterns: ["photovoltaik", "solartechnik", "solar"],
    range: { min: 70_000, max: 90_000 },
  },
  {
    patterns: ["gebäudetechnik", "gebaeudetechnik", "haustechnik", "gebäudeautomation"],
    range: { min: 75_000, max: 95_000 },
  },
  {
    patterns: ["inbetriebnahme"],
    range: { min: 78_000, max: 98_000 },
  },
  {
    patterns: ["spengler"],
    range: { min: 65_000, max: 80_000 },
  },
  // Broad fallbacks (keep last)
  {
    patterns: ["elektriker", "elektro"],
    range: { min: 70_000, max: 90_000 },
  },
  {
    patterns: ["techniker"],
    range: { min: 72_000, max: 92_000 },
  },
  {
    patterns: ["monteur"],
    range: { min: 68_000, max: 85_000 },
  },
  {
    patterns: ["heizung", "lüftung", "klima", "sanitär", "hlk"],
    range: { min: 70_000, max: 90_000 },
  },
];

/**
 * Estimate an annual CHF salary range from a job title.
 * Returns `null` when no pattern matches.
 */
export function estimateSalary(title: string): SalaryRange | null {
  const lower = title.toLowerCase();

  for (const entry of ROLE_SALARY_MAP) {
    for (const pattern of entry.patterns) {
      if (lower.includes(pattern)) {
        return entry.range;
      }
    }
  }

  return null;
}

/**
 * Format a salary range as a Swiss-locale string, e.g. "75'000 – 95'000".
 */
export function formatSalaryRange(range: SalaryRange): string {
  const fmt = (n: number) =>
    n.toLocaleString("de-CH", { maximumFractionDigits: 0 });
  return `${fmt(range.min)} – ${fmt(range.max)}`;
}
