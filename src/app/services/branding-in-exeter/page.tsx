import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Exeter | TML Agency",
  description: "TML offers expert branding services in Exeter. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding exeter", "branding agency exeter", "branding company exeter"],
};

export default function BrandingInExeterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
