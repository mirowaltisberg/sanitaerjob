import { HomepageSearch } from "@/app/_components/homepage-search";
import { HomepageSeoContent } from "@/app/_components/homepage-seo-content";
import { SiteFooter } from "@/components/site-footer";

// SEO-DECISION: This page is a server component wrapper that renders:
// 1. The client-side search interface (interactive, JS-dependent)
// 2. Server-rendered SEO content (crawlable without JS: intro, FAQ, salary table, links)
// 3. Shared footer with navigation links
// This ensures search engines can index rich content even though the job search is CSR.

export default function HomePage() {
  return (
    <>
      <HomepageSearch />
      <HomepageSeoContent />
      <SiteFooter />
    </>
  );
}
