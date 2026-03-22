import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["denver"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Denver | TML Agency",
  description: "TML offers expert branding services in Denver. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding denver", "branding agency denver", "branding company denver"],
};

export default function BrandingInDenverPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
