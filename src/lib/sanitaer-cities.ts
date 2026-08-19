export interface SanitaerCity {
  slug: string;
  name: string;
  cantonAbbr: string;
  cantonSlug: string;
  population: string;
  intro: string;
  districts: string[];
  commuterTowns: string[];
  region: string;
  salaryBand: string;
}

export const SANITAER_CITIES: SanitaerCity[] = [
  {
    slug: "zuerich",
    name: "Zürich",
    cantonAbbr: "ZH",
    cantonSlug: "zuerich",
    population: "ca. 440'000",
    region: "Grossraum Zürich",
    intro:
      "Zürich ist der grösste Schweizer Arbeitsmarkt für Sanitär-Berufe. Banken, Tech-Konzerne, Spitäler, Wohnbau- und Gewerbeprojekte sorgen für konstante Nachfrage. Die Lohnniveaus liegen 5 bis 10 Prozent über dem Schweizer Mittel.",
    districts: ["City", "Oerlikon", "Altstetten", "Wiedikon", "Schwamendingen", "Affoltern"],
    commuterTowns: ["Winterthur", "Uster", "Dübendorf", "Wetzikon", "Wädenswil", "Bülach"],
    salaryBand: "CHF 79'000 – 101'000",
  },
  {
    slug: "basel",
    name: "Basel",
    cantonAbbr: "BS",
    cantonSlug: "basel",
    population: "ca. 175'000",
    region: "Nordwestschweiz",
    intro:
      "Basel ist Pharma- und Wohnbaustandort. Roche- und Novartis-Areale, Spitäler und das Hafenviertel beschäftigen Sanitärinstallateure und Servicetechniker mit überdurchschnittlichen Saläre.",
    districts: ["Innenstadt", "Kleinbasel", "Gundeldingen", "Bachletten", "St. Johann"],
    commuterTowns: ["Liestal", "Allschwil", "Münchenstein", "Riehen", "Reinach", "Pratteln"],
    salaryBand: "CHF 77'000 – 98'000",
  },
  {
    slug: "bern",
    name: "Bern",
    cantonAbbr: "BE",
    cantonSlug: "bern",
    population: "ca. 145'000",
    region: "Mittelland",
    intro:
      "Bern vereint Bundesverwaltung, kantonale Bauämter und ein breites Spektrum an Gewerbe- und Wohnbauprojekten. Sanitär-Aufträge im öffentlichen Bau sind stabil und ganzjährig vorhanden, mit Lohnniveaus auf Schweizer Mittel.",
    districts: ["Innenstadt", "Länggasse", "Breitenrain", "Wankdorf", "Bümpliz"],
    commuterTowns: ["Biel", "Thun", "Köniz", "Münsingen", "Burgdorf", "Lyss"],
    salaryBand: "CHF 72'000 – 92'000",
  },
  {
    slug: "luzern",
    name: "Luzern",
    cantonAbbr: "LU",
    cantonSlug: "luzern",
    population: "ca. 83'000",
    region: "Zentralschweiz",
    intro:
      "Luzern setzt auf Hotelbau, Spitalrenovationen und Wohnungsneubau — Sanitärfachkräfte für Bad-, WC- und Wasseranlagen sind ganzjährig stark gefragt. Nähe zu Zug treibt die Saläre nach oben.",
    districts: ["Innenstadt", "Tribschen", "Sentimatt", "Würzenbach", "Maihof"],
    commuterTowns: ["Emmen", "Kriens", "Sursee", "Hochdorf", "Stans", "Zug"],
    salaryBand: "CHF 71'000 – 91'000",
  },
  {
    slug: "st-gallen",
    name: "St. Gallen",
    cantonAbbr: "SG",
    cantonSlug: "st-gallen",
    population: "ca. 80'000",
    region: "Ostschweiz",
    intro:
      "St. Gallen ist Industriestandort und Tor zur Ostschweiz. Maschinenindustrie, Lebensmittelverarbeitung (Bühler-Cluster) und ein wachsender Bildungssektor beschäftigen Sanitär-Fachkräfte in stabilen Festanstellungen. Saläre liegen leicht unter dem Schweizer Mittel, dafür sind Mietpreise tiefer.",
    districts: ["Innenstadt", "St. Fiden", "Bruggen", "Riethüsli", "Heiligkreuz"],
    commuterTowns: ["Wil", "Rorschach", "Gossau", "Herisau", "Rapperswil", "Buchs SG"],
    salaryBand: "CHF 68'000 – 87'000",
  },
];

export function findSanitaerCity(slug: string): SanitaerCity | null {
  return SANITAER_CITIES.find((c) => c.slug === slug) ?? null;
}
