import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert branding services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding visakhapatnam", "branding agency visakhapatnam", "branding company visakhapatnam"],
};

export default function BrandingInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
