import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Sunshine Coast | TML Agency",
  description: "TML offers expert social media marketing services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing sunshine coast", "social media marketing agency sunshine coast", "social media marketing company sunshine coast"],
};

export default function SocialMediaInSunshineCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
