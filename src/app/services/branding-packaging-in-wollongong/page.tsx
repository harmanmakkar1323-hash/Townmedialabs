import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Wollongong | TML Agency",
  description: "TML offers expert packaging design services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design wollongong", "packaging design agency wollongong", "packaging design company wollongong"],
};

export default function BrandingPackagingInWollongongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
