import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Middlesbrough | TML Agency",
  description: "TML offers expert branding services in Middlesbrough. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding middlesbrough", "branding agency middlesbrough", "branding company middlesbrough"],
};

export default function BrandingInMiddlesbroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
