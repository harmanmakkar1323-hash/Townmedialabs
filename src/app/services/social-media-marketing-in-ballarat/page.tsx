import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ballarat"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Ballarat | TML Agency",
  description: "TML offers expert social media marketing services in Ballarat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing ballarat", "social media marketing agency ballarat", "social media marketing company ballarat"],
};

export default function SocialMediaInBallaratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
