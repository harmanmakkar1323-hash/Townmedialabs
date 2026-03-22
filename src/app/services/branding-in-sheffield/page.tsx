import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sheffield"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Sheffield | TML Agency",
  description: "TML offers expert branding services in Sheffield. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding sheffield", "branding agency sheffield", "branding company sheffield"],
};

export default function BrandingInSheffieldPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
