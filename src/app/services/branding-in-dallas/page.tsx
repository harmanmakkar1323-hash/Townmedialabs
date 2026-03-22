import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dallas"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Dallas | TML Agency",
  description: "TML offers expert branding services in Dallas. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding dallas", "branding agency dallas", "branding company dallas"],
};

export default function BrandingInDallasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
