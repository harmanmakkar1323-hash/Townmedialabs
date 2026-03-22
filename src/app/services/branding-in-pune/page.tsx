import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Pune | TML Agency",
  description: "TML offers expert branding services in Pune. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding pune", "branding agency pune", "branding company pune"],
};

export default function BrandingInPunePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
