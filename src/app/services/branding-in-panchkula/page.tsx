import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Panchkula | TML Agency",
  description: "TML offers expert branding services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding panchkula", "branding agency panchkula", "branding company panchkula"],
};

export default function BrandingInPanchkulaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
