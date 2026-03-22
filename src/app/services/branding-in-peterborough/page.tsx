import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["peterborough"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Peterborough | TML Agency",
  description: "TML offers expert branding services in Peterborough. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding peterborough", "branding agency peterborough", "branding company peterborough"],
};

export default function BrandingInPeterboroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
