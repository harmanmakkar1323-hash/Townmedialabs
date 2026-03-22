import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Mohali | TML Agency",
  description: "TML offers expert website development services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development mohali", "website development agency mohali", "website development company mohali"],
};

export default function WebsitedevelopmentInMohaliPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
