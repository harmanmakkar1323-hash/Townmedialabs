import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Jacksonville | TML Agency",
  description: "TML offers expert branding services in Jacksonville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding jacksonville", "branding agency jacksonville", "branding company jacksonville"],
};

export default function BrandingInJacksonvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
