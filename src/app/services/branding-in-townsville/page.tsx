import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Townsville | TML Agency",
  description: "TML offers expert branding services in Townsville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding townsville", "branding agency townsville", "branding company townsville"],
};

export default function BrandingInTownsvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
