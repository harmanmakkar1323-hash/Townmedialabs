import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Ipswich | TML Agency",
  description: "TML offers expert social media marketing services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing ipswich", "social media marketing agency ipswich", "social media marketing company ipswich"],
};

export default function SocialMediaInIpswichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
