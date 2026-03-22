import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Mohali | TML Agency",
  description: "TML offers expert branding services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding mohali", "branding agency mohali", "branding company mohali"],
};

export default function BrandingInMohaliPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
