import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Wellington | TML Agency",
  description: "TML offers expert branding services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["branding wellington", "branding agency wellington", "branding wellington nz"],
};

export default function BrandingInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
