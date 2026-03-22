import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Virginia Beach | TML Agency",
  description: "TML offers expert branding services in Virginia Beach. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding virginia beach", "branding agency virginia beach", "branding company virginia beach"],
};

export default function BrandingInVirginiaBeachPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
