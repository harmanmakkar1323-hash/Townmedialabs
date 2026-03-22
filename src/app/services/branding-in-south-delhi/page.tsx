import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best Branding Agency in South Delhi | TML Agency",
  description: "TML offers expert branding services in South Delhi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding south delhi", "branding agency south delhi", "branding company south delhi"],
};

export default function BrandingInSouthDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
