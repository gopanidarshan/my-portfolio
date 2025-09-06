import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { BottomBar } from "@/components/bottom-bar";
import { PersonJsonLd } from "@/components/json-ld";
import { getContent } from "@/lib/content";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const content = getContent();

export const metadata: Metadata = {
  title: content.site.meta.title,
  description: content.site.meta.description,
  keywords: [
    "Data Engineer",
    "Analytics Engineer", 
    "BigQuery",
    "Data Modeling",
    "Automation",
    "Looker",
    "SQL",
    "ETL",
    "ELT"
  ],
  authors: [{ name: content.site.name }],
  creator: content.site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darshangopani.com",
    title: content.site.meta.title,
    description: content.site.meta.description,
    siteName: content.site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: content.site.meta.title,
    description: content.site.meta.description,
    creator: "@darshangopani",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PersonJsonLd />
      </head>
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-dvh flex flex-col">
            <SiteNav />
            <main className="flex-1 pb-20 lg:pb-0">
              {children}
            </main>
            <SiteFooter />
            <BottomBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
