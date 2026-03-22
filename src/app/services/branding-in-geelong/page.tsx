import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Geelong | TML Agency",
  description: "TML offers expert branding services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding geelong", "branding agency geelong", "branding company geelong"],
};

export default function BrandingInGeelongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
