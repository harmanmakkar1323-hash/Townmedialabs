import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Indianapolis | TML Agency",
  description: "TML offers expert branding services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding indianapolis", "branding agency indianapolis", "branding company indianapolis"],
};

export default function BrandingInIndianapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
