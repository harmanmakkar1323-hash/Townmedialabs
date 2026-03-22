import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Bristol | TML Agency",
  description: "TML offers expert packaging design services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design bristol", "packaging design agency bristol", "packaging design company bristol"],
};

export default function BrandingPackagingInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
