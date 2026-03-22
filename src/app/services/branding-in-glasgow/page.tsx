import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Glasgow | TML Agency",
  description: "TML offers expert branding services in Glasgow. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding glasgow", "branding agency glasgow", "branding company glasgow"],
};

export default function BrandingInGlasgowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
