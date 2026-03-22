import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["palmerston_north"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Palmerston North | TML Agency",
  description: "TML offers expert social media marketing services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing palmerston north", "social media marketing agency palmerston north", "social media marketing palmerston north nz"],
};

export default function SocialMediaMarketingInPalmerstonNorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
