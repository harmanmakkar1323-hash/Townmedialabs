import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Sunshine Coast | TML Agency",
  description: "TML offers expert branding services in Sunshine Coast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding sunshine coast", "branding agency sunshine coast", "branding company sunshine coast"],
};

export default function BrandingInSunshineCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
