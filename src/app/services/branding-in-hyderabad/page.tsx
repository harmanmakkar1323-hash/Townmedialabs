import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Hyderabad | TML Agency",
  description: "TML offers expert branding services in Hyderabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding hyderabad", "branding agency hyderabad", "branding company hyderabad"],
};

export default function BrandingInHyderabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
