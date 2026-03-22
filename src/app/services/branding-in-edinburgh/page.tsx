import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edinburgh"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Edinburgh | TML Agency",
  description: "TML offers expert branding services in Edinburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding edinburgh", "branding agency edinburgh", "branding company edinburgh"],
};

export default function BrandingInEdinburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
