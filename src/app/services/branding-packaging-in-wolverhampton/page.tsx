import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Wolverhampton | TML Agency",
  description: "TML offers expert packaging design services in Wolverhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design wolverhampton", "packaging design agency wolverhampton", "packaging design company wolverhampton"],
};

export default function BrandingPackagingInWolverhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
