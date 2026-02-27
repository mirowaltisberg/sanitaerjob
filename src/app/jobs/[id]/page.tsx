import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  MapPin,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { getJobListingById, getSimilarJobListings } from "@/lib/job-catalog";
import type { JobListing } from "@/lib/job-types";
import { JobPrimaryAction, JobShareActions, RecentlyViewedJobs } from "@/components/job-detail-client-tools";
import { TOP_LANDING_PAGES, getLandingPath } from "@/lib/landing-pages";

interface JobDetailsPageProps {
  params: Promise<{ id: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

function readParam(value: string | string[] | undefined): string {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

function getDisplayJobId(job: JobListing): string {
  if (job.source === "generated") {
    return job.id.toUpperCase();
  }
  if (job.source === "scraped") {
    return `LIVE-${job.id}`;
  }
  return `ELK-${job.id.padStart(4, "0")}`;
}

function buildJobHref(job: JobListing, fallbackQuery: string, fallbackLocation: string): string {
  if (job.source !== "generated") {
    return `/jobs/${job.id}`;
  }

  const query = job.searchContext?.query ?? fallbackQuery;
  const location = job.searchContext?.location ?? fallbackLocation;
  const params = new URLSearchParams();

  if (query) {
    params.set("q", query);
  }
  if (location) {
    params.set("loc", location);
  }

  const queryString = params.toString();
  return queryString ? `/jobs/${job.id}?${queryString}` : `/jobs/${job.id}`;
}

async function getJobPageData({ params, searchParams }: JobDetailsPageProps): Promise<{
  job: JobListing | null;
  query: string;
  location: string;
}> {
  const { id } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const query = readParam(resolvedSearchParams.q);
  const location = readParam(resolvedSearchParams.loc);

  const job = await getJobListingById({
    id,
    query,
    location,
  });

  return { job, query, location };
}

export async function generateMetadata(props: JobDetailsPageProps): Promise<Metadata> {
  const { job } = await getJobPageData(props);

  if (!job) {
    return {
      title: "Stelle nicht gefunden | elektrojob.ch",
      description: "Die gewünschte Stelle konnte nicht gefunden werden.",
    };
  }

  const description = job.description.slice(0, 160);

  return {
    title: `${job.title} bei ${job.company} | elektrojob.ch`,
    description,
    alternates: {
      canonical: `/jobs/${job.id}`,
    },
    openGraph: {
      title: `${job.title} bei ${job.company}`,
      description,
      type: "article",
      url: `/jobs/${job.id}`,
    },
  };
}

export default async function JobDetailsPage(props: JobDetailsPageProps) {
  const { job, query, location } = await getJobPageData(props);

  if (!job) {
    notFound();
  }

  const similarJobs = await getSimilarJobListings(job, 4);
  const currentHref = buildJobHref(job, query, location);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="border-b sticky top-0 z-30 header-blur animate-header">
        <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/logo.svg" alt="Elektrojob.ch" width={200} height={32} className="h-7 sm:h-8 w-auto" />
          </Link>
          <nav className="shrink-0">
            <Button variant="ghost" size="sm" asChild className="text-sm px-2 sm:px-4 h-9 sm:h-10 btn-interactive">
              <Link href="/">Zurück</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 sm:px-6 py-5 sm:py-8 max-w-5xl pb-32 lg:pb-8">
        <Link
          href="/"
          className="hidden sm:inline-flex items-center text-sm text-slate-500 hover:text-primary mb-4 sm:mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1 shrink-0" />
          <span className="truncate">Zurück zu den Suchergebnissen</span>
        </Link>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-1 min-w-0 space-y-6 sm:space-y-8">
            <AnimateOnScroll>
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border shadow-sm">
                <div className="flex flex-col gap-4 mb-6">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge
                        variant="outline"
                        className={job.source === "scraped" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-slate-50 text-slate-600"}
                      >
                        <Building2 className="h-3 w-3" />
                        {job.source === "scraped" ? "Live-Stelle" : "Demo-Stelle"}
                      </Badge>
                      {job.salary && (
                        <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">
                          <Wallet className="h-3 w-3" />
                          {job.salary}
                        </Badge>
                      )}
                      {job.isRemote === true && (
                        <Badge variant="outline" className="border-sky-200 bg-sky-50 text-sky-700">
                          Remote
                        </Badge>
                      )}
                    </div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 sm:mb-4 break-words">
                      {job.title}
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-y-2 sm:gap-x-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1 font-medium text-slate-900">
                        <Briefcase className="h-5 w-5 text-primary" />
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-5 w-5 text-slate-400" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-5 w-5 text-slate-400" />
                        {job.type} ({job.workload})
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-5 w-5 text-slate-400" />
                        {new Date(job.datePosted).toLocaleDateString("de-CH")}
                      </span>
                    </div>
                  </div>

                  <JobShareActions job={job} />
                </div>

                <div className="prose prose-slate max-w-none">
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 sm:mb-8">
                    {job.description}
                  </p>

                  {job.responsibilities.length > 0 && (
                    <>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Deine Aufgaben</h3>
                      <ul className="space-y-2.5 sm:space-y-3 mb-8">
                        {job.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                            <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {job.requirements.length > 0 && (
                    <>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Dein Profil</h3>
                      <ul className="space-y-2.5 sm:space-y-3 mb-8">
                        {job.requirements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                            <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {job.benefits.length > 0 && (
                    <>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Was wir bieten</h3>
                      <ul className="space-y-2.5 sm:space-y-3">
                        {job.benefits.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                            <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={80}>
              <div className="bg-white border rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">Ähnliche Jobs</h3>
                <div className="space-y-2">
                  {similarJobs.map((item) => (
                    <Link
                      key={`${item.source}-${item.id}`}
                      href={buildJobHref(item, query, location)}
                      className="block rounded-lg border border-slate-200 px-3 py-2 hover:border-primary/40 hover:bg-primary/5 transition-colors"
                    >
                      <p className="text-sm font-semibold text-slate-900 line-clamp-1">{item.title}</p>
                      <p className="text-xs text-slate-500 line-clamp-1">{item.company} · {item.location}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <RecentlyViewedJobs currentJob={job} currentHref={currentHref} />
            </AnimateOnScroll>

            <AnimateOnScroll delay={120}>
              <div className="bg-white border rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">Beliebte Suchseiten</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={120} className="hidden lg:block lg:w-80 shrink-0">
            <div className="bg-white p-6 rounded-2xl border shadow-sm sticky top-24">
              <div className="mb-6">
                <h3 className="font-bold text-slate-900 mb-2">Interessiert an dieser Stelle?</h3>
                <p className="text-sm text-slate-500">
                  Jetzt in weniger als 2 Minuten bewerben. Kein Konto nötig.
                </p>
              </div>

              <JobPrimaryAction job={job} />

              <div className="mt-6 pt-6 border-t text-sm text-slate-500 space-y-3">
                <div className="flex justify-between">
                  <span>Publiziert</span>
                  <span className="font-medium text-slate-900">
                    {new Date(job.datePosted).toLocaleDateString("de-CH")}
                  </span>
                </div>
                <div className="flex justify-between gap-3">
                  <span>Stellen-ID</span>
                  <span className="font-medium text-slate-900 break-all text-right">{getDisplayJobId(job)}</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </main>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 px-4 pt-3 pb-[max(0.875rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-sm border-t shadow-[0_-4px_12px_-2px_rgb(0,0,0,0.08)] z-20">
        <JobPrimaryAction job={job} />
      </div>
    </div>
  );
}
