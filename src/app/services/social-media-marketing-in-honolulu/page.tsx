import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Honolulu | TML Agency",
  description: "TML offers expert social media marketing services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing honolulu", "social media marketing agency honolulu", "social media marketing company honolulu"],
};

export default function SocialMediaInHonoluluPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
