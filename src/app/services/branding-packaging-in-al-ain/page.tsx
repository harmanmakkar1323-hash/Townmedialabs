import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["al_ain"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Al Ain | TML Agency",
  description: "TML offers expert packaging design services in Al Ain. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design al ain", "packaging design agency al ain", "packaging design company al ain"],
};

export default function BrandingPackagingInAlAinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
