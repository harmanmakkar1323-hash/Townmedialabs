import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Patiala | TML Agency",
  description: "TML offers expert social media marketing services in Patiala. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing patiala", "social media marketing agency patiala", "social media marketing company patiala"],
};

export default function SocialmediaInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
