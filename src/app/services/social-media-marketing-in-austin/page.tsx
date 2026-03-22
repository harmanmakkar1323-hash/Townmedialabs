import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Austin | TML Agency",
  description: "TML offers expert social media marketing services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing austin", "social media marketing agency austin", "social media marketing company austin"],
};

export default function SocialMediaInAustinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
