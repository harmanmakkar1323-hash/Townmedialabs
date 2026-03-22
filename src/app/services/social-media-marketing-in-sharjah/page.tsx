import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sharjah"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Sharjah | TML Agency",
  description: "TML offers expert social media marketing services in Sharjah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing sharjah", "social media marketing agency sharjah", "social media marketing company sharjah"],
};

export default function SocialMediaInSharjahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
