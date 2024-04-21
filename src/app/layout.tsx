import { TooltipProvider } from "@/components/ui/tooltip";
import { jsonLd } from "@/structured data";
import "@/styles/globals.css";
import { type Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Tedy Gabriel Moisa | Frontend Developer",
  description: "Tedy Gabriel Moisa Portfolio",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "web",
    "developer",
    "programmer",
    "typescript",
    "javascript",
    "java",
    "react",
    "springboot",
    "springsecurity",
    "stack",
    "server",
    "ssr",
    "oauth2",
    "otp",
    "nextjs",
    "vitejs",
    "docker",
    "mysql",
    "shadcnui",
    "zod",
    "zustand",
    "recoil"
  ],
  alternates: {
    canonical: "https://www.tedymoisa.it"
  },
  openGraph: {
    title: "Tedy Gabriel Moisa | Frontend Developer",
    description: "Tedy Gabriel Moisa Portfolio",
    type: "website",
    url: "https://www.tedymoisa.it",
    images: ["/images/profile-pictures/tedy-logo-profile.png"],
    siteName: "Tedy Gabriel Moisa",
    locale: "en_US"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Tedy Gabriel Moisa | Frontend Developer</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
