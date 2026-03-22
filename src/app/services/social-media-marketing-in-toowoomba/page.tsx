import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Toowoomba | TML Agency",
  description: "TML offers expert social media marketing services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing toowoomba", "social media marketing agency toowoomba", "social media marketing company toowoomba"],
};

export default function SocialMediaInToowoombaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
