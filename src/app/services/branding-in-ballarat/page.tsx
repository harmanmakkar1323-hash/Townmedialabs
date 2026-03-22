import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ballarat"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Ballarat | TML Agency",
  description: "TML offers expert branding services in Ballarat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding ballarat", "branding agency ballarat", "branding company ballarat"],
};

export default function BrandingInBallaratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
