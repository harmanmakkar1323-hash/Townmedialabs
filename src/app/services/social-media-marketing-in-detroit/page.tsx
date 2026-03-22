import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Detroit | TML Agency",
  description: "TML offers expert social media marketing services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing detroit", "social media marketing agency detroit", "social media marketing company detroit"],
};

export default function SocialMediaInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
