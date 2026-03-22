import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["peterborough"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Peterborough | TML Agency",
  description: "TML offers expert social media marketing services in Peterborough. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing peterborough", "social media marketing agency peterborough", "social media marketing company peterborough"],
};

export default function SocialMediaInPeterboroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
