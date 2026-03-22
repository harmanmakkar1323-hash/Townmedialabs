import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Best Branding Agency in St. Louis | TML Agency",
  description: "TML offers expert branding services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding st. louis", "branding agency st. louis", "branding company st. louis"],
};

export default function BrandingInStLouisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
