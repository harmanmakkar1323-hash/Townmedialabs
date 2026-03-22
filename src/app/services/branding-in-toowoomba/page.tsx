import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Toowoomba | TML Agency",
  description: "TML offers expert branding services in Toowoomba. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding toowoomba", "branding agency toowoomba", "branding company toowoomba"],
};

export default function BrandingInToowoombaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
