import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Fujairah | TML Agency",
  description: "TML offers expert branding services in Fujairah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding fujairah", "branding agency fujairah", "branding company fujairah"],
};

export default function BrandingInFujairahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
