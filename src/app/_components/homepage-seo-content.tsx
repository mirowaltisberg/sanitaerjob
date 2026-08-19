import Link from "next/link";
import { TOP_LANDING_PAGES, getLandingPath } from "@/lib/landing-pages";
import { JsonLd } from "@/components/json-ld";

// SEO-DECISION: Server-rendered content for homepage crawlability.
// This content is always visible to search engines even though the
// main job search is client-rendered.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sanitaerjobs.ch";

// FAQ answers target the AI-citation optimum band of 134-167 words per answer.
// Shorter answers get truncated by LLMs into low-context excerpts; longer ones
// get summarized away. The 134-167 range survives both ends intact.
const HOMEPAGE_FAQS = [
  {
    question: "Welche Sanitärjobs gibt es auf sanitaerjobs.ch?",
    answer:
      "Auf sanitaerjobs.ch findest du alle relevanten Stellenprofile der Schweizer Sanitär-, Heizungs- und Gebäudetechnikbranche. Dazu gehören die EFZ-Lehrabschluss-Berufe Sanitärinstallateur, Heizungsinstallateur, Spengler und Lüftungsanlagenbauer, dazu ausführende Profile wie Sanitärmonteur, Rohrleitungsmonteur und Haustechnik-Monteur. Auf der Service-Seite listen wir Servicetechniker Sanitär für Wartung, Notdienst und Wärmepumpen-Anbindung. Für Planung und Projektleitung findest du Sanitärplaner, Gebäudetechnikplaner, Projektleiter Sanitär und Bauleiter HLKS. Spezialisierte Profile wie Spengler-Sanitär (Dachrinnen, Wasserableitung), Bad- und Küchenmonteure sowie Smart-Water-Spezialisten mit Erfahrung in digitalen Wasserzählern und Fernablesung sind ebenfalls regelmässig vertreten. Auf der Führungsebene findest du Niederlassungsleiter, Sanitär-Fachvorgesetzte und Geschäftsführende von Gebäudetechnik-KMU. Lehrstellen, Trainee-Programme und Wiedereinsteigerangebote sind separat ausgewiesen, damit Berufsanfängerinnen, Quereinsteiger und Wiedereinsteigende die für sie passenden Inserate schnell finden. Über die Kartenansicht lokalisierst du Stellen zusätzlich nach Postleitzahl und Pendelradius — besonders nützlich in ländlichen Regionen mit wechselnder Baustellenlogik. Die Stellen werden täglich aktualisiert und verteilen sich auf alle 26 Schweizer Kantone, mit besonderer Dichte in Zürich, Bern, Aargau, Basel-Stadt und der Ostschweiz.",
  },
  {
    question: "Was verdient ein Sanitärinstallateur in der Schweiz?",
    answer:
      "Ein Sanitärinstallateur EFZ verdient in der Schweiz im Durchschnitt CHF 70'000 bis 90'000 pro Jahr. Das Gehalt variiert deutlich nach Kanton, Berufserfahrung, Arbeitgebergrösse und Spezialisierung. Im Kanton Zürich, in Zug und in Basel-Stadt liegen die Löhne tendenziell 5 bis 10 Prozent über dem Schweizer Mittel; in ländlicheren Kantonen wie Freiburg, Solothurn oder Graubünden 5 bis 8 Prozent darunter. Berufsanfänger nach EFZ-Abschluss starten meist im Bereich CHF 62'000 bis 70'000, mit drei bis fünf Jahren Erfahrung verschiebt sich der Marktwert auf CHF 78'000 bis 88'000. Spezialisierungen auf Wärmepumpen-Anbindung, Solarthermie-Speicher oder Smart-Water-Systeme bringen zusätzliche 5 bis 12 Prozent. Vorarbeiter, Servicetechniker mit Pikett und der dipl. Sanitärtechniker HF heben das Salärband weiter. Im Vergleich zum Nachbarland Deutschland liegen die Schweizer Bruttolöhne durchschnittlich 60 bis 80 Prozent höher; allerdings sind Lebenshaltungskosten und Krankenkassenprämien ebenfalls deutlich höher. Der 13. Monatslohn ist in der Sanitär- und Gebäudetechnikbranche Standard. Die vollständige Lohnübersicht für alle Sanitärberufe findest du auf dieser Startseite.",
  },
  {
    question: "Wie finde ich einen Job als Sanitärinstallateur in der Schweiz?",
    answer:
      "Auf sanitaerjobs.ch suchst du gezielt mit drei Filtern nach passenden Stellen: Beruf (12 EFZ- und Spezialisten-Profile der Sanitär- und Gebäudetechnikbranche), Standort (alle 26 Schweizer Kantone plus Ortssuche mit Umkreis-Radius in Kilometern) und Pensum (Vollzeit, 80–100%, 60–80%, Teilzeit). Du kannst zusätzlich nach Anstellungsart (Festanstellung, Temporär, Praktikum, Lehre) filtern und Stellen mit konkretem Lohnband gezielt aufrufen. Der Bewerbungsprozess läuft direkt über die Plattform: Lebenslauf als PDF hochladen, Anschreiben in das Formular tippen oder ebenfalls als PDF beifügen, Sprache und Verfügbarkeit angeben, abschicken. Wir leiten dein Dossier anonymisiert an den Arbeitgeber weiter. Du kannst Suchprofile speichern und erhältst dann eine Benachrichtigung, sobald neue passende Stellen aufgeschaltet werden. Für regional konzentrierte Suchen empfehlen wir die Karte mit Umkreis-Filter — so findest du Stellen innerhalb deines bevorzugten Pendelradius. Berufsmessen wie die Hausbau- und Energie-Messe oder regionale suissetec-Anlässe bieten zusätzliche Direktkontakte zu Arbeitgebern; viele Betriebe haben offene Stellen, die noch nicht öffentlich ausgeschrieben sind.",
  },
  {
    question: "Welche Kantone haben die meisten Sanitärjobs?",
    answer:
      "Die mit Abstand meisten offenen Stellen für Sanitär-Fachkräfte gibt es in den Kantonen Zürich, Bern, Aargau, Waadt und Basel-Stadt. Diese fünf Kantone vereinen rund 60 Prozent aller publizierten Stellenausschreibungen der Sanitär- und Gebäudetechnikbranche in der Schweiz. Im Mittelfeld folgen St. Gallen, Luzern, Genf, Thurgau und Solothurn. Ländlichere Kantone wie Uri, Glarus, Appenzell Innerrhoden oder Jura haben deutlich weniger offene Stellen, dafür weniger Konkurrenz unter Bewerbern. Die regionale Verteilung folgt Wirtschaftswachstum und Bautätigkeit: Wo Wohnungsbau, Sanierungsdichte und Gewerbeprojekte zunehmen, steigt auch die Nachfrage nach Sanitärinstallateuren, Servicetechnikern, Spenglern und Planern. Für Pendlerregionen lohnt sich ein Blick auf die Nachbarkantone — Aargauer Betriebe rekrutieren häufig in Solothurn und Luzern, Basler in Baselland und Solothurn, Zürcher in Schaffhausen, Thurgau und Schwyz. Eine zweisprachige Bewerbung (Deutsch und Französisch) öffnet zusätzlich den Markt im Kanton Wallis, in der Region Biel/Bienne und in Teilen von Fribourg. Die täglich aktualisierten Stellenzahlen pro Kanton siehst du in unserem Filter.",
  },
  {
    question:
      "Was ist der Unterschied zwischen Sanitärinstallateur und Heizungsinstallateur?",
    answer:
      "Der Unterschied liegt in Gewerk und Spezialisierung. Der Sanitärinstallateur EFZ absolviert eine 4-jährige Lehre und plant, installiert und wartet Wasser- und Abwasseranlagen, Bad- und Küchenmontagen, Trinkwasser-Verteilungen und Sanitärobjekte. Spengler-Sanitär (Dachrinnen, Wasserableitung) gehört zum erweiterten Tätigkeitsfeld. Der Heizungsinstallateur EFZ macht ebenfalls eine 4-jährige Lehre und ist auf Heizungssysteme spezialisiert: Wärmepumpen, Pellet-, Gas- und Ölkessel, Warmwasserspeicher, Solarthermie und Heizungsverteiler. Beide Berufe arbeiten eng zusammen und treffen sich bei der Anbindung von Warmwasserspeichern, der Steuerungstechnik und der Energieoptimierung. Der Lohnabstand ist gering — beide bewegen sich in der Schweiz im Band CHF 70'000 bis 90'000. Wechsel zwischen den Gewerken ist über Zusatzkurse der suissetec gut möglich, viele Betriebe finanzieren das mit, weil Allrounder im Service- und Sanierungsgeschäft besonders gefragt sind. Aktuell entstehen hybride Profile (Haustechnik-Monteur, Servicetechniker Sanitär), die beide Welten abdecken — eine Berufsberatung in deinem Wohnkanton hilft bei der konkreten Wahl.",
  },
  {
    question: "Gibt es auf sanitaerjobs.ch auch Teilzeitstellen?",
    answer:
      "Ja, ein wachsender Teil der Stellen auf sanitaerjobs.ch ist Teilzeitarbeit oder mit reduziertem Pensum verfügbar. Im Filter wählst du zwischen Vollzeit (90–100%), 80–100%, 60–80% oder Teilzeit unter 60%. Teilzeitmodelle sind besonders bei Servicetechnikern Sanitär, Sanitärplanern und in der Gebäudetechnik-Planung verbreitet — Elternzeit-Modelle, schrittweiser Wiedereinstieg nach Pause und Vorruhestand mit Reduzierung auf 60 oder 80 Prozent sind in der Schweizer Sanitär- und Gebäudetechnikbranche zunehmend Standard. Auf der Baustellenseite (Sanitärinstallateur, Sanitärmonteur, Spengler) bleibt Vollzeit dominant, weil Equipen meist vollständig disponiert werden. In den Bereichen Planung, Projektleitung, Kundendienst und Smart-Water-Beratung ist Teilzeit hingegen gut etabliert. Job-Sharing-Modelle (zwei Personen teilen sich eine Stelle) werden ebenfalls vereinzelt angeboten. Wer Elternzeit-Wiedereinstieg sucht, profitiert von einer wachsenden Akzeptanz für gestaffelte Pensumserhöhungen — also Start mit 60 Prozent und schrittweise Anhebung über 12 bis 24 Monate. Frage in Erstgesprächen explizit nach diesem Modell, viele Betriebe bieten es ohne aktive Werbung an. Wir kennzeichnen jedes Inserat klar mit dem akzeptierten Pensumband.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const SALARY_TABLE = [
  { role: "Bauleiter HLKS", range: "CHF 90'000 – 120'000" },
  { role: "Projektleiter Sanitär", range: "CHF 85'000 – 110'000" },
  { role: "Sanitärplaner", range: "CHF 80'000 – 100'000" },
  { role: "Gebäudetechnikplaner", range: "CHF 78'000 – 98'000" },
  { role: "Servicetechniker Sanitär", range: "CHF 72'000 – 88'000" },
  { role: "Sanitärinstallateur EFZ", range: "CHF 70'000 – 90'000" },
  { role: "Heizungsinstallateur EFZ", range: "CHF 70'000 – 90'000" },
  { role: "Lüftungsanlagenbauer EFZ", range: "CHF 68'000 – 85'000" },
  { role: "Rohrleitungsmonteur", range: "CHF 68'000 – 85'000" },
  { role: "Haustechnik-Monteur", range: "CHF 68'000 – 85'000" },
  { role: "Sanitärmonteur", range: "CHF 68'000 – 82'000" },
  { role: "Spengler EFZ", range: "CHF 65'000 – 82'000" },
];

/**
 * Server-rendered SEO content for the homepage.
 * Crawlable by search engines even when JS is disabled.
 * Includes: intro text, FAQ section, salary table, landing page links.
 */
export function HomepageSeoContent() {
  return (
    <section className="bg-white border-t" aria-label="Informationen für Sanitär-Fachkräfte">
      <JsonLd data={faqPageSchema} />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-5xl">
        {/* SEO intro paragraph — AI-citeable, entity-rich */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Sanitärjobs in der Schweiz finden
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            Auf sanitaerjobs.ch finden Sanitär-Fachkräfte aktuelle offene Stellen in der ganzen Schweiz
            — von Sanitärinstallateur EFZ über Heizungsinstallateur und Projektleiter Sanitär bis hin zu
            Spengler, Sanitärplaner und Lüftungsanlagenbauer. Ob du deinen nächsten Sanitärjob
            in Zürich, Bern oder Basel suchst — unsere spezialisierte Jobbörse
            richtet sich an alle Berufsleute der Sanitär- und Haustechnikbranche.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Ob du in Zürich, Bern, Basel, Luzern, St. Gallen oder einem anderen Schweizer Kanton
            suchst — mit unserer smarten Filterung nach Beruf, Ort, Umkreis und Pensum findest du
            schnell die passende Stelle. Bewirb dich direkt über die Plattform mit wenigen Klicks.
          </p>

          <p className="text-slate-600 text-base leading-relaxed mt-4">
            Zusätzlich findest du Festanstellungen, Temporärstellen, Teilzeitpensen, Lehrstellen und Stellenangebote mit Lohnband. Besonders gesucht werden Fachkräfte mit EFZ/EBA, Erfahrung im Service, in der Montage oder Projektleitung und regionaler Mobilität. Damit eignet sich die Suche für klassische Sanitär Jobs in der Schweiz ebenso wie für spezialisierte Profile wie Sanitärinstallateur EFZ, Sanitärmonteur, Servicetechniker Sanitär und Projektleiter Sanitär.
          </p>
        </div>

        {/* Salary table — highly citeable by AI. id="loehne" anchor lets editorial */}
        {/* sections on category pages deep-link via /#loehne. */}
        <div id="loehne" className="mb-12 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Lohnübersicht Sanitärberufe Schweiz
          </h2>
          <p className="text-slate-500 text-sm mb-4">
            Durchschnittliche Jahresgehälter für Sanitär-Fachkräfte in der Schweiz (2025/2026, Richtwerte).
            Quellen:{" "}
            <a href="https://www.suissetec.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">suissetec</a>,{" "}
            <a href="https://www.bfs.admin.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">BFS</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-slate-900">Beruf</th>
                  <th className="py-3 text-sm font-semibold text-slate-900">Jahreslohn (CHF)</th>
                </tr>
              </thead>
              <tbody>
                {SALARY_TABLE.map((row) => (
                  <tr key={row.role} className="border-b border-slate-100">
                    <td className="py-2.5 pr-4 text-sm text-slate-700">{row.role}</td>
                    <td className="py-2.5 text-sm font-medium text-slate-900">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <details className="mt-4 group rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
            <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
              Methodologie — wie wir die Lohnbänder berechnen
              <span
                className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                ▾
              </span>
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                <strong>Stand:</strong> 2. Mai 2026.
              </p>
              <p>
                <strong>Quellen:</strong> Wir aggregieren öffentlich publizierte
                Lohndaten der Schweizer Sanitär- und Gebäudetechnikbranche aus
                den Jahres- und Branchenstatistiken von{" "}
                <a
                  href="https://www.suissetec.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  suissetec
                </a>{" "}
                (Schweizerisch-Liechtensteinischer Gebäudetechnikverband) und
                dem{" "}
                <a
                  href="https://www.bfs.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  Bundesamt für Statistik (BFS)
                </a>
                . Ergänzend werten wir die täglich auf sanitaerjobs.ch
                indexierten öffentlichen Stellenausschreibungen aus.
              </p>
              <p>
                <strong>Bandbreite und Mittelwert:</strong> Die Tabelle zeigt
                Richtbänder. Der konkrete Lohn wird im Bewerbungsprozess
                individuell verhandelt und hängt von Erfahrung, Spezialisierung,
                Arbeitgebergrösse, Branche und Region ab. Innerhalb eines Bands
                liegt die Mehrheit (rund zwei Drittel) der ausgewerteten
                Vergleichswerte.
              </p>
              <p>
                <strong>Aktualisierung:</strong> Wir überarbeiten die Lohnbänder
                jährlich beziehungsweise sofort, sobald ein Branchenverband neue
                Empfehlungen veröffentlicht oder sich die Marktlage in einer
                Region merklich verändert. Korrekturhinweise nehmen wir gerne
                über die Kontaktseite entgegen.
              </p>
            </div>
          </details>
        </div>

        {/* FAQ section — conversational query targets */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-4">
            {HOMEPAGE_FAQS.map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-slate-200 bg-slate-50 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
                  {faq.question}
                  <span
                    className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Landing page links — crawlable internal links */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            Alle Sanitär Jobs nach Beruf und Kanton
          </h2>
          <nav aria-label="Beliebte Stellenangebote nach Beruf und Kanton">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {TOP_LANDING_PAGES.map((item) => (
                <Link
                  key={`${item.role}-${item.canton}`}
                  href={getLandingPath(item)}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {item.role} in {item.canton}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
