import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://elektrojob.ch"),
  title: "Elektrojob.ch | Elektrojobs in der Schweiz finden",
  description: "Live Elektrojobs in der Schweiz finden, vergleichen und direkt bewerben.",
  openGraph: {
    title: "Elektrojob.ch | Elektrojobs in der Schweiz finden",
    description: "Live Elektrojobs in der Schweiz finden, vergleichen und direkt bewerben.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body lang="de" className={`${plusJakarta.variable} antialiased font-sans bg-slate-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
