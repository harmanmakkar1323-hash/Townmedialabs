import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Charlotte | TML Agency",
  description: "TML offers expert social media marketing services in Charlotte. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing charlotte", "social media marketing agency charlotte", "social media marketing company charlotte"],
};

export default function SocialMediaInCharlottePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
