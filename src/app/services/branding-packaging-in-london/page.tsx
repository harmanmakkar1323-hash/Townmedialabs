import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in London | TML Agency",
  description: "TML offers expert packaging design services in London. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design london", "packaging design agency london", "packaging design company london"],
};

export default function BrandingPackagingInLondonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
