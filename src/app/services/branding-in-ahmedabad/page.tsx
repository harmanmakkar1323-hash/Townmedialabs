import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Ahmedabad | TML Agency",
  description: "TML offers expert branding services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding ahmedabad", "branding agency ahmedabad", "branding company ahmedabad"],
};

export default function BrandingInAhmedabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
