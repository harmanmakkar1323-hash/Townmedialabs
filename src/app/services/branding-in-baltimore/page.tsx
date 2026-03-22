import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Baltimore | TML Agency",
  description: "TML offers expert branding services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding baltimore", "branding agency baltimore", "branding company baltimore"],
};

export default function BrandingInBaltimorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
