import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sharjah"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Sharjah | TML Agency",
  description: "TML offers expert branding services in Sharjah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding sharjah", "branding agency sharjah", "branding company sharjah"],
};

export default function BrandingInSharjahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
