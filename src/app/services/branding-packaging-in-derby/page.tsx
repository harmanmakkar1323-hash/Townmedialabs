import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derby"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Derby | TML Agency",
  description: "TML offers expert packaging design services in Derby. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design derby", "packaging design agency derby", "packaging design company derby"],
};

export default function BrandingPackagingInDerbyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
