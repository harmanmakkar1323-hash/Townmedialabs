import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["york"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in York | TML Agency",
  description: "TML offers expert packaging design services in York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design york", "packaging design agency york", "packaging design company york"],
};

export default function BrandingPackagingInYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
