import Link from "next/link";
import { TOP_LANDING_PAGES, getLandingPath } from "@/lib/landing-pages";
import { JsonLd } from "@/components/json-ld";

const HOMEPAGE_FAQS = [
  {
    question: "Welche Stellen finde ich auf sanitaerjobs.ch?",
    answer:
      "Die Suche bündelt öffentlich zugängliche Stelleninserate mit klarem Bezug zum Sanitärgewerk und laufende Suchprofile für Direktanstellungen. Dazu können Stellen für Sanitärinstallateurinnen und Sanitärinstallateure, Sanitärmonteurinnen und Sanitärmonteure, Servicetechnik Sanitär, Sanitärplanung und Projektleitung Sanitär gehören. sanitaerjobs.ch verspricht keine vollständige Abdeckung des Schweizer Arbeitsmarkts.",
  },
  {
    question: "Was bedeutet eine laufende Suche zur Direktanstellung?",
    answer:
      "Bei einer laufenden Suche wird fortlaufend ein passender Sanitärbetrieb für das bezeichnete Berufsprofil und die Region gesucht. Sie ist keinem erfundenen Arbeitgeber zugeordnet und behauptet keine bestimmte bereits ausgeschriebene Stelle. Kommt eine Anstellung zustande, wird der Arbeitsvertrag direkt mit dem Betrieb geschlossen; sanitaerjobs.ch ist nicht der Arbeitgeber und keine Temporärarbeitgeberin.",
  },
  {
    question: "Wie suche ich nach einem Sanitärjob?",
    answer:
      "Gib eine Berufsbezeichnung oder ein Sanitär-Stichwort und bei Bedarf einen Ort ein. Die Ergebnisliste lässt sich mit den angebotenen Filtern weiter eingrenzen. Massgebend für Aufgaben, Qualifikation, Pensum, Arbeitsort und Lohn sind die Angaben im jeweiligen Inserat. Fehlt eine Angabe, ergänzt sanitaerjobs.ch dafür keine pauschale Schätzung.",
  },
  {
    question: "Wie lange dauert die Lehre als Sanitärinstallateur/in EFZ?",
    answer:
      "Das offizielle Berufsprofil von berufsberatung.ch nennt für die berufliche Grundbildung Sanitärinstallateur/in EFZ eine Dauer von vier Jahren und den Abschluss mit eidgenössischem Fähigkeitszeugnis. Die obligatorische Schule muss abgeschlossen sein. Details zu Ausbildung, Aufgaben und Weiterbildung stehen im verlinkten Berufsprofil und in den Ausbildungsdokumenten von suissetec.",
  },
  {
    question: "Wie kann ich einen Lohn für eine Sanitärstelle vergleichen?",
    answer:
      "Eine einzelne pauschale Zahl bildet Beruf, Region, Erfahrung, Funktion und Betrieb nicht zuverlässig ab. Für eine statistische Orientierung eignet sich Salarium des Bundesamts für Statistik. Ob ein Mindestlohn aus einem Gesamtarbeitsvertrag gilt, muss anhand des konkreten Betriebs, der Tätigkeit und des Arbeitsorts geprüft werden. Die Lohnseite verlinkt die offiziellen Werkzeuge und die aktuelle GAV-Übersicht des SECO.",
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

export function HomepageSeoContent() {
  return (
    <section className="editorial-surface" aria-label="Informationen für Sanitär-Fachkräfte">
      <JsonLd data={faqPageSchema} />

      <div className="container mx-auto px-4 sm:px-6 py-14 sm:py-20 max-w-6xl">
        <div className="editorial-grid mb-16">
        <div className="self-start">
          <p className="eyebrow">Fachlich fokussiert</p>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-5">
            Sanitärjobs in der Schweiz suchen
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            sanitaerjobs.ch bündelt Stelleninserate mit klarem Bezug zum
            Sanitärgewerk und laufende Suchprofile für eine Direktanstellung.
            Bei Inseraten stehen die veröffentlichten Aufgaben und Anforderungen
            auf der Detailseite; Suchprofile führen zur direkten Kontaktaufnahme.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Fehlende Lohn- oder Arbeitgeberangaben werden nicht durch eigene
            Schätzungen oder Offenlegungsversprechen ersetzt.
          </p>
        </div>

        <div className="source-panel p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            Offizielle Quellen
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            Quellen zuletzt geprüft am 19. August 2026. Wir übernehmen keine
            pauschalen Erwachsenen-Lohnbänder aus allgemeinen Branchenseiten.
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.berufsberatung.ch/de/berufe/sanitaerinstallateur-in-efz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                berufsberatung.ch: Sanitärinstallateur/in EFZ
              </a>
            </li>
            <li>
              <a
                href="https://www.salarium.bfs.admin.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                BFS Salarium: statistischer Lohnrechner
              </a>
            </li>
            <li>
              <a
                href="https://www.seco.admin.ch/de/gesamtarbeitsvertraege-bund"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                SECO: allgemeinverbindlich erklärte Gesamtarbeitsverträge
              </a>
            </li>
          </ul>
          <Link
            href="/lohn-sanitaerinstallateur-schweiz"
            className="editorial-link mt-5 inline-block text-sm font-bold text-primary underline"
          >
            Lohnangaben und GAV richtig einordnen
          </Link>
        </div>
        </div>

        <div className="mb-14">
          <p className="eyebrow">Direkte Antworten</p>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-5">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-4">
            {HOMEPAGE_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="faq-item group overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-bold text-foreground hover:bg-accent/35 transition-colors">
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

        <div className="mb-8 border-t border-border pt-10">
          <p className="eyebrow">Nach Gewerk und Region</p>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-3">
            Sanitärstellen nach Beruf und Kanton
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Diese Suchseiten dienen der Navigation und sind bis zum Nachweis
            eigener Qualitäts- und Bestandsdaten nicht für Suchmaschinen indexiert.
          </p>
          <nav aria-label="Stellenangebote nach Beruf und Kanton">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {TOP_LANDING_PAGES.slice(0, 18).map((item) => (
                <Link
                  key={`${item.role}-${item.canton}`}
                  href={getLandingPath(item)}
                  className="link-tile flex items-center px-3 py-2 pr-9 text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
