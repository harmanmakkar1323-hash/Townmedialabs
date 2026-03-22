import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Hyderabad | TML Agency",
  description: "TML offers expert social media marketing services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing hyderabad", "social media marketing agency hyderabad", "social media marketing company hyderabad"],
};

export default function SocialmediaInHyderabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
