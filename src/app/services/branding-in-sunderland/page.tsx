import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Sunderland | TML Agency",
  description: "TML offers expert branding services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding sunderland", "branding agency sunderland", "branding company sunderland"],
};

export default function BrandingInSunderlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
