import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Jalandhar | TML Agency",
  description: "TML offers expert branding services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding jalandhar", "branding agency jalandhar", "branding company jalandhar"],
};

export default function BrandingInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
