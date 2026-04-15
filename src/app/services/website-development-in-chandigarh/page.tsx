import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chandigarh"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Chandigarh",
  description: "Top-rated website development company in Chandigarh. TML offers expert website development services for 500+ businesses across Punjab. Get a free website development consultation today.",
  keywords: ["best website development agency chandigarh", "website development company chandigarh", "website development services chandigarh", "best website development chandigarh", "top website development agency chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-chandigarh/",
  },
  openGraph: {
    title: "Best Website Development Agency in Chandigarh",
    description: "Top-rated website development company in Chandigarh. TML offers expert website development services for 500+ businesses across Punjab. Get a free website development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-chandigarh/",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Chandigarh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Chandigarh",
    description: "Top-rated website development company in Chandigarh. TML offers expert website development services for 500+ businesses across Punjab. Get a free website development consultation today.",
    images: ["/og-image.png"],
  },
};
export default function UwebsiteUdevelopmentUinUchandigarhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
