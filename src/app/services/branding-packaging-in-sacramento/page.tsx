import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Sacramento | TML Agency",
  description: "TML offers expert packaging design services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design sacramento", "packaging design agency sacramento", "packaging design company sacramento"],
};

export default function BrandingPackagingInSacramentoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
