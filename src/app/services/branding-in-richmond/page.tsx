import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["richmond"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Richmond | TML Agency",
  description: "TML offers expert branding services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding richmond", "branding agency richmond", "branding company richmond"],
};

export default function BrandingInRichmondPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
