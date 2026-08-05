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
  title: "High-Performance Commercial Roofing Systems | Cook Coatings Inc (CCI), Since 1983",
  description:
    "Cook Coatings Inc (CCI) installs seamless, high-performance roofing systems for commercial buildings, roof restoration, and maintenance plans that lower energy costs and extend roof life. Licensed in CA, AZ, and NV, nationwide since 1983.",
  alternates: {
    canonical: "https://www.cookcoatingsinc.com/",
  },
  openGraph: {
    type: "website",
    siteName: "Cook Coatings Inc",
    title: "High-Performance Commercial Roofing Systems | Cook Coatings Inc",
    description:
      "Seamless, high-performance roofing systems that insulate, waterproof, and protect commercial buildings nationwide since 1983. Licensed in CA, AZ, and NV.",
    url: "https://www.cookcoatingsinc.com/",
    locale: "en_US",
    images: ["/images/hero-roof.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Performance Commercial Roofing Systems | Cook Coatings Inc",
    description:
      "Seamless, high-performance roofing systems that insulate, waterproof, and protect commercial buildings nationwide since 1983. Licensed in CA, AZ, and NV.",
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
    streetAddress: "41680 Enterprise Cir S., STE A/B",
    addressLocality: "Temecula",
    addressRegion: "CA",
    postalCode: "92590",
    addressCountry: "US",
  },
  image: "https://www.cookcoatingsinc.com/images/hero-roof.jpg",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "State", name: "California" },
    { "@type": "State", name: "Arizona" },
    { "@type": "State", name: "Nevada" },
  ],
  description:
    "High-performance, seamless roofing systems for commercial buildings, including spray polyurethane foam (SPF) roof systems, roof restoration, and maintenance plans that lower energy costs and extend roof life. Serving commercial property owners nationwide since 1983, with select international projects.",
  knowsAbout: [
    "High-performance roofing systems",
    "Seamless, monolithic roof assemblies",
    "Continuous insulation roofing systems",
    "Spray polyurethane foam (SPF) roofing",
    "Commercial roof restoration",
    "Poly-SIL roof membrane systems",
    "Commercial roof maintenance plans",
    "Roof asset lifecycle management",
    "UL 790 Class A fire-rated roofing",
  ],
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
        serviceType: "High-performance commercial roofing system installation",
        description:
          "A seamless, fully adhered, high-performance roofing system that insulates, waterproofs, and protects commercial buildings while lowering energy costs and preventing costly damage.",
        provider: { "@type": "RoofingContractor", name: "Cook Coatings Inc" },
        areaServed: "United States",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Roof Restoration Systems",
        serviceType: "Commercial roof restoration and renewal",
        description:
          "Renew and protect your existing commercial roof with a seamless Poly-SIL membrane restoration system, an asset-preserving alternative to full roof replacement.",
        provider: { "@type": "RoofingContractor", name: "Cook Coatings Inc" },
        areaServed: "United States",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Roof Maintenance Plans",
        serviceType: "Commercial roof asset management",
        description:
          "Scheduled roof maintenance plans that protect your roofing asset, catch small issues early, and deliver predictable costs instead of costly emergency repairs.",
        provider: { "@type": "RoofingContractor", name: "Cook Coatings Inc" },
        areaServed: "United States",
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
      name: "What is a high-performance roofing system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A high-performance roofing system is a seamless, fully adhered roofing assembly, built with spray polyurethane foam (SPF), that insulates, waterproofs, and protects a commercial building while lowering energy consumption and extending the roof's service life. It's engineered as a complete building envelope solution rather than a single roofing product.",
      },
    },
    {
      "@type": "Question",
      name: "What is spray polyurethane foam roofing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spray polyurethane foam (SPF) is the material behind Cook Coatings' high-performance roofing systems: a seamless, fully-adhered roof assembly that can often be applied directly over an existing commercial roof. It insulates, waterproofs, and reduces building movement without the cost or landfill waste of a full tear-off.",
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
        text: "Cook Coatings Inc (CCI) is licensed in California, Arizona, and Nevada, and has completed commercial roofing projects nationwide across the United States, as well as select international projects.",
      },
    },
    {
      "@type": "Question",
      name: "How long does spray polyurethane foam roofing last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spray polyurethane foam is a proven roofing and insulation system with decades of verified field performance. It forms a fully-adhered, seamless membrane with no seams or fasteners for water to penetrate, and a scheduled maintenance plan helps maximize its service life.",
      },
    },
    {
      "@type": "Question",
      name: "Is spray foam roofing fire safe and well insulated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cook Coatings' spray polyurethane foam roofing systems meet UL 790 and UL 723 standards for fire performance (UL 790 Class A) and provide an aged R-value of 6.7 per inch, among the best insulating roof systems available.",
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
