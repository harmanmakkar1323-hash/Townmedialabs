import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Coimbatore | TML Agency",
  description: "TML offers expert branding services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding coimbatore", "branding agency coimbatore", "branding company coimbatore"],
};

export default function BrandingInCoimbatorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
