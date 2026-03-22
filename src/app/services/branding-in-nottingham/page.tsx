import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nottingham"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Nottingham | TML Agency",
  description: "TML offers expert branding services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding nottingham", "branding agency nottingham", "branding company nottingham"],
};

export default function BrandingInNottinghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
