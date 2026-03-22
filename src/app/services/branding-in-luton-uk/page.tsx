import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Luton | TML Agency",
  description: "TML offers expert branding services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding luton", "branding agency luton", "branding company luton"],
};

export default function BrandingInLutonUkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
