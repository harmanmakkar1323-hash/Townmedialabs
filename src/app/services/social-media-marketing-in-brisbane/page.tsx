import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Brisbane | TML Agency",
  description: "TML offers expert social media marketing services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing brisbane", "social media marketing agency brisbane", "social media marketing company brisbane"],
};

export default function SocialMediaInBrisbanePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
