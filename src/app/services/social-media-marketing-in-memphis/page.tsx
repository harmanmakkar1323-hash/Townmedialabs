import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Memphis | TML Agency",
  description: "TML offers expert social media marketing services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing memphis", "social media marketing agency memphis", "social media marketing company memphis"],
};

export default function SocialMediaInMemphisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
