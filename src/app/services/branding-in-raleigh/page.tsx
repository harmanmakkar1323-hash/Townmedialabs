import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["raleigh"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Raleigh | TML Agency",
  description: "TML offers expert branding services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding raleigh", "branding agency raleigh", "branding company raleigh"],
};

export default function BrandingInRaleighPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
