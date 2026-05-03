// SEO-DECISION: Per-page editorial content for the highest-traffic role × canton
// combinations. Keyed by `${roleSlug}::${cantonSlug}`. The category page renders
// EditorialIntro only when an entry exists here — pages without an entry fall back
// to the default short layout. Word target per section: ~80 words. Total per
// page: 320+. Swiss orthography only — never use Eszett, always "ss".

export interface EditorialContent {
  /** "Was macht ein/e ROLE in CANTON?" — concrete day-to-day, regional context */
  whatDoes: string;
  /** "Lohn & Aufstiegschancen" — salary band + progression. Deep-links to /#loehne */
  salary: string;
  /** "Welche Betriebe stellen ein?" — anonymized, never names specific companies */
  employers: string;
  /** "Bewerbungs-Tipps" — practical, regional (ÖV, Pendlerregion, Sprache) */
  applicationTips: string;
}

const ENTRIES: Record<string, EditorialContent> = {
  "sanitaerinstallateur-efz::zh": {
    whatDoes:
      "Ein Sanitärinstallateur EFZ in Zürich plant Wasser-, Abwasser- und Gasinstallationen in Wohn-, Gewerbe- und Bürobauten, führt sie aus und nimmt sie in Betrieb. Der Arbeitsalltag wechselt zwischen Rohbau, Bad- und Küchenmontage sowie Wartung bestehender Sanitärobjekte. In Zürich verschiebt sich die Praxis stark Richtung wassersparende Armaturen, digitale Wasserzähler mit Fernablesung (Smart-Water), Anschluss von Wärmepumpen-Speichern und Sanierung historischer Steigleitungen. Die hohe Sanierungsdichte in den Stadtkreisen 1 bis 6 bringt enge Schächte, Termindruck und denkmalgeschützte Substanz mit sich, dafür auch Zugang zu Grossprojekten in Zürich-West, am Limmatufer und im Hochschulquartier.",
    salary:
      "Ein Sanitärinstallateur EFZ verdient in Zürich typisch CHF 75'000 bis 92'000 pro Jahr — am oberen Ende des Schweizer Bands. Verantwortung als Vorarbeiter oder Servicetechniker hebt das Salär um weitere 8 bis 12 Prozent. Mit der Berufsprüfung zum dipl. Sanitärtechniker HF (3 bis 4 Jahre berufsbegleitend) öffnet sich die Projektleitung, Löhne von CHF 95'000 bis 110'000 sind realistisch. Wer den eidg. dipl. Sanitärmeister anstrebt, landet im Kanton Zürich häufig im Bereich CHF 110'000 bis 135'000. Pikettzulagen und der 13. Monatslohn sind branchenüblich. Die vollständige Lohnübersicht steht auf unserer Startseite.",
    employers:
      "Im Kanton Zürich rekrutieren vor allem Sanitär-Installationsbetriebe mit 10 bis 60 Mitarbeitenden — typische KMU der Gebäudetechnik, die im Wohnungs- und Gewerbebau tätig sind. Daneben besetzen Generalunternehmer Gebäudetechnik regelmässig Stellen für Spitäler, Schulhäuser und öffentliche Bauten. Service- und Notdienst-Anbieter mit 24/7-Pikett suchen Fachkräfte für Störungsbehebung an Heizungs- und Sanitäranlagen. Industrie-Wartungsdienstleister rund um Zürich-Nord brauchen Spezialisten für Prozessleitungen und Druckluft. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf sanitaerjobs.ch sind anonymisiert, der Arbeitgeber wird im Vorgespräch offengelegt.",
    applicationTips:
      "Lege Wert auf einen kompakten Lebenslauf mit klar gelisteten SIA-Norm-Kenntnissen, gefahrenen Stundensätzen und konkreten Referenzobjekten — zum Beispiel «MFH Wipkingen, 28 Wohnungen, Vollausführung Sanitär». Im Kanton Zürich rechnen Arbeitgeber mit täglichem Pendeln: ÖV-Knotenpunkt statt nur Wohnort angeben ist oft entscheidend, weil Baustellen wechseln. Füge ein Foto deiner Schweizer EFZ-Urkunde bei — viele Betriebe filtern Inserate ohne sichtbaren Lehrabschluss aus. Pikettbereitschaft, Fahrausweis Kategorie B und körperliche Belastbarkeit werden im Erstgespräch gezielt abgefragt. Erfahrung mit Wärmepumpen-Anbindung oder Solarthermie als Plus prominent erwähnen — das hebt dein Dossier in der Vorauswahl deutlich.",
  },

  "sanitaermonteur::be": {
    whatDoes:
      "Ein Sanitärmonteur im Kanton Bern verlegt Wasser- und Abwasserleitungen, montiert Sanitärapparate und sorgt für dichte, normgerechte Installationen — meist auf Baustellen, im Team und nach Vorgabe der Sanitärinstallateure EFZ. In Bern heisst das viel Arbeit zwischen Mittelland-Wohnüberbauungen, Sanierungen in der Altstadt und Tourismusbauten im Berner Oberland. Der Tagesablauf wechselt zwischen Rohbaueinlagen, Bad- und Küchenmontage und Endkontrolle vor der Abnahme. Wer flink, sauber und wettertauglich arbeitet, ist bei Generalunternehmern wie bei spezialisierten Sanitärbetrieben gefragt. Wassersparende Armaturen und Smart-Water-Komponenten gehören heute zum Standardrepertoire jeder Wohnungsausstattung.",
    salary:
      "Sanitärmonteure verdienen im Kanton Bern CHF 68'000 bis 80'000 pro Jahr — etwas tiefer als ihre EFZ-Kollegen mit 4-jähriger Lehre, dafür mit kurzem Aufstiegsweg. Die verkürzte Zusatzlehre zum Sanitärinstallateur EFZ dauert in der Regel zwei Jahre und hebt den Lohn auf CHF 70'000 bis 90'000. Wer Vorarbeiter wird, rechnet mit zusätzlich 6 bis 10 Prozent. Spezialisierungen wie Spengler-Sanitär (Dachrinnen, Wasserableitung), Wärmepumpen-Anbindung oder Bad-Komplettmontage bringen attraktive Zulagen. Im Kanton Bern zahlen Generalunternehmer und Industriebetriebe oft etwas über dem GAV-Mindestlohn der suissetec. Die vollständige Lohnübersicht steht auf unserer Startseite.",
    employers:
      "Im Kanton Bern besetzen vor allem mittelgrosse Sanitär-Installationsbetriebe mit 15 bis 80 Mitarbeitenden Montage-Stellen. Sie bedienen Wohnüberbauungen, Gewerbe- und Bürobauten in der ganzen Region. Daneben suchen Generalunternehmer Gebäudetechnik Montage-Equipen für Grossbaustellen in Bern-West, Köniz und Ostermundigen. Service- und Notdienst-Anbieter aus dem Mittelland sowie Tourismus- und Hotelbetriebe im Berner Oberland besetzen ebenfalls regelmässig offene Stellen für saisonale Spitzen. Industrie-Wartung an Bundes- und Spitalliegenschaften rundet das Angebot ab. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Halte deinen Lebenslauf knapp und konkret: welche Lehrbetriebe, welche Anlagentypen, wie viele Wohnungen pro Etappe. Im Kanton Bern erwarten Arbeitgeber Pendelbereitschaft via S-Bahn — gib deinen ÖV-Knotenpunkt an statt nur den Wohnort. Berner Mundartverständnis hilft auf Baustellen im Mittelland und Oberland deutlich. EFZ-Beleg oder Lehrzeugnis als PDF-Anhang beschleunigt die Vorauswahl. Im Telefongespräch werden Pikettbereitschaft, Fahrausweis Kategorie B und körperliche Belastbarkeit abgefragt — bereite ehrliche Antworten vor. Erfahrung mit Wärmepumpen-Speichern, Solarthermie oder digitalen Wasserzählern im Kurz-CV hervorzuheben, lohnt sich in Bern besonders bei Sanierungsaufträgen.",
  },

  "servicetechniker-sanitaer::ag": {
    whatDoes:
      "Ein Servicetechniker Sanitär im Kanton Aargau fährt täglich verschiedene Kundenstandorte an, behebt Störungen an Wasser-, Abwasser- und Heizungsanlagen, wartet bestehende Sanitärobjekte und berät Eigentümerinnen und Hauswarte zu Erweiterungen. Das Tätigkeitsgebiet reicht oft vom unteren Aaretal über das Reusstal bis ins Freiamt — Pendel- und Fahrzeiten gehören zum Berufsbild. Als Spezialist für Wartung, Notdienst und Kundendiagnostik arbeitet er meist eigenständig mit einem voll ausgerüsteten Servicefahrzeug. Wärmepumpen-Anbindung, digitale Wasserzähler mit Fernablesung, Solarthermie-Speicher und Bad-Reparaturen prägen das aktuelle Auftragsportfolio. Wer kommunikativ ist und gut diagnostiziert, hat im Aargau langfristig sichere Aufträge.",
    salary:
      "Servicetechniker Sanitär verdienen im Kanton Aargau CHF 72'000 bis 88'000 pro Jahr, je nach Pikettanteil und Spezialisierung. Wer aktiv im 24/7-Pikettdienst steht, rechnet mit 5 bis 10 Prozent Zuschlag plus Inkonvenienzzulagen. Mit Spezialisierung auf Wärmepumpen, Smart-Water-Systeme oder Solarthermie sind CHF 88'000 bis 100'000 realistisch. Der Aufstieg zum dipl. Sanitärtechniker HF und weiter zum Service- oder Kundendienstleiter erweitert die Verantwortung für Disposition, Schulungen und Garantiefälle und hebt das Salär auf CHF 100'000 bis 115'000. Berufsbegleitende Weiterbildungen über die suissetec-Bildungszentren werden von vielen Betrieben mitfinanziert. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton Aargau besetzen mittelgrosse Sanitär-Installationsbetriebe und KMU der Gebäudetechnik den Grossteil der Service-Stellen. Daneben suchen Service- und Notdienst-Anbieter mit regionaler Pikettorganisation interne Servicetechniker für ihre Kundenliegenschaften. Generalunternehmer Gebäudetechnik betreiben in der Region Aarau, Baden und Wettingen eigene Serviceabteilungen für Wartungsverträge. Industrie-Wartungsdienstleister an den Pharma- und Energie-Standorten entlang der Aare brauchen Techniker für Prozesswasser, Druckluft und Reinraum-Sanitärtechnik. Anbieter von Wärmepumpen, Solarthermie und Bad-Komfortprodukten betreiben eigene Serviceorganisationen. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im Erstgespräch kennen.",
    applicationTips:
      "Servicetechniker werden für ihre Selbstständigkeit eingestellt — beton im Lebenslauf konkrete Diagnoseerfahrung, geschätzte Reparaturzeiten und Kundenzufriedenheits-Kennzahlen. Im Kanton Aargau werden weite Anfahrtswege erwartet: Wohnort und Pendelbereitschaft prominent angeben. Fahrausweis Kategorie B ist Pflicht, Kategorie BE oder C1 ein Plus für grössere Servicefahrzeuge. Sehr gute Deutschkenntnisse sind Voraussetzung. Bereite dich auf Fragen zu typischen Störbildern (verkalkte Mischer, undichte Anschlüsse, defekte Umwälzpumpen), Zeitmanagement bei mehreren parallelen Aufträgen und Pikettbereitschaft inklusive Wochenende vor. Belege für absolvierte Hersteller-Schulungen — etwa zu Wärmepumpen, Solarthermie oder Smart-Water — sowie ein Foto der EFZ-Urkunde erhöhen die Trefferquote im Vorauswahl-Schritt deutlich.",
  },

  "spengler-efz::zg": {
    whatDoes:
      "Ein Spengler EFZ im Kanton Zug arbeitet mit Blech an Bedachungen, Fassaden und Entwässerungssystemen — der klassische Spengler-Sanitär-Bereich. Der Alltag teilt sich auf zwischen Werkstatt (Zuschnitt, Kanten, Falzen von Kupfer-, Zink- und Edelstahlblech) und Baustelle (Montage von Dachrinnen, Fallrohren, Kaminanschlüssen, Ortsblechen). Im Kanton Zug prägen hochwertige Wohnüberbauungen rund um den Zugersee, Hightech-Bürobauten in Baar und Rotkreuz sowie Sanierungen historischer Bausubstanz das Auftragsportfolio. Wasserableitung von Flachdächern und Anschluss an wassersparende Sanitäranlagen sind Standard. Wer schwindelfrei, präzise und wettertauglich arbeitet, hat in Zug überdurchschnittliche Auftragslage und kurze Anfahrtswege.",
    salary:
      "Spengler EFZ verdienen im Kanton Zug CHF 70'000 bis 88'000 pro Jahr — am oberen Ende des Schweizer Spenglerlohns dank der hohen Bautätigkeit und Hightech-Auftraggeber. Die Spezialisierung auf Bauspenglerei (Fassaden) oder auf Sanitär-Spenglerei (Wasserableitung, komplexe Anschlüsse) bringt Zulagen von 5 bis 10 Prozent. Der Aufstieg zum Vorarbeiter, Polier oder zur eidg. Berufsprüfung als Spenglerpolier öffnet das Band CHF 90'000 bis 110'000. Mit dem eidg. dipl. Spenglermeister sind im Kanton Zug CHF 110'000 bis 130'000 realistisch, vor allem mit Personalverantwortung im KMU. Pikett ist im Spenglerwesen selten, dafür Wettereinsatz häufig. Die vollständige Lohnübersicht steht auf unserer Startseite.",
    employers:
      "Im Kanton Zug besetzen Sanitär-Installationsbetriebe mit eigener Spenglerabteilung und reine Spenglereien mit 8 bis 40 Mitarbeitenden den Grossteil der Stellen. Daneben suchen Generalunternehmer Gebäudetechnik Spengler-Equipen für Grossbaustellen in Baar, Rotkreuz und Cham. Bedachungsfirmen mit kombiniertem Dachdecker- und Spenglerangebot bedienen den hochpreisigen Wohnungsbau am Zugersee. Service- und Notdienst-Anbieter rufen Spengler bei Sturm- und Hagelschäden für Reparaturen an Dachrinnen und Fallrohren. Industrie-Wartungsdienstleister an den Hightech-Standorten brauchen Spengler für Lüftungskanäle und industrielle Wasserableitung. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, den Arbeitgeber lernst du im Erstgespräch kennen.",
    applicationTips:
      "Liste im Lebenslauf konkrete Materialerfahrungen auf: Kupfer, Titanzink, Edelstahl, vorbeschichtetes Aluminium — Personalverantwortliche im Kanton Zug filtern genau danach. Schwindelfreiheit, Höhentauglichkeit und gültiger SUVA-Schulungsnachweis für Arbeit auf Dächern werden vorausgesetzt. Fahrausweis Kategorie B ist Pflicht, körperliche Belastbarkeit für Arbeit bei Wind und Wetter Standard. EFZ-Beleg als PDF-Anhang beschleunigt die Vorauswahl. Bringe ein bis zwei Fotos eigener Arbeiten mit — etwa eine sauber gefalzte Kehle oder eine komplexe Kaminverwahrung — das überzeugt Polier und Inhaber im Erstgespräch sofort. Erfahrung mit Solar-Indachsystemen oder Wasserableitung an Flachdächern ist im Kanton Zug ein klares Plus.",
  },

  "projektleiter-sanitaer::sg": {
    whatDoes:
      "Ein Projektleiter Sanitär im Kanton St. Gallen leitet Sanitärprojekte von der Offerte über die Ausführungsplanung bis zur Übergabe an die Bauherrschaft. Der Alltag teilt sich auf zwischen Bürozeit (Kalkulation, Materialdisposition, Koordination mit Architekten und HLK-Planern), Baustellenbesuchen in der Ostschweiz und Abnahmegesprächen mit Eigentümern. In St. Gallen prägen Wohnungsbau im Rheintal, Industrie- und Logistikprojekte rund um Wil und Sanierungen in der Altstadt das Auftragsportfolio. Wassersparende Komplettsanierungen, Wärmepumpen-Anbindung an bestehende Speicher und Smart-Water-Systeme mit digitaler Fernablesung gewinnen an Bedeutung. Wer Equipen führen, Termine halten und Bauherren überzeugend beraten kann, hat in der Ostschweiz langfristig spannende Projekte.",
    salary:
      "Projektleiter Sanitär verdienen im Kanton St. Gallen CHF 85'000 bis 108'000 pro Jahr, je nach Projektgrösse und Personalverantwortung. Die Berufsprüfung zum dipl. Sanitärtechniker HF (3 bis 4 Jahre berufsbegleitend) ist faktischer Standard, der eidg. dipl. Sanitärmeister hebt das Band auf CHF 105'000 bis 125'000. Verantwortung für Mehrjahres-Rahmenverträge mit öffentlichen Auftraggebern oder Industriebetrieben bringt zusätzliche 5 bis 10 Prozent. Erfolgsbeteiligungen am Deckungsbeitrag sind in Ostschweizer KMU verbreitet. Berufsbegleitende Weiterbildungen über die suissetec werden von den meisten Arbeitgebern mitfinanziert. Pikett ist auf Projektleiter-Stufe selten, dafür Wochenend-Erreichbarkeit bei kritischen Phasen. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton St. Gallen besetzen vor allem Sanitär-Installationsbetriebe mit 30 bis 150 Mitarbeitenden Stellen für Projektleiter Sanitär. Daneben suchen Generalunternehmer Gebäudetechnik Projektleiter für Grossbaustellen in St. Gallen, Wil und im Rheintal. Service- und Notdienst-Anbieter mit eigener Projektsparte rekrutieren für Sanierungen und Komplettumbauten. Industrie-Wartungsdienstleister an den Maschinenbau-, Stickerei- und Lebensmittelstandorten der Ostschweiz brauchen Projektleiter für Prozesswasser, Druckluft und Spezialinstallationen. Öffentliche Auftraggeber wie Kantonsverwaltung, Spitäler und Bildungsinstitutionen vergeben regelmässig Rahmenverträge. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im Erstgespräch kennen.",
    applicationTips:
      "Hänge eine kompakte Auswahl geleiteter Projekte an — Bauherrschaft anonymisiert, dafür mit Bauvolumen, Nutzungsart und deinem konkreten Verantwortungsbereich (Kalkulationssumme, Anzahl Mitarbeitende, Termin- und Kostentreue). Im Kanton St. Gallen prüfen viele Büros Bewerbungsdossiers explizit auf SIA-Norm-Kenntnisse, Erfahrung mit Wärmepumpen-Anbindung und Solarthermie sowie auf souveränen Umgang mit Kalkulations- und Ausschreibungssoftware. Sehr gute Deutschkenntnisse und Verhandlungssicherheit sind Voraussetzung — Ostschweizer Mundartverständnis ein klares Plus. Fahrausweis Kategorie B prominent angeben, Reisebereitschaft ins Rheintal und ins Toggenburg vermerken. Im Vorstellungsgespräch werden Konfliktlösung mit anderen Gewerken, Termindisziplin und Personalführung vertieft abgefragt — bereite konkrete Situationsbeispiele vor.",
  },
};

export function getEditorialContent(
  roleSlug: string,
  cantonSlug: string
): EditorialContent | null {
  return ENTRIES[`${roleSlug}::${cantonSlug}`] ?? null;
}

export const EDITORIAL_BYLINE = {
  name: "Redaktion sanitaerjobs.ch",
  href: "/team",
  /** ISO date — formatted at render time */
  publishedAt: "2026-05-02",
} as const;
