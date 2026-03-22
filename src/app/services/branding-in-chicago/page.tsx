import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Chicago | TML Agency",
  description: "TML offers expert branding services in Chicago. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding chicago", "branding agency chicago", "branding company chicago"],
};

export default function BrandingInChicagoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
