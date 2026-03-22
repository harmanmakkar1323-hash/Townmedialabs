import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Delhi | TML Agency",
  description: "TML offers expert social media marketing services in Delhi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing delhi", "social media marketing agency delhi", "social media marketing company delhi"],
};

export default function SocialMediaMarketingInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
