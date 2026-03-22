import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Adelaide | TML Agency",
  description: "TML offers expert branding services in Adelaide. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding adelaide", "branding agency adelaide", "branding company adelaide"],
};

export default function BrandingInAdelaidePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
