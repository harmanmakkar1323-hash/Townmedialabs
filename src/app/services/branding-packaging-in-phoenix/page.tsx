import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Phoenix | TML Agency",
  description: "TML offers expert packaging design services in Phoenix. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design phoenix", "packaging design agency phoenix", "packaging design company phoenix"],
};

export default function BrandingPackagingInPhoenixPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
