import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Austin | TML Agency",
  description: "TML offers expert branding services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding austin", "branding agency austin", "branding company austin"],
};

export default function BrandingInAustinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
