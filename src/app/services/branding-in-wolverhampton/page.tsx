import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Wolverhampton | TML Agency",
  description: "TML offers expert branding services in Wolverhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding wolverhampton", "branding agency wolverhampton", "branding company wolverhampton"],
};

export default function BrandingInWolverhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
