import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tampa"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Tampa | TML Agency",
  description: "TML offers expert branding services in Tampa. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding tampa", "branding agency tampa", "branding company tampa"],
};

export default function BrandingInTampaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
