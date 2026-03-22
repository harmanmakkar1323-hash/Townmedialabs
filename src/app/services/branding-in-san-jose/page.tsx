import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Best Branding Agency in San Jose | TML Agency",
  description: "TML offers expert branding services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding san jose", "branding agency san jose", "branding company san jose"],
};

export default function BrandingInSanJosePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
