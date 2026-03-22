import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Cardiff | TML Agency",
  description: "TML offers expert branding services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding cardiff", "branding agency cardiff", "branding company cardiff"],
};

export default function BrandingInCardiffPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
