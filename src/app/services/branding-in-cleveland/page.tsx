import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Cleveland | TML Agency",
  description: "TML offers expert branding services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding cleveland", "branding agency cleveland", "branding company cleveland"],
};

export default function BrandingInClevelandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
