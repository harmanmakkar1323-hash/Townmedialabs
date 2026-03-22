import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Lucknow | TML Agency",
  description: "TML offers expert branding services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding lucknow", "branding agency lucknow", "branding company lucknow"],
};

export default function BrandingInLucknowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
