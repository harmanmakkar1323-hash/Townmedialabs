import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Gurgaon | TML Agency",
  description: "TML offers expert branding and packaging services in Gurgaon. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging gurgaon", "branding and packaging agency gurgaon", "branding and packaging company gurgaon"],
};

export default function BrandingpackagingInGurgaonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
