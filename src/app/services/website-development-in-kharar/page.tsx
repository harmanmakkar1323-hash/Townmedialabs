import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Kharar | TML Agency",
  description: "TML offers expert website development services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development kharar", "website development agency kharar", "website development company kharar"],
};

export default function WebsitedevelopmentInKhararPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
