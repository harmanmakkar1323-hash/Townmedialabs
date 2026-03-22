import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Delhi | TML Agency",
  description: "TML offers expert branding services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding delhi", "branding agency delhi", "branding company delhi"],
};

export default function BrandingInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
