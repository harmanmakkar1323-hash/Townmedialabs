import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Geelong | TML Agency",
  description: "TML offers expert packaging design services in Geelong. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design geelong", "packaging design agency geelong", "packaging design company geelong"],
};

export default function BrandingPackagingInGeelongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
