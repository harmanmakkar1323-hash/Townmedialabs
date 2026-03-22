import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Baltimore | TML Agency",
  description: "TML offers expert social media marketing services in Baltimore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing baltimore", "social media marketing agency baltimore", "social media marketing company baltimore"],
};

export default function SocialMediaInBaltimorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
