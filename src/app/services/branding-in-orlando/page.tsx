import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["orlando"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Orlando | TML Agency",
  description: "TML offers expert branding services in Orlando. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding orlando", "branding agency orlando", "branding company orlando"],
};

export default function BrandingInOrlandoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
