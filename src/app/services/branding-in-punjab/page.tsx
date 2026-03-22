import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["punjab"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Punjab | TML Agency",
  description: "TML offers expert branding services in Punjab. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding punjab", "branding agency punjab", "branding company punjab"],
};

export default function BrandingInPunjabPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
