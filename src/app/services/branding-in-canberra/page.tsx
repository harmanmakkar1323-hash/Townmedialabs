import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Canberra | TML Agency",
  description: "TML offers expert branding services in Canberra. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding canberra", "branding agency canberra", "branding company canberra"],
};

export default function BrandingInCanberraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
