import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leeds"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Leeds | TML Agency",
  description: "TML offers expert social media marketing services in Leeds. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing leeds", "social media marketing agency leeds", "social media marketing company leeds"],
};

export default function SocialMediaInLeedsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
