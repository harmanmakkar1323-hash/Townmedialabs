import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Ambala | TML Agency",
  description: "TML offers expert branding services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding ambala", "branding agency ambala", "branding company ambala"],
};

export default function BrandingInAmbalaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
