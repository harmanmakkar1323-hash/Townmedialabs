import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in San Jose | TML Agency",
  description: "TML offers expert social media marketing services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing san jose", "social media marketing agency san jose", "social media marketing company san jose"],
};

export default function SocialMediaInSanJosePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
