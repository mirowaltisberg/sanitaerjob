export interface LandingPageConfig {
  role: string;
  canton: string;
  title: string;
  description: string;
}

export const TOP_LANDING_PAGES: LandingPageConfig[] = [
  {
    role: "Elektroinstallateur EFZ",
    canton: "ZH",
    title: "Elektroinstallateur EFZ Jobs in Zürich",
    description: "Aktuelle Elektroinstallateur EFZ Jobs im Kanton Zürich mit Direktbewerbung.",
  },
  {
    role: "Montage-Elektriker EFZ",
    canton: "BE",
    title: "Montage-Elektriker Jobs in Bern",
    description: "Offene Stellen für Montage-Elektriker EFZ im Kanton Bern.",
  },
  {
    role: "Servicetechniker Elektro",
    canton: "AG",
    title: "Servicetechniker Elektro Jobs in Aargau",
    description: "Top Servicetechniker-Stellen in Aargau für Elektro-Fachkräfte.",
  },
  {
    role: "Projektleiter Elektro",
    canton: "BS",
    title: "Projektleiter Elektro Jobs in Basel",
    description: "Projektleiter Elektro Stellen in Basel mit spannenden Bauprojekten.",
  },
  {
    role: "Automatiker EFZ",
    canton: "SG",
    title: "Automatiker EFZ Jobs in St. Gallen",
    description: "Aktuelle Automatiker Jobs in St. Gallen und Umgebung.",
  },
  {
    role: "Elektroplaner",
    canton: "LU",
    title: "Elektroplaner Jobs in Luzern",
    description: "Elektroplaner-Stellen im Kanton Luzern für Planung und Projektierung.",
  },
];

function normalizeSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function toRoleSlug(role: string): string {
  return normalizeSlug(role);
}

export function toCantonSlug(canton: string): string {
  return normalizeSlug(canton);
}

export function getLandingPath(config: LandingPageConfig): string {
  return `/elektrojobs/${toRoleSlug(config.role)}/${toCantonSlug(config.canton)}`;
}

export function findLandingPageBySlug(roleSlug: string, cantonSlug: string): LandingPageConfig | null {
  return (
    TOP_LANDING_PAGES.find(
      (item) => toRoleSlug(item.role) === roleSlug && toCantonSlug(item.canton) === cantonSlug
    ) ?? null
  );
}
