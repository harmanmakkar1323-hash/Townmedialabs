import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sharjah"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Sharjah | TML Agency",
  description: "TML offers expert website development services in Sharjah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development sharjah", "website development agency sharjah", "website development company sharjah"],
};

export default function WebsiteDevelopmentInSharjahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
