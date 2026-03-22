import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["auckland"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Auckland | TML Agency",
  description: "TML offers expert branding services in Auckland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding auckland", "branding agency auckland", "branding company auckland"],
};

export default function BrandingInAucklandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
