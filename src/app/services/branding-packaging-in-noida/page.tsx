import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Noida | TML Agency",
  description: "TML offers expert branding and packaging services in Noida. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging noida", "branding and packaging agency noida", "branding and packaging company noida"],
};

export default function BrandingpackagingInNoidaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
