import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Minneapolis | TML Agency",
  description: "TML offers expert branding services in Minneapolis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding minneapolis", "branding agency minneapolis", "branding company minneapolis"],
};

export default function BrandingInMinneapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
