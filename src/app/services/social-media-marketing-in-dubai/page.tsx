import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dubai"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Dubai | TML Agency",
  description: "TML offers expert social media marketing services in Dubai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing dubai", "social media marketing agency dubai", "social media marketing company dubai"],
};

export default function SocialMediaInDubaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
