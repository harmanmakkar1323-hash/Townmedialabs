import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Bangalore | TML Agency",
  description: "TML offers expert website development services in Bangalore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development bangalore", "website development agency bangalore", "website development company bangalore"],
};

export default function WebsitedevelopmentInBangalorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
