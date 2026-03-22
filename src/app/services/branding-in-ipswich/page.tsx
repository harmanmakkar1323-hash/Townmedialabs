import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Ipswich | TML Agency",
  description: "TML offers expert branding services in Ipswich. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding ipswich", "branding agency ipswich", "branding company ipswich"],
};

export default function BrandingInIpswichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
