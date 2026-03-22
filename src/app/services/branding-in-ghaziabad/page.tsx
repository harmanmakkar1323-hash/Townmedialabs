import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Ghaziabad | TML Agency",
  description: "TML offers expert branding services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding ghaziabad", "branding agency ghaziabad", "branding company ghaziabad"],
};

export default function BrandingInGhaziabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
