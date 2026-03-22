import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Nashville | TML Agency",
  description: "TML offers expert branding services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding nashville", "branding agency nashville", "branding company nashville"],
};

export default function BrandingInNashvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
