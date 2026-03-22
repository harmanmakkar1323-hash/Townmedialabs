import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["louisville"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Louisville | TML Agency",
  description: "TML offers expert branding services in Louisville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding louisville", "branding agency louisville", "branding company louisville"],
};

export default function BrandingInLouisvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
