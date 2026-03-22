import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Cincinnati | TML Agency",
  description: "TML offers expert branding services in Cincinnati. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding cincinnati", "branding agency cincinnati", "branding company cincinnati"],
};

export default function BrandingInCincinnatiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
