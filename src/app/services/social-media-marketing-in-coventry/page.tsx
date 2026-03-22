import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coventry"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Coventry | TML Agency",
  description: "TML offers expert social media marketing services in Coventry. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing coventry", "social media marketing agency coventry", "social media marketing company coventry"],
};

export default function SocialMediaInCoventryPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
