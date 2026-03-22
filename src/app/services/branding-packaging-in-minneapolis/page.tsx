import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Minneapolis | TML Agency",
  description: "TML offers expert packaging design services in Minneapolis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design minneapolis", "packaging design agency minneapolis", "packaging design company minneapolis"],
};

export default function BrandingPackagingInMinneapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
