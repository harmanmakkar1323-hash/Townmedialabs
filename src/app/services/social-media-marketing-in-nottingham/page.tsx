import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nottingham"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Nottingham | TML Agency",
  description: "TML offers expert social media marketing services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing nottingham", "social media marketing agency nottingham", "social media marketing company nottingham"],
};

export default function SocialMediaInNottinghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
