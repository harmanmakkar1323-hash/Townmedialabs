import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Chennai | TML Agency",
  description: "TML offers expert branding services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding chennai", "branding agency chennai", "branding company chennai"],
};

export default function BrandingInChennaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
