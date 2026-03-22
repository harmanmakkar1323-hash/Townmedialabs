import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Hobart | TML Agency",
  description: "TML offers expert branding services in Hobart. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding hobart", "branding agency hobart", "branding company hobart"],
};

export default function BrandingInHobartPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
