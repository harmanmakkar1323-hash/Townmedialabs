import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Gurgaon | TML Agency",
  description: "TML offers expert website development services in Gurgaon. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development gurgaon", "website development agency gurgaon", "website development company gurgaon"],
};

export default function WebsitedevelopmentInGurgaonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
