import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Townsville | TML Agency",
  description: "TML offers expert packaging design services in Townsville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design townsville", "packaging design agency townsville", "packaging design company townsville"],
};

export default function BrandingPackagingInTownsvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
