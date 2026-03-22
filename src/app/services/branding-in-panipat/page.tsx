import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Panipat | TML Agency",
  description: "TML offers expert branding services in Panipat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding panipat", "branding agency panipat", "branding company panipat"],
};

export default function BrandingInPanipatPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
