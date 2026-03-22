import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Canberra | TML Agency",
  description: "TML offers expert packaging design services in Canberra. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design canberra", "packaging design agency canberra", "packaging design company canberra"],
};

export default function BrandingPackagingInCanberraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
