import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Memphis | TML Agency",
  description: "TML offers expert branding services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding memphis", "branding agency memphis", "branding company memphis"],
};

export default function BrandingInMemphisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
