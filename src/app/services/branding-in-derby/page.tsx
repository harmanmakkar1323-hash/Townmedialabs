import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derby"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Derby | TML Agency",
  description: "TML offers expert branding services in Derby. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding derby", "branding agency derby", "branding company derby"],
};

export default function BrandingInDerbyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
