import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Launceston | TML Agency",
  description: "TML offers expert branding services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding launceston", "branding agency launceston", "branding company launceston"],
};

export default function BrandingInLauncestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
