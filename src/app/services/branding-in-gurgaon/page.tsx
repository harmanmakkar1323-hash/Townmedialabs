import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Gurgaon | TML Agency",
  description: "TML offers expert branding services in Gurgaon. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding gurgaon", "branding agency gurgaon", "branding company gurgaon"],
};

export default function BrandingInGurgaonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
