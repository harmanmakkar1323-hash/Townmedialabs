import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["belfast"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Belfast | TML Agency",
  description: "TML offers expert social media marketing services in Belfast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing belfast", "social media marketing agency belfast", "social media marketing company belfast"],
};

export default function SocialMediaInBelfastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
