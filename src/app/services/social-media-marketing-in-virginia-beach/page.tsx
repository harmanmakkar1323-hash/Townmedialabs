import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Virginia Beach | TML Agency",
  description: "TML offers expert social media marketing services in Virginia Beach. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing virginia beach", "social media marketing agency virginia beach", "social media marketing company virginia beach"],
};

export default function SocialMediaInVirginiaBeachPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
