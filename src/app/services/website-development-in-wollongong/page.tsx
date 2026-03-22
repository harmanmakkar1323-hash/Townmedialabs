import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Wollongong | TML Agency",
  description: "TML offers expert website development services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development wollongong", "website development agency wollongong", "website development company wollongong"],
};

export default function WebsiteDevelopmentInWollongongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
