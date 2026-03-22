import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Ipswich | TML Agency",
  description: "TML offers expert website development services in Ipswich. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development ipswich", "website development agency ipswich", "website development company ipswich"],
};

export default function WebsiteDevelopmentInIpswichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
