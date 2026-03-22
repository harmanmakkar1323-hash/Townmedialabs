import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dallas"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Dallas | TML Agency",
  description: "TML offers expert social media marketing services in Dallas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing dallas", "social media marketing agency dallas", "social media marketing company dallas"],
};

export default function SocialMediaInDallasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
