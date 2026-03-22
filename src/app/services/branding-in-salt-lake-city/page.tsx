import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Salt Lake City | TML Agency",
  description: "TML offers expert branding services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding salt lake city", "branding agency salt lake city", "branding company salt lake city"],
};

export default function BrandingInSaltLakeCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
