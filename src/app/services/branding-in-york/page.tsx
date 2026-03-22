import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["york"];

export const metadata: Metadata = {
  title: "Best Branding Agency in York | TML Agency",
  description: "TML offers expert branding services in York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding york", "branding agency york", "branding company york"],
};

export default function BrandingInYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
