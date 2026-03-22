import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Sydney | TML Agency",
  description: "TML offers expert branding services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding sydney", "branding agency sydney", "branding company sydney"],
};

export default function BrandingInSydneyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
