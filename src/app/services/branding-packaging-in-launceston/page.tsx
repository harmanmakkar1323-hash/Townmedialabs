import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Launceston | TML Agency",
  description: "TML offers expert packaging design services in Launceston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design launceston", "packaging design agency launceston", "packaging design company launceston"],
};

export default function BrandingPackagingInLauncestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
