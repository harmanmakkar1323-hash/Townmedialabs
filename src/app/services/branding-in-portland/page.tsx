import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["portland"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Portland | TML Agency",
  description: "TML offers expert branding services in Portland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding portland", "branding agency portland", "branding company portland"],
};

export default function BrandingInPortlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
