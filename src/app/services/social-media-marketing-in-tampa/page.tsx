import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tampa"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Tampa | TML Agency",
  description: "TML offers expert social media marketing services in Tampa. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing tampa", "social media marketing agency tampa", "social media marketing company tampa"],
};

export default function SocialMediaInTampaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
