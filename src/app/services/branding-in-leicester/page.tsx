import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leicester"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Leicester | TML Agency",
  description: "TML offers expert branding services in Leicester. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding leicester", "branding agency leicester", "branding company leicester"],
};

export default function BrandingInLeicesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
