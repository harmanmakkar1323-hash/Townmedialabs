import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Ras Al Khaimah | TML Agency",
  description: "TML offers expert packaging design services in Ras Al Khaimah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design ras al khaimah", "packaging design agency ras al khaimah", "packaging design company ras al khaimah"],
};

export default function BrandingPackagingInRasAlKhaimahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
