import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Bhopal | TML Agency",
  description: "TML offers expert branding services in Bhopal. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding bhopal", "branding agency bhopal", "branding company bhopal"],
};

export default function BrandingInBhopalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
