import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["darwin"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Darwin | TML Agency",
  description: "TML offers expert branding services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding darwin", "branding agency darwin", "branding company darwin"],
};

export default function BrandingInDarwinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
