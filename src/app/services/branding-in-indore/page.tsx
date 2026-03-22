import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Indore | TML Agency",
  description: "TML offers expert branding services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding indore", "branding agency indore", "branding company indore"],
};

export default function BrandingInIndorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
