import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Bendigo | TML Agency",
  description: "TML offers expert branding services in Bendigo. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding bendigo", "branding agency bendigo", "branding company bendigo"],
};

export default function BrandingInBendigoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
