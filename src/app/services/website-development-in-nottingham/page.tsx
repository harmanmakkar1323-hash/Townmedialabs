import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nottingham"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Nottingham | TML Agency",
  description: "TML offers expert website development services in Nottingham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development nottingham", "website development agency nottingham", "website development company nottingham"],
};

export default function WebsiteDevelopmentInNottinghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
