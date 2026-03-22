import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bournemouth"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Bournemouth | TML Agency",
  description: "TML offers expert branding services in Bournemouth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding bournemouth", "branding agency bournemouth", "branding company bournemouth"],
};

export default function BrandingInBournemouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
