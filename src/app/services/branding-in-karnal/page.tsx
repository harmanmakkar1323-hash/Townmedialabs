import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Karnal | TML Agency",
  description: "TML offers expert branding services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding karnal", "branding agency karnal", "branding company karnal"],
};

export default function BrandingInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
