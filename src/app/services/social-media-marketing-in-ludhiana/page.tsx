import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Ludhiana | TML Agency",
  description: "TML offers expert social media marketing services in Ludhiana. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing ludhiana", "social media marketing agency ludhiana", "social media marketing company ludhiana"],
};

export default function SocialMediaMarketingInLudhianaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
