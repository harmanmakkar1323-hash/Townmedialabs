import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Bath | TML Agency",
  description: "TML offers expert branding services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding bath", "branding agency bath", "branding company bath"],
};

export default function BrandingInBathPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
