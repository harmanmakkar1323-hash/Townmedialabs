import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Bristol | TML Agency",
  description: "TML offers expert branding services in Bristol. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding bristol", "branding agency bristol", "branding company bristol"],
};

export default function BrandingInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
