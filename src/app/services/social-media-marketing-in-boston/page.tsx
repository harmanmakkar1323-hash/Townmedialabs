import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Boston | TML Agency",
  description: "TML offers expert social media marketing services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing boston", "social media marketing agency boston", "social media marketing company boston"],
};

export default function SocialMediaInBostonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
