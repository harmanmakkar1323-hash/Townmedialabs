import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Stoke-on-Trent | TML Agency",
  description: "TML offers expert branding services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding stoke-on-trent", "branding agency stoke-on-trent", "branding company stoke-on-trent"],
};

export default function BrandingInStokeOnTrentPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
