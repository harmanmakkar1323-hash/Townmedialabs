import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Brisbane | TML Agency",
  description: "TML offers expert branding services in Brisbane. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding brisbane", "branding agency brisbane", "branding company brisbane"],
};

export default function BrandingInBrisbanePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
