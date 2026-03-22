import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Indore | TML Agency",
  description: "TML offers expert social media marketing services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing indore", "social media marketing agency indore", "social media marketing company indore"],
};

export default function SocialmediaInIndorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
