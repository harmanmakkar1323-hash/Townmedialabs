import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Ludhiana | TML Agency",
  description: "TML offers expert branding services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding ludhiana", "branding agency ludhiana", "branding company ludhiana"],
};

export default function BrandingInLudhianaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
