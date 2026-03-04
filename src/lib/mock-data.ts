export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string; // e.g. "Full-time", "Part-time"
  workload: string; // e.g. "80-100%"
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  datePosted: string;
  isUrgent?: boolean;
  isNew?: boolean;
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Sanitärinstallateur EFZ (m/w/d)",
    company: "AquaTech AG",
    location: "Zürich, ZH",
    type: "Full-time",
    workload: "100%",
    description: "Wir suchen einen engagierten Sanitärinstallateur für spannende Neubau- und Umbauprojekte im Raum Zürich.",
    responsibilities: [
      "Installation von Wasser- und Abwasserleitungen",
      "Montage und Anschluss von Sanitärapparaten",
      "Planlesen und selbständige Umsetzung auf der Baustelle",
      "Dokumentation der ausgeführten Arbeiten"
    ],
    requirements: [
      "Abgeschlossene Lehre als Sanitärinstallateur EFZ",
      "Einige Jahre Berufserfahrung von Vorteil",
      "Gute Deutschkenntnisse",
      "Führerausweis Kategorie B"
    ],
    benefits: [
      "Überdurchschnittliches Gehalt",
      "Modernes Firmenfahrzeug",
      "5 Wochen Ferien",
      "Weiterbildungsmöglichkeiten"
    ],
    datePosted: "2026-02-24",
    isNew: true,
  },
  {
    id: "2",
    title: "Heizungsinstallateur EFZ",
    company: "Thermo Haustechnik AG",
    location: "Bern, BE",
    type: "Full-time",
    workload: "80-100%",
    description: "Unterstützen Sie unser Team bei der Installation und Wartung von modernen Heizungssystemen in Wohn- und Gewerbebauten.",
    responsibilities: [
      "Installation von Heizungsanlagen (Wärmepumpen, Gas, Öl)",
      "Inbetriebnahme und Einregulierung von Heizsystemen",
      "Wartungs- und Servicearbeiten an Heizungsanlagen",
      "Rohrleitungsmontage und Anschlussarbeiten"
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Heizungsinstallateur EFZ",
      "Handwerkliches Geschick und Zuverlässigkeit",
      "Teamfähigkeit und genaue Arbeitsweise"
    ],
    benefits: [
      "Junges und dynamisches Team",
      "Flache Hierarchien",
      "Gute Sozialleistungen"
    ],
    datePosted: "2026-02-20",
  },
  {
    id: "3",
    title: "Projektleiter Sanitär (w/m)",
    company: "Hydro Systems AG",
    location: "Basel, BS",
    type: "Full-time",
    workload: "100%",
    description: "Leiten Sie anspruchsvolle Sanitärprojekte im Wohn- und Gewerbebau von der Planung bis zur Übergabe.",
    responsibilities: [
      "Projektleitung von A bis Z inklusive Kostenkontrolle",
      "Kundenberatung und Offertenerstellung",
      "Führung der Montageequipen",
      "Qualitätssicherung und Abnahme"
    ],
    requirements: [
      "Weiterbildung zum Projektleiter Sanitär oder Sanitärmeister",
      "Führungserfahrung in einer ähnlichen Position",
      "Kenntnisse der SIA-Normen und Sanitärplanung",
      "Verhandlungsgeschick und souveränes Auftreten"
    ],
    benefits: [
      "Attraktives Bonusmodell",
      "Geschäftsauto auch zur privaten Nutzung",
      "Flexible Arbeitszeiten"
    ],
    datePosted: "2026-02-23",
    isUrgent: true,
  },
  {
    id: "4",
    title: "Spengler EFZ / Sanitärmonteur",
    company: "Alpin Installationen AG",
    location: "Luzern, LU",
    type: "Full-time",
    workload: "100%",
    description: "Sie arbeiten mit Blech und führen Sanitärmontagen auf Baustellen und in bestehenden Gebäuden aus.",
    responsibilities: [
      "Montage von Blechverkleidungen und Entwässerungssystemen",
      "Verlegen und Verbinden von Rohrleitungen",
      "Montage von Sanitärapparaten und Armaturen",
      "Mithilfe bei Dach- und Fassadenarbeiten"
    ],
    requirements: [
      "Berufsabschluss als Spengler EFZ oder Sanitärmonteur",
      "Schwindelfreiheit und präzises Arbeiten",
      "Selbständige und zuverlässige Arbeitsweise"
    ],
    benefits: [
      "Moderne Werkzeuge und Ausrüstung",
      "Geregelte Arbeitszeiten ohne Schichtbetrieb",
      "Gute Anbindung an den ÖV"
    ],
    datePosted: "2026-02-18",
  },
  {
    id: "5",
    title: "Servicetechniker Sanitär",
    company: "Aqua Service AG",
    location: "St. Gallen, SG",
    type: "Part-time",
    workload: "60-80%",
    description: "Als Servicetechniker beheben Sie Sanitär- und Heizungsstörungen direkt bei unseren Kunden vor Ort.",
    responsibilities: [
      "Behebung von Sanitär- und Heizungsstörungen bei Privat- und Geschäftskunden",
      "Kleinere Installationsanpassungen und Reparaturen",
      "Ausführung von Piketteinsätzen (ca. 1x im Monat)",
      "Kundenberatung vor Ort"
    ],
    requirements: [
      "Ausbildung als Sanitärinstallateur EFZ",
      "Freude am Kundenkontakt und gepflegtes Auftreten",
      "Lösungsorientierte Denkweise",
      "Gültiger Fahrausweis"
    ],
    benefits: [
      "Hohe Selbständigkeit",
      "Umfassend ausgerüstetes Servicefahrzeug",
      "Leistungsgerechte Entlöhnung"
    ],
    datePosted: "2026-02-25",
    isNew: true,
  }
];
