import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brighton"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Brighton | TML Agency",
  description: "TML offers expert branding services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding brighton", "branding agency brighton", "branding company brighton"],
};

export default function BrandingInBrightonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
