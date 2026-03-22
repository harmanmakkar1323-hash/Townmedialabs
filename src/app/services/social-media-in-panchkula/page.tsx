import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Panchkula | TML Agency",
  description: "TML offers expert social media marketing services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing panchkula", "social media marketing agency panchkula", "social media marketing company panchkula"],
};

export default function SocialmediaInPanchkulaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
