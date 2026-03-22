import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Columbus | TML Agency",
  description: "TML offers expert packaging design services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design columbus", "packaging design agency columbus", "packaging design company columbus"],
};

export default function BrandingPackagingInColumbusOhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
