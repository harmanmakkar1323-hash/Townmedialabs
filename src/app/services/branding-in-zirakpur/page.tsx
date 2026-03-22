import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Zirakpur | TML Agency",
  description: "TML offers expert branding services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding zirakpur", "branding agency zirakpur", "branding company zirakpur"],
};

export default function BrandingInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
