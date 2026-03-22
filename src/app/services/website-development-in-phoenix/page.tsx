import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Phoenix | TML Agency",
  description: "TML offers expert website development services in Phoenix. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development phoenix", "website development agency phoenix", "website development company phoenix"],
};

export default function WebsiteDevelopmentInPhoenixPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
