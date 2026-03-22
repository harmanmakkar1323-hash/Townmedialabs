import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Fort Worth | TML Agency",
  description: "TML offers expert branding services in Fort Worth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding fort worth", "branding agency fort worth", "branding company fort worth"],
};

export default function BrandingInFortWorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
