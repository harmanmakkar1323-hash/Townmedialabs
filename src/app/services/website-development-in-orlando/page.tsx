import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["orlando"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Orlando | TML Agency",
  description: "TML offers expert website development services in Orlando. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development orlando", "website development agency orlando", "website development company orlando"],
};

export default function WebsiteDevelopmentInOrlandoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
