import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["preston"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Preston | TML Agency",
  description: "TML offers expert branding services in Preston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding preston", "branding agency preston", "branding company preston"],
};

export default function BrandingInPrestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
