import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Ras Al Khaimah | TML Agency",
  description: "TML offers expert website development services in Ras Al Khaimah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development ras al khaimah", "website development agency ras al khaimah", "website development company ras al khaimah"],
};

export default function WebsiteDevelopmentInRasAlKhaimahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
