import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milwaukee"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Milwaukee | TML Agency",
  description: "TML offers expert social media marketing services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing milwaukee", "social media marketing agency milwaukee", "social media marketing company milwaukee"],
};

export default function SocialMediaInMilwaukeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
