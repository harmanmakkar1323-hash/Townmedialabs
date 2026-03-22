import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["auckland"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Auckland | TML Agency",
  description: "TML offers expert packaging design services in Auckland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design auckland", "packaging design agency auckland", "packaging design company auckland"],
};

export default function BrandingPackagingInAucklandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
