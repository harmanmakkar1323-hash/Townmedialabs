import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["norwich"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Norwich | TML Agency",
  description: "TML offers expert branding services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding norwich", "branding agency norwich", "branding company norwich"],
};

export default function BrandingInNorwichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
