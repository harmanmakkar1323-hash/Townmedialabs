import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Detroit | TML Agency",
  description: "TML offers expert branding services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding detroit", "branding agency detroit", "branding company detroit"],
};

export default function BrandingInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
