import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["preston"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Preston | TML Agency",
  description: "TML offers expert packaging design services in Preston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design preston", "packaging design agency preston", "packaging design company preston"],
};

export default function BrandingPackagingInPrestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
