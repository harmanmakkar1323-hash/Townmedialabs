import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oxford"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Oxford | TML Agency",
  description: "TML offers expert branding services in Oxford. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding oxford", "branding agency oxford", "branding company oxford"],
};

export default function BrandingInOxfordPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
