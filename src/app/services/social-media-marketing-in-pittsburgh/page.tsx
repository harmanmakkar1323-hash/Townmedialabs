import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Pittsburgh | TML Agency",
  description: "TML offers expert social media marketing services in Pittsburgh. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing pittsburgh", "social media marketing agency pittsburgh", "social media marketing company pittsburgh"],
};

export default function SocialMediaInPittsburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
