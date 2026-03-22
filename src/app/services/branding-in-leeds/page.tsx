import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leeds"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Leeds | TML Agency",
  description: "TML offers expert branding services in Leeds. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding leeds", "branding agency leeds", "branding company leeds"],
};

export default function BrandingInLeedsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
