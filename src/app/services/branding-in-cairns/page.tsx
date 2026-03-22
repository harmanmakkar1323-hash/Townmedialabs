import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Cairns | TML Agency",
  description: "TML offers expert branding services in Cairns. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding cairns", "branding agency cairns", "branding company cairns"],
};

export default function BrandingInCairnsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
