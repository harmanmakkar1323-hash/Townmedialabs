import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Exeter | TML Agency",
  description: "TML offers expert packaging design services in Exeter. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design exeter", "packaging design agency exeter", "packaging design company exeter"],
};

export default function BrandingPackagingInExeterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
