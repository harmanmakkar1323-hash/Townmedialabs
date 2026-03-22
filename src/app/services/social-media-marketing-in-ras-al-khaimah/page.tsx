import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Ras Al Khaimah | TML Agency",
  description: "TML offers expert social media marketing services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing ras al khaimah", "social media marketing agency ras al khaimah", "social media marketing company ras al khaimah"],
};

export default function SocialMediaInRasAlKhaimahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
