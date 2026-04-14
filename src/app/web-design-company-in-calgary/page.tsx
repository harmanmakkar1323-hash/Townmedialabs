import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["calgary"];

export const metadata: Metadata = {
  title: "Web Design Company in Calgary | TML Agency",
  description:
    "TML Agency is a leading web design company in Calgary, Alberta. Custom websites built with modern technology for Calgary businesses. 500+ brands served, 98% client retention.",
  keywords: [
    "web design company calgary",
    "web design calgary",
    "website design company calgary",
    "web design agency calgary",
    "calgary web design",
    "custom website design calgary",
    "responsive web design calgary",
    "web development company calgary",
  ],
  alternates: {
    canonical: "https://townmedialabs.ca/web-design-company-in-calgary",
  },
  openGraph: {
    title: "Web Design Company in Calgary | TML Agency",
    description:
      "TML Agency is a leading web design company in Calgary, Alberta. Custom websites built with modern technology for Calgary businesses. 500+ brands served, 98% client retention.",
    url: "https://townmedialabs.ca/web-design-company-in-calgary",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web Design Company in Calgary — TML Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Web Design Company in Calgary | TML Agency",
    description:
      "TML Agency is a leading web design company in Calgary, Alberta. Custom websites built with modern technology for Calgary businesses. 500+ brands served, 98% client retention.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Web Design"
    />
  );
}
