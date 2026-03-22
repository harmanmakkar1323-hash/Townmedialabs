import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Nagpur | TML Agency",
  description: "TML offers expert branding services in Nagpur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding nagpur", "branding agency nagpur", "branding company nagpur"],
};

export default function BrandingInNagpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
