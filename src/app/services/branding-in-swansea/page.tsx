import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Swansea | TML Agency",
  description: "TML offers expert branding services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding swansea", "branding agency swansea", "branding company swansea"],
};

export default function BrandingInSwanseaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
