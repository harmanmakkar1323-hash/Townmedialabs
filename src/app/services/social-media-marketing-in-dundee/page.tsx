import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dundee"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Dundee | TML Agency",
  description: "TML offers expert social media marketing services in Dundee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing dundee", "social media marketing agency dundee", "social media marketing company dundee"],
};

export default function SocialMediaInDundeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
