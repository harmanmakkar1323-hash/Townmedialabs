import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Oklahoma City | TML Agency",
  description: "TML offers expert branding services in Oklahoma City. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding oklahoma city", "branding agency oklahoma city", "branding company oklahoma city"],
};

export default function BrandingInOklahomaCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
