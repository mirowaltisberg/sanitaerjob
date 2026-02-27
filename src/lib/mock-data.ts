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
    title: "Elektroinstallateur EFZ (m/w/d)",
    company: "VoltTech AG",
    location: "Zürich, ZH",
    type: "Full-time",
    workload: "100%",
    description: "Wir suchen einen engagierten Elektroinstallateur für spannende Neubau- und Umbauprojekte im Raum Zürich.",
    responsibilities: [
      "Ausführung von Stark- und Schwachstrominstallationen",
      "Inbetriebnahme und Prüfung von elektrischen Anlagen",
      "Planlesen und selbständige Umsetzung auf der Baustelle",
      "Dokumentation der ausgeführten Arbeiten"
    ],
    requirements: [
      "Abgeschlossene Lehre als Elektroinstallateur EFZ",
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
    title: "Montage-Elektriker EFZ",
    company: "Licht & Kraft GmbH",
    location: "Bern, BE",
    type: "Full-time",
    workload: "80-100%",
    description: "Unterstützen Sie unser Team bei der Umsetzung von modernen Elektroinstallationen in Wohn- und Gewerbebauten.",
    responsibilities: [
      "Rohbaueinlagen und Kabelzug",
      "Montage von Schaltern und Steckdosen",
      "Mithilfe bei der Gebäudeautomation",
      "Allgemeine elektrische Montagearbeiten"
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Montage-Elektriker EFZ",
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
    title: "Projektleiter Elektro (w/m)",
    company: "SmartHome Systems SA",
    location: "Basel, BS",
    type: "Full-time",
    workload: "100%",
    description: "Leiten Sie innovative Smart-Home- und Gewerbeprojekte von der Planung bis zur Übergabe.",
    responsibilities: [
      "Projektleitung von A bis Z inklusive Kostenkontrolle",
      "Kundenberatung und Offertenerstellung",
      "Führung der Montageequipen",
      "Qualitätssicherung und Abnahme"
    ],
    requirements: [
      "Weiterbildung zum Elektro-Sicherheitsberater oder Elektro-Projektleiter",
      "Führungserfahrung in einer ähnlichen Position",
      "Kenntnisse in Gebäudeautomation (KNX/DALI)",
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
    title: "Automatiker EFZ / Schaltanlagenbauer",
    company: "ControlSys Group",
    location: "Luzern, BL",
    type: "Full-time",
    workload: "100%",
    description: "Sie bauen und verdrahten Schaltgerätekombinationen und Steuerungen für die Industrie.",
    responsibilities: [
      "Aufbau und Verdrahtung von Steuer- und Schaltanlagen",
      "Prüfung der fertigen Anlagen nach Schema",
      "Fehlersuche und Behebung",
      "Mithilfe bei Inbetriebnahmen"
    ],
    requirements: [
      "Berufsabschluss als Automatiker EFZ oder Schaltanlagenmonteur",
      "Exaktes Lesen von Elektroschemata",
      "Selbständige und präzise Arbeitsweise"
    ],
    benefits: [
      "Moderne Werkstatt",
      "Geregelte Arbeitszeiten ohne Schichtbetrieb",
      "Gute Anbindung an den ÖV"
    ],
    datePosted: "2026-02-18",
  },
  {
    id: "5",
    title: "Servicetechniker Elektro",
    company: "ElectroService 24",
    location: "St. Gallen, LU",
    type: "Part-time",
    workload: "60-80%",
    description: "Als Servicetechniker lösen Sie elektrische Störungen direkt bei unseren Kunden vor Ort.",
    responsibilities: [
      "Behebung von elektrischen Störungen bei Privat- und Geschäftskunden",
      "Kleinere Installationsanpassungen und Erweiterungen",
      "Ausführung von Piketteinsätzen (ca. 1x im Monat)",
      "Kundenberatung vor Ort"
    ],
    requirements: [
      "Ausbildung als Elektroinstallateur EFZ",
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
