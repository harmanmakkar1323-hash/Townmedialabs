import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  title: "Best Branding Agency in San Francisco | TML Agency",
  description: "TML offers expert branding services in San Francisco. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding san francisco", "branding agency san francisco", "branding company san francisco"],
};

export default function BrandingInSanFranciscoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
