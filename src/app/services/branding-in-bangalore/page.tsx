import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Bangalore | TML Agency",
  description: "TML offers expert branding services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding bangalore", "branding agency bangalore", "branding company bangalore"],
};

export default function BrandingInBangalorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
