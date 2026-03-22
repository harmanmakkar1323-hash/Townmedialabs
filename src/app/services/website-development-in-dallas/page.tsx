import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dallas"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Dallas | TML Agency",
  description: "TML offers expert website development services in Dallas. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development dallas", "website development agency dallas", "website development company dallas"],
};

export default function WebsiteDevelopmentInDallasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
