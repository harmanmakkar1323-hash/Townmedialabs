import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Cheltenham | TML Agency",
  description: "TML offers expert branding services in Cheltenham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding cheltenham", "branding agency cheltenham", "branding company cheltenham"],
};

export default function BrandingInCheltenhamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
