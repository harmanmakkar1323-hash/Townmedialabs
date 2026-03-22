import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leicester"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Leicester | TML Agency",
  description: "TML offers expert social media marketing services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing leicester", "social media marketing agency leicester", "social media marketing company leicester"],
};

export default function SocialMediaInLeicesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
