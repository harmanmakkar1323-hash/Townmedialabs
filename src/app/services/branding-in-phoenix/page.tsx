import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Phoenix | TML Agency",
  description: "TML offers expert branding services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding phoenix", "branding agency phoenix", "branding company phoenix"],
};

export default function BrandingInPhoenixPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
