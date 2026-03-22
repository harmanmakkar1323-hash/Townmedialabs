import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Birmingham | TML Agency",
  description: "TML offers expert branding services in Birmingham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding birmingham", "branding agency birmingham", "branding company birmingham"],
};

export default function BrandingInBirminghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
