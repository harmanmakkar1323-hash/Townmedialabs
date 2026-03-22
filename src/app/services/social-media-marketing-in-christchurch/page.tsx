import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Christchurch | TML Agency",
  description: "TML offers expert social media marketing services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing christchurch", "social media marketing agency christchurch", "social media marketing christchurch nz"],
};

export default function SocialMediaMarketingInChristchurchPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
