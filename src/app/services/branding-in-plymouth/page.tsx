import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["plymouth"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Plymouth | TML Agency",
  description: "TML offers expert branding services in Plymouth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding plymouth", "branding agency plymouth", "branding company plymouth"],
};

export default function BrandingInPlymouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
