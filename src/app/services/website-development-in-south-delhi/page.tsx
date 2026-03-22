import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in South Delhi | TML Agency",
  description: "TML offers expert website development services in South Delhi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development south delhi", "website development agency south delhi", "website development company south delhi"],
};

export default function WebsitedevelopmentInSouthDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
