import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Birmingham | TML Agency",
  description: "TML offers expert packaging design services in Birmingham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design birmingham", "packaging design agency birmingham", "packaging design company birmingham"],
};

export default function BrandingPackagingInBirminghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
