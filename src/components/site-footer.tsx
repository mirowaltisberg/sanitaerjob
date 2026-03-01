import Image from "next/image";
import Link from "next/link";
import { TOP_LANDING_PAGES, getLandingPath } from "@/lib/landing-pages";

// SEO-DECISION: Canonical role names for footer navigation (top search terms)
const FOOTER_ROLES = [
  "Elektroinstallateur EFZ",
  "Montage-Elektriker EFZ",
  "Servicetechniker Elektro",
  "Projektleiter Elektro",
  "Automatiker EFZ",
  "Elektroplaner",
  "Elektromonteur",
  "Gebäudetechniker",
  "Photovoltaik-Spezialist",
  "Schaltanlagenbauer",
  "Bauleiter Elektro",
  "Betriebselektriker",
];

// SEO-DECISION: Major Swiss cantons for footer links (highest job demand)
const FOOTER_CANTONS = [
  { label: "Zürich", query: "ZH" },
  { label: "Bern", query: "BE" },
  { label: "Basel", query: "BS" },
  { label: "Aargau", query: "AG" },
  { label: "St. Gallen", query: "SG" },
  { label: "Luzern", query: "LU" },
  { label: "Solothurn", query: "SO" },
  { label: "Zug", query: "ZG" },
  { label: "Thurgau", query: "TG" },
  { label: "Graubünden", query: "GR" },
  { label: "Schaffhausen", query: "SH" },
  { label: "Fribourg", query: "FR" },
];

/**
 * Shared site footer with SEO-optimized navigation links.
 * Server component — renders crawlable links to all major categories.
 */
export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Image
              src="/logo.svg"
              alt="elektrojob.ch — Jobbörse für Elektro-Fachkräfte in der Schweiz"
              width={200}
              height={32}
              className="h-8 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm leading-relaxed">
              Die spezialisierte Jobbörse für Elektro-Fachkräfte in der Schweiz.
              Finde offene Stellen, vergleiche Arbeitgeber und bewirb dich direkt.
            </p>
          </div>

          {/* Job roles navigation */}
          <nav aria-label="Berufe">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Berufe
            </h3>
            <ul className="space-y-1.5">
              {FOOTER_ROLES.map((role) => (
                <li key={role}>
                  <Link
                    href={`/?q=${encodeURIComponent(role)}`}
                    className="text-sm hover:text-white transition-colors duration-150"
                  >
                    {role}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Canton navigation */}
          <nav aria-label="Kantone">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Jobs nach Kanton
            </h3>
            <ul className="space-y-1.5">
              {FOOTER_CANTONS.map((canton) => (
                <li key={canton.query}>
                  <Link
                    href={`/?loc=${encodeURIComponent(canton.label)}`}
                    className="text-sm hover:text-white transition-colors duration-150"
                  >
                    Elektrojobs {canton.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Landing pages + info */}
          <div>
            <nav aria-label="Beliebte Suchseiten">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                Top-Suchseiten
              </h3>
              <ul className="space-y-1.5">
                {TOP_LANDING_PAGES.slice(0, 6).map((page) => (
                  <li key={`${page.role}-${page.canton}`}>
                    <Link
                      href={getLandingPath(page)}
                      className="text-sm hover:text-white transition-colors duration-150"
                    >
                      {page.role} in {page.canton}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-6">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                Für Arbeitgeber
              </h3>
              <ul className="space-y-1.5">
                <li>
                  <Link href="/#" className="text-sm hover:text-white transition-colors duration-150">
                    Stelle ausschreiben
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="text-sm hover:text-white transition-colors duration-150">
                    Preise & Pakete
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            <p>© {new Date().getFullYear()} elektrojob.ch — Alle Rechte vorbehalten.</p>
            <nav aria-label="Branchenverbände" className="flex items-center gap-4">
              <a href="https://www.eit.swiss" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">EIT.swiss</a>
              <a href="https://www.electrosuisse.ch" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Electrosuisse</a>
              <a href="https://www.esti.admin.ch" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ESTI</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
