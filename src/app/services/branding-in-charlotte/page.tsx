import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Charlotte | TML Agency",
  description: "TML offers expert branding services in Charlotte. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding charlotte", "branding agency charlotte", "branding company charlotte"],
};

export default function BrandingInCharlottePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
