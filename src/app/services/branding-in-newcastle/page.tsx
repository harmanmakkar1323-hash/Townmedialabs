import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["newcastle"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Newcastle | TML Agency",
  description: "TML offers expert branding services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding newcastle", "branding agency newcastle", "branding company newcastle"],
};

export default function BrandingInNewcastlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
