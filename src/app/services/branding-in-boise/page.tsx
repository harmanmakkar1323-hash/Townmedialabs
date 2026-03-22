import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boise"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Boise | TML Agency",
  description: "TML offers expert branding services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding boise", "branding agency boise", "branding company boise"],
};

export default function BrandingInBoisePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
