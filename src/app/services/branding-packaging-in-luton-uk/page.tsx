import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Luton | TML Agency",
  description: "TML offers expert packaging design services in Luton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design luton", "packaging design agency luton", "packaging design company luton"],
};

export default function BrandingPackagingInLutonUkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
