import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Seattle | TML Agency",
  description: "TML offers expert branding services in Seattle. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding seattle", "branding agency seattle", "branding company seattle"],
};

export default function BrandingInSeattlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
