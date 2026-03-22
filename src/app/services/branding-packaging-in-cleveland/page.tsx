import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Cleveland | TML Agency",
  description: "TML offers expert packaging design services in Cleveland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design cleveland", "packaging design agency cleveland", "packaging design company cleveland"],
};

export default function BrandingPackagingInClevelandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
