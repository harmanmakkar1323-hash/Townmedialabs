import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Noida | TML Agency",
  description: "TML offers expert branding services in Noida. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding noida", "branding agency noida", "branding company noida"],
};

export default function BrandingInNoidaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
