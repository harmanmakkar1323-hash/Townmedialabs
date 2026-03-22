import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Omaha | TML Agency",
  description: "TML offers expert social media marketing services in Omaha. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing omaha", "social media marketing agency omaha", "social media marketing company omaha"],
};

export default function SocialMediaInOmahaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
