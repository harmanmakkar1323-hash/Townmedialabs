import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["al_ain"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Al Ain | TML Agency",
  description: "TML offers expert branding services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding al ain", "branding agency al ain", "branding company al ain"],
};

export default function BrandingInAlAinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
