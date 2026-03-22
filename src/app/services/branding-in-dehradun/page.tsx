import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Dehradun | TML Agency",
  description: "TML offers expert branding services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding dehradun", "branding agency dehradun", "branding company dehradun"],
};

export default function BrandingInDehradunPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
