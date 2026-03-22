import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["orlando"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Orlando | TML Agency",
  description: "TML offers expert packaging design services in Orlando. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design orlando", "packaging design agency orlando", "packaging design company orlando"],
};

export default function BrandingPackagingInOrlandoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
