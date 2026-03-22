import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Perth | TML Agency",
  description: "TML offers expert branding services in Perth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding perth", "branding agency perth", "branding company perth"],
};

export default function BrandingInPerthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
