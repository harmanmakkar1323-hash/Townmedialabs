import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Zirakpur | TML Agency",
  description: "TML offers expert social media marketing services in Zirakpur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing zirakpur", "social media marketing agency zirakpur", "social media marketing company zirakpur"],
};

export default function SocialMediaMarketingInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
