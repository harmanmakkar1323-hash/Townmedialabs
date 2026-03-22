import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Umm Al Quwain | TML Agency",
  description: "TML offers expert website development services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development umm al quwain", "website development agency umm al quwain", "website development company umm al quwain"],
};

export default function WebsiteDevelopmentInUmmAlQuwainPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
