import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sanitaerjob.ch";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/jobs/", "/sanitaerjobs/"],
        disallow: [
          "/api/",           // API routes — not for indexing
          "/*?*sort=",       // Filter/sort parameter URLs — duplicate content
          "/*?*type=",
          "/*?*workload=",
          "/*?*remote=",
          "/*?*postedWithinDays=",
          "/*?*offset=",     // Pagination parameter URLs
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
