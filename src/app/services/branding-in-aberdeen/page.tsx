import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["aberdeen"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Aberdeen | TML Agency",
  description: "TML offers expert branding services in Aberdeen. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding aberdeen", "branding agency aberdeen", "branding company aberdeen"],
};

export default function BrandingInAberdeenPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
