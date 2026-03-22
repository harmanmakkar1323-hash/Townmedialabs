import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boise"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Boise | TML Agency",
  description: "TML offers expert social media marketing services in Boise. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing boise", "social media marketing agency boise", "social media marketing company boise"],
};

export default function SocialMediaInBoisePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
