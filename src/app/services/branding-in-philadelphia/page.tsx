import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Philadelphia | TML Agency",
  description: "TML offers expert branding services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding philadelphia", "branding agency philadelphia", "branding company philadelphia"],
};

export default function BrandingInPhiladelphiaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
