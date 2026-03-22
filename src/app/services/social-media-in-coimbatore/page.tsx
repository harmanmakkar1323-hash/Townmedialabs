import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Coimbatore | TML Agency",
  description: "TML offers expert social media marketing services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing coimbatore", "social media marketing agency coimbatore", "social media marketing company coimbatore"],
};

export default function SocialmediaInCoimbatorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
