import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nottingham"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Nottingham | TML Agency",
  description: "TML offers expert packaging design services in Nottingham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design nottingham", "packaging design agency nottingham", "packaging design company nottingham"],
};

export default function BrandingPackagingInNottinghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
