import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "Best Branding Agency in San Diego | TML Agency",
  description: "TML offers expert branding services in San Diego. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding san diego", "branding agency san diego", "branding company san diego"],
};

export default function BrandingInSanDiegoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
