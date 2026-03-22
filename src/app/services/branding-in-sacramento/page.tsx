import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Sacramento | TML Agency",
  description: "TML offers expert branding services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding sacramento", "branding agency sacramento", "branding company sacramento"],
};

export default function BrandingInSacramentoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
