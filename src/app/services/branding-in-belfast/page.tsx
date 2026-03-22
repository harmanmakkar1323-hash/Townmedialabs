import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["belfast"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Belfast | TML Agency",
  description: "TML offers expert branding services in Belfast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding belfast", "branding agency belfast", "branding company belfast"],
};

export default function BrandingInBelfastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
