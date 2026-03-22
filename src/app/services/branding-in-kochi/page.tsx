import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Kochi | TML Agency",
  description: "TML offers expert branding services in Kochi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding kochi", "branding agency kochi", "branding company kochi"],
};

export default function BrandingInKochiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
