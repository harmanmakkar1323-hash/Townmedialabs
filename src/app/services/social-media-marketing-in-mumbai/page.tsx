import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Mumbai | TML Agency",
  description: "TML offers expert social media marketing services in Mumbai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing mumbai", "social media marketing agency mumbai", "social media marketing company mumbai"],
};

export default function SocialMediaMarketingInMumbaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
