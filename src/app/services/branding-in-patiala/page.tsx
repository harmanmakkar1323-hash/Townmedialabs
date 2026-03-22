import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Patiala | TML Agency",
  description: "TML offers expert branding services in Patiala. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding patiala", "branding agency patiala", "branding company patiala"],
};

export default function BrandingInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
