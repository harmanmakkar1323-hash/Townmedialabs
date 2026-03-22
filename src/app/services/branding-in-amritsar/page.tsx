import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Amritsar | TML Agency",
  description: "TML offers expert branding services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding amritsar", "branding agency amritsar", "branding company amritsar"],
};

export default function BrandingInAmritsarPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
