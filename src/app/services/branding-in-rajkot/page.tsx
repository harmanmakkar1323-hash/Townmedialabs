import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Rajkot | TML Agency",
  description: "TML offers expert branding services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding rajkot", "branding agency rajkot", "branding company rajkot"],
};

export default function BrandingInRajkotPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
