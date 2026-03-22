import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Best Branding Agency in London | TML Agency",
  description: "TML offers expert branding services in London. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding london", "branding agency london", "branding company london"],
};

export default function BrandingInLondonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
