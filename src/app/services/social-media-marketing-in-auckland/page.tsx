import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["auckland"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Auckland | TML Agency",
  description: "TML offers expert social media marketing services in Auckland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing auckland", "social media marketing agency auckland", "social media marketing company auckland"],
};

export default function SocialMediaMarketingInAucklandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
