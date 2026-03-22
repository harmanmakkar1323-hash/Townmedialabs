import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milwaukee"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Milwaukee | TML Agency",
  description: "TML offers expert packaging design services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design milwaukee", "packaging design agency milwaukee", "packaging design company milwaukee"],
};

export default function BrandingPackagingInMilwaukeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
