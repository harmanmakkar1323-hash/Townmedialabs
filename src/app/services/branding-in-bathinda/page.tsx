import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Bathinda | TML Agency",
  description: "TML offers expert branding services in Bathinda. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding bathinda", "branding agency bathinda", "branding company bathinda"],
};

export default function BrandingInBathindaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
