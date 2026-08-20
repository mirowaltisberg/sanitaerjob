import type { RemoteFilter } from "@/lib/job-types";

export const DIRECT_HIRE_FEED_TARGET = 12;

export interface DirectHireOpportunity {
  kind: "direct-hire-opportunity";
  id: string;
  title: string;
  location: string;
  type: "Direktanstellung";
  workload: string;
  workModel: string;
  description: string;
  contactHref: string;
}

interface DirectHireOpportunityInput {
  realJobCount: number;
  query: string;
  location: string;
  workload: string;
  remote: RemoteFilter;
}

interface ControlledRole {
  title: string;
  aliases: readonly string[];
}

const CONTROLLED_ROLES: readonly ControlledRole[] = [
  {
    title: "Sanitärinstallateur/in EFZ",
    aliases: ["sanitärinstallateur", "sanitaerinstallateur", "sanitär efz", "sanitaer efz"],
  },
  {
    title: "Sanitärmonteur/in",
    aliases: ["sanitärmonteur", "sanitaermonteur", "monteur sanitär", "monteur sanitaer"],
  },
  {
    title: "Servicetechniker/in Sanitär",
    aliases: ["servicetechniker", "service sanitär", "service sanitaer"],
  },
  {
    title: "Gebäudetechnikplaner/in Sanitär",
    aliases: ["gebäudetechnikplaner", "gebaeudetechnikplaner", "sanitärplaner", "sanitaerplaner"],
  },
  {
    title: "Projektleiter/in Sanitär",
    aliases: ["projektleiter", "projektleitung"],
  },
  {
    title: "Chefmonteur/in Sanitär",
    aliases: ["chefmonteur", "bauleitender monteur"],
  },
  {
    title: "Bauleitende/r Sanitärinstallateur/in",
    aliases: ["bauleitend", "bauleiter sanitär", "bauleiter sanitaer"],
  },
  {
    title: "Sanitärpraktiker/in EBA",
    aliases: ["sanitärpraktiker", "sanitaerpraktiker", "eba sanitär", "eba sanitaer"],
  },
  {
    title: "Kundendienstmonteur/in Sanitär",
    aliases: ["kundendienst", "kundendienstmonteur"],
  },
  {
    title: "AVOR-Sachbearbeiter/in Sanitär",
    aliases: ["avor", "arbeitsvorbereitung"],
  },
  {
    title: "Kalkulator/in Sanitär",
    aliases: ["kalkulator", "kalkulation"],
  },
  {
    title: "Inbetriebnahme-Fachperson Sanitär",
    aliases: ["inbetriebnahme", "inbetriebsetzung"],
  },
];

const DEFAULT_LOCATIONS = [
  "Zürich, ZH",
  "Bern, BE",
  "Basel, BS",
  "Luzern, LU",
  "St. Gallen, SG",
  "Winterthur, ZH",
  "Aarau, AG",
  "Biel, BE",
  "Thun, BE",
  "Chur, GR",
  "Zug, ZG",
  "Lausanne, VD",
] as const;

const CONTROLLED_LOCATIONS = new Map(
  [
    ...DEFAULT_LOCATIONS,
    "Schaffhausen, SH",
    "Solothurn, SO",
    "Fribourg, FR",
    "Lugano, TI",
    "Grossraum Zürich",
    "Zentralschweiz",
    "Nordwestschweiz",
    "Ostschweiz",
    "Mittelland",
    "Westschweiz / Romandie",
    "Tessin",
    "Wallis",
  ].map((location) => [normalize(location), location] as const),
);

function normalize(value: string): string {
  return value.toLocaleLowerCase("de-CH").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

function slugify(value: string): string {
  return normalize(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

function matchingRoles(query: string): readonly ControlledRole[] {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return CONTROLLED_ROLES;

  const match = CONTROLLED_ROLES.find((role) =>
    role.aliases.some((alias) => normalizedQuery.includes(normalize(alias))),
  );
  if (!match) return CONTROLLED_ROLES;
  return [match, ...CONTROLLED_ROLES.filter((role) => role !== match)];
}

function controlledLocation(input: string): string | null {
  const normalized = normalize(input);
  if (!normalized || ["schweiz", "ganze schweiz", "schweizweit", "ch"].includes(normalized)) {
    return null;
  }
  return CONTROLLED_LOCATIONS.get(normalized) ?? null;
}

function controlledWorkload(input: string, index: number): string {
  const normalized = normalize(input);
  if (normalized.includes("teilzeit")) return "60–80%";
  if (normalized.includes("vollzeit")) return "80–100%";
  if (/^100(?:\s*prozent)?$/.test(normalized)) return "100%";
  if (normalized.includes("80") && normalized.includes("100")) return "80–100%";
  return ["80–100%", "100%", "60–100%"][index % 3] ?? "80–100%";
}

export function buildDirectHireOpportunities({
  realJobCount,
  query,
  location,
  workload,
  remote,
}: DirectHireOpportunityInput): DirectHireOpportunity[] {
  const count = Math.max(0, DIRECT_HIRE_FEED_TARGET - Math.max(0, realJobCount));
  if (count === 0) return [];

  const roles = matchingRoles(query);
  const selectedLocation = controlledLocation(location);

  return Array.from({ length: count }, (_, index) => {
    const role = roles[index % roles.length] ?? CONTROLLED_ROLES[0];
    const opportunityLocation = selectedLocation ?? DEFAULT_LOCATIONS[index % DEFAULT_LOCATIONS.length];
    const id = `direct-${slugify(role.title)}-${slugify(opportunityLocation)}-${index + 1}`;
    const workModel = remote === "true" ? "Je nach Betrieb teilweise remote" : "Direkt beim Betrieb";

    return {
      kind: "direct-hire-opportunity",
      id,
      title: role.title,
      location: opportunityLocation,
      type: "Direktanstellung",
      workload: controlledWorkload(workload, index),
      workModel,
      description:
        "Laufende Personalsuche für eine direkte Festanstellung bei einem passenden Sanitärbetrieb. Der Arbeitsvertrag entsteht direkt mit dem Betrieb; diese Plattform ist nicht der Arbeitgeber.",
      contactHref: "/kontakt",
    };
  });
}
