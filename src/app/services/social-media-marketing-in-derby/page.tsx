import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derby"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Derby | TML Agency",
  description: "TML offers expert social media marketing services in Derby. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing derby", "social media marketing agency derby", "social media marketing company derby"],
};

export default function SocialMediaInDerbyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
