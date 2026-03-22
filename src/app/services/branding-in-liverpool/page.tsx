import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Liverpool | TML Agency",
  description: "TML offers expert branding services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding liverpool", "branding agency liverpool", "branding company liverpool"],
};

export default function BrandingInLiverpoolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
