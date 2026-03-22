import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Best Branding Agency in New York | TML Agency",
  description: "TML offers expert branding services in New York. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding new york", "branding agency new york", "branding company new york"],
};

export default function BrandingInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
