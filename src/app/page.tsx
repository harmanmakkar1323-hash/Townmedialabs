import { Metadata } from "next";
import dynamic from "next/dynamic";
import NavbarHome2 from "@/components/layout/NavbarHome2";
import HeroHome2 from "@/components/sections/HeroHome2";

// ClientLogos is a decorative marquee below the hero — code-split to reduce initial bundle
const ClientLogos = dynamic(
  () => import("@/components/sections/ClientLogos").then((mod) => ({ default: mod.ClientLogos }))
);
const BelowFoldSections = dynamic(
  () => import("@/components/sections/BelowFoldSections")
);

export const metadata: Metadata = {
  title: "TML Agency | Global Digital Marketing & Branding Agency",
  description:
    "TML Agency is a global digital marketing agency serving 500+ brands across India, USA, UK, Canada, Australia & UAE. SEO, Google Ads, branding & web development.",
  keywords: [
    "digital marketing agency",
    "global branding agency",
    "SEO agency",
    "Google Ads agency",
    "branding agency",
    "web development company",
    "social media marketing agency",
    "performance marketing agency",
    "lead generation agency",
    "digital marketing agency India",
    "digital marketing agency USA",
    "digital marketing agency UK",
    "best digital marketing company",
    "full service marketing agency",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "https://townmedialabs.com/",
      "x-default": "https://townmedialabs.com/",
    },
  },
  openGraph: {
    title: "TML Agency | Global Digital Marketing & Branding Agency",
    description:
      "Global digital marketing agency serving 500+ brands across India, USA, UK, Canada, Australia & UAE. SEO, Google Ads, branding & web development.",
    url: "https://townmedialabs.com",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TML Agency - Global Digital Marketing & Branding Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "TML Agency | Global Digital Marketing & Branding Agency",
    description:
      "Global digital marketing agency serving 500+ brands across India, USA, UK, Canada, Australia & UAE. SEO, Google Ads, branding & web development.",
    images: ["/og-image.png"],
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://townmedialabs.com/#localbusiness",
  name: "TML Agency",
  url: "https://townmedialabs.com",
  telephone: "+91-98726-48209",
  email: "info@townmedialabs.com",
  image: "https://townmedialabs.com/logo.png",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "352",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah Mitchell" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "TML completely transformed our digital presence. Within 90 days we saw a 3x return on our ad spend and our brand finally felt like us.",
      datePublished: "2025-08-15",
      publisher: { "@type": "Organization", name: "Luxe Interiors" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "James Carter" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Their team feels like an extension of ours. No hand-holding needed — they just get it and deliver, every single time.",
      datePublished: "2025-10-22",
      publisher: { "@type": "Organization", name: "CB Builders" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Harman" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "We went from zero online presence to ranking on page one for 12 keywords in under 6 months. The ROI speaks for itself.",
      datePublished: "2025-12-05",
      publisher: { "@type": "Organization", name: "TechVault" },
    },
  ],
};

const videoObjectJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "TML Agency Showreel 2025",
  description:
    "A showcase of TML Agency's best digital marketing, branding, and creative work from 2025.",
  thumbnailUrl: "https://townmedialabs.com/og-image.png",
  contentUrl: "https://townmedialabs.com/portfolio/tml-portfolio-showreel-2025.mp4",
  uploadDate: "2025-01-01",
  duration: "PT2M30S",
  publisher: {
    "@type": "Organization",
    name: "TML Agency",
    url: "https://townmedialabs.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoObjectJsonLd),
        }}
      />
      <NavbarHome2 />
      <HeroHome2 />
      <ClientLogos />
      <BelowFoldSections />
    </main>
  );
}
