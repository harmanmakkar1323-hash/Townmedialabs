import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Ipswich | TML Agency",
  description: "TML offers expert packaging design services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design ipswich", "packaging design agency ipswich", "packaging design company ipswich"],
};

export default function BrandingPackagingInIpswichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
