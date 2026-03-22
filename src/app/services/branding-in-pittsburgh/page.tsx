import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Pittsburgh | TML Agency",
  description: "TML offers expert branding services in Pittsburgh. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding pittsburgh", "branding agency pittsburgh", "branding company pittsburgh"],
};

export default function BrandingInPittsburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
