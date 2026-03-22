import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dubai"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Dubai | TML Agency",
  description: "TML offers expert branding services in Dubai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding dubai", "branding agency dubai", "branding company dubai"],
};

export default function BrandingInDubaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
