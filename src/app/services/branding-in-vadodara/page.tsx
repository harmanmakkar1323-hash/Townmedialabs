import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Vadodara | TML Agency",
  description: "TML offers expert branding services in Vadodara. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding vadodara", "branding agency vadodara", "branding company vadodara"],
};

export default function BrandingInVadodaraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
