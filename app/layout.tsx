import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brothersengineers.in"),

  title: {
    default: "Brothers Engineers | Civil Construction & Engineering Services",
    template: "%s | Brothers Engineers",
  },

  description:
    "Brothers Engineers provides professional civil construction, engineering, infrastructure, renovation, and project management services across India.",

  keywords: [
    "Brothers Engineers",
    "Civil Construction",
    "Engineering Company",
    "Building Construction",
    "Infrastructure",
    "Renovation",
    "Project Management",
  ],

  authors: [{ name: "Brothers Engineers" }],

  openGraph: {
    title: "Brothers Engineers",
    description:
      "Professional Civil Construction & Engineering Services.",
    url: "https://brothersengineers.in",
    siteName: "Brothers Engineers",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
  <body className="min-h-full flex flex-col">
  {children}
  <GoogleAnalytics gaId="G-P8D68209V1" />
</body>
    </html>
  );
}
