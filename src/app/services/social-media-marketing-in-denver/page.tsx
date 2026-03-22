import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["denver"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Denver | TML Agency",
  description: "TML offers expert social media marketing services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing denver", "social media marketing agency denver", "social media marketing company denver"],
};

export default function SocialMediaInDenverPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
