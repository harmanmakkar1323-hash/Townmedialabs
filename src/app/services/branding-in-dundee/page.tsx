import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dundee"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Dundee | TML Agency",
  description: "TML offers expert branding services in Dundee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding dundee", "branding agency dundee", "branding company dundee"],
};

export default function BrandingInDundeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
