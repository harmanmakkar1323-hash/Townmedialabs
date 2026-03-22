import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coventry"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Coventry | TML Agency",
  description: "TML offers expert branding services in Coventry. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding coventry", "branding agency coventry", "branding company coventry"],
};

export default function BrandingInCoventryPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
