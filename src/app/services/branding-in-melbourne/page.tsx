import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Melbourne | TML Agency",
  description: "TML offers expert branding services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding melbourne", "branding agency melbourne", "branding company melbourne"],
};

export default function BrandingInMelbournePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
