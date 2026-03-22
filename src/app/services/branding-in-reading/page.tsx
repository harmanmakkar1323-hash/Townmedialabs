import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["reading"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Reading | TML Agency",
  description: "TML offers expert branding services in Reading. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding reading", "branding agency reading", "branding company reading"],
};

export default function BrandingInReadingPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
