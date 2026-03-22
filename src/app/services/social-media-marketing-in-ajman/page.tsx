import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Ajman | TML Agency",
  description: "TML offers expert social media marketing services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing ajman", "social media marketing agency ajman", "social media marketing company ajman"],
};

export default function SocialMediaInAjmanPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
