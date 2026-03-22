import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Honolulu | TML Agency",
  description: "TML offers expert branding services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding honolulu", "branding agency honolulu", "branding company honolulu"],
};

export default function BrandingInHonoluluPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
