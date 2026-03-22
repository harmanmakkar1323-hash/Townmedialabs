import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sheffield"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Sheffield | TML Agency",
  description: "TML offers expert social media marketing services in Sheffield. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing sheffield", "social media marketing agency sheffield", "social media marketing company sheffield"],
};

export default function SocialMediaInSheffieldPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
