import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Boston | TML Agency",
  description: "TML offers expert branding services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding boston", "branding agency boston", "branding company boston"],
};

export default function BrandingInBostonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
