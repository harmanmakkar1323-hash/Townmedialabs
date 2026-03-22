import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["faridabad"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Faridabad | TML Agency",
  description: "TML offers expert branding services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding faridabad", "branding agency faridabad", "branding company faridabad"],
};

export default function BrandingInFaridabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
