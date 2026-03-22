import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["auckland"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Auckland | TML Agency",
  description: "TML offers expert website development services in Auckland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development auckland", "website development agency auckland", "website development company auckland"],
};

export default function WebsiteDevelopmentInAucklandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
