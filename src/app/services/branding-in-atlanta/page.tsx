import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Atlanta | TML Agency",
  description: "TML offers expert branding services in Atlanta. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding atlanta", "branding agency atlanta", "branding company atlanta"],
};

export default function BrandingInAtlantaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
