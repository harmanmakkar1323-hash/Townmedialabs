import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Jaipur | TML Agency",
  description: "TML offers expert branding services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding jaipur", "branding agency jaipur", "branding company jaipur"],
};

export default function BrandingInJaipurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
