import { Oswald, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.cookcoatingsinc.com"),
  title: "Commercial Roof Coatings & Maintenance Plans | Cook Coatings Inc (CCI), Since 1983",
  description:
    "Cook Coatings Inc (CCI) installs commercial spray foam roofing, roof restoration, and roof maintenance plans nationwide since 1983. Licensed in CA, AZ, and NV. Get a free estimate.",
  alternates: {
    canonical: "https://www.cookcoatingsinc.com/",
  },
  openGraph: {
    type: "website",
    siteName: "Cook Coatings Inc",
    title: "Commercial Roof Coatings & Maintenance Plans | Cook Coatings Inc",
    description:
      "Nationwide commercial spray foam roofing, restoration, and maintenance plans since 1983. Licensed in CA, AZ, and NV.",
    url: "https://www.cookcoatingsinc.com/",
    locale: "en_US",
    images: ["/images/hero-roof.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Roof Coatings & Maintenance Plans | Cook Coatings Inc",
    description:
      "Nationwide commercial spray foam roofing, restoration, and maintenance plans since 1983. Licensed in CA, AZ, and NV.",
  },
};

const roofingContractorSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Cook Coatings Inc",
  alternateName: "CCI",
  url: "https://www.cookcoatingsinc.com/",
  telephone: "+1-951-296-2664",
  faxNumber: "+1-951-848-9269",
  foundingDate: "1983",
  founder: { "@type": "Person", name: "Cary Cook" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Temecula",
    addressRegion: "CA",
    postalCode: "92590",
    addressCountry: "US",
  },
  areaServed: "United States",
  description:
    "Commercial spray polyurethane foam roofing, roof restoration, and roof maintenance plans, serving commercial property owners nationwide since 1983.",
  hasCredential: [
    "California Contractor License CA 438394",
    "Arizona Contractor License AZ ROC280037",
    "Nevada Contractor License NV 0072245",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "New Roof System Applications",
        description:
          "High-performance spray polyurethane foam roof coating systems designed to extend roof lifespan and prevent costly damage.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Roof Restoration Systems",
        description: "Roof restoration with Poly-SIL membrane as an alternative to full roof replacement.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Roof Maintenance Plans",
        description:
          "Scheduled commercial roof maintenance plans that catch small issues early, extend roof life, and prevent costly emergency repairs.",
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is spray polyurethane foam roofing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spray polyurethane foam (SPF) roofing is a seamless, fully-adhered roof coating system that can often be applied directly over an existing commercial roof. It insulates, waterproofs, and reduces building movement without the cost or landfill waste of a full tear-off.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have to tear off my existing roof first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases, no. Spray foam roofing systems can typically be applied over an existing roof, which avoids the cost, downtime, and landfill waste of a full tear-off.",
      },
    },
    {
      "@type": "Question",
      name: "How often should a commercial roof be maintained?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most commercial roofs benefit from at least two scheduled inspections per year, plus an inspection after major storms. A roof maintenance plan catches small issues, like ponding water or minor punctures, before they turn into costly leaks or premature roof replacement.",
      },
    },
    {
      "@type": "Question",
      name: "What does a Cook Coatings roof maintenance plan include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our roof maintenance plans include scheduled inspections, minor repairs, ponding water and debris checks, and a priority response if an issue comes up between visits, all aimed at extending your roof's service life and avoiding surprise capital expenses.",
      },
    },
    {
      "@type": "Question",
      name: "What areas does Cook Coatings Inc service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cook Coatings Inc (CCI) is licensed in California, Arizona, and Nevada, and has completed commercial roofing projects nationwide.",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(roofingContractorSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
