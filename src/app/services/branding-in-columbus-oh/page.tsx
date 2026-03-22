import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Columbus | TML Agency",
  description: "TML offers expert branding services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding columbus", "branding agency columbus", "branding company columbus"],
};

export default function BrandingInColumbusOhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
