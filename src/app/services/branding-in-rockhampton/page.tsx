import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Rockhampton | TML Agency",
  description: "TML offers expert branding services in Rockhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding rockhampton", "branding agency rockhampton", "branding company rockhampton"],
};

export default function BrandingInRockhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
