import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in San Jose | TML Agency",
  description: "TML offers expert website development services in San Jose. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development san jose", "website development agency san jose", "website development company san jose"],
};

export default function WebsiteDevelopmentInSanJosePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
