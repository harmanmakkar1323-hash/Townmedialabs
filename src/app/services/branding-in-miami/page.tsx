import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["miami"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Miami | TML Agency",
  description: "TML offers expert branding services in Miami. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding miami", "branding agency miami", "branding company miami"],
};

export default function BrandingInMiamiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
