import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Toowoomba | TML Agency",
  description: "TML offers expert packaging design services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design toowoomba", "packaging design agency toowoomba", "packaging design company toowoomba"],
};

export default function BrandingPackagingInToowoombaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
