import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Sunderland | TML Agency",
  description: "TML offers expert social media marketing services in Sunderland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing sunderland", "social media marketing agency sunderland", "social media marketing company sunderland"],
};

export default function SocialMediaInSunderlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
