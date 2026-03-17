// SEO-DECISION: Comprehensive landing page matrix covering 12 roles × 8 cantons = 96 combinations.
// Each page has unique title, description, intro text, and FAQs for content depth and
// geographic targeting without keyword cannibalization.

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingPageConfig {
  role: string;
  canton: string;
  title: string;
  description: string;
  intro: string;
  roleDescription: string;
  salaryRange: string;
  requirements: string;
  career: string;
  cantonContext: string;
  faqs: LandingFaq[];
}

// --- Role-specific content templates ---
// Used to generate unique content per role × canton combination.

interface RoleContent {
  /** Short role label for titles */
  label: string;
  /** Longer description of what this role does */
  roleDescription: string;
  /** Typical salary range string */
  salaryRange: string;
  /** Key requirements */
  requirements: string;
  /** Career progression options */
  career: string;
  /** Related roles */
  related: string[];
}

const ROLE_CONTENT: Record<string, RoleContent> = {
  "Sanitärinstallateur EFZ": {
    label: "Sanitärinstallateur EFZ",
    roleDescription:
      "Sanitärinstallateure EFZ planen, installieren und warten Sanitäranlagen in Wohn-, Gewerbe- und Industriebauten. Sie führen Wasser-, Abwasser- und Gasinstallationen aus und sorgen für die fachgerechte Inbetriebnahme.",
    salaryRange: "CHF 70'000 – 90'000",
    requirements:
      "Abgeschlossene 4-jährige Lehre als Sanitärinstallateur EFZ, gute Kenntnisse der SIA-Normen, Fahrausweis Kategorie B.",
    career:
      "Weiterbildung zum Sanitärmeister, Projektleiter Sanitär oder Gründung eines eigenen Sanitärbetriebs.",
    related: ["Heizungsinstallateur EFZ", "Servicetechniker Sanitär", "Sanitärmonteur"],
  },
  "Heizungsinstallateur EFZ": {
    label: "Heizungsinstallateur EFZ",
    roleDescription:
      "Heizungsinstallateure EFZ installieren und warten Heizungssysteme wie Öl-, Gas-, Wärmepumpen- und Pelletsanlagen. Sie nehmen Heizsysteme in Betrieb und führen Servicearbeiten durch.",
    salaryRange: "CHF 70'000 – 90'000",
    requirements:
      "Abgeschlossene 4-jährige Lehre als Heizungsinstallateur EFZ, Kenntnisse in Heizungstechnik, Fahrausweis Kategorie B.",
    career:
      "Spezialisierung auf Wärmepumpen, Weiterbildung zum Projektleiter Heizung.",
    related: ["Sanitärinstallateur EFZ", "Servicetechniker Sanitär", "Lüftungsanlagenbauer EFZ"],
  },
  "Spengler EFZ": {
    label: "Spengler EFZ",
    roleDescription:
      "Spengler EFZ arbeiten mit Blech für Bedachungen, Fassaden und Entwässerungssysteme. Sie fertigen und montieren Blechteile und sorgen für den fachgerechten Wasserablauf an Gebäuden.",
    salaryRange: "CHF 65'000 – 82'000",
    requirements:
      "Abgeschlossene 4-jährige Lehre als Spengler EFZ, Schwindelfreiheit, präzises Arbeiten.",
    career:
      "Weiterbildung zum Spenglermeister oder Bauleiter.",
    related: ["Sanitärinstallateur EFZ", "Sanitärmonteur", "Haustechnik-Monteur"],
  },
  "Projektleiter Sanitär": {
    label: "Projektleiter Sanitär",
    roleDescription:
      "Projektleiter Sanitär leiten Sanitärprojekte von der Offerte über die Planung bis zur Übergabe. Sie führen Montageequipen, kontrollieren Kosten und Termine und beraten Bauherren und Architekten.",
    salaryRange: "CHF 85'000 – 110'000",
    requirements:
      "Weiterbildung zum Projektleiter, Führungserfahrung, Verhandlungsgeschick.",
    career:
      "Aufstieg zum Bereichsleiter, Geschäftsführer oder Gründung eines eigenen Sanitärbetriebs.",
    related: ["Bauleiter HLKS", "Sanitärplaner", "Sanitärinstallateur EFZ"],
  },
  "Sanitärplaner": {
    label: "Sanitärplaner",
    roleDescription:
      "Sanitärplaner erstellen Installationspläne für Sanitäranlagen in Neubauten und Umbauten. Sie dimensionieren Leitungssysteme und arbeiten eng mit Architekten und Bauherren zusammen.",
    salaryRange: "CHF 80'000 – 100'000",
    requirements:
      "Ausbildung als Sanitärinstallateur EFZ mit Weiterbildung zum Planer, CAD-Kenntnisse.",
    career:
      "Aufstieg zum Planungsleiter, Spezialisierung auf Energieberatung.",
    related: ["Projektleiter Sanitär", "Bauleiter HLKS", "Gebäudetechnikplaner"],
  },
  "Sanitärmonteur": {
    label: "Sanitärmonteur",
    roleDescription:
      "Sanitärmonteure führen Rohr- und Armaturenarbeiten auf Baustellen aus. Sie verlegen Leitungen, montieren Sanitärapparate und sorgen für dichte und normgerechte Installationen.",
    salaryRange: "CHF 68'000 – 82'000",
    requirements:
      "Ausbildung im Sanitärbereich, Teamfähigkeit, handwerkliches Geschick.",
    career:
      "Weiterbildung zum Vorarbeiter oder Sanitärinstallateur EFZ.",
    related: ["Sanitärinstallateur EFZ", "Rohrleitungsmonteur", "Heizungsinstallateur EFZ"],
  },
  "Servicetechniker Sanitär": {
    label: "Servicetechniker Sanitär",
    roleDescription:
      "Servicetechniker Sanitär beheben Sanitär- und Heizungsstörungen direkt beim Kunden, führen Wartungsarbeiten durch und beraten Kunden zu Sanitär- und Heizungsanlagen.",
    salaryRange: "CHF 72'000 – 88'000",
    requirements:
      "Ausbildung als Sanitärinstallateur EFZ, Freude am Kundenkontakt, Fahrausweis.",
    career:
      "Weiterbildung zum Kundendienstleiter oder Spezialist Wärmepumpen.",
    related: ["Sanitärinstallateur EFZ", "Heizungsinstallateur EFZ", "Haustechnik-Monteur"],
  },
  "Lüftungsanlagenbauer EFZ": {
    label: "Lüftungsanlagenbauer EFZ",
    roleDescription:
      "Lüftungsanlagenbauer EFZ bauen und installieren Lüftungs- und Klimaanlagen. Sie fertigen Luftkanäle, montieren Ventilatoren und sorgen für ein optimales Raumklima in Gebäuden.",
    salaryRange: "CHF 68'000 – 85'000",
    requirements:
      "Abgeschlossene Lehre als Lüftungsanlagenbauer EFZ, Kenntnisse in Lüftungstechnik.",
    career:
      "Weiterbildung zum Projektleiter Lüftung oder Gebäudetechnikplaner.",
    related: ["Heizungsinstallateur EFZ", "Sanitärinstallateur EFZ", "Gebäudetechnikplaner"],
  },
  "Rohrleitungsmonteur": {
    label: "Rohrleitungsmonteur",
    roleDescription:
      "Rohrleitungsmonteure installieren Rohrleitungssysteme für Wasser, Gas und industrielle Anwendungen. Sie arbeiten mit verschiedenen Materialien und Verbindungstechniken.",
    salaryRange: "CHF 68'000 – 85'000",
    requirements:
      "Ausbildung im Rohrleitungsbau, Schweisserkenntnisse, präzises Arbeiten.",
    career:
      "Weiterbildung zum Vorarbeiter oder Bauleiter.",
    related: ["Sanitärmonteur", "Sanitärinstallateur EFZ", "Heizungsinstallateur EFZ"],
  },
  "Bauleiter HLKS": {
    label: "Bauleiter HLKS",
    roleDescription:
      "Bauleiter HLKS koordinieren und überwachen Heizungs-, Lüftungs-, Klima- und Sanitärinstallationen auf Grossbaustellen. Sie sind verantwortlich für Terminplanung, Kostenkontrolle und Qualitätssicherung.",
    salaryRange: "CHF 90'000 – 120'000",
    requirements:
      "Weiterbildung zum Bauleiter oder Projektleiter, mehrjährige Führungserfahrung.",
    career:
      "Aufstieg zum Gesamtprojektleiter oder Geschäftsführer.",
    related: ["Projektleiter Sanitär", "Sanitärplaner", "Sanitärinstallateur EFZ"],
  },
  "Gebäudetechnikplaner": {
    label: "Gebäudetechnikplaner",
    roleDescription:
      "Gebäudetechnikplaner planen gebäudetechnische Anlagen (Heizung, Lüftung, Sanitär, Brandschutz). Sie erstellen Installationspläne und arbeiten mit modernen CAD- und BIM-Systemen.",
    salaryRange: "CHF 78'000 – 98'000",
    requirements:
      "Ausbildung im Bereich Gebäudetechnik, CAD- und BIM-Kenntnisse.",
    career:
      "Aufstieg zum Planungsleiter oder Spezialisierung auf Energieberatung.",
    related: ["Sanitärplaner", "Projektleiter Sanitär", "Bauleiter HLKS"],
  },
  "Haustechnik-Monteur": {
    label: "Haustechnik-Monteur",
    roleDescription:
      "Haustechnik-Monteure sind vielseitige Fachkräfte für Heizungs-, Lüftungs- und Sanitäranlagen. Sie führen Installations-, Wartungs- und Reparaturarbeiten in Gebäuden aus.",
    salaryRange: "CHF 68'000 – 85'000",
    requirements:
      "Ausbildung im Bereich Haustechnik, handwerkliches Geschick, Teamfähigkeit.",
    career:
      "Weiterbildung zum Servicetechniker oder Projektleiter.",
    related: ["Sanitärinstallateur EFZ", "Heizungsinstallateur EFZ", "Servicetechniker Sanitär"],
  },
};

// --- Canton-specific content ---

interface CantonContent {
  /** Full canton name for titles */
  name: string;
  /** Short canton abbreviation */
  abbr: string;
  /** Brief economic context for the sanitary industry */
  context: string;
}

const CANTON_CONTENT: Record<string, CantonContent> = {
  ZH: {
    name: "Zürich",
    abbr: "ZH",
    context:
      "Der Kanton Zürich ist der grösste Arbeitsmarkt der Schweiz mit zahlreichen Neubauprojekten, Sanierungsinitiativen und einer hohen Dichte an Sanitärinstallationsfirmen.",
  },
  BE: {
    name: "Bern",
    abbr: "BE",
    context:
      "Im Kanton Bern gibt es eine starke Nachfrage nach Sanitär-Fachkräften, besonders in der Bundesstadt und im Berner Oberland — von Wohnbau bis Infrastrukturprojekte.",
  },
  BS: {
    name: "Basel",
    abbr: "BS",
    context:
      "Basel-Stadt und die Region Nordwestschweiz bieten attraktive Arbeitsbedingungen mit zahlreichen Industriebetrieben, Pharmaunternehmen und grossen Bauprojekten.",
  },
  AG: {
    name: "Aargau",
    abbr: "AG",
    context:
      "Der Kanton Aargau ist ein wichtiger Industriestandort mit vielen Sanitärinstallationsfirmen und einer hohen Nachfrage nach Sanitär-Fachkräften in Industrie und Bau.",
  },
  SG: {
    name: "St. Gallen",
    abbr: "SG",
    context:
      "Die Ostschweiz mit dem Kanton St. Gallen bietet vielfältige Möglichkeiten für Sanitär-Fachkräfte — von KMU-Betrieben bis zu grossen Gebäudetechnik-Unternehmen.",
  },
  LU: {
    name: "Luzern",
    abbr: "LU",
    context:
      "Im Kanton Luzern wächst die Nachfrage nach Sanitär-Fachkräften stetig — getrieben durch Neubauprojekte, Tourismus-Infrastruktur und Sanierungsprojekte.",
  },
  SO: {
    name: "Solothurn",
    abbr: "SO",
    context:
      "Der Kanton Solothurn bietet als Industriestandort zwischen Bern und Basel gute Karrierechancen für Sanitär-Fachkräfte in Produktion, Bau und Instandhaltung.",
  },
  ZG: {
    name: "Zug",
    abbr: "ZG",
    context:
      "Der Kanton Zug bietet als wirtschaftsstarker Standort überdurchschnittliche Löhne und spannende Projekte im Bereich Gebäudetechnik und Hightech-Infrastruktur.",
  },
  TG: {
    name: "Thurgau",
    abbr: "TG",
    context:
      "Der Kanton Thurgau bietet als wachsender Wirtschaftsstandort in der Ostschweiz zunehmend Chancen für Sanitär-Fachkräfte — besonders in Industrie, Wohnungsbau und Gebäudetechnik.",
  },
  GR: {
    name: "Graubünden",
    abbr: "GR",
    context:
      "Im Kanton Graubünden sind Sanitär-Fachkräfte gefragt — von Tourismusinfrastruktur und Bergbahnen über Sanierungsprojekte bis zu Neubauten in den Ferienorten.",
  },
  SH: {
    name: "Schaffhausen",
    abbr: "SH",
    context:
      "Der Kanton Schaffhausen bietet als kompakter Industriestandort attraktive Stellen für Sanitär-Fachkräfte, insbesondere in der Haustechnik und im Anlagenbau.",
  },
  FR: {
    name: "Fribourg",
    abbr: "FR",
    context:
      "Der zweisprachige Kanton Fribourg wächst dynamisch und bietet Sanitär-Fachkräften vielfältige Möglichkeiten in Wohnungsbau, Industrie und öffentlicher Infrastruktur.",
  },
};

// --- All role keys ---
const ALL_ROLES = Object.keys(ROLE_CONTENT);
const ALL_CANTONS = Object.keys(CANTON_CONTENT);

// --- Content generation ---

function buildLandingConfig(roleKey: string, cantonKey: string): LandingPageConfig {
  const role = ROLE_CONTENT[roleKey];
  const canton = CANTON_CONTENT[cantonKey];

  if (!role || !canton) {
    throw new Error(`Invalid role "${roleKey}" or canton "${cantonKey}"`);
  }

  const relatedRolesList = role.related.join(", ");

  return {
    role: roleKey,
    canton: cantonKey,
    title: `${role.label} Jobs in ${canton.name}`,
    description: `Aktuelle ${role.label} Stellen im Kanton ${canton.name}. ${role.roleDescription.split(".")[0]}. Jetzt bewerben auf sanitaerjobs.ch.`,
    intro: `Als ${role.label} in ${canton.name} findest du auf sanitaerjobs.ch alle aktuellen Stellenangebote in deiner Region. ${role.roleDescription} ${canton.context} Die Nachfrage nach qualifizierten ${role.label}-Fachkräften im Kanton ${canton.name} ist hoch — Arbeitgeber suchen gezielt nach Kandidaten mit ${role.requirements.split(",")[0].toLowerCase()}. Das durchschnittliche Jahresgehalt für ${role.label} in der Schweiz liegt bei ${role.salaryRange}. Verwandte Berufe wie ${relatedRolesList} bieten zusätzliche Karrieremöglichkeiten in der Sanitärbranche. ${role.career} Nutze unsere smarte Filterung nach Pensum, Umkreis und Anstellungsart, um die passende Stelle zu finden. Bewirb dich direkt online und lade deinen Lebenslauf hoch.`,
    roleDescription: role.roleDescription,
    salaryRange: role.salaryRange,
    requirements: role.requirements,
    career: role.career,
    cantonContext: canton.context,
    faqs: [
      {
        question: `Was verdient ein ${role.label} im Kanton ${canton.name}?`,
        answer: `Ein ${role.label} verdient in der Schweiz durchschnittlich ${role.salaryRange} pro Jahr. Im Kanton ${canton.name} können die Löhne je nach Arbeitgeber, Erfahrung und Spezialisierung variieren.`,
      },
      {
        question: `Welche Voraussetzungen braucht man als ${role.label}?`,
        answer: role.requirements,
      },
      {
        question: `Welche Karrieremöglichkeiten hat ein ${role.label}?`,
        answer: role.career,
      },
      {
        question: `Wie viele ${role.label} Jobs gibt es in ${canton.name}?`,
        answer: `Auf sanitaerjobs.ch findest du aktuelle ${role.label} Stellen im Kanton ${canton.name}. Die Anzahl verfügbarer Jobs variiert — nutze unsere Suche für die aktuellsten Ergebnisse.`,
      },
      {
        question: `Wie ist der Arbeitsmarkt für ${role.label} in ${canton.name}?`,
        answer: `${canton.context} Die Nachfrage nach qualifizierten ${role.label}-Fachkräften im Kanton ${canton.name} ist hoch. Das Durchschnittsgehalt liegt bei ${role.salaryRange} pro Jahr. Arbeitgeber suchen gezielt nach Kandidaten mit ${role.requirements.split(",")[0].toLowerCase()}.`,
      },
    ],
  };
}

// --- Build full matrix ---
export const TOP_LANDING_PAGES: LandingPageConfig[] = ALL_ROLES.flatMap((roleKey) =>
  ALL_CANTONS.map((cantonKey) => buildLandingConfig(roleKey, cantonKey))
);

// --- Slug helpers ---

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
  return `/sanitaerjobs/${toRoleSlug(config.role)}/${toCantonSlug(config.canton)}`;
}

export function findLandingPageBySlug(roleSlug: string, cantonSlug: string): LandingPageConfig | null {
  return (
    TOP_LANDING_PAGES.find(
      (item) => toRoleSlug(item.role) === roleSlug && toCantonSlug(item.canton) === cantonSlug
    ) ?? null
  );
}

/**
 * Get landing pages for the same canton (different roles) or same role (different cantons).
 * Used for cross-linking on landing pages.
 */
export function getRelatedLandingPages(config: LandingPageConfig, limit = 8): LandingPageConfig[] {
  const sameCantonDifferentRole = TOP_LANDING_PAGES.filter(
    (p) => p.canton === config.canton && p.role !== config.role
  );
  const sameRoleDifferentCanton = TOP_LANDING_PAGES.filter(
    (p) => p.role === config.role && p.canton !== config.canton
  );

  // Mix: take some from same canton, some from same role
  const mixed: LandingPageConfig[] = [];
  const maxPerGroup = Math.ceil(limit / 2);
  mixed.push(...sameCantonDifferentRole.slice(0, maxPerGroup));
  mixed.push(...sameRoleDifferentCanton.slice(0, maxPerGroup));
  return mixed.slice(0, limit);
}
