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
    default: "Brothers Engineers | Industrial Electrical Solutions",
    template: "%s | Brothers Engineers",
  },

  description:
    "Brothers Engineers specializes in LT Panel Manufacturing, PCC, MCC, APFC Panels, PLC Automation, VFD Panels, Electrical Contracting, Installation, Commissioning and Industrial Maintenance across India.",

  keywords: [
    "Brothers Engineers",
    "LT Panel Manufacturer",
    "LT Panel Manufacturing",
    "PCC Panels",
    "MCC Panels",
    "APFC Panels",
    "PLC Automation",
    "VFD Panels",
    "Industrial Electrical Solutions",
    "Electrical Contracting",
    "Industrial Maintenance",
    "Electrical Panel Manufacturer in Noida",
  ],

  authors: [{ name: "Brothers Engineers" }],

  openGraph: {
    title: "Brothers Engineers | Industrial Electrical Solutions",
    description:
      "LT Panel Manufacturing, PCC, MCC, APFC Panels, PLC Automation, VFD Panels and Complete Industrial Electrical Solutions.",
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