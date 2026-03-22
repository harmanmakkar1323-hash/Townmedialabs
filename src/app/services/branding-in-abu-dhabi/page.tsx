import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert branding services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding abu dhabi", "branding agency abu dhabi", "branding company abu dhabi"],
};

export default function BrandingInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
