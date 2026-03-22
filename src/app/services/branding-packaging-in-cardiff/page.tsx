import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Cardiff | TML Agency",
  description: "TML offers expert packaging design services in Cardiff. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design cardiff", "packaging design agency cardiff", "packaging design company cardiff"],
};

export default function BrandingPackagingInCardiffPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
