import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Briefcase, CalendarDays, Clock, MapPin, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { findLandingPageBySlug, getLandingPath, TOP_LANDING_PAGES } from "@/lib/landing-pages";
import { searchJobListings } from "@/lib/job-catalog";
import type { JobListing } from "@/lib/job-types";
import { estimateSalary, formatSalaryRange } from "@/lib/salary-estimates";

interface LandingPageProps {
  params: Promise<{ role: string; canton: string }>;
}

function buildJobHref(job: JobListing, role: string, canton: string): string {
  if (job.source !== "generated") {
    return `/jobs/${job.id}`;
  }

  const query = job.searchContext?.query ?? role;
  const location = job.searchContext?.location ?? canton;
  const params = new URLSearchParams({ q: query, loc: location });
  return `/jobs/${job.id}?${params.toString()}`;
}

async function resolveLandingConfig(params: LandingPageProps["params"]) {
  const { role, canton } = await params;
  return findLandingPageBySlug(role, canton);
}

export async function generateStaticParams() {
  return TOP_LANDING_PAGES.map((item) => {
    const path = getLandingPath(item).split("/");
    return {
      role: path[2],
      canton: path[3],
    };
  });
}

export async function generateMetadata({ params }: LandingPageProps): Promise<Metadata> {
  const config = await resolveLandingConfig(params);

  if (!config) {
    return {
      title: "Elektrojobs | elektrojob.ch",
      description: "Aktuelle Elektrojobs in der Schweiz.",
    };
  }

  return {
    title: `${config.title} | elektrojob.ch`,
    description: config.description,
    alternates: {
      canonical: getLandingPath(config),
    },
    openGraph: {
      title: `${config.title} | elektrojob.ch`,
      description: config.description,
      url: getLandingPath(config),
      type: "website",
    },
  };
}

export default async function LandingRolePage({ params }: LandingPageProps) {
  const config = await resolveLandingConfig(params);

  if (!config) {
    notFound();
  }

  const result = await searchJobListings({
    q: config.role,
    loc: config.canton,
    limit: 24,
    offset: 0,
    sort: "newest",
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-5xl">
        <Link href="/" className="text-sm text-slate-500 hover:text-primary transition-colors">
          Zurück zur Startseite
        </Link>

        <header className="mt-3 mb-8">
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">{config.title}</h1>
          <p className="text-slate-600 mt-2">{config.description}</p>
          <Button asChild className="mt-4">
            <Link href={`/?q=${encodeURIComponent(config.role)}&loc=${encodeURIComponent(config.canton)}`}>
              Alle passenden Stellen suchen
            </Link>
          </Button>
        </header>

        <section className="space-y-3 sm:space-y-4">
          {result.jobs.map((job) => (
            <Link key={`${job.source}-${job.id}`} href={buildJobHref(job, config.role, config.canton)} className="block group">
              <Card className="job-card hover:border-primary/50">
                <CardContent className="p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary line-clamp-1">
                      {job.title}
                    </h2>
                    <Badge
                      variant="outline"
                      className={job.source === "scraped" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-slate-50 text-slate-600"}
                    >
                      {job.source === "scraped" ? "Live" : "Demo"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium text-slate-700 mb-2.5">
                    <Briefcase className="h-4 w-4 text-primary" />
                    {job.company}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-100 rounded-lg border border-slate-200 overflow-hidden">
                    <div className="bg-white px-2.5 py-2 flex flex-col gap-0.5">
                      <span className="flex items-center gap-1 text-sm font-semibold text-slate-900 truncate">
                        <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                        {job.location}
                      </span>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wide">Ort</span>
                    </div>
                    <div className="bg-white px-2.5 py-2 flex flex-col gap-0.5">
                      <span className="flex items-center gap-1 text-sm font-semibold text-slate-900 truncate">
                        <Wallet className="h-3.5 w-3.5 text-primary shrink-0" />
                        {job.salary || (() => {
                          const est = estimateSalary(job.title);
                          return est ? `~${formatSalaryRange(est)}` : "–";
                        })()}
                      </span>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wide">Lohn, CHF/Jahr</span>
                    </div>
                    <div className="bg-white px-2.5 py-2 flex flex-col gap-0.5">
                      <span className="flex items-center gap-1 text-sm font-semibold text-slate-900 truncate">
                        <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
                        {job.workload}
                      </span>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wide">Pensum</span>
                    </div>
                    <div className="bg-white px-2.5 py-2 flex flex-col gap-0.5">
                      <span className="flex items-center gap-1 text-sm font-semibold text-slate-900 truncate">
                        <CalendarDays className="h-3.5 w-3.5 text-primary shrink-0" />
                        {job.type}
                      </span>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wide">Anstellungsart</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
