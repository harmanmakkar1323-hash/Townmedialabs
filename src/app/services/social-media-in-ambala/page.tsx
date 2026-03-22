import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Ambala | TML Agency",
  description: "TML offers expert social media marketing services in Ambala. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing ambala", "social media marketing agency ambala", "social media marketing company ambala"],
};

export default function SocialmediaInAmbalaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
