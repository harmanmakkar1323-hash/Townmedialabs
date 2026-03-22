import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Wellington | TML Agency",
  description: "TML offers expert social media marketing services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing wellington", "social media marketing agency wellington", "social media marketing wellington nz"],
};

export default function SocialMediaMarketingInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
