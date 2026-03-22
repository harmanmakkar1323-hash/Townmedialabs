import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Cambridge | TML Agency",
  description: "TML offers expert branding services in Cambridge. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding cambridge", "branding agency cambridge", "branding company cambridge"],
};

export default function BrandingInCambridgePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
