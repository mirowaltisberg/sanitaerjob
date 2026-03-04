/**
 * Approximate annual CHF salary ranges for Swiss sanitary/HVAC trade roles.
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
    patterns: ["bauleiter hlks", "bauleiter hlk"],
    range: { min: 90_000, max: 120_000 },
  },
  {
    patterns: ["projektleiter sanitär", "projektleiter sanitaer"],
    range: { min: 85_000, max: 110_000 },
  },
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
    patterns: ["sanitärplaner", "sanitaerplaner", "planer sanitär", "planer sanitaer"],
    range: { min: 80_000, max: 100_000 },
  },
  {
    patterns: ["gebäudetechnikplaner", "gebaeudetechnikplaner"],
    range: { min: 78_000, max: 98_000 },
  },
  // Core trades
  {
    patterns: ["sanitärinstallateur", "sanitaerinstallateur"],
    range: { min: 70_000, max: 90_000 },
  },
  {
    patterns: ["heizungsinstallateur"],
    range: { min: 70_000, max: 90_000 },
  },
  {
    patterns: ["servicetechniker sanitär", "servicetechniker sanitaer"],
    range: { min: 72_000, max: 88_000 },
  },
  {
    patterns: ["servicetechniker", "kundendiensttechniker"],
    range: { min: 72_000, max: 88_000 },
  },
  {
    patterns: ["spengler"],
    range: { min: 65_000, max: 82_000 },
  },
  {
    patterns: ["sanitärmonteur", "sanitaermonteur"],
    range: { min: 68_000, max: 82_000 },
  },
  {
    patterns: ["lüftungsanlagenbauer", "lueftungsanlagenbauer"],
    range: { min: 68_000, max: 85_000 },
  },
  {
    patterns: ["rohrleitungsmonteur"],
    range: { min: 68_000, max: 85_000 },
  },
  {
    patterns: ["haustechnik"],
    range: { min: 68_000, max: 85_000 },
  },
  {
    patterns: ["gebäudetechnik", "gebaeudetechnik"],
    range: { min: 78_000, max: 98_000 },
  },
  // Broad fallbacks (keep last)
  {
    patterns: ["sanitär", "sanitaer"],
    range: { min: 70_000, max: 90_000 },
  },
  {
    patterns: ["heizung"],
    range: { min: 70_000, max: 90_000 },
  },
  {
    patterns: ["lüftung", "lueftung", "klima"],
    range: { min: 68_000, max: 85_000 },
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
    patterns: ["installat"],
    range: { min: 70_000, max: 90_000 },
  },
  {
    patterns: ["hlk", "hkls", "hlks", "hvac"],
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
