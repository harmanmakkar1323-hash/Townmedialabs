import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Los Angeles | TML Agency",
  description: "TML offers expert branding services in Los Angeles. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding los angeles", "branding agency los angeles", "branding company los angeles"],
};

export default function BrandingInLosAngelesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
